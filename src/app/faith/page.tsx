import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { FadeIn } from "@/components/ui/motion"
import { BookMarked, Video, BookOpen, ExternalLink } from "lucide-react"
import Link from "next/link"
import { faithData } from "@/lib/data"
import type { Metadata } from "next"

export const metadata: Metadata = {
    title: "Faith & Reflections",
    description: "Books, sermons, and personal reflections on Christian faith by Aganbi Gare.",
}

export default function FaithPage() {
    return (
        <div className="container mx-auto max-w-screen-md space-y-16 px-4 py-20">
            <FadeIn>
                <header className="space-y-6 text-center">
                    <h1 className="font-serif text-5xl font-bold tracking-tight md:text-6xl text-foreground">
                        Faith & Reflections
                    </h1>
                    <p className="mx-auto max-w-2xl text-xl font-serif italic text-muted-foreground/80 leading-relaxed">
                        &quot;{faithData.summary}&quot;
                    </p>
                </header>
            </FadeIn>

            <div className="mx-auto w-16 h-px bg-border my-12" />

            <FadeIn delay={0.1}>
                <section className="space-y-8">
                    <div className="flex items-center gap-3 justify-center text-muted-foreground">
                        <BookMarked className="h-5 w-5" />
                        <h2 className="font-serif text-3xl font-bold text-foreground">Authored Books</h2>
                    </div>
                    <div className="grid gap-6 sm:grid-cols-2">
                        {faithData.books.map((book) => (
                            <Link key={book.title} href={book.link}>
                                <Card className="group cursor-pointer border-border hover:border-muted-foreground/30 bg-surface/50 transition-colors">
                                    <CardHeader className="text-center p-8">
                                        <div className="mb-4 text-sm font-medium text-muted-foreground">{book.year}</div>
                                        <CardTitle className="font-serif text-2xl mb-3">{book.title}</CardTitle>
                                        <CardDescription className="text-base leading-relaxed">{book.description}</CardDescription>
                                    </CardHeader>
                                </Card>
                            </Link>
                        ))}
                    </div>
                </section>
            </FadeIn>

            <div className="mx-auto w-16 h-px bg-border my-12" />

            <FadeIn delay={0.2}>
                <section className="space-y-8">
                    <div className="flex items-center gap-3 justify-center text-muted-foreground">
                        <Video className="h-5 w-5" />
                        <h2 className="font-serif text-3xl font-bold text-foreground">Sermons & Messages</h2>
                    </div>
                    <div className="grid gap-6 sm:grid-cols-1">
                        {faithData.sermons.map((sermon) => (
                            <Link key={sermon.title} href={sermon.youtubeUrl} target="_blank">
                                <Card className="group cursor-pointer border-border hover:border-muted-foreground/30 bg-surface/50 transition-colors">
                                    <CardHeader className="flex flex-row items-start gap-4 p-6">
                                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-surface-hover">
                                            <Video className="h-5 w-5 text-primary-500" />
                                        </div>
                                        <div className="space-y-1.5">
                                            <CardTitle className="text-lg group-hover:text-primary-500 transition-colors">
                                                {sermon.title}
                                                <ExternalLink className="ml-2 inline h-3.5 w-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                                            </CardTitle>
                                            <div className="text-sm text-muted-foreground">{sermon.date}</div>
                                            <CardDescription className="text-base leading-relaxed">
                                                {sermon.description}
                                            </CardDescription>
                                        </div>
                                    </CardHeader>
                                </Card>
                            </Link>
                        ))}
                    </div>
                </section>
            </FadeIn>

            <div className="mx-auto w-16 h-px bg-border my-12" />

            <FadeIn delay={0.3}>
                <section className="space-y-8 text-center">
                    <div className="flex items-center gap-3 justify-center text-muted-foreground">
                        <BookOpen className="h-5 w-5" />
                        <h2 className="font-serif text-3xl font-bold text-foreground">Personal Psalms</h2>
                    </div>
                    <div className="space-y-8">
                        {faithData.psalms.map((psalm, i) => (
                            <div key={i} className="space-y-3 py-6 border-b border-border/30 last:border-0">
                                <p className="text-sm font-medium text-primary-500 tracking-wider uppercase">
                                    {psalm.reference}
                                </p>
                                <blockquote className="font-serif text-xl md:text-2xl italic text-foreground/80 leading-relaxed max-w-xl mx-auto">
                                    &ldquo;{psalm.text}&rdquo;
                                </blockquote>
                                <p className="text-sm text-muted-foreground max-w-md mx-auto">
                                    {psalm.reflection}
                                </p>
                            </div>
                        ))}
                    </div>
                </section>
            </FadeIn>
        </div>
    )
}
