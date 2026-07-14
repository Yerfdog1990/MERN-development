# MongoDB Tutorial — Part 1: Fundamentals & the Shell

*(Covers tutorials #1–16: concepts, installation, Compass, mongosh CRUD, operators, drivers, and connecting from Node. Continued in `mongodb-api-notes.md` — Part 2: cursors, CRUD endpoints, Postman, pagination, indexes, Atlas.)*

## 1. What Is MongoDB?

- A **database** for storing app data (users, blog posts, etc.), and specifically a **NoSQL database** — you don't use SQL commands to interact with it.

### SQL (relational) vs NoSQL (MongoDB)

| | SQL (e.g., MySQL) | MongoDB (NoSQL) |
|---|---|---|
| Structure | **Tables** with rows and columns | **Collections** of **documents** |
| Record | Row in a table | Document (JSON-like object) |
| Property | Column | Field (key-value pair) |
| Relationships | Separate related tables (e.g., authors ↔ books, one-to-many) | Nested/embedded documents OR separate collections |
| Query language | SQL: `SELECT * FROM authors` | Methods: `db.authors.find()` |

### Why collections + documents can be nicer

1. **Feels like JavaScript** — documents look like JSON objects with key-value pairs.
2. **Nested documents** — a book document can embed its author (`author: { name, email, role }`) instead of joining two tables (a separate collection still remains an option).
3. Flexible structure, simple read/write methods, and **high-speed performance**.

---

## 2. Collections & Documents

- A database holds many **collections** (Users, Blog Posts, Comments) — each collection groups one type of data.
- **Documents** are the individual records inside a collection. They look like JSON but are stored as **BSON (binary JSON)**; you get JSON objects back when fetching.

```json
{
  "title": "My first blog post",
  "author": "Yoshi",
  "tags": ["video games", "reviews"],
  "upvotes": 20,
  "body": "Lorem ipsum...",
  "_id": ObjectId("ai5eg8H9Pk12")
}
```

- Every document gets a unique **`_id`** of type **ObjectId**, assigned automatically by MongoDB on creation — you can query by it directly. (Part 2 §2 shows how to handle ObjectIds in code with `ObjectId.isValid()` / `new ObjectId()`.)
- Field values can be strings, numbers, booleans, arrays — or **nested (embedded) documents** / arrays of them:

```json
{
  "title": "My first blog post",
  "author": {
    "name": "Yoshi",
    "email": "yoshi@netninja.dev",
    "role": "Game Reviewer"
  },
  "tags": ["video games", "reviews"],
  "upvotes": 20
}
```

---

## 3. Installation

Two options: a hosted service (**MongoDB Atlas**, free tier, no install — covered in Part 2 §9) or a **local install** (Community Server), used throughout Part 1.

### Windows

1. Download **Community Server** from mongodb.com/download → run installer → Complete → check **"Install MongoDB as a Service"** → check **"Install MongoDB Compass"** (the GUI).
2. The Community install does NOT include the shell — download **mongosh** separately from the Tools page and install it.
3. Verify: open any terminal → `mongosh` → you should enter the interactive shell.
4. If Compass can't connect: Windows → Services → find **MongoDB Server** → ensure status is **Running**.

### macOS (Homebrew)

```bash
xcode-select --install                 # Xcode command-line tools (Homebrew prerequisite)
brew tap mongodb/brew                  # official MongoDB formula
brew update
brew install mongodb-community@7.0    # installs mongod, mongos, mongosh + Database Tools
```

> **Newer Homebrew gotcha (from a real install):** brew may refuse with
> `Error: Refusing to load formula ... from untrusted tap mongodb/brew.`
> Fix: `brew trust mongodb/brew`, then rerun the install.

Installed binaries: `mongod` (server), `mongos` (sharded-cluster router), `mongosh` (shell). Key file locations:

| | Intel | Apple Silicon |
|---|---|---|
| config | `/usr/local/etc/mongod.conf` | `/opt/homebrew/etc/mongod.conf` |
| logs | `/usr/local/var/log/mongodb` | `/opt/homebrew/var/log/mongodb` |
| data | `/usr/local/var/mongodb` | `/opt/homebrew/var/mongodb` |

**Run it** (as a macOS service — recommended, sets ulimits correctly):

```bash
brew services start mongodb-community@7.0
brew services stop mongodb-community@7.0
brew services list                       # verify: should show "started"

# or manually in the background:
mongod --config /usr/local/etc/mongod.conf --fork
```

**Connect:**

```bash
mongosh
# → connects to mongodb://127.0.0.1:27017
```

Notes:

- Default binding is **localhost only** (`bindIp: 127.0.0.1`) — remote clients can't connect unless configured (secure first!).
- Fresh install warning: *"Access control is not enabled"* — fine locally; enable auth for anything exposed.
- Pre-made databases you'll see: `admin`, `config`, `local` (~startup logs).

---

## 4. MongoDB Compass (GUI)

Compass visualizes databases → collections → documents, and lets you add/edit/delete/filter data. You'll mostly use the shell/code, but Compass is great for learning and inspection.

- **Connect:** for a local install just click **Connect** with no connection string (a connection string is a special MongoDB URL — needed for Atlas/hosted clusters, see Part 2 §9).
- **Create a database:** ➕ icon → database name (e.g., `bookstore`) + first collection name (e.g., `books`).
- **Insert documents:** Add Data → Insert Document. Delete the pre-filled `_id` if you like — MongoDB adds one anyway. Insert **multiple** by pasting an **array** of objects.
- **Edit/delete:** hover a document → pencil / trash icons.
- **Filter bar:** enter a filter object like `{ rating: 9 }` → Find.
- **Export/import a collection:** Export Collection → JSON/CSV (handy backup before practicing deletes); Add Data → Import File to restore. The CSV import dialog lets you set per-field **types** (ObjectId, String, Int32, Double, arrays, Mixed).
- Compass also has an **embedded mongosh** tab.

---

## 5. The MongoDB Shell (mongosh) — Basics

```bash
mongosh          # enter the shell
```

| Command | Meaning |
|---|---|
| `show dbs` | List all databases |
| `use bookstore` | Switch database (works even if it doesn't exist yet — created on first write) |
| `db` | Show current database |
| `show collections` | List collections in the current db |
| `db.createCollection("name")` | Manually create a collection |
| `db.<coll>.drop()` | Delete a collection |
| `db.dropDatabase()` | Delete the current database |
| `var name = "yoshi"` | JS variables work (mongosh is a JS interface) |
| `cls` | Clear screen |
| `help` | List commands |
| `exit` | Leave the shell |

> A database/collection doesn't need to exist before you write to it — inserting a document implicitly creates both.

---

## 6. Create — Inserting Documents

```js
use bookstore

// single document — MongoDB auto-generates _id
db.books.insertOne({
  title: "The Color of Magic",
  author: "Terry Pratchett",
  pages: 300,
  rating: 7,
  genres: ["fantasy", "magic"]
})
// → { acknowledged: true, insertedId: ObjectId("...") }

// many documents — pass an ARRAY
db.books.insertMany([
  { title: "Effective Java", author: "Joshua Bloch", pages: 416, genre: "Java Programming", rating: 4.9 },
  { title: "Head First Java", author: "Kathy Sierra", pages: 688, genre: "Java Programming", rating: 4.8 },
  { title: "Clean Code", author: "Robert C. Martin", pages: 464, genre: "Software Engineering", rating: 4.9 }
])
```

Inserting into a nonexistent collection (e.g., `db.authors.insertOne({...})`) creates that collection automatically.

*(API equivalent: `POST /books` → `insertOne(req.body)` — Part 2 §4.)*

---

## 7. Read — Finding Documents

```js
db.books.find()                          // all docs (shell prints first 20; type "it" to iterate more)
db.books.find({ author: "Terry Pratchett" })          // filter
db.books.find({ author: "Terry Pratchett", rating: 7 }) // multiple criteria (AND)
db.books.findOne({ _id: ObjectId("6a545993fb7d11ce20035372") }) // single doc (first match)
```

> The auto-printing is **shell-only behavior**. In application code `find()` returns a **cursor** you must drain with `.toArray()` or `.forEach()` — Part 2 §1.

### Projection — choose which fields come back (2nd argument)

```js
db.books.find({ author: "Brandon Sanderson" }, { title: 1, author: 1 })
db.books.find({}, { title: 1, author: 1 })   // empty filter + projection = all docs, 2 fields
// _id always comes back unless excluded: { title: 1, _id: 0 }
```

### Sorting, limiting, counting — method chaining

```js
db.books.find().count()                        // count results (also: countDocuments)
db.books.find({ author: "Brandon Sanderson" }).count()
db.books.find().limit(3)                       // max 3 docs
db.books.find().sort({ title: 1 })             // 1 = ascending, -1 = descending
db.books.find().sort({ title: 1 }).limit(3)    // chain them
db.books.find().skip(10).limit(5)              // skip + limit = the basis of pagination (Part 2 §7)
```

*(API equivalents: `GET /books` and `GET /books/:id` — Part 2 §1–2.)*

---

## 8. Operators & Complex Queries

Operators start with **`$`**.

### Comparison

```js
db.books.find({ rating: { $gt: 7 } })    // greater than (excludes 7)
db.books.find({ rating: { $lt: 8 } })    // less than
db.books.find({ rating: { $gte: 8 } })   // greater than or equal
db.books.find({ rating: { $lte: 8 } })   // less than or equal
db.books.find({ rating: { $gte: 18, $lte: 30 } }) // range
db.books.find({ rating: { $gt: 7 }, author: "Patrick Rothfuss" }) // combine with other filters
```

Also: `$eq` (equal), `$ne` (not equal).

### Logical — `$or`

`$or` takes an **array of filters**; a document matches if ANY filter matches:

```js
db.books.find({ $or: [{ rating: 7 }, { rating: 9 }] })
db.books.find({ $or: [{ rating: 7 }, { author: "Terry Pratchett" }] })
db.books.find({ $or: [{ pages: { $lt: 300 } }, { pages: { $gt: 400 } }] })
```

Also: `$and`, `$not`.

### `$in` / `$nin` — value within (or not within) a list

```js
db.books.find({ rating: { $in: [7, 8, 9] } })   // rating is 7 OR 8 OR 9 (shorter than $or)
db.books.find({ rating: { $nin: [7, 8] } })     // rating is anything EXCEPT 7 or 8
```

### Element & evaluation

```js
db.users.find({ email: { $exists: true, $regex: /^admin/ } }) // field exists + regex (like SQL LIKE)
```

---

## 9. Querying Arrays & Nested Documents

Given `genres: ["fantasy", "magic"]` and `reviews: [{ name, body }, ...]`:

```js
// element membership — "fantasy" is somewhere in the genres array
db.books.find({ genres: "fantasy" })

// EXACT array match — genres is exactly ["fantasy"] (or exactly ["fantasy","magic"])
db.books.find({ genres: ["fantasy"] })
db.books.find({ genres: ["fantasy", "magic"] })

// $all — array must CONTAIN all listed values (extra genres allowed)
db.books.find({ genres: { $all: ["fantasy", "sci-fi"] } })

// nested documents — dot notation (quote the path)
db.books.find({ "reviews.name": "luigi" })  // any book with a review by luigi
```

### Nested (embedded) documents — design notes

- Embedding reviews inside a book = **one query** fetches book + reviews → better read performance than a separate `reviews` collection referencing books by id (which needs two queries).
- If an array could grow huge, use a **hybrid**: store only the latest few reviews on the book document and keep the full set in a separate collection fetched on demand.

```js
db.books.insertOne({
  title: "The Way of Kings",
  author: "Brandon Sanderson",
  rating: 9,
  pages: 400,
  genres: ["fantasy"],
  reviews: [
    { name: "yoshi", body: "great book" },
    { name: "mario", body: "so so" }
  ]
})
```

---

## 10. Delete — Removing Documents

```js
// single — best done by unique _id
db.books.deleteOne({ _id: ObjectId("...") })
// → { acknowledged: true, deletedCount: 1 }

// many — everything matching the filter
db.books.deleteMany({ author: "Terry Pratchett" })
// → { acknowledged: true, deletedCount: 2 }
```

Tip: **export the collection from Compass first** when practicing deletes, then re-import.

*(API equivalent: `DELETE /books/:id` → `deleteOne` — Part 2 §5.)*

---

## 11. Update — Modifying Documents

Both methods take **(filter, update)**:

```js
// update one — $set changes/creates fields
db.books.updateOne(
  { _id: ObjectId("...") },
  { $set: { rating: 8, pages: 360 } }
)
// → { modifiedCount: 1 }

// update many — e.g., fix an author typo everywhere
db.books.updateMany(
  { author: "Terry Pratchett" },
  { $set: { author: "Terry Pratchet" } }
)
```

### Update operators

```js
// $inc — increment (or decrement with a negative) without knowing current value
db.books.updateOne({ _id: ObjectId("...") }, { $inc: { pages: 2 } })
db.books.updateOne({ _id: ObjectId("...") }, { $inc: { pages: -2 } })

// $push — add an item to an array | $pull — remove an item from an array
db.books.updateOne({ _id: ObjectId("...") }, { $push: { genres: "fantasy" } })
db.books.updateOne({ _id: ObjectId("...") }, { $pull: { genres: "fantasy" } })

// $each — push multiple items at once
db.books.updateOne(
  { _id: ObjectId("...") },
  { $push: { genres: { $each: ["gen1", "gen2"] } } }
)
```

*(API equivalent: `PATCH /books/:id` → `updateOne` + `$set` — Part 2 §6.)*

---

## 12. Aggregation (Preview)

For grouping/analytics, `aggregate()` runs data through pipeline stages:

```js
db.books.aggregate([
  { $match: { genre: "Java Programming" } },            // filter
  { $group: { _id: "$author", avgRating: { $avg: "$rating" }, total: { $sum: 1 } } },
  { $sort: { avgRating: -1 } }
])
```

Related tools covered in depth in Part 2: `createIndex` / `explain("executionStats")` (§8 Indexes) and `db.serverStatus()` for server health.

---

## 13. MongoDB Drivers — Connecting from Node.js

- Shell/Compass = language-agnostic learning tools. Real apps talk to MongoDB through a **driver** — language-specific bindings (Node, Python, Ruby, PHP...). Docs: mongodb.com → Resources → Drivers.
- ODMs like **Mongoose** (schema enforcement) and **Prisma** sit on top of the driver.

### Project setup (Express API)

```bash
npm init -y
npm install express mongodb        # mongodb = the official Node driver
npm install -g nodemon             # dev auto-restart
nodemon app.js
```

```js
// app.js — minimal Express app (fleshed out fully in Part 2 §10)
import express from "express";

const app = express();

app.listen(3000, () => {
  console.log("app listening on port 3000");
});

app.get("/books", (req, res) => {
  res.json({ message: "welcome to the api" });
});
```

### Connecting to MongoDB — the db.js pattern

Keep connection code modular in its own file exporting two functions: one to **connect**, one to **get** the live connection.

```js
// db.js
import { MongoClient } from "mongodb";

let dbConnection;
const uri = process.env.MONGO_URI || "mongodb://localhost:27017/bookstore";
// local connection string format: mongodb://localhost:27017/<dbname>
// Atlas (Part 2 §9) swaps in: mongodb+srv://<user>:<password>@cluster...

export const connectToDB = (cb) => {
  return MongoClient.connect(uri)
    .then((client) => {
      dbConnection = client.db();  // the database connection interface
      return cb();                 // success → callback with no error
    })
    .catch((err) => {
      console.log(err);
      return cb(err);              // failure → callback receives the error
    });
};

export const getDb = () => dbConnection;
```

```js
// app.js
import express from "express";
import { connectToDB, getDb } from "./db.js";

const app = express();
app.use(express.json());

// connect FIRST; only listen for requests once the DB is reachable
let db;
connectToDB((err) => {
  if (!err) {
    app.listen(3000, () => console.log("app listening on port 3000"));
    db = getDb();
  }
});
```

Why this order: if the DB connection fails, the API shouldn't accept requests it can't serve.

Node 18+ DNS note: if `localhost` fails to connect, use `127.0.0.1` in the connection string (IPv6 resolution issue).

> From here, `db.collection("books")` replaces the shell's `db.books`, and the same CRUD methods apply — with one key difference: `find()` returns a **cursor**. That's where Part 2 picks up (§1).

---

## 14. Quick Revision

- MongoDB = NoSQL: **collections** of **documents** (BSON, JSON-like), auto `_id: ObjectId`, nested documents instead of joins.
- Local setup: Community Server + Compass (GUI) + mongosh (shell); macOS via `brew tap mongodb/brew` → `brew install mongodb-community@7.0` → `brew services start` (run `brew trust mongodb/brew` if blocked).
- Shell CRUD: `insertOne/insertMany` → `find/findOne` (filter + projection) → `updateOne/updateMany` (`$set`, `$inc`, `$push/$pull/$each`) → `deleteOne/deleteMany`.
- Query building blocks: chaining (`sort(±1)`, `limit`, `skip`, `count`), comparison (`$gt/$gte/$lt/$lte/$eq/$ne`), logical (`$or/$and`), lists (`$in/$nin`), arrays (element match, exact match, `$all`), nested fields via `"dot.notation"`.
- Node driver: `MongoClient.connect(uri)` in a modular `db.js` (`connectToDb` + `getDb`), listen only after connecting, `db.collection("name")` in code.
- **Continue in Part 2** (`mongodb-api-notes.md`): cursors → CRUD endpoints → Postman → pagination → indexes → Atlas.