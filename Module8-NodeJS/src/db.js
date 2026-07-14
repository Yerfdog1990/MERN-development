import {MongoClient} from "mongodb";

let dbConnection;
let uri = "mongodb+srv://booksdb:Cyrek%402024@books.ptjxwtv.mongodb.net/?appName=Books";

export const connectToDB = (cb) => {
    return MongoClient.connect(uri)
        .then(client => {
            dbConnection = client.db('books')
            return cb()
        })
        .catch (error => {
        console.log(error)
            return cb(error)
    })
};

export const getDb = () => {
    return dbConnection;
};


