"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown, ArrowRight, Code, Smartphone, Database, Shield, BarChart3, Zap } from "lucide-react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { Logo, LogoMark } from "@/components/ui/Logo";

const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
];

const services = [
    {
        name: "Automation",
        href: "/services/automation",
        description: "Streamline workflows & save time",
        icon: Zap
    },
    {
        name: "Web Development",
        href: "/services/web-development",
        description: "Modern, high-performance websites",
        icon: Code
    },
    {
        name: "App Development",
        href: "/services/app-development",
        description: "iOS & Android mobile solutions",
        icon: Smartphone
    },
    {
        name: "Data Recovery",
        href: "/services/data-recovery",
        description: "Secure & reliable data restoration",
        icon: Shield
    },
    {
        name: "Data Analysis",
        href: "/services/data-analyst",
        description: "Actionable business insights",
        icon: BarChart3
    },
];

interface NavbarProps {
    lightTextOnTransparent?: boolean;
}

export function Navbar({ lightTextOnTransparent = false }: NavbarProps) {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isServicesHovered, setIsServicesHovered] = useState(false);
    const pathname = usePathname();

    // Handle scroll effect
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Lock body scroll when mobile menu is open
    useEffect(() => {
        if (isMobileMenuOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
    }, [isMobileMenuOpen]);

    // Determine text colors based on state
    const isTransparent = !isScrolled && lightTextOnTransparent && !isMobileMenuOpen;

    // For Dark Theme: Always light text unless on a specific light section (which we don't really have now).
    // Scrolled: Dark background, Light text.
    // Transparent: Dark background (body), Light text.
    const textColorClass = "text-gray-300 hover:text-white";
    const logoColorClass = "text-white";

    return (
        <>
            <motion.nav
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className={cn(
                    "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
                    isScrolled
                        ? "bg-[#0A0A0B]/90 backdrop-blur-xl border-b border-white/5 py-4 shadow-sm"
                        : "bg-transparent py-6"
                )}
            >
                <div className="container mx-auto px-6 flex items-center justify-between">
                    {/* Logo */}
                    <div className="relative z-50">
                        <Logo size="md" />
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className={cn("text-sm font-medium transition-colors duration-300", textColorClass)}
                            >
                                {link.name}
                            </Link>
                        ))}

                        {/* Services Dropdown Trigger */}
                        <div
                            className="relative"
                            onMouseEnter={() => setIsServicesHovered(true)}
                            onMouseLeave={() => setIsServicesHovered(false)}
                        >
                            <button
                                className={cn("flex items-center gap-1.5 text-sm font-medium transition-colors duration-300", textColorClass)}
                            >
                                Services
                                <ChevronDown
                                    size={14}
                                    className={cn("transition-transform duration-300", isServicesHovered ? "rotate-180" : "")}
                                />
                            </button>

                            {/* Desktop Dropdown - Premium Dark Design */}
                            <AnimatePresence>
                                {isServicesHovered && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: 10 }}
                                        transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
                                        className="absolute top-full left-1/2 -translate-x-1/2 pt-5 w-[380px]"
                                    >
                                        {/* Glass Panel */}
                                        <div className="bg-[#0A0A0B]/95 backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden shadow-2xl shadow-black/40">

                                            {/* Subtle top gradient line */}
                                            <div className="h-[2px] bg-gradient-to-r from-transparent via-blue-500/50 to-transparent"></div>

                                            {/* Services List */}
                                            <div className="p-3">
                                                {services.map((service, index) => (
                                                    <Link
                                                        key={service.name}
                                                        href={service.href}
                                                        className="group relative flex items-center gap-4 p-3 rounded-xl hover:bg-gradient-to-r hover:from-blue-500/10 hover:to-transparent transition-all duration-300"
                                                    >
                                                        {/* Left accent line on hover */}
                                                        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[3px] h-0 group-hover:h-8 bg-gradient-to-b from-blue-400 to-blue-600 rounded-full transition-all duration-300"></div>

                                                        {/* Icon Container */}
                                                        <div className="relative w-10 h-10 rounded-xl bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/5 flex items-center justify-center text-gray-400 group-hover:text-blue-400 group-hover:border-blue-500/20 transition-all duration-300">
                                                            <service.icon size={18} strokeWidth={1.5} />
                                                        </div>

                                                        {/* Content */}
                                                        <div className="flex-1">
                                                            <div className="text-sm font-medium text-white/90 group-hover:text-white transition-colors flex items-center gap-2">
                                                                {service.name}
                                                                <ArrowRight size={14} className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-blue-400" />
                                                            </div>
                                                            <div className="text-xs text-gray-500 group-hover:text-gray-400 transition-colors mt-0.5">
                                                                {service.description}
                                                            </div>
                                                        </div>
                                                    </Link>
                                                ))}
                                            </div>

                                            {/* Footer with CTA */}
                                            <div className="px-4 py-3 border-t border-white/5 bg-gradient-to-r from-blue-500/5 to-transparent">
                                                <Link
                                                    href="/contact"
                                                    className="flex items-center justify-between group"
                                                >
                                                    <div>
                                                        <span className="text-xs font-medium text-gray-300 group-hover:text-white transition-colors">
                                                            Need something custom?
                                                        </span>
                                                        <span className="text-xs text-gray-500 ml-2">
                                                            Let's talk →
                                                        </span>
                                                    </div>
                                                    <div className="w-7 h-7 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 group-hover:bg-blue-500 group-hover:text-white transition-all duration-300">
                                                        <ArrowRight size={14} />
                                                    </div>
                                                </Link>
                                            </div>
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    </div>

                    {/* CTA Button */}
                    <div className="hidden md:block">
                        <Link
                            href="/contact"
                            className={cn(
                                "px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 transform hover:scale-105 active:scale-95",
                                isTransparent
                                    ? "bg-white text-slate-900 hover:bg-blue-50"
                                    : "bg-[#141416] text-white hover:bg-[#1C1C1F]"
                            )}
                        >
                            Get in Touch
                        </Link>
                    </div>

                    {/* Mobile Menu Toggle */}
                    <button
                        onClick={() => setIsMobileMenuOpen(true)}
                        className={cn("md:hidden relative z-50 p-2 transition-colors", logoColorClass)}
                    >
                        <Menu size={24} />
                    </button>
                </div>
            </motion.nav >

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {
                    isMobileMenuOpen && (
                        <motion.div
                            initial={{ opacity: 0, y: "100%" }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: "100%" }}
                            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                            className="fixed inset-0 z-[60] bg-white flex flex-col"
                        >
                            {/* Mobile Menu Header */}
                            <div className="flex items-center justify-between px-6 py-6 border-b border-gray-200">
                                <Link href="/" onClick={() => setIsMobileMenuOpen(false)} className="inline-block">
                                    <div className="relative" style={{ width: 100, height: 45 }}>
                                        <Image
                                            src="/images/logo2.png"
                                            alt="CodeX Infotech"
                                            fill
                                            className="object-contain invert"
                                            priority
                                        />
                                    </div>
                                </Link>
                                <button
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className="p-2 rounded-full hover:bg-[#1C1C1F] transition-colors"
                                >
                                    <X size={28} className="text-slate-900" />
                                </button>
                            </div>

                            {/* Mobile Menu Content */}
                            <div className="flex-1 flex flex-col justify-center px-8 overflow-y-auto">
                                <div className="flex flex-col gap-6">
                                    {navLinks.map((link, i) => (
                                        <motion.div
                                            key={link.name}
                                            initial={{ opacity: 0, x: -20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ delay: 0.1 + i * 0.1 }}
                                        >
                                            <Link
                                                href={link.href}
                                                onClick={() => setIsMobileMenuOpen(false)}
                                                className="text-4xl font-bold font-heading text-slate-900 hover:text-blue-600 transition-colors"
                                            >
                                                {link.name}
                                            </Link>
                                        </motion.div>
                                    ))}

                                    <motion.div
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: 0.3 }}
                                        className="py-6 border-t border-white/100 mt-4"
                                    >
                                        <p className="text-sm font-medium text-gray-400 uppercase tracking-wider mb-4">Our Services</p>
                                        <div className="flex flex-col gap-3">
                                            {services.map((service) => (
                                                <Link
                                                    key={service.name}
                                                    href={service.href}
                                                    onClick={() => setIsMobileMenuOpen(false)}
                                                    className="text-xl font-medium text-gray-600 hover:text-slate-900"
                                                >
                                                    {service.name}
                                                </Link>
                                            ))}
                                        </div>
                                    </motion.div>

                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.4 }}
                                        className="mt-4"
                                    >
                                        <Link
                                            href="/contact"
                                            onClick={() => setIsMobileMenuOpen(false)}
                                            className="block w-full py-4 bg-[#141416] text-white text-center rounded-2xl font-bold text-lg active:scale-95 transition-transform"
                                        >
                                            Let's Talk
                                        </Link>
                                    </motion.div>
                                </div>
                            </div>
                        </motion.div>
                    )
                }
            </AnimatePresence >
        </>
    );
}
