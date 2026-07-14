import { createContext, useContext, useEffect, useState } from "react";
import { api, tokenStore } from "../lib/api.js";

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
    const [user, setUser] = useState(null);
    const [ready, setReady] = useState(false); // true once the initial /me check finishes

    // Restore session on page load
    useEffect(() => {
        (async () => {
            if (tokenStore.get()) {
                try {
                    const res = await api.me();
                    setUser(res.data);
                } catch {
                    tokenStore.clear();
                }
            }
            setReady(true);
        })();
    }, []);

    async function login(email, password) {
        const res = await api.login({ email, password });
        tokenStore.set(res.token);
        setUser(res.data);
        return res.data;
    }

    async function register(name, email, password) {
        const res = await api.register({ name, email, password });
        tokenStore.set(res.token);
        setUser(res.data);
        return res.data;
    }

    function logout() {
        tokenStore.clear();
        setUser(null);
    }

    return (
        <AuthContext.Provider value={{ user, setUser, ready, login, register, logout, isAdmin: user?.role === "admin" }}>
            {children}
        </AuthContext.Provider>
    );
}

export const useAuth = () => useContext(AuthContext);
