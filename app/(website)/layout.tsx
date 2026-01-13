import { Footer } from "@/components/layout/Footer";
import { ScrollToTop } from "@/components/ui/ScrollToTop";
import { Preloader } from "@/components/ui/Preloader";
import { AnimatedBackground } from "@/components/ui/AnimatedBackground";
import { SmoothScroll } from "@/components/ui/SmoothScroll";

export default function WebsiteLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <>
            <Preloader />
            <AnimatedBackground />
            <SmoothScroll>
                {children}
                <ScrollToTop />
            </SmoothScroll>
            <Footer />
        </>
    );
}
