import { Link } from "react-router-dom";
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";

export default function NotFound() {
    return (
        <div className="bg-black min-h-screen flex flex-col">
            <Navbar />
            <main className="flex-1 grid place-items-center text-center px-6 py-16">
                <div>
                    <p className="font-hero text-8xl text-brand">404</p>
                    <h1 className="font-bold text-3xl text-white mt-2">Looks like this destination doesn’t exist</h1>
                    <p className="text-zinc-400 mt-2">The page you’re looking for was moved, removed, or never packed its bags.</p>
                    <div className="flex gap-4 justify-center mt-8">
                        <Link to="/" className="bg-brand text-black font-bold px-6 py-3 rounded-[10px]">Back home</Link>
                        <Link to="/tours" className="border-2 border-zinc-700 text-white font-bold px-6 py-3 rounded-[10px] hover:border-brand">Browse tours</Link>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}
