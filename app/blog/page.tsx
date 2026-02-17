import { ScrollReveal } from "@/components/ScrollReveal";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Calendar, Clock } from "lucide-react";

export default function BlogPage() {
    const heroImage = "/images/wall_st.png";

    const blogImages = [
        "/images/wall_st.png",
        "/images/forex_phone.png",
        "/images/blue_suit.png",
        "/images/secondary_bg.jpg",
    ];

    const posts = [
        {
            title: "Reflecting on 2025: Tips for Setting Financial Goals in 2026",
            date: "DEC 26, 2025",
            readTime: "5 MIN READ",
            excerpt: "As the calendar turns toward 2026, it is worth pausing to look closely at what happened in 2025 with your money. A year-end financial review does more than confirm account balances; it reveals the habits that shape your future.",
            slug: "reflecting-on-2025",
            category: "Financial Planning"
        },
        {
            title: "Separating Fact from Fiction: Financial Independence Myths",
            date: "AUG 20, 2025",
            readTime: "4 MIN READ",
            excerpt: "Have you ever caught yourself wondering what life would feel like without the weight of a rigid 9-to-5 routine? For many young professionals, financial independence represents that freedom, but the path is often misunderstood.",
            slug: "financial-independence-myths",
            category: "Lifestyle"
        },
        {
            title: "What Is Residual Income and How Can It Secure Your Future?",
            date: "JUL 31, 2025",
            readTime: "6 MIN READ",
            excerpt: "In today’s unpredictable economy, finding ways to stabilize your income and prepare for the future is more important than ever. While traditional employment offers a fixed paycheck, residual income builds lasting security.",
            slug: "what-is-residual-income",
            category: "Wealth Creation"
        },
        {
            title: "Steps to Financial Freedom: Building Wealth with Planning",
            date: "APR 23, 2025",
            readTime: "7 MIN READ",
            excerpt: "Imagine waking up with the assurance that every paycheck is advancing towards your dreams, rather than slipping through invisible gaps. Financial freedom doesn't only belong to experts; it starts with a plan.",
            slug: "steps-to-financial-freedom",
            category: "Strategy"
        },
        {
            title: "Stocks to Buy Now With Tariffs: 3 Top Picks Amid Market Panic",
            date: "APR 7, 2025",
            readTime: "3 MIN READ",
            excerpt: "Tariffs are in the headlines and so is market volatility. We analyze three top picks that show resilience and potential upside amidst the current market panic, focusing on fundamentals over fear.",
            slug: "stocks-to-buy-tariffs",
            category: "Market Analysis"
        },
        {
            title: "Passive Income Ideas for Long-Term Financial Planning",
            date: "FEB 14, 2025",
            readTime: "5 MIN READ",
            excerpt: "Imagine launching your career with countless opportunities ahead. You are eager not only to climb the corporate ladder but also to build a secure financial future that works for you, not just the other way around.",
            slug: "passive-income-ideas",
            category: "Investing"
        },
        {
            title: "How to Break Free from the Paycheck-to-Paycheck Cycle?",
            date: "JAN 14, 2025",
            readTime: "4 MIN READ",
            excerpt: "Financial stability and long-term growth are aspirations that many of us have, but oftentimes it can feel like an unattainable dream. Break the cycle with actionable steps towards liquidity.",
            slug: "break-free-paycheck-cycle",
            category: "Personal Finance"
        },
        {
            title: "Passive Income in a Few Steps: What You Need to Know",
            date: "DEC 17, 2024",
            readTime: "5 MIN READ",
            excerpt: "Passive income can offer a sense of freedom and stability that goes beyond the traditional labor-for-money exchange. Imagine a life where your finances work on autopilot.",
            slug: "passive-income-steps",
            category: "Wealth Creation"
        },
        {
            title: "How to Choose the Right Investment Plan for Your Goals",
            date: "DEC 2, 2024",
            readTime: "6 MIN READ",
            excerpt: "Picture yourself setting out on a road trip without a specific destination; it sounds like an exciting journey, doesn't it? Yet, when it comes to your financial future, a more measured approach often yields better results.",
            slug: "choose-right-investment-plan",
            category: "Strategy"
        },
        {
            title: "Tailored Stock Picks: A Smart Strategy for Wealth Building",
            date: "NOV 30, 2024",
            readTime: "4 MIN READ",
            excerpt: "Imagine strolling through a bustling marketplace, where countless vendors are beckoning you with promises of miracles for your financial future. We discuss why tailored picks beat generic advice.",
            slug: "tailored-stock-picks",
            category: "Market Analysis"
        }
    ];

    return (
        <main className="flex flex-col min-h-screen bg-white pt-20">
            {/* Hero Section */}
            <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <Image
                        src={heroImage}
                        alt="Market Insights Background"
                        fill
                        className="object-cover"
                        priority
                    />
                    <div className="absolute inset-0 bg-basquiat-blue/90 mix-blend-multiply" />
                    <div className="absolute inset-0 bg-black/30" />
                </div>

                <div className="relative z-10 container mx-auto px-6 text-center">
                    <ScrollReveal>
                        <span className="inline-block py-1 px-3 mb-6 border border-basquiat-gold/50 text-basquiat-gold text-xs font-bold tracking-[0.2em] uppercase bg-black/20 backdrop-blur-sm">
                            Our Latest Thinking
                        </span>
                        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
                            Market Insights
                        </h1>
                        <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto font-light leading-relaxed">
                            Expert perspectives on wealth management, investment strategies, and the evolving financial landscape.
                        </p>
                    </ScrollReveal>
                </div>
            </section>

            {/* Blog Grid */}
            <section className="py-24 bg-gray-50">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
                        {posts.map((post, i) => (
                            <ScrollReveal key={i} delay={i * 0.05}>
                                <Link href={`/blog/${post.slug}`} className="group flex flex-col h-full bg-white transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-basquiat-blue/5">
                                    {/* Image Container */}
                                    <div className="relative h-64 overflow-hidden bg-gray-200">
                                        <Image
                                            src={blogImages[i % blogImages.length]}
                                            alt={post.title}
                                            fill
                                            className="object-cover transition-transform duration-700 group-hover:scale-105"
                                        />
                                        <div className="absolute inset-0 bg-basquiat-blue/0 group-hover:bg-basquiat-blue/10 transition-colors duration-500" />

                                        {/* Category Badge */}
                                        <div className="absolute top-4 left-4">
                                            <span className="bg-white/95 backdrop-blur-sm text-basquiat-blue text-[10px] font-bold px-3 py-1.5 uppercase tracking-widest shadow-sm">
                                                {post.category}
                                            </span>
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <div className="flex flex-col flex-grow p-8 border-x border-b border-gray-100 group-hover:border-transparent transition-colors duration-500">
                                        <div className="flex items-center gap-4 text-xs font-medium text-gray-400 mb-4 tracking-wider uppercase">
                                            <div className="flex items-center gap-1.5 text-basquiat-gold">
                                                <Calendar className="w-3.5 h-3.5" />
                                                {post.date}
                                            </div>
                                            <div className="flex items-center gap-1.5">
                                                <Clock className="w-3.5 h-3.5" />
                                                {post.readTime}
                                            </div>
                                        </div>

                                        <h3 className="text-xl md:text-2xl font-bold text-basquiat-black mb-4 leading-tight group-hover:text-basquiat-blue transition-colors duration-300">
                                            {post.title}
                                        </h3>

                                        <p className="text-gray-600 text-sm leading-relaxed mb-6 line-clamp-3">
                                            {post.excerpt}
                                        </p>

                                        <div className="mt-auto pt-6 border-t border-gray-100 flex items-center justify-between group-hover:border-basquiat-gold/30 transition-colors duration-300">
                                            <span className="text-xs font-bold text-basquiat-black uppercase tracking-widest group-hover:text-basquiat-blue transition-colors duration-300">
                                                Read Article
                                            </span>
                                            <span className="flex items-center justify-center w-8 h-8 rounded-full bg-gray-50 text-basquiat-black group-hover:bg-basquiat-gold group-hover:text-white transition-all duration-300">
                                                <ArrowRight className="w-4 h-4 transform -rotate-45 group-hover:rotate-0 transition-transform duration-300" />
                                            </span>
                                        </div>
                                    </div>
                                </Link>
                            </ScrollReveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* Newsletter Section */}
            <section className="py-24 bg-basquiat-blue relative overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                    <Image
                        src="/images/wall_st.png"
                        alt="Pattern"
                        fill
                        className="object-cover grayscale"
                    />
                </div>
                <div className="container mx-auto px-6 relative z-10 text-center">
                    <ScrollReveal>
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                            Stay Ahead of the Market
                        </h2>
                        <p className="text-gray-300 mb-10 max-w-2xl mx-auto text-lg font-light">
                            Join our exclusive network to receive weekly insights, market analysis, and wealth management strategies directly to your inbox.
                        </p>

                        <form className="max-w-md mx-auto flex flex-col md:flex-row gap-4">
                            <input
                                type="email"
                                placeholder="Email Address"
                                className="flex-grow px-6 py-4 bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:bg-white/20 transition-all duration-300 font-light"
                            />
                            <button className="px-8 py-4 bg-basquiat-gold text-basquiat-black font-bold uppercase tracking-widest hover:bg-white transition-colors duration-300">
                                Subscribe
                            </button>
                        </form>
                    </ScrollReveal>
                </div>
            </section>
        </main>
    );
}
