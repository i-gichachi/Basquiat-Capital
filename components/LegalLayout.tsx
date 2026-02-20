"use client";

import Link from "next/link";
import { FadeUp, SlideLeft, GoldLine } from "@/components/Animate";

interface LegalSection {
    number?: string;
    heading: string;
    content: string | React.ReactNode;
    isWarning?: boolean;
}

interface LegalLayoutProps {
    label: string;
    title: string;
    lastUpdated: string;
    subtitle: string;
    sections: LegalSection[];
    tableOfContents: { label: string; anchor: string }[];
}

export default function LegalLayout({
    label,
    title,
    lastUpdated,
    subtitle,
    sections,
    tableOfContents
}: LegalLayoutProps) {
    return (
        <main className="flex flex-col min-h-screen" style={{ backgroundColor: '#FAFAFA' }}>

            {/* ── COMPACT HERO ─────────────────────────────────────── */}
            <section
                className="relative flex items-center justify-center overflow-hidden"
                style={{
                    backgroundColor: '#0B2545',
                    minHeight: 'clamp(320px, 42vh, 420px)',
                }}
            >
                {/* Subtle grid */}
                <div
                    className="absolute inset-0 z-0"
                    style={{
                        backgroundImage: `
              linear-gradient(rgba(240,180,41,0.05) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)
            `,
                        backgroundSize: '80px 80px, 120px 120px'
                    }}
                />

                {/* BC Monogram watermark */}
                <div
                    className="absolute -bottom-8 -right-8 pointer-events-none select-none z-0"
                    style={{ opacity: 0.03 }}
                >
                    <span
                        className="font-serif leading-none text-white"
                        style={{ fontSize: 'clamp(120px, 18vw, 260px)' }}
                    >BC</span>
                </div>

                {/* Content */}
                <div className="relative z-10 text-center px-6 md:px-12 max-w-3xl mx-auto w-full">
                    <FadeUp delay={100}>
                        <span
                            className="font-sans block mb-5"
                            style={{
                                fontSize: '11px',
                                letterSpacing: '0.25em',
                                textTransform: 'uppercase',
                                color: '#F0B429'
                            }}
                        >
                            {label}
                        </span>
                    </FadeUp>

                    <GoldLine delay={150} centered={true} />

                    <FadeUp delay={300}>
                        <h1
                            className="font-serif font-normal text-white mt-5 leading-tight"
                            style={{ fontSize: 'clamp(32px, 6vw, 62px)' }}
                        >
                            {title}
                        </h1>
                    </FadeUp>

                    <FadeUp delay={450}>
                        <p
                            className="font-sans mt-4 mx-auto"
                            style={{
                                fontSize: 'clamp(13px, 1.6vw, 15px)',
                                color: 'rgba(255,255,255,0.45)',
                                maxWidth: '480px'
                            }}
                        >
                            {subtitle}
                        </p>
                    </FadeUp>
                </div>
            </section>

            {/* ── CONTENT ──────────────────────────────────────────── */}
            <section className="py-16 md:py-24" style={{ backgroundColor: '#FAFAFA' }}>
                <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-20">

                        {/* ── Left sidebar - sticky TOC ─────────────────── */}
                        <div className="lg:col-span-3">
                            <div className="lg:sticky lg:top-32">

                                {/* Last Updated */}
                                <FadeUp delay={0}>
                                    <div className="mb-8">
                                        <span
                                            className="font-sans block mb-1"
                                            style={{
                                                fontSize: '10px',
                                                letterSpacing: '0.2em',
                                                textTransform: 'uppercase',
                                                color: '#F0B429'
                                            }}
                                        >
                                            Last Updated
                                        </span>
                                        <span
                                            className="font-sans"
                                            style={{ fontSize: '13px', color: '#9CA3AF' }}
                                        >
                                            {lastUpdated}
                                        </span>
                                    </div>
                                </FadeUp>

                                {/* Divider */}
                                <div style={{ height: '1px', backgroundColor: '#E5E7EB', marginBottom: '24px' }} />

                                {/* Table of contents */}
                                <FadeUp delay={100}>
                                    <span
                                        className="font-sans block mb-4"
                                        style={{
                                            fontSize: '10px',
                                            letterSpacing: '0.2em',
                                            textTransform: 'uppercase',
                                            color: '#9CA3AF'
                                        }}
                                    >
                                        Contents
                                    </span>
                                    <nav className="space-y-1">
                                        {tableOfContents.map((item, i) => (
                                            <a
                                                key={i}
                                                href={`#${item.anchor}`}
                                                className="flex items-start gap-3 font-sans py-2 transition-colors duration-300 group"
                                                style={{
                                                    fontSize: '13px',
                                                    color: '#9CA3AF',
                                                    textDecoration: 'none',
                                                    lineHeight: 1.5
                                                }}
                                                onMouseEnter={e => (e.currentTarget as HTMLAnchorElement).style.color = '#F0B429'}
                                                onMouseLeave={e => (e.currentTarget as HTMLAnchorElement).style.color = '#9CA3AF'}
                                            >
                                                <div
                                                    style={{
                                                        width: '4px',
                                                        height: '4px',
                                                        borderRadius: '50%',
                                                        backgroundColor: '#F0B429',
                                                        opacity: 0.4,
                                                        flexShrink: 0,
                                                        marginTop: '7px'
                                                    }}
                                                />
                                                {item.label}
                                            </a>
                                        ))}
                                    </nav>
                                </FadeUp>

                                {/* Divider */}
                                <div style={{ height: '1px', backgroundColor: '#E5E7EB', margin: '24px 0' }} />

                                {/* Legal links */}
                                <FadeUp delay={200}>
                                    <span
                                        className="font-sans block mb-3"
                                        style={{
                                            fontSize: '10px',
                                            letterSpacing: '0.2em',
                                            textTransform: 'uppercase',
                                            color: '#9CA3AF'
                                        }}
                                    >
                                        Legal Documents
                                    </span>
                                    <div className="space-y-2">
                                        {[
                                            { label: 'Terms of Use', href: '/legal/terms' },
                                            { label: 'Privacy Policy', href: '/legal/privacy' },
                                            { label: 'Risk Disclosure', href: '/legal/risk-disclosure' }
                                        ].map((link, i) => (
                                            <Link
                                                key={i}
                                                href={link.href}
                                                className="block font-sans py-1 transition-colors duration-300"
                                                style={{ fontSize: '13px', color: '#6B7280', textDecoration: 'none' }}
                                                onMouseEnter={e => (e.currentTarget as HTMLAnchorElement).style.color = '#F0B429'}
                                                onMouseLeave={e => (e.currentTarget as HTMLAnchorElement).style.color = '#6B7280'}
                                            >
                                                {link.label}
                                            </Link>
                                        ))}
                                    </div>
                                </FadeUp>

                            </div>
                        </div>

                        {/* ── Right column — document content ──────────── */}
                        <div className="lg:col-span-9">
                            <div style={{ maxWidth: '720px' }}>
                                {sections.map((section, i) => (
                                    <FadeUp key={i} delay={i * 40}>
                                        <div
                                            id={tableOfContents[i]?.anchor}
                                            className={i === 0 ? 'mb-10' : 'mb-10 pt-2'}
                                        >
                                            {/* Warning block — for Risk Disclosure alert */}
                                            {section.isWarning ? (
                                                <div
                                                    className="mb-8 p-6"
                                                    style={{
                                                        borderLeft: '3px solid #F0B429',
                                                        backgroundColor: '#F4F4F5'
                                                    }}
                                                >
                                                    <p
                                                        className="font-sans"
                                                        style={{ fontSize: '14px', color: '#0B2545', lineHeight: 1.85, fontWeight: 500 }}
                                                    >
                                                        {section.content as string}
                                                    </p>
                                                </div>
                                            ) : (
                                                <>
                                                    {/* Section heading with gold left border */}
                                                    <div
                                                        className="flex items-start gap-4 mb-5"
                                                        style={{ borderLeft: '2px solid #F0B429', paddingLeft: '16px' }}
                                                    >
                                                        <h2
                                                            className="font-sans font-medium"
                                                            style={{
                                                                fontSize: 'clamp(14px, 1.8vw, 16px)',
                                                                color: '#0B2545',
                                                                letterSpacing: '0.02em',
                                                                lineHeight: 1.4
                                                            }}
                                                        >
                                                            {section.number && (
                                                                <span style={{ color: '#F0B429', marginRight: '8px' }}>
                                                                    {section.number}.
                                                                </span>
                                                            )}
                                                            {section.heading}
                                                        </h2>
                                                    </div>

                                                    {/* Body content */}
                                                    {typeof section.content === 'string' ? (
                                                        <p
                                                            className="font-sans"
                                                            style={{
                                                                fontSize: 'clamp(14px, 1.6vw, 15px)',
                                                                color: '#374151',
                                                                lineHeight: 1.95,
                                                                paddingLeft: '20px'
                                                            }}
                                                        >
                                                            {section.content}
                                                        </p>
                                                    ) : (
                                                        <div style={{ paddingLeft: '20px' }}>
                                                            {section.content}
                                                        </div>
                                                    )}

                                                    {/* Section divider */}
                                                    {i < sections.length - 1 && (
                                                        <div
                                                            style={{
                                                                height: '1px',
                                                                backgroundColor: '#E5E7EB',
                                                                marginTop: '32px'
                                                            }}
                                                        />
                                                    )}
                                                </>
                                            )}
                                        </div>
                                    </FadeUp>
                                ))}
                            </div>
                        </div>

                    </div>
                </div>
            </section>

        </main>
    );
}
