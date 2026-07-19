import { Link } from "react-router-dom";
import { Pencil, Trash } from "lucide-react";
import { formatDate } from "../lib/utils";
import api from "../lib/axios.js";
import toast from "react-hot-toast";

const NoteCard = ({note, setNotes}) => {
    const handleDelete = async (e, id) => {
        e.preventDefault(); // get rid of the navigation behavior
        if(!window.confirm("Are you sure you want to delete this note?")) return;

        try {
            await api.delete(`/notes/${id}`);
            toast.success("Note deleted successfully");
            setNotes(prevNotes => prevNotes.filter(note => note._id !== id)); // get rid of the deleted note
        } catch (error) {
            console.error("Error deleting note:", error);
            toast.error("Failed to delete note");
        }
    }
    return (
        <Link to={`/note/${note._id}`} className="card bg-base-100 hover:shadow-lg transition-all duration-200 border-t-4 border-solid border-[#00FF9D]">
            <div className="card-body">
                <h3 className="card-title text-base-content">{note.title}</h3>
                <p className="text-base-content/70 line-clamp-3">{note.content}</p>
                <span className="text-sm text-base-content/60">{formatDate(note.createdAt)}</span>
                <div className="flex items-center gap-1">
                    <Pencil className="size-4" />
                    <button className="btn btn-ghost btn-error btn-xs" onClick={(e)=>handleDelete(e, note._id)}>
                        <Trash className="size-4" />
                    </button>
                </div>
            </div>
        </Link>
    )
}

export default NoteCard