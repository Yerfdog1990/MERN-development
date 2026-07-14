import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext.jsx";
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";

export default function Login() {
    const { login } = useAuth();
    const navigate = useNavigate();
    const { state } = useLocation();
    const [form, setForm] = useState({ email: "", password: "" });
    const [error, setError] = useState(null);
    const [busy, setBusy] = useState(false);

    async function submit(e) {
        e.preventDefault();
        setBusy(true); setError(null);
        try {
            const user = await login(form.email, form.password);
            navigate(state?.from || (user.role === "admin" ? "/admin" : "/account"), { replace: true });
        } catch (err) {
            setError(err.message); setBusy(false);
        }
    }

    return (
        <div className="bg-black min-h-screen flex flex-col">
            <Navbar />
            <main className="flex-1 grid place-items-center px-6 py-16">
                <form onSubmit={submit} className="w-full max-w-sm bg-zinc-950 border border-zinc-800 rounded-[10px] p-8">
                    <h1 className="font-bold text-3xl text-white mb-6">Welcome back</h1>
                    <label className="block mb-4">
                        <span className="text-zinc-400 text-sm">Email</span>
                        <input required type="email" autoComplete="email" value={form.email}
                            onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
                            className="mt-1 w-full bg-zinc-900 border border-zinc-700 rounded-[8px] px-4 py-3 text-white outline-brand" />
                    </label>
                    <label className="block mb-5">
                        <span className="text-zinc-400 text-sm">Password</span>
                        <input required type="password" autoComplete="current-password" value={form.password}
                            onChange={(e) => setForm((f) => ({ ...f, password: e.target.value }))}
                            className="mt-1 w-full bg-zinc-900 border border-zinc-700 rounded-[8px] px-4 py-3 text-white outline-brand" />
                    </label>
                    {error && <p className="text-red-400 text-sm mb-4 font-semibold">{error}</p>}
                    <button disabled={busy} className="w-full bg-brand text-black font-bold text-lg py-3 rounded-[10px] hover:brightness-95 disabled:opacity-60 transition">
                        {busy ? "Logging in…" : "Login"}
                    </button>
                    <p className="text-zinc-400 text-sm mt-5 text-center">
                        No account? <Link to="/register" className="text-brand font-bold hover:underline">Sign up</Link>
                    </p>
                </form>
            </main>
            <Footer />
        </div>
    );
}
