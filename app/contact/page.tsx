"use client";

import { FadeUp, SlideLeft, ScaleIn, GoldLine, Cascade } from "@/components/Animate";
import { Mail, MapPin, ArrowRight, Video } from "lucide-react";
import { useState } from "react";

export default function ContactPage() {
    const [formState, setFormState] = useState({
        name: "",
        email: "",
        interest: "Capital Market Advisory",
        message: ""
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormState({
            ...formState,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle form submission logic here
        console.log("Form submitted:", formState);
    };

    return (
        <main className="flex flex-col min-h-screen bg-basquiat-white text-basquiat-black pt-20">
            {/* Hero Section */}
            <section className="relative bg-basquiat-blue text-white py-12 md:py-24 overflow-hidden">
                <div className="absolute inset-0 z-0 opacity-20">
                    <div className="absolute -top-24 -right-24 w-96 h-96 bg-basquiat-gold rounded-full blur-3xl opacity-50" />
                    <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
                </div>

                <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
                    <div className="max-w-4xl">
                        <SlideLeft delay={0}>
                            <h1 className="font-serif text-[42px] md:text-[80px] font-light mb-6 tracking-tight leading-[0.9]">
                                Let’s Start a <br />
                                <span className="text-basquiat-gold">Conversation.</span>
                            </h1>
                        </SlideLeft>
                        <FadeUp delay={200}>
                            <p className="font-sans text-[16px] md:text-[20px] font-light text-gray-300 max-w-2xl leading-relaxed">
                                Connect with our team to discuss capital deployment, market advisory, or institutional partnerships.
                            </p>
                        </FadeUp>
                    </div>
                </div>
            </section>

            <section className="py-0 -mt-12 md:-mt-20 relative z-20 mb-12">
                <div className="max-w-7xl mx-auto px-6 lg:px-12">
                    <FadeUp delay={400}>
                        <div className="bg-white shadow-2xl overflow-hidden flex flex-col md:flex-row border border-gray-100">
                            {/* Contact Information (Left Side) */}
                            <div className="w-full md:w-2/5 bg-basquiat-black/95 text-white p-8 md:p-12 flex flex-col justify-between relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-basquiat-gold/5 rounded-bl-full pointer-events-none" />

                                <div className="relative z-10">
                                    <h3 className="font-serif text-3xl mb-2 text-basquiat-gold">Get in Touch</h3>
                                    <p className="font-sans text-gray-400 mb-10 text-[15px]">We are ready to assist you.</p>

                                    <div className="space-y-8">
                                        <div className="flex items-start gap-5 group">
                                            <div className="p-3 bg-white/5 border border-white/10 group-hover:bg-basquiat-gold/20 group-hover:border-basquiat-gold/30 transition-all duration-300">
                                                <MapPin className="w-5 h-5 text-basquiat-gold" />
                                            </div>
                                            <div>
                                                <h4 className="font-serif text-lg mb-1">Headquarters</h4>
                                                <p className="text-gray-400 leading-relaxed font-sans text-[14px]">
                                                    30 N Gould St,<br />
                                                    Sheridan, Wyoming 82801<br />
                                                    United States
                                                </p>
                                            </div>
                                        </div>

                                        <div className="flex items-start gap-5 group">
                                            <div className="p-3 bg-white/5 border border-white/10 group-hover:bg-basquiat-gold/20 group-hover:border-basquiat-gold/30 transition-all duration-300">
                                                <Mail className="w-5 h-5 text-basquiat-gold" />
                                            </div>
                                            <div>
                                                <h4 className="font-serif text-lg mb-1">Email Us</h4>
                                                <a href="mailto:info@basquiatcapital.com" className="text-gray-400 hover:text-basquiat-gold transition-colors block font-sans text-[14px]">
                                                    info@basquiatcapital.com
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="mt-12 relative z-10">
                                    <h4 className="font-sans text-[11px] font-bold text-gray-500 uppercase tracking-widest mb-4">Direct Scheduling</h4>
                                    <a
                                        href="https://calendly.com/basquiat-capital/intro"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-3 px-6 py-3 border border-gray-600 text-white font-sans text-[13px] font-medium uppercase tracking-widest hover:bg-basquiat-gold hover:border-basquiat-gold hover:text-basquiat-black transition-all duration-300"
                                    >
                                        <Video className="w-4 h-4" />
                                        Schedule an Intro Call
                                    </a>
                                </div>
                            </div>

                            {/* Contact Form (Right Side) */}
                            <div className="w-full md:w-3/5 p-8 md:p-12 bg-white">
                                <h3 className="font-serif text-[32px] font-light text-basquiat-blue mb-8">Send a Message</h3>
                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div className="group">
                                            <label htmlFor="name" className="block text-[12px] font-bold uppercase tracking-widest text-gray-500 mb-2 transition-colors group-focus-within:text-basquiat-blue">Your Name</label>
                                            <input
                                                type="text"
                                                id="name"
                                                name="name"
                                                value={formState.name}
                                                onChange={handleChange}
                                                className="w-full pb-2 border-b border-gray-200 bg-transparent outline-none focus:border-basquiat-gold transition-all placeholder-transparent text-[16px] text-basquiat-black font-serif"
                                                placeholder="John Doe"
                                                required
                                            />
                                        </div>
                                        <div className="group">
                                            <label htmlFor="email" className="block text-[12px] font-bold uppercase tracking-widest text-gray-500 mb-2 transition-colors group-focus-within:text-basquiat-blue">Email Address</label>
                                            <input
                                                type="email"
                                                id="email"
                                                name="email"
                                                value={formState.email}
                                                onChange={handleChange}
                                                className="w-full pb-2 border-b border-gray-200 bg-transparent outline-none focus:border-basquiat-gold transition-all placeholder-transparent text-[16px] text-basquiat-black font-serif"
                                                placeholder="john@example.com"
                                                required
                                            />
                                        </div>
                                    </div>

                                    <div className="group">
                                        <label htmlFor="interest" className="block text-[12px] font-bold uppercase tracking-widest text-gray-500 mb-2 transition-colors group-focus-within:text-basquiat-blue">Area of Interest</label>
                                        <div className="relative">
                                            <select
                                                id="interest"
                                                name="interest"
                                                value={formState.interest}
                                                onChange={handleChange}
                                                className="w-full pb-2 border-b border-gray-200 bg-transparent outline-none focus:border-basquiat-gold transition-all text-[16px] text-basquiat-black appearance-none cursor-pointer font-serif"
                                            >
                                                <option>Capital Market Advisory</option>
                                                <option>Commercial FX</option>
                                                <option>Institutional Hedge Fund</option>
                                                <option>Other Inquiry</option>
                                            </select>
                                            <div className="absolute inset-y-0 right-0 flex items-center pointer-events-none mb-2">
                                                <ArrowRight className="w-4 h-4 text-gray-400 rotate-90" />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="group">
                                        <label htmlFor="message" className="block text-[12px] font-bold uppercase tracking-widest text-gray-500 mb-2 transition-colors group-focus-within:text-basquiat-blue">Message</label>
                                        <textarea
                                            id="message"
                                            name="message"
                                            rows={4}
                                            value={formState.message}
                                            onChange={handleChange}
                                            className="w-full p-4 bg-gray-50 border border-gray-200 outline-none focus:border-basquiat-gold focus:ring-1 focus:ring-basquiat-gold transition-all text-basquiat-black resize-none font-serif text-[16px]"
                                            placeholder="Tell us about your requirements..."
                                            required
                                        />
                                    </div>

                                    <button
                                        type="submit"
                                        className="w-full md:w-auto px-10 py-4 border border-basquiat-blue text-basquiat-blue font-sans text-[13px] font-bold uppercase tracking-widest hover:bg-basquiat-blue hover:text-white transition-all duration-300 flex items-center justify-center gap-3 group"
                                    >
                                        Send Message
                                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                    </button>
                                    <p className="text-xs text-gray-400 font-light italic mt-4 text-center md:text-left">
                                        We typically respond to new partner inquiries within 24 hours.
                                    </p>
                                </form>
                            </div>
                        </div>
                    </FadeUp>
                </div>
            </section>
        </main>
    );
}
