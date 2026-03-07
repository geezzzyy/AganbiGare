import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/ui/motion"
import {
    Globe,
    Mail,
    Search,
    Megaphone,
    Video,
    Film,
    BarChart3,
    Bot,
    Palette,
    MessageCircle,
    ArrowRight,
    CreditCard,
    Wrench,
} from "lucide-react"
import Link from "next/link"
import { servicesData, profile } from "@/lib/data"
import type { Metadata } from "next"

export const metadata: Metadata = {
    title: "IT Services",
    description: "Professional IT services — website design, email marketing, SEO, AI video creation, dashboards, and more.",
}

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
    Wrench,
    Globe,
    Mail,
    Search,
    Megaphone,
    Video,
    Film,
    BarChart3,
    Bot,
    Palette,
    MessageCircle,
}

const accentColors = [
    "from-orange-500/20 to-orange-500/5 border-orange-500/30",
    "from-blue-500/20 to-blue-500/5 border-blue-500/30",
    "from-emerald-500/20 to-emerald-500/5 border-emerald-500/30",
    "from-purple-500/20 to-purple-500/5 border-purple-500/30",
    "from-rose-500/20 to-rose-500/5 border-rose-500/30",
    "from-cyan-500/20 to-cyan-500/5 border-cyan-500/30",
    "from-amber-500/20 to-amber-500/5 border-amber-500/30",
    "from-indigo-500/20 to-indigo-500/5 border-indigo-500/30",
    "from-pink-500/20 to-pink-500/5 border-pink-500/30",
    "from-teal-500/20 to-teal-500/5 border-teal-500/30",
    "from-slate-500/20 to-slate-500/5 border-slate-500/30",
]

const iconColors = [
    "text-orange-500",
    "text-blue-500",
    "text-emerald-500",
    "text-purple-500",
    "text-rose-500",
    "text-cyan-500",
    "text-amber-500",
    "text-indigo-500",
    "text-pink-500",
    "text-teal-500",
    "text-slate-500",
]

export default function ServicesPage() {
    return (
        <div className="container mx-auto max-w-screen-xl space-y-16 px-4 py-16">
            <FadeIn>
                <header className="text-center max-w-3xl mx-auto space-y-6">
                    <Badge variant="outline" className="px-4 py-1.5 text-sm">
                        Available for hire
                    </Badge>
                    <h1 className="font-serif text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
                        IT Services
                    </h1>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                        {servicesData.summary}
                    </p>
                </header>
            </FadeIn>

            <StaggerContainer className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {servicesData.services.map((service, index) => {
                    const Icon = iconMap[service.icon] || Globe
                    const accent = accentColors[index % accentColors.length]
                    const iconColor = iconColors[index % iconColors.length]

                    return (
                        <StaggerItem key={service.title}>
                            <Card className="group h-full flex flex-col hover:border-border transition-all hover:shadow-lg">
                                <CardHeader className="space-y-4">
                                    <div className={`flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br border ${accent}`}>
                                        <Icon className={`h-6 w-6 ${iconColor}`} />
                                    </div>
                                    <div>
                                        <CardTitle className="text-xl group-hover:text-primary-500 transition-colors">
                                            {service.title}
                                        </CardTitle>
                                        <CardDescription className="mt-2 text-base leading-relaxed">
                                            {service.description}
                                        </CardDescription>
                                    </div>
                                </CardHeader>
                                <CardContent className="flex-1 space-y-4">
                                    <div className="flex flex-wrap gap-2">
                                        {service.features.map((feature) => (
                                            <Badge key={feature} variant="secondary" className="text-xs font-normal">
                                                {feature}
                                            </Badge>
                                        ))}
                                    </div>
                                    <Link
                                        href={`mailto:${profile.socials.email}?subject=Enquiry: ${encodeURIComponent(service.title)}`}
                                        className="inline-flex items-center gap-2 text-sm font-medium text-primary-500 hover:text-primary-600 transition-colors"
                                    >
                                        Request a Quote
                                        <ArrowRight className="h-3.5 w-3.5" />
                                    </Link>
                                </CardContent>
                            </Card>
                        </StaggerItem>
                    )
                })}
            </StaggerContainer>

            <FadeIn delay={0.3}>
                <section className="rounded-2xl border border-border/50 bg-gradient-to-br from-primary-500/5 via-surface/50 to-transparent p-8 md:p-12 text-center space-y-6">
                    <h2 className="font-serif text-3xl font-bold">Have a project in mind?</h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        Whether you need a website, a dashboard, an AI solution, or a full digital strategy, let&apos;s talk about how I can help you build it.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Link
                            href={`mailto:${profile.socials.email}`}
                            className="inline-flex items-center gap-2 rounded-full bg-primary-500 px-8 py-3 text-sm font-semibold text-white hover:bg-primary-600 transition-colors"
                        >
                            Get in Touch
                            <ArrowRight className="h-4 w-4" />
                        </Link>
                        <Link
                            href={servicesData.paymentLink}
                            target="_blank"
                            className="inline-flex items-center gap-2 rounded-full border border-border px-8 py-3 text-sm font-semibold text-foreground hover:bg-surface-hover transition-colors"
                        >
                            <CreditCard className="h-4 w-4" />
                            Pay via PayPal
                        </Link>
                    </div>
                </section>
            </FadeIn>
        </div>
    )
}
