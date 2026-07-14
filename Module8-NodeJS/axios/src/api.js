// src/api.js
import axios from "axios";
import toast from "react-hot-toast";

const api = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com",
});

const handleError = (error) => {
    if (error.response) {
        const messages = {
            404: "Resource not found",
            500: "Server error. Please try again later.",
        };
        const msg = messages[error.response.status] || `Unexpected error: ${error.response.status}`;
        toast.error(msg, { id: "api-error" });
        return;
    }
    if (error.request) {
        toast.error("No response from server. Check your network connection.", { id: "api-error" });
        return;
    }
    toast.error("Error setting up the request", { id: "api-error" });
};

api.interceptors.response.use(
    (response) => {
        toast.success(`${response.config.method.toUpperCase()} request successful`, { id: "api-success" });
        return response;
    },
    (error) => {
        handleError(error);
        return Promise.reject(error);
    }
);

export default api; // components import this and get error handling for free