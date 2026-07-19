import NavBar from "../components/NavBar.jsx";
import {useEffect, useState} from "react";
import RateLimitedUI from "../components/RateLimitedUI.jsx";
import NoteCard from "../components/NoteCard.jsx";
import toast from "react-hot-toast";
import api from "../lib/axios.js";
import NotesNotFound from "../components/NotesNotFound.jsx";

const HomePage = () => {
    const [isRateLimited, setIsRateLimited] = useState(false);
    const [notes, setNotes] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchNotes = async () => {
            try {
                const response = await api.get("/notes");
                console.log("Fetched notes:", response.data);
                setNotes(response.data);
                setIsRateLimited(false);
            }catch (error) {
                console.error("Error fetching notes:", error.response);
                if (error.response && error.response.status === 429) {
                    setIsRateLimited(true);
                } else {
                   toast.error("Failed to fetch notes");
                }
            } finally {
                setLoading(false);
            }
        };
        fetchNotes().catch(error => console.error("Unhandled promise rejection:", error));
    }, []);

    return (
        <div className="min-h-screen">
            <NavBar />
            {isRateLimited && <RateLimitedUI />}
            <div className="max-w-7xl mx-auto px-4 mt-6">
                {loading && <div className="text-center text-primary py-10">Loading...</div>}
                {notes.length === 0 && !isRateLimited && <NotesNotFound />}
                {notes.length > 0 && !isRateLimited && (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {notes.map((note) => (
                            <NoteCard key={note._id} note={note} setNotes={setNotes}/>
                        ))}
                    </div>
                )}
            </div>
        </div>
    )
}

export default HomePage