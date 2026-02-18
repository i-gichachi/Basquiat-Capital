"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { FadeUp, SlideLeft, ScaleIn, Cascade, GoldLine } from "@/components/Animate";

export default function Offerings() {
    return (
        <main className="flex flex-col min-h-screen" style={{ backgroundColor: '#FAFAFA' }}>

            {/* ============================================================
          SECTION 1 - HERO
          New offerings_hero.png image, strong overlay, no clip artifact
      ============================================================ */}
            <section
                className="relative flex items-center justify-center overflow-hidden"
                style={{
                    backgroundColor: '#0B2545',
                    height: 'clamp(420px, 70vh, 700px)',
                    minHeight: '420px'
                }}
            >
                {/* Background image */}
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/images/offerings_hero.png"
                        alt="Basquiat Capital Offerings"
                        fill
                        className="object-cover object-center"
                        style={{ opacity: 0.35 }}
                        priority
                    />
                    {/* Clean full overlay - no clip paths, no diagonals */}
                    <div className="absolute inset-0" style={{ backgroundColor: 'rgba(11,37,69,0.70)' }} />
                </div>

                {/* BC Monogram watermark */}
                <div
                    className="absolute -bottom-12 -right-12 pointer-events-none select-none z-0"
                    style={{ opacity: 0.03 }}
                >
                    <span
                        className="font-serif leading-none text-white"
                        style={{ fontSize: 'clamp(140px, 22vw, 340px)' }}
                    >BC</span>
                </div>

                {/* Content */}
                <div className="relative z-10 text-center px-6 md:px-12 max-w-4xl mx-auto w-full">
                    <GoldLine delay={200} centered={true} />

                    <FadeUp delay={300}>
                        <h1
                            className="font-serif font-normal leading-[0.95] tracking-tight text-white mt-6"
                            style={{ fontSize: 'clamp(42px, 8vw, 88px)' }}
                        >
                            Our{" "}
                            <span className="font-semibold" style={{ color: '#F0B429' }}>
                                Mandates
                            </span>
                        </h1>
                    </FadeUp>

                    <FadeUp delay={500}>
                        <p
                            className="font-sans leading-[1.8] mt-6 max-w-xl mx-auto"
                            style={{
                                fontSize: 'clamp(14px, 2vw, 17px)',
                                color: 'rgba(255,255,255,0.60)'
                            }}
                        >
                            Tailored solutions for growth, capital efficiency, and wealth preservation.
                        </p>
                    </FadeUp>
                </div>
            </section>

            {/* ============================================================
          SECTION 2 - COMMERCIAL FX
          Background: #FAFAFA | Image: fx_visual.png (new abstract)
      ============================================================ */}
            <section className="py-12 md:py-20" style={{ backgroundColor: '#FAFAFA' }}>

                <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

                        {/* Left - FX Visual */}
                        <div className="order-2 lg:order-1">
                            <ScaleIn delay={100}>
                                <div
                                    className="relative w-full overflow-hidden"
                                    style={{
                                        aspectRatio: '4/3',
                                        boxShadow: '0 25px 50px rgba(11,37,69,0.12)'
                                    }}
                                >
                                    <div
                                        className="absolute left-0 top-0 bottom-0 z-10"
                                        style={{ width: '3px', backgroundColor: '#F0B429' }}
                                    />
                                    <Image
                                        src="/images/forex_phone.png"
                                        alt="Commercial FX"
                                        fill
                                        className="object-cover object-center"
                                    />
                                </div>
                            </ScaleIn>
                        </div>

                        {/* Right - Content */}
                        <div className="order-1 lg:order-2">
                            <SlideLeft delay={0}>
                                <div
                                    className="mb-6"
                                    style={{ width: '32px', height: '1px', backgroundColor: '#F0B429' }}
                                />
                            </SlideLeft>

                            <SlideLeft delay={100}>
                                <h2
                                    className="font-serif font-normal leading-tight mb-6"
                                    style={{
                                        fontSize: 'clamp(32px, 5vw, 52px)',
                                        color: '#0B2545'
                                    }}
                                >
                                    Commercial FX
                                </h2>
                            </SlideLeft>

                            <FadeUp delay={200}>
                                <p
                                    className="font-sans leading-[1.85] mb-5"
                                    style={{ fontSize: '15px', color: '#374151' }}
                                >
                                    Every multinational, exporter, and NGO operating across Africa converts
                                    currency. Most are still doing it through their bank, paying 3-5% spreads
                                    on every transaction.
                                </p>
                            </FadeUp>

                            <FadeUp delay={300}>
                                <p
                                    className="font-sans leading-[1.85] mb-8"
                                    style={{ fontSize: '15px', color: '#374151' }}
                                >
                                    We fix that. We analyze your current cross-border payment flows, currencies,
                                    volumes, and what you're paying in bank spreads. We work with FCA-regulated
                                    commercial FX providers to help your organization save and scale.
                                </p>
                            </FadeUp>

                            {/* Who This Is For */}
                            <FadeUp delay={400}>
                                <div
                                    className="p-6 mb-8"
                                    style={{
                                        borderLeft: '2px solid #F0B429',
                                        backgroundColor: '#F4F4F5'
                                    }}
                                >
                                    <p
                                        className="font-sans mb-3"
                                        style={{
                                            fontSize: '11px',
                                            letterSpacing: '0.15em',
                                            textTransform: 'uppercase',
                                            color: '#F0B429'
                                        }}
                                    >
                                        Who This Is For
                                    </p>
                                    <p
                                        className="font-sans leading-[1.8]"
                                        style={{ fontSize: '14px', color: '#374151' }}
                                    >
                                        Multinationals, NGOs, and Exporters moving &gt;$10k/month across borders,
                                        looking to reduce FX costs by 50-80%.
                                    </p>
                                </div>
                            </FadeUp>

                            <FadeUp delay={500}>
                                <Link
                                    href="/contact"
                                    className="inline-flex items-center gap-2 font-sans transition-colors duration-300"
                                    style={{
                                        fontSize: '12px',
                                        letterSpacing: '0.15em',
                                        textTransform: 'uppercase',
                                        color: '#0B2545'
                                    }}
                                    onMouseEnter={e => (e.currentTarget as HTMLAnchorElement).style.color = '#F0B429'}
                                    onMouseLeave={e => (e.currentTarget as HTMLAnchorElement).style.color = '#0B2545'}
                                >
                                    Get a Free Analysis <ArrowRight size={13} />
                                </Link>
                            </FadeUp>
                        </div>

                    </div>
                </div>
            </section>

            {/* ============================================================
          SECTION 3 - CAPITAL MARKET ADVISORY
          Background: #F4F4F5 | Image: secondary_bg.jpg
      ============================================================ */}
            <section className="py-12 md:py-20" style={{ backgroundColor: '#F4F4F5' }}>

                <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

                        {/* Left - Content */}
                        <div className="order-1 lg:order-1">
                            <SlideLeft delay={0}>
                                <div
                                    className="mb-6"
                                    style={{ width: '32px', height: '1px', backgroundColor: '#F0B429' }}
                                />
                            </SlideLeft>

                            <SlideLeft delay={100}>
                                <h2
                                    className="font-serif font-normal leading-tight mb-6"
                                    style={{
                                        fontSize: 'clamp(32px, 5vw, 52px)',
                                        color: '#0B2545'
                                    }}
                                >
                                    Capital Market Advisory
                                </h2>
                            </SlideLeft>

                            <FadeUp delay={200}>
                                <p
                                    className="font-sans leading-[1.85] mb-5"
                                    style={{ fontSize: '15px', color: '#374151' }}
                                >
                                    Companies across Sub-Saharan Africa are building at scale but lack access
                                    to institutional capital. Banks are slow. Local markets are shallow.
                                    Cross-border capital formation is complex.
                                </p>
                            </FadeUp>

                            <FadeUp delay={300}>
                                <p
                                    className="font-sans leading-[1.85] mb-8"
                                    style={{ fontSize: '15px', color: '#374151' }}
                                >
                                    We bridge that gap. We conduct independent research on your company:
                                    financials, management, market position, and growth trajectory. We facilitate
                                    introductions to the appropriate institutional capital partners.
                                </p>
                            </FadeUp>

                            {/* Who This Is For */}
                            <FadeUp delay={400}>
                                <div
                                    className="p-6 mb-8"
                                    style={{
                                        borderLeft: '2px solid #F0B429',
                                        backgroundColor: '#FFFFFF'
                                    }}
                                >
                                    <p
                                        className="font-sans mb-3"
                                        style={{
                                            fontSize: '11px',
                                            letterSpacing: '0.15em',
                                            textTransform: 'uppercase',
                                            color: '#F0B429'
                                        }}
                                    >
                                        Who This Is For
                                    </p>
                                    <p
                                        className="font-sans leading-[1.8]"
                                        style={{ fontSize: '14px', color: '#374151' }}
                                    >
                                        High-growth companies in SSA seeking Series A+ equity or debt financing
                                        from global institutional investors.
                                    </p>
                                </div>
                            </FadeUp>

                            {/* Service list */}
                            <FadeUp delay={500}>
                                <div className="space-y-3">
                                    {[
                                        "Independent Research & Profiling",
                                        "Investor Deck Preparation",
                                        "Institutional Investor Introductions",
                                        "Due Diligence Support"
                                    ].map((item, i) => (
                                        <div
                                            key={i}
                                            className="flex items-center gap-3"
                                        >
                                            <div
                                                style={{
                                                    width: '6px',
                                                    height: '6px',
                                                    borderRadius: '50%',
                                                    backgroundColor: '#F0B429',
                                                    flexShrink: 0
                                                }}
                                            />
                                            <span
                                                className="font-sans"
                                                style={{ fontSize: '14px', color: '#374151' }}
                                            >
                                                {item}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </FadeUp>
                        </div>

                        {/* Right - Image */}
                        <div className="order-2 lg:order-2">
                            <ScaleIn delay={150}>
                                <div
                                    className="relative w-full overflow-hidden"
                                    style={{
                                        aspectRatio: '4/3',
                                        boxShadow: '0 25px 50px rgba(11,37,69,0.12)'
                                    }}
                                >
                                    <div
                                        className="absolute left-0 top-0 bottom-0 z-10"
                                        style={{ width: '3px', backgroundColor: '#F0B429' }}
                                    />
                                    <Image
                                        src="/images/secondary_bg.jpg"
                                        alt="Capital Market Advisory"
                                        fill
                                        className="object-cover object-center"
                                    />
                                </div>
                            </ScaleIn>
                        </div>

                    </div>
                </div>
            </section>

            {/* ============================================================
          SECTION 4 - INSTITUTIONAL HEDGE FUND
          Background: #0A0A0A near-black - KEEP EXACTLY AS-IS
          Only fix: ensure mobile responsive
      ============================================================ */}
            <section className="py-12 md:py-20" style={{ backgroundColor: '#374151' }}>

                <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-20">

                        {/* Left - Title + Strategy + Who */}
                        <div>
                            <SlideLeft delay={0}>
                                <div
                                    className="mb-8"
                                    style={{ width: '32px', height: '1px', backgroundColor: '#F0B429' }}
                                />
                            </SlideLeft>

                            <SlideLeft delay={100}>
                                <h3 className="font-serif font-normal text-white mb-6 leading-tight"
                                    style={{ fontSize: 'clamp(24px, 4vw, 42px)' }}>
                                    Institutional Hedge Fund
                                </h3>
                            </SlideLeft>

                            <FadeUp delay={150}>
                                <p
                                    className="font-sans leading-[1.85] mb-8"
                                    style={{
                                        fontSize: 'clamp(13px, 1.8vw, 15px)',
                                        color: 'rgba(255,255,255,0.80)'
                                    }}
                                >
                                    For Corporate Treasuries, Family Offices, and Investment Funds.
                                </p>
                            </FadeUp>

                            {/* Alpha Strategy callout */}
                            <FadeUp delay={250}>
                                <div
                                    className="p-6 mb-8"
                                    style={{
                                        borderLeft: '2px solid #F0B429',
                                        backgroundColor: 'rgba(240,180,41,0.10)'
                                    }}
                                >
                                    <p
                                        className="font-serif mb-3"
                                        style={{
                                            fontSize: 'clamp(16px, 2vw, 18px)',
                                            color: '#F0B429',
                                            fontWeight: 400
                                        }}
                                    >
                                        Alpha-Focused Strategy
                                    </p>
                                    <p
                                        className="font-sans leading-[1.85]"
                                        style={{
                                            fontSize: 'clamp(13px, 1.5vw, 14px)',
                                            color: 'rgba(255,255,255,0.90)'
                                        }}
                                    >
                                        The S&P 500 averages 10% yearly returns. We deploy capital using
                                        strategies to capture outsized returns in U.S and International Small,
                                        Mid and Large Cap Equities.
                                    </p>
                                </div>
                            </FadeUp>

                            {/* Who This Is For */}
                            <FadeUp delay={350}>
                                <div
                                    className="p-6"
                                    style={{
                                        borderLeft: '2px solid rgba(240,180,41,0.3)',
                                        backgroundColor: 'rgba(255,255,255,0.05)'
                                    }}
                                >
                                    <p
                                        className="font-sans mb-3"
                                        style={{
                                            fontSize: '11px',
                                            letterSpacing: '0.15em',
                                            textTransform: 'uppercase',
                                            color: '#F0B429'
                                        }}
                                    >
                                        Who This Is For
                                    </p>
                                    <p
                                        className="font-sans leading-[1.8]"
                                        style={{
                                            fontSize: 'clamp(13px, 1.5vw, 14px)',
                                            color: 'rgba(255,255,255,0.80)'
                                        }}
                                    >
                                        Entities with &gt;$1M USD in liquid capital seeking actively managed,
                                        high-alpha US equity exposure outside traditional passive indices.
                                    </p>
                                </div>
                            </FadeUp>
                        </div>

                        {/* Right - Term Sheet */}
                        <div>
                            <FadeUp delay={200}>
                                <div style={{ borderTop: '1px solid rgba(255,255,255,0.20)' }}>
                                    {[
                                        { label: "Structure", value: "Discretionary Separately Managed Account (SMA)." },
                                        { label: "Minimum Mandate", value: "$1,000,000 USD" },
                                        { label: "The Offering", value: "A bespoke US Equity strategy tailored to your Investment Policy Statement (IPS)." },
                                        { label: "Execution", value: "Full discretionary authority via Institutional Broker platform." },
                                        { label: "Risk Management", value: "Custom drawdown limits and sector exposure caps tailored to risk tolerance." },
                                        { label: "Fees", value: "2% Management / 20% Performance\n(High Water Mark applied)" },
                                    ].map((row, i) => (
                                        <div
                                            key={i}
                                            className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-6 py-5"
                                            style={{ borderBottom: '1px solid rgba(255,255,255,0.20)' }}
                                        >
                                            <p
                                                className="font-sans"
                                                style={{
                                                    fontSize: '11px',
                                                    letterSpacing: '0.12em',
                                                    textTransform: 'uppercase',
                                                    color: '#F0B429',
                                                    paddingBottom: '2px'
                                                }}
                                            >
                                                {row.label}
                                            </p>
                                            <p
                                                className="font-sans leading-[1.7] whitespace-pre-line"
                                                style={{
                                                    fontSize: 'clamp(13px, 1.5vw, 14px)',
                                                    color: 'rgba(255,255,255,0.90)'
                                                }}
                                            >
                                                {row.value}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </FadeUp>
                        </div>

                    </div>
                </div>
            </section>

        </main>
    );
}
