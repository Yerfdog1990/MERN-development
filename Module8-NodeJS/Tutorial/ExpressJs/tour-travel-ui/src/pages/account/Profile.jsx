import { useState } from "react";
import { api } from "../../lib/api.js";
import { useAuth } from "../../context/AuthContext.jsx";

function Feedback({ state }) {
    if (!state) return null;
    return <p className={`text-sm font-semibold mt-3 ${state.ok ? "text-emerald-400" : "text-red-400"}`}>{state.msg}</p>;
}

export default function Profile() {
    const { user, setUser } = useAuth();
    const [name, setName] = useState(user?.name || "");
    const [pw, setPw] = useState({ currentPassword: "", newPassword: "" });
    const [nameState, setNameState] = useState(null);
    const [pwState, setPwState] = useState(null);

    async function saveName(e) {
        e.preventDefault();
        try {
            const res = await api.updateMe({ name });
            setUser(res.data);
            setNameState({ ok: true, msg: "Saved!" });
        } catch (err) { setNameState({ ok: false, msg: err.details?.[0]?.message || err.message }); }
    }

    async function savePassword(e) {
        e.preventDefault();
        try {
            await api.updatePassword(pw);
            setPw({ currentPassword: "", newPassword: "" });
            setPwState({ ok: true, msg: "Password updated!" });
        } catch (err) { setPwState({ ok: false, msg: err.details?.[0]?.message || err.message }); }
    }

    return (
        <div>
            <h1 className="font-bold text-3xl text-white mb-6">Profile settings</h1>
            <div className="grid lg:grid-cols-2 gap-6">
                <form onSubmit={saveName} className="bg-zinc-950 border border-zinc-800 rounded-[10px] p-6">
                    <h2 className="font-bold text-white text-lg mb-4">Your details</h2>
                    <div className="flex items-center gap-4 mb-5">
                        <span className="size-16 rounded-full bg-brand text-black flex items-center justify-center font-bold text-2xl">
                            {user?.name[0]?.toUpperCase()}
                        </span>
                        <div>
                            <p className="text-white font-semibold">{user?.email}</p>
                            <p className="text-zinc-500 text-sm capitalize">Role: {user?.role}</p>
                        </div>
                    </div>
                    <label className="block mb-4">
                        <span className="text-zinc-400 text-sm">Full name</span>
                        <input required minLength={2} value={name} onChange={(e) => setName(e.target.value)}
                            className="mt-1 w-full bg-zinc-900 border border-zinc-700 rounded-[8px] px-4 py-2.5 text-white outline-brand" />
                    </label>
                    <button className="bg-brand text-black font-bold px-6 py-2.5 rounded-[10px] hover:brightness-95">Save changes</button>
                    <Feedback state={nameState} />
                </form>

                <form onSubmit={savePassword} className="bg-zinc-950 border border-zinc-800 rounded-[10px] p-6">
                    <h2 className="font-bold text-white text-lg mb-4">Change password</h2>
                    <label className="block mb-4">
                        <span className="text-zinc-400 text-sm">Current password</span>
                        <input required type="password" autoComplete="current-password" value={pw.currentPassword}
                            onChange={(e) => setPw((p) => ({ ...p, currentPassword: e.target.value }))}
                            className="mt-1 w-full bg-zinc-900 border border-zinc-700 rounded-[8px] px-4 py-2.5 text-white outline-brand" />
                    </label>
                    <label className="block mb-4">
                        <span className="text-zinc-400 text-sm">New password (8+ chars, 1 uppercase, 1 number)</span>
                        <input required type="password" autoComplete="new-password" value={pw.newPassword}
                            onChange={(e) => setPw((p) => ({ ...p, newPassword: e.target.value }))}
                            className="mt-1 w-full bg-zinc-900 border border-zinc-700 rounded-[8px] px-4 py-2.5 text-white outline-brand" />
                    </label>
                    <button className="border-2 border-brand text-brand font-bold px-6 py-2.5 rounded-[10px] hover:bg-brand hover:text-black transition">Update password</button>
                    <Feedback state={pwState} />
                </form>
            </div>
        </div>
    );
}
