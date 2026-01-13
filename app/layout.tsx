import { Montserrat, Nunito } from "next/font/google";
import type { Metadata } from "next";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  weight: ["600", "700"],
});

const nunito = Nunito({
  subsets: ["latin"],
  variable: "--font-nunito",
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: {
    default: "CodeX Infotech | Elevating Tech, Simplifying Future",
    template: "%s | CodeX Infotech",
  },
  description: "CodeX Infotech is a premier technology partner specializing in Home & Office Automation, Web & App Development, Data Recovery, and Data Analysis. We deliver innovative IT solutions to streamline your future.",
  keywords: ["Automation", "Web Development", "App Development", "Data Recovery", "Data Analysis", "IT Solutions", "Smart Home", "Business Intelligence", "CodeX Infotech"],
  authors: [{ name: "CodeX Infotech" }],
  creator: "CodeX Infotech",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://codexinfotech.com",
    title: "CodeX Infotech | Elevating Tech, Simplifying Future",
    description: "Innovative IT solutions tailored to your needs. From automation to data analysis, we simplify the future.",
    siteName: "CodeX Infotech",
  },
  twitter: {
    card: "summary_large_image",
    title: "CodeX Infotech",
    description: "Elevating Tech, Simplifying Future. Expert IT services for modern businesses.",
    creator: "@codexinfotech",
  },
  icons: {
    icon: [
      { url: '/images/favicon.svg', type: 'image/svg+xml' },
    ],
    shortcut: ['/images/favicon.svg'],
    apple: ['/images/favicon.svg'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${montserrat.variable} ${nunito.variable} antialiased font-body`}
      >
        {children}
      </body>
    </html>
  );
}
