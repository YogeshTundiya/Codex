"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { TechTicker } from "@/components/ui/TechTicker";
import { Button } from "@/components/ui/Button";
import { ArrowRight, Search, PenTool, Code, Rocket, ChevronDown, Cpu, Globe, Smartphone, HardDrive, BarChart, Zap, Shield, Database, Settings, TrendingUp } from "lucide-react";
import Link from "next/link";
import { services } from "@/lib/data";
import { BookingModal } from "@/components/ui/BookingModal";

// Services Showcase - Cycles through ALL services
function ServicesShowcase() {
  const [activeIndex, setActiveIndex] = useState(0);

  const showcaseServices = [
    {
      name: "Automation",
      icon: Cpu,
      color: "from-amber-500 to-orange-500",
      bgColor: "bg-amber-500/10",
      borderColor: "border-amber-500/30",
      textColor: "text-amber-400",
      features: ["Smart Home", "IoT Systems", "Workflow Automation"],
      stat: "30%",
      statLabel: "Efficiency Boost"
    },
    {
      name: "Web Development",
      icon: Globe,
      color: "from-blue-500 to-cyan-500",
      bgColor: "bg-blue-500/10",
      borderColor: "border-blue-500/30",
      textColor: "text-blue-400",
      features: ["React & Next.js", "E-Commerce", "SEO Optimized"],
      stat: "<1s",
      statLabel: "Load Time"
    },
    {
      name: "App Development",
      icon: Smartphone,
      color: "from-purple-500 to-pink-500",
      bgColor: "bg-purple-500/10",
      borderColor: "border-purple-500/30",
      textColor: "text-purple-400",
      features: ["iOS & Android", "React Native", "UI/UX Design"],
      stat: "4.9★",
      statLabel: "App Store"
    },
    {
      name: "Data Recovery",
      icon: HardDrive,
      color: "from-emerald-500 to-teal-500",
      bgColor: "bg-emerald-500/10",
      borderColor: "border-emerald-500/30",
      textColor: "text-emerald-400",
      features: ["HDD & SSD", "RAID Recovery", "Secure Erasure"],
      stat: "98%",
      statLabel: "Success Rate"
    },
    {
      name: "Data Analytics",
      icon: BarChart,
      color: "from-rose-500 to-red-500",
      bgColor: "bg-rose-500/10",
      borderColor: "border-rose-500/30",
      textColor: "text-rose-400",
      features: ["BI Dashboards", "Predictive AI", "Visualization"],
      stat: "10x",
      statLabel: "ROI Average"
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % showcaseServices.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const current = showcaseServices[activeIndex];
  const Icon = current.icon;

  return (
    <div className="relative">
      {/* Subtle glowing backdrop - much lighter */}
      <motion.div
        key={activeIndex}
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.3 }}
        className={`absolute -inset-6 bg-gradient-to-br ${current.color} rounded-3xl blur-[80px] opacity-15`}
      />

      {/* Main card - glass effect */}
      <div className="relative bg-white/[0.03] backdrop-blur-xl border border-white/[0.08] rounded-2xl overflow-hidden shadow-2xl">
        {/* Header with service selector */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/[0.06] bg-white/[0.02]">
          <div className="flex gap-2">
            {showcaseServices.map((_, i) => (
              <button
                key={i}
                onClick={() => setActiveIndex(i)}
                className={`w-2.5 h-2.5 rounded-full transition-all ${i === activeIndex ? `bg-gradient-to-r ${showcaseServices[i].color}` : "bg-white/20 hover:bg-white/30"
                  }`}
              />
            ))}
          </div>
          <span className="text-xs text-gray-500 font-mono">services.tsx</span>
        </div>

        {/* Content */}
        <div className="p-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
            >
              {/* Service Header */}
              <div className="flex items-center gap-4 mb-6">
                <div className={`w-14 h-14 rounded-2xl bg-white/[0.05] backdrop-blur-sm border border-white/[0.08] flex items-center justify-center`}>
                  <Icon className={current.textColor} size={28} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">{current.name}</h3>
                  <p className="text-gray-500 text-sm">Professional Solutions</p>
                </div>
              </div>

              {/* Features */}
              <div className="space-y-3 mb-6">
                {current.features.map((feature, i) => (
                  <motion.div
                    key={feature}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-center gap-3"
                  >
                    <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${current.color}`} />
                    <span className="text-gray-300 text-sm">{feature}</span>
                  </motion.div>
                ))}
              </div>

              {/* Stat - glass effect */}
              <div className="p-4 rounded-xl bg-white/[0.03] backdrop-blur-sm border border-white/[0.06]">
                <div className="flex items-center justify-between">
                  <div>
                    <p className={`text-3xl font-bold ${current.textColor}`}>{current.stat}</p>
                    <p className="text-gray-500 text-sm">{current.statLabel}</p>
                  </div>
                  <TrendingUp className={current.textColor} size={24} />
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Progress bar */}
        <div className="h-0.5 bg-white/[0.03]">
          <motion.div
            key={activeIndex}
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{ duration: 3, ease: "linear" }}
            className={`h-full bg-gradient-to-r ${current.color} opacity-80`}
          />
        </div>
      </div>

      {/* Floating elements - glass effect */}
      <motion.div
        animate={{ y: [-5, 5, -5], rotate: [0, 5, 0] }}
        transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
        className="absolute -top-4 -right-4 w-14 h-14 rounded-xl bg-white/[0.05] backdrop-blur-md border border-white/[0.1] flex items-center justify-center"
      >
        <Settings className="text-blue-400/80 animate-[spin_8s_linear_infinite]" size={20} />
      </motion.div>

      <motion.div
        animate={{ y: [5, -5, 5], rotate: [0, -5, 0] }}
        transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
        className="absolute -bottom-4 -left-4 w-12 h-12 rounded-lg bg-white/[0.05] backdrop-blur-md border border-white/[0.1] flex items-center justify-center"
      >
        <Database className="text-purple-400/80" size={18} />
      </motion.div>

      <motion.div
        animate={{ x: [-3, 3, -3] }}
        transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
        className="absolute top-1/2 -right-6 w-10 h-10 rounded-lg bg-white/[0.05] backdrop-blur-md border border-white/[0.1] flex items-center justify-center"
      >
        <Shield className="text-emerald-400/80" size={16} />
      </motion.div>
    </div>
  );
}

export default function Home() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  return (
    <main className="min-h-screen bg-[#0A0A0B] overflow-x-hidden">
      <Navbar />
      <BookingModal isOpen={isBookingOpen} onClose={() => setIsBookingOpen(false)} />

      {/* Hero Section - Two Column Layout */}
      <section className="relative min-h-screen flex items-center py-20">
        {/* Subtle gradient blobs */}
        <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[150px]"></div>
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-cyan-500/10 rounded-full blur-[120px]"></div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Left - Text */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[0.95] mb-8">
                We build digital
                <br />
                <span className="text-gray-600">products that</span>
                <br />
                <span className="text-blue-400">matter.</span>
              </h1>
              <p className="text-xl text-gray-400 max-w-lg mb-10 leading-relaxed">
                Premium websites, applications, and digital solutions that transform businesses and drive growth.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/contact">
                  <Button className="px-8 py-4 rounded-full bg-white text-black font-medium hover:bg-blue-400 hover:text-white transition-all">
                    Start a project <ArrowRight size={16} className="ml-2" />
                  </Button>
                </Link>
                <Button
                  variant="outline"
                  onClick={() => setIsBookingOpen(true)}
                  className="px-8 py-4 rounded-full border-white/20 text-white hover:bg-white/5 transition-all"
                >
                  Book a call
                </Button>
              </div>
            </motion.div>

            {/* Right - Services Showcase */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="hidden lg:block"
            >
              <ServicesShowcase />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Technologies Section - KEEPING THIS */}
      <TechTicker />

      {/* Services - Editorial List Style */}
      <section className="py-24 px-6">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">What we do</h2>
            <p className="text-gray-500 text-xl max-w-2xl">
              Comprehensive digital solutions tailored to your business needs.
            </p>
          </motion.div>

          <div className="space-y-0">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
              >
                <Link href={`/services/${service.slug}`} className="group block">
                  <div className="flex items-center justify-between py-8 border-b border-white/5 hover:border-blue-500/30 transition-colors">
                    <div className="flex items-center gap-6">
                      <span className="text-gray-600 text-sm font-mono w-8">0{index + 1}</span>
                      <div>
                        <h3 className="text-2xl md:text-3xl lg:text-4xl font-medium text-white group-hover:text-blue-400 transition-colors">
                          {service.title}
                        </h3>
                        <p className="text-gray-500 mt-1 hidden md:block">{service.description}</p>
                      </div>
                    </div>
                    <ArrowRight className="text-gray-600 group-hover:text-blue-400 group-hover:translate-x-2 transition-all" size={24} />
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us - Clean Layout */}
      <section className="py-24 px-6 bg-[#0D0D10]">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="lg:sticky lg:top-32"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                Why work
                <span className="block text-gray-600">with us?</span>
              </h2>
              <p className="text-gray-400 text-lg mb-8">
                We don't just build software—we craft digital experiences that drive real business results.
              </p>
              <Link href="/about">
                <Button variant="outline" className="px-8 py-4 rounded-full border-white/20 text-white hover:bg-white/5 transition-all">
                  Learn more about us
                </Button>
              </Link>
            </motion.div>

            <div className="grid gap-1">
              {[
                { num: "01", title: "Pixel-Perfect Design", desc: "Every pixel serves a purpose. Interfaces that are stunning and intuitive." },
                { num: "02", title: "Performance First", desc: "Lightning-fast applications that rank better and convert more." },
                { num: "03", title: "Scalable Architecture", desc: "Built to grow. Systems that handle millions of requests effortlessly." },
                { num: "04", title: "Ongoing Support", desc: "We don't just launch and leave. Long-term partnership and maintenance." },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="group p-6 md:p-8 bg-white/[0.02] hover:bg-white/[0.04] border-b border-white/5 last:border-b-0 transition-colors"
                >
                  <span className="text-blue-500 font-mono text-sm">{item.num}</span>
                  <h3 className="text-xl font-bold text-white mt-2 mb-2 group-hover:text-blue-300 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-gray-500">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Process - Horizontal Steps */}
      <section className="py-24 px-6">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">How we work</h2>
            <p className="text-gray-500 text-xl max-w-2xl">
              A streamlined process that turns your vision into reality.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              { icon: Search, title: "Discovery", desc: "Deep dive into your goals and audience." },
              { icon: PenTool, title: "Design", desc: "Craft stunning, intuitive interfaces." },
              { icon: Code, title: "Development", desc: "Build with clean, scalable code." },
              { icon: Rocket, title: "Launch", desc: "Deploy and ensure everything works." },
            ].map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group"
              >
                <div className="p-8 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-blue-500/20 transition-all h-full">
                  <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-gray-500 group-hover:text-blue-400 group-hover:bg-blue-500/10 transition-all mb-6">
                    <step.icon size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{step.title}</h3>
                  <p className="text-gray-500 text-sm">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ - Simple */}
      <section className="py-24 px-6 bg-[#0D0D10]">
        <div className="container mx-auto max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Questions?</h2>
            <p className="text-gray-500 text-xl">We've got answers.</p>
          </motion.div>

          <div className="space-y-4">
            {[
              { q: "How long does a typical project take?", a: "Project timelines vary. A standard website takes 4-6 weeks, complex apps can take 3-6 months. We provide detailed timelines during discovery." },
              { q: "Do you provide post-launch support?", a: "Absolutely. We offer comprehensive maintenance packages. We don't just build and leave; we partner for the long term." },
              { q: "What is your pricing model?", a: "We work on a project-based fixed price model, ensuring transparency. For ongoing work, we offer retainer models tailored to your needs." },
              { q: "Can you modernize legacy systems?", a: "Yes, we specialize in digital transformation. We assess existing systems and propose strategies to modernize using latest technologies." },
            ].map((faq, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
              >
                <details className="group">
                  <summary className="flex cursor-pointer items-center justify-between p-6 rounded-xl bg-white/[0.02] border border-white/5 hover:border-white/10 text-white transition-all list-none">
                    <span className="font-semibold">{faq.q}</span>
                    <ChevronDown className="text-gray-500 transition duration-300 group-open:-rotate-180" size={20} />
                  </summary>
                  <div className="px-6 py-4 text-gray-400 leading-relaxed">
                    {faq.a}
                  </div>
                </details>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA - Minimal */}
      <section className="py-32 px-6 relative">
        <div className="absolute top-1/2 left-1/4 w-[400px] h-[400px] bg-blue-600/10 rounded-full blur-[150px] -translate-y-1/2"></div>

        <div className="container mx-auto max-w-4xl text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-8 leading-tight">
              Ready to start
              <span className="block text-blue-400">something great?</span>
            </h2>
            <p className="text-gray-400 text-lg mb-10 max-w-xl mx-auto">
              Join 50+ forward-thinking brands that trust us to transform their digital presence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button className="px-10 py-4 rounded-full bg-white text-black font-medium hover:bg-blue-400 hover:text-white transition-all">
                  Start a project <ArrowRight size={16} className="ml-2" />
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
