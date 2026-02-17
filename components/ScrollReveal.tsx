"use client";

import { motion, useInView, useAnimation, Variant } from "framer-motion";
import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

interface ScrollRevealProps {
    children: React.ReactNode;
    width?: "fit-content" | "100%";
    className?: string;
    delay?: number;
}

export const ScrollReveal = ({ children, width = "fit-content", className, delay = 0.25 }: ScrollRevealProps) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-50px" });
    const mainControls = useAnimation();

    useEffect(() => {
        if (isInView) {
            mainControls.start("visible");
        }
    }, [isInView, mainControls]);

    return (
        <div ref={ref} style={{ position: "relative", width, overflow: "hidden" }} className={className}>
            <motion.div
                variants={{
                    hidden: { opacity: 0, y: 12 },
                    visible: { opacity: 1, y: 0 },
                }}
                initial="hidden"
                animate={mainControls}
                transition={{ duration: 0.6, delay: delay, ease: [0.22, 1, 0.36, 1] }} // Customized ease for "executive" feel
            >
                {children}
            </motion.div>
        </div>
    );
};
