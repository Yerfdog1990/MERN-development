import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { api } from "../../lib/api.js";

const TABS = ["upcoming", "past", "cancelled"];

export default function MyBookings() {
    const [bookings, setBookings] = useState([]);
    const [tours, setTours] = useState({});
    const [tab, setTab] = useState("upcoming");
    const [busyId, setBusyId] = useState(null);
    const [error, setError] = useState(null);

    async function load() {
        const res = await api.myBookings("?sort=-createdAt&limit=100");
        setBookings(res.data);
        // Resolve tour names for display
        const ids = [...new Set(res.data.map((b) => b.tourId))];
        const entries = await Promise.all(ids.map(async (id) => {
            try { return [id, (await api.getTour(id)).data]; } catch { return [id, null]; }
        }));
        setTours(Object.fromEntries(entries));
    }
    useEffect(() => { load().catch((e) => setError(e.message)); }, []);

    const today = new Date().toISOString().slice(0, 10);
    const grouped = useMemo(() => ({
        upcoming: bookings.filter((b) => b.status === "confirmed" && b.startDate >= today),
        past: bookings.filter((b) => b.status === "confirmed" && b.startDate < today),
        cancelled: bookings.filter((b) => b.status === "cancelled"),
    }), [bookings, today]);

    async function cancel(id) {
        if (!confirm("Cancel this booking? This cannot be undone.")) return;
        setBusyId(id);
        try { await api.cancelBooking(id); await load(); }
        catch (e) { alert(e.message); }
        finally { setBusyId(null); }
    }

    return (
        <div>
            <h1 className="font-bold text-3xl text-white mb-6">My bookings</h1>

            <div className="flex gap-2 mb-6">
                {TABS.map((t) => (
                    <button key={t} onClick={() => setTab(t)}
                        className={`px-4 py-1.5 rounded-full font-semibold capitalize border transition ${tab === t ? "bg-brand text-black border-brand" : "text-zinc-300 border-zinc-700 hover:border-brand"}`}>
                        {t} ({grouped[t].length})
                    </button>
                ))}
            </div>

            {error && <p className="text-red-400 font-semibold">{error}</p>}

            {grouped[tab].length === 0 ? (
                <div className="bg-zinc-950 border border-zinc-800 rounded-[10px] p-10 text-center">
                    <p className="text-zinc-400">No {tab} bookings.</p>
                    <Link to="/tours" className="inline-block mt-4 bg-brand text-black font-bold px-6 py-2.5 rounded-[10px]">Find a tour</Link>
                </div>
            ) : (
                <div className="space-y-4">
                    {grouped[tab].map((b) => {
                        const tour = tours[b.tourId];
                        return (
                            <div key={b.id} className="bg-zinc-950 border border-zinc-800 rounded-[10px] p-5 flex flex-wrap items-center gap-4">
                                <div className="flex-1 min-w-[200px]">
                                    <p className="font-bold text-white text-lg">{tour?.name || "Tour"}</p>
                                    <p className="text-zinc-400 text-sm mt-1">
                                        📅 {b.startDate} · {b.participants} traveller{b.participants > 1 ? "s" : ""} · ${b.totalPrice.toLocaleString()} {b.currency}
                                    </p>
                                    <p className="text-zinc-600 text-xs mt-1 font-mono">Ref: {b.id}</p>
                                </div>
                                <span className={`px-3 py-1 rounded-full text-xs font-bold ${b.status === "confirmed" ? "bg-emerald-900 text-emerald-300" : "bg-zinc-800 text-zinc-400"}`}>
                                    {b.status}
                                </span>
                                <div className="flex gap-2">
                                    {tour && <Link to={`/tours/${tour.id}`} className="border border-zinc-700 text-white font-semibold px-4 py-1.5 rounded-[8px] hover:border-brand text-sm">View tour</Link>}
                                    {tab === "upcoming" && (
                                        <button onClick={() => cancel(b.id)} disabled={busyId === b.id}
                                            className="border border-red-800 text-red-400 font-semibold px-4 py-1.5 rounded-[8px] hover:bg-red-950 text-sm disabled:opacity-50">
                                            {busyId === b.id ? "Cancelling…" : "Cancel"}
                                        </button>
                                    )}
                                </div>
                            </div>
                        );
                    })}
                </div>
            )}
        </div>
    );
}
