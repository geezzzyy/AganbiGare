"use client"

import { Hero } from "@/components/sections/hero"
import { ContactSection } from "@/components/sections/contact"
import { StaggerContainer, StaggerItem } from "@/components/ui/motion"
import { ArrowRight, Cpu, Code2, BookOpen, Briefcase } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

const sections = [
    {
        title: "Engineering",
        description: "Controls & Instrumentation expertise. Process automation and robust systems design for industrial applications.",
        icon: Cpu,
        href: "/engineering",
        color: "text-blue-500",
        bgLight: "bg-blue-500/5",
        bgDark: "dark:bg-blue-500/10",
        gradient: "from-blue-500/20 via-transparent to-transparent",
        hoverGradient: "group-hover:from-blue-500/30 group-hover:via-blue-500/5 group-hover:to-transparent",
    },
    {
        title: "Technology",
        description: "Full-stack development, software architecture, and product building. Specializing in highly scalable applications.",
        icon: Code2,
        href: "/technology",
        color: "text-orange-500",
        bgLight: "bg-orange-500/5",
        bgDark: "dark:bg-orange-500/10",
        gradient: "from-orange-500/20 via-transparent to-transparent",
        hoverGradient: "group-hover:from-orange-500/30 group-hover:via-orange-500/5 group-hover:to-transparent",
    },
    {
        title: "Faith",
        description: "Authored books, sermons, and personal reflections. The quiet intersection of theology, belief, and daily life.",
        icon: BookOpen,
        href: "/faith",
        color: "text-zinc-600 dark:text-zinc-300",
        bgLight: "bg-zinc-500/5",
        bgDark: "dark:bg-zinc-500/10",
        gradient: "from-zinc-500/10 via-transparent to-transparent",
        hoverGradient: "group-hover:from-zinc-500/20 group-hover:via-zinc-500/5 group-hover:to-transparent",
    },
    {
        title: "Entrepreneurship",
        description: "Business ventures, commercial endeavors, and leadership. Scaling operations in emerging and global markets.",
        icon: Briefcase,
        href: "/entrepreneurship",
        color: "text-emerald-500",
        bgLight: "bg-emerald-500/5",
        bgDark: "dark:bg-emerald-500/10",
        gradient: "from-emerald-500/20 via-transparent to-transparent",
        hoverGradient: "group-hover:from-emerald-500/30 group-hover:via-emerald-500/5 group-hover:to-transparent",
    },
]

export default function Home() {
    return (
        <div className="flex flex-col">
            <Hero />

            <section className="container mx-auto max-w-screen-xl px-4 py-24">
                <StaggerContainer className="grid gap-8 md:grid-cols-2">
                    {sections.map((section) => (
                        <StaggerItem key={section.title} className="h-full">
                            <Link href={section.href} className="block h-full outline-none">
                                <motion.div
                                    whileHover={{ y: -8, scale: 1.01 }}
                                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                                    className={cn(
                                        "group relative flex h-full flex-col justify-between overflow-hidden rounded-3xl border border-border/50 bg-surface p-8 shadow-sm transition-all duration-500 hover:shadow-xl dark:border-white/10 dark:hover:border-white/20",
                                        "min-h-[320px] md:min-h-[400px]"
                                    )}
                                >
                                    {/* Animated Background Mesh/Gradient */}
                                    <div className={cn(
                                        "absolute inset-0 z-0 bg-gradient-to-br opacity-50 transition-all duration-500",
                                        section.gradient,
                                        section.hoverGradient
                                    )} />

                                    <div className="relative z-10">
                                        <div className={cn(
                                            "mb-8 inline-flex h-16 w-16 items-center justify-center rounded-2xl backdrop-blur-md transition-transform duration-500 group-hover:scale-110",
                                            section.bgLight,
                                            section.bgDark
                                        )}>
                                            <section.icon className={cn("h-8 w-8", section.color)} />
                                        </div>
                                        <h3 className="font-serif text-3xl font-bold tracking-tight md:text-4xl text-foreground">
                                            {section.title}
                                        </h3>
                                        <p className="mt-4 text-lg text-muted-foreground leading-relaxed max-w-sm">
                                            {section.description}
                                        </p>
                                    </div>

                                    {/* Footer / CTA Area */}
                                    <div className="relative z-10 mt-12 flex items-center justify-between border-t border-border/40 pt-6">
                                        <span className={cn(
                                            "text-sm font-semibold tracking-wide uppercase transition-colors duration-300",
                                            section.color
                                        )}>
                                            Explore Section
                                        </span>
                                        <div className={cn(
                                            "flex h-10 w-10 items-center justify-center rounded-full transition-all duration-500 group-hover:translate-x-2 group-hover:bg-foreground group-hover:text-background",
                                            "bg-surface-hover text-muted-foreground"
                                        )}>
                                            <ArrowRight className="h-5 w-5" />
                                        </div>
                                    </div>

                                    {/* Subtle Overlay Glow Effect on Hover */}
                                    <div className="absolute inset-0 z-0 bg-gradient-to-t from-transparent via-transparent to-white/5 opacity-0 mix-blend-overlay transition-opacity duration-500 group-hover:opacity-100" />
                                </motion.div>
                            </Link>
                        </StaggerItem>
                    ))}
                </StaggerContainer>
            </section>

            <ContactSection />
        </div>
    )
}
