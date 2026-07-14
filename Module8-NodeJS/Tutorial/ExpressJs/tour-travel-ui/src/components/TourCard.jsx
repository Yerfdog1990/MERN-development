import { Link } from "react-router-dom";
import Img from "./Img.jsx";
import Stars from "./Stars.jsx";

const FALLBACKS = ["/assets/dest-thailand.png", "/assets/dest-dubai.png", "/assets/dest-turkey.png"];

export default function TourCard({ tour, index = 0 }) {
    return (
        <Link
            to={`/tours/${tour.id}`}
            className="group bg-zinc-900 rounded-[10px] overflow-hidden border border-zinc-800 hover:border-brand transition-colors flex flex-col"
        >
            <div className="h-48 overflow-hidden relative">
                <Img
                    src={tour.imageUrl || FALLBACKS[index % FALLBACKS.length]}
                    alt={tour.name}
                    className="size-full object-cover group-hover:scale-105 transition-transform duration-500"
                    label={tour.destination}
                />
                <span className="absolute top-3 left-3 bg-black/70 text-white text-xs font-bold px-3 py-1 rounded-full">
                    📍 {tour.destination}
                </span>
            </div>
            <div className="p-4 flex flex-col gap-2 flex-1">
                <h3 className="font-bold text-lg text-white leading-tight">{tour.name}</h3>
                <p className="flex items-center gap-2 text-sm text-zinc-400">
                    <Stars rating={tour.ratingsAverage} size="size-4" />
                    {tour.ratingsAverage > 0 ? `${tour.ratingsAverage} (${tour.ratingsCount})` : "New"}
                </p>
                <p className="text-sm text-zinc-400">
                    {tour.durationDays} days · max {tour.maxGroupSize} people · {tour.difficulty}
                </p>
                <p className="mt-auto pt-2 text-white">
                    From <span className="font-bold text-xl text-brand">${tour.price}</span>
                    <span className="text-zinc-400 text-sm"> / person</span>
                </p>
            </div>
        </Link>
    );
}
