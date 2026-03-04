import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { FadeIn } from "@/components/ui/motion"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { BookMarked, Video, Heart, ExternalLink, Download, Clock } from "lucide-react"
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
                            <Card key={book.title} className="border-border hover:border-muted-foreground/30 bg-surface/50 transition-colors">
                                <CardHeader className="text-center p-8 space-y-4">
                                    <div className="flex items-center justify-center gap-2">
                                        <Badge variant={book.status === "Available" ? "default" : "outline"}>
                                            {book.status === "Upcoming" && <Clock className="mr-1 h-3 w-3" />}
                                            {book.status}
                                        </Badge>
                                        <span className="text-sm text-muted-foreground">{book.year}</span>
                                    </div>
                                    <CardTitle className="font-serif text-2xl">{book.title}</CardTitle>
                                    <CardDescription className="text-base leading-relaxed">{book.description}</CardDescription>
                                    {book.downloadUrl && (
                                        <Button asChild variant="outline" className="mt-2">
                                            <a href={book.downloadUrl} download>
                                                <Download className="mr-2 h-4 w-4" />
                                                Download PDF
                                            </a>
                                        </Button>
                                    )}
                                </CardHeader>
                            </Card>
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
                    {faithData.sermons.length > 0 ? (
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
                    ) : (
                        <div className="rounded-xl border border-dashed border-border/50 bg-surface/30 p-12 text-center space-y-3">
                            <p className="text-lg font-medium text-foreground">Coming soon</p>
                            <p className="text-muted-foreground">Sermon recordings will be added here shortly.</p>
                        </div>
                    )}
                </section>
            </FadeIn>

            <div className="mx-auto w-16 h-px bg-border my-12" />

            <FadeIn delay={0.3}>
                <section className="space-y-8">
                    <div className="flex items-center gap-3 justify-center text-muted-foreground">
                        <Heart className="h-5 w-5" />
                        <h2 className="font-serif text-3xl font-bold text-foreground">52 Convictions</h2>
                    </div>
                    <div className="max-h-[600px] overflow-y-auto rounded-xl border border-border/50 bg-surface/50 p-6 md:p-8 scrollbar-thin">
                        <ol className="space-y-4">
                            {faithData.convictions.map((conviction, i) => (
                                <li key={i} className="flex gap-4 py-3 border-b border-border/20 last:border-0">
                                    <span className="shrink-0 flex h-7 w-7 items-center justify-center rounded-full bg-primary-500/10 text-xs font-bold text-primary-500">
                                        {i + 1}
                                    </span>
                                    <p className="text-base text-foreground/85 leading-relaxed">
                                        {conviction}
                                    </p>
                                </li>
                            ))}
                        </ol>
                    </div>
                </section>
            </FadeIn>
        </div>
    )
}
