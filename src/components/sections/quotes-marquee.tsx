"use client"

import { cn } from "@/lib/utils"

const QUOTES = [
    "“Plans fail for lack of counsel, but with many advisers they succeed.” — Proverbs 15:22",
    "“Commit to the Lord whatever you do, and he will establish your plans.” — Proverbs 16:3",
    "“Dishonest scales are an abomination, but accurate weights are his delight.” — Proverbs 11:1",
    "“The plans of the diligent lead surely to abundance.” — Proverbs 21:5",
    "“Better a little with righteousness than much gain with injustice.” — Proverbs 16:8",
    "“Whoever walks in integrity walks securely.” — Proverbs 10:9",
    "“A slack hand causes poverty, but the hand of the diligent makes rich.” — Proverbs 10:4",
    "“In all toil there is profit, but mere talk tends only to poverty.” — Proverbs 14:23",
    "“The borrower is servant to the lender.” — Proverbs 22:7",
    "“Cast your bread upon the waters, for you will find it after many days.” — Ecclesiastes 11:1",
    "“Two are better than one… if either falls, one can help the other up.” — Ecclesiastes 4:9–10",
    "“Whatever your hand finds to do, do it with all your might.” — Ecclesiastes 9:10",
    "“For I know the plans I have for you,” declares the Lord… “plans to prosper you and not to harm you.” — Jeremiah 29:11",
    "“Let all that you do be done in love.” — 1 Corinthians 16:14",
    "“Well done, good and faithful servant.” — Matthew 25:23",
    "“To whom much is given, much will be required.” — Luke 12:48",
    "“Seek first the kingdom of God… and all these things will be added to you.” — Matthew 6:33",
    "“I can do all things through Christ who strengthens me.” — Philippians 4:13",
    "“Faith without works is dead.” — James 2:17",
    "“The will of God will not take us where the grace of God cannot sustain us.” — Billy Graham",
    "“You are never too old to set another goal or to dream a new dream.” — C.S. Lewis",
    "“Do small things with great love.” — Mother Teresa",
    "“Trust the past to God’s mercy, the present to His love, and the future to His providence.” — Augustine of Hippo",
    "“Whatever your work is, do it as if you were doing it for God.” — Martin Luther",
    "“Humility is not thinking less of yourself, it is thinking of yourself less.” — Rick Warren",
    "“Do all the good you can, by all the means you can, in all the ways you can.” — John Wesley",
    "“The fear of the Lord is the beginning of wisdom.” — King Solomon (Proverbs 9:10)",
    "“Run in such a way as to get the prize.” — Apostle Paul (1 Corinthians 9:24)",
    "“For what shall it profit a man if he gains the whole world but loses his soul?” — Jesus Christ (Mark 8:36)",
]

export function QuotesMarquee() {
    return (
        <section className="relative flex w-full overflow-hidden border-b border-border/40 bg-surface/30 py-4 sm:py-6">
            <div className="flex w-fit animate-marquee whitespace-nowrap items-center">
                {/* Render the quotes twice to create a seamless infinite loop */}
                {[...QUOTES, ...QUOTES].map((quote, idx) => (
                    <div
                        key={idx}
                        className={cn(
                            "mx-4 inline-flex items-center text-sm tracking-wide sm:text-base md:mx-8 md:text-lg",
                            "font-serif italic text-muted-foreground/80 transition-colors duration-300 hover:text-foreground"
                        )}
                    >
                        <span className="mr-8 md:mr-16 text-primary-500/30">✦</span>
                        {quote}
                    </div>
                ))}
            </div>

            {/* Fade edges to smooth the entry/exit of the text */}
            <div className="pointer-events-none absolute inset-y-0 left-0 w-1/12 bg-gradient-to-r from-background to-transparent" />
            <div className="pointer-events-none absolute inset-y-0 right-0 w-1/12 bg-gradient-to-l from-background to-transparent" />
        </section>
    )
}
