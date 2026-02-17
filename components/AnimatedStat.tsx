'use client';
import { useEffect, useRef, useState } from 'react';

interface AnimatedStatProps {
    value: number;
    prefix?: string;
    suffix?: string;
    label: string;
}

export function AnimatedStat({ value, prefix = '', suffix = '', label }: AnimatedStatProps) {
    const [count, setCount] = useState(0);
    const [hasAnimated, setHasAnimated] = useState(false);
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !hasAnimated) {
                    setHasAnimated(true);
                    const duration = 2200;
                    const startTime = performance.now();

                    const animate = (currentTime: number) => {
                        const elapsed = currentTime - startTime;
                        const progress = Math.min(elapsed / duration, 1);
                        // easeOutCubic — fast start, elegant slowdown
                        const eased = 1 - Math.pow(1 - progress, 3);
                        setCount(Math.floor(eased * value));
                        if (progress < 1) requestAnimationFrame(animate);
                        else setCount(value);
                    };

                    requestAnimationFrame(animate);
                }
            },
            { threshold: 0.3 }
        );

        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, [value, hasAnimated]);

    return (
        <div ref={ref} className="flex flex-col items-center justify-center px-6 py-8 text-center">
            <div className="font-serif text-[52px] md:text-[64px] font-light leading-none text-basquiat-gold">
                {prefix}{count}{suffix}
            </div>
            <div className="mt-3 text-[10px] font-sans uppercase tracking-[0.18em] text-basquiat-white/40">
                {label}
            </div>
        </div>
    );
}
