"use client";

import { useState, useEffect } from "react";
// lucide-react is available in package.json
import { Check } from "lucide-react";

export default function DisclaimerModal() {
    // State for visibility and animation
    const [isOpen, setIsOpen] = useState(false);
    const [isVisible, setIsVisible] = useState(false);

    // Form state
    const [jurisdiction, setJurisdiction] = useState("Select your region");
    const [agreedRisk, setAgreedRisk] = useState(false);
    const [agreedTerms, setAgreedTerms] = useState(false);

    useEffect(() => {
        // Check local storage on mount
        const hasAccepted = localStorage.getItem("basquiat-disclaimer-accepted");

        if (!hasAccepted) {
            setIsOpen(true);
            // Small delay to allow mount before fading in
            const timer = setTimeout(() => setIsVisible(true), 50);
            return () => clearTimeout(timer);
        }
    }, []);

    const handleAccept = () => {
        // Validation check
        if (jurisdiction === "Select your region" || !agreedRisk || !agreedTerms) return;

        localStorage.setItem("basquiat-disclaimer-accepted", "true");
        localStorage.setItem("basquiat-disclaimer-timestamp", Date.now().toString());

        setIsVisible(false);

        setTimeout(() => {
            setIsOpen(false);
        }, 500);
    };

    if (!isOpen) return null;

    const isFormValid = jurisdiction !== "Select your region" && agreedRisk && agreedTerms;

    return (
        <div
            className={`fixed inset-0 z-[9999] flex items-center justify-center transition-all duration-700 ease-out p-4 ${isVisible ? "bg-black/80 backdrop-blur-md opacity-100" : "bg-black/0 backdrop-blur-none opacity-0 pointer-events-none"
                }`}
        >
            <div
                className={`max-w-xl w-full rounded-sm transform transition-all duration-700 cubic-bezier(0.16, 1, 0.3, 1) overflow-hidden relative ${isVisible ? "scale-100 opacity-100 translate-y-0" : "scale-95 opacity-0 translate-y-8"
                    }`}
                role="dialog"
                aria-modal="true"
                aria-labelledby="modal-title"
                style={{
                    // Glassmorphic Blue Background
                    backgroundColor: "rgba(0, 59, 92, 0.95)", // #003B5C with opacity
                    backdropFilter: "blur(20px)",
                    boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.5), 0 0 0 1px rgba(255, 255, 255, 0.1)"
                }}
            >
                {/* Gold Accent Line */}
                <div className="h-1 w-full bg-basquiat-gold"></div>

                {/* Header */}
                <div className="px-8 pt-8 pb-6 border-b border-white/10">
                    <h1 id="modal-title" className="text-2xl font-light text-white tracking-tight mb-2 uppercase font-inter">
                        Important Information
                    </h1>
                    <p className="text-gray-300 text-sm font-light leading-relaxed">
                        Welcome to Basquiat Capital. Please review the following regulatory disclosures before proceeding.
                    </p>
                </div>

                {/* Scrollable Content Area */}
                <div className="px-8 py-6 max-h-[35vh] overflow-y-auto custom-scrollbar-dark space-y-6">
                    <section>
                        <h3 className="text-xs font-bold text-basquiat-gold uppercase tracking-wider mb-2 flex items-center gap-2">
                            Investment Risk
                        </h3>
                        <p className="text-sm text-gray-300 leading-relaxed font-light text-justify">
                            All investments involve risk. You may lose some or all of your invested capital. Past performance does not guarantee future results. Basquiat Capital does not guarantee any specific returns or outcomes.
                        </p>
                    </section>

                    <section>
                        <h3 className="text-xs font-bold text-basquiat-gold uppercase tracking-wider mb-2 flex items-center gap-2">
                            No Advice
                        </h3>
                        <p className="text-sm text-gray-300 leading-relaxed font-light text-justify">
                            Information on this website is for educational and informational purposes only and does not constitute personalized investment advice. Consult qualified professionals before making investment decisions.
                        </p>
                    </section>
                </div>

                {/* Footer / Form Actions */}
                <div className="bg-black/20 px-8 py-8 border-t border-white/10 space-y-6">
                    {/* Jurisdiction Dropdown */}
                    <div className="relative group">
                        <select
                            id="jurisdiction"
                            value={jurisdiction}
                            onChange={(e) => setJurisdiction(e.target.value)}
                            className="w-full appearance-none bg-white/5 border border-white/20 py-3.5 px-4 rounded-none text-white text-sm focus:border-basquiat-gold focus:ring-1 focus:ring-basquiat-gold outline-none transition-colors font-inter cursor-pointer hover:bg-white/10"
                        >
                            <option className="bg-basquiat-blue text-white" disabled>Select your region</option>
                            <option className="bg-basquiat-blue text-white">United States</option>
                            <option className="bg-basquiat-blue text-white">East Africa</option>
                            <option className="bg-basquiat-blue text-white">Sub-Saharan Africa</option>
                            <option className="bg-basquiat-blue text-white">Other</option>
                        </select>
                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-basquiat-gold">
                            <svg className="h-4 w-4 fill-current transition-transform group-hover:translate-y-0.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                            </svg>
                        </div>
                    </div>

                    {/* Checkboxes */}
                    <div className="space-y-3">
                        <label className="flex items-start gap-4 cursor-pointer group">
                            <div className="relative flex items-center mt-0.5">
                                <input
                                    type="checkbox"
                                    checked={agreedRisk}
                                    onChange={(e) => setAgreedRisk(e.target.checked)}
                                    className="peer h-4 w-4 appearance-none border border-white/30 rounded-none bg-transparent checked:bg-basquiat-gold checked:border-basquiat-gold transition-all cursor-pointer hover:border-basquiat-gold"
                                />
                                <Check className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 text-basquiat-black opacity-0 peer-checked:opacity-100 transition-opacity pointer-events-none" strokeWidth={3} />
                            </div>
                            <span className="text-xs text-gray-400 group-hover:text-white transition-colors font-inter leading-snug select-none">
                                I understand investment risks and that this is not personalized advice
                            </span>
                        </label>

                        <label className="flex items-start gap-4 cursor-pointer group">
                            <div className="relative flex items-center mt-0.5">
                                <input
                                    type="checkbox"
                                    checked={agreedTerms}
                                    onChange={(e) => setAgreedTerms(e.target.checked)}
                                    className="peer h-4 w-4 appearance-none border border-white/30 rounded-none bg-transparent checked:bg-basquiat-gold checked:border-basquiat-gold transition-all cursor-pointer hover:border-basquiat-gold"
                                />
                                <Check className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 text-basquiat-black opacity-0 peer-checked:opacity-100 transition-opacity pointer-events-none" strokeWidth={3} />
                            </div>
                            <span className="text-xs text-gray-400 group-hover:text-white transition-colors font-inter leading-snug select-none">
                                I have read the <a href="/legal/terms" target="_blank" className="underline underline-offset-2 hover:text-basquiat-gold text-gray-300">Terms of Service</a> and <a href="/legal/privacy" target="_blank" className="underline underline-offset-2 hover:text-basquiat-gold text-gray-300">Privacy Policy</a>
                            </span>
                        </label>
                    </div>

                    {/* Submit Button */}
                    <button
                        onClick={handleAccept}
                        disabled={!isFormValid}
                        className={`w-full py-4 px-8 text-sm font-medium tracking-widest uppercase rounded-sm transition-all duration-300 font-inter border
                            ${isFormValid
                                ? "bg-basquiat-gold border-basquiat-gold text-basquiat-black hover:bg-white hover:border-white shadow-[0_0_20px_rgba(255,199,44,0.3)] hover:shadow-[0_0_20px_rgba(255,255,255,0.3)]"
                                : "bg-white/5 border-white/10 text-white/20 cursor-not-allowed"
                            }
                        `}
                    >
                        Enter Site
                    </button>
                </div>
            </div>

            <style jsx global>{`
                .custom-scrollbar-dark::-webkit-scrollbar {
                    width: 4px;
                }
                .custom-scrollbar-dark::-webkit-scrollbar-track {
                    background: rgba(255, 255, 255, 0.05);
                }
                .custom-scrollbar-dark::-webkit-scrollbar-thumb {
                    background: rgba(255, 255, 255, 0.2);
                    border-radius: 2px;
                }
                .custom-scrollbar-dark::-webkit-scrollbar-thumb:hover {
                    background: rgba(255, 255, 255, 0.4);
                }
            `}</style>
        </div>
    );
}
