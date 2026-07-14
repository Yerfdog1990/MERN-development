import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { api } from "../lib/api.js";
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";
import Img from "../components/Img.jsx";
import Stars from "../components/Stars.jsx";

const FALLBACKS = ["/assets/dest-thailand.png", "/assets/dest-dubai.png", "/assets/dest-turkey.png"];

export default function TourDetail() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [tour, setTour] = useState(null);
    const [error, setError] = useState(null);
    const [startDate, setStartDate] = useState("");
    const [participants, setParticipants] = useState(2);

    useEffect(() => {
        api.getTour(id)
            .then((r) => { setTour(r.data); setStartDate(r.data.startDates[0] || ""); })
            .catch((e) => setError(e));
    }, [id]);

    if (error) return (
        <div className="bg-black min-h-screen flex flex-col">
            <Navbar />
            <main className="flex-1 grid place-items-center text-center px-6">
                <div>
                    <h1 className="text-4xl font-bold text-white mb-3">{error.status === 404 ? "Tour not found" : "Something went wrong"}</h1>
                    <p className="text-zinc-400 mb-6">{error.message}</p>
                    <Link to="/tours" className="bg-brand text-black font-bold px-6 py-2.5 rounded-[10px]">Browse tours</Link>
                </div>
            </main>
            <Footer />
        </div>
    );

    if (!tour) return <div className="bg-black min-h-screen"><Navbar /><p className="text-zinc-400 text-center py-32">Loading…</p></div>;

    const total = tour.price * participants;

    function goToCheckout() {
        navigate(`/checkout`, { state: { tourId: tour.id, startDate, participants } });
    }

    return (
        <div className="bg-black min-h-screen flex flex-col">
            <Navbar />
            <main className="flex-1 max-w-[1240px] mx-auto px-6 py-10 w-full">
                <p className="text-zinc-500 text-sm mb-4">
                    <Link to="/" className="hover:text-brand">Home</Link> / <Link to="/tours" className="hover:text-brand">Tours</Link> / {tour.name}
                </p>

                <div className="grid lg:grid-cols-[1fr_360px] gap-10">
                    <div>
                        <div className="rounded-[10px] overflow-hidden h-[320px] lg:h-[400px]">
                            <Img src={tour.imageUrl || FALLBACKS[0]} alt={tour.name} className="size-full object-cover" label={tour.destination} />
                        </div>

                        <h1 className="font-bold text-4xl text-white mt-6">{tour.name}</h1>
                        <p className="flex flex-wrap items-center gap-3 mt-3 text-zinc-300">
                            <Stars rating={tour.ratingsAverage} />
                            <span>{tour.ratingsAverage > 0 ? `${tour.ratingsAverage} (${tour.ratingsCount} reviews)` : "New tour"}</span>
                            <span>· 📍 {tour.destination}</span>
                        </p>
                        <div className="flex flex-wrap gap-2 mt-4">
                            {[`${tour.durationDays} days`, tour.difficulty, `max ${tour.maxGroupSize} people`, tour.currency].map((chip) => (
                                <span key={chip} className="border border-zinc-700 text-zinc-200 rounded-full px-4 py-1 text-sm font-semibold">{chip}</span>
                            ))}
                        </div>

                        <section className="mt-8">
                            <h2 className="font-bold text-2xl text-white mb-3">Overview</h2>
                            <p className="text-zinc-300 leading-relaxed">{tour.description}</p>
                        </section>

                        <section className="mt-8">
                            <h2 className="font-bold text-2xl text-white mb-3">Departures</h2>
                            <div className="grid gap-2">
                                {tour.startDates.map((d) => (
                                    <button
                                        key={d}
                                        onClick={() => setStartDate(d)}
                                        className={`flex items-center justify-between border rounded-[10px] px-4 py-3 transition text-left ${startDate === d ? "border-brand bg-brand/10" : "border-zinc-800 hover:border-zinc-600"}`}
                                    >
                                        <span className="text-white font-semibold">📅 {d}</span>
                                        <span className="text-sm text-zinc-400">{tour.durationDays} days · ${tour.price}/person</span>
                                    </button>
                                ))}
                            </div>
                        </section>
                    </div>

                    {/* Sticky booking card */}
                    <aside className="h-fit lg:sticky lg:top-[96px] bg-zinc-950 border-2 border-zinc-800 rounded-[10px] p-6">
                        <p className="text-white">
                            <span className="font-bold text-3xl text-brand">${tour.price}</span>
                            <span className="text-zinc-400"> / person</span>
                        </p>
                        <label className="block mt-5">
                            <span className="text-zinc-400 text-sm">Departure</span>
                            <select
                                value={startDate}
                                onChange={(e) => setStartDate(e.target.value)}
                                className="mt-1 w-full bg-zinc-900 border border-zinc-700 rounded-[8px] px-3 py-2.5 text-white font-semibold outline-brand"
                            >
                                {tour.startDates.map((d) => <option key={d}>{d}</option>)}
                            </select>
                        </label>
                        <label className="block mt-4">
                            <span className="text-zinc-400 text-sm">Travellers</span>
                            <input
                                type="number" min={1} max={tour.maxGroupSize}
                                value={participants}
                                onChange={(e) => setParticipants(Math.max(1, Math.min(tour.maxGroupSize, Number(e.target.value) || 1)))}
                                className="mt-1 w-full bg-zinc-900 border border-zinc-700 rounded-[8px] px-3 py-2.5 text-white font-semibold outline-brand"
                            />
                        </label>
                        <p className="flex justify-between mt-5 text-white font-bold text-xl">
                            <span>Total</span><span>${total.toLocaleString()}</span>
                        </p>
                        <button
                            onClick={goToCheckout}
                            disabled={!startDate}
                            className="mt-4 w-full bg-brand text-black font-bold text-xl py-3 rounded-[10px] hover:brightness-95 disabled:opacity-50 transition"
                        >
                            Book now
                        </button>
                        <p className="text-zinc-500 text-xs mt-3 text-center">Free cancellation · Instant email confirmation</p>
                    </aside>
                </div>
            </main>
            <Footer />
        </div>
    );
}
