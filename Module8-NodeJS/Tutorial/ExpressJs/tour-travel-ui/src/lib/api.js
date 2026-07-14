/**
 * Thin client for the tour-travel-api backend.
 * All paths are relative — Vite's dev server proxies /api and /uploads
 * to http://localhost:3000 (see vite.config.js).
 * A JWT (if logged in) is attached as a Bearer header on every request.
 */
const BASE = "/api/v1";
const TOKEN_KEY = "tw_token";

export const tokenStore = {
    get: () => localStorage.getItem(TOKEN_KEY),
    set: (t) => localStorage.setItem(TOKEN_KEY, t),
    clear: () => localStorage.removeItem(TOKEN_KEY),
};

async function request(path, { headers = {}, ...options } = {}) {
    const token = tokenStore.get();
    const res = await fetch(`${BASE}${path}`, {
        headers: {
            ...(options.body instanceof FormData ? {} : { "Content-Type": "application/json" }),
            ...(token ? { Authorization: `Bearer ${token}` } : {}),
            ...headers,
        },
        ...options,
    });
    const body = res.status === 204 ? null : await res.json();
    if (!res.ok) {
        const error = new Error(body?.message || `Request failed (${res.status})`);
        error.status = res.status;
        error.details = body?.errors;
        throw error;
    }
    return body;
}

export const api = {
    // public
    listTours: (query = "") => request(`/tours${query}`),
    getTour: (id) => request(`/tours/${id}`),
    getTourStats: () => request(`/tours/stats`),
    createBooking: (data) => request(`/bookings`, { method: "POST", body: JSON.stringify(data) }),
    // auth
    register: (data) => request(`/auth/register`, { method: "POST", body: JSON.stringify(data) }),
    login: (data) => request(`/auth/login`, { method: "POST", body: JSON.stringify(data) }),
    me: () => request(`/auth/me`),
    updateMe: (data) => request(`/users/me`, { method: "PATCH", body: JSON.stringify(data) }),
    updatePassword: (data) => request(`/users/me/password`, { method: "PATCH", body: JSON.stringify(data) }),
    // user
    myBookings: (query = "") => request(`/bookings/mine${query}`),
    cancelBooking: (id) => request(`/bookings/${id}/cancel`, { method: "PATCH" }),
    // admin
    listBookings: (query = "") => request(`/bookings${query}`),
    getBookingStats: () => request(`/bookings/stats`),
    createTour: (data) => request(`/tours`, { method: "POST", body: JSON.stringify(data) }),
    updateTour: (id, data) => request(`/tours/${id}`, { method: "PATCH", body: JSON.stringify(data) }),
    deleteTour: (id) => request(`/tours/${id}`, { method: "DELETE" }),
    uploadTourImage: (id, file) => {
        const fd = new FormData();
        fd.append("image", file);
        return request(`/tours/${id}/image`, { method: "POST", body: fd });
    },
    listUsers: () => request(`/users`),
    setUserRole: (id, role) => request(`/users/${id}/role`, { method: "PATCH", body: JSON.stringify({ role }) }),
    setUserActive: (id, active) => request(`/users/${id}/active`, { method: "PATCH", body: JSON.stringify({ active }) }),
};
