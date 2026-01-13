"use client";

import { motion } from "framer-motion";

const row1 = [
    "Next.js", "React", "Tailwind CSS", "TypeScript", "Node.js", "Python",
    "Next.js", "React", "Tailwind CSS", "TypeScript", "Node.js", "Python",
];

const row2 = [
    "AWS", "Docker", "Vercel", "Figma", "Git", "Framer Motion",
    "AWS", "Docker", "Vercel", "Figma", "Git", "Framer Motion",
];

export function TechTicker() {
    return (
        <section className="py-24 bg-[#0A0A0B] overflow-hidden relative">
            {/* Gradient masks */}
            <div className="absolute inset-y-0 left-0 w-40 bg-gradient-to-r from-[#0A0A0B] to-transparent z-10 pointer-events-none"></div>
            <div className="absolute inset-y-0 right-0 w-40 bg-gradient-to-l from-[#0A0A0B] to-transparent z-10 pointer-events-none"></div>

            <div className="container mx-auto px-6 mb-12 relative z-10">
                <p className="text-center text-gray-500 text-sm font-medium uppercase tracking-[0.2em]">
                    Powered by Modern Technologies
                </p>
            </div>

            {/* Skewed Container */}
            <div className="flex flex-col gap-8 -rotate-3 hover:rotate-0 transition-transform duration-700 ease-out py-8">

                {/* Row 1 - Moving Left */}
                <div className="flex relative overflow-hidden">
                    <motion.div
                        className="flex gap-6 whitespace-nowrap"
                        animate={{ x: [0, -1200] }}
                        transition={{
                            x: {
                                repeat: Infinity,
                                repeatType: "loop",
                                duration: 25,
                                ease: "linear",
                            },
                        }}
                    >
                        {[...row1, ...row1, ...row1].map((tech, i) => (
                            <div
                                key={`r1-${i}`}
                                className="px-6 py-3 rounded-full bg-[#141416] border border-white/10 text-white font-semibold text-lg flex items-center gap-3 hover:bg-[#1C1C1F] hover:border-blue-500/50 hover:shadow-lg hover:shadow-blue-500/10 transition-all duration-300 cursor-default"
                            >
                                <span className="w-2.5 h-2.5 rounded-full bg-gradient-to-r from-blue-500 to-cyan-400"></span>
                                {tech}
                            </div>
                        ))}
                    </motion.div>
                </div>

                {/* Row 2 - Moving Right */}
                <div className="flex relative overflow-hidden">
                    <motion.div
                        className="flex gap-6 whitespace-nowrap"
                        animate={{ x: [-1200, 0] }}
                        transition={{
                            x: {
                                repeat: Infinity,
                                repeatType: "loop",
                                duration: 30,
                                ease: "linear",
                            },
                        }}
                    >
                        {[...row2, ...row2, ...row2].map((tech, i) => (
                            <div
                                key={`r2-${i}`}
                                className="px-6 py-3 rounded-full bg-[#141416] border border-white/10 text-white font-semibold text-lg flex items-center gap-3 hover:bg-[#1C1C1F] hover:border-cyan-400/50 hover:shadow-lg hover:shadow-cyan-400/10 transition-all duration-300 cursor-default"
                            >
                                <span className="w-2.5 h-2.5 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500"></span>
                                {tech}
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
