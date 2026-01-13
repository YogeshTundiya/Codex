"use client";

import { Navbar } from "@/components/layout/Navbar";
import Link from "next/link";
import { motion } from "framer-motion";
import { Shield, Database, Lock, Eye, Trash2, Cookie, Mail, ChevronRight } from "lucide-react";

const sections = [
    {
        id: "introduction",
        icon: Shield,
        title: "Introduction",
        content: `Welcome to CodeX Infotech. We respect your privacy and are committed to protecting your personal data. This privacy policy will inform you as to how we look after your personal data when you visit our website and tell you about your privacy rights and how the law protects you.`
    },
    {
        id: "data-collection",
        icon: Database,
        title: "Data We Collect",
        content: `We may collect, use, store and transfer different kinds of personal data about you:`,
        list: [
            "Identity Data: first name, last name, username",
            "Contact Data: email address, phone numbers, address",
            "Technical Data: IP address, browser type, device information",
            "Usage Data: how you use our website and services",
            "Marketing Data: your preferences for receiving communications"
        ]
    },
    {
        id: "data-usage",
        icon: Eye,
        title: "How We Use Your Data",
        content: `We will only use your personal data when the law allows us to:`,
        list: [
            "To perform our contract with you",
            "For our legitimate business interests",
            "To comply with legal obligations",
            "With your consent for marketing purposes"
        ]
    },
    {
        id: "data-security",
        icon: Lock,
        title: "Data Security",
        content: `We have implemented appropriate security measures to prevent your personal data from being accidentally lost, used, or accessed in an unauthorized way. We limit access to your personal data to those who have a business need to know.`
    },
    {
        id: "your-rights",
        icon: Shield,
        title: "Your Rights",
        content: `Under data protection laws, you have rights including:`,
        list: [
            "Access your personal data",
            "Correct inaccurate data",
            "Request deletion of your data",
            "Object to processing",
            "Request data portability",
            "Withdraw consent at any time"
        ]
    },
    {
        id: "data-retention",
        icon: Trash2,
        title: "Data Retention",
        content: `We retain your personal data only for as long as necessary to fulfill the purposes we collected it for, including legal, accounting, or reporting requirements.`
    },
    {
        id: "cookies",
        icon: Cookie,
        title: "Cookies & Tracking",
        content: `We use cookies to improve your experience on our website. You can set your browser to refuse cookies, but some parts of the website may not function properly without them.`
    },
    {
        id: "contact",
        icon: Mail,
        title: "Contact Us",
        content: `If you have any questions about this privacy policy, please contact us.`,
        contact: true
    }
];

export default function PrivacyPolicyPage() {
    return (
        <main className="min-h-screen bg-[#0A0A0B]">
            <Navbar />

            {/* Hero */}
            <section className="pt-32 pb-12 px-6">
                <div className="container mx-auto max-w-4xl">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
                            Privacy Policy
                        </h1>
                        <p className="text-gray-500 text-lg">
                            Last updated: January 2026
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Quick Navigation */}
            <section className="pb-12 px-6">
                <div className="container mx-auto max-w-4xl">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="flex flex-wrap gap-2"
                    >
                        {sections.map((section) => (
                            <Link
                                key={section.id}
                                href={`#${section.id}`}
                                className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-gray-400 text-sm hover:bg-white/10 hover:text-white transition-all"
                            >
                                {section.title}
                            </Link>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Content */}
            <section className="pb-32 px-6">
                <div className="container mx-auto max-w-4xl space-y-12">
                    {sections.map((section, index) => (
                        <motion.div
                            key={section.id}
                            id={section.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.05 }}
                            className="scroll-mt-32"
                        >
                            <div className="flex items-start gap-4 mb-4">
                                <div className="w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center shrink-0 mt-1">
                                    <section.icon size={18} className="text-blue-400" />
                                </div>
                                <h2 className="text-2xl font-bold text-white">
                                    {index + 1}. {section.title}
                                </h2>
                            </div>

                            <div className="pl-14">
                                <p className="text-gray-400 leading-relaxed mb-4">
                                    {section.content}
                                </p>

                                {section.list && (
                                    <ul className="space-y-2">
                                        {section.list.map((item, i) => (
                                            <li key={i} className="flex items-start gap-3 text-gray-400">
                                                <ChevronRight size={16} className="text-blue-400 mt-1 shrink-0" />
                                                <span>{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                )}

                                {section.contact && (
                                    <div className="mt-6 p-6 rounded-xl bg-white/[0.02] border border-white/5">
                                        <p className="text-white font-semibold mb-2">CodeX Infotech</p>
                                        <p className="text-gray-400">
                                            Email:{" "}
                                            <a href="mailto:codexinfotechh@gmail.com" className="text-blue-400 hover:text-blue-300 transition-colors">
                                                codexinfotechh@gmail.com
                                            </a>
                                        </p>
                                        <p className="text-gray-400">Phone: +91 7862003533</p>
                                    </div>
                                )}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>
        </main>
    );
}
