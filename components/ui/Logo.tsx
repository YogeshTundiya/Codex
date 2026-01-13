"use client";

import Link from "next/link";
import Image from "next/image";

interface LogoProps {
    size?: "sm" | "md" | "lg";
    className?: string;
}

// Logo Mark using the PNG image (icon only)
export function LogoMark({ className = "", size = 40 }: { className?: string; size?: number }) {
    return (
        <div className={`relative flex-shrink-0 ${className}`} style={{ width: size, height: size }}>
            <Image
                src="/images/logo.png"
                alt="CodeX Infotech"
                fill
                className="object-contain"
                priority
            />
        </div>
    );
}

// Main Logo component - text-based for crisp rendering
export function Logo({ size = "md", className = "" }: LogoProps) {
    const sizes = {
        sm: {
            brand: "text-xl",
            tagline: "text-[7px]",
            lineWidth: "w-full",
            gap: "gap-0.5"
        },
        md: {
            brand: "text-2xl",
            tagline: "text-[8px]",
            lineWidth: "w-full",
            gap: "gap-1"
        },
        lg: {
            brand: "text-3xl",
            tagline: "text-[9px]",
            lineWidth: "w-full",
            gap: "gap-1"
        },
    };

    const s = sizes[size];

    return (
        <Link href="/" className={`group inline-flex flex-col items-center ${s.gap} ${className}`}>
            {/* Brand Name */}
            <div className="flex items-baseline leading-none">
                <span className={`${s.brand} font-bold text-white tracking-tight`}>
                    Code
                </span>
                <span className={`${s.brand} font-bold tracking-tight bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent`}>
                    X
                </span>
            </div>
            {/* Full-width centered cyan line */}
            <div className={`${s.lineWidth} h-[2px] bg-gradient-to-r from-cyan-400 to-blue-500`} />
            {/* Tagline - centered */}
            <span className={`${s.tagline} font-medium tracking-[0.3em] text-gray-400 uppercase`}>
                Infotech
            </span>
        </Link>
    );
}

// Footer version - larger with more prominence
export function LogoLarge({ className = "" }: { className?: string }) {
    return (
        <Link href="/" className={`group inline-flex flex-col items-center gap-1 ${className}`}>
            {/* Brand Name */}
            <div className="flex items-baseline leading-none">
                <span className="text-3xl font-bold text-white tracking-tight">
                    Code
                </span>
                <span className="text-3xl font-bold tracking-tight bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                    X
                </span>
            </div>
            {/* Full-width centered cyan line */}
            <div className="w-full h-[2px] bg-gradient-to-r from-cyan-400 to-blue-500" />
            {/* Tagline - centered */}
            <span className="text-[10px] font-medium tracking-[0.3em] text-gray-400 uppercase">
                Infotech
            </span>
        </Link>
    );
}

// Simple logo with just the image
export function LogoSimple({ size = 48, className = "" }: { size?: number; className?: string }) {
    return (
        <Link href="/" className={className}>
            <div className="relative" style={{ width: size, height: size }}>
                <Image
                    src="/images/logo.png"
                    alt="CodeX Infotech"
                    fill
                    className="object-contain"
                    priority
                />
            </div>
        </Link>
    );
}
