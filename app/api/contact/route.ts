import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

// Rate limiting - simple in-memory store (resets on server restart)
const rateLimitMap = new Map<string, { count: number; lastReset: number }>();
const RATE_LIMIT = 5; // Max 5 submissions
const RATE_LIMIT_WINDOW = 60 * 60 * 1000; // Per hour

function isRateLimited(ip: string): boolean {
    const now = Date.now();
    const record = rateLimitMap.get(ip);

    if (!record || now - record.lastReset > RATE_LIMIT_WINDOW) {
        rateLimitMap.set(ip, { count: 1, lastReset: now });
        return false;
    }

    if (record.count >= RATE_LIMIT) {
        return true;
    }

    record.count++;
    return false;
}

// Validate email format
function isValidEmail(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Sanitize input to prevent injection
function sanitize(str: string): string {
    return str
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#x27;");
}

export async function POST(request: NextRequest) {
    try {
        // Get client IP for rate limiting
        const ip = request.headers.get("x-forwarded-for") ||
            request.headers.get("x-real-ip") ||
            "unknown";

        // Check rate limit
        if (isRateLimited(ip)) {
            return NextResponse.json(
                { error: "Too many requests. Please try again later." },
                { status: 429 }
            );
        }

        // Parse request body
        const body = await request.json();
        const { name, email, phone, service, message } = body;

        // Validate required fields
        if (!name || !email || !message) {
            return NextResponse.json(
                { error: "Name, email, and message are required." },
                { status: 400 }
            );
        }

        // Validate email format
        if (!isValidEmail(email)) {
            return NextResponse.json(
                { error: "Please provide a valid email address." },
                { status: 400 }
            );
        }

        // Check environment variables
        if (!process.env.GMAIL_USER || !process.env.GMAIL_APP_PASSWORD) {
            console.error("Missing email configuration in environment variables");
            return NextResponse.json(
                { error: "Server configuration error. Please try again later." },
                { status: 500 }
            );
        }

        // Create transporter with Gmail SMTP
        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.GMAIL_USER,
                pass: process.env.GMAIL_APP_PASSWORD,
            },
        });

        // Sanitize all inputs
        const safeName = sanitize(name);
        const safeEmail = sanitize(email);
        const safePhone = sanitize(phone || "Not provided");
        const safeService = sanitize(service || "Not specified");
        const safeMessage = sanitize(message);

        // Simple, minimal HTML email template
        const htmlContent = `
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body style="margin: 0; padding: 0; background-color: #ffffff; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; color: #333;">
    <table width="100%" cellpadding="0" cellspacing="0" style="max-width: 560px; margin: 0 auto; padding: 40px 20px;">
        <tr>
            <td>
                <!-- Header -->
                <p style="margin: 0 0 24px 0; font-size: 13px; color: #888; text-transform: uppercase; letter-spacing: 1px;">
                    New inquiry from website
                </p>
                
                <!-- Main heading -->
                <h1 style="margin: 0 0 8px 0; font-size: 22px; font-weight: 600; color: #111;">
                    ${safeName}
                </h1>
                <p style="margin: 0 0 32px 0; font-size: 14px; color: #666;">
                    wants to connect about <strong style="color: #333;">${safeService}</strong>
                </p>
                
                <!-- Divider -->
                <hr style="border: none; border-top: 1px solid #eee; margin: 0 0 24px 0;">
                
                <!-- Message -->
                <p style="margin: 0 0 8px 0; font-size: 12px; color: #888; text-transform: uppercase; letter-spacing: 0.5px;">
                    Message
                </p>
                <p style="margin: 0 0 32px 0; font-size: 15px; line-height: 1.6; color: #333; white-space: pre-wrap;">${safeMessage}</p>
                
                <!-- Divider -->
                <hr style="border: none; border-top: 1px solid #eee; margin: 0 0 24px 0;">
                
                <!-- Contact details -->
                <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom: 32px;">
                    <tr>
                        <td width="50%" style="padding: 0 0 12px 0; vertical-align: top;">
                            <p style="margin: 0 0 4px 0; font-size: 12px; color: #888;">Email</p>
                            <a href="mailto:${safeEmail}" style="font-size: 14px; color: #0066cc; text-decoration: none;">${safeEmail}</a>
                        </td>
                        <td width="50%" style="padding: 0 0 12px 0; vertical-align: top;">
                            <p style="margin: 0 0 4px 0; font-size: 12px; color: #888;">Phone</p>
                            <a href="tel:${safePhone}" style="font-size: 14px; color: #333; text-decoration: none;">${safePhone}</a>
                        </td>
                    </tr>
                </table>
                
                <!-- Reply button -->
                <a href="mailto:${safeEmail}?subject=Re: ${safeService} Inquiry" 
                   style="display: inline-block; padding: 12px 24px; background-color: #111; color: #fff; font-size: 14px; font-weight: 500; text-decoration: none; border-radius: 6px;">
                    Reply to ${safeName}
                </a>
                
                <!-- Footer -->
                <p style="margin: 40px 0 0 0; font-size: 12px; color: #aaa;">
                    Received ${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata', dateStyle: 'long', timeStyle: 'short' })}
                </p>
            </td>
        </tr>
    </table>
</body>
</html>
        `;

        // Plain text fallback
        const textContent = `
New inquiry from website
------------------------

${safeName} wants to connect about ${safeService}

Message:
${safeMessage}

---
Email: ${safeEmail}
Phone: ${safePhone}

Received: ${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })}
        `;

        // Email options
        const mailOptions = {
            from: `"CodeX Infotech Website" <${process.env.GMAIL_USER}>`,
            to: process.env.GMAIL_USER, // Send to yourself
            replyTo: email, // Reply goes to the person who submitted
            subject: `🚀 New Inquiry from ${safeName} - ${safeService || "General"}`,
            text: textContent,
            html: htmlContent,
        };

        // Send email
        await transporter.sendMail(mailOptions);

        // Optionally send confirmation email to the user
        if (process.env.SEND_CONFIRMATION === "true") {
            const confirmationHtml = `
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
</head>
<body style="margin: 0; padding: 0; background-color: #0a0a0b; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;">
    <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #0a0a0b; padding: 40px 20px;">
        <tr>
            <td align="center">
                <table width="600" cellpadding="0" cellspacing="0" style="background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%); border-radius: 16px; overflow: hidden;">
                    <tr>
                        <td style="background: linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%); padding: 30px 40px; text-align: center;">
                            <h1 style="margin: 0; color: #ffffff; font-size: 24px;">Thank You, ${safeName}! 🎉</h1>
                        </td>
                    </tr>
                    <tr>
                        <td style="padding: 40px; color: #e5e7eb; font-size: 16px; line-height: 1.6;">
                            <p>We've received your message and appreciate you reaching out to us.</p>
                            <p>Our team will review your inquiry and get back to you within <strong>24 hours</strong>.</p>
                            <p style="margin-top: 24px;">Best regards,<br><strong>The CodeX Infotech Team</strong></p>
                        </td>
                    </tr>
                </table>
            </td>
        </tr>
    </table>
</body>
</html>
            `;

            await transporter.sendMail({
                from: `"CodeX Infotech" <${process.env.GMAIL_USER}>`,
                to: email,
                subject: "Thank you for contacting CodeX Infotech!",
                html: confirmationHtml,
            });
        }

        return NextResponse.json(
            { message: "Email sent successfully!" },
            { status: 200 }
        );

    } catch (error) {
        console.error("Error sending email:", error);
        return NextResponse.json(
            { error: "Failed to send message. Please try again later." },
            { status: 500 }
        );
    }
}
