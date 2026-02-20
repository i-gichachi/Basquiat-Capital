"use client";

import Link from "next/link";
import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { FadeUp, SlideLeft, GoldLine } from "@/components/Animate";

// ── FAQ DATA ──────────────────────────────────────────────────────────────────
const faqCategories = [
    {
        label: "Operations",
        title: "Operations & Structure",
        faqs: [
            {
                question: "Where does Basquiat Capital operate?",
                answer: "We are a US-domiciled LLC with primary operations in Nairobi, Kenya. We serve clients and partners across East Africa (Kenya, Uganda, Tanzania, Rwanda, Ethiopia), the UK, and the United States, with growing coverage across West and Southern Africa."
            },
            {
                question: "Is Basquiat Capital a bank or financial institution?",
                answer: "No. Basquiat Capital is a business development consulting firm. We are not a bank, broker-dealer, or fund manager. We facilitate capital connections, provide market intelligence, and optimize financial flows - we do not hold or manage client funds directly."

            },
            {
                question: "Does Basquiat Capital hold client funds?",
                answer: "No. We do not hold, custody, or manage client funds at any point. For Commercial FX, we connect clients directly with FCA-regulated providers. For the Institutional Hedge Fund, assets are held in custody by an independent institutional broker - not by Basquiat Capital."

            },
            {
                question: "What compliance standards do you operate under?",
                answer: "Our FX providers are FCA-regulated (Financial Conduct Authority, UK). Our hedge fund mandate operates through an SEC-compliant institutional brokerage structure. All engagements are governed by formal written agreements."
            }
        ]
    },
    {
        label: "Commercial FX",
        title: "Commercial FX",
        faqs: [
            {
                question: "Who is your typical client for Commercial FX?",
                answer: "Our typical FX clients are multinationals, NGOs, and exporters moving more than $10,000 per month across borders - particularly between African markets and USD, GBP, or EUR. If your organization is currently converting currency through a commercial bank, you are almost certainly overpaying."

            },
            {
                question: "How much can I expect to save on FX?",
                answer: "Most organizations converting currency through banks are paying 3-5% spreads per transaction. Our FCA-regulated FX partners typically deliver spreads of 0.5-1.5%, depending on volume and currency pairs. For organizations moving significant volumes, the annual savings can be material - often six figures."

            },
            {
                question: "What currencies do you support?",
                answer: "We support all major currency pairs involving USD, GBP, EUR, and a wide range of African currencies including KES, UGX, TZS, RWF, NGN, GHS, and ZAR. Coverage depends on the specific FX provider matched to your flow profile."
            },
            {
                question: "How does the FX analysis process work?",
                answer: "We start with a free analysis of your current cross-border payment flows - currencies, volumes, frequency, and current provider costs. From that data, we model your potential savings and introduce you to the most appropriate FCA-regulated FX provider for your profile. The entire process typically takes 5-10 business days from initial engagement."

            }
        ]
    },
    {
        label: "Capital Advisory",
        title: "Capital Market Advisory",
        faqs: [
            {
                question: "Who is your target for Capital Market Advisory?",
                answer: "We work with high-growth companies across Sub-Saharan Africa that are seeking Series A+ equity or structured debt financing from global institutional investors. Our ideal client has audited financials, a proven management team, and is operating at meaningful scale - typically $1M+ in annual revenue."

            },
            {
                question: "What does the Capital Market Advisory process involve?",
                answer: "We conduct independent research on your company - financials, management, market position, competitive landscape, and growth trajectory. We produce a structured investment profile and facilitate warm introductions to institutional capital partners in our network. We also support the due diligence process and investor communications."

            },
            {
                question: "Do you guarantee capital raises?",
                answer: "No. We do not guarantee outcomes. What we guarantee is rigorous preparation and access to the right institutional relationships. Capital allocation decisions are made by investors, not advisors. Our role is to ensure your company is positioned and presented to the highest standard possible."
            },
            {
                question: "How are you compensated for Capital Market Advisory?",
                answer: "Our fee structure is engagement-dependent and disclosed fully at the outset. We typically combine a modest retainer to cover research and preparation costs with a success fee tied to closed transactions. All terms are documented in a formal engagement letter before work begins."
            }
        ]
    },
    {
        label: "Hedge Fund",
        title: "Institutional Hedge Fund",
        faqs: [
            {
                question: "What is the minimum investment for the Hedge Fund mandate?",
                answer: "The minimum mandate is $1,000,000 USD. This reflects the institutional nature of the product - it is structured as a Discretionary Separately Managed Account (SMA), not a retail fund. We work with corporate treasuries, family offices, and investment funds."

            },
            {
                question: "How is my capital managed and protected?",
                answer: "Capital is held in custody by an independent institutional brokerage platform - not by Basquiat Capital. You retain legal ownership of your assets at all times. We operate with full discretionary authority within the parameters of your Investment Policy Statement (IPS), which includes custom drawdown limits and sector exposure caps tailored to your risk tolerance."

            },
            {
                question: "What are the fees for the Hedge Fund mandate?",
                answer: "Our fee structure is 2% annual management fee and 20% performance fee, with a High Water Mark applied. The High Water Mark means we only earn a performance fee on net new gains - if the portfolio declines, we must recover those losses before earning performance fees again."

            },
            {
                question: "What returns has the strategy delivered?",
                answer: "Our strategy targets outsized returns relative to the S&P 500 benchmark (approximately 10% average annual return). We deploy capital across US and International Small, Mid, and Large Cap equities with an alpha-focused methodology. Specific historical performance figures are available to qualified prospective investors upon formal engagement."
            }
        ]
    }
];

// ── ACCORDION ITEM ─────────────────────────────────────────────────────────
function AccordionItem({
    question,
    answer,
    isOpen,
    onToggle
}: {
    question: string;
    answer: string;
    isOpen: boolean;
    onToggle: () => void;
}) {
    return (
        <div
            style={{
                borderBottom: '1px solid #E5E7EB',
                borderLeft: isOpen ? '2px solid #F0B429' : '2px solid transparent',
                transition: 'border-color 0.3s ease',
                paddingLeft: isOpen ? '16px' : '0px',
            }}
        >
            {/* Question row */}
            <button
                onClick={onToggle}
                className="w-full flex items-start justify-between text-left py-4 gap-5"
                style={{ cursor: 'pointer', background: 'none', border: 'none' }}
            >
                <span
                    className="font-sans"
                    style={{
                        fontSize: 'clamp(15px, 1.8vw, 17px)',
                        color: isOpen ? '#0B2545' : '#1F2937',
                        fontWeight: isOpen ? 500 : 400,
                        lineHeight: 1.45,
                        transition: 'color 0.3s ease',
                        flex: 1
                    }}
                >
                    {question}
                </span>
                <div
                    className="flex-shrink-0 flex items-center justify-center transition-all duration-300"
                    style={{
                        width: '28px',
                        height: '28px',
                        border: `1px solid ${isOpen ? '#F0B429' : '#D1D5DB'}`,
                        color: isOpen ? '#F0B429' : '#9CA3AF',
                        marginTop: '2px'
                    }}
                >
                    {isOpen
                        ? <Minus size={13} />
                        : <Plus size={13} />
                    }
                </div>
            </button>

            {/* Answer - animated expand */}
            <div
                style={{
                    maxHeight: isOpen ? '400px' : '0px',
                    overflow: 'hidden',
                    transition: 'max-height 0.4s ease',
                }}
            >
                <div className="pb-5">
                    <p
                        className="font-sans"
                        style={{
                            fontSize: 'clamp(14px, 1.6vw, 15px)',
                            color: '#374151',
                            lineHeight: 1.9,
                        }}
                    >
                        {answer}
                    </p>
                </div>
            </div>
        </div>
    );
}

// ── FAQ CATEGORY BLOCK ──────────────────────────────────────────────────────
function FaqCategory({ category, startOpen }: { category: typeof faqCategories[0]; startOpen?: boolean }) {
    const [openIndex, setOpenIndex] = useState<number | null>(startOpen ? 0 : null);

    return (
        <div>
            {/* Category label */}
            <FadeUp delay={0}>
                <div className="flex items-center gap-4 mb-10">
                    <span
                        className="font-sans"
                        style={{
                            fontSize: '13px',
                            fontWeight: 600,
                            letterSpacing: '0.15em',
                            textTransform: 'uppercase',
                            color: '#F0B429'
                        }}
                    >
                        {category.label}
                    </span>
                    <div style={{ flex: 1, height: '1px', backgroundColor: '#E5E7EB' }} />
                </div>
            </FadeUp>

            {/* Accordion items */}
            <div>
                {category.faqs.map((faq, i) => (
                    <FadeUp key={i} delay={i * 60}>
                        <AccordionItem
                            question={faq.question}
                            answer={faq.answer}
                            isOpen={openIndex === i}
                            onToggle={() => setOpenIndex(openIndex === i ? null : i)}
                        />
                    </FadeUp>
                ))}
            </div>
        </div>
    );
}

// ── MAIN PAGE ───────────────────────────────────────────────────────────────
export default function FAQs() {
    return (
        <main className="flex flex-col min-h-screen" style={{ backgroundColor: '#FAFAFA' }}>

            {/* ── HERO ─────────────────────────────────────────────── */}
            <section
                className="relative flex items-center justify-center overflow-hidden"
                style={{
                    backgroundColor: '#0B2545',
                    minHeight: 'clamp(260px, 40vh, 520px)',
                }}
            >
                {/* Subtle grid pattern */}
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
                    className="absolute -bottom-10 -right-10 pointer-events-none select-none z-0"
                    style={{ opacity: 0.03 }}
                >
                    <span
                        className="font-serif leading-none text-white"
                        style={{ fontSize: 'clamp(140px, 22vw, 320px)' }}
                    >BC</span>
                </div>

                {/* Content */}
                <div className="relative z-10 text-center px-6 md:px-12 max-w-3xl mx-auto w-full">
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
                            Clarity &amp; Transparency
                        </span>
                    </FadeUp>

                    <GoldLine delay={150} centered={true} />

                    <FadeUp delay={300}>
                        <h1
                            className="font-serif font-normal text-white mt-6 leading-[0.95] tracking-tight"
                            style={{ fontSize: 'clamp(42px, 8vw, 86px)' }}
                        >
                            Frequently Asked
                            <br />
                            <span style={{ color: '#F0B429' }}>Questions</span>
                        </h1>
                    </FadeUp>

                    <FadeUp delay={500}>
                        <p
                            className="font-sans mt-6 max-w-lg mx-auto leading-[1.85]"
                            style={{
                                fontSize: 'clamp(14px, 1.8vw, 16px)',
                                color: 'rgba(255,255,255,0.55)'
                            }}
                        >
                            Clear insights into our global operations, compliance standards,
                            and value delivery models.
                        </p>
                    </FadeUp>
                </div>
            </section>

            {/* ── FAQ CONTENT ──────────────────────────────────────── */}
            <section className="py-16 md:py-24" style={{ backgroundColor: '#FAFAFA' }}>

                <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">

                        {/* ── Left Column - sticky context ─────────────── */}
                        <div className="lg:col-span-4">
                            <div className="lg:sticky lg:top-32">

                                <SlideLeft delay={0}>
                                    <span
                                        className="font-sans block mb-4"
                                        style={{
                                            fontSize: '11px',
                                            letterSpacing: '0.2em',
                                            textTransform: 'uppercase',
                                            color: '#F0B429'
                                        }}
                                    >
                                        Got Questions
                                    </span>
                                </SlideLeft>

                                <SlideLeft delay={100}>
                                    <h2
                                        className="font-serif font-normal leading-tight mb-5"
                                        style={{
                                            fontSize: 'clamp(32px, 4vw, 48px)',
                                            color: '#0B2545'
                                        }}
                                    >
                                        Frequently Asked
                                        Questions
                                    </h2>
                                </SlideLeft>

                                <FadeUp delay={200}>
                                    <div style={{ width: '40px', height: '2px', backgroundColor: '#F0B429', marginBottom: '20px' }} />
                                </FadeUp>

                                <FadeUp delay={250}>
                                    <p
                                        className="font-sans mb-10"
                                        style={{
                                            fontSize: '15px',
                                            color: '#6B7280',
                                            lineHeight: 1.85
                                        }}
                                    >
                                        Clear insights into our global operations, compliance
                                        standards, and value delivery models.
                                    </p>
                                </FadeUp>

                                {/* Category quick-links */}
                                <FadeUp delay={300}>
                                    <div className="mb-10 space-y-2">
                                        {faqCategories.map((cat, i) => (
                                            <a
                                                key={i}
                                                href={`#${cat.label.toLowerCase().replace(' ', '-')}`}
                                                className="flex items-center gap-3 font-sans transition-colors duration-300 group"
                                                style={{
                                                    fontSize: '13px',
                                                    color: '#9CA3AF',
                                                    textDecoration: 'none',
                                                    padding: '6px 0'
                                                }}
                                                onMouseEnter={e => (e.currentTarget as HTMLAnchorElement).style.color = '#F0B429'}
                                                onMouseLeave={e => (e.currentTarget as HTMLAnchorElement).style.color = '#9CA3AF'}
                                            >
                                                <div
                                                    style={{
                                                        width: '5px',
                                                        height: '5px',
                                                        borderRadius: '50%',
                                                        backgroundColor: '#F0B429',
                                                        opacity: 0.4,
                                                        flexShrink: 0
                                                    }}
                                                />
                                                {cat.title}
                                            </a>
                                        ))}
                                    </div>
                                </FadeUp>

                                {/* Need more details block */}
                                <FadeUp delay={350}>
                                    <div
                                        className="p-6"
                                        style={{
                                            borderLeft: '2px solid #F0B429',
                                            backgroundColor: '#F4F4F5'
                                        }}
                                    >
                                        <p
                                            className="font-sans mb-3"
                                            style={{
                                                fontSize: '10px',
                                                letterSpacing: '0.2em',
                                                textTransform: 'uppercase',
                                                color: '#F0B429'
                                            }}
                                        >
                                            Need More Details?
                                        </p>
                                        <p
                                            className="font-sans mb-4"
                                            style={{ fontSize: '14px', color: '#374151', lineHeight: 1.75 }}
                                        >
                                            If your question is not covered here, our team is available to walk you through any aspect of our mandates.
                                        </p>
                                        <Link
                                            href="/contact"
                                            className="inline-flex items-center gap-2 font-sans transition-colors duration-300"
                                            style={{
                                                fontSize: '11px',
                                                letterSpacing: '0.15em',
                                                textTransform: 'uppercase',
                                                color: '#0B2545'
                                            }}
                                            onMouseEnter={e => (e.currentTarget as HTMLAnchorElement).style.color = '#F0B429'}
                                            onMouseLeave={e => (e.currentTarget as HTMLAnchorElement).style.color = '#0B2545'}
                                        >
                                            Contact our team →
                                        </Link>
                                    </div>
                                </FadeUp>

                            </div>
                        </div>

                        {/* ── Right Column - FAQ accordions ──────────────── */}
                        <div className="lg:col-span-8">
                            {faqCategories.map((category, i) => (
                                <div
                                    key={i}
                                    id={category.label.toLowerCase().replace(' ', '-')}
                                    className="mb-24 md:mb-32 last:mb-0"
                                >
                                    <FaqCategory
                                        category={category}
                                        startOpen={i === 0}
                                    />
                                </div>
                            ))}
                        </div>

                    </div>
                </div>
            </section>

        </main>
    );
}
