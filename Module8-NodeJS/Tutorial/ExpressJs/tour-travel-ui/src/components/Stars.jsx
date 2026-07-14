export default function Stars({ rating = 0, size = "size-5" }) {
    return (
        <span className="inline-flex items-center gap-0.5" aria-label={`${rating} out of 5 stars`}>
            {[1, 2, 3, 4, 5].map((n) => (
                <svg key={n} viewBox="0 0 24 24" className={`${size} ${n <= Math.round(rating) ? "fill-brand" : "fill-zinc-600"}`}>
                    <path d="M12 2l2.9 6.26L21.5 9.27l-4.75 4.28L18.2 20 12 16.6 5.8 20l1.45-6.45L2.5 9.27l6.6-1.01z" />
                </svg>
            ))}
        </span>
    );
}
