import { useState } from "react";

/**
 * <img> with a graceful fallback: if the asset is missing (e.g. before
 * download-assets.sh has been run), renders a subtle gradient placeholder
 * with an optional label instead of a broken image icon.
 */
export default function Img({ src, alt = "", className = "", label }) {
    const [failed, setFailed] = useState(false);

    if (failed) {
        return (
            <div
                className={`${className} bg-gradient-to-br from-zinc-700 via-zinc-800 to-zinc-900 flex items-center justify-center`}
                aria-label={alt}
            >
                {label && <span className="text-zinc-500 text-sm font-semibold">{label}</span>}
            </div>
        );
    }
    return (
        <img
            src={src}
            alt={alt}
            className={className}
            onError={() => setFailed(true)}
            loading="lazy"
        />
    );
}
