import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { FadeIn } from "@/components/ui/motion"
import { ExternalLink, Github, GraduationCap, Briefcase, Award } from "lucide-react"
import Link from "next/link"
import { techData } from "@/lib/data"
import type { Metadata } from "next"

export const metadata: Metadata = {
    title: "Technology",
    description: "Full-stack development, AI-integrated applications, data engineering, and product building.",
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
                    <div className="flex flex-wrap gap-2 pt-2">
                        {techData.expertise.map((item) => (
                            <Badge key={item} variant="outline">{item}</Badge>
                        ))}
                    </div>
                </header>
            </FadeIn>

            <FadeIn delay={0.05}>
                <section className="max-w-3xl space-y-6">
                    <h2 className="font-serif text-2xl font-bold text-foreground">The Backstory</h2>
                    {techData.story.map((paragraph, i) => (
                        <p key={i} className="text-lg text-muted-foreground leading-relaxed">
                            {paragraph}
                        </p>
                    ))}
                </section>
            </FadeIn>

            <FadeIn delay={0.1}>
                <section className="space-y-6">
                    <div className="flex items-center gap-2">
                        <GraduationCap className="h-5 w-5 text-primary-500" />
                        <h2 className="font-serif text-2xl font-bold">Education</h2>
                    </div>
                    <div className="grid gap-4 sm:grid-cols-3">
                        {techData.education.map((edu) => (
                            <div key={edu.institution} className="rounded-xl border border-border/50 bg-surface/50 p-5 space-y-2">
                                <Badge variant="outline" className="text-xs">{edu.duration}</Badge>
                                <h3 className="font-semibold text-foreground">{edu.institution}</h3>
                                <p className="text-sm text-muted-foreground">{edu.degree}</p>
                                <p className="text-xs text-muted-foreground/70">{edu.focus}</p>
                            </div>
                        ))}
                    </div>
                </section>
            </FadeIn>

            <FadeIn delay={0.12}>
                <section className="space-y-6">
                    <div className="flex items-center gap-2">
                        <Award className="h-5 w-5 text-primary-500" />
                        <h2 className="font-serif text-2xl font-bold">Certifications</h2>
                    </div>
                    <div className="grid gap-3 sm:grid-cols-2">
                        {techData.certifications.map((cert) => (
                            <div key={cert} className="flex items-center gap-3 rounded-lg border border-border/50 bg-surface/50 p-4">
                                <Award className="h-5 w-5 shrink-0 text-primary-500" />
                                <span className="text-sm font-medium">{cert}</span>
                            </div>
                        ))}
                    </div>
                </section>
            </FadeIn>

            <FadeIn delay={0.15}>
                <section className="space-y-6">
                    <div className="flex items-center gap-2">
                        <Briefcase className="h-5 w-5 text-primary-500" />
                        <h2 className="font-serif text-2xl font-bold">Tech & Data Experience</h2>
                    </div>
                    <div className="space-y-4">
                        {techData.techExperience.map((job, index) => (
                            <Card key={index} className="hover:border-primary-500/50">
                                <CardHeader>
                                    <div className="flex justify-between items-start flex-col sm:flex-row gap-2">
                                        <div>
                                            <CardTitle className="text-lg">{job.role}</CardTitle>
                                            <CardDescription className="font-medium">
                                                {job.company} <span className="text-muted-foreground font-normal">· {job.location}</span>
                                            </CardDescription>
                                        </div>
                                        <Badge variant="outline">{job.duration}</Badge>
                                    </div>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-muted-foreground text-sm">{job.description}</p>
                                </CardContent>
                            </Card>
                        ))}
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
