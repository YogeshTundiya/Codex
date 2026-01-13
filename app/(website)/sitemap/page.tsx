"use client";

import { Navbar } from "@/components/layout/Navbar";
import Link from "next/link";
import { services } from "@/lib/data";
import { ArrowUpRight, Home, Info, Mail, FileText, Shield, Map } from "lucide-react";
import { motion } from "framer-motion";

export default function SitemapPage() {
    const sitemapSections = [
        {
            title: "Main",
            links: [
                { name: "Home", href: "/", icon: Home },
                { name: "About Us", href: "/about", icon: Info },
                { name: "Contact", href: "/contact", icon: Mail },
            ]
        },
        {
            title: "Services",
            links: services.map(s => ({ name: s.title, href: `/services/${s.slug}` }))
        },
        {
            title: "Legal",
            links: [
                { name: "Privacy Policy", href: "/privacy-policy", icon: Shield },
                { name: "Sitemap", href: "/sitemap", icon: Map },
            ]
        }
    ];

    return (
        <main className="min-h-screen bg-[#0A0A0B]">
            <Navbar />

            {/* Hero */}
            <section className="pt-32 pb-16 px-6">
                <div className="container mx-auto max-w-4xl">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
                            Sitemap
                        </h1>
                        <p className="text-xl text-gray-500">
                            Navigate through all pages on our website.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Sitemap Grid */}
            <section className="pb-32 px-6">
                <div className="container mx-auto max-w-4xl">
                    <div className="grid md:grid-cols-3 gap-8">
                        {sitemapSections.map((section, sectionIndex) => (
                            <motion.div
                                key={section.title}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: sectionIndex * 0.1 }}
                            >
                                <h2 className="text-sm font-medium text-gray-500 uppercase tracking-wider mb-6">
                                    {section.title}
                                </h2>
                                <ul className="space-y-3">
                                    {section.links.map((link, linkIndex) => (
                                        <motion.li
                                            key={link.href}
                                            initial={{ opacity: 0, x: -10 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ delay: sectionIndex * 0.1 + linkIndex * 0.05 }}
                                        >
                                            <Link
                                                href={link.href}
                                                className="group flex items-center justify-between py-2 text-gray-300 hover:text-white transition-colors"
                                            >
                                                <span>{link.name}</span>
                                                <ArrowUpRight
                                                    size={14}
                                                    className="opacity-0 group-hover:opacity-100 transition-opacity text-blue-400"
                                                />
                                            </Link>
                                        </motion.li>
                                    ))}
                                </ul>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
}
