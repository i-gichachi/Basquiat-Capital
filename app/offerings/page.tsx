import Image from "next/image";
import Link from "next/link";
import { ScrollReveal } from "@/components/ScrollReveal";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export default function OfferingsPage() {
    return (
        <main className="flex flex-col min-h-screen bg-basquiat-white text-basquiat-black pt-20">
            {/* Header */}
            <section className="bg-basquiat-blue text-white py-20 md:py-32 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-1/3 h-full bg-basquiat-gold/5 skew-x-12 transform origin-top-right" />
                <div className="container mx-auto px-6 text-center relative z-10">
                    <ScrollReveal>
                        <h1 className="text-4xl md:text-7xl font-bold mb-6 tracking-tighter">Our Mandates</h1>
                        <p className="text-lg md:text-2xl font-light text-gray-200 max-w-3xl mx-auto leading-relaxed tracking-wide">
                            Tailored solutions for growth, capital efficiency, and wealth preservation.
                        </p>
                    </ScrollReveal>
                </div>
            </section>

            {/* Capital Market Advisory */}
            <section id="advisory" className="py-20 md:py-32">
                <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 md:gap-20 items-center">
                    <div className="order-2 md:order-1">
                        <ScrollReveal>
                            <div className="w-12 h-1 bg-basquiat-gold mb-8" />
                            <h2 className="text-3xl md:text-5xl font-bold text-basquiat-blue mb-6 tracking-tight">Capital Market Advisory</h2>
                            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                                Companies across Sub-Saharan Africa are building at scale but lack access to institutional capital. Banks are slow. Local markets are shallow. Cross-border capital formation is complex.
                            </p>
                            <p className="text-lg text-gray-600 mb-10 leading-relaxed">
                                We bridge that gap. We conduct independent research on your company: financials, management, market position, and growth trajectory. We facilitate introductions to the appropriate institutional capital partners.
                            </p>
                            <ul className="space-y-6 mb-10">
                                {["Independent Research & Profiling", "Institutional Capital Introductions", "Strategic Growth Advisory"].map((item, i) => (
                                    <li key={i} className="flex items-center gap-4 py-3 border-b border-gray-100">
                                        <CheckCircle2 className="w-6 h-6 text-basquiat-gold shrink-0" />
                                        <span className="text-gray-800 font-medium text-lg tracking-wide">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </ScrollReveal>
                    </div>
                    <div className="order-1 md:order-2 relative h-[300px] md:h-[600px] w-full bg-gray-100 rounded-sm overflow-hidden shadow-2xl">
                        <Image src="/images/blue_suit.png" alt="Advisory" fill className="object-cover hover:scale-105 transition-transform duration-700" />
                    </div>
                </div>
            </section>

            {/* Commercial FX */}
            <section id="fx" className="py-20 md:py-32 bg-gray-50 border-y border-gray-200">
                <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 md:gap-20 items-center">
                    <div className="relative h-[300px] md:h-[600px] w-full bg-gray-200 rounded-sm overflow-hidden shadow-2xl">
                        <Image src="/images/forex_phone.png" alt="Foreign Exchange" fill className="object-cover hover:scale-105 transition-transform duration-700" />
                    </div>
                    <div>
                        <ScrollReveal>
                            <div className="w-12 h-1 bg-basquiat-gold mb-8" />
                            <h2 className="text-3xl md:text-5xl font-bold text-basquiat-blue mb-6 tracking-tight">Commercial FX</h2>
                            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                                Every multinational, exporter, and NGO operating across Africa converts currency. Most are still doing it through their bank, paying 3-5% spreads on every transaction.
                            </p>
                            <p className="text-lg text-gray-600 mb-10 leading-relaxed">
                                We fix that. We analyze your current cross-border payment flows, currencies, volumes, and what you're paying in bank spreads. We work with FCA-regulated commercial FX providers to help your organization save and scale.
                            </p>
                            <Link href="/contact" className="group inline-flex items-center gap-3 text-lg font-bold text-basquiat-blue hover:text-basquiat-gold transition-colors">
                                <span className="border-b-2 border-transparent group-hover:border-basquiat-gold transition-all duration-300">Get a Free Analysis</span>
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </ScrollReveal>
                    </div>
                </div>
            </section>

            {/* Institutional Hedge Fund */}
            <section id="hedge-fund" className="py-20 md:py-32 bg-basquiat-black text-white relative">
                {/* Subtle background texture or gradient can be added here if needed */}
                <div className="container mx-auto px-6">
                    <div className="grid md:grid-cols-2 gap-16 items-start">
                        <div className="md:sticky md:top-32">
                            <ScrollReveal>
                                <h2 className="text-3xl md:text-6xl font-bold text-white mb-6 tracking-tighter">Institutional <br /><span className="text-gray-500">Hedge Fund</span></h2>
                                <p className="text-xl md:text-2xl font-light text-gray-400 mb-10 leading-relaxed max-w-md">
                                    For Corporate Treasuries, Family Offices, and Investment Funds.
                                </p>
                                <div className="p-8 border-l-2 border-basquiat-gold bg-white/5 backdrop-blur-sm">
                                    <h3 className="text-2xl font-bold text-basquiat-gold mb-3 tracking-wide">Alpha-Focused Strategy</h3>
                                    <p className="text-gray-300 leading-relaxed font-light text-lg">
                                        The S&P 500 averages 10% yearly returns. We deploy capital using strategies to capture outsized returns in U.S and International Small, Mid and Large Cap Equities.
                                    </p>
                                </div>
                            </ScrollReveal>
                        </div>

                        <div className="space-y-12">
                            <div className="relative h-[250px] md:h-[400px] w-full bg-gray-800 rounded-sm overflow-hidden shadow-2xl border border-gray-800/50">
                                <Image src="/images/wall_st.png" alt="Institutional Hedge Fund" fill className="object-cover" />
                            </div>

                            <ScrollReveal delay={0.2}>
                                <div className="space-y-0 divide-y divide-gray-800 border-t border-b border-gray-800">
                                    <div className="py-8 grid sm:grid-cols-3 gap-6">
                                        <h4 className="text-xs font-bold text-basquiat-gold uppercase tracking-widest sm:col-span-1 pt-1">Structure</h4>
                                        <div className="sm:col-span-2">
                                            <p className="text-xl text-white font-light">Discretionary Separately Managed Account (SMA).</p>
                                        </div>
                                    </div>

                                    <div className="py-8 grid sm:grid-cols-3 gap-6">
                                        <h4 className="text-xs font-bold text-basquiat-gold uppercase tracking-widest sm:col-span-1 pt-1">Minimum Mandate</h4>
                                        <div className="sm:col-span-2">
                                            <p className="text-xl text-white font-light">$1,000,000 USD</p>
                                        </div>
                                    </div>

                                    <div className="py-8 grid sm:grid-cols-3 gap-6">
                                        <h4 className="text-xs font-bold text-basquiat-gold uppercase tracking-widest sm:col-span-1 pt-1">The Offering</h4>
                                        <div className="sm:col-span-2">
                                            <p className="text-lg text-gray-300 font-light leading-relaxed">A bespoke US Equity strategy tailored to your Investment Policy Statement (IPS).</p>
                                        </div>
                                    </div>

                                    <div className="py-8 grid sm:grid-cols-3 gap-6">
                                        <h4 className="text-xs font-bold text-basquiat-gold uppercase tracking-widest sm:col-span-1 pt-1">Execution</h4>
                                        <div className="sm:col-span-2">
                                            <p className="text-lg text-gray-300 font-light">Full discretionary authority via Institutional Broker platform.</p>
                                        </div>
                                    </div>

                                    <div className="py-8 grid sm:grid-cols-3 gap-6">
                                        <h4 className="text-xs font-bold text-basquiat-gold uppercase tracking-widest sm:col-span-1 pt-1">Risk Management</h4>
                                        <div className="sm:col-span-2">
                                            <p className="text-lg text-gray-300 font-light leading-relaxed">Custom drawdown limits and sector exposure caps tailored to risk tolerance.</p>
                                        </div>
                                    </div>

                                    <div className="py-8 grid sm:grid-cols-3 gap-6">
                                        <h4 className="text-xs font-bold text-basquiat-gold uppercase tracking-widest sm:col-span-1 pt-1">Fees</h4>
                                        <div className="sm:col-span-2">
                                            <p className="text-xl text-white font-light">2% Management / 20% Performance</p>
                                            <p className="text-sm text-gray-500 mt-1">(High Water Mark applied)</p>
                                        </div>
                                    </div>
                                </div>
                            </ScrollReveal>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-20 md:py-32 bg-basquiat-gold text-basquiat-black text-center relative overflow-hidden">
                <div className="absolute inset-0 bg-white/10 opacity-50 pointer-events-none" />
                <div className="container mx-auto px-6 relative z-10">
                    <ScrollReveal>
                        <h2 className="text-4xl md:text-6xl font-bold mb-6 tracking-tighter">Partner With Us</h2>
                        <p className="text-lg md:text-2xl mb-12 max-w-2xl mx-auto font-medium leading-relaxed">
                            Capital. Efficiency. Growth.<br />
                            <span className="opacity-70 font-normal text-base md:text-lg">We have the expertise to execute.</span>
                        </p>
                        <Link
                            href="/contact"
                            className="inline-flex items-center gap-3 px-10 py-5 bg-basquiat-black text-white font-bold text-lg hover:bg-basquiat-blue transition-all duration-300 shadow-xl hover:shadow-2xl"
                        >
                            Start the Conversation <ArrowRight className="w-5 h-5" />
                        </Link>
                    </ScrollReveal>
                </div>
            </section>
        </main>
    );
}
