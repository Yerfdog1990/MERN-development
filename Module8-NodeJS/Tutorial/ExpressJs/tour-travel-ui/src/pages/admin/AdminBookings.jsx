import { useEffect, useMemo, useState } from "react";
import { api } from "../../lib/api.js";

export default function AdminBookings() {
    const [bookings, setBookings] = useState([]);
    const [tours, setTours] = useState([]);
    const [filters, setFilters] = useState({ tourId: "", status: "", q: "" });
    const [error, setError] = useState(null);

    useEffect(() => {
        api.listBookings("?sort=-createdAt&limit=100").then((r) => setBookings(r.data)).catch((e) => setError(e.message));
        api.listTours("?limit=100&fields=name").then((r) => setTours(r.data)).catch(() => {});
    }, []);

    const tourName = useMemo(() => Object.fromEntries(tours.map((t) => [t.id, t.name])), [tours]);

    const visible = bookings.filter((b) =>
        (!filters.tourId || b.tourId === filters.tourId) &&
        (!filters.status || b.status === filters.status) &&
        (!filters.q || b.customerEmail.toLowerCase().includes(filters.q.toLowerCase()) || b.customerName.toLowerCase().includes(filters.q.toLowerCase()))
    );

    function exportCsv() {
        const rows = [["ref", "tour", "customer", "email", "departure", "participants", "total", "currency", "status", "created"]];
        for (const b of visible) {
            rows.push([b.id, tourName[b.tourId] || b.tourId, b.customerName, b.customerEmail, b.startDate, b.participants, b.totalPrice, b.currency, b.status, b.createdAt]);
        }
        const csv = rows.map((r) => r.map((v) => `"${String(v).replaceAll('"', '""')}"`).join(",")).join("\n");
        const a = document.createElement("a");
        a.href = URL.createObjectURL(new Blob([csv], { type: "text/csv" }));
        a.download = "bookings.csv";
        a.click();
    }

    return (
        <div>
            <div className="flex items-center justify-between flex-wrap gap-4 mb-6">
                <h1 className="font-bold text-3xl text-white">Bookings</h1>
                <button onClick={exportCsv} className="border-2 border-brand text-brand font-bold px-5 py-2 rounded-[10px] hover:bg-brand hover:text-black transition">
                    ⤓ Export CSV ({visible.length})
                </button>
            </div>

            {error && <p className="text-red-400 font-semibold mb-4">{error}</p>}

            <div className="flex flex-wrap gap-3 mb-5">
                <select value={filters.tourId} onChange={(e) => setFilters((f) => ({ ...f, tourId: e.target.value }))}
                    className="bg-zinc-900 border border-zinc-700 rounded-[8px] px-3 py-2 text-white outline-brand">
                    <option value="">All tours</option>
                    {tours.map((t) => <option key={t.id} value={t.id}>{t.name}</option>)}
                </select>
                <select value={filters.status} onChange={(e) => setFilters((f) => ({ ...f, status: e.target.value }))}
                    className="bg-zinc-900 border border-zinc-700 rounded-[8px] px-3 py-2 text-white outline-brand">
                    <option value="">All statuses</option>
                    <option value="confirmed">confirmed</option>
                    <option value="cancelled">cancelled</option>
                </select>
                <input value={filters.q} onChange={(e) => setFilters((f) => ({ ...f, q: e.target.value }))} placeholder="🔍 customer name or email"
                    className="flex-1 min-w-[200px] bg-zinc-900 border border-zinc-700 rounded-[8px] px-3 py-2 text-white outline-brand" />
            </div>

            <div className="overflow-x-auto bg-zinc-950 border border-zinc-800 rounded-[10px]">
                <table className="w-full text-sm">
                    <thead>
                        <tr className="text-zinc-500 text-left border-b border-zinc-800">
                            <th className="p-3">Ref</th><th className="p-3">Tour</th><th className="p-3">Departure</th>
                            <th className="p-3">Customer</th><th className="p-3">Pax</th><th className="p-3">Total</th><th className="p-3">Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {visible.map((b) => (
                            <tr key={b.id} className="border-b border-zinc-900 text-zinc-300">
                                <td className="p-3 font-mono text-xs">{b.id.slice(0, 8)}…</td>
                                <td className="p-3">{tourName[b.tourId] || <span className="text-zinc-600">deleted tour</span>}</td>
                                <td className="p-3">{b.startDate}</td>
                                <td className="p-3">{b.customerName}<br /><span className="text-zinc-600 text-xs">{b.customerEmail}</span></td>
                                <td className="p-3">{b.participants}</td>
                                <td className="p-3">${b.totalPrice.toLocaleString()}</td>
                                <td className="p-3"><span className={`px-2 py-0.5 rounded-full text-xs font-bold ${b.status === "confirmed" ? "bg-emerald-900 text-emerald-300" : "bg-zinc-800 text-zinc-400"}`}>{b.status}</span></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                {visible.length === 0 && <p className="text-zinc-500 text-center py-10">No bookings match.</p>}
            </div>
        </div>
    );
}
