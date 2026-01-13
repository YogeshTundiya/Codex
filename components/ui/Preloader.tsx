"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export function Preloader() {
    const [phase, setPhase] = useState<'initial' | 'reveal' | 'zoom' | 'exit' | 'done'>('initial');

    useEffect(() => {
        const timers: NodeJS.Timeout[] = [];

        // Step 1: Initial black screen (200ms)
        timers.push(setTimeout(() => setPhase('reveal'), 200));

        // Step 2: Logo visible (1800ms)
        timers.push(setTimeout(() => setPhase('zoom'), 2000));

        // Step 3: Logo zooms and fades (400ms)
        timers.push(setTimeout(() => setPhase('exit'), 2400));

        // Step 4: Background reveals with circle clip (800ms)
        timers.push(setTimeout(() => setPhase('done'), 3200));

        return () => timers.forEach(t => clearTimeout(t));
    }, []);

    if (phase === 'done') return null;

    const isRevealed = phase !== 'initial';
    const isZooming = phase === 'zoom' || phase === 'exit';
    const isExiting = phase === 'exit';

    return (
        <div
            className="fixed inset-0 z-[9999] bg-black flex items-center justify-center overflow-hidden"
            style={{
                clipPath: isExiting ? 'circle(0% at 50% 50%)' : 'circle(150% at 50% 50%)',
                transition: 'clip-path 0.8s cubic-bezier(0.76, 0, 0.24, 1)'
            }}
        >
            {/* Logo */}
            <div
                className="relative w-44 h-44 md:w-52 md:h-52 lg:w-60 lg:h-60"
                style={{
                    opacity: isZooming ? 0 : (isRevealed ? 1 : 0),
                    transform: isZooming
                        ? 'scale(1.5)'
                        : (isRevealed ? 'scale(1)' : 'scale(0.85)'),
                    transition: isZooming
                        ? 'all 0.4s cubic-bezier(0.22, 1, 0.36, 1)'
                        : 'all 0.7s cubic-bezier(0.22, 1, 0.36, 1)'
                }}
            >
                <Image
                    src="/images/logo.png"
                    alt="CodeX Infotech"
                    fill
                    className="object-contain"
                    priority
                />
            </div>
        </div>
    );
}
