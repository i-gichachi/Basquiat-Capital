"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, TrendingUp, Globe, Briefcase, Star, ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { FadeUp, SlideLeft, ScaleIn, Cascade, GoldLine } from "@/components/Animate";

export default function Home() {
    return (
        <main className="flex flex-col min-h-screen bg-[#FAFAFA] selection:bg-basquiat-gold selection:text-basquiat-navy">

            {/* ============================================================
          SECTION 1 - HERO
      ============================================================ */}
            <section className="relative h-screen min-h-[700px] bg-basquiat-navy flex items-center overflow-hidden">
                {/* Subtle noise texture */}
                <div className="absolute inset-0 noise-bg z-0 opacity-40" />

                {/* BC Monogram watermark */}
                <div className="absolute -bottom-16 -right-16 pointer-events-none select-none opacity-[0.04] z-0">
                    <span className="font-serif text-[380px] leading-none text-white">BC</span>
                </div>

                <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 w-full h-full flex flex-col pt-24 lg:flex-row lg:items-center relative z-10">

                    {/* Left Column */}
                    <div className="w-full lg:w-[55%] flex flex-col justify-center h-full relative z-20 pb-12 lg:pb-0">

                        <GoldLine delay={200} centered={false} />

                        <div className="font-serif text-[42px] md:text-[80px] lg:text-[88px] leading-[0.9] tracking-tight mb-2">
                            <FadeUp delay={300}>
                                <span className="text-white font-normal block">Capital Moves.</span>
                            </FadeUp>
                            <FadeUp delay={450}>
                                <span className="text-basquiat-gold font-semibold block">We Move First.</span>
                            </FadeUp>
                        </div>

                        <FadeUp delay={600}>
                            <div className="h-8" />
                            <p className="font-sans text-[16px] md:text-[17px] text-white/65 max-w-md leading-[1.8]">
                                Institutional-grade investment & advisory for the African market. We bridge the gap between global capital and local opportunity.
                            </p>
                        </FadeUp>

                        <FadeUp delay={750}>
                            <div className="h-10" />
                            <div className="flex flex-col sm:flex-row gap-4">
                                <Link
                                    href="/contact"
                                    className="px-8 py-4 bg-basquiat-gold text-basquiat-navy font-sans text-[13px] uppercase tracking-widest font-semibold hover:bg-basquiat-gold-deep transition-colors duration-300 flex items-center justify-center gap-2 shadow-lg shadow-basquiat-gold/20"
                                >
                                    Request a Meeting <ArrowRight size={15} />
                                </Link>
                                <Link
                                    href="/about"
                                    className="px-8 py-4 border-2 border-white/20 text-white font-sans text-[13px] uppercase tracking-widest font-medium hover:border-basquiat-gold hover:text-basquiat-gold transition-all duration-300 flex items-center justify-center"
                                >
                                    About Us
                                </Link>
                            </div>
                        </FadeUp>
                    </div>

                    {/* Right Column - Wall Street Architecture */}
                    <div className="w-full lg:w-[48%] h-[300px] lg:h-full lg:absolute lg:right-0 lg:top-0 order-first lg:order-last relative">
                        <ScaleIn delay={200} className="w-full h-full relative">
                            <Image
                                src="/images/wall_st.png"
                                alt="Global Capital Markets"
                                fill
                                className="object-cover object-center"
                                priority
                            />
                            {/* Strong left-side gradient so text remains readable */}
                            <div className="absolute inset-0 bg-gradient-to-r from-basquiat-navy via-basquiat-navy/70 to-basquiat-navy/20" />
                            {/* Subtle gold vignette overlay - adds warmth and brand connection */}
                            <div className="absolute inset-0 bg-gradient-to-br from-transparent to-basquiat-gold/5" />
                            {/* Bottom fade */}
                            <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-basquiat-navy to-transparent" />
                        </ScaleIn>
                    </div>

                </div>
            </section>

            {/* ============================================================
          SECTION 2 - STATS BAR
      ============================================================ */}
            <section className="bg-basquiat-navy-darker border-y border-basquiat-gold/15 py-10 md:py-14 text-white relative z-20">

                <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
                    <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-basquiat-gold/10 mb-8">
                        {[
                            { value: "+88.96%", label: "2024 Return", sub: "Audited & Verifiable" },
                            { value: "+67.2%", label: "2025 Return", sub: "Non-audited" },
                            { value: "Long-Only", label: "Structure", sub: "No leverage" },
                            { value: "US Equities", label: "Strategy Focus", sub: "Small & Large Cap" },
                        ].map((stat, i) => (
                            <div key={i} className="flex flex-col items-center justify-center px-6 py-8 text-center">
                                <div className="font-serif text-[32px] md:text-[48px] font-normal leading-none text-basquiat-gold">
                                    {stat.value}
                                </div>
                                <div className="mt-2 text-[11px] font-sans uppercase tracking-[0.18em] text-white/60">
                                    {stat.label}
                                </div>
                                <div className="mt-1 text-[10px] font-sans text-white/30">
                                    {stat.sub}
                                </div>
                            </div>
                        ))}
                    </div>
                    <p className="text-center text-[10px] font-sans text-white/20 max-w-2xl mx-auto leading-relaxed border-t border-basquiat-gold/10 pt-6">
                        Past performance is not indicative of future results. 2024 figure independently verifiable.
                        2025 figure non-audited. All investments involve risk including possible loss of principal.
                    </p>
                </div>
            </section>

            {/* ============================================================
          SECTION 3 - VALUE PROPOSITION
      ============================================================ */}
            <section className="bg-[#FAFAFA] py-12 md:py-20">

                <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 text-center">
                    <SlideLeft delay={0}>
                        <h2 className="font-serif text-[36px] lg:text-[56px] font-normal text-basquiat-navy max-w-3xl mx-auto leading-[1.05] tracking-tight">
                            Built For The Opportunities<br />Others Overlook
                        </h2>
                    </SlideLeft>

                    <GoldLine delay={150} centered={true} />

                    <FadeUp delay={250}>
                        <p className="font-sans text-[16px] text-[#374151] max-w-2xl mx-auto leading-[1.85]">
                            We work where growth meets friction: emerging economies with massive upside and
                            limited infrastructure to capture it. We bridge that gap with institutional precision.
                        </p>
                    </FadeUp>
                </div>
            </section>

            {/* ============================================================
          SECTION 4 - SERVICE CARDS
      ============================================================ */}
            <section className="bg-basquiat-navy py-12 md:py-20">

                <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">

                    {/* Header */}
                    <div className="mb-14 md:mb-16">
                        <SlideLeft delay={0}>
                            <span className="font-sans text-[11px] uppercase tracking-[0.2em] text-basquiat-gold mb-4 block">
                                Our Practice Areas
                            </span>
                        </SlideLeft>
                        <SlideLeft delay={100}>
                            <h2 className="font-serif text-[40px] md:text-[56px] font-normal text-white mb-6 leading-tight">
                                Strategic Offerings
                            </h2>
                        </SlideLeft>
                        <FadeUp delay={200}>
                            <p className="font-sans text-[15px] text-white/50 max-w-lg leading-[1.8]">
                                Comprehensive financial solutions tailored for the unique challenges of African markets.
                            </p>
                        </FadeUp>
                    </div>

                    {/* Cards Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
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
                  bg-[#0D2E57]
                  p-8 md:p-10
                  flex flex-col
                  min-h-[420px] md:min-h-[460px]
                  overflow-hidden
                  transition-all duration-500 ease-out
                  hover:bg-[#0F3566]
                  border-t-2 border-basquiat-gold/25
                  hover:border-basquiat-gold
                ">
                                    {/* Corner glow on hover */}
                                    <div className="
                    absolute bottom-0 right-0 w-40 h-40
                    bg-basquiat-gold/8
                    rounded-full blur-3xl
                    opacity-0 group-hover:opacity-100
                    transition-opacity duration-700
                    translate-x-10 translate-y-10
                  " />

                                    {/* Static gold accent line */}
                                    <div className="w-8 h-px bg-basquiat-gold mb-8 opacity-50 group-hover:opacity-100 group-hover:w-12 transition-all duration-500" />

                                    {/* Icon */}
                                    <div className="text-basquiat-gold opacity-60 group-hover:opacity-100 transition-opacity duration-300 mb-6">
                                        <card.icon size={22} className="stroke-[1.5]" />
                                    </div>

                                    {/* Title */}
                                    <h3 className="
                    font-serif text-[26px] md:text-[28px] font-normal leading-tight
                    text-white mb-5
                    group-hover:text-white transition-colors duration-300
                  ">
                                        {card.title}
                                    </h3>

                                    {/* Body */}
                                    <p className="
                    font-sans text-[14px] leading-[1.9]
                    text-white/45
                    group-hover:text-white/65
                    transition-colors duration-300
                    flex-1
                  ">
                                        {card.desc}
                                    </p>

                                    {/* Link */}
                                    <div className="mt-8 pt-6 border-t border-white/8">
                                        <Link
                                            href={card.link}
                                            className="
                        inline-flex items-center gap-2
                        font-sans text-[11px] uppercase tracking-[0.15em]
                        text-basquiat-gold/50
                        group-hover:text-basquiat-gold
                        transition-colors duration-300
                      "
                                        >
                                            Learn more
                                            <ArrowRight size={13} className="transition-transform duration-300 group-hover:translate-x-1" />
                                        </Link>
                                    </div>
                                </div>
                            </Cascade>
                        ))}
                    </div>
                </div>
            </section>

            {/* ============================================================
          SECTION 5 - OUR NETWORK
      ============================================================ */}
            <section className="bg-[#F4F4F5] py-12 md:py-20">

                <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-24 items-center">
                        <div>
                            <SlideLeft delay={0}>
                                <span className="font-sans text-[11px] uppercase tracking-[0.2em] text-basquiat-gold mb-4 block">
                                    Network & Partnerships
                                </span>
                            </SlideLeft>
                            <SlideLeft delay={100}>
                                <h2 className="font-serif text-[38px] md:text-[52px] font-normal text-basquiat-navy mb-6 leading-tight">
                                    Our Network
                                </h2>
                            </SlideLeft>
                            <FadeUp delay={200}>
                                <p className="font-sans text-[15px] text-[#374151] leading-[1.85] mb-6">
                                    Basquiat Capital operates through a network of strategic partners in East and Sub-Saharan Africa's private sector, institutional relationships with global financial services firms, and mode-one on-the-ground presence across key markets.
                                </p>
                            </FadeUp>
                            <FadeUp delay={300}>
                                <p className="font-sans text-[15px] text-[#374151] leading-[1.85] mb-10">
                                    We are deliberately lean. Every person in our network is there because they add direct value to the opportunities we pursue.
                                </p>
                            </FadeUp>
                            <FadeUp delay={400}>
                                <Link
                                    href="/offerings"
                                    className="inline-block border-2 border-basquiat-navy text-basquiat-navy px-8 py-3.5 font-sans text-[12px] uppercase tracking-widest hover:bg-basquiat-navy hover:text-white transition-all duration-300"
                                >
                                    View Our Mandates
                                </Link>
                            </FadeUp>
                        </div>

                        <div className="relative">
                            <ScaleIn delay={150}>
                                <div className="relative aspect-[4/3] w-full overflow-hidden shadow-2xl shadow-basquiat-navy/20">
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

            {/* ============================================================
          SECTION 6 - FEATURED IN
      ============================================================ */}
            <section className="bg-[#374151] border-t border-basquiat-gold/15 py-10 md:py-14">

                <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
                    <div className="text-center">
                        <FadeUp delay={0}>
                            <p className="font-sans text-[10px] uppercase tracking-[0.25em] text-white/60 mb-8">
                                Featured In
                            </p>
                        </FadeUp>
                        <div className="flex flex-wrap justify-center md:justify-evenly gap-8 md:gap-0 max-w-3xl mx-auto">
                            {['Bloomberg', 'Reuters', 'Forbes', 'CNBC'].map((brand, i) => (
                                <Cascade key={brand} index={i}>
                                    <span className="font-serif text-[26px] text-white/40 hover:text-white transition-colors duration-300 cursor-default tracking-tight">
                                        {brand}
                                    </span>
                                </Cascade>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* ============================================================
          SECTION 7 - SOCIAL PROOF
      ============================================================ */}
            <section className="bg-white border-t border-[#E2E8F0] py-12 md:py-20">

                <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">

                    {/* Client Reviews */}
                    <div>
                        <div className="flex items-end justify-between mb-12">
                            <SlideLeft delay={0}>
                                <p className="font-sans text-[10px] uppercase tracking-[0.25em] text-basquiat-gold mb-3">
                                    Client Reviews
                                </p>
                                <h3 className="font-serif text-[32px] md:text-[38px] font-normal text-basquiat-navy">
                                    What Our Clients Say
                                </h3>
                            </SlideLeft>
                            <FadeUp delay={100}>
                                <a
                                    href="https://www.trustpilot.com/review/basquiatcapital.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="hidden md:flex items-center gap-2 font-sans text-[11px] uppercase tracking-widest text-basquiat-navy/50 hover:text-basquiat-gold transition-colors duration-300"
                                >
                                    Verified on Trustpilot <ArrowUpRight size={13} />
                                </a>
                            </FadeUp>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {[
                                {
                                    quote: "Their thoroughly researched analysis and recommendations have helped me optimize my portfolio and achieve impressive alpha returns in just a few weeks. A valuable resource for anyone seeking expert guidance.",
                                    author: "James Gitari",
                                    location: "Verified Client - Trustpilot",
                                    stars: 5
                                },
                                {
                                    quote: "Basquiat Capital provides the institutional rigor we needed to deploy our surplus free cash flow into US markets without sacrificing liquidity.",
                                    author: "Corporate Client",
                                    location: "East Africa",
                                    stars: 5
                                },
                                {
                                    quote: "Professional, responsive, and results-driven. The team demonstrated deep knowledge of both African markets and global capital flows. I have already referred two colleagues.",
                                    author: "Verified Client",
                                    location: "Institutional Partner",
                                    stars: 5
                                }
                            ].map((review, i) => (
                                <Cascade key={i} index={i}>
                                    <div className="group relative bg-[#FAFAFA] border border-[#E2E8F0] p-8 flex flex-col h-full transition-all duration-400 hover:border-basquiat-gold/50 hover:shadow-xl hover:shadow-basquiat-navy/8 hover:-translate-y-1">
                                        {/* Gold top sweep */}
                                        <div className="absolute top-0 left-0 right-0 h-[2px] bg-basquiat-gold origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />

                                        {/* Stars */}
                                        <div className="flex gap-1 mb-6">
                                            {[...Array(review.stars)].map((_, s) => (
                                                <div key={s} className="bg-basquiat-gold p-[3px]">
                                                    <Star size={9} className="fill-white text-white" />
                                                </div>
                                            ))}
                                        </div>

                                        {/* Quote */}
                                        <p className="font-serif text-[16px] font-light text-basquiat-navy leading-[1.8] flex-1 italic">
                                            "{review.quote}"
                                        </p>

                                        {/* Attribution */}
                                        <div className="mt-6 pt-5 border-t border-gray-200">
                                            <p className="font-sans text-[11px] font-bold text-basquiat-navy uppercase tracking-widest">
                                                {review.author}
                                            </p>
                                            <p className="font-sans text-[11px] text-basquiat-text-muted mt-1">
                                                {review.location}
                                            </p>
                                        </div>
                                    </div>
                                </Cascade>
                            ))}
                        </div>

                        {/* Mobile Trustpilot link */}
                        <FadeUp delay={400}>
                            <div className="mt-10 text-center md:hidden">
                                <a
                                    href="https://www.trustpilot.com/review/basquiatcapital.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="font-sans text-[11px] uppercase tracking-widest text-basquiat-navy/50 hover:text-basquiat-gold transition-colors"
                                >
                                    Read All Reviews on Trustpilot →
                                </a>
                            </div>
                        </FadeUp>
                    </div>

                </div>
            </section>

            {/* ============================================================
          SECTION 8 - MARKET INSIGHTS CTA
      ============================================================ */}
            <section className="bg-basquiat-navy border-t-2 border-basquiat-gold py-12 pb-20 md:py-20 relative overflow-hidden">

                {/* Decorative number */}
                <span className="absolute -bottom-16 -right-8 font-serif text-[180px] text-basquiat-gold/4 leading-none select-none pointer-events-none">
                    01
                </span>

                <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 relative z-10">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
                        <div>
                            <SlideLeft delay={0}>
                                <span className="font-sans text-[11px] uppercase tracking-[0.2em] text-basquiat-gold mb-4 block">
                                    Market Intelligence
                                </span>
                            </SlideLeft>
                            <SlideLeft delay={100}>
                                <h2 className="font-serif text-[40px] md:text-[56px] font-normal text-white mb-6 leading-tight">
                                    Market Insights
                                </h2>
                            </SlideLeft>
                            <FadeUp delay={200}>
                                <p className="font-sans text-[15px] text-white/50 max-w-sm leading-[1.85]">
                                    Want to stay informed on the latest market trends and strategies? Visit our blog for expert advice and actionable tips.
                                </p>
                            </FadeUp>
                        </div>

                        <div className="text-center md:text-right">
                            <FadeUp delay={350}>
                                <Link
                                    href="/insights"
                                    className="inline-block px-10 py-[18px] border-2 border-basquiat-gold/60 text-basquiat-gold font-sans text-[13px] uppercase tracking-widest hover:bg-basquiat-gold hover:text-basquiat-navy hover:border-basquiat-gold transition-all duration-300 mb-6"
                                >
                                    Read Our Insights →
                                </Link>
                                <p className="font-sans text-[13px] italic text-white/30">
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
