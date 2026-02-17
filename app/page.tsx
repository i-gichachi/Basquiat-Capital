import Image from "next/image";
import Link from "next/link";
import { ArrowRight, TrendingUp, Globe, Briefcase } from "lucide-react";
import { ScrollReveal } from "@/components/ScrollReveal";
import { ScrollIndicator } from "@/components/ScrollIndicator";

export default function Home() {
    return (
        <main className="flex flex-col min-h-screen bg-basquiat-white text-basquiat-black">
            {/* Hero Section */}
            <section className="relative h-screen flex items-center justify-center overflow-hidden bg-basquiat-blue text-white pt-20">
                {/* Background Image with Overlay */}
                <div className="absolute inset-0 z-0 opacity-30">
                    <Image
                        src="/images/hero_bg.jpg"
                        alt="Cityscape"
                        fill
                        className="object-cover object-center"
                        priority
                    />
                    <div className="absolute inset-0 bg-basquiat-blue/90 mix-blend-multiply" />
                    <div className="absolute inset-0 bg-black/40" />
                </div>

                {/* Hero Content */}
                <div className="relative z-10 container mx-auto px-6 text-center text-white">
                    <ScrollReveal width="100%">
                        <h1 className="text-4xl md:text-7xl font-bold tracking-tight mb-4 md:mb-6 leading-tight">
                            Capital Moves. <br />
                            <span className="text-basquiat-gold">We Move First.</span>
                        </h1>
                    </ScrollReveal>

                    <ScrollReveal width="100%" delay={0.4}>
                        <p className="text-lg md:text-2xl font-light max-w-2xl mx-auto mb-8 md:mb-10 text-gray-200">
                            Built For The Opportunities Others Overlook.
                        </p>
                    </ScrollReveal>

                    <ScrollReveal width="100%" delay={0.6}>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link
                                href="/offerings"
                                className="px-6 py-3 md:px-8 md:py-4 bg-basquiat-gold text-basquiat-black font-semibold text-base md:text-lg hover:bg-yellow-400 transition-colors duration-300 rounded-none flex items-center justify-center gap-2"
                            >
                                See What We Do
                                <ArrowRight className="w-5 h-5" />
                            </Link>
                        </div>
                    </ScrollReveal>
                </div>

                {/* Scroll Indicator */}
                <ScrollIndicator />
            </section>

            {/* Philosophy Section */}
            <section className="py-16 md:py-24 bg-basquiat-white">
                <div className="container mx-auto px-6">
                    <div className="max-w-4xl mx-auto text-center">
                        <ScrollReveal>
                            <h2 className="text-2xl md:text-5xl font-bold text-basquiat-blue mb-6 md:mb-8 leading-tight">
                                Built For The Opportunities Others Overlook.
                            </h2>
                        </ScrollReveal>
                        <ScrollReveal delay={0.2}>
                            <p className="text-base md:text-lg text-gray-600 leading-relaxed">
                                We work where growth meets friction: emerging economies with massive upside and limited infrastructure to capture it. We operate three practices:
                            </p>
                        </ScrollReveal>
                    </div>
                </div>
            </section>

            {/* Strategies Section */}
            <section className="py-0 bg-white">

                {/* Strategy 1: Alpha-Focused */}
                <div className="grid md:grid-cols-2">
                    <div className="relative h-[300px] md:h-[600px] bg-gray-200">
                        <Image
                            src="/images/wall_st.png"
                            alt="Wall Street Sign"
                            fill
                            className="object-cover"
                        />
                    </div>
                    <div className="flex flex-col justify-center p-8 md:p-24 bg-white">
                        <ScrollReveal>
                            <div className="w-16 h-1 bg-basquiat-gold mb-6" />
                            <h3 className="text-2xl md:text-4xl font-bold text-basquiat-black mb-4 md:mb-6">
                                Alpha-Focused Hedge Fund
                            </h3>
                            <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-6 md:mb-8">
                                The S&P 500 averages 10% yearly returns. We deploy capital using strategies to capture outsized returns in U.S and International Small, Mid and Large Cap Equities.
                            </p>
                            <Link href="/offerings#hedge-fund" className="text-basquiat-blue font-bold hover:text-basquiat-gold transition-colors inline-flex items-center gap-2 text-base md:text-lg">
                                Learn more <ArrowRight className="w-5 h-5" />
                            </Link>
                        </ScrollReveal>
                    </div>
                </div>

                {/* Strategy 2: Capital Market Advisory */}
                <div className="grid md:grid-cols-2">
                    {/* Mobile: Image First (Order 1), Text Second (Order 2) */}
                    {/* Desktop: Text First (Order 1), Image Second (Order 2) */}
                    <div className="relative h-[300px] md:h-[600px] bg-gray-200 md:order-2">
                        <Image
                            src="/images/blue_suit.png"
                            alt="Capital Market Advisory"
                            fill
                            className="object-cover"
                        />
                    </div>
                    <div className="flex flex-col justify-center p-8 md:p-24 bg-basquiat-white md:order-1">
                        <ScrollReveal>
                            <div className="w-16 h-1 bg-basquiat-gold mb-6" />
                            <h3 className="text-2xl md:text-4xl font-bold text-basquiat-black mb-4 md:mb-6">
                                Capital Market Advisory
                            </h3>
                            <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-4">
                                Companies across Sub-Saharan Africa are building at scale but lack access to institutional capital. Banks are slow. Local markets are shallow.
                            </p>
                            <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-6 md:mb-8">
                                Cross-border capital formation is complex. We bridge that gap.
                            </p>
                            <Link href="/offerings#advisory" className="text-basquiat-blue font-bold hover:text-basquiat-gold transition-colors inline-flex items-center gap-2 text-base md:text-lg">
                                Learn more <ArrowRight className="w-5 h-5" />
                            </Link>
                        </ScrollReveal>
                    </div>
                </div>

                {/* Strategy 3: Foreign Exchange */}
                <div className="grid md:grid-cols-2">
                    <div className="relative h-[300px] md:h-[600px] bg-gray-200">
                        <Image
                            src="/images/forex_phone.png"
                            alt="Foreign Exchange"
                            fill
                            className="object-cover"
                        />
                    </div>
                    <div className="flex flex-col justify-center p-8 md:p-24 bg-white">
                        <ScrollReveal>
                            <div className="w-16 h-1 bg-basquiat-gold mb-6" />
                            <h3 className="text-2xl md:text-4xl font-bold text-basquiat-black mb-4 md:mb-6">
                                Commercial Market Foreign Exchange
                            </h3>
                            <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-4">
                                Every multinational, exporter, and NGO operating across Africa converts currency. Most are still doing it through their bank, paying 3-5% spreads on every transaction.
                            </p>
                            <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-6 md:mb-8">
                                That margin erosion compounds into millions lost annually. We fix that.
                            </p>
                            <Link href="/offerings#fx" className="text-basquiat-blue font-bold hover:text-basquiat-gold transition-colors inline-flex items-center gap-2 text-base md:text-lg">
                                Learn more <ArrowRight className="w-5 h-5" />
                            </Link>
                        </ScrollReveal>
                    </div>
                </div>


            </section>

            {/* Network Section */}
            <section className="py-16 md:py-24 bg-basquiat-white">
                <div className="container mx-auto px-6">
                    <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-center">
                        <div className="relative h-[300px] md:h-[500px] w-full">
                            <Image
                                src="/images/secondary_bg.jpg"
                                alt="Our Network"
                                fill
                                className="object-cover shadow-2xl"
                            />
                        </div>
                        <div>
                            <ScrollReveal>
                                <h2 className="text-3xl md:text-4xl font-bold text-basquiat-black mb-4 md:mb-6">Our Network</h2>
                                <p className="text-base md:text-lg text-gray-600 leading-relaxed mb-4 md:mb-6">
                                    Basquiat Capital operates through a network of strategic partners in East and Sub-Saharan Africa's private sector, institutional relationships with global financial services firms, and on-the-ground presence across key markets.
                                </p>
                                <p className="text-base md:text-lg text-gray-600 leading-relaxed mb-8 md:mb-10">
                                    We are deliberately lean. Every person in our network is there because they add direct value to the opportunities we pursue.
                                </p>
                                <Link
                                    href="/offerings"
                                    className="px-6 py-3 md:px-8 md:py-4 bg-basquiat-gold text-basquiat-black font-semibold text-base md:text-lg hover:bg-yellow-400 transition-colors duration-300 rounded-none inline-block"
                                >
                                    View Our Mandates
                                </Link>
                            </ScrollReveal>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section with Parallax Background */}
            <section className="relative py-24 md:py-32 flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/images/secondary_bg.jpg"
                        alt="Office Meeting"
                        fill
                        className="object-cover object-center"
                    />
                    <div className="absolute inset-0 bg-basquiat-blue/90" />
                </div>

                <div className="relative z-10 container mx-auto px-6 text-center text-white">
                    <ScrollReveal>
                        <h2 className="text-3xl md:text-5xl font-bold mb-4 md:mb-6">Market Insights</h2>
                        <p className="text-lg md:text-xl max-w-2xl mx-auto mb-8 md:mb-10 text-gray-200">
                            Want to stay informed on the latest market trends and strategies? Visit our blog for expert advice and actionable tips.
                        </p>
                        <Link
                            href="/blog"
                            className="px-8 py-4 md:px-10 md:py-5 bg-white text-basquiat-blue font-bold text-base md:text-lg hover:bg-basquiat-gold hover:text-basquiat-black transition-all duration-300 inline-block"
                        >
                            Read Our Insights
                        </Link>
                    </ScrollReveal>
                </div>
            </section>
        </main>
    );
}
