import { Routes, Route } from "react-router-dom";
import { RequireAuth, RequireAdmin } from "./components/Protected.jsx";

// Public
import Home from "./pages/Home.jsx";
import Tours from "./pages/Tours.jsx";
import TourDetail from "./pages/TourDetail.jsx";
import Checkout from "./pages/Checkout.jsx";
import Confirmation from "./pages/Confirmation.jsx";
import Login from "./pages/Login.jsx";
import Register from "./pages/Register.jsx";
import NotFound from "./pages/NotFound.jsx";

// User account
import AccountLayout from "./pages/account/AccountLayout.jsx";
import MyBookings from "./pages/account/MyBookings.jsx";
import Profile from "./pages/account/Profile.jsx";

// Admin
import AdminLayout from "./pages/admin/AdminLayout.jsx";
import Dashboard from "./pages/admin/Dashboard.jsx";
import AdminTours from "./pages/admin/AdminTours.jsx";
import AdminBookings from "./pages/admin/AdminBookings.jsx";
import AdminUsers from "./pages/admin/AdminUsers.jsx";

export default function App() {
    return (
        <Routes>
            {/* Public */}
            <Route path="/" element={<Home />} />
            <Route path="/tours" element={<Tours />} />
            <Route path="/tours/:id" element={<TourDetail />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/confirmation" element={<Confirmation />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />

            {/* User account (requires login) */}
            <Route path="/account" element={<RequireAuth><AccountLayout /></RequireAuth>}>
                <Route index element={<MyBookings />} />
                <Route path="profile" element={<Profile />} />
            </Route>

            {/* Admin (requires admin role) */}
            <Route path="/admin" element={<RequireAdmin><AdminLayout /></RequireAdmin>}>
                <Route index element={<Dashboard />} />
                <Route path="tours" element={<AdminTours />} />
                <Route path="bookings" element={<AdminBookings />} />
                <Route path="users" element={<AdminUsers />} />
            </Route>

            <Route path="*" element={<NotFound />} />
        </Routes>
    );
}
