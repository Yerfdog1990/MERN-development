import { Link } from "react-router-dom";
import Img from "./Img.jsx";

const socials = [
    { name: "Facebook", icon: "/assets/icon-facebook.png", href: "https://facebook.com" },
    { name: "Instagram", icon: "/assets/icon-instagram.png", href: "https://instagram.com" },
    { name: "X", icon: "/assets/icon-x.png", href: "https://x.com" },
    { name: "LinkedIn", icon: "/assets/icon-linkedin.png", href: "https://linkedin.com" },
];

export default function Footer() {
    return (
        <footer className="bg-zinc-950 text-zinc-300 border-t border-zinc-800">
            <div className="max-w-[1240px] mx-auto px-6 py-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
                <div>
                    <p className="font-bold text-white text-xl mb-3">🌍 TourWorld</p>
                    <p className="text-sm leading-relaxed">Extraordinary experiences across breathtaking destinations. Travel beyond measures.</p>
                    <div className="flex gap-4 mt-4">
                        {socials.map((s) => (
                            <a key={s.name} href={s.href} target="_blank" rel="noreferrer" aria-label={s.name} className="hover:scale-110 transition-transform">
                                <Img src={s.icon} alt={s.name} className="size-7 object-contain" label={s.name[0]} />
                            </a>
                        ))}
                    </div>
                </div>
                <div>
                    <p className="font-bold text-white mb-3">Explore</p>
                    <ul className="space-y-2 text-sm">
                        <li><Link to="/tours" className="hover:text-brand">All tours</Link></li>
                        <li><Link to="/tours?difficulty=easy" className="hover:text-brand">Easy getaways</Link></li>
                        <li><Link to="/tours?sort=-ratingsAverage" className="hover:text-brand">Top rated</Link></li>
                        <li><Link to="/tours?sort=price" className="hover:text-brand">Budget friendly</Link></li>
                    </ul>
                </div>
                <div>
                    <p className="font-bold text-white mb-3">Account</p>
                    <ul className="space-y-2 text-sm">
                        <li><Link to="/login" className="hover:text-brand">Login</Link></li>
                        <li><Link to="/register" className="hover:text-brand">Create account</Link></li>
                        <li><Link to="/account" className="hover:text-brand">My bookings</Link></li>
                    </ul>
                </div>
                <div>
                    <p className="font-bold text-white mb-3">Contact</p>
                    <ul className="space-y-2 text-sm">
                        <li><a href="mailto:tourworld@info.com" className="hover:text-brand">tourworld@info.com</a></li>
                        <li>Mon–Fri, 9:00–18:00 EAT</li>
                    </ul>
                </div>
            </div>
            <div className="bg-brand text-black text-center font-bold py-3">
                All rights reserved @tourworld
            </div>
        </footer>
    );
}
