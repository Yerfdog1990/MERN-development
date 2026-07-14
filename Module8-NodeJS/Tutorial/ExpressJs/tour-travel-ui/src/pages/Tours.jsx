import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { api } from "../lib/api.js";
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";
import TourCard from "../components/TourCard.jsx";

const DIFFICULTIES = ["easy", "medium", "difficult"];

export default function Tours() {
    const [params, setParams] = useSearchParams();
    const [result, setResult] = useState({ data: [], pagination: null });
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // Filters mirror the API's query features 1:1
    const destination = params.get("destination") || "";
    const difficulty = params.get("difficulty") || "";
    const maxPrice = params.get("maxPrice") || "";
    const sort = params.get("sort") || "-ratingsAverage";
    const page = Number(params.get("page")) || 1;

    useEffect(() => {
        const q = new URLSearchParams({ sort, page: String(page), limit: "9" });
        if (destination) q.set("destination", destination);
        if (difficulty) q.set("difficulty", difficulty);
        if (maxPrice) q.set("price[lte]", maxPrice);
        setLoading(true);
        api.listTours(`?${q}`)
            .then((r) => { setResult(r); setError(null); })
            .catch((e) => setError(e.message))
            .finally(() => setLoading(false));
    }, [destination, difficulty, maxPrice, sort, page]);

    function setFilter(key, value) {
        const next = new URLSearchParams(params);
        if (value) next.set(key, value); else next.delete(key);
        next.delete("page"); // reset pagination on filter change
        setParams(next);
    }

    const { data: tours, pagination } = result;

    return (
        <div className="bg-black min-h-screen flex flex-col">
            <Navbar />
            <main className="flex-1 max-w-[1240px] mx-auto px-6 py-10 w-full">
                <p className="text-zinc-500 text-sm mb-2">Home / Tours</p>
                <h1 className="font-bold text-4xl text-white mb-8">Find your next adventure</h1>

                <div className="grid lg:grid-cols-[240px_1fr] gap-8">
                    {/* FILTERS */}
                    <aside className="bg-zinc-950 border border-zinc-800 rounded-[10px] p-5 h-fit lg:sticky lg:top-[96px]">
                        <h2 className="font-bold text-white mb-4 text-sm tracking-widest">FILTERS</h2>
                        <label className="block mb-4">
                            <span className="text-zinc-400 text-sm">Destination</span>
                            <input
                                value={destination}
                                onChange={(e) => setFilter("destination", e.target.value)}
                                placeholder="e.g. Kenya"
                                className="mt-1 w-full bg-zinc-900 border border-zinc-700 rounded-[8px] px-3 py-2 text-white outline-brand"
                            />
                        </label>
                        <div className="mb-4">
                            <span className="text-zinc-400 text-sm">Difficulty</span>
                            <div className="mt-2 flex flex-wrap gap-2">
                                {DIFFICULTIES.map((d) => (
                                    <button
                                        key={d}
                                        onClick={() => setFilter("difficulty", difficulty === d ? "" : d)}
                                        className={`px-3 py-1 rounded-full text-sm font-semibold border transition ${difficulty === d ? "bg-brand text-black border-brand" : "text-zinc-300 border-zinc-700 hover:border-brand"}`}
                                    >
                                        {d}
                                    </button>
                                ))}
                            </div>
                        </div>
                        <label className="block mb-2">
                            <span className="text-zinc-400 text-sm">Max price: <b className="text-white">${maxPrice || "any"}</b></span>
                            <input
                                type="range" min="500" max="3000" step="100"
                                value={maxPrice || 3000}
                                onChange={(e) => setFilter("maxPrice", e.target.value === "3000" ? "" : e.target.value)}
                                className="w-full accent-[#f8cc07] mt-2"
                            />
                        </label>
                        {(destination || difficulty || maxPrice) && (
                            <button onClick={() => setParams({})} className="text-brand text-sm font-semibold hover:underline">
                                Clear all filters ✕
                            </button>
                        )}
                    </aside>

                    {/* RESULTS */}
                    <div>
                        <div className="flex items-center justify-between mb-6 gap-4 flex-wrap">
                            <p className="text-zinc-400">
                                {loading ? "Loading…" : <><b className="text-white">{pagination?.totalItems ?? 0}</b> tours found</>}
                            </p>
                            <select
                                value={sort}
                                onChange={(e) => setFilter("sort", e.target.value)}
                                className="bg-zinc-900 border border-zinc-700 rounded-[8px] px-3 py-2 text-white font-semibold outline-brand"
                                aria-label="Sort"
                            >
                                <option value="-ratingsAverage">Top rated</option>
                                <option value="price">Price: low → high</option>
                                <option value="-price">Price: high → low</option>
                                <option value="durationDays">Shortest first</option>
                                <option value="-createdAt">Newest</option>
                            </select>
                        </div>

                        {error && <p className="text-red-400 font-semibold">API unreachable — is the backend running? ({error})</p>}

                        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
                            {tours.map((t, i) => <TourCard key={t.id} tour={t} index={i} />)}
                        </div>

                        {!loading && tours.length === 0 && !error && (
                            <p className="text-zinc-400 text-center py-16">No tours match these filters. <button className="text-brand font-bold" onClick={() => setParams({})}>Clear filters</button></p>
                        )}

                        {pagination && pagination.totalPages > 1 && (
                            <div className="flex justify-center gap-2 mt-10">
                                {Array.from({ length: pagination.totalPages }, (_, i) => i + 1).map((p) => (
                                    <button
                                        key={p}
                                        onClick={() => setFilter("page", String(p))}
                                        className={`size-10 rounded-[8px] font-bold border transition ${p === page ? "bg-brand text-black border-brand" : "text-white border-zinc-700 hover:border-brand"}`}
                                    >
                                        {p}
                                    </button>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}
