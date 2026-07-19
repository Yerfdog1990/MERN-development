import mongoose from "mongoose";

// 1 - create schema
const NoteSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
},
    {timestamps: true} // createdAt, updatedAt
);

const Note = mongoose.model("Note", NoteSchema);
export default Note;
// 2 - create model based on schema
// 3 - export model