"use client";

import { motion } from "framer-motion";

export const ScrollIndicator = () => {
    return (
        <motion.div
            className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/50"
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
        >
            <div className="w-px h-16 bg-gradient-to-b from-transparent via-white to-transparent" />
        </motion.div>
    );
};
