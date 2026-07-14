import { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext.jsx";
import Img from "./Img.jsx";

const links = [
    { to: "/", label: "Home" },
    { to: "/tours", label: "Tours" },
    { to: "/#about", label: "About" },
    { to: "/#reviews", label: "Reviews" },
];

export default function Navbar({ overlay = false }) {
    const { user, isAdmin, logout } = useAuth();
    const navigate = useNavigate();
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header className={`${overlay ? "absolute" : "sticky"} top-0 inset-x-0 z-30 bg-black ${overlay ? "rounded-b-[50px]" : "border-b border-zinc-800"}`}>
            <div className="h-[80px] flex items-center px-5 lg:px-10 max-w-[1400px] mx-auto">
                <Link to="/" className="flex items-center gap-2 shrink-0" aria-label="TourWorld home">
                    <Img src="/assets/icon-earth.png" alt="" className="size-10 lg:size-12" label="🌍" />
                    <span className="font-bold text-xl text-white hidden sm:inline">TourWorld</span>
                </Link>

                <nav className="hidden md:flex items-center gap-8 lg:gap-12 ml-10">
                    {links.map((l) => (
                        <NavLink
                            key={l.label}
                            to={l.to}
                            className={({ isActive }) =>
                                `font-bold text-lg transition-colors ${isActive && !l.to.includes("#") ? "text-brand" : "text-white hover:text-brand"}`
                            }
                        >
                            {l.label}
                        </NavLink>
                    ))}
                </nav>

                <div className="ml-auto flex items-center gap-3">
                    {!user ? (
                        <>
                            <Link to="/login" className="bg-white text-black font-bold px-4 py-1.5 rounded-[10px] hover:bg-brand transition-colors">Login</Link>
                            <Link to="/register" className="bg-brand text-black font-bold px-4 py-1.5 rounded-[10px] hover:brightness-95 transition">Sign Up</Link>
                        </>
                    ) : (
                        <div className="relative">
                            <button
                                onClick={() => setMenuOpen((o) => !o)}
                                className="flex items-center gap-2 text-white font-bold hover:text-brand"
                            >
                                <span className="size-8 rounded-full bg-brand text-black flex items-center justify-center font-bold">
                                    {user.name[0]?.toUpperCase()}
                                </span>
                                <span className="hidden sm:inline">{user.name.split(" ")[0]}</span>
                                {isAdmin && <span className="text-[10px] bg-red-700 px-2 py-0.5 rounded-full">admin</span>}
                                ▾
                            </button>
                            {menuOpen && (
                                <div className="absolute right-0 mt-2 w-48 bg-white text-black rounded-[10px] shadow-xl overflow-hidden" onClick={() => setMenuOpen(false)}>
                                    <Link to="/account" className="block px-4 py-2.5 hover:bg-zinc-100 font-semibold">My bookings</Link>
                                    <Link to="/account/profile" className="block px-4 py-2.5 hover:bg-zinc-100 font-semibold">Profile</Link>
                                    {isAdmin && <Link to="/admin" className="block px-4 py-2.5 hover:bg-zinc-100 font-semibold">Admin area</Link>}
                                    <button
                                        onClick={() => { logout(); navigate("/"); }}
                                        className="block w-full text-left px-4 py-2.5 hover:bg-zinc-100 font-semibold text-red-700"
                                    >
                                        Logout
                                    </button>
                                </div>
                            )}
                        </div>
                    )}
                </div>
            </div>
        </header>
    );
}
