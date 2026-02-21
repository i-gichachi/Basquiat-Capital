"use client";

import Image from "next/image";
import { FadeUp, SlideLeft, ScaleIn, Cascade, GoldLine } from "@/components/Animate";

export default function About() {
    return (
        <main className="flex flex-col min-h-screen" style={{ backgroundColor: '#FAFAFA' }}>

            {/* ============================================================
          SECTION 1 - HERO
      ============================================================ */}
            <section className="relative flex items-center justify-center overflow-hidden min-h-[clamp(260px,40vh,520px)] md:min-h-[400px] md:h-[400px] md:mb-16" style={{ backgroundColor: '#0B2545' }}>

                {/* Background image */}
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/images/hero_bg.jpg"
                        alt="Basquiat Capital"
                        fill
                        className="object-cover object-center"
                        style={{ opacity: 0.25 }}
                        priority
                    />
                    <div className="absolute inset-0" style={{ backgroundColor: 'rgba(11,37,69,0.75)' }} />
                </div>

                {/* BC Monogram watermark */}
                <div className="absolute -bottom-12 -right-12 pointer-events-none select-none z-0"
                    style={{ opacity: 0.03 }}>
                    <span className="font-serif leading-none text-white"
                        style={{ fontSize: 'clamp(160px, 25vw, 380px)' }}>BC</span>
                </div>

                {/* Content */}
                <div className="relative z-10 text-center px-6 md:px-12 max-w-4xl mx-auto w-full">
                    <GoldLine delay={200} centered={true} />

                    <FadeUp delay={300}>
                        <h1 className="font-serif font-normal leading-[0.95] tracking-tight text-white mt-6"
                            style={{ fontSize: 'clamp(40px, 8vw, 88px)' }}>
                            About{" "}
                            <span className="font-semibold" style={{ color: '#F0B429' }}>
                                Basquiat Capital
                            </span>
                        </h1>
                    </FadeUp>

                    <FadeUp delay={500}>
                        <p className="font-sans leading-[1.8] mt-6 max-w-xl mx-auto"
                            style={{ fontSize: 'clamp(14px, 2vw, 17px)', color: 'rgba(255,255,255,0.6)' }}>
                            Bridging the gap between global capital and African opportunity.
                        </p>
                    </FadeUp>
                </div>
            </section>

            {/* ============================================================
          SECTION 2 - WHO WE ARE
      ============================================================ */}
            <section className="py-12 md:py-20" style={{ backgroundColor: '#FAFAFA' }}>

                <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-24 items-center">

                        {/* Left - Text */}
                        <div className="order-2 lg:order-1">
                            <SlideLeft delay={0}>
                                <span className="font-sans block mb-4"
                                    style={{ fontSize: '11px', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#F0B429' }}>
                                    Who We Are
                                </span>
                            </SlideLeft>

                            <SlideLeft delay={100}>
                                <h2 className="font-serif font-normal leading-[1.05] mb-8"
                                    style={{ fontSize: 'clamp(32px, 5vw, 54px)', color: '#0B2545' }}>
                                    A Bridge for Capital<br />in Emerging Markets.
                                </h2>
                            </SlideLeft>

                            <FadeUp delay={200}>
                                <p className="font-sans leading-[1.85] mb-5"
                                    style={{ fontSize: '15px', color: '#374151' }}>
                                    Basquiat Capital is a US-domiciled Limited Liability Company (LLC) with
                                    primary operations in Nairobi, Kenya. We serve clients and partners across
                                    East Africa, the UK, and the United States.
                                </p>
                            </FadeUp>

                            <FadeUp delay={300}>
                                <p className="font-sans leading-[1.85] mb-10"
                                    style={{ fontSize: '15px', color: '#374151' }}>
                                    Our mission is to facilitate seamless capital flow and structured financial
                                    solutions in markets that are often overlooked but ripe with potential.
                                </p>
                            </FadeUp>

                            {/* Our Role callout */}
                            <FadeUp delay={400}>
                                <div className="py-2 pl-6" style={{ borderLeft: '2px solid #F0B429' }}>
                                    <p className="font-sans mb-3"
                                        style={{ fontSize: '11px', letterSpacing: '0.15em', textTransform: 'uppercase', color: '#F0B429' }}>
                                        Our Role
                                    </p>
                                    <p className="font-sans leading-[1.85] italic"
                                        style={{ fontSize: '15px', color: '#374151' }}>
                                        <span className="font-semibold not-italic" style={{ color: '#0B2545' }}>
                                            We are not a bank.
                                        </span>{" "}
                                        We are a business development consulting firm. We identify, vet, and profile
                                        high-potential companies to provide actionable market intelligence to our
                                        institutional partners.
                                    </p>
                                </div>
                            </FadeUp>
                        </div>

                        {/* Right - Data Visual */}
                        <div className="order-1 lg:order-2">
                            <ScaleIn delay={150}>
                                <div className="relative w-full overflow-hidden shadow-2xl"
                                    style={{
                                        aspectRatio: '4/3',
                                        boxShadow: '0 25px 50px rgba(11,37,69,0.15)'
                                    }}>
                                    {/* Gold left accent bar */}
                                    <div className="absolute left-0 top-0 bottom-0 z-10"
                                        style={{ width: '3px', backgroundColor: '#F0B429' }} />
                                    <Image
                                        src="/images/data_visual.png"
                                        alt="Strategic capital visualization"
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
          SECTION 3 - OUR PHILOSOPHY
          Background: Dark Navy (#0B2545) -- REVERTED PER USER REQUEST
          Cards: Dark Navy (#0D2E57) separated by gap
      ============================================================ */}
            <section className="py-12 md:py-20" style={{ backgroundColor: '#0B2545' }}>

                <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">

                    {/* Header */}
                    <div className="mb-12 md:mb-14">
                        <SlideLeft delay={0}>
                            <span className="font-sans block mb-4"
                                style={{ fontSize: '11px', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#F0B429' }}>
                                How We Operate
                            </span>
                        </SlideLeft>
                        <SlideLeft delay={100}>
                            <h2 className="font-serif font-normal leading-tight text-white"
                                style={{ fontSize: 'clamp(36px, 5vw, 52px)' }}>
                                Our Philosophy
                            </h2>
                        </SlideLeft>
                    </div>

                    {/* Philosophy Cards - Separated Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                        {[
                            {
                                title: "Strategic Partnerships",
                                body: "We operate through a network of strategic partners in East and Sub-Saharan Africa's private sector, institutional relationships with global financial services firms, and on-the-ground presence across key markets."
                            },
                            {
                                title: "Deliberately Lean",
                                body: "We are deliberately lean. Every person in our network is there because they add direct value to the opportunities we pursue. Efficiency and agility are at our core."
                            }
                        ].map((card, i) => (
                            <Cascade key={card.title} index={i}>
                                <div
                                    className="group flex flex-col relative overflow-hidden transition-all duration-500"
                                    style={{
                                        backgroundColor: '#0D2E57',
                                        borderTop: '2px solid rgba(240,180,41,0.3)',
                                        padding: 'clamp(32px, 5vw, 48px)',
                                        minHeight: 'clamp(280px, 30vw, 360px)',
                                        boxShadow: '0 10px 30px rgba(0,0,0,0.15)'
                                    }}
                                    onMouseEnter={e => {
                                        (e.currentTarget as HTMLDivElement).style.backgroundColor = '#0F3566';
                                        (e.currentTarget as HTMLDivElement).style.borderTopColor = '#F0B429';
                                        (e.currentTarget as HTMLDivElement).style.transform = 'translateY(-4px)';
                                    }}
                                    onMouseLeave={e => {
                                        (e.currentTarget as HTMLDivElement).style.backgroundColor = '#0D2E57';
                                        (e.currentTarget as HTMLDivElement).style.borderTopColor = 'rgba(240,180,41,0.3)';
                                        (e.currentTarget as HTMLDivElement).style.transform = 'translateY(0)';
                                    }}
                                >
                                    {/* Gold accent line */}
                                    <div className="mb-8 transition-all duration-500"
                                        style={{ width: '32px', height: '1px', backgroundColor: '#F0B429', opacity: 0.5 }} />

                                    {/* Title */}
                                    <h3 className="font-serif font-normal text-white leading-tight mb-5"
                                        style={{ fontSize: 'clamp(22px, 3vw, 28px)' }}>
                                        {card.title}
                                    </h3>

                                    {/* Body */}
                                    <p className="font-sans leading-[1.9] flex-1"
                                        style={{ fontSize: 'clamp(13px, 1.5vw, 15px)', color: 'rgba(255,255,255,0.55)' }}>
                                        {card.body}
                                    </p>
                                </div>
                            </Cascade>
                        ))}
                    </div>

                </div>
            </section>

            {/* ============================================================
          SECTION 4 - WHAT SETS US APART
          Background: Dark Gray (#374151) from "Featured In" section -- CHANGED PER USER REQUEST
          Headers: White/Gold for visibility
          Cards: White
      ============================================================ */}
            <section className="py-12 md:py-20" style={{ backgroundColor: '#374151' }}>

                <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">

                    {/* Header - centered */}
                    <div className="max-w-3xl mx-auto text-center mb-14 md:mb-16">
                        <SlideLeft delay={0}>
                            <span className="font-sans block mb-4"
                                style={{ fontSize: '11px', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#F0B429' }}>
                                Our Edge
                            </span>
                        </SlideLeft>
                        <FadeUp delay={100}>
                            <h2 className="font-serif font-normal leading-tight"
                                style={{ fontSize: 'clamp(32px, 5vw, 48px)', color: '#FFFFFF' }}>
                                What Sets Us Apart
                            </h2>
                        </FadeUp>
                        <GoldLine delay={200} centered={true} />
                    </div>

                    {/* Cards Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {[
                            {
                                number: "01",
                                title: "On-the-Ground Presence",
                                body: "We are not advisors sitting in London. We operate in the markets we serve, Nairobi, East Africa, with direct access to the opportunities we identify."
                            },
                            {
                                number: "02",
                                title: "Institutional Rigour",
                                body: "Every mandate we take is approached with the same diligence standards expected by global institutional investors, regardless of deal size."
                            },
                            {
                                number: "03",
                                title: "Aligned Incentives",
                                body: "We succeed when our clients succeed. Our compensation structure is designed to keep us fully aligned with the outcomes we help create."
                            }
                        ].map((item, i) => (
                            <Cascade key={item.title} index={i}>
                                <div
                                    className="group relative overflow-hidden transition-all duration-400"
                                    style={{
                                        backgroundColor: '#FFFFFF',
                                        border: '1px solid #D1D5DB',
                                        padding: 'clamp(24px, 4vw, 36px)',
                                    }}
                                    onMouseEnter={e => {
                                        const el = e.currentTarget as HTMLDivElement;
                                        el.style.borderColor = 'rgba(240,180,41,0.5)';
                                        el.style.boxShadow = '0 20px 40px rgba(11,37,69,0.08)';
                                        el.style.transform = 'translateY(-4px)';
                                    }}
                                    onMouseLeave={e => {
                                        const el = e.currentTarget as HTMLDivElement;
                                        el.style.borderColor = '#D1D5DB';
                                        el.style.boxShadow = 'none';
                                        el.style.transform = 'translateY(0)';
                                    }}
                                >
                                    {/* Gold top sweep on hover - via pseudo via inline border-top change */}
                                    <div className="absolute top-0 left-0 right-0 origin-left transition-transform duration-500 scale-x-0 group-hover:scale-x-100"
                                        style={{ height: '2px', backgroundColor: '#F0B429' }} />

                                    {/* Number - FIXED: strong gold color, not faded */}
                                    <div className="font-serif leading-none mb-5"
                                        style={{
                                            fontSize: 'clamp(40px, 6vw, 56px)',
                                            color: '#F0B429',
                                            opacity: 0.4,
                                            fontWeight: 400
                                        }}>
                                        {item.number}
                                    </div>

                                    {/* Title */}
                                    <h3 className="font-serif font-normal leading-tight mb-4"
                                        style={{ fontSize: 'clamp(17px, 2vw, 20px)', color: '#0B2545' }}>
                                        {item.title}
                                    </h3>

                                    {/* Body */}
                                    <p className="font-sans leading-[1.85]"
                                        style={{ fontSize: '14px', color: '#374151' }}>
                                        {item.body}
                                    </p>
                                </div>
                            </Cascade>
                        ))}
                    </div>

                </div>
            </section>

            {/* ============================================================
          SECTION 5 - FOUNDER
      ============================================================ */}
            <section className="py-12 md:py-20" style={{ backgroundColor: '#FAFAFA' }}>

                <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-24 items-start">

                        {/* Left - Portrait */}
                        <div className="order-1">
                            <ScaleIn delay={150}>
                                <div className="relative w-full overflow-hidden shadow-2xl"
                                    style={{
                                        aspectRatio: '3/4',
                                        boxShadow: '0 25px 50px rgba(11,37,69,0.15)',
                                        maxHeight: '600px'
                                    }}>
                                    {/* Gold left accent bar */}
                                    <div className="absolute left-0 top-0 bottom-0 z-10"
                                        style={{ width: '3px', backgroundColor: '#F0B429' }} />
                                    <Image
                                        src="/images/stompy-portrait.jpg"
                                        alt="Stompy Mwendwa — Founder & CIO, Basquiat Capital"
                                        fill
                                        className="object-cover"
                                        style={{ objectPosition: 'top center' }}
                                    />
                                </div>
                            </ScaleIn>
                        </div>

                        {/* Right - Bio */}
                        <div className="order-2">
                            <SlideLeft delay={0}>
                                <span className="font-sans block mb-4"
                                    style={{ fontSize: '11px', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#F0B429' }}>
                                    The Founder
                                </span>
                            </SlideLeft>

                            <SlideLeft delay={100}>
                                <h2 className="font-serif font-normal leading-tight mb-2"
                                    style={{ fontSize: 'clamp(28px, 4vw, 42px)', color: '#0B2545' }}>
                                    Stompy &ldquo;Stomzy&rdquo; Mwendwa
                                </h2>
                            </SlideLeft>

                            <FadeUp delay={150}>
                                <p className="font-sans mb-8"
                                    style={{ fontSize: '13px', letterSpacing: '0.05em', textTransform: 'uppercase', color: '#F0B429' }}>
                                    Founder &amp; Chief Investment Officer, Basquiat Capital LLC
                                </p>
                            </FadeUp>

                            <FadeUp delay={200}>
                                <p className="font-sans leading-[1.85] mb-5"
                                    style={{ fontSize: '15px', color: '#374151' }}>
                                    Stompy &ldquo;Stomzy&rdquo; Mwendwa is the Founder and Chief Investment Officer of Basquiat Capital LLC, a research-driven investment firm focused on U.S. public equities, institutional-grade FX and private equity mandates across emerging and frontier markets.
                                </p>
                            </FadeUp>

                            <FadeUp delay={250}>
                                <p className="font-sans leading-[1.85] mb-5"
                                    style={{ fontSize: '15px', color: '#374151' }}>
                                    Under his leadership, Basquiat Capital is evolving from a high-performance public markets platform into a multi-strategy investment business, adding commercial FX market development and a private equity practice that targets tickets of no less than $10 million per transaction.
                                </p>
                            </FadeUp>

                            <FadeUp delay={300}>
                                <p className="font-sans leading-[1.85] mb-5"
                                    style={{ fontSize: '15px', color: '#374151' }}>
                                    His investment approach combines fundamental analysis, AI-automated screening, and a proprietary GARP framework, enabling Basquiat Capital to originate and structure opportunities for insurers, corporates, and high-net-worth clients seeking differentiated dollar-denominated returns.
                                </p>
                            </FadeUp>

                            <FadeUp delay={350}>
                                <p className="font-sans leading-[1.85] mb-5"
                                    style={{ fontSize: '15px', color: '#374151' }}>
                                    Beyond portfolio construction, he is active in capital markets and corporate advisory across the United States and Sub-Saharan Africa, structuring cross-border equity and FX solutions and building strategic partnerships with insurers, telecoms, and international brokers.
                                </p>
                            </FadeUp>

                            <FadeUp delay={400}>
                                <p className="font-sans leading-[1.85]"
                                    style={{ fontSize: '15px', color: '#374151' }}>
                                    Stomzy is also a long-standing investment educator, having grown Basquiat&apos;s research membership and education franchises into on-ramps that convert sophisticated retail and corporate audiences into institutional relationships and deal flow.
                                </p>
                            </FadeUp>
                        </div>

                    </div>
                </div>
            </section>

        </main>
    );
}
