import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { api } from "../lib/api.js";
import { useAuth } from "../context/AuthContext.jsx";
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";
import Img from "../components/Img.jsx";

export default function Checkout() {
    const { state } = useLocation(); // { tourId, startDate, participants }
    const navigate = useNavigate();
    const { user } = useAuth();

    const [tour, setTour] = useState(null);
    const [form, setForm] = useState({
        customerName: user?.name || "",
        customerEmail: user?.email || "",
        startDate: state?.startDate || "",
        participants: state?.participants || 1,
    });
    const [status, setStatus] = useState("idle");
    const [error, setError] = useState(null);

    useEffect(() => {
        if (!state?.tourId) { navigate("/tours", { replace: true }); return; }
        api.getTour(state.tourId).then((r) => {
            setTour(r.data);
            setForm((f) => ({ ...f, startDate: f.startDate || r.data.startDates[0] }));
        });
    }, [state, navigate]);

    // Pre-fill when the session finishes restoring
    useEffect(() => {
        if (user) setForm((f) => ({ ...f, customerName: f.customerName || user.name, customerEmail: f.customerEmail || user.email }));
    }, [user]);

    if (!tour) return <div className="bg-black min-h-screen"><Navbar /><p className="text-zinc-400 text-center py-32">Loading…</p></div>;

    const set = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));
    const total = tour.price * (Number(form.participants) || 0);

    async function submit(e) {
        e.preventDefault();
        setStatus("submitting"); setError(null);
        try {
            const res = await api.createBooking({
                tourId: tour.id,
                customerName: form.customerName,
                customerEmail: form.customerEmail,
                participants: Number(form.participants),
                startDate: form.startDate,
            });
            navigate("/confirmation", { state: { booking: res.data, tour }, replace: true });
        } catch (err) {
            setError(err); setStatus("idle");
        }
    }

    return (
        <div className="bg-black min-h-screen flex flex-col">
            <Navbar />
            <main className="flex-1 max-w-[1000px] mx-auto px-6 py-10 w-full">
                <p className="text-zinc-500 text-sm mb-2"><Link to={`/tours/${tour.id}`} className="hover:text-brand">← Back to tour</Link></p>
                <h1 className="font-bold text-4xl text-white mb-2">Checkout</h1>
                <p className="text-zinc-400 mb-8">Step 1 of 2 — your details {!user && <>· <Link to="/login" className="text-brand hover:underline">log in</Link> to auto-fill and track this booking</>}</p>

                <div className="grid md:grid-cols-[1fr_320px] gap-8">
                    <form onSubmit={submit} className="space-y-4">
                        <label className="block">
                            <span className="text-zinc-400 text-sm">Full name</span>
                            <input required minLength={2} value={form.customerName} onChange={set("customerName")}
                                className="mt-1 w-full bg-zinc-900 border border-zinc-700 rounded-[8px] px-4 py-3 text-white outline-brand" />
                        </label>
                        <label className="block">
                            <span className="text-zinc-400 text-sm">Email — your confirmation goes here</span>
                            <input required type="email" value={form.customerEmail} onChange={set("customerEmail")}
                                className="mt-1 w-full bg-zinc-900 border border-zinc-700 rounded-[8px] px-4 py-3 text-white outline-brand" />
                        </label>
                        <div className="grid grid-cols-2 gap-4">
                            <label className="block">
                                <span className="text-zinc-400 text-sm">Departure</span>
                                <select required value={form.startDate} onChange={set("startDate")}
                                    className="mt-1 w-full bg-zinc-900 border border-zinc-700 rounded-[8px] px-4 py-3 text-white outline-brand">
                                    {tour.startDates.map((d) => <option key={d}>{d}</option>)}
                                </select>
                            </label>
                            <label className="block">
                                <span className="text-zinc-400 text-sm">Travellers</span>
                                <input required type="number" min={1} max={tour.maxGroupSize} value={form.participants} onChange={set("participants")}
                                    className="mt-1 w-full bg-zinc-900 border border-zinc-700 rounded-[8px] px-4 py-3 text-white outline-brand" />
                            </label>
                        </div>

                        {error && (
                            <div className="bg-red-950/60 border border-red-700 text-red-300 rounded-[10px] p-4 text-sm">
                                <p className="font-bold">{error.message}</p>
                                {error.details?.map((d) => <p key={d.field}>• {d.field}: {d.message}</p>)}
                            </div>
                        )}

                        <button disabled={status === "submitting"}
                            className="w-full bg-brand text-black font-bold text-xl py-3.5 rounded-[10px] hover:brightness-95 disabled:opacity-60 transition">
                            {status === "submitting" ? "Booking…" : `Confirm booking — $${total.toLocaleString()}`}
                        </button>
                        <p className="text-zinc-500 text-xs text-center">No payment needed today — reserve now, pay 30 days before departure.</p>
                    </form>

                    <aside className="bg-zinc-950 border border-zinc-800 rounded-[10px] p-5 h-fit">
                        <p className="font-bold text-white mb-3">Order summary</p>
                        <div className="rounded-[8px] overflow-hidden h-32 mb-3">
                            <Img src={tour.imageUrl || "/assets/dest-thailand.png"} alt="" className="size-full object-cover" label={tour.destination} />
                        </div>
                        <p className="text-white font-semibold">{tour.name}</p>
                        <p className="text-zinc-400 text-sm mt-1">{tour.destination} · {tour.durationDays} days</p>
                        <div className="border-t border-zinc-800 mt-4 pt-4 text-sm text-zinc-300 space-y-1">
                            <p className="flex justify-between"><span>Departure</span><b>{form.startDate}</b></p>
                            <p className="flex justify-between"><span>{form.participants} × ${tour.price}</span><b>${total.toLocaleString()}</b></p>
                        </div>
                        <p className="flex justify-between border-t border-zinc-800 mt-4 pt-4 text-white font-bold text-lg">
                            <span>Total</span><span>${total.toLocaleString()}</span>
                        </p>
                    </aside>
                </div>
            </main>
            <Footer />
        </div>
    );
}
