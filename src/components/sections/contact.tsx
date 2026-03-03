import { Button } from "@/components/ui/button"
import { Mail, Github, Linkedin } from "lucide-react"
import Link from "next/link"
import { profile } from "@/lib/data"

export function ContactSection() {
    return (
        <section className="container mx-auto max-w-screen-xl px-4 py-16">
            <div className="rounded-2xl border border-border bg-surface p-8 text-center space-y-6 md:p-12">
                <h2 className="font-serif text-3xl font-bold">Get in Touch</h2>
                <p className="text-muted-foreground max-w-lg mx-auto">
                    Interested in collaborating, discussing engineering challenges, or
                    just want to connect? I&apos;d love to hear from you.
                </p>
                <div className="flex flex-wrap items-center justify-center gap-4">
                    <Button asChild>
                        <a href={`mailto:${profile.socials.email}`}>
                            <Mail className="mr-2 h-4 w-4" />
                            Send Email
                        </a>
                    </Button>
                    <Button variant="outline" asChild>
                        <Link href={profile.socials.github} target="_blank">
                            <Github className="mr-2 h-4 w-4" />
                            GitHub
                        </Link>
                    </Button>
                    <Button variant="outline" asChild>
                        <Link href={profile.socials.linkedin} target="_blank">
                            <Linkedin className="mr-2 h-4 w-4" />
                            LinkedIn
                        </Link>
                    </Button>
                </div>
            </div>
        </section>
    )
}
