"use client"

import { useState } from "react"
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/ui/motion"
import { Calendar } from "lucide-react"
import Link from "next/link"
import { blogData } from "@/lib/data"

export default function BlogListingPage() {
    const [activeCategory, setActiveCategory] = useState("All")
    const categories = ["All", ...new Set(blogData.posts.map((p) => p.category))]
    const filteredPosts =
        activeCategory === "All"
            ? blogData.posts
            : blogData.posts.filter((p) => p.category === activeCategory)

    return (
        <div className="container mx-auto max-w-screen-md space-y-12 px-4 py-16">
            <FadeIn>
                <header className="space-y-4">
                    <h1 className="font-serif text-4xl font-bold tracking-tight md:text-5xl">
                        Writing
                    </h1>
                    <p className="max-w-2xl text-lg text-muted-foreground">
                        {blogData.summary}
                    </p>
                </header>
            </FadeIn>

            {blogData.posts.length > 0 && (
                <FadeIn delay={0.1}>
                    <div className="flex flex-wrap gap-2">
                        {categories.map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setActiveCategory(cat)}
                                className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                                    activeCategory === cat
                                        ? "bg-primary-500 text-white"
                                        : "bg-surface-hover text-muted-foreground hover:text-foreground"
                                }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                </FadeIn>
            )}

            {filteredPosts.length > 0 ? (
                <StaggerContainer className="space-y-8">
                    {filteredPosts.map((post) => (
                        <StaggerItem key={post.slug}>
                            <Link href={`/blog/${post.slug}`}>
                                <Card className="group h-full cursor-pointer hover:border-black/50 dark:hover:border-white/50 transition-colors border-border/60 shadow-sm hover:shadow">
                                    <CardHeader>
                                        <div className="flex justify-between items-start mb-3">
                                            <Badge variant="outline" className="opacity-80 group-hover:opacity-100 transition-opacity">
                                                {post.category}
                                            </Badge>
                                            <div className="flex items-center text-xs text-muted-foreground">
                                                <Calendar className="mr-1 h-3 w-3" />
                                                {post.date}
                                            </div>
                                        </div>
                                        <CardTitle className="text-2xl group-hover:text-primary-500 transition-colors">
                                            {post.title}
                                        </CardTitle>
                                        <CardDescription className="text-base text-muted-foreground mt-2 leading-relaxed">
                                            {post.excerpt}
                                        </CardDescription>
                                    </CardHeader>
                                </Card>
                            </Link>
                        </StaggerItem>
                    ))}
                </StaggerContainer>
            ) : (
                <FadeIn delay={0.1}>
                    <div className="rounded-xl border border-dashed border-border/50 bg-surface/30 p-12 text-center space-y-3">
                        <p className="text-lg font-medium text-foreground">Coming soon</p>
                        <p className="text-muted-foreground">New posts are on the way. Check back later.</p>
                    </div>
                </FadeIn>
            )}
        </div>
    )
}
