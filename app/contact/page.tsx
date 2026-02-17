"use client";

import { ScrollReveal } from "@/components/ScrollReveal";
import { Mail, MapPin, Phone, ArrowRight, Clock, Globe, Linkedin, Facebook, Youtube, Instagram } from "lucide-react";
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
            <section className="relative bg-basquiat-blue text-white py-24 md:py-32 overflow-hidden">
                <div className="absolute inset-0 z-0 opacity-20">
                    <div className="absolute -top-24 -right-24 w-96 h-96 bg-basquiat-gold rounded-full blur-3xl" />
                    <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
                </div>

                <div className="container mx-auto px-6 relative z-10">
                    <div className="max-w-4xl">
                        <ScrollReveal>
                            <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
                                Let’s Start a <br />
                                <span className="text-basquiat-gold">Conversation.</span>
                            </h1>
                            <p className="text-lg md:text-2xl font-light text-gray-300 max-w-2xl leading-relaxed">
                                Connect with our team to discuss capital deployment, market advisory, or institutional partnerships.
                            </p>
                        </ScrollReveal>
                    </div>
                </div>
            </section>

            <section className="py-0 -mt-16 md:-mt-24 relative z-20">
                <div className="container mx-auto px-6">
                    <div className="bg-white shadow-2xl overflow-hidden flex flex-col md:flex-row">

                        {/* Contact Information (Left Side) */}
                        <div className="w-full md:w-2/5 bg-basquiat-black text-white p-10 md:p-16 flex flex-col justify-between">
                            <div>
                                <ScrollReveal>
                                    <h3 className="text-2xl font-bold mb-2 text-basquiat-gold">Get in Touch</h3>
                                    <p className="text-gray-400 mb-10">We are ready to assist you.</p>

                                    <div className="space-y-8">
                                        <div className="flex items-start gap-4 group">
                                            <div className="p-3 bg-white/5 rounded group-hover:bg-basquiat-gold/20 transition-colors">
                                                <MapPin className="w-6 h-6 text-basquiat-gold" />
                                            </div>
                                            <div>
                                                <h4 className="text-lg font-semibold mb-1">Headquarters</h4>
                                                <p className="text-gray-400 leading-relaxed">
                                                    30 N Gould St,<br />
                                                    Sheridan, Wyoming 82801<br />
                                                    United States
                                                </p>
                                            </div>
                                        </div>

                                        <div className="flex items-start gap-4 group">
                                            <div className="p-3 bg-white/5 rounded group-hover:bg-basquiat-gold/20 transition-colors">
                                                <Globe className="w-6 h-6 text-basquiat-gold" />
                                            </div>
                                            <div>
                                                <h4 className="text-lg font-semibold mb-1">Global Operations</h4>
                                                <p className="text-gray-400 leading-relaxed">
                                                    Primary operations in Nairobi, Kenya,<br /> serving East Africa.
                                                </p>
                                            </div>
                                        </div>

                                        <div className="flex items-start gap-4 group">
                                            <div className="p-3 bg-white/5 rounded group-hover:bg-basquiat-gold/20 transition-colors">
                                                <Mail className="w-6 h-6 text-basquiat-gold" />
                                            </div>
                                            <div>
                                                <h4 className="text-lg font-semibold mb-1">Email Us</h4>
                                                <a href="mailto:info@basquiatcapital.com" className="text-gray-400 hover:text-basquiat-gold transition-colors block">
                                                    info@basquiatcapital.com
                                                </a>
                                                <a href="mailto:partners@basquiatcapital.com" className="text-gray-400 hover:text-basquiat-gold transition-colors block">
                                                    partners@basquiatcapital.com
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </ScrollReveal>
                            </div>

                            <div className="mt-12">
                                <ScrollReveal delay={0.2}>
                                    <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-4">Connect Socially</h4>
                                    <div className="flex gap-4 flex-wrap">
                                        <a href="https://www.linkedin.com/in/stompy-mwendwa" target="_blank" rel="noopener noreferrer" className="w-10 h-10 border border-gray-700 flex items-center justify-center hover:bg-basquiat-gold hover:border-basquiat-gold hover:text-basquiat-black transition-all">
                                            <span className="sr-only">LinkedIn</span>
                                            <Linkedin className="w-5 h-5" />
                                        </a>
                                        <a href="https://www.facebook.com/lifeofstomzy" target="_blank" rel="noopener noreferrer" className="w-10 h-10 border border-gray-700 flex items-center justify-center hover:bg-basquiat-gold hover:border-basquiat-gold hover:text-basquiat-black transition-all">
                                            <span className="sr-only">Facebook</span>
                                            <Facebook className="w-5 h-5" />
                                        </a>
                                        <a href="https://www.youtube.com/@thelifeofstomzyshow" target="_blank" rel="noopener noreferrer" className="w-10 h-10 border border-gray-700 flex items-center justify-center hover:bg-basquiat-gold hover:border-basquiat-gold hover:text-basquiat-black transition-all">
                                            <span className="sr-only">YouTube</span>
                                            <Youtube className="w-5 h-5" />
                                        </a>
                                        <a href="https://www.instagram.com/thelifeofstomzy" target="_blank" rel="noopener noreferrer" className="w-10 h-10 border border-gray-700 flex items-center justify-center hover:bg-basquiat-gold hover:border-basquiat-gold hover:text-basquiat-black transition-all">
                                            <span className="sr-only">Instagram</span>
                                            <Instagram className="w-5 h-5" />
                                        </a>
                                        <a href="https://www.tiktok.com/@lifeofstomzy" target="_blank" rel="noopener noreferrer" className="w-10 h-10 border border-gray-700 flex items-center justify-center hover:bg-basquiat-gold hover:border-basquiat-gold hover:text-basquiat-black transition-all">
                                            <span className="sr-only">TikTok</span>
                                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                                <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.35-1.17.82-1.51 1.44-.31.57-.42 1.25-.32 1.9.1.57.34 1.13.73 1.58.62.74 1.58 1.12 2.53 1.05 1.05-.03 2.05-.6 2.62-1.5.47-.73.69-1.59.68-2.45.02-3.83.01-7.66.02-11.49h-3.9v-3.92c1.28.01 2.56 0 3.84.01z" />
                                            </svg>
                                        </a>
                                    </div>
                                </ScrollReveal>
                            </div>
                        </div>

                        {/* Contact Form (Right Side) */}
                        <div className="w-full md:w-3/5 p-10 md:p-16 bg-white">
                            <ScrollReveal delay={0.1}>
                                <h3 className="text-3xl font-bold text-basquiat-blue mb-8">Send a Message</h3>
                                <form onSubmit={handleSubmit} className="space-y-8">
                                    <div className="grid md:grid-cols-2 gap-8">
                                        <div className="group">
                                            <label htmlFor="name" className="block text-sm font-medium text-gray-500 mb-2 transition-colors group-focus-within:text-basquiat-blue">Your Name</label>
                                            <input
                                                type="text"
                                                id="name"
                                                name="name"
                                                value={formState.name}
                                                onChange={handleChange}
                                                className="w-full pb-3 border-b-2 border-gray-200 bg-transparent outline-none focus:border-basquiat-gold transition-all placeholder-transparent text-lg text-basquiat-black"
                                                placeholder="John Doe"
                                                required
                                            />
                                        </div>
                                        <div className="group">
                                            <label htmlFor="email" className="block text-sm font-medium text-gray-500 mb-2 transition-colors group-focus-within:text-basquiat-blue">Email Address</label>
                                            <input
                                                type="email"
                                                id="email"
                                                name="email"
                                                value={formState.email}
                                                onChange={handleChange}
                                                className="w-full pb-3 border-b-2 border-gray-200 bg-transparent outline-none focus:border-basquiat-gold transition-all placeholder-transparent text-lg text-basquiat-black"
                                                placeholder="john@example.com"
                                                required
                                            />
                                        </div>
                                    </div>

                                    <div className="group">
                                        <label htmlFor="interest" className="block text-sm font-medium text-gray-500 mb-2 transition-colors group-focus-within:text-basquiat-blue">Area of Interest</label>
                                        <div className="relative">
                                            <select
                                                id="interest"
                                                name="interest"
                                                value={formState.interest}
                                                onChange={handleChange}
                                                className="w-full pb-3 border-b-2 border-gray-200 bg-transparent outline-none focus:border-basquiat-gold transition-all text-lg text-basquiat-black appearance-none cursor-pointer"
                                            >
                                                <option>Capital Market Advisory</option>
                                                <option>Commercial FX</option>
                                                <option>Institutional Hedge Fund</option>
                                                <option>Other Inquiry</option>
                                            </select>
                                            <div className="absolute inset-y-0 right-0 flex items-center pointer-events-none">
                                                <ArrowRight className="w-5 h-5 text-gray-400 rotate-90" />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="group">
                                        <label htmlFor="message" className="block text-sm font-medium text-gray-500 mb-2 transition-colors group-focus-within:text-basquiat-blue">Message</label>
                                        <textarea
                                            id="message"
                                            name="message"
                                            rows={4}
                                            value={formState.message}
                                            onChange={handleChange}
                                            className="w-full p-4 bg-gray-50 border border-gray-200 outline-none focus:border-basquiat-gold focus:ring-1 focus:ring-basquiat-gold transition-all text-basquiat-black resize-none"
                                            placeholder="Tell us about your requirements..."
                                            required
                                        />
                                    </div>

                                    <button
                                        type="submit"
                                        className="w-full md:w-auto px-10 py-4 bg-basquiat-blue text-white font-bold text-lg hover:bg-basquiat-gold hover:text-basquiat-black transition-all duration-300 flex items-center justify-center gap-3 group"
                                    >
                                        Send Message
                                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                    </button>
                                </form>
                            </ScrollReveal>
                        </div>
                    </div>
                </div>
            </section>

            {/* Map Placeholder or Additional Info if needed */}
            <section className="pt-12 pb-0 bg-basquiat-white">
                <div className="container mx-auto px-6 text-center">
                    <ScrollReveal>
                        <p className="text-gray-500 max-w-2xl mx-auto mb-12">
                            Our team reviews all inquiries within 24 hours. For urgent matters, please contact our Nairobi office directly.
                        </p>
                    </ScrollReveal>
                </div>
            </section>

        </main>
    );
}
