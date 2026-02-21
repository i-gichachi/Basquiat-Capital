"use client";

import { FadeUp, SlideLeft, GoldLine } from "@/components/Animate";
import { Mail, MapPin, ArrowRight, Calendar, Phone } from "lucide-react";
import { useState } from "react";

export default function ContactPage() {
    const [formState, setFormState] = useState({
        name: "",
        email: "",
        interest: "Capital Market Advisory",
        message: ""
    });
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormState({
            ...formState,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const recipient = "beth@basquiatcapital.com";
        const subject = encodeURIComponent(`New Enquiry: ${formState.interest} - ${formState.name}`);
        const body = encodeURIComponent(
            `Name: ${formState.name}\nEmail: ${formState.email}\nArea of Interest: ${formState.interest}\n\nMessage:\n${formState.message}`
        );
        window.location.href = `mailto:${recipient}?subject=${subject}&body=${body}`;
        setSubmitted(true);
    };

    return (
        <main className="flex flex-col min-h-screen" style={{ backgroundColor: '#FAFAFA' }}>

            {/* ── HERO ─────────────────────────────────────────────────────── */}
            <section
                className="relative flex items-center justify-center overflow-hidden min-h-[clamp(260px,40vh,520px)] md:min-h-[400px] md:h-[400px] md:mb-16"
                style={{ backgroundColor: '#0B2545' }}
            >
                {/* Standard grid overlay — matches all other inner pages */}
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

                {/* BC Watermark */}
                <div
                    className="absolute -bottom-8 -right-8 pointer-events-none select-none z-0"
                    style={{ opacity: 0.03 }}
                >
                    <span
                        className="font-serif leading-none text-white"
                        style={{ fontSize: 'clamp(120px, 18vw, 260px)' }}
                    >BC</span>
                </div>

                {/* Content */}
                <div className="relative z-10 text-center px-6 md:px-12 max-w-4xl mx-auto w-full">
                    <FadeUp delay={100}>
                        <span
                            className="font-sans block mb-5"
                            style={{ fontSize: '11px', letterSpacing: '0.25em', textTransform: 'uppercase', color: '#F0B429' }}
                        >
                            Get in Touch
                        </span>
                    </FadeUp>

                    <GoldLine delay={150} centered={true} />

                    <FadeUp delay={300}>
                        <h1
                            className="font-serif font-light text-white leading-tight mt-5"
                            style={{ fontSize: 'clamp(36px, 6vw, 72px)' }}
                        >
                            Let&apos;s Start a{' '}
                            <span style={{ color: '#F0B429' }}>Conversation.</span>
                        </h1>
                    </FadeUp>

                    <FadeUp delay={450}>
                        <p
                            className="font-sans mt-5 mx-auto"
                            style={{ fontSize: 'clamp(14px, 1.8vw, 17px)', color: 'rgba(255,255,255,0.6)', maxWidth: '520px', lineHeight: 1.75 }}
                        >
                            Connect with our team to discuss capital deployment, market advisory, or institutional partnerships.
                        </p>
                    </FadeUp>
                </div>
            </section>

            {/* ── CONTACT CARDS ROW ──────────────────────────────────────────── */}
            <section className="py-16 md:py-24" style={{ backgroundColor: '#FAFAFA' }}>
                <div className="max-w-6xl mx-auto px-6 md:px-12 lg:px-16">

                    {/* Three executive info cards */}
                    <FadeUp delay={0}>
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-14">

                            <div
                                className="relative flex flex-col justify-between p-7 md:p-8 group transition-all duration-300"
                                style={{
                                    backgroundColor: '#0B2545',
                                    borderTop: '2px solid #F0B429',
                                }}
                            >
                                {/* Subtle corner glow */}
                                <div
                                    className="absolute bottom-0 right-0 pointer-events-none"
                                    style={{ width: '80px', height: '80px', background: 'radial-gradient(circle at 100% 100%, rgba(240,180,41,0.08), transparent 70%)' }}
                                />
                                <div>
                                    <div
                                        className="mb-5 flex items-center justify-center"
                                        style={{ width: '42px', height: '42px', border: '1px solid rgba(240,180,41,0.35)', backgroundColor: 'rgba(240,180,41,0.08)' }}
                                    >
                                        <MapPin className="w-5 h-5" style={{ color: '#F0B429' }} />
                                    </div>
                                    <p
                                        className="font-sans mb-3"
                                        style={{ fontSize: '10px', letterSpacing: '0.25em', textTransform: 'uppercase', color: '#F0B429' }}
                                    >
                                        Headquarters
                                    </p>
                                    <p
                                        className="font-serif font-light leading-relaxed text-white"
                                        style={{ fontSize: 'clamp(15px, 1.8vw, 17px)' }}
                                    >
                                        30 N Gould St<br />Sheridan, Wyoming 82801<br />United States
                                    </p>
                                </div>
                                <div className="mt-6" style={{ height: '1px', backgroundColor: 'rgba(240,180,41,0.2)' }} />
                            </div>

                            <div
                                className="relative flex flex-col justify-between p-7 md:p-8 group transition-all duration-300"
                                style={{
                                    backgroundColor: '#0B2545',
                                    borderTop: '2px solid #F0B429',
                                }}
                            >
                                <div
                                    className="absolute bottom-0 right-0 pointer-events-none"
                                    style={{ width: '80px', height: '80px', background: 'radial-gradient(circle at 100% 100%, rgba(240,180,41,0.08), transparent 70%)' }}
                                />
                                <div>
                                    <div
                                        className="mb-5 flex items-center justify-center"
                                        style={{ width: '42px', height: '42px', border: '1px solid rgba(240,180,41,0.35)', backgroundColor: 'rgba(240,180,41,0.08)' }}
                                    >
                                        <Mail className="w-5 h-5" style={{ color: '#F0B429' }} />
                                    </div>
                                    <p
                                        className="font-sans mb-3"
                                        style={{ fontSize: '10px', letterSpacing: '0.25em', textTransform: 'uppercase', color: '#F0B429' }}
                                    >
                                        Email Us
                                    </p>
                                    <a
                                        href="mailto:beth@basquiatcapital.com"
                                        className="font-serif font-light text-white transition-colors duration-300 block"
                                        style={{ fontSize: 'clamp(14px, 1.6vw, 16px)', lineHeight: 1.8 }}
                                        onMouseEnter={e => (e.currentTarget as HTMLAnchorElement).style.color = '#F0B429'}
                                        onMouseLeave={e => (e.currentTarget as HTMLAnchorElement).style.color = '#FFFFFF'}
                                    >
                                        beth@basquiatcapital.com
                                    </a>
                                    <p
                                        className="font-sans mt-2"
                                        style={{ fontSize: '12px', color: 'rgba(255,255,255,0.35)' }}
                                    >
                                        Responds within 24 hours
                                    </p>
                                </div>
                                <div className="mt-6" style={{ height: '1px', backgroundColor: 'rgba(240,180,41,0.2)' }} />
                            </div>

                            <div
                                className="relative flex flex-col justify-between p-7 md:p-8 group transition-all duration-300"
                                style={{
                                    backgroundColor: '#0B2545',
                                    borderTop: '2px solid #F0B429',
                                }}
                            >
                                <div
                                    className="absolute bottom-0 right-0 pointer-events-none"
                                    style={{ width: '80px', height: '80px', background: 'radial-gradient(circle at 100% 100%, rgba(240,180,41,0.08), transparent 70%)' }}
                                />
                                <div>
                                    <div
                                        className="mb-5 flex items-center justify-center"
                                        style={{ width: '42px', height: '42px', border: '1px solid rgba(240,180,41,0.35)', backgroundColor: 'rgba(240,180,41,0.08)' }}
                                    >
                                        <Calendar className="w-5 h-5" style={{ color: '#F0B429' }} />
                                    </div>
                                    <p
                                        className="font-sans mb-3"
                                        style={{ fontSize: '10px', letterSpacing: '0.25em', textTransform: 'uppercase', color: '#F0B429' }}
                                    >
                                        Direct Scheduling
                                    </p>
                                    <p
                                        className="font-serif font-light text-white"
                                        style={{ fontSize: 'clamp(15px, 1.8vw, 17px)', lineHeight: 1.8 }}
                                    >
                                        Book a 30-minute<br />strategy session
                                    </p>
                                    <p
                                        className="font-sans mt-2"
                                        style={{ fontSize: '12px', color: 'rgba(255,255,255,0.35)' }}
                                    >
                                        Available via Calendly below
                                    </p>
                                </div>
                                <div className="mt-6" style={{ height: '1px', backgroundColor: 'rgba(240,180,41,0.2)' }} />
                            </div>

                        </div>
                    </FadeUp>

                    {/* ── Two-column: Form + Calendly ── */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-start">

                        {/* LEFT: Contact Form */}
                        <FadeUp delay={100}>
                            <div
                                className="p-7 md:p-9"
                                style={{ backgroundColor: '#FFFFFF', border: '1px solid #E5E7EB' }}
                            >
                                <p
                                    className="font-sans mb-2"
                                    style={{ fontSize: '10px', letterSpacing: '0.25em', textTransform: 'uppercase', color: '#F0B429' }}
                                >
                                    Send a Message
                                </p>
                                <h2
                                    className="font-serif font-normal mb-1"
                                    style={{ fontSize: 'clamp(22px, 3vw, 30px)', color: '#0B2545' }}
                                >
                                    Start the Conversation
                                </h2>
                                <div style={{ width: '32px', height: '1px', backgroundColor: '#F0B429', margin: '14px 0 24px' }} />

                                <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                        <div>
                                            <label
                                                htmlFor="name"
                                                className="block font-sans mb-2"
                                                style={{ fontSize: '10px', letterSpacing: '0.15em', textTransform: 'uppercase', color: '#9CA3AF' }}
                                            >
                                                Your Name
                                            </label>
                                            <input
                                                type="text"
                                                id="name"
                                                name="name"
                                                value={formState.name}
                                                onChange={handleChange}
                                                className="w-full bg-transparent outline-none font-sans transition-all duration-200"
                                                style={{ borderBottom: '1px solid #D1D5DB', paddingBottom: '9px', fontSize: '14px', color: '#0B2545' }}
                                                onFocus={e => (e.currentTarget as HTMLInputElement).style.borderBottomColor = '#F0B429'}
                                                onBlur={e => (e.currentTarget as HTMLInputElement).style.borderBottomColor = '#D1D5DB'}
                                                placeholder="John Doe"
                                                required
                                            />
                                        </div>
                                        <div>
                                            <label
                                                htmlFor="email"
                                                className="block font-sans mb-2"
                                                style={{ fontSize: '10px', letterSpacing: '0.15em', textTransform: 'uppercase', color: '#9CA3AF' }}
                                            >
                                                Email Address
                                            </label>
                                            <input
                                                type="email"
                                                id="email"
                                                name="email"
                                                value={formState.email}
                                                onChange={handleChange}
                                                className="w-full bg-transparent outline-none font-sans transition-all duration-200"
                                                style={{ borderBottom: '1px solid #D1D5DB', paddingBottom: '9px', fontSize: '14px', color: '#0B2545' }}
                                                onFocus={e => (e.currentTarget as HTMLInputElement).style.borderBottomColor = '#F0B429'}
                                                onBlur={e => (e.currentTarget as HTMLInputElement).style.borderBottomColor = '#D1D5DB'}
                                                placeholder="john@company.com"
                                                required
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label
                                            htmlFor="interest"
                                            className="block font-sans mb-2"
                                            style={{ fontSize: '10px', letterSpacing: '0.15em', textTransform: 'uppercase', color: '#9CA3AF' }}
                                        >
                                            Area of Interest
                                        </label>
                                        <select
                                            id="interest"
                                            name="interest"
                                            value={formState.interest}
                                            onChange={handleChange}
                                            className="w-full bg-transparent outline-none font-sans appearance-none cursor-pointer transition-all duration-200"
                                            style={{ borderBottom: '1px solid #D1D5DB', paddingBottom: '9px', fontSize: '14px', color: '#0B2545' }}
                                        >
                                            <option>Capital Market Advisory</option>
                                            <option>Commercial FX</option>
                                            <option>Institutional Hedge Fund</option>
                                            <option>Other Inquiry</option>
                                        </select>
                                    </div>

                                    <div>
                                        <label
                                            htmlFor="message"
                                            className="block font-sans mb-2"
                                            style={{ fontSize: '10px', letterSpacing: '0.15em', textTransform: 'uppercase', color: '#9CA3AF' }}
                                        >
                                            Message
                                        </label>
                                        <textarea
                                            id="message"
                                            name="message"
                                            rows={4}
                                            value={formState.message}
                                            onChange={handleChange}
                                            className="w-full outline-none font-sans resize-none transition-all duration-200"
                                            style={{ border: '1px solid #E5E7EB', padding: '12px 14px', fontSize: '14px', color: '#0B2545', backgroundColor: '#FAFAFA', lineHeight: 1.7 }}
                                            onFocus={e => (e.currentTarget as HTMLTextAreaElement).style.borderColor = '#F0B429'}
                                            onBlur={e => (e.currentTarget as HTMLTextAreaElement).style.borderColor = '#E5E7EB'}
                                            placeholder="Tell us about your capital requirements..."
                                            required
                                        />
                                    </div>

                                    {!submitted ? (
                                        <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                                            <button
                                                type="submit"
                                                className="font-sans transition-all duration-300 group flex items-center justify-center gap-3"
                                                style={{ padding: '13px 32px', backgroundColor: '#0B2545', color: '#FFFFFF', fontSize: '11px', letterSpacing: '0.18em', textTransform: 'uppercase' }}
                                                onMouseEnter={e => (e.currentTarget as HTMLButtonElement).style.backgroundColor = '#F0B429'}
                                                onMouseLeave={e => (e.currentTarget as HTMLButtonElement).style.backgroundColor = '#0B2545'}
                                            >
                                                Send Message
                                                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                                            </button>
                                            <p className="font-sans" style={{ fontSize: '11px', color: '#9CA3AF' }}>
                                                Typically responds in 24 hours
                                            </p>
                                        </div>
                                    ) : (
                                        <div style={{ borderLeft: '2px solid #F0B429', paddingLeft: '16px' }}>
                                            <p className="font-serif font-normal mb-1" style={{ fontSize: '17px', color: '#0B2545' }}>
                                                Your email client should have opened.
                                            </p>
                                            <p className="font-sans" style={{ fontSize: '13px', color: '#6B7280' }}>
                                                Or email directly:{' '}
                                                <a href="mailto:beth@basquiatcapital.com" style={{ color: '#F0B429' }}>
                                                    beth@basquiatcapital.com
                                                </a>
                                            </p>
                                        </div>
                                    )}
                                </form>
                            </div>
                        </FadeUp>

                        {/* RIGHT: Calendly */}
                        <FadeUp delay={200}>
                            <div style={{ border: '1px solid #E5E7EB', backgroundColor: '#FFFFFF', overflow: 'hidden' }}>

                                {/* Header */}
                                <div
                                    className="flex items-center gap-4 px-7 py-5"
                                    style={{ backgroundColor: '#0B2545', borderBottom: '2px solid #F0B429' }}
                                >
                                    <div
                                        className="flex-shrink-0 flex items-center justify-center"
                                        style={{ width: '42px', height: '42px', backgroundColor: 'rgba(240,180,41,0.12)', border: '1px solid rgba(240,180,41,0.35)' }}
                                    >
                                        <Calendar className="w-5 h-5" style={{ color: '#F0B429' }} />
                                    </div>
                                    <div>
                                        <p
                                            className="font-sans"
                                            style={{ fontSize: '10px', letterSpacing: '0.25em', textTransform: 'uppercase', color: '#F0B429' }}
                                        >
                                            Direct Scheduling
                                        </p>
                                        <p className="font-serif font-light text-white" style={{ fontSize: '18px' }}>
                                            Book a Strategy Session
                                        </p>
                                    </div>
                                </div>

                                {/* Calendly widget */}
                                <div
                                    className="calendly-inline-widget"
                                    data-url="https://calendly.com/stomzy-basquiatcapital/investment-mandate?hide_landing_page_details=1&hide_gdpr_banner=1&background_color=ffffff&text_color=0B2545&primary_color=F0B429"
                                    style={{ minWidth: '100%', height: '620px' }}
                                />
                            </div>
                        </FadeUp>

                    </div>
                </div>
            </section>

        </main>
    );
}
