import Image from "next/image";
import Link from "next/link";
import { FadeUp, SlideLeft, ScaleIn, GoldLine, Cascade } from "@/components/Animate";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export default function OfferingsPage() {
    return (
        <main className="flex flex-col min-h-screen bg-basquiat-white text-basquiat-black pt-20">
            {/* Header */}
            <section className="bg-basquiat-blue text-white py-12 md:py-24 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-1/3 h-full bg-basquiat-gold/5 skew-x-12 transform origin-top-right" />
                <div className="max-w-7xl mx-auto px-6 lg:px-12 text-center relative z-10">
                    <SlideLeft delay={0}>
                        <h1 className="font-serif text-[42px] md:text-[80px] font-light mb-6 tracking-tight leading-[0.9]">
                            Our <span className="text-basquiat-gold">Mandates</span>
                        </h1>
                    </SlideLeft>
                    <GoldLine delay={150} centered={true} />
                    <FadeUp delay={200}>
                        <p className="font-sans text-[16px] md:text-[20px] font-light text-gray-200 max-w-3xl mx-auto leading-relaxed mt-8">
                            Tailored solutions for growth, capital efficiency, and wealth preservation.
                        </p>
                    </FadeUp>
                </div>
            </section>

            {/* Commercial FX */}
            <section id="fx" className="py-12 md:py-20 bg-white relative">
                <div className="max-w-7xl mx-auto px-6 lg:px-12 grid md:grid-cols-2 gap-8 md:gap-16 items-center">
                    <ScaleIn delay={0}>
                        <div className="relative h-[300px] md:h-[600px] w-full bg-gray-200 rounded-sm overflow-hidden shadow-2xl order-2 md:order-1">
                            <Image src="/images/forex_phone.png" alt="Foreign Exchange" fill className="object-cover hover:scale-105 transition-transform duration-700" />
                        </div>
                    </ScaleIn>
                    <div className="order-1 md:order-2">
                        <SlideLeft delay={0}>
                            <div className="w-12 h-1 bg-basquiat-gold mb-8" />
                        </SlideLeft>
                        <SlideLeft delay={100}>
                            <h2 className="font-serif text-[42px] font-light text-basquiat-black mb-6 tracking-tight">Commercial FX</h2>
                        </SlideLeft>
                        <FadeUp delay={200}>
                            <p className="font-sans text-[15px] text-gray-600 mb-6 leading-[1.8] font-light">
                                Every multinational, exporter, and NGO operating across Africa converts currency. Most are still doing it through their bank, paying 3-5% spreads on every transaction.
                            </p>
                            <p className="font-sans text-[15px] text-gray-600 mb-10 leading-[1.8] font-light">
                                We fix that. We analyze your current cross-border payment flows, currencies, volumes, and what you're paying in bank spreads. We work with FCA-regulated commercial FX providers to help your organization save and scale.
                            </p>
                        </FadeUp>

                        {/* Qualifier Block */}
                        <FadeUp delay={300}>
                            <div className="bg-gray-50 p-8 rounded-sm border border-gray-200 shadow-sm mb-10 border-l-4 border-l-basquiat-gold">
                                <h4 className="font-sans text-[12px] font-bold text-basquiat-black uppercase tracking-widest mb-3">Who This Is For</h4>
                                <p className="font-sans text-[14px] text-gray-600 leading-relaxed">
                                    Multinationals, NGOs, and Exporters moving &gt;$10k/month across borders, looking to reduce FX costs by 50-80%.
                                </p>
                            </div>

                            <Link href="/contact" className="group inline-flex items-center gap-3 font-sans text-[14px] font-bold text-basquiat-blue hover:text-basquiat-gold transition-colors uppercase tracking-widest">
                                <span className="border-b-2 border-transparent group-hover:border-basquiat-gold transition-all duration-300">Get a Free Analysis</span>
                                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </FadeUp>
                    </div>
                </div>
            </section>

            {/* Capital Market Advisory */}
            <section id="advisory" className="py-12 md:py-20 bg-gray-50 border-y border-gray-200">
                <div className="max-w-7xl mx-auto px-6 lg:px-12 grid md:grid-cols-2 gap-8 md:gap-16 items-center">
                    <div className="order-2 md:order-1">
                        <SlideLeft delay={0}>
                            <div className="w-12 h-1 bg-basquiat-gold mb-8" />
                        </SlideLeft>
                        <SlideLeft delay={100}>
                            <h2 className="font-serif text-[42px] font-light text-basquiat-black mb-6 tracking-tight">Capital Market Advisory</h2>
                        </SlideLeft>
                        <FadeUp delay={200}>
                            <p className="font-sans text-[15px] text-gray-600 mb-6 leading-[1.8] font-light">
                                Companies across Sub-Saharan Africa are building at scale but lack access to institutional capital. Banks are slow. Local markets are shallow. Cross-border capital formation is complex.
                            </p>
                            <p className="font-sans text-[15px] text-gray-600 mb-10 leading-[1.8] font-light">
                                We bridge that gap. We conduct independent research on your company: financials, management, market position, and growth trajectory. We facilitate introductions to the appropriate institutional capital partners.
                            </p>
                        </FadeUp>

                        {/* Qualifier Block */}
                        <FadeUp delay={300}>
                            <div className="bg-white p-8 rounded-sm border-l-4 border-basquiat-blue mb-10 shadow-sm">
                                <h4 className="font-sans text-[12px] font-bold text-basquiat-black uppercase tracking-widest mb-3">Who This Is For</h4>
                                <p className="font-sans text-[14px] text-gray-600 leading-relaxed">
                                    High-growth companies in SSA seeking Series A+ equity or debt financing from global institutional investors.
                                </p>
                            </div>
                        </FadeUp>

                        <FadeUp delay={400}>
                            <ul className="space-y-6 mb-10">
                                {["Independent Research & Profiling", "Institutional Capital Introductions", "Strategic Growth Advisory"].map((item, i) => (
                                    <li key={i} className="flex items-center gap-4 py-3 border-b border-gray-200">
                                        <CheckCircle2 className="w-5 h-5 text-basquiat-gold shrink-0" />
                                        <span className="text-gray-800 font-sans text-[15px] tracking-wide">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </FadeUp>
                    </div>
                    <ScaleIn delay={200}>
                        <div className="order-1 md:order-2 relative h-[300px] md:h-[600px] w-full bg-gray-100 rounded-sm overflow-hidden shadow-2xl">
                            <Image src="/images/blue_suit.png" alt="Advisory" fill className="object-cover hover:scale-105 transition-transform duration-700" />
                        </div>
                    </ScaleIn>
                </div>
            </section>

            {/* Institutional Hedge Fund */}
            <section id="hedge-fund" className="py-12 md:py-20 bg-basquiat-black text-white relative">
                <div className="absolute inset-0 bg-[url('/images/wall_st.png')] bg-cover bg-center opacity-10 mix-blend-overlay pointer-events-none" />
                <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
                    <div className="grid md:grid-cols-2 gap-16 items-start">
                        <div className="md:sticky md:top-32">
                            <SlideLeft delay={0}>
                                <div className="w-12 h-1 bg-basquiat-gold mb-8" />
                            </SlideLeft>
                            <SlideLeft delay={100}>
                                <h2 className="font-serif text-[42px] md:text-[64px] font-light text-white mb-6 tracking-tighter leading-none">
                                    Institutional <br /><span className="text-gray-500">Hedge Fund</span>
                                </h2>
                            </SlideLeft>
                            <FadeUp delay={200}>
                                <p className="font-serif text-[20px] font-light text-gray-400 mb-10 leading-relaxed max-w-md">
                                    For Corporate Treasuries, Family Offices, and Investment Funds.
                                </p>

                                <div className="p-8 border-l-2 border-basquiat-gold bg-white/5 backdrop-blur-sm mb-8">
                                    <h3 className="font-serif text-2xl font-bold text-basquiat-gold mb-3 tracking-wide">Alpha-Focused Strategy</h3>
                                    <p className="font-sans text-gray-300 leading-[1.8] font-light text-[15px]">
                                        The S&P 500 averages 10% yearly returns. We deploy capital using strategies to capture outsized returns in U.S and International Small, Mid and Large Cap Equities.
                                    </p>
                                </div>

                                {/* Qualifier Block */}
                                <div className="bg-basquiat-blue/20 p-6 rounded-sm border border-basquiat-blue/30">
                                    <h4 className="font-sans text-[11px] font-bold text-basquiat-gold uppercase tracking-widest mb-3">Who This Is For</h4>
                                    <p className="font-sans text-[13px] text-gray-300 leading-relaxed">
                                        Entities with &gt;$1M USD in liquid capital seeking actively managed, high-alpha US equity exposure outside traditional passive indices.
                                    </p>
                                </div>
                            </FadeUp>
                        </div>

                        <div className="space-y-12">
                            <FadeUp delay={300}>
                                <div className="space-y-0 divide-y divide-gray-800 border-t border-b border-gray-800">
                                    {[
                                        { label: "Structure", value: "Discretionary Separately Managed Account (SMA)." },
                                        { label: "Minimum Mandate", value: "$1,000,000 USD" },
                                        { label: "The Offering", value: "A bespoke US Equity strategy tailored to your Investment Policy Statement (IPS)." },
                                        { label: "Execution", value: "Full discretionary authority via Institutional Broker platform." },
                                        { label: "Risk Management", value: "Custom drawdown limits and sector exposure caps tailored to risk tolerance." },
                                        {
                                            label: "Fees",
                                            value: <>2% Management / 20% Performance <br /><span className="text-sm text-gray-500 mt-1">(High Water Mark applied)</span></>
                                        }
                                    ].map((item, i) => (
                                        <div key={i} className="py-8 grid sm:grid-cols-3 gap-6">
                                            <h4 className="font-sans text-[11px] font-bold text-basquiat-gold uppercase tracking-widest sm:col-span-1 pt-1">{item.label}</h4>
                                            <div className="sm:col-span-2">
                                                <p className="font-light text-white/90 font-serif text-[18px] leading-relaxed">{item.value}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </FadeUp>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-12 md:py-24 bg-[#0D1929] text-white text-center relative overflow-hidden">
                <div className="absolute inset-0 bg-basquiat-gold/5 opacity-50 pointer-events-none" />
                {/* Parallax-like Background */}
                <div className="absolute inset-0 z-0 opacity-10">
                    <Image
                        src="/images/secondary_bg.jpg"
                        alt="CTA Background"
                        fill
                        className="object-cover"
                    />
                </div>

                <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
                    <SlideLeft delay={0}>
                        <h2 className="font-serif text-[42px] md:text-6xl font-light mb-6 tracking-tighter">Partner With Us</h2>
                    </SlideLeft>
                    <FadeUp delay={100}>
                        <p className="font-serif text-lg md:text-2xl mb-12 max-w-2xl mx-auto font-medium leading-relaxed font-light text-white/80">
                            Capital. Efficiency. Growth.<br />
                            <span className="opacity-70 font-normal text-base md:text-lg font-sans mt-2 block">We have the expertise to execute.</span>
                        </p>
                    </FadeUp>
                    <FadeUp delay={200}>
                        <Link
                            href="/contact"
                            className="inline-flex items-center gap-3 px-10 py-5 border border-basquiat-blue text-basquiat-blue font-medium text-[13px] uppercase tracking-widest hover:bg-basquiat-blue hover:text-white transition-all duration-300 shadow-lg bg-white/5 backdrop-blur-sm"
                        >
                            Start the Conversation <ArrowRight className="w-5 h-5" />
                        </Link>
                    </FadeUp>
                </div>
            </section>
        </main>
    );
}
