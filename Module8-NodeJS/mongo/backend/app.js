import express from "express";
import cors from "cors";
import {connectToDB, getDb} from "./db.js";
import {ObjectId} from "mongodb";

// Initialize express app and middleware
const app = express();
app.use(cors());
app.use(express.json());

// db connection
let db;
connectToDB((err) => {
    if (!err) {
        app.listen(3000, () => {
            console.log('Server is running on port 3000');
        })
        db = getDb();
    }
}).then(() => console.log("Connected to database")).catch(err => console.log(err));

// Routes

// Read all books
app.get('/books', (req, res) => {
    // Current page
    const page = parseInt(req.query.page) || 0;
    const booksPerPage = 6;

    let books = [];
    db.collection('books')
        .find()
        .sort({author: 1})
        .skip(page * booksPerPage)
        .limit(booksPerPage)
        .forEach(book => books.push(book))
        .then(() => {
            res.status(200).json(books);
        })
        .catch(() => {
            res.status(500).json({error: 'Could not fetch the documents'});
        });
});

// Read a book by id
app.get('/books/:id', (req, res) => {
    if(ObjectId.isValid(req.params.id)) {
        db.collection("books")
            .findOne({_id: new ObjectId(req.params.id)})
            .then(book => {
                if (book) {
                    res.status(200).json(book);
                } else {
                    res.status(404).json({error: 'Book not found'});
                }
            })
            .catch(() => {
                res.status(500).json({error: 'Could not fetch the document'});
            });
    } else {
        return res.status(400).json({error: 'Invalid book ID'});
    }
});

// Create new book
app.post('/books', (req, res) => {
    const book = req.body;
    db.collection('books')
        .insertOne(book)
        .then(result => {
            res.status(201).json(result);
        })
        .catch(() => {
            res.status(500).json({error: 'Could not a new book'});
        });
});

// Delete book
app.delete('/books/:id', (req, res) => {
    if(ObjectId.isValid(req.params.id)) {
        db.collection("books")
            .deleteOne({_id: new ObjectId(req.params.id)})
            .then(book => {
                if (book) {
                    res.status(200).json(book);
                } else {
                    res.status(404).json({error: 'Book not found'});
                }
            })
            .catch(() => {
                res.status(500).json({error: 'Could not delete the document'});
            });
    } else {
        return res.status(400).json({error: 'Invalid book ID'});
    }
});

// Update book
app.patch('/books/:id', (req, res) => {
    if(ObjectId.isValid(req.params.id)) {
        const updates = req.body;
        delete updates._id; // Remove _id from updates as it's immutable
        db.collection("books")
            .updateOne({_id: new ObjectId(req.params.id)}, {$set: updates})
            .then(result => {
                if (result.matchedCount === 0) {
                    res.status(404).json({error: 'Book not found'});
                } else {
                    res.status(200).json(result);
                }
            })
            .catch(() => {
                res.status(500).json({error: 'Could not update the document'});
            });
    } else {
        return res.status(400).json({error: 'Invalid book ID'});
    }
});
