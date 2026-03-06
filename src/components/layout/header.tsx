"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { ThemeToggle } from "./theme-toggle"

const navLinks = [
    { href: "/engineering", label: "Engineering" },
    { href: "/technology", label: "Technology" },
    { href: "/services", label: "Services" },
    { href: "/faith", label: "Faith" },
    { href: "/entrepreneurship", label: "Business" },
]

export function Header() {
    const [mobileOpen, setMobileOpen] = useState(false)
    const pathname = usePathname()

    return (
        <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="container mx-auto flex h-16 max-w-screen-xl items-center justify-between px-4">
                <div className="flex items-center gap-6 md:gap-10">
                    <Link href="/" className="font-serif text-xl font-bold">
                        AG.
                    </Link>
                    <nav className="hidden gap-6 md:flex">
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className={`text-sm font-medium transition-colors hover:text-primary-500 ${
                                    pathname === link.href ? "text-primary-500" : ""
                                }`}
                            >
                                {link.label}
                            </Link>
                        ))}
                    </nav>
                </div>
                <div className="flex items-center gap-4">
                    <Link
                        href="/blog"
                        className={`hidden text-sm font-medium transition-colors hover:text-primary-500 md:block ${
                            pathname.startsWith("/blog") ? "text-primary-500" : ""
                        }`}
                    >
                        Blog
                    </Link>
                    <ThemeToggle />
                    <button
                        className="md:hidden"
                        onClick={() => setMobileOpen(!mobileOpen)}
                        aria-label="Toggle menu"
                    >
                        {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                    </button>
                </div>
            </div>

            <AnimatePresence>
                {mobileOpen && (
                    <motion.nav
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.2 }}
                        className="overflow-hidden border-t border-border/40 bg-background md:hidden"
                    >
                        <div className="flex flex-col gap-1 px-4 py-4">
                            {[...navLinks, { href: "/blog", label: "Blog" }].map((link) => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    onClick={() => setMobileOpen(false)}
                                    className={`rounded-lg px-3 py-2.5 text-base font-medium transition-colors hover:bg-surface-hover ${
                                        pathname === link.href || (link.href === "/blog" && pathname.startsWith("/blog"))
                                            ? "text-primary-500 bg-primary-50/10"
                                            : ""
                                    }`}
                                >
                                    {link.label}
                                </Link>
                            ))}
                        </div>
                    </motion.nav>
                )}
            </AnimatePresence>
        </header>
    )
}
