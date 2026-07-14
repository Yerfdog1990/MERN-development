import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../context/AuthContext.jsx";

/** Route guards. Wait for the initial session check to avoid redirect flicker. */
export function RequireAuth({ children }) {
    const { user, ready } = useAuth();
    const location = useLocation();
    if (!ready) return null;
    if (!user) return <Navigate to="/login" state={{ from: location.pathname }} replace />;
    return children;
}

export function RequireAdmin({ children }) {
    const { user, ready, isAdmin } = useAuth();
    if (!ready) return null;
    if (!user) return <Navigate to="/login" state={{ from: "/admin" }} replace />;
    if (!isAdmin) return <Navigate to="/account" replace />;
    return children;
}
