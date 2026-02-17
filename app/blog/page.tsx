import Link from "next/link";
import Image from "next/image";
import { FadeUp, SlideLeft, ScaleIn, GoldLine, Cascade } from "@/components/Animate";
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
                <div className="absolute inset-0 z-0 text-center">
                    <Image
                        src={heroImage}
                        alt="Market Insights Background"
                        fill
                        className="object-cover grayscale"
                        priority
                    />
                    <div className="absolute inset-0 bg-basquiat-blue/90 mix-blend-multiply" />
                    <div className="absolute inset-0 bg-black/30" />
                </div>

                <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 text-center">
                    <FadeUp delay={0}>
                        <span className="inline-block py-1 px-3 mb-6 border border-basquiat-gold/50 text-basquiat-gold text-xs font-bold tracking-[0.2em] uppercase bg-black/20 backdrop-blur-sm">
                            Our Latest Thinking
                        </span>
                    </FadeUp>
                    <SlideLeft delay={100}>
                        <h1 className="font-serif text-[42px] md:text-[80px] font-light text-white mb-6 tracking-tight leading-[0.9]">
                            Market Insights
                        </h1>
                    </SlideLeft>
                    <FadeUp delay={250}>
                        <p className="font-sans text-[16px] md:text-[20px] text-gray-200 max-w-2xl mx-auto font-light leading-relaxed">
                            Expert perspectives on wealth management, investment strategies, and the evolving financial landscape.
                        </p>
                    </FadeUp>
                </div>
            </section>

            {/* Split Content Section */}
            <section className="py-12 md:py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-6 lg:px-12">

                    {/* Section 1: Market Intelligence */}
                    <div className="mb-12">
                        <div className="flex items-end justify-between mb-12 border-b border-gray-200 pb-4">
                            <div>
                                <SlideLeft delay={0}>
                                    <h2 className="font-serif text-[32px] font-light text-basquiat-black mb-2">Market Intelligence</h2>
                                    <p className="font-sans text-[15px] text-gray-500 font-light">Deep dives into global trends and asset allocation.</p>
                                </SlideLeft>
                            </div>
                            <FadeUp delay={100}>
                                <Link href="/blog/category/market-intelligence" className="hidden md:flex items-center gap-2 text-basquiat-blue font-bold uppercase text-[12px] tracking-widest hover:text-basquiat-gold transition-colors">
                                    View All <ArrowRight className="w-4 h-4" />
                                </Link>
                            </FadeUp>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-8">
                            {posts.filter(p => ["Market Analysis", "Strategy", "Investing"].includes(p.category)).map((post, i) => (
                                <Cascade key={i} index={i}>
                                    <Link href={`/blog/${post.slug}`} className="group flex flex-col h-full bg-white transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-basquiat-blue/5 border border-gray-100">
                                        <div className="relative h-56 overflow-hidden bg-gray-200">
                                            <Image
                                                src={blogImages[i % blogImages.length]}
                                                alt={post.title}
                                                fill
                                                className="object-cover transition-transform duration-700 group-hover:scale-105"
                                            />
                                            <div className="absolute inset-0 bg-basquiat-blue/0 group-hover:bg-basquiat-blue/10 transition-colors duration-500" />
                                            <div className="absolute top-4 left-4">
                                                <span className="bg-basquiat-blue text-white text-[10px] font-bold px-3 py-1.5 uppercase tracking-widest shadow-sm">
                                                    {post.category}
                                                </span>
                                            </div>
                                        </div>
                                        <div className="flex flex-col flex-grow p-8">
                                            <div className="flex items-center gap-4 text-[11px] font-medium text-gray-400 mb-4 tracking-wider uppercase">
                                                <div className="flex items-center gap-1.5 text-basquiat-gold">
                                                    <Calendar className="w-3.5 h-3.5" />
                                                    {post.date}
                                                </div>
                                                <div className="flex items-center gap-1.5">
                                                    <Clock className="w-3.5 h-3.5" />
                                                    {post.readTime}
                                                </div>
                                            </div>
                                            <h3 className="font-serif text-2xl font-light text-basquiat-black mb-4 leading-tight group-hover:text-basquiat-blue transition-colors duration-300">
                                                {post.title}
                                            </h3>
                                            <p className="text-gray-600 text-[14px] leading-relaxed mb-6 line-clamp-3 font-light">
                                                {post.excerpt}
                                            </p>
                                            <div className="mt-auto pt-6 border-t border-gray-100 flex items-center justify-between">
                                                <span className="text-[11px] font-bold text-basquiat-black uppercase tracking-widest group-hover:text-basquiat-blue transition-colors duration-300">
                                                    Read Article
                                                </span>
                                                <ArrowRight className="w-4 h-4 text-gray-300 group-hover:text-basquiat-gold transition-colors duration-300 transform group-hover:translate-x-1" />
                                            </div>
                                        </div>
                                    </Link>
                                </Cascade>
                            ))}
                        </div>
                    </div>

                    {/* Section 2: Financial Education */}
                    <div>
                        <div className="flex items-end justify-between mb-12 border-b border-gray-200 pb-4">
                            <div>
                                <SlideLeft delay={0}>
                                    <h2 className="font-serif text-[32px] font-light text-basquiat-black mb-2">Financial Education</h2>
                                    <p className="font-sans text-[15px] text-gray-500 font-light">Foundational knowledge for building long-term wealth.</p>
                                </SlideLeft>
                            </div>
                            <FadeUp delay={100}>
                                <Link href="/blog/category/financial-education" className="hidden md:flex items-center gap-2 text-basquiat-blue font-bold uppercase text-[12px] tracking-widest hover:text-basquiat-gold transition-colors">
                                    View All <ArrowRight className="w-4 h-4" />
                                </Link>
                            </FadeUp>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-8">
                            {posts.filter(p => !["Market Analysis", "Strategy", "Investing"].includes(p.category)).map((post, i) => (
                                <Cascade key={i} index={i}>
                                    <Link href={`/blog/${post.slug}`} className="group flex flex-col h-full bg-white transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-basquiat-blue/5 border border-gray-100">
                                        <div className="relative h-56 overflow-hidden bg-gray-200">
                                            <Image
                                                src={blogImages[(i + 2) % blogImages.length]}
                                                alt={post.title}
                                                fill
                                                className="object-cover transition-transform duration-700 group-hover:scale-105"
                                            />
                                            <div className="absolute inset-0 bg-basquiat-blue/0 group-hover:bg-basquiat-blue/10 transition-colors duration-500" />
                                            <div className="absolute top-4 left-4">
                                                <span className="bg-white text-basquiat-black text-[10px] font-bold px-3 py-1.5 uppercase tracking-widest shadow-sm border border-gray-100">
                                                    {post.category}
                                                </span>
                                            </div>
                                        </div>
                                        <div className="flex flex-col flex-grow p-8">
                                            <div className="flex items-center gap-4 text-[11px] font-medium text-gray-400 mb-4 tracking-wider uppercase">
                                                <div className="flex items-center gap-1.5 text-basquiat-gold">
                                                    <Calendar className="w-3.5 h-3.5" />
                                                    {post.date}
                                                </div>
                                                <div className="flex items-center gap-1.5">
                                                    <Clock className="w-3.5 h-3.5" />
                                                    {post.readTime}
                                                </div>
                                            </div>
                                            <h3 className="font-serif text-2xl font-light text-basquiat-black mb-4 leading-tight group-hover:text-basquiat-blue transition-colors duration-300">
                                                {post.title}
                                            </h3>
                                            <p className="text-gray-600 text-[14px] leading-relaxed mb-6 line-clamp-3 font-light">
                                                {post.excerpt}
                                            </p>
                                            <div className="mt-auto pt-6 border-t border-gray-100 flex items-center justify-between">
                                                <span className="text-[11px] font-bold text-basquiat-black uppercase tracking-widest group-hover:text-basquiat-blue transition-colors duration-300">
                                                    Read Article
                                                </span>
                                                <ArrowRight className="w-4 h-4 text-gray-300 group-hover:text-basquiat-gold transition-colors duration-300 transform group-hover:translate-x-1" />
                                            </div>
                                        </div>
                                    </Link>
                                </Cascade>
                            ))}
                        </div>
                    </div>

                </div>
            </section>

            {/* Newsletter Section */}
            <section className="py-12 md:py-24 bg-basquiat-black relative overflow-hidden">
                <div className="absolute inset-0 opacity-20 bg-[url('/images/secondary_bg.jpg')] bg-cover bg-center mix-blend-overlay"></div>
                <div className="max-w-4xl mx-auto px-6 lg:px-12 relative z-10 text-center">
                    <SlideLeft delay={0}>
                        <h2 className="font-serif text-[42px] md:text-[52px] font-light text-white mb-6 tracking-tight">
                            Intelligence, Quantity & Quality.
                        </h2>
                    </SlideLeft>
                    <FadeUp delay={100}>
                        <p className="text-gray-400 mb-12 max-w-xl mx-auto text-[18px] font-sans font-light leading-relaxed">
                            We provide deep market access and insights that others miss. Ready to leverage our expertise?
                        </p>
                    </FadeUp>
                    <FadeUp delay={200}>
                        <Link
                            href="/contact"
                            className="inline-flex items-center gap-3 px-10 py-5 bg-basquiat-gold text-basquiat-black font-bold uppercase tracking-widest hover:bg-white transition-colors duration-300 text-[13px]"
                        >
                            Contact Us Directly <ArrowRight className="w-5 h-5" />
                        </Link>
                    </FadeUp>
                </div>
            </section>
        </main>
    );
}
