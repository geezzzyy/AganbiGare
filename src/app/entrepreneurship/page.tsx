import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { FadeIn } from "@/components/ui/motion"
import { TrendingUp, Building2, Globe, Rocket } from "lucide-react"
import { businessData } from "@/lib/data"
import type { LucideIcon } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
    title: "Entrepreneurship",
    description: "Business ventures, commercial endeavors, and leadership — Ongar Nig LTD, Lonia, and Philio.",
}

const ventureIcons: Record<string, LucideIcon> = {
    "Ongar Nig LTD": Globe,
    "Lonia & Philio": Building2,
}

export default function EntrepreneurshipPage() {
    return (
        <div className="container mx-auto max-w-screen-xl space-y-12 px-4 py-16">
            <FadeIn>
                <header className="space-y-4">
                    <h1 className="font-serif text-4xl font-bold tracking-tight md:text-5xl text-primary-600 dark:text-primary-500">
                        Entrepreneurship
                    </h1>
                    <p className="max-w-2xl text-lg text-muted-foreground">
                        {businessData.summary}
                    </p>
                </header>
            </FadeIn>

            <FadeIn delay={0.1}>
                <section className="grid gap-8 md:grid-cols-2">
                    {businessData.ventures.map((venture) => {
                        const Icon = ventureIcons[venture.title] || Building2
                        return (
                            <Card key={venture.title} className="relative overflow-hidden hover:border-primary-500/50">
                                <div className="absolute right-0 top-0 -mr-4 -mt-4 opacity-5">
                                    <Icon className="h-32 w-32" />
                                </div>
                                <CardHeader className="relative z-10">
                                    <div className="flex justify-between items-start mb-2">
                                        <Badge variant="secondary" className="bg-primary-50 text-primary-600 dark:bg-primary-900/20 dark:text-primary-400">
                                            {venture.role}
                                        </Badge>
                                    </div>
                                    <CardTitle className="text-2xl font-bold">{venture.title}</CardTitle>
                                </CardHeader>
                                <CardContent className="relative z-10 space-y-6">
                                    <p className="text-muted-foreground leading-relaxed">
                                        {venture.description}
                                    </p>
                                    <div className="space-y-3">
                                        <div className="flex items-center gap-2 text-sm font-semibold text-foreground">
                                            <TrendingUp className="h-4 w-4 text-primary-500" />
                                            Key Highlights
                                        </div>
                                        <ul className="space-y-2">
                                            {venture.metrics.map((metric, i) => (
                                                <li key={i} className="flex items-center text-sm text-muted-foreground before:mr-2 before:h-1.5 before:w-1.5 before:rounded-full before:bg-primary-500">
                                                    {metric}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </CardContent>
                            </Card>
                        )
                    })}
                </section>
            </FadeIn>

            <FadeIn delay={0.2}>
                <section className="space-y-6">
                    <h2 className="font-serif text-2xl font-bold">Future Ventures</h2>
                    <div className="rounded-xl border border-dashed border-primary-500/30 bg-primary-50/5 p-8 text-center space-y-4">
                        <Rocket className="h-8 w-8 mx-auto text-primary-500/60" />
                        <h3 className="font-serif text-xl font-bold">What&apos;s Next</h3>
                        <p className="text-muted-foreground max-w-lg mx-auto">
                            {businessData.futureVentures.teaser}
                        </p>
                    </div>
                </section>
            </FadeIn>
        </div>
    )
}
