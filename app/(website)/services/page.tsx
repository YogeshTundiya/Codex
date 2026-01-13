"use client";

import { services } from "@/lib/data";
import { Navbar } from "@/components/layout/Navbar";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { useRef } from "react";

const serviceColors = [
    { bg: "bg-amber-500", text: "text-amber-400", border: "border-amber-500/30", gradient: "from-amber-500/20" },
    { bg: "bg-blue-500", text: "text-blue-400", border: "border-blue-500/30", gradient: "from-blue-500/20" },
    { bg: "bg-purple-500", text: "text-purple-400", border: "border-purple-500/30", gradient: "from-purple-500/20" },
    { bg: "bg-emerald-500", text: "text-emerald-400", border: "border-emerald-500/30", gradient: "from-emerald-500/20" },
    { bg: "bg-rose-500", text: "text-rose-400", border: "border-rose-500/30", gradient: "from-rose-500/20" },
];

export default function ServicesPage() {
    return (
        <main className="min-h-screen bg-[#0A0A0B]">
            <Navbar />

            {/* Hero Section */}
            <section className="pt-32 pb-32 md:pb-40 px-6 min-h-[60vh] flex items-center">
                <div className="container mx-auto max-w-6xl">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="text-center"
                    >
                        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6">
                            Our Services
                        </h1>
                        <p className="text-lg text-gray-500 max-w-2xl mx-auto mb-10">
                            Comprehensive digital solutions tailored to transform your business.
                        </p>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.4 }}
                            className="text-gray-600 text-sm"
                        >
                            ↓ Scroll to explore
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* Services - Scroll Animated Cards */}
            <section className="pb-16 px-6">
                <div className="container mx-auto max-w-5xl space-y-8">
                    {services.map((service, index) => (
                        <ServiceCard
                            key={service.id}
                            service={service}
                            index={index}
                            colors={serviceColors[index]}
                        />
                    ))}
                </div>
            </section>

            {/* Simple Process Section */}
            <section className="py-24 px-6 border-t border-white/5">
                <div className="container mx-auto max-w-6xl">
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">How We Work</h2>
                        <p className="text-gray-500">Simple, transparent, effective.</p>
                    </motion.div>

                    <div className="flex flex-col md:flex-row items-stretch gap-4">
                        {[
                            { num: "1", title: "Discuss", desc: "Share your vision", color: "blue" },
                            { num: "2", title: "Plan", desc: "Map the solution", color: "purple" },
                            { num: "3", title: "Build", desc: "Develop & iterate", color: "emerald" },
                            { num: "4", title: "Launch", desc: "Deploy & support", color: "amber" },
                        ].map((step, i) => (
                            <motion.div
                                key={step.num}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                whileHover={{ scale: 1.02, y: -5 }}
                                className={cn(
                                    "flex-1 text-center py-8 px-4 bg-white/[0.02] rounded-xl border border-white/5 cursor-pointer transition-all duration-300",
                                    "hover:border-white/20 hover:bg-white/[0.04]",
                                    "group"
                                )}
                            >
                                <div className={cn(
                                    "text-3xl font-bold mb-2 transition-colors duration-300",
                                    "text-white/10 group-hover:text-white/30",
                                    step.color === "blue" && "group-hover:text-blue-500/50",
                                    step.color === "purple" && "group-hover:text-purple-500/50",
                                    step.color === "emerald" && "group-hover:text-emerald-500/50",
                                    step.color === "amber" && "group-hover:text-amber-500/50"
                                )}>
                                    {step.num}
                                </div>
                                <h3 className="text-lg font-semibold text-white mb-1 group-hover:text-white transition-colors">{step.title}</h3>
                                <p className="text-gray-500 text-sm group-hover:text-gray-400 transition-colors">{step.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Stats */}
            <section className="py-16 px-6 border-t border-white/5">
                <div className="container mx-auto max-w-6xl">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {[
                            { value: "50+", label: "Projects" },
                            { value: "98%", label: "Satisfaction" },
                            { value: "5+", label: "Years" },
                            { value: "24/7", label: "Support" },
                        ].map((stat, i) => (
                            <motion.div
                                key={stat.label}
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="text-center"
                            >
                                <div className="text-4xl font-bold text-white mb-1">{stat.value}</div>
                                <div className="text-gray-500 text-sm">{stat.label}</div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-24 px-6 border-t border-white/5">
                <div className="container mx-auto max-w-3xl text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="flex flex-col items-center"
                    >
                        <h2 className="text-4xl font-bold text-white mb-4">Ready to Start?</h2>
                        <p className="text-gray-500 mb-8">Let's discuss your project.</p>
                        <Link href="/contact">
                            <Button className="px-8 py-4 rounded-full bg-white text-black font-medium hover:bg-blue-400 hover:text-white transition-all">
                                Get in Touch
                            </Button>
                        </Link>
                    </motion.div>
                </div>
            </section>
        </main>
    );
}

function ServiceCard({ service, index, colors }: { service: any; index: number; colors: any }) {
    const ref = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "center center"]
    });

    const y = useTransform(scrollYProgress, [0, 1], [100, 0]);
    const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 1]);
    const scale = useTransform(scrollYProgress, [0, 1], [0.95, 1]);

    return (
        <motion.div
            ref={ref}
            style={{ y, opacity, scale }}
        >
            <Link href={`/services/${service.slug}`}>
                <div className="group relative bg-[#111113] rounded-2xl p-8 border border-white/10 hover:border-white/20 transition-all duration-300 overflow-hidden">
                    {/* Subtle gradient on hover */}
                    <div className={cn(
                        "absolute top-0 right-0 w-64 h-64 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-3xl -z-0",
                        `bg-gradient-to-bl ${colors?.gradient} to-transparent`
                    )} />

                    <div className="relative z-10 flex flex-col md:flex-row md:items-center gap-6">
                        {/* Left: Icon & Number */}
                        <div className="flex items-center gap-4 md:w-48 shrink-0">
                            <div className={cn(
                                "w-14 h-14 rounded-xl flex items-center justify-center",
                                colors?.bg
                            )}>
                                <service.icon size={28} className="text-white" />
                            </div>
                            <span className={cn("text-sm font-mono", colors?.text)}>
                                0{index + 1}
                            </span>
                        </div>

                        {/* Middle: Title & Description */}
                        <div className="flex-1">
                            <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-white transition-colors">
                                {service.title}
                            </h3>
                            <p className="text-gray-500 text-sm leading-relaxed">
                                {service.description}
                            </p>
                        </div>

                        {/* Right: Features & CTA */}
                        <div className="md:text-right md:w-72 shrink-0">
                            <div className="flex flex-wrap md:justify-end gap-2 mb-4">
                                {service.features?.slice(0, 3).map((feature: string) => (
                                    <span
                                        key={feature}
                                        className="px-3 py-1.5 rounded-lg bg-white/5 text-gray-400 text-xs font-medium"
                                    >
                                        {feature}
                                    </span>
                                ))}
                            </div>
                            <div className="flex items-center md:justify-end gap-2 text-sm font-medium text-white group-hover:gap-3 transition-all">
                                <span>Explore</span>
                                <ArrowRight size={16} className={cn("transition-transform group-hover:translate-x-1", colors?.text)} />
                            </div>
                        </div>
                    </div>
                </div>
            </Link>
        </motion.div>
    );
}
