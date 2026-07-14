import { useEffect, useState } from "react";
import { api } from "../../lib/api.js";
import { useAuth } from "../../context/AuthContext.jsx";

export default function AdminUsers() {
    const { user: me } = useAuth();
    const [users, setUsers] = useState([]);
    const [error, setError] = useState(null);

    async function load() {
        try { setUsers((await api.listUsers()).data); }
        catch (e) { setError(e.message); }
    }
    useEffect(() => { load(); }, []);

    async function toggleRole(u) {
        const role = u.role === "admin" ? "user" : "admin";
        if (!confirm(`Change ${u.name}'s role to ${role}?`)) return;
        try { await api.setUserRole(u.id, role); await load(); }
        catch (e) { alert(e.message); }
    }

    async function toggleActive(u) {
        if (!confirm(`${u.active ? "Deactivate" : "Reactivate"} ${u.name}?`)) return;
        try { await api.setUserActive(u.id, !u.active); await load(); }
        catch (e) { alert(e.message); }
    }

    return (
        <div>
            <h1 className="font-bold text-3xl text-white mb-6">Users</h1>
            {error && <p className="text-red-400 font-semibold mb-4">{error}</p>}

            <div className="overflow-x-auto bg-zinc-950 border border-zinc-800 rounded-[10px]">
                <table className="w-full text-sm">
                    <thead>
                        <tr className="text-zinc-500 text-left border-b border-zinc-800">
                            <th className="p-3">Name</th><th className="p-3">Email</th><th className="p-3">Role</th>
                            <th className="p-3">Status</th><th className="p-3">Joined</th><th className="p-3"></th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((u) => (
                            <tr key={u.id} className={`border-b border-zinc-900 text-zinc-300 ${!u.active ? "opacity-50" : ""}`}>
                                <td className="p-3 font-semibold text-white">{u.name}{u.id === me.id && <span className="text-zinc-500 font-normal"> (you)</span>}</td>
                                <td className="p-3">{u.email}</td>
                                <td className="p-3">
                                    <span className={`px-2 py-0.5 rounded-full text-xs font-bold text-white ${u.role === "admin" ? "bg-red-700" : "bg-blue-700"}`}>{u.role}</span>
                                </td>
                                <td className="p-3">{u.active ? "active" : "deactivated"}</td>
                                <td className="p-3">{u.createdAt.slice(0, 10)}</td>
                                <td className="p-3 whitespace-nowrap">
                                    {u.id !== me.id && (
                                        <>
                                            <button onClick={() => toggleRole(u)} className="text-brand font-semibold hover:underline mr-3">
                                                Make {u.role === "admin" ? "user" : "admin"}
                                            </button>
                                            <button onClick={() => toggleActive(u)} className="text-red-400 font-semibold hover:underline">
                                                {u.active ? "Deactivate" : "Reactivate"}
                                            </button>
                                        </>
                                    )}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
