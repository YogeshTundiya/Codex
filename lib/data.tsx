import { Cpu, Globe, Smartphone, HardDrive, BarChart } from "lucide-react";

// To use your own team images:
// 1. Place your images in the `public/images/team` folder.
// 2. Uncomment the local image lines below and comment out or remove the Unsplash URLs.

export const services = [
    {
        id: 1,
        title: "Automation",
        slug: "automation",
        description: "Streamline your home and office with cutting-edge automation solutions.",
        icon: Cpu,
        features: ["Smart Home Integration", "Workflow Optimization", "IoT Solutions", "Custom Scripts"],
    },
    {
        id: 2,
        title: "Web Development",
        slug: "web-development",
        description: "Crafting responsive, high-performance websites that drive growth.",
        icon: Globe,
        features: ["Responsive Design", "SEO Optimization", "E-commerce Solutions", "CMS Integration"],
    },
    {
        id: 3,
        title: "App Development",
        slug: "app-development",
        description: "Building intuitive mobile applications for iOS and Android platforms.",
        icon: Smartphone,
        features: ["iOS & Android", "Cross-Platform (React Native)", "UI/UX Design", "App Store Deployment"],
    },
    {
        id: 4,
        title: "Data Recovery",
        slug: "data-recovery",
        description: "Secure and reliable data recovery services for your critical information.",
        icon: HardDrive,
        features: ["Hard Drive Recovery", "SSD Recovery", "RAID Recovery", "Secure Data Erasure"],
    },
    {
        id: 5,
        title: "Data Analyst",
        slug: "data-analyst",
        description: "Transforming raw data into actionable insights for better decision making.",
        icon: BarChart,
        features: ["Business Intelligence", "Predictive Analytics", "Data Visualization", "Reporting Dashboards"],
    },
];

export const teamData = [
    {
        name: "Yogesh P Tundiya",
        role: "CEO & Founder",
        image: "/images/team/Yogesh.jpg", // <-- Your local image path
        // image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=400&q=80",
        socials: {
            linkedin: "https://linkedin.com",
            twitter: "https://twitter.com",
            email: "mailto:codexinfotechh@gmail.com",
        },
    },
    {
        name: "Sarah Chen",
        role: "Lead Developer",
        // image: "/images/team/sarah.jpg", // <-- Your local image path
        image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80",
        socials: {
            linkedin: "https://linkedin.com",
            twitter: "https://twitter.com",
            email: "mailto:codexinfotechh@gmail.com",
        },
    },
    {
        name: "Aditya D Devmurari",
        role: "UX Designer",
        image: "/images/team/Aditya.jpg", // <-- Your local image path
        // image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=400&q=80",
        socials: {
            linkedin: "https://linkedin.com",
            twitter: "https://twitter.com",
            email: "mailto:codexinfotechh@gmail.com",
        },
    },
];

export const companySocials = {
    linkedin: "https://linkedin.com/company/codexinfotech",
    twitter: "https://twitter.com/codexinfotech",
    email: "mailto:codexinfotechh@gmail.com",
};
