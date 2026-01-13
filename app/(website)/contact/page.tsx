"use client";

import { Navbar } from "@/components/layout/Navbar";
import { InteractiveParticles } from "@/components/ui/InteractiveParticles";
import { Mail, MapPin, Phone, Send, User, MessageSquare, Briefcase, CheckCircle } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function ContactPage() {
    const [formState, setFormState] = useState({
        name: "",
        email: "",
        phone: "",
        service: "",
        message: "",
    });
    const [isSending, setIsSending] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");

    const services = [
        "Automation Solutions",
        "Web Development",
        "App Development",
        "Data Recovery",
        "Data Analytics",
        "Other"
    ];

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSending(true);
        setErrorMessage("");

        try {
            const response = await fetch("/api/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formState),
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.error || "Something went wrong");
            }

            setIsSuccess(true);

            // Reset after showing success
            setTimeout(() => {
                setFormState({ name: "", email: "", phone: "", service: "", message: "" });
                setIsSuccess(false);
            }, 4000);

        } catch (error) {
            console.error("Form submission error:", error);
            setErrorMessage(
                error instanceof Error
                    ? error.message
                    : "Failed to send message. Please try again."
            );
        } finally {
            setIsSending(false);
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormState({
            ...formState,
            [e.target.name]: e.target.value,
        });
    };

    return (
        <main className="min-h-screen bg-[#0A0A0B] relative overflow-hidden">
            {/* Interactive Particle Background */}
            <InteractiveParticles particleCount={150} particleColor="#60A5FA" />

            <Navbar />

            {/* Hero */}
            <section className="pt-32 pb-16 px-6 relative z-10">
                <div className="container mx-auto max-w-6xl">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-center mb-16"
                    >
                        <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
                            Get in Touch
                        </h1>
                        <p className="text-xl text-gray-500 max-w-2xl mx-auto">
                            Have a project in mind? Let's discuss how we can help bring your vision to life.
                        </p>
                    </motion.div>

                    <div className="grid lg:grid-cols-5 gap-12">

                        {/* Contact Info - Left Side */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.1 }}
                            className="lg:col-span-2 space-y-8"
                        >
                            <div>
                                <h2 className="text-2xl font-bold text-white mb-6">Contact Information</h2>
                                <p className="text-gray-500 mb-8">
                                    Fill out the form and our team will get back to you within 24 hours.
                                </p>
                            </div>

                            <div className="space-y-6">
                                <ContactInfo
                                    icon={Phone}
                                    label="Phone"
                                    value="+91 7862003533"
                                    href="tel:+917862003533"
                                />
                                <ContactInfo
                                    icon={Mail}
                                    label="Email"
                                    value="codexinfotechh@gmail.com"
                                    href="mailto:codexinfotechh@gmail.com"
                                />
                                <ContactInfo
                                    icon={MapPin}
                                    label="Location"
                                    value="India"
                                />
                            </div>

                            {/* Business Hours */}
                            <div className="pt-8 border-t border-white/10">
                                <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wider mb-4">
                                    Business Hours
                                </h3>
                                <div className="space-y-2 text-gray-400">
                                    <p>Monday - Saturday: 10:00 AM - 7:00 PM IST</p>
                                    <p>Sunday: Closed</p>
                                </div>
                            </div>
                        </motion.div>

                        {/* Contact Form - Right Side */}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.2 }}
                            className="lg:col-span-3"
                        >
                            <div className="bg-white/[0.02] border border-white/10 rounded-2xl p-8 md:p-10">
                                <AnimatePresence mode="wait">
                                    {isSuccess ? (
                                        <motion.div
                                            key="success"
                                            initial={{ opacity: 0, scale: 0.9 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            exit={{ opacity: 0, scale: 0.9 }}
                                            className="flex flex-col items-center justify-center py-16 text-center"
                                        >
                                            <motion.div
                                                initial={{ scale: 0 }}
                                                animate={{ scale: 1 }}
                                                transition={{ type: "spring", delay: 0.1 }}
                                                className="w-20 h-20 rounded-full bg-green-500/10 flex items-center justify-center mb-6"
                                            >
                                                <CheckCircle size={40} className="text-green-500" />
                                            </motion.div>
                                            <h3 className="text-2xl font-bold text-white mb-2">Message Sent!</h3>
                                            <p className="text-gray-500">We'll get back to you within 24 hours.</p>
                                        </motion.div>
                                    ) : (
                                        <motion.form
                                            key="form"
                                            onSubmit={handleSubmit}
                                            className="space-y-6"
                                        >
                                            {/* Name & Email Row */}
                                            <div className="grid md:grid-cols-2 gap-6">
                                                <FormInput
                                                    icon={User}
                                                    label="Full Name"
                                                    name="name"
                                                    type="text"
                                                    placeholder="John Doe"
                                                    value={formState.name}
                                                    onChange={handleChange}
                                                    required
                                                />
                                                <FormInput
                                                    icon={Mail}
                                                    label="Email Address"
                                                    name="email"
                                                    type="email"
                                                    placeholder="john@example.com"
                                                    value={formState.email}
                                                    onChange={handleChange}
                                                    required
                                                />
                                            </div>

                                            {/* Phone & Service Row */}
                                            <div className="grid md:grid-cols-2 gap-6">
                                                <FormInput
                                                    icon={Phone}
                                                    label="Phone Number"
                                                    name="phone"
                                                    type="tel"
                                                    placeholder="+91 XXXXX XXXXX"
                                                    value={formState.phone}
                                                    onChange={handleChange}
                                                />
                                                <div className="space-y-2">
                                                    <label className="text-sm font-medium text-gray-400">
                                                        Service Interested In
                                                    </label>
                                                    <div className="relative">
                                                        <Briefcase size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" />
                                                        <select
                                                            name="service"
                                                            value={formState.service}
                                                            onChange={handleChange}
                                                            className="w-full bg-white/5 border border-white/10 rounded-xl pl-12 pr-4 py-3.5 text-white appearance-none focus:border-blue-500 focus:outline-none transition-colors"
                                                        >
                                                            <option value="" className="bg-[#0A0A0B]">Select a service</option>
                                                            {services.map(service => (
                                                                <option key={service} value={service} className="bg-[#0A0A0B]">
                                                                    {service}
                                                                </option>
                                                            ))}
                                                        </select>
                                                    </div>
                                                </div>
                                            </div>

                                            {/* Message */}
                                            <div className="space-y-2">
                                                <label className="text-sm font-medium text-gray-400">
                                                    Your Message
                                                </label>
                                                <div className="relative">
                                                    <MessageSquare size={18} className="absolute left-4 top-4 text-gray-500" />
                                                    <textarea
                                                        name="message"
                                                        rows={5}
                                                        placeholder="Tell us about your project..."
                                                        value={formState.message}
                                                        onChange={handleChange}
                                                        required
                                                        className="w-full bg-white/5 border border-white/10 rounded-xl pl-12 pr-4 py-3.5 text-white placeholder:text-gray-600 resize-none focus:border-blue-500 focus:outline-none transition-colors"
                                                    />
                                                </div>
                                            </div>

                                            {/* Submit Button */}
                                            <motion.button
                                                type="submit"
                                                disabled={isSending}
                                                whileHover={{ scale: 1.01 }}
                                                whileTap={{ scale: 0.99 }}
                                                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white font-semibold py-4 rounded-xl flex items-center justify-center gap-3 transition-all disabled:opacity-70"
                                            >
                                                {isSending ? (
                                                    <>
                                                        <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                                        Sending...
                                                    </>
                                                ) : (
                                                    <>
                                                        Send Message
                                                        <Send size={18} />
                                                    </>
                                                )}
                                            </motion.button>

                                            {/* Error Message */}
                                            <AnimatePresence>
                                                {errorMessage && (
                                                    <motion.div
                                                        initial={{ opacity: 0, y: -10 }}
                                                        animate={{ opacity: 1, y: 0 }}
                                                        exit={{ opacity: 0, y: -10 }}
                                                        className="p-4 bg-red-500/10 border border-red-500/30 rounded-xl text-center"
                                                    >
                                                        <p className="text-red-400 text-sm font-medium">
                                                            {errorMessage}
                                                        </p>
                                                    </motion.div>
                                                )}
                                            </AnimatePresence>

                                            <p className="text-center text-sm text-gray-600">
                                                By submitting, you agree to our privacy policy.
                                            </p>
                                        </motion.form>
                                    )}
                                </AnimatePresence>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>
        </main>
    );
}

function ContactInfo({ icon: Icon, label, value, href }: { icon: any; label: string; value: string; href?: string }) {
    const content = (
        <div className="flex items-start gap-4 group">
            <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center shrink-0">
                <Icon size={20} className="text-blue-400" />
            </div>
            <div>
                <p className="text-sm text-gray-500 mb-1">{label}</p>
                <p className="text-white font-medium group-hover:text-blue-400 transition-colors">{value}</p>
            </div>
        </div>
    );

    if (href) {
        return <a href={href} className="block">{content}</a>;
    }
    return content;
}

function FormInput({ icon: Icon, label, name, type, placeholder, value, onChange, required }: any) {
    return (
        <div className="space-y-2">
            <label className="text-sm font-medium text-gray-400">{label}</label>
            <div className="relative">
                <Icon size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" />
                <input
                    type={type}
                    name={name}
                    placeholder={placeholder}
                    value={value}
                    onChange={onChange}
                    required={required}
                    className="w-full bg-white/5 border border-white/10 rounded-xl pl-12 pr-4 py-3.5 text-white placeholder:text-gray-600 focus:border-blue-500 focus:outline-none transition-colors"
                />
            </div>
        </div>
    );
}
