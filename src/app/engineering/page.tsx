import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { FadeIn } from "@/components/ui/motion"
import { Download } from "lucide-react"
import { engineeringData } from "@/lib/data"
import type { Metadata } from "next"

export const metadata: Metadata = {
    title: "Engineering",
    description: "Controls & Instrumentation engineering expertise — PLC programming, SCADA systems, process automation, and industrial networking.",
}

export default function EngineeringPage() {
    return (
        <div className="container mx-auto max-w-screen-xl space-y-12 px-4 py-16">
            <FadeIn>
                <header className="space-y-4">
                    <h1 className="font-serif text-4xl font-bold tracking-tight md:text-5xl">
                        Controls & Instrumentation
                    </h1>
                    <p className="max-w-2xl text-lg text-muted-foreground">
                        {engineeringData.summary}
                    </p>
                    <Button asChild className="mt-2">
                        <a href={engineeringData.cvUrl} download>
                            <Download className="mr-2 h-4 w-4" />
                            Download CV
                        </a>
                    </Button>
                </header>
            </FadeIn>

            <FadeIn delay={0.1}>
                <section className="space-y-6">
                    <h2 className="font-serif text-2xl font-bold">Core Competencies</h2>
                    <div className="flex flex-wrap gap-2">
                        {engineeringData.skills.map((skill) => (
                            <Badge key={skill} variant="secondary" className="text-sm px-3 py-1">
                                {skill}
                            </Badge>
                        ))}
                    </div>
                </section>
            </FadeIn>

            <FadeIn delay={0.2}>
                <section className="space-y-6">
                    <h2 className="font-serif text-2xl font-bold">Experience</h2>
                    <div className="space-y-6 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-border before:to-transparent">
                        {engineeringData.experience.map((job, index) => (
                            <div key={index} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                                <div className="flex items-center justify-center w-10 h-10 rounded-full border border-surface bg-background shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow-sm z-10 transition-colors group-hover:bg-secondary-50 group-hover:border-secondary-500">
                                    <div className="w-3 h-3 bg-secondary-500 rounded-full"></div>
                                </div>
                                <Card className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] hover:border-secondary-500/50">
                                    <CardHeader>
                                        <div className="flex justify-between items-start mb-2 flex-col sm:flex-row gap-2">
                                            <CardTitle className="text-xl">{job.role}</CardTitle>
                                            <Badge variant="outline">{job.duration}</Badge>
                                        </div>
                                        <CardDescription className="font-medium text-foreground">{job.company}</CardDescription>
                                    </CardHeader>
                                    <CardContent>
                                        <p className="text-muted-foreground">{job.description}</p>
                                    </CardContent>
                                </Card>
                            </div>
                        ))}
                    </div>
                </section>
            </FadeIn>
        </div>
    )
}
