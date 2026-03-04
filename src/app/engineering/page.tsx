import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { FadeIn } from "@/components/ui/motion"
import { Download, Award, GraduationCap, Briefcase } from "lucide-react"
import { engineeringData } from "@/lib/data"
import type { Metadata } from "next"

export const metadata: Metadata = {
    title: "Engineering",
    description: "Controls & Instrumentation engineering — from a medical family in Warri, Nigeria to industrial automation and beyond.",
}

export default function EngineeringPage() {
    return (
        <div className="container mx-auto max-w-screen-xl space-y-16 px-4 py-16">
            <FadeIn>
                <header className="space-y-4 max-w-3xl">
                    <h1 className="font-serif text-4xl font-bold tracking-tight md:text-5xl text-foreground">
                        Controls & Instrumentation
                    </h1>
                    <Button asChild className="mt-2">
                        <a href={engineeringData.cvUrl} download>
                            <Download className="mr-2 h-4 w-4" />
                            Download CV
                        </a>
                    </Button>
                </header>
            </FadeIn>

            {/* Personal Story */}
            <FadeIn delay={0.1}>
                <section className="max-w-3xl space-y-6">
                    <h2 className="font-serif text-2xl font-bold text-foreground">The Backstory</h2>
                    {engineeringData.story.map((paragraph, i) => (
                        <p key={i} className="text-lg text-muted-foreground leading-relaxed">
                            {paragraph}
                        </p>
                    ))}
                </section>
            </FadeIn>

            {/* Skills & Certifications */}
            <FadeIn delay={0.15}>
                <section className="space-y-8">
                    <div className="space-y-4">
                        <h2 className="font-serif text-2xl font-bold">Core Competencies</h2>
                        <div className="flex flex-wrap gap-2">
                            {engineeringData.skills.map((skill) => (
                                <Badge key={skill} variant="secondary" className="text-sm px-3 py-1">
                                    {skill}
                                </Badge>
                            ))}
                        </div>
                    </div>
                    <div className="space-y-4">
                        <h2 className="font-serif text-2xl font-bold">Certifications</h2>
                        <div className="grid gap-3 sm:grid-cols-3">
                            {engineeringData.certifications.map((cert) => (
                                <div key={cert} className="flex items-center gap-3 rounded-lg border border-border/50 bg-surface/50 p-4">
                                    <Award className="h-5 w-5 shrink-0 text-primary-500" />
                                    <span className="text-sm font-medium">{cert}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </FadeIn>

            {/* Timeline */}
            <FadeIn delay={0.2}>
                <section className="space-y-8">
                    <h2 className="font-serif text-2xl font-bold">The Journey</h2>
                    <div className="relative space-y-0">
                        {/* Vertical line */}
                        <div className="absolute left-5 top-0 bottom-0 w-0.5 bg-gradient-to-b from-transparent via-border to-transparent md:left-1/2 md:-translate-x-px" />

                        {engineeringData.timeline.map((item, index) => {
                            const isEducation = item.type === "education"
                            const Icon = isEducation ? GraduationCap : Briefcase
                            const accentColor = isEducation ? "text-blue-500" : "text-orange-500"
                            const accentBg = isEducation ? "bg-blue-500/10 border-blue-500/30" : "bg-orange-500/10 border-orange-500/30"
                            const dotColor = isEducation ? "bg-blue-500" : "bg-orange-500"

                            return (
                                <div
                                    key={index}
                                    className="relative flex items-start justify-between pb-8 last:pb-0 md:justify-normal md:odd:flex-row-reverse group"
                                >
                                    {/* Timeline dot */}
                                    <div className="flex items-center justify-center w-10 h-10 rounded-full border border-surface bg-background shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow-sm z-10">
                                        <div className={`w-3 h-3 rounded-full ${dotColor}`} />
                                    </div>

                                    {/* Card */}
                                    <Card className="w-[calc(100%-3.5rem)] md:w-[calc(50%-2.5rem)] hover:border-border transition-colors">
                                        <CardHeader className="pb-3">
                                            <div className="flex justify-between items-start flex-col sm:flex-row gap-2 mb-1">
                                                <div className="flex items-center gap-2">
                                                    <div className={`flex h-7 w-7 items-center justify-center rounded-md border ${accentBg}`}>
                                                        <Icon className={`h-3.5 w-3.5 ${accentColor}`} />
                                                    </div>
                                                    <Badge variant="outline" className="text-xs">
                                                        {isEducation ? "Education" : "Work"}
                                                    </Badge>
                                                </div>
                                                <span className="text-xs text-muted-foreground font-medium">{item.duration}</span>
                                            </div>
                                            <CardTitle className="text-lg leading-snug">{item.title}</CardTitle>
                                            <CardDescription className="font-medium">
                                                {item.organisation} <span className="text-muted-foreground font-normal">· {item.location}</span>
                                            </CardDescription>
                                        </CardHeader>
                                        <CardContent>
                                            <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                                        </CardContent>
                                    </Card>
                                </div>
                            )
                        })}
                    </div>
                </section>
            </FadeIn>
        </div>
    )
}
