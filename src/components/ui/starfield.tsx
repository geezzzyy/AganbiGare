"use client"

import React, { useEffect, useRef } from "react"
import { cn } from "@/lib/utils"

interface Star {
    x: number
    y: number
    radius: number
    color: string
    opacity: number
    speed: number
    twinkleSpeed: number
}

export function Starfield({ className }: { className?: string }) {
    const canvasRef = useRef<HTMLCanvasElement>(null)

    useEffect(() => {
        const canvas = canvasRef.current
        if (!canvas) return

        const ctx = canvas.getContext("2d")
        if (!ctx) return

        let animationFrameId: number
        let stars: Star[] = []

        // Configuration
        const STAR_COUNT = 150 // Low to medium density
        const STAR_COLORS = [
            "255, 255, 255", // Pure white
            "240, 248, 255", // Alice blue (faint blue)
            "230, 230, 250", // Lavender (faint purple)
        ]

        const resize = () => {
            canvas.width = window.innerWidth
            canvas.height = window.innerHeight
            initStars()
        }

        const initStars = () => {
            stars = []
            for (let i = 0; i < STAR_COUNT; i++) {
                stars.push({
                    x: Math.random() * canvas.width,
                    y: Math.random() * canvas.height,
                    radius: Math.random() * 1.5 + 0.1, // Very small stars
                    color: STAR_COLORS[Math.floor(Math.random() * STAR_COLORS.length)],
                    opacity: Math.random(),
                    speed: Math.random() * 0.05 + 0.01,   // Very slow drifting Y-axis
                    twinkleSpeed: Math.random() * 0.02 + 0.005,
                })
            }
        }

        const draw = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height)

            // Draw subtle nebula gradients
            // Top Right Nebula
            const gradient1 = ctx.createRadialGradient(
                canvas.width * 0.8, canvas.height * 0.2, 0,
                canvas.width * 0.8, canvas.height * 0.2, canvas.width * 0.4
            )
            gradient1.addColorStop(0, "rgba(59, 130, 246, 0.03)") // Blue
            gradient1.addColorStop(1, "rgba(0, 0, 0, 0)")
            ctx.fillStyle = gradient1
            ctx.fillRect(0, 0, canvas.width, canvas.height)

            // Bottom Left Nebula
            const gradient2 = ctx.createRadialGradient(
                canvas.width * 0.2, canvas.height * 0.8, 0,
                canvas.width * 0.2, canvas.height * 0.8, canvas.width * 0.5
            )
            gradient2.addColorStop(0, "rgba(139, 92, 246, 0.03)") // Purple
            gradient2.addColorStop(1, "rgba(0, 0, 0, 0)")
            ctx.fillStyle = gradient2
            ctx.fillRect(0, 0, canvas.width, canvas.height)

            // Draw and update stars
            stars.forEach((star) => {
                // Twinkle effect (sine wave based on time)
                star.opacity += star.twinkleSpeed
                const currentOpacity = Math.abs(Math.sin(star.opacity)) * 0.8 + 0.2 // Between 0.2 and 1.0

                ctx.beginPath()
                ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2)
                ctx.fillStyle = `rgba(${star.color}, ${currentOpacity})`
                ctx.fill()

                // Slow drift upwards
                star.y -= star.speed

                // Loop around if out of bounds
                if (star.y < 0) {
                    star.y = canvas.height
                    star.x = Math.random() * canvas.width
                }
            })

            animationFrameId = requestAnimationFrame(draw)
        }

        window.addEventListener("resize", resize)
        resize()
        draw()

        return () => {
            window.removeEventListener("resize", resize)
            cancelAnimationFrame(animationFrameId)
        }
    }, [])

    return (
        <div className={cn("pointer-events-none fixed inset-0 -z-20 hidden dark:block", className)}>
            <canvas
                ref={canvasRef}
                className="h-full w-full opacity-60" // Ensure it stays subtle
            />
        </div>
    )
}
