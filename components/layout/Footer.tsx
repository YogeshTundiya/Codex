import { Linkedin, Twitter, Instagram, Phone, Mail } from "lucide-react";
import Link from "next/link";
import { services } from "@/lib/data";
import { LogoLarge } from "@/components/ui/Logo";

export function Footer() {
    return (
        <footer className="relative bg-[#0A0A0B] text-gray-300 overflow-hidden border-t border-white/5">

            {/* Main Footer Content */}
            <div className="container mx-auto px-6 py-16">
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 lg:gap-12">

                    {/* Brand Column */}
                    <div className="col-span-2">
                        {/* Logo */}
                        <div className="mb-6">
                            <LogoLarge />
                        </div>
                        <p className="text-gray-500 text-sm leading-relaxed mb-6 max-w-xs">
                            Elevating tech, simplifying future. We craft digital solutions that matter.
                        </p>
                        <div className="flex items-center gap-3">
                            <a href="#" className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:bg-blue-500 hover:text-white hover:border-blue-500 transition-all">
                                <Instagram size={16} />
                            </a>
                            <a href="#" className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:bg-blue-500 hover:text-white hover:border-blue-500 transition-all">
                                <Linkedin size={16} />
                            </a>
                            <a href="#" className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:bg-blue-500 hover:text-white hover:border-blue-500 transition-all">
                                <Twitter size={16} />
                            </a>
                        </div>
                    </div>

                    {/* Services */}
                    <div>
                        <h4 className="text-white font-semibold mb-5 text-sm uppercase tracking-wider">Services</h4>
                        <ul className="space-y-3">
                            {services.map((service) => (
                                <li key={service.slug}>
                                    <Link href={`/services/${service.slug}`} className="text-gray-500 hover:text-white transition-colors text-sm">
                                        {service.title}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Company */}
                    <div>
                        <h4 className="text-white font-semibold mb-5 text-sm uppercase tracking-wider">Company</h4>
                        <ul className="space-y-3">
                            <li><Link href="/about" className="text-gray-500 hover:text-white transition-colors text-sm">About Us</Link></li>
                            <li><Link href="/contact" className="text-gray-500 hover:text-white transition-colors text-sm">Contact</Link></li>
                            <li><Link href="/privacy-policy" className="text-gray-500 hover:text-white transition-colors text-sm">Privacy Policy</Link></li>
                            <li><Link href="/sitemap" className="text-gray-500 hover:text-white transition-colors text-sm">Sitemap</Link></li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div className="col-span-2">
                        <h4 className="text-white font-semibold mb-5 text-sm uppercase tracking-wider">Get in Touch</h4>
                        <div className="space-y-4">
                            <a href="mailto:codexinfotechh@gmail.com" className="flex items-center gap-3 text-gray-500 hover:text-white transition-colors group">
                                <span className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-blue-500 group-hover:border-blue-500 transition-all">
                                    <Mail size={14} />
                                </span>
                                <span className="text-sm">codexinfotechh@gmail.com</span>
                            </a>
                            <a href="tel:+917862003533" className="flex items-center gap-3 text-gray-500 hover:text-white transition-colors group">
                                <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center group-hover:bg-blue-500/20 transition-colors">
                                    <Phone size={14} />
                                </div>
                                <span className="text-sm">+91 7862003533</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-white/5">
                <div className="container mx-auto px-6 py-5">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                        <p className="text-gray-600 text-sm">
                            © {new Date().getFullYear()} CodeX Infotech. All rights reserved.
                        </p>
                        <p className="text-gray-600 text-xs">
                            Made with ♥ in India
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
}
