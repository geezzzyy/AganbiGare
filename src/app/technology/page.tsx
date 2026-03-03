import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { FadeIn } from "@/components/ui/motion"
import { ExternalLink, Github } from "lucide-react"
import Link from "next/link"
import { techData } from "@/lib/data"
import type { Metadata } from "next"

export const metadata: Metadata = {
    title: "Technology",
    description: "Full-stack development, software architecture, and product building — Lonia Telemedicine, Philio, and more.",
}

export default function TechnologyPage() {
    return (
        <div className="container mx-auto max-w-screen-xl space-y-12 px-4 py-16">
            <FadeIn>
                <header className="space-y-4">
                    <h1 className="font-serif text-4xl font-bold tracking-tight md:text-5xl">
                        Technology & Innovation
                    </h1>
                    <p className="max-w-2xl text-lg text-muted-foreground">
                        {techData.summary}
                    </p>
                </header>
            </FadeIn>

            <FadeIn delay={0.1}>
                <section className="space-y-6">
                    <div className="rounded-xl border border-border bg-surface p-6 shadow-sm">
                        <h2 className="font-serif text-2xl font-bold mb-2">Education & Specialization</h2>
                        <p className="text-muted-foreground">{techData.education}</p>
                        <div className="mt-4 flex flex-wrap gap-2">
                            {techData.expertise.map((item) => (
                                <Badge key={item} variant="outline">{item}</Badge>
                            ))}
                        </div>
                    </div>
                </section>
            </FadeIn>

            <FadeIn delay={0.2}>
                <section className="space-y-6">
                    <h2 className="font-serif text-2xl font-bold">Featured Projects</h2>
                    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                        {techData.projects.map((project) => (
                            <Card key={project.title} className="flex flex-col hover:border-primary-500/50">
                                <CardHeader>
                                    <div className="flex justify-between items-start mb-2">
                                        <Badge
                                            variant={project.status === "Live" ? "default" : "secondary"}
                                            className="mb-2"
                                        >
                                            {project.status}
                                        </Badge>
                                    </div>
                                    <CardTitle className="text-xl">{project.title}</CardTitle>
                                    <CardDescription className="line-clamp-3">{project.description}</CardDescription>
                                </CardHeader>
                                <CardContent className="flex-1">
                                    <div className="flex flex-wrap gap-2">
                                        {project.tech.map((t) => (
                                            <Badge key={t} variant="outline" className="text-xs">{t}</Badge>
                                        ))}
                                    </div>
                                </CardContent>
                                <CardFooter className="flex gap-4 border-t border-border/40 pt-4">
                                    {project.link && (
                                        <Link
                                            href={project.link}
                                            target="_blank"
                                            className="flex items-center text-sm font-medium text-primary-500 hover:text-primary-600 transition-colors"
                                        >
                                            <ExternalLink className="mr-2 h-4 w-4" />
                                            Visit Site
                                        </Link>
                                    )}
                                    {project.github && (
                                        <Link
                                            href={project.github}
                                            target="_blank"
                                            className="flex items-center text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                                        >
                                            <Github className="mr-2 h-4 w-4" />
                                            Source
                                        </Link>
                                    )}
                                </CardFooter>
                            </Card>
                        ))}
                    </div>
                </section>
            </FadeIn>
        </div>
    )
}
