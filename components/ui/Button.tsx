import { cn } from "@/lib/utils";
import { ButtonHTMLAttributes, ReactNode } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode;
    variant?: "primary" | "secondary" | "outline";
    className?: string;
}

export function Button({
    children,
    variant = "primary",
    className,
    ...props
}: ButtonProps) {
    const variants = {
        primary: "bg-[#2A2A2D] text-white hover:bg-[#1C1C1F] shadow-md",
        secondary: "bg-white/50 text-slate-800 hover:bg-white/70 backdrop-blur-sm",
        outline: "border border-white/300 text-slate-700 hover:bg-[#141416]",
    };

    return (
        <button
            className={cn(
                "px-6 py-3 rounded-full font-semibold transition-all duration-300 active:scale-95 flex items-center justify-center",
                variants[variant],
                className
            )}
            {...props}
        >
            {children}
        </button>
    );
}
