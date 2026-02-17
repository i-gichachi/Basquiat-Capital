"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";
import { cn } from "@/lib/utils";

interface FAQItemProps {
    question: string;
    answer: string;
}

export const FAQItem = ({ question, answer }: FAQItemProps) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="border-b border-gray-200 last:border-none">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full flex justify-between items-center py-6 md:py-8 text-left focus:outline-none group gap-6"
                aria-expanded={isOpen}
            >
                <span className={cn(
                    "text-lg md:text-2xl font-light transition-colors duration-300",
                    isOpen ? "text-basquiat-blue" : "text-basquiat-black group-hover:text-basquiat-blue/80"
                )}>
                    {question}
                </span>
                <span className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full">
                    <motion.div
                        animate={{ rotate: isOpen ? 45 : 0 }}
                        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                        className={cn(
                            "transition-colors duration-300",
                            isOpen ? "text-basquiat-gold" : "text-gray-400 group-hover:text-basquiat-blue"
                        )}
                    >
                        <Plus className="w-6 h-6 md:w-7 md:h-7 font-thin" strokeWidth={1.5} />
                    </motion.div>
                </span>
            </button>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                        className="overflow-hidden"
                    >
                        <div className="pb-6 md:pb-8 pr-8 md:pr-12 opacity-90">
                            <p className="text-gray-600 text-base md:text-lg leading-relaxed font-light">
                                {answer}
                            </p>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};
