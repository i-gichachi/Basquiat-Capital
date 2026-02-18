"use client";

import Image from "next/image";
import Link from "next/link";
import { Clock, Calendar, ArrowRight } from "lucide-react";
import { FadeUp, SlideLeft, Cascade, GoldLine } from "@/components/Animate";
import { blogPosts } from "@/lib/blogData";

// Split posts into two sections
const marketIntelligence = blogPosts.slice(0, 5);
const financialEducation = blogPosts.slice(5, 10);

// Card thumbnail images - mapped to existing paths
const cardImages: Record<string, string> = {
    "reflecting-on-2025-tips-for-setting-financial-goals-in-2026": "/images/blog/reflecting-on-2025-tips-for-setting-financial-goals-in-2026.jpg",
    "separating-fact-from-fiction-financial-independence-myths": "/images/blog/separating-fact-from-fiction-financial-independence-myths.jpg",
    "what-is-residual-income-and-how-can-it-secure-your-future": "/images/blog/what-is-residual-income-and-how-can-it-secure-your-future.jpg",
    "steps-to-financial-freedom-building-wealth-with-planning": "/images/blog/steps-to-financial-freedom-building-wealth-with-planning.jpg",
    "stocks-to-buy-now-with-tariffs-3-top-picks-amid-market-panic": "/images/blog/stocks-to-buy-now-with-tariffs-3-top-picks-amid-market-panic.jpg",
    "passive-income-ideas-for-long-term-financial-planning": "/images/blog/passive-income-ideas-for-long-term-financial-planning.jpg",
    "how-to-break-free-from-the-paycheck-to-paycheck-cycle": "/images/blog/how-to-break-free-from-the-paycheck-to-paycheck-cycle.jpg",
    "passive-income-in-a-few-steps-what-you-need-to-know": "/images/blog/passive-income-in-a-few-steps-what-you-need-to-know.jpg",
    "how-to-choose-the-right-investment-plan-for-your-goals": "/images/blog/how-to-choose-the-right-investment-plan-for-your-goals.jpg",
    "tailored-stock-picks-a-smart-strategy-for-wealth-building": "/images/blog/tailored-stock-picks-a-smart-strategy-for-wealth-building.jpg",
};

function BlogCard({ post, index }: { post: typeof blogPosts[0]; index: number }) {
    const imgSrc = cardImages[post.slug] || "/images/insights_hero.png";

    return (
        <Cascade index={index}>
            <Link href={`/insights/${post.slug}`}>
                <article
                    className="group flex flex-col h-full transition-all duration-400"
                    style={{
                        backgroundColor: '#FFFFFF',
                        border: '1px solid #E5E7EB',
                    }}
                    onMouseEnter={e => {
                        const el = e.currentTarget as HTMLElement;
                        el.style.borderColor = 'rgba(240,180,41,0.35)';
                        el.style.boxShadow = '0 16px 40px rgba(11,37,69,0.09)';
                        el.style.transform = 'translateY(-4px)';
                    }}
                    onMouseLeave={e => {
                        const el = e.currentTarget as HTMLElement;
                        el.style.borderColor = '#E5E7EB';
                        el.style.boxShadow = 'none';
                        el.style.transform = 'translateY(0)';
                    }}
                >
                    {/* Image */}
                    <div className="relative w-full overflow-hidden" style={{ aspectRatio: '16/9' }}>
                        <Image
                            src={imgSrc}
                            alt={post.title}
                            fill
                            className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                        />
                        {/* Category badge */}
                        <div
                            className="absolute top-4 left-4 font-sans"
                            style={{
                                fontSize: '10px',
                                letterSpacing: '0.15em',
                                textTransform: 'uppercase',
                                color: '#0B2545',
                                backgroundColor: 'rgba(240,180,41,0.92)',
                                padding: '4px 10px',
                            }}
                        >
                            {post.category}
                        </div>
                    </div>

                    {/* Content */}
                    <div className="flex flex-col flex-1 p-6">
                        {/* Meta */}
                        <div className="flex items-center gap-4 mb-4">
                            <div className="flex items-center gap-1.5">
                                <Calendar size={11} style={{ color: '#F0B429' }} />
                                <span className="font-sans" style={{ fontSize: '11px', letterSpacing: '0.08em', textTransform: 'uppercase', color: '#9CA3AF' }}>
                                    {post.date}
                                </span>
                            </div>
                            <div className="flex items-center gap-1.5">
                                <Clock size={11} style={{ color: '#F0B429' }} />
                                <span className="font-sans" style={{ fontSize: '11px', color: '#9CA3AF' }}>{post.readTime}</span>
                            </div>
                        </div>

                        {/* Gold accent */}
                        <div
                            className="mb-4 transition-all duration-500"
                            style={{ width: '24px', height: '1px', backgroundColor: '#F0B429', opacity: 0.6 }}
                        />

                        {/* Title */}
                        <h3
                            className="font-serif font-normal flex-1 mb-3 group-hover:text-basquiat-navy transition-colors duration-300"
                            style={{ fontSize: 'clamp(17px, 2vw, 20px)', color: '#0B2545', lineHeight: 1.3 }}
                        >
                            {post.title}
                        </h3>

                        {/* Excerpt */}
                        <p
                            className="font-sans mb-5"
                            style={{
                                fontSize: '14px',
                                color: '#6B7280',
                                lineHeight: 1.75,
                                display: '-webkit-box',
                                WebkitLineClamp: 3,
                                WebkitBoxOrient: 'vertical',
                                overflow: 'hidden'
                            }}
                        >
                            {post.excerpt}
                        </p>

                        {/* Read more */}
                        <div
                            className="font-sans flex items-center gap-2 mt-auto transition-colors duration-300 group-hover:text-basquiat-gold"
                            style={{
                                fontSize: '11px',
                                letterSpacing: '0.15em',
                                textTransform: 'uppercase',
                                color: '#0B2545'
                            }}
                        >
                            Read Article
                            <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                        </div>
                    </div>
                </article>
            </Link>
        </Cascade>
    );
}

export default function Insights() {
    return (
        <main className="flex flex-col min-h-screen" style={{ backgroundColor: '#FAFAFA' }}>

            {/* ── HERO ─────────────────────────────────────────────── */}
            <section
                className="relative flex items-center justify-center overflow-hidden"
                style={{
                    backgroundColor: '#0B2545',
                    height: 'clamp(480px, 72vh, 680px)',
                    minHeight: '480px'
                }}
            >
                {/* New data stream background */}
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/images/insights_hero.png"
                        alt="Market Insights"
                        fill
                        className="object-cover object-center"
                        style={{ opacity: 0.45 }}
                        priority
                    />
                    <div className="absolute inset-0" style={{ backgroundColor: 'rgba(11,37,69,0.65)' }} />
                </div>

                {/* BC Monogram watermark */}
                <div
                    className="absolute -bottom-10 -right-10 pointer-events-none select-none z-0"
                    style={{ opacity: 0.03 }}
                >
                    <span className="font-serif leading-none text-white" style={{ fontSize: 'clamp(140px, 22vw, 320px)' }}>BC</span>
                </div>

                {/* Content */}
                <div className="relative z-10 text-center px-6 md:px-12 max-w-3xl mx-auto w-full">

                    {/* Label - plain gold text, NO filled box */}
                    <FadeUp delay={100}>
                        <span
                            className="font-sans block mb-6"
                            style={{
                                fontSize: '11px',
                                letterSpacing: '0.25em',
                                textTransform: 'uppercase',
                                color: '#F0B429'
                            }}
                        >
                            Our Latest Thinking
                        </span>
                    </FadeUp>

                    <GoldLine delay={150} centered={true} />

                    <FadeUp delay={300}>
                        <h1
                            className="font-serif font-normal text-white mt-6 leading-[0.95] tracking-tight"
                            style={{ fontSize: 'clamp(48px, 9vw, 96px)' }}
                        >
                            Market Insights
                        </h1>
                    </FadeUp>

                    <FadeUp delay={500}>
                        <p
                            className="font-sans mt-6 max-w-xl mx-auto leading-[1.85]"
                            style={{
                                fontSize: 'clamp(14px, 1.8vw, 16px)',
                                color: 'rgba(255,255,255,0.55)'
                            }}
                        >
                            Expert perspectives on wealth management, investment strategies,
                            and the evolving financial landscape.
                        </p>
                    </FadeUp>
                </div>
            </section>

            {/* ── MARKET INTELLIGENCE ─────────────────────────────── */}
            <section className="py-16 md:py-24" style={{ backgroundColor: '#FAFAFA' }}>

                <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">

                    {/* Section header - NO "VIEW ALL" link */}
                    <div className="mb-12 md:mb-14">
                        <SlideLeft delay={0}>
                            <span
                                className="font-sans block mb-3"
                                style={{ fontSize: '11px', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#F0B429' }}
                            >
                                Intelligence
                            </span>
                        </SlideLeft>
                        <SlideLeft delay={100}>
                            <h2
                                className="font-serif font-normal"
                                style={{ fontSize: 'clamp(32px, 5vw, 48px)', color: '#0B2545' }}
                            >
                                Market Intelligence
                            </h2>
                        </SlideLeft>
                        <FadeUp delay={200}>
                            <p
                                className="font-sans mt-3"
                                style={{ fontSize: '15px', color: '#6B7280' }}
                            >
                                Deep dives into global trends and asset allocation.
                            </p>
                        </FadeUp>
                        {/* Gold rule */}
                        <div className="mt-6" style={{ width: '100%', height: '1px', backgroundColor: '#E5E7EB' }}>
                            <div style={{ width: '48px', height: '2px', backgroundColor: '#F0B429', marginTop: '-1px' }} />
                        </div>
                    </div>

                    {/* Cards grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {marketIntelligence.map((post, i) => (
                            <BlogCard key={post.slug} post={post} index={i} />
                        ))}
                    </div>

                </div>
            </section>

            {/* ── FINANCIAL EDUCATION ─────────────────────────────── */}
            <section className="py-16 md:py-24" style={{ backgroundColor: '#F4F4F5' }}>

                <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">

                    {/* Section header - NO "VIEW ALL" link */}
                    <div className="mb-12 md:mb-14">
                        <SlideLeft delay={0}>
                            <span
                                className="font-sans block mb-3"
                                style={{ fontSize: '11px', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#F0B429' }}
                            >
                                Education
                            </span>
                        </SlideLeft>
                        <SlideLeft delay={100}>
                            <h2
                                className="font-serif font-normal"
                                style={{ fontSize: 'clamp(32px, 5vw, 48px)', color: '#0B2545' }}
                            >
                                Financial Education
                            </h2>
                        </SlideLeft>
                        <FadeUp delay={200}>
                            <p
                                className="font-sans mt-3"
                                style={{ fontSize: '15px', color: '#6B7280' }}
                            >
                                Foundational knowledge for building long-term wealth.
                            </p>
                        </FadeUp>
                        {/* Gold rule */}
                        <div className="mt-6" style={{ width: '100%', height: '1px', backgroundColor: '#D1D5DB' }}>
                            <div style={{ width: '48px', height: '2px', backgroundColor: '#F0B429', marginTop: '-1px' }} />
                        </div>
                    </div>

                    {/* Cards grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {financialEducation.map((post, i) => (
                            <BlogCard key={post.slug} post={post} index={i} />
                        ))}
                    </div>

                </div>
            </section>

        </main>
    );
}
