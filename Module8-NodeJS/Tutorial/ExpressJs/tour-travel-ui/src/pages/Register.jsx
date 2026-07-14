import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext.jsx";
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";

export default function Register() {
    const { register } = useAuth();
    const navigate = useNavigate();
    const [form, setForm] = useState({ name: "", email: "", password: "", confirm: "" });
    const [error, setError] = useState(null);
    const [details, setDetails] = useState(null);
    const [busy, setBusy] = useState(false);

    const set = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));

    async function submit(e) {
        e.preventDefault();
        if (form.password !== form.confirm) { setError("Passwords do not match"); return; }
        setBusy(true); setError(null); setDetails(null);
        try {
            await register(form.name, form.email, form.password);
            navigate("/account", { replace: true });
        } catch (err) {
            setError(err.message); setDetails(err.details); setBusy(false);
        }
    }

    return (
        <div className="bg-black min-h-screen flex flex-col">
            <Navbar />
            <main className="flex-1 grid place-items-center px-6 py-16">
                <form onSubmit={submit} className="w-full max-w-sm bg-zinc-950 border border-zinc-800 rounded-[10px] p-8">
                    <h1 className="font-bold text-3xl text-white mb-6">Create account</h1>
                    {[
                        ["name", "Full name", "text", "name"],
                        ["email", "Email", "email", "email"],
                        ["password", "Password (8+ chars, 1 uppercase, 1 number)", "password", "new-password"],
                        ["confirm", "Confirm password", "password", "new-password"],
                    ].map(([key, label, type, ac]) => (
                        <label key={key} className="block mb-4">
                            <span className="text-zinc-400 text-sm">{label}</span>
                            <input required type={type} autoComplete={ac} value={form[key]} onChange={set(key)}
                                className="mt-1 w-full bg-zinc-900 border border-zinc-700 rounded-[8px] px-4 py-3 text-white outline-brand" />
                        </label>
                    ))}
                    {error && (
                        <div className="text-red-400 text-sm mb-4 font-semibold">
                            <p>{error}</p>
                            {details?.map((d) => <p key={d.field + d.message}>• {d.message}</p>)}
                        </div>
                    )}
                    <button disabled={busy} className="w-full bg-brand text-black font-bold text-lg py-3 rounded-[10px] hover:brightness-95 disabled:opacity-60 transition">
                        {busy ? "Creating account…" : "Sign up"}
                    </button>
                    <p className="text-zinc-400 text-sm mt-5 text-center">
                        Already have one? <Link to="/login" className="text-brand font-bold hover:underline">Login</Link>
                    </p>
                </form>
            </main>
            <Footer />
        </div>
    );
}
