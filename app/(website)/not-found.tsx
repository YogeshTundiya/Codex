import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { GlassCard } from "@/components/ui/GlassCard";
import { Button } from "@/components/ui/Button";
import { Home } from "lucide-react";

export default function NotFound() {
    return (
        <main className="min-h-screen bg-[#141416] flex flex-col">
            <Navbar />

            <div className="flex-grow flex items-center justify-center px-6 relative overflow-hidden">

                <GlassCard className="text-center max-w-lg w-full py-16 bg-white/60 backdrop-blur-xl border-white/40">
                    <h1 className="text-9xl font-bold font-heading text-slate-800/10 select-none">
                        404
                    </h1>
                    <div className="-mt-12 relative z-10">
                        <h2 className="text-3xl md:text-4xl font-bold font-heading text-slate-800 mb-4">
                            Page Not Found
                        </h2>
                        <p className="text-gray-600 mb-8 max-w-sm mx-auto">
                            Oops! The page you are looking for seems to have wandered off into the digital void.
                        </p>
                        <Link href="/">
                            <Button className="px-8 py-3 flex items-center justify-center gap-2 mx-auto shadow-xl shadow-slate-200/50">
                                <Home size={18} />
                                Back to Home
                            </Button>
                        </Link>
                    </div>
                </GlassCard>
            </div>
        </main>
    );
}
