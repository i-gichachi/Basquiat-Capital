"use client";

import Link from "next/link";
import { useEffect, useState, useRef } from "react";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, Clock, Calendar } from "lucide-react";
import { getBlogPost, getRelatedPosts } from "@/lib/blogData";
import { FadeUp, SlideLeft } from "@/components/Animate";
import Image from "next/image";

interface Props {
    params: { slug: string };
}

// Reading Progress Bar
function ReadingProgress() {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            const docHeight = document.documentElement.scrollHeight - window.innerHeight;
            const pct = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
            setProgress(Math.min(100, pct));
        };
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div
            className="fixed top-0 left-0 right-0 z-50"
            style={{ height: '2px', backgroundColor: 'rgba(11,37,69,0.08)' }}
        >
            <div
                style={{
                    height: '100%',
                    width: `${progress}%`,
                    backgroundColor: '#F0B429',
                    transition: 'width 0.1s linear',
                }}
            />
        </div>
    );
}

export default function BlogArticle({ params }: Props) {
    const post = getBlogPost(params.slug);
    if (!post) notFound();

    const related = getRelatedPosts(post.relatedSlugs);

    // Estimate read time
    const wordCount = post.content.reduce((acc, s) => acc + (s.body?.split(' ').length || 0), 0);
    const readTime = Math.max(3, Math.ceil(wordCount / 200));

    return (
        <>
            {/* Reading progress bar - fixed at top of page */}
            <ReadingProgress />

            <main className="flex flex-col min-h-screen" style={{ backgroundColor: '#FAFAFA' }}>

                {/* ── ARTICLE HERO ──────────────────────────────────── */}
                <section
                    className="relative flex flex-col justify-end overflow-hidden"
                    style={{
                        backgroundColor: '#0B2545',
                        minHeight: 'clamp(300px, 40vh, 480px)',
                        padding: 'clamp(40px, 6vw, 80px) 0 clamp(40px, 5vw, 60px)',
                    }}
                >
                    {/* Background Image - Abstract Data Stream */}
                    <div className="absolute inset-0 z-0">
                        <Image
                            src="/images/insights_hero.png"
                            alt="Background"
                            fill
                            className="object-cover object-center"
                            style={{ opacity: 0.3 }}
                            priority
                        />
                    </div>

                    {/* Subtle data-stream grid pattern */}
                    <div
                        className="absolute inset-0 z-0"
                        style={{
                            backgroundImage: `
                linear-gradient(rgba(240,180,41,0.06) 1px, transparent 1px),
                linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)
              `,
                            backgroundSize: '80px 80px, 120px 120px'
                        }}
                    />

                    {/* Dark gradient at bottom for text legibility */}
                    <div
                        className="absolute bottom-0 left-0 right-0 z-0"
                        style={{ height: '80%', background: 'linear-gradient(to top, rgba(11,37,69,0.9), rgba(11,37,69,0.4), transparent)' }}
                    />

                    <div className="relative z-10 max-w-4xl mx-auto px-6 md:px-12 lg:px-24 w-full">

                        {/* Back link */}
                        <SlideLeft delay={0}>
                            <Link
                                href="/insights"
                                className="inline-flex items-center gap-2 mb-8 font-sans transition-all duration-300 group"
                                style={{
                                    fontSize: '11px',
                                    letterSpacing: '0.18em',
                                    textTransform: 'uppercase',
                                    color: 'rgba(255,255,255,0.60)'
                                }}
                                onMouseEnter={e => (e.currentTarget as HTMLAnchorElement).style.color = '#F0B429'}
                                onMouseLeave={e => (e.currentTarget as HTMLAnchorElement).style.color = 'rgba(255,255,255,0.60)'}
                            >
                                <ArrowLeft size={11} className="transition-transform duration-300 group-hover:-translate-x-1" />
                                Back to Insights
                            </Link>
                        </SlideLeft>

                        {/* Meta row */}
                        <FadeUp delay={100}>
                            <div className="flex flex-wrap items-center gap-4 md:gap-6 mb-5">
                                <span
                                    className="font-sans"
                                    style={{
                                        fontSize: '10px',
                                        letterSpacing: '0.15em',
                                        textTransform: 'uppercase',
                                        color: '#0B2545',
                                        backgroundColor: 'rgba(240,180,41,0.90)',
                                        padding: '3px 10px'
                                    }}
                                >
                                    {post.category}
                                </span>
                                <div className="flex items-center gap-1.5">
                                    <Calendar size={11} style={{ color: 'rgba(255,255,255,0.50)' }} />
                                    <span className="font-sans" style={{ fontSize: '11px', letterSpacing: '0.08em', color: 'rgba(255,255,255,0.50)' }}>
                                        {post.date}
                                    </span>
                                </div>
                                <div className="flex items-center gap-1.5">
                                    <Clock size={11} style={{ color: 'rgba(255,255,255,0.50)' }} />
                                    <span className="font-sans" style={{ fontSize: '11px', color: 'rgba(255,255,255,0.50)' }}>
                                        {readTime} min read
                                    </span>
                                </div>
                            </div>
                        </FadeUp>

                        {/* Title */}
                        <FadeUp delay={200}>
                            <h1
                                className="font-serif font-normal text-white leading-[1.08]"
                                style={{ fontSize: 'clamp(26px, 5vw, 54px)', maxWidth: '820px' }}
                            >
                                {post.title}
                            </h1>
                        </FadeUp>

                        {/* Gold underline */}
                        <FadeUp delay={350}>
                            <div className="mt-6" style={{ width: '52px', height: '2px', backgroundColor: '#F0B429' }} />
                        </FadeUp>
                    </div>
                </section>

                {/* ── ARTICLE BODY ──────────────────────────────────── */}
                <section className="py-12 md:py-20" style={{ backgroundColor: '#FAFAFA' }}>
                    <div
                        className="mx-auto px-6 md:px-12"
                        style={{ maxWidth: '740px' }}
                    >
                        {post.content.map((section, i) => {

                            // ── Disclaimer block ──
                            if (section.isDisclaimer) {
                                return (
                                    <div
                                        key={i}
                                        className="mb-8 px-5 py-4"
                                        style={{
                                            borderLeft: '2px solid rgba(240,180,41,0.5)',
                                            backgroundColor: '#F4F4F5'
                                        }}
                                    >
                                        <p
                                            className="font-sans"
                                            style={{ fontSize: '12px', letterSpacing: '0.05em', color: '#9CA3AF', lineHeight: 1.8, fontStyle: 'italic' }}
                                        >
                                            <span style={{ textTransform: 'uppercase', letterSpacing: '0.1em', color: '#F0B429', fontStyle: 'normal', fontSize: '10px' }}>
                                                Disclaimer -{' '}
                                            </span>
                                            {section.body}
                                        </p>
                                    </div>
                                );
                            }

                            return (
                                <div key={i} className={i === 0 ? 'mb-10' : 'mb-8'}>

                                    {/* Section heading with gold left rule */}
                                    {section.heading && (
                                        <FadeUp delay={0}>
                                            <div className="flex items-start gap-4 mb-5 mt-10">
                                                {/* Gold left border accent */}
                                                <div
                                                    className="flex-shrink-0 mt-1.5"
                                                    style={{ width: '3px', height: '24px', backgroundColor: '#F0B429', opacity: 0.7 }}
                                                />
                                                <h2
                                                    className="font-serif font-normal"
                                                    style={{
                                                        fontSize: 'clamp(20px, 3vw, 28px)',
                                                        color: '#0B2545',
                                                        lineHeight: 1.2,
                                                    }}
                                                >
                                                    {section.heading}
                                                </h2>
                                            </div>
                                        </FadeUp>
                                    )}

                                    {/* Body paragraphs */}
                                    {section.body && (
                                        <FadeUp delay={50}>
                                            <div>
                                                {section.body.split('\n\n').map((para, j) => {
                                                    // First paragraph of first section = lead paragraph (special treatment)
                                                    const isLead = i === 0 && j === 0;

                                                    return (
                                                        <p
                                                            key={j}
                                                            className="mb-5 last:mb-0"
                                                            style={{
                                                                fontFamily: isLead ? 'inherit' : 'inherit',
                                                                fontSize: isLead
                                                                    ? 'clamp(16px, 2.1vw, 19px)'
                                                                    : 'clamp(14px, 1.7vw, 16px)',
                                                                color: isLead ? '#0B2545' : '#374151',
                                                                lineHeight: isLead ? 1.8 : 1.9,
                                                                fontWeight: isLead ? 400 : 400,
                                                                letterSpacing: isLead ? '0.01em' : '0',
                                                            }}
                                                        >
                                                            {para}
                                                        </p>
                                                    );
                                                })}
                                            </div>
                                        </FadeUp>
                                    )}

                                    {/* List items */}
                                    {section.isList && section.listItems && (
                                        <FadeUp delay={80}>
                                            <ul className="mt-4 mb-5 space-y-2.5 pl-0">
                                                {section.listItems.map((item, k) => (
                                                    <li key={k} className="flex items-start gap-4">
                                                        <div
                                                            className="flex-shrink-0"
                                                            style={{
                                                                marginTop: '9px',
                                                                width: '4px',
                                                                height: '4px',
                                                                borderRadius: '50%',
                                                                backgroundColor: '#F0B429'
                                                            }}
                                                        />
                                                        <span
                                                            className="font-sans"
                                                            style={{ fontSize: 'clamp(14px, 1.6vw, 15px)', color: '#374151', lineHeight: 1.85 }}
                                                        >
                                                            {item}
                                                        </span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </FadeUp>
                                    )}

                                    {/* Pull quote - inject after section 2 for long articles */}
                                    {i === 2 && post.content.length > 4 && (
                                        <FadeUp delay={0}>
                                            <blockquote
                                                className="my-8 py-6 px-6"
                                                style={{
                                                    borderLeft: '3px solid #F0B429',
                                                    backgroundColor: '#F4F4F5',
                                                }}
                                            >
                                                <p
                                                    className="font-serif font-normal italic"
                                                    style={{
                                                        fontSize: 'clamp(17px, 2.4vw, 22px)',
                                                        color: '#0B2545',
                                                        lineHeight: 1.6,
                                                        letterSpacing: '0.01em'
                                                    }}
                                                >
                                                    "{post.excerpt}"
                                                </p>
                                                <div
                                                    className="mt-4 flex items-center gap-3"
                                                >
                                                    <div style={{ width: '24px', height: '1px', backgroundColor: '#F0B429' }} />
                                                    <span
                                                        className="font-sans"
                                                        style={{ fontSize: '10px', letterSpacing: '0.15em', textTransform: 'uppercase', color: '#9CA3AF' }}
                                                    >
                                                        Basquiat Capital
                                                    </span>
                                                </div>
                                            </blockquote>
                                        </FadeUp>
                                    )}

                                </div>
                            );
                        })}

                        {/* ── Article end divider ── */}
                        <div className="mt-12 mb-0 flex items-center gap-4">
                            <div style={{ flex: 1, height: '1px', backgroundColor: '#E5E7EB' }} />
                            <div style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#F0B429' }} />
                            <div style={{ flex: 1, height: '1px', backgroundColor: '#E5E7EB' }} />
                        </div>

                    </div>
                </section>

                {/* ── RELATED ARTICLES ──────────────────────────────── */}
                {related.length > 0 && (
                    <section className="py-16 md:py-20" style={{ backgroundColor: '#0B2545' }}>
                        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">

                            <div className="mb-10">
                                <SlideLeft delay={0}>
                                    <span
                                        className="font-sans block mb-3"
                                        style={{ fontSize: '11px', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#F0B429' }}
                                    >
                                        Continue Reading
                                    </span>
                                </SlideLeft>
                                <SlideLeft delay={100}>
                                    <h2
                                        className="font-serif font-normal text-white"
                                        style={{ fontSize: 'clamp(28px, 4vw, 42px)' }}
                                    >
                                        Related Articles
                                    </h2>
                                </SlideLeft>
                            </div>

                            {/* Separated cards Grid */}
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                {related.map((relPost, i) => (
                                    <FadeUp key={relPost.slug} delay={i * 100}>
                                        <Link href={`/insights/${relPost.slug}`} className="block h-full">
                                            <div
                                                className="group flex flex-col h-full transition-all duration-400 p-8 hover:-translate-y-1 hover:shadow-2xl hover:shadow-black/20"
                                                style={{ backgroundColor: '#0D2E57', borderRadius: '0px' }}
                                            >
                                                {/* Gold top border on hover */}
                                                <div
                                                    style={{ height: '2px', backgroundColor: '#F0B429', marginBottom: '24px', opacity: 0.3 }}
                                                    className="group-hover:opacity-100 transition-opacity duration-300"
                                                />

                                                {/* Date */}
                                                <p
                                                    className="font-sans mb-3"
                                                    style={{ fontSize: '10px', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.35)' }}
                                                >
                                                    {relPost.date}
                                                </p>

                                                {/* Gold accent line */}
                                                <div
                                                    className="mb-5 transition-all duration-500 group-hover:w-10"
                                                    style={{ width: '24px', height: '1px', backgroundColor: '#F0B429', opacity: 0.5 }}
                                                />

                                                {/* Title */}
                                                <h3
                                                    className="font-serif font-normal text-white flex-1 mb-4 leading-tight group-hover:text-basquiat-gold transition-colors duration-300"
                                                    style={{ fontSize: 'clamp(16px, 2vw, 20px)' }}
                                                >
                                                    {relPost.title}
                                                </h3>

                                                {/* Excerpt */}
                                                <p
                                                    className="font-sans"
                                                    style={{
                                                        fontSize: '13px',
                                                        color: 'rgba(255,255,255,0.40)',
                                                        lineHeight: 1.75,
                                                        display: '-webkit-box',
                                                        WebkitLineClamp: 3,
                                                        WebkitBoxOrient: 'vertical',
                                                        overflow: 'hidden'
                                                    }}
                                                >
                                                    {relPost.excerpt}
                                                </p>

                                                {/* Read Arrow - Added for clarity */}
                                                <div className="mt-6 flex justify-end opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-x-[-10px] group-hover:translate-x-0">
                                                    <ArrowRight size={16} className="text-basquiat-gold" />
                                                </div>
                                            </div>
                                        </Link>
                                    </FadeUp>
                                ))}
                            </div>

                        </div>
                    </section>
                )}

            </main>
        </>
    );
}
