"use client";

import { Navbar } from "@/components/layout/Navbar";
import { Button } from "@/components/ui/Button";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CheckCircle2, ArrowRight, Zap, Shield, Smartphone, Globe, BarChart, Cpu, HardDrive, Database, Layers, Lock, TrendingUp, Clock, Server, Cloud, Tablet, ArrowUpRight } from "lucide-react";
import { motion, useScroll, useTransform, useSpring, useInView } from "framer-motion";
import { useRef, useEffect, useState, use } from "react";
import { cn } from "@/lib/utils";
import { staticServicesData, ServiceData } from "@/lib/staticServicesData";

const API_URL = "http://localhost:3001";

const IconMap: Record<string, any> = {
    Zap, Shield, Smartphone, Globe, BarChart, Cpu, HardDrive, Database, Layers, Lock, TrendingUp, Clock, Server, Cloud, Tablet, CheckCircle2, ArrowRight
};

const serviceColors: Record<string, { bg: string; text: string; border: string }> = {
    automation: { bg: "bg-amber-500", text: "text-amber-400", border: "border-amber-500/30" },
    "web-development": { bg: "bg-blue-500", text: "text-blue-400", border: "border-blue-500/30" },
    "app-development": { bg: "bg-purple-500", text: "text-purple-400", border: "border-purple-500/30" },
    "data-recovery": { bg: "bg-emerald-500", text: "text-emerald-400", border: "border-emerald-500/30" },
    "data-analyst": { bg: "bg-rose-500", text: "text-rose-400", border: "border-rose-500/30" },
};

export default function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = use(params);
    const [service, setService] = useState<ServiceData | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch(`${API_URL}/services/${slug}`)
            .then(res => {
                if (!res.ok) throw new Error("Not found");
                return res.json();
            })
            .then(data => {
                setService(data);
                setLoading(false);
            })
            .catch(() => {
                const staticService = staticServicesData[slug];
                if (staticService) {
                    setService(staticService);
                } else {
                    setService(null);
                }
                setLoading(false);
            });
    }, [slug]);

    if (loading) {
        return (
            <div className="min-h-screen bg-[#0A0A0B] flex items-center justify-center">
                <div className="w-12 h-12 border-2 border-white/20 border-t-white rounded-full animate-spin"></div>
            </div>
        );
    }

    if (!service) {
        return notFound();
    }

    const colors = serviceColors[slug] || serviceColors.automation;

    return (
        <main className="min-h-screen bg-[#0A0A0B]">
            <Navbar />

            {/* Hero Section - Clean Editorial */}
            <section className="pt-32 pb-16 px-6">
                <div className="container mx-auto max-w-6xl">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className={cn("w-12 h-12 rounded-xl flex items-center justify-center mb-8", colors.bg)}>
                            {(() => {
                                const Icon = IconMap[service.features?.[0]?.icon] || Cpu;
                                return <Icon size={24} className="text-white" />;
                            })()}
                        </div>
                        <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight mb-6">
                            {service.title}
                        </h1>
                        <p className="text-xl text-gray-400 max-w-2xl leading-relaxed">
                            {service.description}
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Stats Strip */}
            <section className="py-12 px-6 border-y border-white/5">
                <div className="container mx-auto max-w-6xl">
                    <div className="flex flex-wrap gap-12 md:gap-20">
                        {service.stats.map((stat, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 15 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3 + i * 0.1, duration: 0.4 }}
                                className="flex items-baseline gap-3"
                            >
                                <Counter value={stat.value} delay={0.4 + i * 0.1} className="text-4xl font-bold text-white" />
                                <span className="text-gray-500 uppercase text-sm tracking-wider">{stat.label}</span>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Features Grid */}
            <section className="py-24 px-6">
                <div className="container mx-auto max-w-6xl">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="mb-16"
                    >
                        <h2 className="text-4xl font-bold text-white mb-4">Capabilities</h2>
                        <p className="text-gray-500 text-lg">What we bring to the table.</p>
                    </motion.div>

                    <div className="grid md:grid-cols-2 gap-6">
                        {service.features.map((feature, i) => {
                            const Icon = IconMap[feature.icon] || CheckCircle2;
                            return (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 }}
                                    className={cn(
                                        "p-8 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-white/10 transition-colors group",
                                        i === 0 && "md:col-span-2"
                                    )}
                                >
                                    <div className={cn(
                                        "w-10 h-10 rounded-lg flex items-center justify-center mb-6",
                                        colors.bg + "/20",
                                        colors.text
                                    )}>
                                        <Icon size={20} />
                                    </div>
                                    <h3 className={cn(
                                        "font-bold text-white mb-3",
                                        i === 0 ? "text-2xl" : "text-xl"
                                    )}>
                                        {feature.title}
                                    </h3>
                                    <p className="text-gray-400 leading-relaxed">{feature.desc}</p>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Sub-Services */}
            {service.subServices && (
                <section className="py-24 px-6 bg-[#0D0D10]">
                    <div className="container mx-auto max-w-6xl">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="mb-16"
                        >
                            <h2 className="text-4xl font-bold text-white mb-4">Our Solutions</h2>
                            <p className="text-gray-500 text-lg">Specialized services for your needs.</p>
                        </motion.div>

                        <div className="grid md:grid-cols-3 gap-6">
                            {service.subServices.map((sub, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 }}
                                    className="p-6 rounded-xl bg-white/[0.02] border border-white/5 hover:border-white/10 transition-colors group"
                                >
                                    <div className="flex items-center justify-between mb-4">
                                        <span className={cn("font-mono text-sm", colors.text)}>0{i + 1}</span>
                                        <ArrowUpRight size={16} className="text-gray-600 group-hover:text-white transition-colors" />
                                    </div>
                                    <h3 className="text-xl font-bold text-white mb-2">{sub.title}</h3>
                                    <p className="text-gray-500 text-sm leading-relaxed">{sub.desc}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {/* Process Section - Horizontal Scroll */}
            <ProcessSection process={service.process} colors={colors} />

            {/* Applications */}
            <section className="py-24 px-6">
                <div className="container mx-auto max-w-6xl">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="mb-16"
                    >
                        <h2 className="text-4xl font-bold text-white mb-4">Applications</h2>
                        <p className="text-gray-500 text-lg">Where our solutions make an impact.</p>
                    </motion.div>

                    <div className="grid md:grid-cols-3 gap-6">
                        {service.applications.map((app, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="group relative aspect-[4/3] rounded-2xl overflow-hidden"
                            >
                                <Image
                                    src={app.image}
                                    alt={app.title}
                                    fill
                                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                                <div className="absolute bottom-0 left-0 p-6">
                                    <h3 className="text-xl font-bold text-white">{app.title}</h3>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Tech Stack */}
            {service.techStack && (
                <TechStackSection items={service.techStack} colors={colors} />
            )}

            {/* CTA Section */}
            <section className="py-32 px-6 border-t border-white/5">
                <div className="container mx-auto max-w-4xl text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="flex flex-col items-center"
                    >
                        <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
                            Ready to get started?
                        </h2>
                        <p className="text-lg text-gray-500 mb-10 max-w-xl">
                            Let's discuss how we can help transform your business with {service.title.toLowerCase()}.
                        </p>
                        <Link href="/contact">
                            <Button className="px-8 py-4 rounded-full bg-white text-black font-medium hover:bg-blue-400 hover:text-white transition-all">
                                Start a Project
                            </Button>
                        </Link>
                    </motion.div>
                </div>
            </section>
        </main>
    );
}

function ProcessSection({ process, colors }: { process: any[]; colors: any }) {
    const targetRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
        offset: ["start start", "end end"]
    });

    const x = useTransform(scrollYProgress, [0, 1], ["0%", "-60%"]);

    return (
        <section ref={targetRef} className="relative h-[250vh] bg-[#0A0A0B]">
            <div className="sticky top-0 flex h-screen items-center overflow-hidden">
                <motion.div style={{ x }} className="flex gap-8 pl-6 md:pl-20">
                    <div className="shrink-0 w-[300px] md:w-[400px] flex flex-col justify-center pr-8">
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                            How we
                            <span className={cn("block", colors.text)}>work</span>
                        </h2>
                        <p className="text-gray-500">Our process from start to finish.</p>
                    </div>
                    {process.map((step, i) => (
                        <div
                            key={i}
                            className="shrink-0 w-[350px] md:w-[400px] bg-white/[0.02] border border-white/5 rounded-2xl p-8 flex flex-col"
                        >
                            <span className={cn("font-mono text-sm mb-auto", colors.text)}>
                                Step {step.step}
                            </span>
                            <div className="mt-12">
                                <h3 className="text-2xl font-bold text-white mb-3">{step.title}</h3>
                                <p className="text-gray-400 leading-relaxed">{step.desc}</p>
                            </div>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}

function TechStackSection({ items, colors }: { items: string[]; colors: any }) {
    return (
        <section className="py-24 px-6 bg-[#0D0D10]">
            <div className="container mx-auto max-w-6xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <h2 className="text-4xl font-bold text-white mb-4">Tech Stack</h2>
                    <p className="text-gray-500 text-lg">Technologies we use to build your solutions.</p>
                </motion.div>

                {/* Centered Grid */}
                <div className="flex flex-wrap justify-center gap-3">
                    {items.map((tech, i) => (
                        <motion.div
                            key={tech}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.05 }}
                            whileHover={{ y: -4, scale: 1.05 }}
                            className="px-6 py-3 rounded-xl bg-white/5 border border-white/10 text-white font-medium hover:bg-white/10 hover:border-white/20 transition-colors cursor-default"
                        >
                            {tech}
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

function Counter({ value, delay = 0, className }: { value: string; delay?: number; className?: string }) {
    const [startCount, setStartCount] = useState(false);

    const numMatch = value.match(/(\d+(\.\d+)?)/);
    const number = numMatch ? parseFloat(numMatch[0]) : 0;
    const prefix = value.split(numMatch ? numMatch[0] : "")[0] || "";
    const suffix = value.split(numMatch ? numMatch[0] : "")[1] || "";

    const motionValue = useSpring(0, { stiffness: 200, damping: 25 });

    useEffect(() => {
        const timer = setTimeout(() => {
            setStartCount(true);
            motionValue.set(number);
        }, delay * 1000);
        return () => clearTimeout(timer);
    }, [number, motionValue, delay]);

    const displayValue = useTransform(motionValue, (latest) => {
        if (Number.isInteger(number)) {
            return Math.round(latest).toString();
        }
        return latest.toFixed(1);
    });

    return (
        <span className={cn("inline-flex", className)}>
            {prefix}
            <motion.span>{displayValue}</motion.span>
            {suffix}
        </span>
    );
}
