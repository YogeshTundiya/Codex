"use client";

import { useEffect, useRef, useCallback } from "react";

interface InteractiveParticlesProps {
    particleCount?: number;
    particleColor?: string;
}

interface Particle {
    x: number;
    y: number;
    vx: number;
    vy: number;
    size: number;
}

export function InteractiveParticles({
    particleCount = 80,
    particleColor = "#3B82F6",
}: InteractiveParticlesProps) {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const particlesRef = useRef<Particle[]>([]);
    const mouseRef = useRef({ x: -1000, y: -1000 });
    const animationRef = useRef<number | undefined>(undefined);

    const initParticles = useCallback((width: number, height: number) => {
        const particles: Particle[] = [];

        for (let i = 0; i < particleCount; i++) {
            particles.push({
                x: Math.random() * width,
                y: Math.random() * height,
                // Random velocity for constant movement
                vx: (Math.random() - 0.5) * 0.8,
                vy: (Math.random() - 0.5) * 0.8,
                size: Math.random() * 2 + 2,
            });
        }

        particlesRef.current = particles;
    }, [particleCount]);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        let width = window.innerWidth;
        let height = window.innerHeight;

        const resize = () => {
            width = window.innerWidth;
            height = window.innerHeight;
            canvas.width = width;
            canvas.height = height;
            if (particlesRef.current.length === 0) {
                initParticles(width, height);
            }
        };
        resize();
        initParticles(width, height);

        // Mouse tracking
        const handleMouseMove = (e: MouseEvent) => {
            mouseRef.current = { x: e.clientX, y: e.clientY };
        };

        window.addEventListener("mousemove", handleMouseMove);
        window.addEventListener("resize", resize);

        // Animation loop
        const animate = () => {
            ctx.clearRect(0, 0, width, height);

            const particles = particlesRef.current;
            const mouse = mouseRef.current;
            const connectionDistance = 150;
            const mouseRadius = 100;

            // Update particles
            for (let i = 0; i < particles.length; i++) {
                const p = particles[i];

                // Mouse interaction - push away
                const dx = mouse.x - p.x;
                const dy = mouse.y - p.y;
                const dist = Math.sqrt(dx * dx + dy * dy);

                if (dist < mouseRadius && dist > 0) {
                    const force = (mouseRadius - dist) / mouseRadius;
                    p.vx -= (dx / dist) * force * 2;
                    p.vy -= (dy / dist) * force * 2;
                }

                // Apply velocity
                p.x += p.vx;
                p.y += p.vy;

                // Bounce off edges
                if (p.x < 0) { p.x = 0; p.vx *= -1; }
                if (p.x > width) { p.x = width; p.vx *= -1; }
                if (p.y < 0) { p.y = 0; p.vy *= -1; }
                if (p.y > height) { p.y = height; p.vy *= -1; }

                // Slow down after mouse push
                p.vx *= 0.99;
                p.vy *= 0.99;

                // Maintain minimum speed for constant movement
                const speed = Math.sqrt(p.vx * p.vx + p.vy * p.vy);
                const minSpeed = 0.3;
                if (speed < minSpeed) {
                    const angle = Math.atan2(p.vy, p.vx);
                    p.vx = Math.cos(angle) * minSpeed;
                    p.vy = Math.sin(angle) * minSpeed;
                }

                // Draw particle
                ctx.beginPath();
                ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
                ctx.fillStyle = particleColor;
                ctx.globalAlpha = 0.7;
                ctx.fill();
            }

            // Draw connections
            ctx.strokeStyle = particleColor;
            ctx.lineWidth = 1;

            for (let i = 0; i < particles.length; i++) {
                for (let j = i + 1; j < particles.length; j++) {
                    const p1 = particles[i];
                    const p2 = particles[j];
                    const dx = p1.x - p2.x;
                    const dy = p1.y - p2.y;
                    const dist = Math.sqrt(dx * dx + dy * dy);

                    if (dist < connectionDistance) {
                        const opacity = 1 - (dist / connectionDistance);
                        ctx.globalAlpha = opacity * 0.25;
                        ctx.beginPath();
                        ctx.moveTo(p1.x, p1.y);
                        ctx.lineTo(p2.x, p2.y);
                        ctx.stroke();
                    }
                }
            }

            ctx.globalAlpha = 1;
            animationRef.current = requestAnimationFrame(animate);
        };

        animate();

        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
            window.removeEventListener("resize", resize);
            if (animationRef.current) {
                cancelAnimationFrame(animationRef.current);
            }
        };
    }, [initParticles, particleColor]);

    return (
        <canvas
            ref={canvasRef}
            className="fixed inset-0 z-0 pointer-events-none"
            style={{ background: "transparent" }}
        />
    );
}
