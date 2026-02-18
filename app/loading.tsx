export default function Loading() {
    return (
        <div className="flex min-h-[50vh] items-center justify-center w-full py-20 bg-transparent">
            <div className="relative w-12 h-12">
                <div className="absolute inset-0 border-2 border-basquiat-navy/10 rounded-full"></div>
                <div className="absolute inset-0 border-2 border-basquiat-gold rounded-full border-t-transparent animate-spin"></div>
            </div>
        </div>
    );
}
