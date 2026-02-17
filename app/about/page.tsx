import Link from "next/link";
import Image from "next/image";
import { FadeUp, SlideLeft, ScaleIn, GoldLine, Cascade } from "@/components/Animate";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export default function AboutPage() {
    return (
        <main className="flex flex-col min-h-screen bg-basquiat-white text-basquiat-black pt-20">
            {/* Hero Section */}
            <section className="relative h-[60vh] md:h-[70vh] flex items-center justify-center overflow-hidden bg-basquiat-blue">
                <div className="absolute inset-0 z-0 opacity-20">
                    <Image
                        src="/images/hero_bg.jpg"
                        alt="Background Texture"
                        fill
                        className="object-cover object-center grayscale"
                        priority
                    />
                    <div className="absolute inset-0 bg-basquiat-blue mix-blend-multiply" />
                </div>

                <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10 text-center text-white">
                    <SlideLeft delay={0}>
                        <h1 className="font-serif text-[42px] md:text-[80px] font-light mb-6 tracking-tight leading-[0.9]">
                            About <span className="text-basquiat-gold">Basquiat Capital</span>
                        </h1>
                    </SlideLeft>

                    <GoldLine delay={150} centered={true} />

                    <FadeUp delay={300}>
                        <p className="font-sans text-[16px] md:text-[20px] font-light text-gray-200 max-w-3xl mx-auto leading-relaxed mt-8">
                            Bridging the gap between global capital and African opportunity.
                        </p>
                    </FadeUp>
                </div>
            </section>

            {/* Who We Are Section */}
            <section className="py-12 md:py-20 bg-white">
                <div className="max-w-7xl mx-auto px-6 lg:px-12">
                    <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-start">
                        {/* Right Column (Mobile: Order 1) - Visual/Impact */}
                        <div className="lg:order-2 relative">
                            <ScaleIn delay={200}>
                                <div className="relative h-[400px] md:h-[500px] bg-gray-100 p-8 flex items-center justify-center overflow-hidden">
                                    {/* Decorative elements */}
                                    <div className="absolute top-0 right-0 w-32 h-32 bg-basquiat-gold/10 rounded-bl-full" />
                                    <div className="absolute bottom-0 left-0 w-32 h-32 bg-basquiat-blue/5 rounded-tr-full" />

                                    <div className="text-center z-10">
                                        <h3 className="font-serif text-5xl md:text-7xl font-light text-basquiat-blue/20 tracking-widest">STRATEGY</h3>
                                        <h3 className="font-serif text-5xl md:text-7xl font-light text-basquiat-gold/30 -mt-6 md:-mt-8 tracking-widest">EXECUTION</h3>
                                    </div>
                                    <div className="absolute inset-0 border-2 border-basquiat-gold/20 m-4" />
                                </div>
                            </ScaleIn>
                        </div>

                        {/* Left Column (Mobile: Order 2) - Text Content */}
                        <div className="lg:order-1 flex flex-col justify-center">
                            <SlideLeft delay={0}>
                                <span className="font-sans text-[11px] uppercase tracking-widest text-basquiat-gold mb-4 block">
                                    Who We Are
                                </span>
                            </SlideLeft>
                            <SlideLeft delay={100}>
                                <h3 className="font-serif text-[42px] leading-tight text-basquiat-blue mb-8">
                                    A Bridge for Capital <br className="hidden md:block" /> in Emerging Markets.
                                </h3>
                            </SlideLeft>

                            <FadeUp delay={200}>
                                <div className="space-y-4 text-gray-600 text-[15px] leading-relaxed font-sans">
                                    <p>
                                        Basquiat Capital is a US-domiciled Limited Liability Company (LLC) with primary operations in Nairobi, Kenya. We serve clients and partners across East Africa, the UK, and the United States.
                                    </p>
                                    <p>
                                        Our mission is to facilitate seamless capital flow and structured financial solutions in markets that are often overlooked but ripe with potential.
                                    </p>
                                </div>
                            </FadeUp>

                            <FadeUp delay={300}>
                                <div className="mt-8 p-6 bg-basquiat-blue/5 border-l-2 border-basquiat-gold">
                                    <h4 className="font-serif text-xl font-medium text-basquiat-blue mb-2">Our Role</h4>
                                    <p className="text-gray-700 italic font-sans text-[15px]">
                                        <span className="font-medium text-basquiat-blue not-italic">We are not a bank.</span> We are a business development consulting firm. We identify, vet, and profile high-potential companies to provide actionable market intelligence to our institutional partners.
                                    </p>
                                </div>
                            </FadeUp>
                        </div>
                    </div>
                </div>
            </section>

            {/* Philosophy Section */}
            <section className="py-12 md:py-20 bg-basquiat-blue text-white">
                <div className="max-w-7xl mx-auto px-6 lg:px-12">
                    <div className="max-w-4xl mx-auto text-center">
                        <SlideLeft delay={0}>
                            <h2 className="font-serif text-[42px] font-light mb-8">Our Philosophy</h2>
                        </SlideLeft>

                        <div className="grid md:grid-cols-2 gap-6 text-center items-stretch">
                            {[
                                {
                                    title: "Strategic Partnerships",
                                    desc: "We operate through a network of strategic partners in East and Sub-Saharan Africa's private sector, institutional relationships with global financial services firms, and on-the-ground presence across key markets."
                                },
                                {
                                    title: "Deliberately Lean",
                                    desc: "We are deliberately lean. Every person in our network is there because they add direct value to the opportunities we pursue. Efficiency and agility are at our core."
                                }
                            ].map((item, i) => (
                                <Cascade key={i} index={i}>
                                    <div className="
                                        group relative bg-white/5 p-8 border border-white/10  
                                        hover:bg-white/10 transition-all duration-500 overflow-hidden
                                        flex flex-col items-center h-full
                                    ">
                                        {/* Gold top-border on hover */}
                                        <div className="absolute top-0 left-0 right-0 h-[2px] bg-basquiat-gold origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />

                                        <CheckCircle2 className="w-10 h-10 text-basquiat-gold mb-6 mx-auto opacity-80 group-hover:opacity-100 transition-opacity" />
                                        <h3 className="font-serif text-2xl font-light mb-4">{item.title}</h3>
                                        <p className="text-gray-300 leading-[1.8] font-sans text-[15px]">
                                            {item.desc}
                                        </p>
                                    </div>
                                </Cascade>
                            ))}
                        </div>

                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-12 md:py-24 bg-basquiat-white text-center">
                <div className="max-w-7xl mx-auto px-6 lg:px-12">
                    <SlideLeft delay={0}>
                        <h2 className="font-serif text-[42px] md:text-[52px] font-light text-basquiat-blue mb-4">Ready to move first?</h2>
                    </SlideLeft>
                    <FadeUp delay={100}>
                        <p className="font-sans text-[16px] text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
                            Connect with us to explore how we can support your capital or investment objectives.
                        </p>
                    </FadeUp>
                    <FadeUp delay={200}>
                        <Link
                            href="/contact"
                            className="inline-flex items-center gap-3 px-8 py-4 border border-basquiat-gold text-basquiat-gold font-sans text-[13px] uppercase tracking-widest hover:bg-basquiat-gold hover:text-basquiat-black transition-all duration-300"
                        >
                            Contact Us <ArrowRight className="w-5 h-5" />
                        </Link>
                    </FadeUp>
                </div>
            </section>
        </main>
    );
}
