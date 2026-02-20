"use client";

import Image from "next/image";
import Link from "next/link";
import { FadeUp, SlideLeft, ScaleIn, Cascade } from "@/components/Animate";
import { ArrowRight } from "lucide-react";

// Mobile: keep portrait aspect ratio (no override)
const mobilePhotoStyle = `
  @media (max-width: 1023px) {
    .founder-photo { aspect-ratio: 3 / 4 !important; }
  }
`;

// ─── Stats ───────────────────────────────────────────────────────────────────
const stats = [
    { value: "13+", label: "Active Mandates" },
    { value: "$1M", label: "Min. Investment", prefix: "" },
    { value: "2\u00a0Yrs", label: "Operating" },
    { value: "+88%", label: "2024 Return", prefix: "" },
];

// ─── Network cards ────────────────────────────────────────────────────────────
const networkCards = [
    {
        number: "01",
        title: "East Africa On-the-Ground",
        body: "Primary operations in Nairobi, Kenya covering 5 markets across East and Sub-Saharan Africa, with direct access to opportunities as they emerge.",
    },
    {
        number: "02",
        title: "FCA-Regulated FX Partners",
        body: "Commercial FX network covering 60+ currency pairs, executed through FCA-regulated institutional counterparties for compliant cross-border flows.",
    },
    {
        number: "03",
        title: "Institutional Brokerage Network",
        body: "Assets held in independent custody through relationships with global prime brokers, ensuring full segregation and institutional-grade execution.",
    },
    {
        number: "04",
        title: "Corporate & Advisory Relations",
        body: "Strategic partners spanning insurers, telecoms, and international brokers, each adding direct, measurable value to the mandates we originate.",
    },
];

export default function FounderPage() {
    return (
        <main className="flex flex-col min-h-screen" style={{ backgroundColor: "#FAFAFA" }}>
            {/* Mobile photo aspect-ratio override */}
            <style dangerouslySetInnerHTML={{ __html: mobilePhotoStyle }} />

            {/* ================================================================
                SECTION 1 — HERO
            ================================================================ */}
            <section
                className="relative flex items-end overflow-hidden"
                style={{
                    backgroundColor: "#0B2545",
                    minHeight: "clamp(260px, 40vh, 520px)",
                    paddingBottom: "clamp(48px, 8vh, 80px)",
                    paddingTop: "clamp(32px, 5vh, 56px)",
                }}
            >
                {/* Subtle grid overlay */}
                <div
                    className="absolute inset-0 z-0 pointer-events-none"
                    style={{
                        backgroundImage:
                            "linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)",
                        backgroundSize: "60px 60px",
                    }}
                />

                {/* BC watermark */}
                <div
                    className="absolute bottom-0 right-0 pointer-events-none select-none z-0"
                    style={{ opacity: 0.03 }}
                >
                    <span
                        className="font-serif leading-none text-white"
                        style={{ fontSize: "clamp(160px, 25vw, 380px)" }}
                    >
                        BC
                    </span>
                </div>

                {/* Content */}
                <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
                    {/* Eyebrow */}
                    <SlideLeft delay={0}>
                        <span
                            className="font-sans block mb-4"
                            style={{
                                fontSize: "11px",
                                letterSpacing: "0.25em",
                                textTransform: "uppercase",
                                color: "#F0B429",
                            }}
                        >
                            Leadership
                        </span>
                    </SlideLeft>

                    {/* Gold rule */}
                    <SlideLeft delay={100}>
                        <div style={{ width: "48px", height: "2px", backgroundColor: "#F0B429", marginBottom: "28px" }} />
                    </SlideLeft>

                    {/* Name */}
                    <SlideLeft delay={200}>
                        <h1
                            className="font-serif font-normal leading-[0.95] tracking-tight text-white"
                            style={{ fontSize: "clamp(38px, 6.5vw, 72px)" }}
                        >
                            Stompy{" "}
                            <span style={{ color: "#F0B429" }}>&ldquo;Stomzy&rdquo;</span>
                            <br />
                            Mwendwa
                        </h1>
                    </SlideLeft>

                    {/* Title */}
                    <FadeUp delay={350}>
                        <p
                            className="font-sans mt-5"
                            style={{
                                fontSize: "clamp(11px, 1.4vw, 13px)",
                                letterSpacing: "0.08em",
                                textTransform: "uppercase",
                                color: "rgba(255,255,255,0.75)",
                            }}
                        >
                            Founder &amp; Chief Investment Officer
                        </p>
                        <p
                            className="font-sans"
                            style={{
                                fontSize: "clamp(11px, 1.4vw, 13px)",
                                letterSpacing: "0.08em",
                                textTransform: "uppercase",
                                color: "rgba(255,255,255,0.4)",
                            }}
                        >
                            Basquiat Capital LLC
                        </p>
                    </FadeUp>
                </div>
            </section>

            {/* ================================================================
                SECTION 2 — BIO + STATS
            ================================================================ */}
            <section className="py-16 md:py-24" style={{ backgroundColor: "#FFFFFF" }}>
                <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">

                        {/* ── LEFT COL: Photo + Stats + CTA ── */}
                        <div className="lg:col-span-4 lg:sticky lg:top-28 flex flex-col gap-0">

                            {/* Portrait */}
                            <ScaleIn delay={100}>
                                <div
                                    className="founder-photo relative w-full overflow-hidden shadow-2xl"
                                    style={{
                                        aspectRatio: "3/4",
                                    }}
                                >
                                    {/* Gold left accent bar */}
                                    <div
                                        className="absolute left-0 top-0 bottom-0 z-10"
                                        style={{ width: "3px", backgroundColor: "#F0B429" }}
                                    />
                                    <Image
                                        src="/images/stompy-portrait.jpg"
                                        alt="Stompy 'Stomzy' Mwendwa — Founder & CIO, Basquiat Capital"
                                        fill
                                        className="object-cover"
                                        style={{ objectPosition: "top center" }}
                                        priority
                                    />
                                </div>
                            </ScaleIn>

                            {/* Stats grid */}
                            <FadeUp delay={250}>
                                <div
                                    className="grid grid-cols-2 mt-0"
                                    style={{ borderTop: "1px solid #E5E7EB" }}
                                >
                                    {stats.map((stat, i) => (
                                        <div
                                            key={stat.label}
                                            className="flex flex-col items-center justify-center py-6 px-4"
                                            style={{
                                                borderRight: i % 2 === 0 ? "1px solid #E5E7EB" : "none",
                                                borderBottom: i < 2 ? "1px solid #E5E7EB" : "none",
                                            }}
                                        >
                                            <span
                                                className="font-serif font-normal leading-none"
                                                style={{ fontSize: "clamp(26px, 3.5vw, 34px)", color: "#0B2545" }}
                                            >
                                                {stat.value.startsWith("+") ? (
                                                    <>
                                                        <span style={{ color: "#F0B429" }}>+</span>
                                                        {stat.value.slice(1)}
                                                    </>
                                                ) : stat.value.startsWith("$") ? (
                                                    <>
                                                        <span style={{ color: "#F0B429" }}>$</span>
                                                        {stat.value.slice(1)}
                                                    </>
                                                ) : (
                                                    stat.value
                                                )}
                                            </span>
                                            <span
                                                className="font-sans mt-2 text-center"
                                                style={{
                                                    fontSize: "10px",
                                                    letterSpacing: "0.2em",
                                                    textTransform: "uppercase",
                                                    color: "#6B7280",
                                                }}
                                            >
                                                {stat.label}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </FadeUp>

                            {/* CTA */}
                            <FadeUp delay={350}>
                                <div className="mt-6">
                                    <Link
                                        href="/contact"
                                        className="inline-flex items-center gap-3 font-sans group"
                                        style={{
                                            fontSize: "12px",
                                            letterSpacing: "0.15em",
                                            textTransform: "uppercase",
                                            color: "#0B2545",
                                        }}
                                    >
                                        Request a Meeting
                                        <ArrowRight
                                            size={14}
                                            className="transition-transform duration-300 group-hover:translate-x-1"
                                            style={{ color: "#F0B429" }}
                                        />
                                    </Link>
                                </div>
                            </FadeUp>
                        </div>

                        {/* ── RIGHT COL: Bio ── */}
                        <div className="lg:col-span-8 flex flex-col">

                            {/* Eyebrow */}
                            <SlideLeft delay={0}>
                                <span
                                    className="font-sans block mb-5"
                                    style={{
                                        fontSize: "11px",
                                        letterSpacing: "0.2em",
                                        textTransform: "uppercase",
                                        color: "#F0B429",
                                    }}
                                >
                                    About the Founder
                                </span>
                            </SlideLeft>

                            {/* 3-line tagline */}
                            <SlideLeft delay={100}>
                                <h2
                                    className="font-serif font-normal leading-[1.1]"
                                    style={{ fontSize: "clamp(28px, 4vw, 48px)", color: "#0B2545" }}
                                >
                                    Research-driven.
                                    <br />
                                    Africa-focused.
                                    <br />
                                    Globally connected.
                                </h2>
                            </SlideLeft>

                            {/* Gold divider */}
                            <FadeUp delay={200}>
                                <div
                                    style={{
                                        width: "40px",
                                        height: "2px",
                                        backgroundColor: "#F0B429",
                                        margin: "28px 0",
                                    }}
                                />
                            </FadeUp>

                            {/* Lead paragraph */}
                            <FadeUp delay={250}>
                                <p
                                    className="font-sans leading-[1.85] mb-6"
                                    style={{ fontSize: "clamp(15px, 1.8vw, 17px)", color: "#0B2545", fontWeight: 500 }}
                                >
                                    Stompy &ldquo;Stomzy&rdquo; Mwendwa is the Founder and Chief Investment Officer of
                                    Basquiat Capital LLC, a research-driven investment firm focused on U.S. public equities,
                                    institutional-grade FX and private equity mandates across emerging and frontier markets.
                                </p>
                            </FadeUp>

                            {/* Body para 1 */}
                            <FadeUp delay={300}>
                                <p
                                    className="font-sans leading-[1.85] mb-6"
                                    style={{ fontSize: "clamp(14px, 1.6vw, 15px)", color: "#374151" }}
                                >
                                    Under his leadership, Basquiat Capital is evolving from a high-performance public markets
                                    platform into a multi-strategy investment business, adding commercial FX market development
                                    and a private equity practice that targets tickets of no less than $10 million per
                                    transaction.
                                </p>
                            </FadeUp>

                            {/* Pull quote */}
                            <FadeUp delay={350}>
                                <blockquote
                                    className="py-5 pl-6 my-6"
                                    style={{ borderLeft: "2px solid #F0B429" }}
                                >
                                    <p
                                        className="font-serif font-normal italic leading-[1.8]"
                                        style={{ fontSize: "clamp(16px, 2vw, 20px)", color: "#0B2545" }}
                                    >
                                        &ldquo;Combining fundamental analysis, AI-automated screening, and a proprietary GARP
                                        framework, enabling Basquiat Capital to originate and structure opportunities for
                                        insurers, corporates, and high-net-worth clients seeking differentiated
                                        dollar-denominated returns.&rdquo;
                                    </p>
                                </blockquote>
                            </FadeUp>

                            {/* Body para 2 */}
                            <FadeUp delay={400}>
                                <p
                                    className="font-sans leading-[1.85] mb-6"
                                    style={{ fontSize: "clamp(14px, 1.6vw, 15px)", color: "#374151" }}
                                >
                                    Beyond portfolio construction, he is active in capital markets and corporate advisory
                                    across the United States and Sub-Saharan Africa, structuring cross-border equity and FX
                                    solutions and building strategic partnerships with insurers, telecoms, and international
                                    brokers.
                                </p>
                            </FadeUp>

                            {/* Body para 3 */}
                            <FadeUp delay={450}>
                                <p
                                    className="font-sans leading-[1.85]"
                                    style={{ fontSize: "clamp(14px, 1.6vw, 15px)", color: "#374151" }}
                                >
                                    Stomzy is also a long-standing investment educator, having grown Basquiat&apos;s research
                                    membership and education franchises into on-ramps that convert sophisticated retail and
                                    corporate audiences into institutional relationships and deal flow.
                                </p>
                            </FadeUp>
                        </div>
                    </div>
                </div>
            </section>

            {/* ================================================================
                SECTION 3 — NETWORK (dark navy)
            ================================================================ */}
            <section className="py-16 md:py-24" style={{ backgroundColor: "#0B2545" }}>
                <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">

                    {/* Header */}
                    <div className="mb-14 md:mb-16">
                        <SlideLeft delay={0}>
                            <span
                                className="font-sans block mb-4"
                                style={{
                                    fontSize: "11px",
                                    letterSpacing: "0.2em",
                                    textTransform: "uppercase",
                                    color: "#F0B429",
                                }}
                            >
                                Network &amp; Partnerships
                            </span>
                        </SlideLeft>

                        <SlideLeft delay={80}>
                            <div
                                style={{ width: "48px", height: "2px", backgroundColor: "#F0B429", marginBottom: "24px" }}
                            />
                        </SlideLeft>

                        <SlideLeft delay={140}>
                            <h2
                                className="font-serif font-normal text-white leading-tight"
                                style={{ fontSize: "clamp(30px, 5vw, 56px)" }}
                            >
                                Built on{" "}
                                <span style={{ color: "#F0B429" }}>Strategic Relationships</span>
                            </h2>
                        </SlideLeft>

                        <FadeUp delay={250}>
                            <p
                                className="font-sans leading-[1.85] mt-5"
                                style={{
                                    fontSize: "clamp(14px, 1.6vw, 15px)",
                                    color: "rgba(255,255,255,0.5)",
                                    maxWidth: "560px",
                                }}
                            >
                                Basquiat Capital operates through a deliberately lean network; every partner adds direct
                                value to the opportunities we pursue and the mandates our clients deploy capital into.
                            </p>
                        </FadeUp>
                    </div>

                    {/* Network cards grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {networkCards.map((card, i) => (
                            <Cascade key={card.number} index={i}>
                                <div
                                    className="flex flex-col relative overflow-hidden transition-all duration-500"
                                    style={{
                                        backgroundColor: "#0D2E57",
                                        borderTop: "2px solid rgba(240,180,41,0.15)",
                                        padding: "clamp(28px, 4vw, 44px)",
                                        minHeight: "240px",
                                    }}
                                    onMouseEnter={(e) => {
                                        const el = e.currentTarget as HTMLDivElement;
                                        el.style.backgroundColor = "#0F3566";
                                        el.style.borderTopColor = "#F0B429";
                                        el.style.transform = "translateY(-4px)";
                                    }}
                                    onMouseLeave={(e) => {
                                        const el = e.currentTarget as HTMLDivElement;
                                        el.style.backgroundColor = "#0D2E57";
                                        el.style.borderTopColor = "rgba(240,180,41,0.15)";
                                        el.style.transform = "translateY(0)";
                                    }}
                                >
                                    {/* Large faded number */}
                                    <div
                                        className="font-serif font-normal leading-none mb-4 select-none"
                                        style={{
                                            fontSize: "48px",
                                            color: "rgba(240,180,41,0.2)",
                                        }}
                                    >
                                        {card.number}
                                    </div>

                                    {/* Title */}
                                    <h3
                                        className="font-serif font-normal text-white leading-tight mb-4"
                                        style={{ fontSize: "clamp(20px, 2.4vw, 24px)" }}
                                    >
                                        {card.title}
                                    </h3>

                                    {/* Body */}
                                    <p
                                        className="font-sans leading-[1.85]"
                                        style={{ fontSize: "14px", color: "rgba(255,255,255,0.5)" }}
                                    >
                                        {card.body}
                                    </p>
                                </div>
                            </Cascade>
                        ))}
                    </div>
                </div>
            </section>

        </main>
    );
}
