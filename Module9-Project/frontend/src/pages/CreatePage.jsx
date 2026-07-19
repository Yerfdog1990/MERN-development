import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ArrowLeftIcon, Skull } from "lucide-react";
import toast from "react-hot-toast";
import api from "../lib/axios.js";


const CreatePage = () => {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!title.trim() || !content.trim()) {
            toast.error("Title and content are required");
            return;
        }
        setLoading(true);
        try{
            await api.post("/notes", {
                title,
                content
            })
            toast.success("Note create successfully!")
            navigate("/")
        } catch (error) {
            console.log("Error in creating note ", error);
            if(error.response?.status === 429){
                toast.error("Slow down! You are creating notes too fast", {
                    duration: 5000,
                    icon: <Skull className="size-4" />
                });
            } else if (error.response?.status === 400) {
                toast.error(error.response.data.message || "Title and content are required");
            } else {
                toast.error("Failed to create note");
            }
        } finally {
            setLoading(false);
        }
    }
  return (
    <div className={"min-h-screen bg-base-200"}>
      <div className={"container mx-auto px-4 py-8"}>
        <div className={"max-w-2xl mx-auto"}>
            <Link to="/" className="btn btn-ghost mb-6">
                <ArrowLeftIcon className="size-4" />
                Back to Notes
            </Link>
            <div className={"card bg-base-100 hover:shadow-lg transition-all duration-200 border-t-4 border-solid border-[#00FF9D]"}>
                <div className={"card-body"}>
                    <h2 className={"card-title text-2xl mb-4"}>Create a New Note</h2>
                    <form onSubmit={handleSubmit}>
                        <div className={"form-control mb-4"}>
                            <label className={"label"}>
                                <span className={"label-text"}>Title</span>
                            </label><br/>
                            <input type="text"
                                   placeholder={"Enter note title"}
                                   className={"input input-bordered"}
                                   value={title}
                                   onChange={(e) => setTitle(e.target.value)}
                            />
                        </div>
                        <div className={"form-control mb-4"}>
                            <label className={"label"}>Content</label><br/>
                            <textarea
                            placeholder={"Enter note content"}
                            className={"textarea textarea-bordered h-32"}
                            value={content}
                            onChange={(e) => setContent(e.target.value)}
                            />
                        </div>
                        <div className={"card-actions justify-end"}>
                            <button type={"submit"} className={"btn btn-primary"} disabled={loading}>
                                {loading ? "Creating..." : "Create Note"}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default CreatePage