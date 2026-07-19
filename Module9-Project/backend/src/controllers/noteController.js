import Note from "../models/Note.js";

export async function createNote(req, res) {
    try{
        const {title, content} = req.body;

        if (!title || !content) {
            return res.status(400).json({message: "Title and content are required"});
        }

        const newNote = new Note({title, content});
        const savedNote = await newNote.save();
        res.status(201).json(savedNote);
    } catch (error) {
        console.error("Failed to create note", error);
        res.status(500).json({message: "Failed to create note"});
    }
}

export async function getAllNotes(req, res) {
    try {
        const page = parseInt(req.query.page) || 0;
        const notesPerPage = 20;
        const notes = await Note.find()
            .sort({title: 1})
            .skip(page * notesPerPage)
            .limit(notesPerPage);
        res.status(200).json(notes);
    } catch (error){
        console.error("Failed to get all notes", error);
        res.status(500).json({message: "Failed to get all notes"});
    }
}

export async function getNoteById(req, res) {
    try{
        const note = await Note.findById(req.params.id);
        res.status(200).json(note);
    } catch (error) {
        console.error("Failed to get note by ID", error);
        res.status(500).json({message: "Failed to get note by ID"});
    }
}

export async function updateNote(req, res) {
   try{
       const {title, content} = req.body;
       const updatedNote = await Note.findByIdAndUpdate(req.params.id, {title, content}, {new: true});
       if (!updatedNote) {
           return res.status(404).json({message: "Note not found"});
       }
       res.status(200).json(updatedNote);
   } catch (error) {
       console.error("Failed to update note", error);
       res.status(500).json({message: "Failed to update note"});
   }
}

export async function deleteNote (req, res){
    try {
        await Note.findByIdAndDelete(req.params.id);
        res.status(200).json({message: "Note deleted successfully"});
    } catch (error) {
        console.error("Failed to delete note", error);
        res.status(500).json({message: "Failed to delete note"});
    }
}