"use client";

import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, TrendingUp, Globe, Briefcase, Star, ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { FadeUp, SlideLeft, ScaleIn, Cascade, GoldLine } from "@/components/Animate";

// ─── Framer Motion Variants ──────────────────────────────────────────────────

/** Fade up — general hero text elements */
const fadeUp = {
    hidden: { opacity: 0, y: 24 },
    visible: (delay: number) => ({
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.7,
            delay,
            ease: [0.25, 0.1, 0.25, 1] as const,
        },
    }),
};

/** Fade in only — buttons wrapper */
const fadeIn = {
    hidden: { opacity: 0 },
    visible: (delay: number) => ({
        opacity: 1,
        transition: {
            duration: 0.9,
            delay,
            ease: "easeOut" as const,
        },
    }),
};

/** Gold line draw — scaleX left→right */
const goldLineDraw = {
    hidden: { scaleX: 0, originX: 0 },
    visible: {
        scaleX: 1,
        transition: {
            duration: 0.6,
            delay: 0.7,
            ease: [0.25, 0.1, 0.25, 1] as const,
        },
    },
};

/** Hero image — subtle zoom + fade */
const imageZoom = {
    hidden: { opacity: 0, scale: 1.04 },
    visible: {
        opacity: 1,
        scale: 1,
        transition: {
            opacity: { duration: 0.9, delay: 0.3, ease: "easeOut" as const },
            scale: { duration: 1.8, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] as const },
        },
    },
};

// ─────────────────────────────────────────────────────────────────────────────

export default function Home() {

    // Stats strip — fires once when 30 % of strip enters viewport
    const [statsVisible, setStatsVisible] = useState(false);
    const statsRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setStatsVisible(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.3 }
        );
        if (statsRef.current) observer.observe(statsRef.current);
        return () => observer.disconnect();
    }, []);

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

                        {/* Gold eyebrow label */}
                        <motion.span
                            variants={fadeUp}
                            initial="hidden"
                            animate="visible"
                            custom={0.5}
                            className="font-sans text-[11px] uppercase tracking-[0.2em] text-basquiat-gold mb-5 block"
                        >
                            Institutional-grade investment &amp; advisory
                        </motion.span>

                        {/* Gold divider line */}
                        <motion.div
                            variants={goldLineDraw}
                            initial="hidden"
                            animate="visible"
                            className="w-16 h-px bg-basquiat-gold mb-8"
                        />

                        {/* Heading */}
                        <div className="font-serif text-[42px] md:text-[80px] lg:text-[88px] leading-[0.9] tracking-tight mb-2">
                            <motion.span
                                variants={fadeUp}
                                initial="hidden"
                                animate="visible"
                                custom={0.9}
                                style={{ display: "block" }}
                                className="text-white font-normal"
                            >
                                Capital Moves.
                            </motion.span>
                            <motion.span
                                variants={fadeUp}
                                initial="hidden"
                                animate="visible"
                                custom={1.1}
                                style={{ display: "block" }}
                                className="text-basquiat-gold font-semibold"
                            >
                                We Move First.
                            </motion.span>
                        </div>

                        {/* Spacer + Subtitle */}
                        <div className="h-8" />
                        <motion.p
                            variants={fadeUp}
                            initial="hidden"
                            animate="visible"
                            custom={1.3}
                            className="font-sans text-[16px] md:text-[17px] text-white/65 max-w-md leading-[1.8]"
                        >
                            Institutional-grade investment &amp; advisory for the African market. We bridge the gap between global capital and local opportunity.
                        </motion.p>

                        {/* CTA buttons */}
                        <div className="h-10" />
                        <motion.div
                            variants={fadeIn}
                            initial="hidden"
                            animate="visible"
                            custom={1.5}
                            className="flex flex-col sm:flex-row gap-4"
                        >
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
                        </motion.div>
                    </div>

                    {/* Right Column - Wall Street Architecture */}
                    <div className="w-full lg:w-[48%] h-[300px] lg:h-full lg:absolute lg:right-0 lg:top-0 order-first lg:order-last relative">
                        <motion.div
                            variants={imageZoom}
                            initial="hidden"
                            animate="visible"
                            className="w-full h-full relative"
                        >
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
                        </motion.div>
                    </div>

                </div>
            </section>

            {/* ============================================================
          SECTION 2 - STATS BAR
      ============================================================ */}
            <section className="bg-basquiat-navy-darker border-y border-basquiat-gold/15 py-10 md:py-14 text-white relative z-20">

                <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
                    <motion.div
                        ref={statsRef}
                        variants={fadeUp}
                        initial="hidden"
                        animate={statsVisible ? "visible" : "hidden"}
                        custom={0}
                    >
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
                    </motion.div>
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
                                Our Mandates
                            </span>
                        </SlideLeft>
                        <SlideLeft delay={100}>
                            <h2 className="font-serif text-[40px] md:text-[56px] font-normal text-white mb-6 leading-tight">
                                Strategic Mandates
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
            <section className="bg-basquiat-navy py-12 md:py-20">

                <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-24 items-center">
                        <div>
                            <SlideLeft delay={0}>
                                <span
                                    className="font-sans block mb-4"
                                    style={{
                                        fontSize: '11px',
                                        letterSpacing: '0.25em',
                                        textTransform: 'uppercase',
                                        color: '#F0B429'
                                    }}
                                >
                                    Leadership &amp; Network
                                </span>
                            </SlideLeft>
                            <SlideLeft delay={100}>
                                <h2
                                    className="font-serif font-normal leading-tight mb-6"
                                    style={{ fontSize: 'clamp(32px, 5vw, 56px)', color: 'white' }}
                                >
                                    Deliberately Lean.<br />
                                    <span style={{ color: '#F0B429' }}>Deeply Connected.</span>
                                </h2>
                            </SlideLeft>
                            <div style={{ width: '40px', height: '2px', backgroundColor: '#F0B429', marginBottom: '24px' }} />
                            <FadeUp delay={200}>
                                <p
                                    className="font-sans mb-10 w-full"
                                    style={{
                                        fontSize: 'clamp(14px, 1.7vw, 16px)',
                                        color: 'rgba(255,255,255,0.55)',
                                        lineHeight: 1.85,
                                        maxWidth: '480px'
                                    }}
                                >
                                    Every partner in our network adds direct value to the
                                    opportunities we pursue. No intermediaries. No layers.
                                </p>
                            </FadeUp>
                            <FadeUp delay={300}>
                                <Link
                                    href="/founder"
                                    className="inline-flex items-center gap-3 font-sans transition-all duration-300"
                                    style={{
                                        fontSize: '11px',
                                        letterSpacing: '0.18em',
                                        textTransform: 'uppercase',
                                        color: 'white',
                                        textDecoration: 'none',
                                        borderBottom: '1px solid rgba(255,255,255,0.3)',
                                        paddingBottom: '4px'
                                    }}
                                    onMouseEnter={e => {
                                        (e.currentTarget as HTMLAnchorElement).style.color = '#F0B429';
                                        (e.currentTarget as HTMLAnchorElement).style.borderBottomColor = '#F0B429';
                                    }}
                                    onMouseLeave={e => {
                                        (e.currentTarget as HTMLAnchorElement).style.color = 'white';
                                        (e.currentTarget as HTMLAnchorElement).style.borderBottomColor = 'rgba(255,255,255,0.3)';
                                    }}
                                >
                                    Meet the Founder &amp; Our Network →
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

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {[
                                {
                                    quote: "Nearly two months in, I'm already seeing steady growth and encouraging results. I'm really glad I trusted them with my investment journey, and I'm excited to see what we'll achieve together.",
                                    author: "Mercy Evelyne",
                                    location: "Verified Client · Kenya",
                                    stars: 5
                                },
                                {
                                    quote: "I had an excellent experience working with Stomzy of Basquiat Capital. Step by step guidance, explained everything in a clear and simple way. Very professional, patient and trustworthy.",
                                    author: "Brian Maina",
                                    location: "Verified Client · Kenya",
                                    stars: 5
                                },
                                {
                                    quote: "Their thoroughly researched analysis and recommendations have helped me optimize my portfolio and achieve impressive alpha returns in just a few weeks. A valuable resource for anyone seeking expert guidance.",
                                    author: "James Gitari",
                                    location: "Verified Client · UAE",
                                    stars: 5
                                },
                                {
                                    quote: "Portfolio management, Great. Portfolio balancing, Great. Stocks to buy, Great. Great communication and easy to access. Investment game changer.",
                                    author: "Anthony Macharia",
                                    location: "Verified Client · Kenya",
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
                                            &ldquo;{review.quote}&rdquo;
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



        </main>
    );
}
