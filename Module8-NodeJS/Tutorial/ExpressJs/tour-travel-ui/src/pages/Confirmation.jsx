import { Link, Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../context/AuthContext.jsx";
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";

export default function Confirmation() {
    const { state } = useLocation(); // { booking, tour }
    const { user } = useAuth();

    if (!state?.booking) return <Navigate to="/tours" replace />;
    const { booking, tour } = state;

    return (
        <div className="bg-black min-h-screen flex flex-col">
            <Navbar />
            <main className="flex-1 grid place-items-center px-6 py-16">
                <div className="text-center max-w-lg">
                    <p className="text-6xl mb-4">✅</p>
                    <h1 className="font-bold text-4xl text-white">Booking confirmed!</h1>
                    <p className="text-zinc-400 mt-2">
                        A confirmation email is on its way to <b className="text-white">{booking.customerEmail}</b>
                    </p>

                    <div className="bg-zinc-950 border border-zinc-800 rounded-[10px] p-6 mt-8 text-left">
                        <p className="font-bold text-white text-lg">{tour.name}</p>
                        <div className="text-sm text-zinc-300 mt-3 space-y-1">
                            <p className="flex justify-between"><span>Departure</span><b>{booking.startDate}</b></p>
                            <p className="flex justify-between"><span>Travellers</span><b>{booking.participants}</b></p>
                            <p className="flex justify-between"><span>Total</span><b className="text-brand">${booking.totalPrice.toLocaleString()} {booking.currency}</b></p>
                            <p className="flex justify-between"><span>Reference</span><b className="font-mono text-xs">{booking.id}</b></p>
                        </div>
                    </div>

                    <div className="flex gap-4 justify-center mt-8 flex-wrap">
                        {user ? (
                            <Link to="/account" className="bg-brand text-black font-bold px-6 py-3 rounded-[10px]">View my bookings</Link>
                        ) : (
                            <Link to="/register" className="bg-brand text-black font-bold px-6 py-3 rounded-[10px]">Create an account to manage this booking</Link>
                        )}
                        <Link to="/tours" className="border-2 border-zinc-700 text-white font-bold px-6 py-3 rounded-[10px] hover:border-brand">Browse more tours</Link>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}
