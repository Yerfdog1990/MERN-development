import { useEffect, useState } from "react";
import { api } from "../../lib/api.js";
import Img from "../../components/Img.jsx";

const EMPTY = { name: "", destination: "", description: "", durationDays: 5, price: 1000, maxGroupSize: 10, difficulty: "easy", startDates: [] };

export default function AdminTours() {
    const [tours, setTours] = useState([]);
    const [editing, setEditing] = useState(null); // null | {tour object, isNew}
    const [search, setSearch] = useState("");

    async function load() {
        const res = await api.listTours("?sort=-createdAt&limit=100");
        setTours(res.data);
    }
    useEffect(() => { load(); }, []);

    const visible = tours.filter((t) =>
        !search || `${t.name} ${t.destination}`.toLowerCase().includes(search.toLowerCase())
    );

    async function remove(tour) {
        if (!confirm(`Delete "${tour.name}"? This cannot be undone.`)) return;
        try { await api.deleteTour(tour.id); await load(); }
        catch (e) { alert(e.message); }
    }

    return (
        <div>
            <div className="flex items-center justify-between flex-wrap gap-4 mb-6">
                <h1 className="font-bold text-3xl text-white">Tours</h1>
                <button onClick={() => setEditing({ ...EMPTY, isNew: true })}
                    className="bg-brand text-black font-bold px-5 py-2.5 rounded-[10px] hover:brightness-95">+ New tour</button>
            </div>

            <input value={search} onChange={(e) => setSearch(e.target.value)} placeholder="🔍 Search tours…"
                className="w-full max-w-xs bg-zinc-900 border border-zinc-700 rounded-[8px] px-4 py-2.5 text-white outline-brand mb-5" />

            <div className="overflow-x-auto bg-zinc-950 border border-zinc-800 rounded-[10px]">
                <table className="w-full text-sm">
                    <thead>
                        <tr className="text-zinc-500 text-left border-b border-zinc-800">
                            <th className="p-3">Image</th><th className="p-3">Name</th><th className="p-3">Destination</th>
                            <th className="p-3">Price</th><th className="p-3">Rating</th><th className="p-3">Departures</th><th className="p-3"></th>
                        </tr>
                    </thead>
                    <tbody>
                        {visible.map((t) => (
                            <tr key={t.id} className="border-b border-zinc-900 text-zinc-300">
                                <td className="p-3"><div className="w-16 h-10 rounded overflow-hidden"><Img src={t.imageUrl || "/assets/dest-thailand.png"} alt="" className="size-full object-cover" /></div></td>
                                <td className="p-3 font-semibold text-white">{t.name}</td>
                                <td className="p-3">{t.destination}</td>
                                <td className="p-3">${t.price}</td>
                                <td className="p-3">{t.ratingsAverage || "—"}</td>
                                <td className="p-3">{t.startDates.length}</td>
                                <td className="p-3 whitespace-nowrap">
                                    <button onClick={() => setEditing({ ...t, isNew: false })} className="text-brand font-semibold hover:underline mr-3">Edit</button>
                                    <button onClick={() => remove(t)} className="text-red-400 font-semibold hover:underline">Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {editing && <TourForm tour={editing} onClose={() => setEditing(null)} onSaved={() => { setEditing(null); load(); }} />}
        </div>
    );
}

function TourForm({ tour, onClose, onSaved }) {
    const [form, setForm] = useState({ ...tour, startDates: tour.startDates.join(", ") });
    const [file, setFile] = useState(null);
    const [error, setError] = useState(null);
    const [busy, setBusy] = useState(false);

    const set = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));

    async function submit(e) {
        e.preventDefault();
        setBusy(true); setError(null);
        const payload = {
            name: form.name,
            destination: form.destination,
            description: form.description,
            durationDays: Number(form.durationDays),
            price: Number(form.price),
            maxGroupSize: Number(form.maxGroupSize),
            difficulty: form.difficulty,
            startDates: form.startDates.split(",").map((s) => s.trim()).filter(Boolean),
        };
        try {
            const saved = form.isNew
                ? await api.createTour(payload)
                : await api.updateTour(form.id, payload);
            if (file) await api.uploadTourImage(saved.data.id, file);
            onSaved();
        } catch (err) {
            setError(err); setBusy(false);
        }
    }

    return (
        <div className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center p-4 overflow-y-auto" onClick={onClose}>
            <form onSubmit={submit} onClick={(e) => e.stopPropagation()}
                className="bg-zinc-950 border border-zinc-700 rounded-[10px] w-full max-w-2xl p-6 my-8">
                <div className="flex justify-between items-center mb-5">
                    <h2 className="font-bold text-2xl text-white">{form.isNew ? "New tour" : `Edit: ${tour.name}`}</h2>
                    <button type="button" onClick={onClose} className="text-zinc-400 text-2xl hover:text-white">×</button>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                    <label className="block sm:col-span-2">
                        <span className="text-zinc-400 text-sm">Name</span>
                        <input required value={form.name} onChange={set("name")} className="mt-1 w-full bg-zinc-900 border border-zinc-700 rounded-[8px] px-3 py-2 text-white outline-brand" />
                    </label>
                    <label className="block">
                        <span className="text-zinc-400 text-sm">Destination</span>
                        <input required value={form.destination} onChange={set("destination")} className="mt-1 w-full bg-zinc-900 border border-zinc-700 rounded-[8px] px-3 py-2 text-white outline-brand" />
                    </label>
                    <label className="block">
                        <span className="text-zinc-400 text-sm">Difficulty</span>
                        <select value={form.difficulty} onChange={set("difficulty")} className="mt-1 w-full bg-zinc-900 border border-zinc-700 rounded-[8px] px-3 py-2 text-white outline-brand">
                            <option>easy</option><option>medium</option><option>difficult</option>
                        </select>
                    </label>
                    <label className="block">
                        <span className="text-zinc-400 text-sm">Price (USD)</span>
                        <input required type="number" min={0} value={form.price} onChange={set("price")} className="mt-1 w-full bg-zinc-900 border border-zinc-700 rounded-[8px] px-3 py-2 text-white outline-brand" />
                    </label>
                    <div className="grid grid-cols-2 gap-4">
                        <label className="block">
                            <span className="text-zinc-400 text-sm">Days</span>
                            <input required type="number" min={1} value={form.durationDays} onChange={set("durationDays")} className="mt-1 w-full bg-zinc-900 border border-zinc-700 rounded-[8px] px-3 py-2 text-white outline-brand" />
                        </label>
                        <label className="block">
                            <span className="text-zinc-400 text-sm">Max group</span>
                            <input required type="number" min={1} value={form.maxGroupSize} onChange={set("maxGroupSize")} className="mt-1 w-full bg-zinc-900 border border-zinc-700 rounded-[8px] px-3 py-2 text-white outline-brand" />
                        </label>
                    </div>
                    <label className="block sm:col-span-2">
                        <span className="text-zinc-400 text-sm">Start dates (comma-separated, YYYY-MM-DD)</span>
                        <input required value={form.startDates} onChange={set("startDates")} placeholder="2026-08-10, 2026-09-14"
                            className="mt-1 w-full bg-zinc-900 border border-zinc-700 rounded-[8px] px-3 py-2 text-white outline-brand" />
                    </label>
                    <label className="block sm:col-span-2">
                        <span className="text-zinc-400 text-sm">Description (min 10 chars)</span>
                        <textarea required minLength={10} rows={3} value={form.description} onChange={set("description")}
                            className="mt-1 w-full bg-zinc-900 border border-zinc-700 rounded-[8px] px-3 py-2 text-white outline-brand" />
                    </label>
                    <label className="block sm:col-span-2">
                        <span className="text-zinc-400 text-sm">Tour image (JPEG/PNG/WebP, max 5MB)</span>
                        <input type="file" accept="image/jpeg,image/png,image/webp,image/gif" onChange={(e) => setFile(e.target.files[0] || null)}
                            className="mt-1 w-full text-zinc-400 file:bg-brand file:text-black file:font-bold file:border-0 file:rounded-[8px] file:px-4 file:py-2 file:mr-3 file:cursor-pointer" />
                    </label>
                </div>

                {error && (
                    <div className="bg-red-950/60 border border-red-700 text-red-300 rounded-[10px] p-3 text-sm mt-4">
                        <p className="font-bold">{error.message}</p>
                        {error.details?.map((d) => <p key={d.field + d.message}>• {d.field}: {d.message}</p>)}
                    </div>
                )}

                <div className="flex gap-3 mt-6">
                    <button disabled={busy} className="bg-brand text-black font-bold px-6 py-2.5 rounded-[10px] hover:brightness-95 disabled:opacity-60">
                        {busy ? "Saving…" : "Save tour"}
                    </button>
                    <button type="button" onClick={onClose} className="border border-zinc-700 text-white font-bold px-6 py-2.5 rounded-[10px] hover:border-brand">Cancel</button>
                </div>
            </form>
        </div>
    );
}
