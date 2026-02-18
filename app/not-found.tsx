import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function NotFound() {
    return (
        <div className="flex min-h-[70vh] flex-col items-center justify-center bg-basquiat-navy text-white px-6 text-center">
            <h1 className="font-serif text-[80px] md:text-[120px] leading-none text-basquiat-gold opacity-90">
                404
            </h1>
            <h2 className="font-serif text-3xl md:text-4xl mt-6 mb-4">
                Page Not Found
            </h2>
            <p className="font-sans text-white/60 max-w-md mb-10 leading-relaxed">
                The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
            </p>

            <Link
                href="/"
                className="inline-flex items-center gap-2 px-8 py-3 bg-basquiat-gold text-basquiat-navy font-sans text-xs uppercase tracking-widest font-bold hover:bg-white transition-colors duration-300"
            >
                Return Home <ArrowRight size={14} />
            </Link>
        </div>
    );
}
