import Link from "next/link"
import { Github, Linkedin, Youtube, Mail } from "lucide-react"
import { profile } from "@/lib/data"

export function Footer() {
    return (
        <footer className="border-t border-border/40 py-6 md:px-8 md:py-0">
            <div className="container mx-auto flex max-w-screen-xl flex-col items-center justify-between gap-4 md:h-16 md:flex-row px-4">
                <p className="text-sm leading-loose text-muted-foreground text-center md:text-left">
                    Built according to the multifaceted vision of{" "}
                    <span className="font-bold">Aganbi Gare</span>.
                </p>
                <div className="flex items-center gap-4">
                    <Link href={profile.socials.github} target="_blank" rel="noreferrer">
                        <Github className="h-4 w-4 text-muted-foreground transition-colors hover:text-primary-500" />
                        <span className="sr-only">GitHub</span>
                    </Link>
                    <Link href={profile.socials.linkedin} target="_blank" rel="noreferrer">
                        <Linkedin className="h-4 w-4 text-muted-foreground transition-colors hover:text-primary-500" />
                        <span className="sr-only">LinkedIn</span>
                    </Link>
                    <Link href={profile.socials.youtube} target="_blank" rel="noreferrer">
                        <Youtube className="h-4 w-4 text-muted-foreground transition-colors hover:text-primary-500" />
                        <span className="sr-only">YouTube</span>
                    </Link>
                    <Link href={`mailto:${profile.socials.email}`}>
                        <Mail className="h-4 w-4 text-muted-foreground transition-colors hover:text-primary-500" />
                        <span className="sr-only">Email</span>
                    </Link>
                </div>
            </div>
        </footer>
    )
}
