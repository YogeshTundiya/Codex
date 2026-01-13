// Static service data - EXACT COPY from backend/src/services/services.service.ts
// This ensures service pages work even without the backend running

export interface ServiceData {
    title: string;
    subtitle: string;
    description: string;
    image: string;
    stats: { label: string; value: string; icon: string }[];
    features: { title: string; desc: string; icon: string }[];
    process: { title: string; desc: string; step: string }[];
    applications: { title: string; image: string }[];
    techStack?: string[];
    subServices?: { title: string; desc: string }[];
}

export const staticServicesData: Record<string, ServiceData> = {
    "automation": {
        title: "Intelligent Automation",
        subtitle: "Home & Office",
        description: "Transform your environment with adaptive, self-learning systems that enhance comfort, security, and efficiency.",
        image: "https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?auto=format&fit=crop&w=1200&q=80",
        stats: [
            { label: "Energy Saved", value: "30%", icon: "Zap" },
            { label: "Efficiency Boost", value: "2x", icon: "BarChart" },
            { label: "Uptime", value: "99.9%", icon: "CheckCircle2" },
            { label: "Security", value: "24/7", icon: "Shield" },
        ],
        features: [
            { title: "Smart Climate", desc: "AI-driven temperature control that learns your preferences.", icon: "Zap" },
            { title: "Advanced Security", desc: "Biometric access and automated perimeter monitoring.", icon: "Shield" },
            { title: "Voice Command", desc: "Seamless integration with Alexa, Google, and Siri.", icon: "Smartphone" },
            { title: "Energy Analytics", desc: "Real-time insights to reduce your carbon footprint.", icon: "BarChart" }
        ],
        process: [
            { step: "01", title: "Audit", desc: "We analyze your current infrastructure and identify automation opportunities." },
            { step: "02", title: "Blueprint", desc: "Our engineers design a custom IoT ecosystem tailored to your specific needs." },
            { step: "03", title: "Integration", desc: "We deploy sensors, hubs, and controllers with minimal disruption to your routine." },
            { step: "04", title: "Optimization", desc: "Continuous monitoring and AI-tuning to ensure peak performance." }
        ],
        applications: [
            { title: "Smart Offices", image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80" },
            { title: "Luxury Homes", image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80" },
            { title: "Warehouses", image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80" },
        ]
    },
    "web-development": {
        title: "Web Development",
        subtitle: "Digital Experiences",
        description: "Crafting high-performance, visually stunning websites that drive real business growth.",
        image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1200&q=80",
        stats: [
            { label: "Faster Load", value: "<1s", icon: "Zap" },
            { label: "SEO Score", value: "98+", icon: "Globe" },
            { label: "Mobile", value: "100%", icon: "Smartphone" },
            { label: "Uptime", value: "99.99%", icon: "CheckCircle2" }
        ],
        features: [
            { title: "Custom UI/UX", desc: "Bespoke designs tailored to your unique brand identity.", icon: "Globe" },
            { title: "SEO Optimized", desc: "Technical architecture built to rank higher on Google.", icon: "BarChart" },
            { title: "Responsive", desc: "Fluid layouts that look perfect on every device.", icon: "Smartphone" },
            { title: "Speed First", desc: "Optimized code for lightning-fast performance.", icon: "Zap" }
        ],
        subServices: [
            { title: "Frontend Engineering", desc: "Pixel-perfect interfaces using React, Next.js, and modern CSS." },
            { title: "Backend Systems", desc: "Robust APIs and database architectures powered by Node.js and PostgreSQL." },
            { title: "E-Commerce Solutions", desc: "High-conversion online stores with secure payment gateways." },
            { title: "CMS Development", desc: "Custom admin panels for easy content management." },
            { title: "SaaS Application", desc: "Scalable software-as-a-service platforms built for growth." },
            { title: "Progressive Web Apps", desc: "App-like experiences directly in the browser." }
        ],
        process: [
            { step: "01", title: "Discovery", desc: "We dive deep into your brand, goals, and target audience." },
            { step: "02", title: "Design", desc: "Creating high-fidelity wireframes and interactive prototypes." },
            { step: "03", title: "Development", desc: "Writing clean, semantic code using the latest frameworks." },
            { step: "04", title: "Launch", desc: "Rigorous testing, deployment, and post-launch support." }
        ],
        applications: [
            { title: "E-Commerce", image: "https://images.unsplash.com/photo-1556742049-0cfed4f7a07d?auto=format&fit=crop&w=800&q=80" },
            { title: "SaaS Platforms", image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80" },
            { title: "Portfolio Sites", image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=800&q=80" }
        ],
        techStack: ["React", "Next.js", "Node.js", "Tailwind CSS", "TypeScript", "HTML5", "CSS3", "PHP", "PostgreSQL", "Framer Motion"]
    },
    "app-development": {
        title: "App Development",
        subtitle: "iOS & Android",
        description: "Building intuitive, high-performance mobile applications that users love to engage with daily.",
        image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=1200&q=80",
        stats: [
            { label: "App Store", value: "4.9★", icon: "Smartphone" },
            { label: "Downloads", value: "1M+", icon: "Cloud" },
            { label: "Retention", value: "85%", icon: "TrendingUp" },
            { label: "Crash Free", value: "99.9%", icon: "Shield" }
        ],
        features: [
            { title: "Cross-Platform", desc: "One codebase, native performance on both iOS and Android.", icon: "Layers" },
            { title: "Native Development", desc: "Swift and Kotlin for maximum hardware utilization.", icon: "Cpu" },
            { title: "Offline Mode", desc: "Functionality that works even without an internet connection.", icon: "Lock" },
            { title: "Real-time Sync", desc: "Instant data updates across all user devices.", icon: "Cloud" }
        ],
        subServices: [
            { title: "iOS Development", desc: "Premium Swift-based applications for the Apple ecosystem." },
            { title: "Android Development", desc: "Scalable Kotlin apps for the world's most popular OS." },
            { title: "Flutter/React Native", desc: "Hybrid solutions for faster time-to-market." },
            { title: "Wearable Apps", desc: "Extensions for Apple Watch and WearOS devices." }
        ],
        process: [
            { step: "01", title: "Strategy", desc: "Defining the core value proposition and user journey." },
            { step: "02", title: "UX/UI", desc: "Designing intuitive interfaces for touch interactions." },
            { step: "03", title: "Build", desc: "Agile development sprints with regular test builds." },
            { step: "04", title: "Deploy", desc: "App Store submission and optimization (ASO)." }
        ],
        applications: [
            { title: "Fitness Tracking", image: "https://images.unsplash.com/photo-1576678927484-cc907957088c?auto=format&fit=crop&w=800&q=80" },
            { title: "Social Networking", image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&w=800&q=80" },
            { title: "On-Demand Services", image: "https://images.unsplash.com/photo-1555529733-14637d7e30d1?auto=format&fit=crop&w=800&q=80" }
        ],
        techStack: ["Flutter", "React Native", "Swift", "Kotlin", "Firebase", "GraphQL", "Redux", "Node.js"]
    },
    "data-recovery": {
        title: "Data Recovery",
        subtitle: "Secure & Fast",
        description: "Professional recovery services for critical data loss scenarios across all media types.",
        image: "https://images.unsplash.com/photo-1606964933129-719873e79d12?auto=format&fit=crop&w=1200&q=80",
        stats: [
            { label: "Success Rate", value: "98%", icon: "CheckCircle2" },
            { label: "Turnaround", value: "24h", icon: "Clock" },
            { label: "Secure", value: "100%", icon: "Lock" },
            { label: "Experience", value: "15Y+", icon: "Shield" }
        ],
        features: [
            { title: "Clean Room", desc: "ISO Class 5 cleanroom for physical drive repairs.", icon: "Layers" },
            { title: "RAID Recovery", desc: "Specialized tools for complex enterprise storage arrays.", icon: "Server" },
            { title: "Encrypted Data", desc: "Recovery of BitLocker and FileVault encrypted drives.", icon: "Lock" },
            { title: "SSD Forensics", desc: "Advanced techniques for flash memory recovery.", icon: "HardDrive" }
        ],
        process: [
            { step: "01", title: "Evaluation", desc: "Free diagnostic to determine recoverability and cost." },
            { step: "02", title: "Imaging", desc: "Creating a sector-by-sector clone to protect original media." },
            { step: "03", title: "Extraction", desc: "Rebuilding file systems and repairing corrupted data." },
            { step: "04", title: "Verification", desc: "You verify the file list before paying for the recovery." }
        ],
        applications: [
            { title: "Enterprise RAID", image: "https://images.unsplash.com/photo-1558494949-efc5270f9c01?auto=format&fit=crop&w=800&q=80" },
            { title: "Personal Memories", image: "https://images.unsplash.com/photo-1533561052604-c3beb6d55760?auto=format&fit=crop&w=800&q=80" },
            { title: "Ransomware", image: "https://images.unsplash.com/photo-1624969862293-b749659ccc4e?auto=format&fit=crop&w=800&q=80" }
        ]
    },
    "data-analyst": {
        title: "Data Analyst",
        subtitle: "Insights & Growth",
        description: "Transform raw data into actionable business intelligence that drives strategy and revenue.",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
        stats: [
            { label: "Avg ROI", value: "10x", icon: "TrendingUp" },
            { label: "Accuracy", value: "99%", icon: "CheckCircle2" },
            { label: "Data Processed", value: "5PB+", icon: "Database" },
            { label: "Reports", value: "Daily", icon: "Clock" }
        ],
        features: [
            { title: "Predictive AI", desc: "Machine learning models to forecast market trends.", icon: "Cpu" },
            { title: "Visual Dashboards", desc: "Interactive real-time reports for stakeholders.", icon: "BarChart" },
            { title: "Data Warehousing", desc: "Centralized repositories for single source of truth.", icon: "Server" },
            { title: "Customer 360", desc: "Unified view of customer behavior and touchpoints.", icon: "Globe" }
        ],
        subServices: [
            { title: "Business Intelligence", desc: "Setup of PowerBI/Tableau for automated reporting." },
            { title: "Market Analysis", desc: "Competitor scraping and sentiment analysis." },
            { title: "Operations Optimization", desc: "Identifying bottlenecks in supply chain and workflow." },
            { title: "Financial Modeling", desc: "Risk assessment and revenue projection algorithms." }
        ],
        process: [
            { step: "01", title: "Ingest", desc: "Connecting to all your data sources (SQL, APIs, CRM)." },
            { step: "02", title: "Clean", desc: "Standardizing and validating data quality." },
            { step: "03", title: "Model", desc: "Applying statistical algorithms and ML techniques." },
            { step: "04", title: "Visualize", desc: "Delivering clear, actionable insights." }
        ],
        applications: [
            { title: "FinTech", image: "https://images.unsplash.com/photo-1611974765270-ca12586343bb?auto=format&fit=crop&w=800&q=80" },
            { title: "Retail Analytics", image: "https://images.unsplash.com/photo-1556740772-1a7410711030?auto=format&fit=crop&w=800&q=80" },
            { title: "Healthcare", image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80" }
        ],
        techStack: ["Python", "R", "SQL", "Tableau", "PowerBI", "Snowflake", "Pandas", "TensorFlow"]
    }
};
