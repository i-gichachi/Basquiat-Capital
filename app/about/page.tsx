import Link from "next/link";
import Image from "next/image";
import { ScrollReveal } from "@/components/ScrollReveal";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export default function AboutPage() {
    return (
        <main className="flex flex-col min-h-screen bg-basquiat-white text-basquiat-black pt-20">
            {/* Hero Section */}
            <section className="relative h-[60vh] md:h-[70vh] flex items-center justify-center overflow-hidden bg-basquiat-blue">
                <div className="absolute inset-0 z-0 opacity-20">
                    <Image
                        src="/images/hero_bg.jpg" // Using existing asset as placeholder/texture
                        alt="Background Texture"
                        fill
                        className="object-cover object-center grayscale"
                        priority
                    />
                    <div className="absolute inset-0 bg-basquiat-blue mix-blend-multiply" />
                </div>

                <div className="container mx-auto px-6 relative z-10 text-center text-white">
                    <ScrollReveal>
                        <h1 className="text-4xl md:text-7xl font-bold mb-6 tracking-tight">
                            About <span className="text-basquiat-gold">Basquiat Capital</span>
                        </h1>
                        <div className="w-24 h-1 bg-basquiat-gold mx-auto mb-8" />
                        <p className="text-lg md:text-2xl font-light text-gray-200 max-w-3xl mx-auto leading-relaxed">
                            Bridging the gap between global capital and African opportunity.
                        </p>
                    </ScrollReveal>
                </div>
            </section>

            {/* Who We Are Section */}
            <section className="py-16 md:py-24 bg-white">
                <div className="container mx-auto px-6">
                    <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
                        {/* Right Column (Mobile: Order 1) - Visual/Impact */}
                        <div className="lg:order-2 relative">
                            <div className="relative h-[400px] md:h-[500px] bg-gray-100 p-8 flex items-center justify-center overflow-hidden">
                                {/* Decorative elements mimicking a sophisticated report or abstract concept */}
                                <div className="absolute top-0 right-0 w-32 h-32 bg-basquiat-gold/10 rounded-bl-full" />
                                <div className="absolute bottom-0 left-0 w-32 h-32 bg-basquiat-blue/5 rounded-tr-full" />

                                <div className="text-center z-10">
                                    <h3 className="text-5xl md:text-7xl font-bold text-basquiat-blue/20 tracking-widest">STRATEGY</h3>
                                    <h3 className="text-5xl md:text-7xl font-bold text-basquiat-gold/30 -mt-6 md:-mt-8 tracking-widest">EXECUTION</h3>
                                </div>
                                <div className="absolute inset-0 border-2 border-basquiat-gold/20 m-4" />
                            </div>
                        </div>

                        {/* Left Column (Mobile: Order 2) - Text Content */}
                        <div className="lg:order-1 flex flex-col justify-center">
                            <ScrollReveal>
                                <h2 className="text-sm md:text-base font-bold text-basquiat-gold uppercase tracking-widest mb-3">
                                    Who We Are
                                </h2>
                                <h3 className="text-3xl md:text-4xl font-bold text-basquiat-blue mb-8 leading-tight">
                                    A Bridge for Capital <br className="hidden md:block" /> in Emerging Markets.
                                </h3>

                                <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
                                    <p>
                                        Basquiat Capital is a US-domiciled Limited Liability Company (LLC) with primary operations in Nairobi, Kenya. We serve clients and partners across East Africa, the UK, and the United States.
                                    </p>
                                    <p>
                                        Our mission is to facilitate seamless capital flow and structured financial solutions in markets that are often overlooked but ripe with potential.
                                    </p>
                                </div>

                                <div className="mt-10 p-6 bg-basquiat-blue/5 border-l-4 border-basquiat-gold">
                                    <h4 className="text-xl font-bold text-basquiat-blue mb-2">Our Role</h4>
                                    <p className="text-gray-700 italic">
                                        <span className="font-bold text-basquiat-blue not-italic">We are not a bank.</span> We are a business development consulting firm. We identify, vet, and profile high-potential companies to provide actionable market intelligence to our institutional partners.
                                    </p>
                                </div>
                            </ScrollReveal>
                        </div>
                    </div>
                </div>
            </section>

            {/* Philosophy Section */}
            <section className="py-16 md:py-24 bg-basquiat-blue text-white">
                <div className="container mx-auto px-6">
                    <ScrollReveal>
                        <div className="max-w-4xl mx-auto text-center">
                            <h2 className="text-3xl md:text-4xl font-bold mb-12">Our Philosophy</h2>

                            <div className="grid md:grid-cols-2 gap-8 text-center items-center">
                                <div className="bg-white/5 p-8 border border-white/10 hover:bg-white/10 transition-colors duration-300 flex flex-col items-center">
                                    <CheckCircle2 className="w-10 h-10 text-basquiat-gold mb-6 mx-auto" />
                                    <h3 className="text-xl font-bold mb-4">Strategic Partnerships</h3>
                                    <p className="text-gray-300 leading-relaxed">
                                        We operate through a network of strategic partners in East and Sub-Saharan Africa's private sector, institutional relationships with global financial services firms, and on-the-ground presence across key markets.
                                    </p>
                                </div>

                                <div className="bg-white/5 p-8 border border-white/10 hover:bg-white/10 transition-colors duration-300 flex flex-col items-center">
                                    <CheckCircle2 className="w-10 h-10 text-basquiat-gold mb-6 mx-auto" />
                                    <h3 className="text-xl font-bold mb-4">Deliberately Lean</h3>
                                    <p className="text-gray-300 leading-relaxed">
                                        We are deliberately lean. Every person in our network is there because they add direct value to the opportunities we pursue. Efficiency and agility are at our core.
                                    </p>
                                </div>
                            </div>

                        </div>
                    </ScrollReveal>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 md:py-32 bg-basquiat-white text-center">
                <div className="container mx-auto px-6">
                    <ScrollReveal>
                        <h2 className="text-3xl md:text-5xl font-bold text-basquiat-blue mb-6">Ready to move first?</h2>
                        <p className="text-lg md:text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
                            Connect with us to explore how we can support your capital or investment objectives.
                        </p>
                        <Link
                            href="/contact"
                            className="inline-flex items-center gap-3 px-8 py-4 bg-basquiat-gold text-basquiat-black font-bold text-lg hover:bg-basquiat-blue hover:text-white transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                        >
                            Contact Us <ArrowRight className="w-5 h-5" />
                        </Link>
                    </ScrollReveal>
                </div>
            </section>
        </main>
    );
}
