import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { api } from "../lib/api.js";
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";
import TourCard from "../components/TourCard.jsx";
import Img from "../components/Img.jsx";

const reviews = [
    { name: "Daniel M.", text: "Golden temples, vibrant markets, tropical beaches, and unforgettable cultural adventures — flawlessly organised." },
    { name: "Sarah K.", text: "Futuristic skylines, luxury shopping, desert safaris, and world-class entertainment. Best trip of my life." },
    { name: "Ahmed T.", text: "Ancient history, stunning mosques, vibrant bazaars and rich cuisine. The guides made all the difference." },
];

export default function Home() {
    const navigate = useNavigate();
    const [tours, setTours] = useState([]);
    const [stats, setStats] = useState(null);
    const [search, setSearch] = useState({ destination: "", month: "" });

    useEffect(() => {
        api.listTours("?sort=-ratingsAverage&limit=6").then((r) => setTours(r.data)).catch(() => {});
        api.getTourStats().then((r) => setStats(r.data)).catch(() => {});
    }, []);

    const destinations = [...new Set(tours.map((t) => t.destination))];
    const totalTours = stats?.reduce((s, g) => s + g.numTours, 0);

    function submitSearch(e) {
        e.preventDefault();
        const params = new URLSearchParams();
        if (search.destination) params.set("destination", search.destination);
        navigate(`/tours?${params}`);
    }

    return (
        <div className="bg-black min-h-screen">
            <Navbar overlay />

            {/* HERO */}
            <section className="relative min-h-[640px] flex flex-col justify-center overflow-hidden pt-[100px] pb-16">
                <div className="absolute inset-0">
                    <Img src="/assets/hero-bg.png" alt="" className="size-full object-cover" label="hero" />
                    <div className="absolute inset-0 bg-black/40" />
                </div>
                <div className="relative max-w-[1240px] mx-auto px-6 w-full">
                    <h1 className="font-hero leading-none text-6xl sm:text-7xl lg:text-8xl">
                        <span className="text-white block">Travel Beyond</span>
                        <span className="text-brand block">Measures</span>
                    </h1>
                    <p className="text-white/90 text-lg mt-4 max-w-xl">
                        Hand-crafted safaris, treks and escapes across Africa and beyond — small groups, expert local guides, instant confirmation.
                    </p>

                    {/* Search-first hero */}
                    <form onSubmit={submitSearch} className="mt-8 bg-white rounded-[10px] p-3 flex flex-col md:flex-row gap-3 max-w-3xl shadow-2xl">
                        <select
                            value={search.destination}
                            onChange={(e) => setSearch((s) => ({ ...s, destination: e.target.value }))}
                            className="flex-1 px-4 py-3 rounded-[8px] bg-zinc-100 text-black font-semibold outline-brand"
                            aria-label="Destination"
                        >
                            <option value="">📍 All destinations</option>
                            {destinations.map((d) => <option key={d} value={d}>{d}</option>)}
                        </select>
                        <select
                            value={search.month}
                            onChange={(e) => setSearch((s) => ({ ...s, month: e.target.value }))}
                            className="flex-1 px-4 py-3 rounded-[8px] bg-zinc-100 text-black font-semibold outline-brand"
                            aria-label="When"
                        >
                            <option value="">📅 Any month</option>
                            <option>August 2026</option><option>September 2026</option><option>October 2026</option>
                        </select>
                        <button className="bg-brand text-black font-bold text-lg px-8 py-3 rounded-[8px] hover:brightness-95 transition">
                            Search tours
                        </button>
                    </form>

                    <div className="mt-6 flex gap-6 items-center">
                        <Link to="/tours" className="bg-black text-brand font-bold text-xl px-6 py-2.5 rounded-[10px] hover:scale-105 transition-transform">
                            Discover more
                        </Link>
                        <button className="flex items-center gap-2 text-brand font-bold text-xl group">
                            <span className="size-11 rounded-full bg-brand flex items-center justify-center group-hover:scale-110 transition-transform">
                                <svg viewBox="0 0 24 24" className="size-5 fill-black translate-x-0.5"><path d="M8 5v14l11-7z" /></svg>
                            </span>
                            Watch our video
                        </button>
                    </div>
                </div>
            </section>

            {/* TRUST STRIP */}
            <section className="border-b border-zinc-800">
                <div className="max-w-[1240px] mx-auto px-6 py-10 grid grid-cols-2 lg:grid-cols-4 gap-6 text-center">
                    {[
                        [totalTours ? `${totalTours}` : "50+", "Curated tours"],
                        ["200+", "Partner hotels"],
                        ["200k", "Happy tourists"],
                        ["4.8★", "Average rating"],
                    ].map(([n, label]) => (
                        <div key={label}>
                            <p className="font-bold text-4xl text-brand">{n}</p>
                            <p className="text-zinc-400 mt-1">{label}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* FEATURED TOURS */}
            <section className="max-w-[1240px] mx-auto px-6 py-16">
                <div className="flex items-end justify-between mb-8">
                    <div>
                        <h2 className="font-bold text-4xl text-white">Top-rated tours</h2>
                        <p className="text-zinc-400 mt-1">Live availability — book in two minutes</p>
                    </div>
                    <Link to="/tours" className="text-brand font-bold hover:underline whitespace-nowrap">View all →</Link>
                </div>
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {tours.slice(0, 6).map((t, i) => <TourCard key={t.id} tour={t} index={i} />)}
                </div>
            </section>

            {/* WHY US */}
            <section id="about" className="bg-zinc-950 border-y border-zinc-800">
                <div className="max-w-[1240px] mx-auto px-6 py-16 grid gap-8 md:grid-cols-3">
                    {[
                        ["🛡️", "Free cancellation", "Cancel up to 30 days before departure for a full refund."],
                        ["🧭", "Expert local guides", "Small groups led by people who call these places home."],
                        ["⚡", "Instant confirmation", "Real-time availability and an email receipt in seconds."],
                    ].map(([icon, title, text]) => (
                        <div key={title} className="bg-black border border-zinc-800 rounded-[10px] p-6">
                            <p className="text-3xl">{icon}</p>
                            <p className="font-bold text-xl text-white mt-3">{title}</p>
                            <p className="text-zinc-400 mt-2 text-sm leading-relaxed">{text}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* REVIEWS */}
            <section id="reviews" className="max-w-[1240px] mx-auto px-6 py-16">
                <h2 className="font-bold text-4xl text-white text-center mb-2">Loved by travellers</h2>
                <p className="text-zinc-400 text-center mb-12">Pulled from our Google Reviews</p>
                <div className="grid gap-12 md:grid-cols-3">
                    {reviews.map((r) => (
                        <figure key={r.name} className="relative bg-zinc-900 border border-zinc-800 rounded-[10px] p-6 pt-12 text-center">
                            <span className="absolute -top-8 left-1/2 -translate-x-1/2 size-16 rounded-full bg-brand flex items-center justify-center overflow-hidden">
                                <Img src="/assets/icon-avatar.png" alt="" className="h-11 w-9 object-contain" label="👤" />
                            </span>
                            <blockquote className="text-zinc-300 text-sm leading-relaxed">“{r.text}”</blockquote>
                            <figcaption className="mt-4 font-bold text-white">— {r.name} <span className="text-brand">★★★★★</span></figcaption>
                        </figure>
                    ))}
                </div>
            </section>

            {/* NEWSLETTER */}
            <section className="bg-brand">
                <div className="max-w-[1240px] mx-auto px-6 py-12 flex flex-col md:flex-row items-center gap-6 justify-between">
                    <div>
                        <p className="font-bold text-2xl text-black">Get travel deals in your inbox</p>
                        <p className="text-black/70">One email a month. No spam, just adventures.</p>
                    </div>
                    <form className="flex w-full md:w-auto" onSubmit={(e) => e.preventDefault()}>
                        <input type="email" required placeholder="you@example.com" className="flex-1 md:w-80 px-4 py-3 rounded-l-[10px] bg-white text-black outline-none" />
                        <button className="bg-black text-brand font-bold px-6 rounded-r-[10px]">Subscribe</button>
                    </form>
                </div>
            </section>

            <Footer />
        </div>
    );
}
