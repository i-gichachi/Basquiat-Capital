"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { X } from "lucide-react";

export default function DisclaimerModal() {
    const [isVisible, setIsVisible] = useState(false);
    const [isAnimatingOut, setIsAnimatingOut] = useState(false);
    const [checkboxChecked, setCheckboxChecked] = useState(false);
    const modalRef = useRef<HTMLDivElement>(null);

    // ── Check sessionStorage on mount ──────────────────────────
    useEffect(() => {
        try {
            const accepted = sessionStorage.getItem("basquiat-disclaimer-accepted");
            if (!accepted) {
                // Small delay so page content loads behind the modal first
                const timer = setTimeout(() => setIsVisible(true), 300);
                return () => clearTimeout(timer);
            }
        } catch {
            // sessionStorage not available — show modal anyway
            setIsVisible(true);
        }
    }, []);

    // ── Prevent body scroll when modal is open ──────────────────
    useEffect(() => {
        if (isVisible) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }
        return () => {
            document.body.style.overflow = "";
        };
    }, [isVisible]);

    // ── Focus trap — keep focus inside modal ────────────────────
    useEffect(() => {
        if (!isVisible || !modalRef.current) return;

        const focusableElements = modalRef.current.querySelectorAll(
            'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        const firstEl = focusableElements[0] as HTMLElement;
        const lastEl = focusableElements[focusableElements.length - 1] as HTMLElement;

        firstEl?.focus();

        const handleTab = (e: KeyboardEvent) => {
            if (e.key !== "Tab") return;
            if (e.shiftKey) {
                if (document.activeElement === firstEl) {
                    e.preventDefault();
                    lastEl?.focus();
                }
            } else {
                if (document.activeElement === lastEl) {
                    e.preventDefault();
                    firstEl?.focus();
                }
            }
        };

        // ESC key does NOT close — acceptance is required
        document.addEventListener("keydown", handleTab);
        return () => document.removeEventListener("keydown", handleTab);
    }, [isVisible]);

    // ── Accept handler ──────────────────────────────────────────
    const handleAccept = () => {
        if (!checkboxChecked) return;

        try {
            sessionStorage.setItem("basquiat-disclaimer-accepted", "true");
            sessionStorage.setItem("basquiat-disclaimer-timestamp", Date.now().toString());
        } catch {
            console.error("sessionStorage not available");
        }

        setIsAnimatingOut(true);
        setTimeout(() => {
            setIsVisible(false);
            setIsAnimatingOut(false);
        }, 500);
    };

    // ── Decline handler — redirect away ────────────────────────
    const handleDecline = () => {
        // Redirect to Google — site requires acceptance to access
        window.location.href = "https://www.google.com";
    };

    if (!isVisible) return null;

    return (
        <>
            {/* ── BACKDROP ────────────────────────────────────────── */}
            <div
                className="fixed inset-0 z-[999] flex items-center justify-center p-4 md:p-6"
                style={{
                    backgroundColor: 'rgba(5, 15, 30, 0.88)',
                    backdropFilter: 'blur(6px)',
                    WebkitBackdropFilter: 'blur(6px)',
                    opacity: isAnimatingOut ? 0 : 1,
                    transition: 'opacity 0.5s ease',
                }}
                aria-modal="true"
                role="dialog"
                aria-labelledby="disclaimer-title"
                aria-describedby="disclaimer-description"
            >

                {/* ── MODAL ─────────────────────────────────────────── */}
                <div
                    ref={modalRef}
                    className="relative w-full flex flex-col"
                    style={{
                        maxWidth: '640px',
                        maxHeight: '90vh',
                        backgroundColor: '#FFFFFF',
                        transform: isAnimatingOut ? 'scale(0.96) translateY(8px)' : 'scale(1) translateY(0)',
                        opacity: isAnimatingOut ? 0 : 1,
                        transition: 'transform 0.5s ease, opacity 0.5s ease',
                    }}
                >

                    {/* Gold top border accent */}
                    <div style={{ height: '3px', backgroundColor: '#F0B429', flexShrink: 0 }} />

                    {/* Scrollable content area */}
                    <div
                        className="overflow-y-auto"
                        style={{ padding: 'clamp(28px, 5vw, 48px)', flex: 1 }}
                    >

                        {/* ── Header ──────────────────────────────────── */}
                        <div className="mb-6">
                            {/* Gold label */}
                            <span
                                className="font-sans block mb-4"
                                style={{
                                    fontSize: '10px',
                                    letterSpacing: '0.25em',
                                    textTransform: 'uppercase',
                                    color: '#F0B429'
                                }}
                            >
                                Important Legal Notice
                            </span>

                            {/* Title */}
                            <h2
                                id="disclaimer-title"
                                className="font-serif font-normal mb-3"
                                style={{
                                    fontSize: 'clamp(24px, 4vw, 34px)',
                                    color: '#0B2545',
                                    lineHeight: 1.1
                                }}
                            >
                                Investment Disclaimer
                            </h2>

                            {/* Gold underline */}
                            <div style={{ width: '40px', height: '2px', backgroundColor: '#F0B429' }} />
                        </div>

                        {/* ── Sections ────────────────────────────────── */}
                        <div
                            id="disclaimer-description"
                            className="space-y-5 mb-7"
                        >

                            {/* Section 1 */}
                            <div>
                                <p
                                    className="font-sans font-medium mb-2"
                                    style={{ fontSize: '12px', letterSpacing: '0.08em', textTransform: 'uppercase', color: '#0B2545' }}
                                >
                                    Investment Risk
                                </p>
                                <p
                                    className="font-sans"
                                    style={{ fontSize: 'clamp(13px, 1.6vw, 14px)', color: '#374151', lineHeight: 1.85 }}
                                >
                                    All investments involve risk, including the possible loss of principal. Past performance does not guarantee future results. Basquiat Capital does not guarantee any specific returns or outcomes.
                                </p>
                            </div>

                            {/* Divider */}
                            <div style={{ height: '1px', backgroundColor: '#F3F4F6' }} />

                            {/* Section 2 */}
                            <div>
                                <p
                                    className="font-sans font-medium mb-2"
                                    style={{ fontSize: '12px', letterSpacing: '0.08em', textTransform: 'uppercase', color: '#0B2545' }}
                                >
                                    Not Investment Advice
                                </p>
                                <p
                                    className="font-sans"
                                    style={{ fontSize: 'clamp(13px, 1.6vw, 14px)', color: '#374151', lineHeight: 1.85 }}
                                >
                                    Information on this website is for informational purposes only. It does not constitute personalized investment, financial, legal, or tax advice. You should consult qualified professionals before making any investment decisions.
                                </p>
                            </div>

                            {/* Divider */}
                            <div style={{ height: '1px', backgroundColor: '#F3F4F6' }} />

                            {/* Section 3 */}
                            <div>
                                <p
                                    className="font-sans font-medium mb-2"
                                    style={{ fontSize: '12px', letterSpacing: '0.08em', textTransform: 'uppercase', color: '#0B2545' }}
                                >
                                    Regulatory Notice
                                </p>
                                <p
                                    className="font-sans"
                                    style={{ fontSize: 'clamp(13px, 1.6vw, 14px)', color: '#374151', lineHeight: 1.85 }}
                                >
                                    Basquiat Capital LLC is registered in Wyoming, USA, with primary operations in Nairobi, Kenya. Our FX providers are FCA-regulated. Services may not be available in all jurisdictions.
                                </p>
                            </div>

                        </div>

                        {/* ── Risk Disclosure link ─────────────────────── */}
                        <div
                            className="flex items-center gap-3 mb-6 p-4"
                            style={{ backgroundColor: '#F4F4F5', borderLeft: '2px solid rgba(240,180,41,0.5)' }}
                        >
                            <span
                                className="font-sans"
                                style={{ fontSize: '13px', color: '#6B7280', lineHeight: 1.7 }}
                            >
                                For complete details on investment risks, please read our{' '}
                                <Link
                                    href="/legal/risk-disclosure"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="transition-colors duration-300"
                                    style={{ color: '#F0B429', textDecoration: 'underline', textUnderlineOffset: '3px' }}
                                >
                                    Risk Disclosure
                                </Link>
                                {' '}document before proceeding.
                            </span>
                        </div>

                        {/* ── Checkbox ─────────────────────────────────── */}
                        <label
                            className="flex items-start gap-3 cursor-pointer mb-7 group"
                            htmlFor="disclaimer-checkbox"
                        >
                            <div className="relative flex-shrink-0 mt-0.5">
                                <input
                                    id="disclaimer-checkbox"
                                    type="checkbox"
                                    checked={checkboxChecked}
                                    onChange={e => setCheckboxChecked(e.target.checked)}
                                    className="sr-only"
                                    aria-label="I confirm I have read and understood this disclaimer"
                                />
                                {/* Custom checkbox */}
                                <div
                                    style={{
                                        width: '20px',
                                        height: '20px',
                                        border: checkboxChecked ? '2px solid #F0B429' : '2px solid #D1D5DB',
                                        backgroundColor: checkboxChecked ? '#F0B429' : 'transparent',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        transition: 'all 0.2s ease',
                                        cursor: 'pointer'
                                    }}
                                >
                                    {checkboxChecked && (
                                        <svg width="11" height="8" viewBox="0 0 11 8" fill="none">
                                            <path d="M1 4L4 7L10 1" stroke="#0B2545" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    )}
                                </div>
                            </div>
                            <span
                                className="font-sans"
                                style={{ fontSize: 'clamp(13px, 1.5vw, 14px)', color: '#374151', lineHeight: 1.7 }}
                            >
                                I confirm that I have read and understood this disclaimer, including the investment risks involved. I acknowledge that this is not personalized financial advice.
                            </span>
                        </label>

                        {/* ── Buttons ──────────────────────────────────── */}
                        <div className="flex flex-col sm:flex-row gap-3">

                            {/* Accept button */}
                            <button
                                onClick={handleAccept}
                                disabled={!checkboxChecked}
                                className="flex-1 font-sans transition-all duration-300"
                                style={{
                                    fontSize: '12px',
                                    letterSpacing: '0.15em',
                                    textTransform: 'uppercase',
                                    padding: '14px 24px',
                                    backgroundColor: checkboxChecked ? '#F0B429' : '#E5E7EB',
                                    color: checkboxChecked ? '#0B2545' : '#9CA3AF',
                                    cursor: checkboxChecked ? 'pointer' : 'not-allowed',
                                    border: 'none',
                                    fontWeight: 500,
                                    transition: 'all 0.3s ease'
                                }}
                                onMouseEnter={e => {
                                    if (checkboxChecked) {
                                        (e.currentTarget as HTMLButtonElement).style.backgroundColor = '#D4971E';
                                    }
                                }}
                                onMouseLeave={e => {
                                    if (checkboxChecked) {
                                        (e.currentTarget as HTMLButtonElement).style.backgroundColor = '#F0B429';
                                    }
                                }}
                                aria-disabled={!checkboxChecked}
                            >
                                I Understand &amp; Enter Site
                            </button>

                            {/* Decline button */}
                            <button
                                onClick={handleDecline}
                                className="font-sans transition-all duration-300"
                                style={{
                                    fontSize: '12px',
                                    letterSpacing: '0.15em',
                                    textTransform: 'uppercase',
                                    padding: '14px 24px',
                                    backgroundColor: 'transparent',
                                    color: '#9CA3AF',
                                    cursor: 'pointer',
                                    border: '1px solid #E5E7EB',
                                    fontWeight: 400
                                }}
                                onMouseEnter={e => {
                                    (e.currentTarget as HTMLButtonElement).style.borderColor = '#D1D5DB';
                                    (e.currentTarget as HTMLButtonElement).style.color = '#6B7280';
                                }}
                                onMouseLeave={e => {
                                    (e.currentTarget as HTMLButtonElement).style.borderColor = '#E5E7EB';
                                    (e.currentTarget as HTMLButtonElement).style.color = '#9CA3AF';
                                }}
                            >
                                Decline &amp; Exit
                            </button>

                        </div>

                        {/* ── Session notice ───────────────────────────── */}
                        <p
                            className="font-sans mt-5 text-center"
                            style={{ fontSize: '11px', color: '#D1D5DB', letterSpacing: '0.03em' }}
                        >
                            This notice appears at the start of each browsing session.
                        </p>

                    </div>
                    {/* End scrollable area */}

                </div>
                {/* End modal */}

            </div>
            {/* End backdrop */}
        </>
    );
}
