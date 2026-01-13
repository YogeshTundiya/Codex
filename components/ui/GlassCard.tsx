import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface GlassCardProps {
    children: ReactNode;
    className?: string;
    padding?: string; // e.g., "p-6"
    rounded?: string; // e.g., "rounded-2xl"
}

export function GlassCard({
    children,
    className,
    padding = "p-6",
    rounded = "rounded-3xl",
}: GlassCardProps) {
    return (
        <div
            className={cn(
                "glass-panel transition-all duration-300 hover:shadow-xl",
                padding,
                rounded,
                className
            )}
        >
            {children}
        </div>
    );
}
