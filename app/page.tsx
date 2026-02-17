"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, TrendingUp, Globe, Briefcase, Star, ArrowUpRight } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { cn } from "@/lib/utils";
import { AnimatedStat } from "@/components/AnimatedStat";
import { FadeUp, SlideLeft, ScaleIn, Cascade, GoldLine } from "@/components/Animate";

export default function Home() {
    return (
        <main className="flex flex-col min-h-screen bg-basquiat-warm-white selection:bg-basquiat-gold selection:text-basquiat-navy">

            {/* SECTION 2 — HERO */}
            {/* Fix — complete layout rebuild */}
            <section className="relative h-screen min-h-[700px] bg-basquiat-navy flex items-center overflow-hidden">
                {/* Background Texture */}
                <div className="absolute inset-0 noise-bg z-0" />

                {/* Monogram Background */}
                <div className="absolute -bottom-20 -right-20 pointer-events-none select-none opacity-[0.03]">
                    <span className="font-serif text-[400px] leading-none text-basquiat-gold">BC</span>
                </div>

                <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 w-full h-full flex flex-col pt-24 lg:flex-row lg:items-center relative z-10">

                    {/* Left Column (55% width desktop) */}
                    <div className="w-full lg:w-[55%] flex flex-col justify-center h-full relative z-20 pb-12 lg:pb-0">
                        <GoldLine delay={200} centered={false} />

                        <div className="font-serif text-[52px] md:text-[80px] leading-[0.9] tracking-tight mb-2">
                            <FadeUp delay={300}>
                                <span className="text-basquiat-white font-light block">Capital Moves.</span>
                            </FadeUp>
                            <FadeUp delay={450}>
                                <span className="text-basquiat-gold font-semibold block">We Move First.</span>
                            </FadeUp>
                        </div>

                        <FadeUp delay={600}>
                            <div className="h-8" /> {/* Gap mb-8 equivalent */}
                            <p className="font-sans text-[16px] text-basquiat-white/70 max-w-md leading-relaxed">
                                Institutional-grade investment & advisory for the African market. We bridge the gap between global capital and local opportunity.
                            </p>
                        </FadeUp>

                        <FadeUp delay={750}>
                            <div className="h-12" /> {/* Gap mb-12 equivalent */}
                            <div className="flex flex-col sm:flex-row gap-4">
                                <Link
                                    href="/contact"
                                    className="px-8 py-4 bg-basquiat-gold text-basquiat-black font-sans text-[13px] uppercase tracking-wide font-medium hover:bg-[#D4A020] transition-colors flex items-center justify-center gap-2"
                                >
                                    Request a Meeting <ArrowRight size={16} />
                                </Link>
                                <Link
                                    href="/about"
                                    className="px-8 py-4 border border-basquiat-white/30 text-basquiat-white font-sans text-[13px] uppercase tracking-wide font-medium hover:border-basquiat-gold hover:text-basquiat-gold transition-colors flex items-center justify-center"
                                >
                                    About Us
                                </Link>
                            </div>
                        </FadeUp>
                    </div>

                    {/* Right Column (45% width, absolute desktop) */}
                    <div className="w-full lg:w-[45%] h-[300px] lg:h-full lg:absolute lg:right-0 lg:top-0 order-first lg:order-last relative">
                        <ScaleIn delay={200} className="w-full h-full relative">
                            <Image
                                src="/images/hero_bg.jpg"
                                alt="Basquiat Capital Architecture"
                                fill
                                className="object-cover object-center"
                                priority
                                style={{
                                    clipPath: "polygon(8% 0%, 100% 0%, 100% 100%, 0% 100%)" // Desktop Clip
                                }}
                            />
                            {/* Gradient Overlay for seamless blend */}
                            <div className="absolute inset-0 bg-gradient-to-r from-basquiat-navy via-basquiat-navy/40 to-transparent lg:w-1/2" />

                            <style jsx>{`
                                @media (max-width: 1024px) {
                                    img { clip-path: none !important; }
                                    .gradient-overlay { display: none; }
                                }
                             `}</style>
                        </ScaleIn>
                    </div>
                </div>
            </section>

            {/* SECTION 3 — STATS BAR */}
            <section className="bg-basquiat-navy-darker border-y border-basquiat-gold/15 py-12 md:py-20 text-white relative z-20">
                <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
                    <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-basquiat-gold/10">
                        {[
                            { value: 50, prefix: '$', suffix: "M+", label: "Transaction Volume" },
                            { value: 60, prefix: '', suffix: "+", label: "Global Partners" },
                            { value: 5, prefix: '', suffix: "", label: "Key Markets" },
                            { value: 24, prefix: '', suffix: "/7", label: "Market Access" },
                        ].map((stat, index) => (
                            <AnimatedStat
                                key={stat.label}
                                value={stat.value}
                                prefix={stat.prefix}
                                suffix={stat.suffix}
                                label={stat.label}
                            />
                        ))}
                    </div>
                </div>
            </section>

            {/* SECTION 4 — VALUE PROPOSITION */}
            <section className="bg-basquiat-warm-white py-20 md:py-28">
                <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 text-center">
                    <SlideLeft delay={0}>
                        <h2 className="font-serif text-[42px] lg:text-[52px] font-light text-basquiat-navy max-w-3xl mx-auto leading-tight">
                            Built For The Opportunities<br />Others Overlook
                        </h2>
                    </SlideLeft>

                    <GoldLine delay={150} centered={true} />

                    <FadeUp delay={250}>
                        <p className="font-sans text-[16px] text-gray-500 max-w-2xl mx-auto leading-[1.8]">
                            We work where growth meets friction: emerging economies with massive upside and limited infrastructure to capture it. We bridge that gap with institutional precision.
                        </p>
                    </FadeUp>
                </div>
            </section>

            {/* SECTION 5 — SERVICE CARDS (OFFERINGS) */}
            <section className="bg-basquiat-navy py-20 md:py-28">
                <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
                    {/* Header */}
                    <div className="mb-12 md:mb-16">
                        <SlideLeft delay={0}>
                            <span className="font-sans text-[11px] uppercase tracking-widest text-basquiat-gold mb-4 block">
                                Our Practice Areas
                            </span>
                        </SlideLeft>
                        <SlideLeft delay={100}>
                            <h2 className="font-serif text-[48px] font-light text-basquiat-white mb-6">
                                Strategic Offerings
                            </h2>
                        </SlideLeft>
                        <FadeUp delay={200}>
                            <p className="font-sans text-[15px] text-basquiat-white/60 max-w-lg leading-relaxed">
                                Comprehensive financial solutions tailored for the unique challenges of African markets.
                            </p>
                        </FadeUp>
                    </div>

                    {/* Cards Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {[
                            {
                                icon: TrendingUp,
                                title: "Alpha-Focused Hedge Fund",
                                desc: "The S&P 500 averages 10% yearly returns. We deploy capital using strategies to capture outsized returns in U.S and International Small, Mid and Large Cap Equities.",
                                link: "/offerings#hedge-fund"
                            },
                            {
                                icon: Briefcase,
                                title: "Capital Market Advisory",
                                desc: "Companies across Sub-Saharan Africa are building at scale but lack access to institutional capital. Banks are slow. Local markets are shallow. We bridge that gap.",
                                link: "/offerings#advisory"
                            },
                            {
                                icon: Globe,
                                title: "Commercial Market FX",
                                desc: "Every multinational operating across Africa converts currency. Most pay 3-5% spreads. That margin erosion compounds into millions lost. We fix that.",
                                link: "/offerings#fx"
                            }
                        ].map((card, i) => (
                            <Cascade key={card.title} index={i}>
                                <div className="
                                    group
                                    relative
                                    bg-[#0B2545]/95
                                    p-8 md:p-10
                                    flex flex-col
                                    min-h-[400px] md:min-h-[440px]
                                    overflow-hidden
                                    transition-all duration-500 ease-out
                                    hover:bg-[#0B2545]/85
                                    border border-basquiat-gold/10
                                ">

                                    {/* Gold top-border that expands on hover — purely CSS, no JS */}
                                    <div className="
                                      absolute top-0 left-0 right-0 h-[2px]
                                      bg-gradient-to-r from-basquiat-gold to-basquiat-gold/30
                                      origin-left scale-x-0 group-hover:scale-x-100
                                      transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]
                                    " />

                                    {/* Subtle bottom-right corner glow on hover */}
                                    <div className="
                                      absolute bottom-0 right-0 w-32 h-32
                                      bg-basquiat-gold/5
                                      rounded-full blur-2xl
                                      opacity-0 group-hover:opacity-100
                                      transition-opacity duration-700
                                      translate-x-8 translate-y-8
                                    " />

                                    {/* Static gold accent line — always visible */}
                                    <div className="w-8 h-px bg-basquiat-gold mb-8 opacity-60" />

                                    {/* Icon */}
                                    <div className="text-basquiat-gold opacity-70 group-hover:opacity-100 transition-opacity duration-300 mb-6">
                                        <card.icon size={24} className="stroke-[1.5]" />
                                    </div>

                                    {/* Card title */}
                                    <h3 className="
                                      font-serif text-[28px] font-light leading-tight
                                      text-basquiat-white mb-5
                                      group-hover:text-white transition-colors duration-300
                                    ">
                                        {card.title}
                                    </h3>

                                    {/* Card body text */}
                                    <p className="
                                      font-sans text-[14px] leading-[1.85]
                                      text-basquiat-white/50
                                      group-hover:text-basquiat-white/70
                                      transition-colors duration-300
                                      flex-1
                                    ">
                                        {card.desc}
                                    </p>

                                    {/* Learn more link */}
                                    <div className="mt-8 pt-6 border-t border-basquiat-gold/10">
                                        <Link
                                            href={card.link}
                                            className="
                                          inline-flex items-center gap-2
                                          font-sans text-[12px] uppercase tracking-[0.12em]
                                          text-basquiat-gold/60
                                          group-hover:text-basquiat-gold
                                          transition-colors duration-300
                                        "
                                        >
                                            Learn more
                                            <ArrowRight size={14} className="
                                          inline-block transition-transform duration-300
                                          group-hover:translate-x-1
                                        " />
                                        </Link>
                                    </div>

                                </div>
                            </Cascade>
                        ))}
                    </div>
                </div>
            </section>

            {/* SECTION 6 — OUR NETWORK */}
            <section className="bg-basquiat-warm-white py-20 md:py-28">
                <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-24 items-center">
                        <div>
                            <SlideLeft delay={0}>
                                <span className="font-sans text-[11px] uppercase tracking-widest text-basquiat-gold mb-4 block">
                                    Network & Partnerships
                                </span>
                            </SlideLeft>
                            <SlideLeft delay={100}>
                                <h2 className="font-serif text-[48px] font-light text-basquiat-navy mb-6 leading-tight">
                                    Our Network
                                </h2>
                            </SlideLeft>
                            <FadeUp delay={200}>
                                <p className="font-sans text-[15px] text-gray-600 leading-[1.8] mb-6">
                                    Basquiat Capital operates through a network of strategic partners in East and Sub-Saharan Africa's private sector, institutional relationships with global financial services firms, and on-the-ground presence across key markets.
                                </p>
                            </FadeUp>
                            <FadeUp delay={300}>
                                <p className="font-sans text-[15px] text-gray-600 leading-[1.8] mb-8">
                                    We are deliberately lean. Every person in our network is there because they add direct value to the opportunities we pursue.
                                </p>
                            </FadeUp>
                            <FadeUp delay={400}>
                                <Link
                                    href="/offerings"
                                    className="inline-block border border-basquiat-navy text-basquiat-navy px-8 py-3.5 font-sans text-[12px] uppercase tracking-wide hover:bg-basquiat-navy hover:text-white transition-all duration-300"
                                >
                                    View Our Mandates
                                </Link>
                            </FadeUp>
                        </div>

                        <div className="relative">
                            <ScaleIn delay={150}>
                                <div className="relative aspect-[4/3] w-full overflow-hidden">
                                    <div className="absolute left-0 top-0 bottom-0 w-1 bg-basquiat-gold z-10" />
                                    <Image
                                        src="/images/secondary_bg.jpg"
                                        alt="Our Network"
                                        fill
                                        className="object-cover grayscale-[15%] contrast-[1.05]"
                                        style={{ clipPath: "polygon(0% 0%, 92% 0%, 100% 100%, 0% 100%)" }}
                                    />
                                </div>
                            </ScaleIn>
                        </div>
                    </div>
                </div>
            </section>

            {/* SECTION 7 — PRESS + TRUSTPILOT */}
            <section className="bg-white border-t border-basquiat-gold/15 py-16 md:py-20">
                <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
                    {/* Part A: Press */}
                    <div className="text-center mb-10 md:mb-12">
                        <FadeUp delay={0}>
                            <p className="font-sans text-[10px] uppercase tracking-[0.2em] text-gray-500 mb-10">
                                Featured In
                            </p>
                        </FadeUp>
                        <div className="flex flex-wrap justify-center md:justify-evenly gap-8 md:gap-0 max-w-3xl mx-auto">
                            {['Bloomberg', 'Reuters', 'Forbes', 'CNBC'].map((brand, i) => (
                                <Cascade key={brand} index={i}>
                                    <span className="font-serif text-[26px] text-basquiat-navy/40 hover:text-basquiat-navy transition-colors duration-300 cursor-default">
                                        {brand}
                                    </span>
                                </Cascade>
                            ))}
                        </div>
                    </div>

                    <div className="w-full border-t border-gray-100 my-12" />

                    {/* Part B: Trustpilot */}
                    <FadeUp delay={200}>
                        <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-12">
                            <div className="flex items-center gap-4">
                                <h3 className="font-serif text-[32px] text-basquiat-navy">Excellent</h3>
                                <div className="flex gap-1">
                                    {[1, 2, 3, 4, 5].map((s) => (
                                        <div key={s} className="bg-basquiat-gold p-1">
                                            <Star size={12} className="fill-white text-white" />
                                        </div>
                                    ))}
                                </div>
                                <span className="font-sans text-[13px] text-gray-500">Rated 4.9 / 5</span>
                            </div>

                            <div className="hidden md:block h-10 w-px bg-gray-200" />

                            <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8">
                                <span className="font-sans text-[13px] text-gray-500">Based on 120+ institutional reviews</span>
                                <a
                                    href="https://www.trustpilot.com/review/basquiatcapital.com?utm_medium=trustbox&utm_source=TrustBoxReviewCollector"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="font-sans text-[12px] uppercase tracking-wide text-basquiat-blue hover:underline"
                                >
                                    Read Our Reviews →
                                </a>
                            </div>
                        </div>
                    </FadeUp>
                </div>
            </section>

            {/* SECTION 8 — MARKET INSIGHTS CTA */}
            <section className="bg-basquiat-navy border-t-4 border-basquiat-gold py-20 md:py-28 relative overflow-hidden">
                {/* Background Decoration */}
                <span className="absolute -bottom-20 -right-10 font-serif text-[200px] text-basquiat-gold/5 leading-none select-none pointer-events-none">01</span>

                <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 relative z-10">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
                        <div>
                            <SlideLeft delay={0}>
                                <span className="font-sans text-[11px] uppercase tracking-widest text-basquiat-gold mb-4 block">
                                    Market Intelligence
                                </span>
                            </SlideLeft>
                            <SlideLeft delay={100}>
                                <h2 className="font-serif text-[56px] font-light text-basquiat-white mb-6">
                                    Market Insights
                                </h2>
                            </SlideLeft>
                            <FadeUp delay={200}>
                                <p className="font-sans text-[15px] text-basquiat-white/60 max-w-sm leading-[1.8]">
                                    Want to stay informed on the latest market trends and strategies? Visit our blog for expert advice and actionable tips.
                                </p>
                            </FadeUp>
                        </div>

                        <div className="text-center md:text-right">
                            <FadeUp delay={350}>
                                <Link
                                    href="/blog"
                                    className="inline-block px-10 py-[18px] border border-basquiat-gold/50 text-basquiat-gold font-sans text-[13px] uppercase tracking-wide hover:bg-basquiat-gold hover:text-basquiat-black transition-all duration-300 mb-6"
                                >
                                    Read Our Insights →
                                </Link>
                                <p className="font-sans text-[13px] italic text-basquiat-white/35">
                                    Expert analysis of Sub-Saharan Africa's evolving markets.
                                </p>
                            </FadeUp>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
