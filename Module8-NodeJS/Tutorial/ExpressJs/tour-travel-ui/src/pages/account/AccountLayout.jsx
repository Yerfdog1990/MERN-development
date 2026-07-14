import { NavLink, Outlet } from "react-router-dom";
import Navbar from "../../components/Navbar.jsx";
import Footer from "../../components/Footer.jsx";

const itemClass = ({ isActive }) =>
    `block px-4 py-2.5 rounded-[8px] font-semibold transition ${isActive ? "bg-brand text-black" : "text-zinc-300 hover:bg-zinc-900"}`;

export default function AccountLayout() {
    return (
        <div className="bg-black min-h-screen flex flex-col">
            <Navbar />
            <main className="flex-1 max-w-[1100px] mx-auto px-6 py-10 w-full grid md:grid-cols-[220px_1fr] gap-8">
                <aside className="h-fit bg-zinc-950 border border-zinc-800 rounded-[10px] p-3 md:sticky md:top-[96px]">
                    <NavLink to="/account" end className={itemClass}>My bookings</NavLink>
                    <NavLink to="/account/profile" className={itemClass}>Profile settings</NavLink>
                </aside>
                <div className="min-w-0"><Outlet /></div>
            </main>
            <Footer />
        </div>
    );
}
