import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Calendar, ArrowLeft } from "lucide-react"
import { blogData } from "@/lib/data"
import { notFound } from "next/navigation"
import type { Metadata } from "next"

export async function generateMetadata({
    params,
}: {
    params: Promise<{ slug: string }>
}): Promise<Metadata> {
    const { slug } = await params
    const post = blogData.posts.find((p) => p.slug === slug)
    if (!post) return { title: "Post Not Found" }
    return {
        title: post.title,
        description: post.excerpt,
    }
}

export function generateStaticParams() {
    return blogData.posts.map((post) => ({ slug: post.slug }))
}

export default async function BlogPost({
    params,
}: {
    params: Promise<{ slug: string }>
}) {
    const { slug } = await params
    const post = blogData.posts.find((p) => p.slug === slug)

    if (!post) {
        notFound()
    }

    return (
        <article className="container mx-auto max-w-screen-md px-4 py-16">
            <Link
                href="/blog"
                className="inline-flex items-center text-sm font-medium text-muted-foreground hover:text-foreground mb-10 transition-colors"
            >
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to all posts
            </Link>

            <header className="space-y-6 mb-12">
                <div className="flex items-center gap-4">
                    <Badge variant="secondary" className="px-3 py-1">
                        {post.category}
                    </Badge>
                    <div className="flex items-center text-sm text-muted-foreground">
                        <Calendar className="mr-2 h-4 w-4" />
                        {post.date}
                    </div>
                </div>
                <h1 className="font-serif text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl text-foreground">
                    {post.title}
                </h1>
                <p className="text-xl text-muted-foreground leading-relaxed">
                    {post.excerpt}
                </p>
            </header>

            <div className="prose prose-zinc dark:prose-invert md:prose-lg max-w-none">
                <p>{post.content}</p>
            </div>
        </article>
    )
}
