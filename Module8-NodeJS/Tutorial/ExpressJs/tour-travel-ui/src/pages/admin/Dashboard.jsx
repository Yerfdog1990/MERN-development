import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { api } from "../../lib/api.js";

function Stat({ value, label }) {
    return (
        <div className="bg-zinc-950 border border-zinc-800 rounded-[10px] p-5 text-center">
            <p className="font-bold text-3xl text-brand">{value}</p>
            <p className="text-zinc-400 text-sm mt-1">{label}</p>
        </div>
    );
}

export default function Dashboard() {
    const [bStats, setBStats] = useState(null);
    const [tStats, setTStats] = useState(null);
    const [recent, setRecent] = useState([]);

    useEffect(() => {
        api.getBookingStats().then((r) => setBStats(r.data)).catch(() => {});
        api.getTourStats().then((r) => setTStats(r.data)).catch(() => {});
        api.listBookings("?sort=-createdAt&limit=6").then((r) => setRecent(r.data)).catch(() => {});
    }, []);

    const totalTours = tStats?.reduce((s, g) => s + g.numTours, 0) ?? "—";
    const maxRevenue = Math.max(1, ...(bStats?.byMonth.map((m) => m.revenue) ?? [1]));

    return (
        <div>
            <h1 className="font-bold text-3xl text-white mb-6">Dashboard</h1>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                <Stat value={totalTours} label="Active tours" />
                <Stat value={bStats?.confirmed ?? "—"} label="Confirmed bookings" />
                <Stat value={bStats ? `$${bStats.totalRevenue.toLocaleString()}` : "—"} label="Total revenue" />
                <Stat value={bStats?.totalTravellers ?? "—"} label="Travellers booked" />
            </div>

            <div className="grid lg:grid-cols-2 gap-6 mb-8">
                <div className="bg-zinc-950 border border-zinc-800 rounded-[10px] p-5">
                    <p className="font-bold text-white mb-4">Revenue by month</p>
                    {bStats?.byMonth.length ? (
                        <div className="flex items-end gap-3 h-40">
                            {bStats.byMonth.map((m) => (
                                <div key={m.month} className="flex-1 flex flex-col items-center gap-1">
                                    <span className="text-zinc-400 text-xs">${(m.revenue / 1000).toFixed(1)}k</span>
                                    <div className="w-full bg-brand rounded-t" style={{ height: `${(m.revenue / maxRevenue) * 100}%` }} />
                                    <span className="text-zinc-500 text-xs">{m.month}</span>
                                </div>
                            ))}
                        </div>
                    ) : <p className="text-zinc-500">No data yet</p>}
                </div>
                <div className="bg-zinc-950 border border-zinc-800 rounded-[10px] p-5">
                    <p className="font-bold text-white mb-4">Tours by difficulty</p>
                    {tStats ? (
                        <div className="space-y-3">
                            {tStats.map((g) => (
                                <div key={g.difficulty}>
                                    <p className="flex justify-between text-sm text-zinc-300 mb-1">
                                        <span className="capitalize">{g.difficulty}</span>
                                        <span>{g.numTours} tours · avg ${g.avgPrice}</span>
                                    </p>
                                    <div className="bg-zinc-800 rounded-full h-2.5">
                                        <div className="bg-brand h-2.5 rounded-full" style={{ width: `${(g.numTours / Math.max(...tStats.map((x) => x.numTours))) * 100}%` }} />
                                    </div>
                                </div>
                            ))}
                        </div>
                    ) : <p className="text-zinc-500">No data yet</p>}
                </div>
            </div>

            <div className="bg-zinc-950 border border-zinc-800 rounded-[10px] p-5">
                <div className="flex justify-between items-center mb-4">
                    <p className="font-bold text-white">Recent bookings</p>
                    <Link to="/admin/bookings" className="text-brand text-sm font-bold hover:underline">View all →</Link>
                </div>
                <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                        <thead>
                            <tr className="text-zinc-500 text-left border-b border-zinc-800">
                                <th className="py-2 pr-4">Customer</th><th className="pr-4">Departure</th><th className="pr-4">Pax</th><th className="pr-4">Total</th><th>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {recent.map((b) => (
                                <tr key={b.id} className="border-b border-zinc-900 text-zinc-300">
                                    <td className="py-2.5 pr-4">{b.customerName}<br /><span className="text-zinc-600 text-xs">{b.customerEmail}</span></td>
                                    <td className="pr-4">{b.startDate}</td>
                                    <td className="pr-4">{b.participants}</td>
                                    <td className="pr-4">${b.totalPrice.toLocaleString()}</td>
                                    <td><span className={`px-2 py-0.5 rounded-full text-xs font-bold ${b.status === "confirmed" ? "bg-emerald-900 text-emerald-300" : "bg-zinc-800 text-zinc-400"}`}>{b.status}</span></td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}
