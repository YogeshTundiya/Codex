"use client";

import { Navbar } from "@/components/layout/Navbar";
import { GlassCard } from "@/components/ui/GlassCard";
import { Award, Users, Calendar, Coffee, ArrowRight, Shield, Zap, Rocket, Target, Globe, Code, Heart, Cpu, HardDrive, BarChart } from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { Button } from "@/components/ui/Button";

const stats = [
    { label: "Projects", value: "150+", suffix: "Completed" },
    { label: "Clients", value: "50+", suffix: "Worldwide" },
    { label: "Experience", value: "4+", suffix: "Years" },
];

const services = [
    { name: "Automation", icon: Cpu },
    { name: "Web Development", icon: Globe },
    { name: "App Development", icon: Code },
    { name: "Data Recovery", icon: HardDrive },
    { name: "Data Analytics", icon: BarChart },
];

export default function AboutPage() {
    return (
        <main className="min-h-screen bg-[#0A0A0B] overflow-x-hidden">
            <Navbar />

            {/* Hero - Minimal Editorial Style */}
            <section className="pt-32 pb-16 px-6">
                <div className="container mx-auto max-w-5xl">
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1 }}
                    >
                        <p className="text-blue-400 font-medium mb-4">About CodeX Infotech</p>
                        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white leading-[0.9] mb-8">
                            We craft digital
                            <br />
                            <span className="text-gray-600">experiences that</span>
                            <br />
                            matter.
                        </h1>
                    </motion.div>
                </div>
            </section>

            {/* Stats Strip */}
            <section className="py-8 px-6 border-y border-white/5">
                <div className="container mx-auto max-w-5xl">
                    <div className="flex flex-wrap justify-between gap-8">
                        {stats.map((stat, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="flex items-baseline gap-3"
                            >
                                <span className="text-4xl md:text-5xl font-bold text-white">{stat.value}</span>
                                <span className="text-gray-500 text-sm uppercase tracking-wider">{stat.suffix}</span>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Who We Are - Magazine Layout */}
            <section className="py-24 px-6">
                <div className="container mx-auto max-w-6xl">
                    <div className="grid lg:grid-cols-12 gap-12 lg:gap-20">
                        {/* Left Column */}
                        <motion.div
                            className="lg:col-span-5"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 leading-tight">
                                A team built on
                                <span className="block text-blue-400">passion & precision</span>
                            </h2>

                            <div className="space-y-6">
                                <p className="text-gray-400 text-lg leading-relaxed">
                                    CodeX Infotech is a full-service digital agency that transforms ideas into reality. We specialize in crafting beautiful, functional, and scalable digital solutions.
                                </p>
                                <p className="text-gray-400 text-lg leading-relaxed">
                                    From smart automation to data recovery, web development to business analytics – our team combines creativity with technical expertise to deliver products that drive real business results.
                                </p>
                            </div>
                        </motion.div>

                        {/* Right Column - Services List */}
                        <motion.div
                            className="lg:col-span-7"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                        >
                            <p className="text-gray-500 text-sm uppercase tracking-widest mb-8">What we do</p>
                            <div className="space-y-0">
                                {services.map((service, index) => (
                                    <Link
                                        key={service.name}
                                        href={`/services/${service.name.toLowerCase().replace(' ', '-')}`}
                                        className="group"
                                    >
                                        <div className="flex items-center justify-between py-6 border-b border-white/5 hover:border-blue-500/30 transition-colors">
                                            <div className="flex items-center gap-4">
                                                <span className="text-gray-600 text-sm font-mono">0{index + 1}</span>
                                                <span className="text-2xl md:text-3xl font-medium text-white group-hover:text-blue-400 transition-colors">
                                                    {service.name}
                                                </span>
                                            </div>
                                            <ArrowRight className="text-gray-600 group-hover:text-blue-400 group-hover:translate-x-2 transition-all" size={24} />
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Philosophy - Clean Cards */}
            <section className="py-24 px-6 bg-[#0D0D10]">
                <div className="container mx-auto max-w-6xl">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="mb-16"
                    >
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">How we think</h2>
                        <p className="text-gray-500 text-xl max-w-2xl">
                            Our approach is built on principles that have guided us from day one.
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-3 gap-1">
                        {[
                            {
                                num: "01",
                                title: "Simplicity first",
                                desc: "We take complex problems and distill them into elegant solutions. If it's not simple, it's not finished."
                            },
                            {
                                num: "02",
                                title: "Speed with quality",
                                desc: "We move fast but never compromise on craft. Modern tools and processes let us do both."
                            },
                            {
                                num: "03",
                                title: "Built to last",
                                desc: "We design for tomorrow. Our code scales, adapts, and evolves with your business."
                            }
                        ].map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="group p-8 md:p-10 bg-white/[0.02] hover:bg-white/[0.04] border-l border-white/5 first:border-l-0 transition-colors"
                            >
                                <span className="text-blue-500 font-mono text-sm">{item.num}</span>
                                <h3 className="text-2xl font-bold text-white mt-4 mb-4 group-hover:text-blue-300 transition-colors">
                                    {item.title}
                                </h3>
                                <p className="text-gray-500 leading-relaxed">
                                    {item.desc}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Values - Horizontal Scroll on Mobile */}
            <section className="py-24 px-6">
                <div className="container mx-auto max-w-6xl">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-16"
                    >
                        <div>
                            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">What we value</h2>
                            <p className="text-gray-500 text-xl max-w-xl">
                                The principles that shape every decision we make.
                            </p>
                        </div>
                    </motion.div>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            { title: "Innovation", desc: "Pushing boundaries to create future-ready solutions.", color: "from-amber-500 to-orange-500" },
                            { title: "Integrity", desc: "Building trust through transparency and honesty.", color: "from-emerald-500 to-teal-500" },
                            { title: "Excellence", desc: "Delivering quality in every line of code.", color: "from-blue-500 to-cyan-500" },
                            { title: "Partnership", desc: "Working as an extension of your team.", color: "from-purple-500 to-pink-500" },
                        ].map((value, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="group relative"
                            >
                                <div className="p-8 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-white/10 transition-all h-full">
                                    <div className={cn(
                                        "w-12 h-1 rounded-full bg-gradient-to-r mb-6 group-hover:w-16 transition-all duration-300",
                                        value.color
                                    )}></div>
                                    <h3 className="text-xl font-bold text-white mb-3">{value.title}</h3>
                                    <p className="text-gray-500 text-sm leading-relaxed">{value.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Why Choose - Two Column */}
            <section className="py-24 px-6 bg-[#0D0D10]">
                <div className="container mx-auto max-w-6xl">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                                Why work
                                <span className="block text-gray-600">with us?</span>
                            </h2>
                            <p className="text-gray-400 text-lg mb-8">
                                We don't just build software—we build partnerships that drive success. Here's what sets us apart.
                            </p>
                            <Link href="/contact">
                                <Button className="bg-white text-black hover:bg-blue-400 hover:text-white px-8 py-4 rounded-full font-medium transition-all">
                                    Let's talk <ArrowRight size={16} className="ml-2" />
                                </Button>
                            </Link>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="space-y-6"
                        >
                            {[
                                { icon: Globe, title: "End-to-End Solutions", desc: "From concept to deployment, we handle every aspect." },
                                { icon: Zap, title: "Cutting-Edge Tech", desc: "Latest technologies to keep your product ahead." },
                                { icon: Heart, title: "Dedicated Support", desc: "24/7 maintenance to keep systems running." },
                                { icon: Target, title: "Results-Driven", desc: "Measurable outcomes that impact your bottom line." },
                            ].map((item, index) => (
                                <div key={index} className="flex gap-5 group">
                                    <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center shrink-0 group-hover:bg-blue-500/20 transition-colors">
                                        <item.icon size={20} className="text-gray-500 group-hover:text-blue-400 transition-colors" />
                                    </div>
                                    <div>
                                        <h4 className="text-white font-semibold mb-1">{item.title}</h4>
                                        <p className="text-gray-500 text-sm">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* CTA - Minimal */}
            <section className="py-32 px-6">
                <div className="container mx-auto max-w-4xl text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-8 leading-tight">
                            Ready to start
                            <span className="block text-blue-400">something great?</span>
                        </h2>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link href="/contact">
                                <Button className="px-10 py-4 rounded-full bg-white text-black font-medium hover:bg-blue-400 hover:text-white transition-all">
                                    Start a project
                                </Button>
                            </Link>
                            <Link href="/services">
                                <Button variant="outline" className="px-10 py-4 rounded-full border-white/20 text-white hover:bg-white/5 transition-all">
                                    View services
                                </Button>
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>
        </main>
    );
}
