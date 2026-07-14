import { Link, NavLink, Outlet, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext.jsx";

const itemClass = ({ isActive }) =>
    `block px-4 py-2.5 rounded-[8px] font-semibold transition ${isActive ? "bg-brand text-black" : "text-zinc-300 hover:bg-zinc-900"}`;

export default function AdminLayout() {
    const { user, logout } = useAuth();
    const navigate = useNavigate();

    return (
        <div className="bg-black min-h-screen flex flex-col">
            <header className="sticky top-0 z-30 bg-zinc-950 border-b-2 border-brand">
                <div className="h-[64px] flex items-center px-6 max-w-[1400px] mx-auto gap-4">
                    <Link to="/admin" className="font-bold text-white text-lg">🌍 TourWorld <span className="text-brand">Admin</span></Link>
                    <Link to="/" className="text-zinc-400 hover:text-brand text-sm font-semibold">↗ View site</Link>
                    <span className="ml-auto text-zinc-300 text-sm">{user?.name} <span className="text-[10px] bg-red-700 text-white px-2 py-0.5 rounded-full ml-1">admin</span></span>
                    <button onClick={() => { logout(); navigate("/"); }} className="text-zinc-400 hover:text-red-400 text-sm font-semibold">Logout</button>
                </div>
            </header>
            <main className="flex-1 max-w-[1400px] mx-auto px-6 py-8 w-full grid md:grid-cols-[210px_1fr] gap-8">
                <aside className="h-fit bg-zinc-950 border border-zinc-800 rounded-[10px] p-3 md:sticky md:top-[80px]">
                    <NavLink to="/admin" end className={itemClass}>Dashboard</NavLink>
                    <NavLink to="/admin/tours" className={itemClass}>Tours</NavLink>
                    <NavLink to="/admin/bookings" className={itemClass}>Bookings</NavLink>
                    <NavLink to="/admin/users" className={itemClass}>Users</NavLink>
                </aside>
                <div className="min-w-0"><Outlet /></div>
            </main>
        </div>
    );
}
