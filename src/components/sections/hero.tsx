"use client"

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { profile } from "@/lib/data"

export function Hero() {
    const [index, setIndex] = useState(0)

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prev) => (prev + 1) % profile.taglines.length)
        }, 3000)
        return () => clearInterval(interval)
    }, [])

    return (
        <section className="relative flex min-h-[70vh] items-center justify-center overflow-hidden py-20 px-4">
            {/* Subtle Background Elements */}
            <div className="absolute inset-0 z-0 bg-background bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary-100/40 via-background to-secondary-100/40 dark:from-primary-900/10 dark:to-secondary-900/10"></div>

            <div className="container relative z-10 mx-auto max-w-screen-xl space-y-8 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <h1 className="font-serif text-5xl font-bold tracking-tight sm:text-7xl md:text-8xl">
                        Aganbi Gare
                    </h1>
                </motion.div>

                <div className="h-12 overflow-hidden sm:h-16">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.5 }}
                            className="flex items-center justify-center"
                        >
                            <h2 className="text-xl font-medium text-muted-foreground sm:text-2xl md:text-3xl">
                                {profile.taglines[index]}
                            </h2>
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>
        </section>
    )
}
