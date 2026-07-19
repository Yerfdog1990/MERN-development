import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage.jsx";
import CreatePage from "./pages/CreatePage.jsx";
import NoteDetailPage from "./pages/NoteDetailPage.jsx";
import { Toaster } from "react-hot-toast";

const App = () => {
    return (
        <div data-theme="forest" className="relative min-h-screen w-full">
            {/* Background */}
            <div className="absolute inset-0 -z-10 bg-[radial-gradient(125%_125%_at_50%_10%,#000_60%,#00FF9D40_100%)]" />

            {/* App Routes */}
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/create" element={<CreatePage />} />
                <Route path="/note/:id" element={<NoteDetailPage />} />
            </Routes>

            {/* Toast Notifications */}
            <Toaster position="top-center" />
        </div>
    );
};

export default App;
