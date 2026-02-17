'use client';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const ease = 'cubic-bezier(0.22, 1, 0.36, 1)';

// PATTERN 1 — FadeUp: General purpose fade + rise
// Use on: paragraphs, subtitles, buttons, standalone elements
export function FadeUp({
    children,
    delay = 0,
    className = '',
}: {
    children: React.ReactNode;
    delay?: number;
    className?: string;
}) {
    const { ref, isVisible } = useScrollReveal(0.1);
    return (
        <div
            ref={ref}
            className={`transition-all duration-700 ${className}`}
            style={{
                transitionTimingFunction: ease,
                transitionDelay: `${delay}ms`,
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0px)' : 'translateY(24px)',
            }}
        >
            {children}
        </div>
    );
}

// PATTERN 2 — SlideLeft: Content blocks entering from left
// Use on: section headings, left-column text blocks, eyebrow labels
export function SlideLeft({
    children,
    delay = 0,
    className = '',
}: {
    children: React.ReactNode;
    delay?: number;
    className?: string;
}) {
    const { ref, isVisible } = useScrollReveal(0.1);
    return (
        <div
            ref={ref}
            className={`transition-all duration-700 ${className}`}
            style={{
                transitionTimingFunction: ease,
                transitionDelay: `${delay}ms`,
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateX(0px)' : 'translateX(-32px)',
            }}
        >
            {children}
        </div>
    );
}

// PATTERN 3 — ScaleIn: Images and large visual elements
// Use on: photos, the hero image, any image container
export function ScaleIn({
    children,
    delay = 0,
    className = '',
}: {
    children: React.ReactNode;
    delay?: number;
    className?: string;
}) {
    const { ref, isVisible } = useScrollReveal(0.08);
    return (
        <div
            ref={ref}
            className={`transition-all duration-1000 ${className}`}
            style={{
                transitionTimingFunction: ease,
                transitionDelay: `${delay}ms`,
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'scale(1)' : 'scale(0.96)',
            }}
        >
            {children}
        </div>
    );
}

// PATTERN 4 — Cascade: Grid items with staggered entry
// Use on: service cards, press names, footer columns
// Pass index prop — each item delays by index * 140ms
export function Cascade({
    children,
    index = 0,
    className = '',
}: {
    children: React.ReactNode;
    index?: number;
    className?: string;
}) {
    const { ref, isVisible } = useScrollReveal(0.08);
    return (
        <div
            ref={ref}
            className={`transition-all duration-700 ${className}`}
            style={{
                transitionTimingFunction: ease,
                transitionDelay: `${index * 140}ms`,
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0px)' : 'translateY(32px)',
            }}
        >
            {children}
        </div>
    );
}

// PATTERN 5 — GoldLine: The decorative gold horizontal divider
// Use on: every gold rule/divider under a heading
// The line "draws" itself from left to right on scroll
export function GoldLine({
    delay = 0,
    centered = true,
}: {
    delay?: number;
    centered?: boolean;
}) {
    const { ref, isVisible } = useScrollReveal(0.3);
    return (
        <div
            ref={ref}
            className={`h-px bg-basquiat-gold my-8 transition-all duration-1000 ${centered ? 'mx-auto' : ''}`}
            style={{
                transitionTimingFunction: ease,
                transitionDelay: `${delay}ms`,
                width: isVisible ? '64px' : '0px',
                opacity: isVisible ? 1 : 0,
            }}
        />
    );
}
