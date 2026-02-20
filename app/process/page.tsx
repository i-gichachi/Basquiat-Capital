"use client";

import Link from "next/link";
import { FadeUp, SlideLeft, Cascade, GoldLine } from "@/components/Animate";
import { ArrowRight } from "lucide-react";

// ─── Process steps ────────────────────────────────────────────────────────────
const steps = [
    {
        number: "01",
        title: "Mandate Assessment",
        body: "Every engagement begins with a structured assessment of your capital objectives, risk tolerance, investment horizon, and liquidity requirements. We do not offer standardised products. Every mandate is individually scoped before capital is committed.",
    },
    {
        number: "02",
        title: "Research & Screening",
        body: "Potential opportunities are run through a multi-stage screening process combining AI-automated data aggregation, proprietary GARP scoring, and bottom-up fundamental analysis. Only positions that meet our full criteria threshold advance to mandate consideration.",
    },
    {
        number: "03",
        title: "Investment Policy Statement",
        body: "Before deployment, we formalise the agreed strategy, asset class parameters, concentration limits, and reporting cadence in a written Investment Policy Statement. This document governs every subsequent decision and provides a clear accountability framework for both parties.",
    },
    {
        number: "04",
        title: "Capital Deployment",
        body: "Deployment is staged and deliberate. Entry points are selected through technical validation of fundamental conclusions, with position sizing calibrated to mandate risk parameters. We do not chase momentum; we enter on conviction and exit on thesis completion.",
    },
    {
        number: "05",
        title: "Active Management & Monitoring",
        body: "Positions are monitored continuously against real-time data, earnings signals, macro developments, and position-level risk metrics. The portfolio is actively managed; holdings are added to, trimmed, or exited as the underlying thesis evolves, not on a fixed schedule.",
    },
    {
        number: "06",
        title: "Reporting & Communication",
        body: "Clients receive structured performance reporting on a regular cadence, including portfolio attribution, position commentary, market context, and forward outlook. We maintain an open channel for ad-hoc communication. Transparency is not a quarterly event.",
    },
];

// Alternating bg colours for steps
const stepBgs = ["#FFFFFF", "#FAFAFA", "#FFFFFF", "#FAFAFA", "#FFFFFF", "#FAFAFA"];

export default function ProcessPage() {
    return (
        <main className="flex flex-col min-h-screen" style={{ backgroundColor: "#FAFAFA" }}>

            {/* ================================================================
                SECTION 1 — HERO (centered, dark navy)
            ================================================================ */}
            <section
                className="relative flex items-center justify-center overflow-hidden text-center"
                style={{
                    backgroundColor: "#0B2545",
                    minHeight: "clamp(400px, 55vh, 520px)",
                    paddingTop: "clamp(32px, 5vh, 56px)",
                    paddingBottom: "clamp(48px, 8vh, 80px)",
                }}
            >
                {/* Grid overlay */}
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
                    <span className="font-serif leading-none text-white" style={{ fontSize: "clamp(160px, 25vw, 380px)" }}>
                        BC
                    </span>
                </div>

                {/* Content */}
                <div className="relative z-10 px-6 md:px-12 max-w-3xl mx-auto w-full flex flex-col items-center">
                    {/* Eyebrow */}
                    <FadeUp delay={0}>
                        <span
                            className="font-sans block mb-5"
                            style={{
                                fontSize: "11px",
                                letterSpacing: "0.25em",
                                textTransform: "uppercase",
                                color: "#F0B429",
                            }}
                        >
                            Our Approach
                        </span>
                    </FadeUp>

                    {/* Gold rule — centered */}
                    <FadeUp delay={80}>
                        <div
                            style={{
                                width: "48px",
                                height: "2px",
                                backgroundColor: "#F0B429",
                                margin: "0 auto 28px",
                            }}
                        />
                    </FadeUp>

                    {/* Heading */}
                    <FadeUp delay={160}>
                        <h1
                            className="font-serif font-normal leading-[0.95] tracking-tight text-white"
                            style={{ fontSize: "clamp(42px, 7vw, 80px)" }}
                        >
                            How We Work
                        </h1>
                    </FadeUp>

                    {/* Sub */}
                    <FadeUp delay={280}>
                        <p
                            className="font-sans leading-[1.8] mt-6 mx-auto"
                            style={{
                                fontSize: "clamp(14px, 1.8vw, 16px)",
                                color: "rgba(255,255,255,0.5)",
                                maxWidth: "520px",
                            }}
                        >
                            A disciplined, research-driven framework applied consistently across every mandate.
                        </p>
                    </FadeUp>
                </div>
            </section>

            {/* ================================================================
                SECTION 2 — 6 PROCESS STEPS (alternating backgrounds)
            ================================================================ */}
            {steps.map((step, i) => (
                <section
                    key={step.number}
                    style={{ backgroundColor: stepBgs[i] }}
                >
                    <div
                        className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24"
                        style={{ paddingTop: "clamp(48px, 8vh, 96px)", paddingBottom: "clamp(48px, 8vh, 96px)" }}
                    >
                        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 items-start">

                            {/* ── Number col ── */}
                            <div className="md:col-span-2">
                                <Cascade index={0}>
                                    <span
                                        className="font-serif font-normal leading-none select-none block"
                                        style={{
                                            fontSize: "clamp(48px, 8vw, 96px)",
                                            color: "#0B2545",
                                            opacity: 0.08,
                                        }}
                                    >
                                        {step.number}
                                    </span>
                                </Cascade>
                            </div>

                            {/* ── Content col ── */}
                            <div className="md:col-span-10">
                                <SlideLeft delay={100}>
                                    <h2
                                        className="font-serif font-normal leading-tight"
                                        style={{
                                            fontSize: "clamp(24px, 3.5vw, 38px)",
                                            color: "#0B2545",
                                        }}
                                    >
                                        {step.title}
                                    </h2>
                                    {/* Gold underline */}
                                    <div
                                        style={{
                                            width: "24px",
                                            height: "2px",
                                            backgroundColor: "#F0B429",
                                            marginTop: "14px",
                                            marginBottom: "20px",
                                        }}
                                    />
                                </SlideLeft>

                                <FadeUp delay={200}>
                                    <p
                                        className="font-sans leading-[1.95]"
                                        style={{
                                            fontSize: "clamp(14px, 1.7vw, 16px)",
                                            color: "#374151",
                                            maxWidth: "760px",
                                        }}
                                    >
                                        {step.body}
                                    </p>
                                </FadeUp>
                            </div>

                        </div>
                    </div>
                </section>
            ))}

            {/* ================================================================
                SECTION 3 — CLOSING CTA (dark navy)
            ================================================================ */}
            <section
                className="relative overflow-hidden"
                style={{ backgroundColor: "#0B2545" }}
            >
                {/* Grid overlay */}
                <div
                    className="absolute inset-0 z-0 pointer-events-none"
                    style={{
                        backgroundImage:
                            "linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)",
                        backgroundSize: "60px 60px",
                    }}
                />

                <div
                    className="relative z-10 max-w-3xl mx-auto px-6 md:px-12 text-center flex flex-col items-center"
                    style={{ paddingTop: "clamp(64px, 10vh, 112px)", paddingBottom: "clamp(64px, 10vh, 112px)" }}
                >
                    <FadeUp delay={0}>
                        <h2
                            className="font-serif font-normal text-white leading-[1.05] tracking-tight"
                            style={{ fontSize: "clamp(32px, 4.5vw, 52px)" }}
                        >
                            Ready to explore a mandate?
                        </h2>
                    </FadeUp>

                    <FadeUp delay={150}>
                        <p
                            className="font-sans mt-5 mb-10"
                            style={{
                                fontSize: "clamp(14px, 1.7vw, 16px)",
                                color: "rgba(255,255,255,0.5)",
                                maxWidth: "440px",
                            }}
                        >
                            The first step is a conversation.
                        </p>
                    </FadeUp>

                    <FadeUp delay={280}>
                        <Link
                            href="/contact"
                            className="inline-flex items-center gap-3 font-sans group w-full sm:w-auto justify-center"
                            style={{
                                backgroundColor: "#F0B429",
                                color: "#0B2545",
                                padding: "16px 40px",
                                fontSize: "12px",
                                letterSpacing: "0.15em",
                                textTransform: "uppercase",
                                fontWeight: 600,
                            }}
                        >
                            Request a Meeting
                            <ArrowRight
                                size={14}
                                className="transition-transform duration-300 group-hover:translate-x-1"
                            />
                        </Link>
                    </FadeUp>
                </div>
            </section>

        </main>
    );
}
