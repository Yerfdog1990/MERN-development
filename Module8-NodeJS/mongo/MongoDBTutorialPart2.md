# MongoDB Tutorial — Part 2: Building the Node/Express API

*(Continues `mongodb-tutorial-notes.md` — covers tutorials #17–25: cursors, CRUD endpoints, Postman, pagination, indexes, Atlas.)*

## 1. Cursors & Fetching Data (GET /books)

### What `find()` really returns

- In application code, `find()` does **NOT** return documents — it returns a **cursor**: an object pointing at the set of documents described by your query (whole collection if no filter, a subset if filtered).
- The cursor exposes methods to actually fetch the data:
    - **`toArray()`** — fetch all pointed-to documents into an array.
    - **`forEach(fn)`** — iterate documents one at a time, processing each individually.
- Documents are fetched in **batches** (default ~101) to avoid blowing up network bandwidth on huge collections — `forEach` exhausts one batch, then fetches the next.
- The shell was special: it auto-iterated the first 20 results of `find()` and offered `it` for more. In code you always work with the cursor yourself.

### The route handler

```js
// GET all books, sorted by author
app.get("/books", (req, res) => {
  let books = [];

  db.collection("books")        // in code: db.collection("name"), not db.books
    .find()                     // → cursor (no filter = all docs)
    .sort({ author: 1 })        // still a cursor — chainable
    .forEach((book) => books.push(book))  // async: fills the array batch by batch
    .then(() => {
      res.status(200).json(books);
    })
    .catch(() => {
      res.status(500).json({ error: "Could not fetch the documents" });
    });
});
```

Test: `GET http://localhost:3000/books` → `200 OK` with the JSON array of books.

---

## 2. Finding a Single Document (GET /books/:id)

- **Route parameter:** `/books/:id` — read it with `req.params.id`.
- The `_id` in MongoDB is an **ObjectId**, not a plain string — wrap the string: `new ObjectId(req.params.id)` (import `ObjectId` from `mongodb`).
- **Gotcha:** the ObjectId constructor **throws** if the string isn't a valid format (12 bytes / 24 hex characters). Guard with `ObjectId.isValid()` first.
- A **valid-format but nonexistent** id doesn't error — `findOne` just resolves with `null` (handle with a 404).

```js
import { ObjectId } from "mongodb";

app.get("/books/:id", (req, res) => {
  if (ObjectId.isValid(req.params.id)) {
    db.collection("books")
      .findOne({ _id: new ObjectId(req.params.id) })
      .then((book) => {
        if (book) res.status(200).json(book);
        else res.status(404).json({ error: "Book not found" }); // valid id, no match → null
      })
      .catch(() => {
        res.status(500).json({ error: "Could not fetch the document" });
      });
  } else {
    res.status(400).json({ error: "Invalid book ID" }); // malformed id string
  }
});
```

---

## 3. Testing with Postman

- **Postman** simulates API requests and shows responses — essential once you move past GET (POST/DELETE/PATCH are awkward from a browser).
- Workflow: ➕ new tab → choose method (GET/POST/...) → enter URL (`http://localhost:3000/books`) → **Send** → response shows at the bottom.
- **Save** requests into a **collection** (e.g., "bookstore") to reorganize and reuse them.
- For request bodies: **Body → raw → JSON**, paste the JSON object.
- Alternative: `.http` files (VS Code/IntelliJ REST client):

```http
@base = http://localhost:3000

### Read all books
GET {{base}}/books?page=0

### Read one
GET {{base}}/books/6a55a482c233ce6cc67ab526

### Create
POST {{base}}/books
content-type: application/json

{ "title": "Clean Code", "author": "Robert C. Martin", "pages": 464, "genre": "Software Engineering", "rating": 4.9 }

### Delete
DELETE {{base}}/books/6a5491112a98751dc69a1bb4

### Update
PATCH {{base}}/books/6a54defd3f232326b0987acd
content-type: application/json

{ "rating": 4.9, "pages": 450 }
```

---

## 4. POST — Creating Documents

- The new book arrives in the **request body** → needs `app.use(express.json())` middleware registered up top, otherwise `req.body` is undefined.

```js
app.use(express.json()); // parse incoming JSON bodies

app.post("/books", (req, res) => {
  const book = req.body;

  db.collection("books")
    .insertOne(book)
    .then((result) => {
      res.status(201).json(result); // 201 = resource created; result has insertedId
    })
    .catch(() => {
      res.status(500).json({ error: "Could not create a new document" });
    });
});
```

Test in Postman: POST `/books` with a raw JSON body → response `{ acknowledged: true, insertedId: ... }` → confirm via GET all books.

---

## 5. DELETE — Removing Documents

Same shape as the single-book GET: validate id → `deleteOne` → return the result:

```js
app.delete("/books/:id", (req, res) => {
  if (ObjectId.isValid(req.params.id)) {
    db.collection("books")
      .deleteOne({ _id: new ObjectId(req.params.id) })
      .then((result) => {
        res.status(200).json(result); // { acknowledged: true, deletedCount: 1 }
      })
      .catch(() => {
        res.status(500).json({ error: "Could not delete the document" });
      });
  } else {
    res.status(400).json({ error: "Invalid book ID" });
  }
});
```

---

## 6. PATCH — Updating Documents

Send only the fields to change in the body; apply them with `$set`:

```js
app.patch("/books/:id", (req, res) => {
  if (ObjectId.isValid(req.params.id)) {
    const updates = req.body;
    delete updates._id; // _id is immutable — strip it if the client sent it

    db.collection("books")
      .updateOne({ _id: new ObjectId(req.params.id) }, { $set: updates })
      .then((result) => {
        if (result.matchedCount === 0) {
          res.status(404).json({ error: "Book not found" });
        } else {
          res.status(200).json(result); // { matchedCount, modifiedCount, ... }
        }
      })
      .catch(() => {
        res.status(500).json({ error: "Could not update the document" });
      });
  } else {
    res.status(400).json({ error: "Invalid book ID" });
  }
});
```

> Bug to avoid: don't call `res.json()` twice (e.g., once unconditionally and again inside the if/else) — "headers already sent" error. Respond exactly once per request.

---

## 7. Pagination

### Offset-based: query params + skip/limit

Don't return 1,000 books at once — return a page at a time via a **query parameter** (`GET /books?page=1`):

```js
app.get("/books", (req, res) => {
  const page = parseInt(req.query.page) || 0; // default page 0 if absent
  const booksPerPage = 3;

  let books = [];
  db.collection("books")
    .find()
    .sort({ author: 1 })          // ALWAYS sort — consistent ordering between pages
    .skip(page * booksPerPage)    // skip previous pages
    .limit(booksPerPage)          // return one page's worth
    .forEach((book) => books.push(book))
    .then(() => res.status(200).json(books))
    .catch(() => res.status(500).json({ error: "Could not fetch the documents" }));
});
```

Math: page 0 → skip 0; page 1 → skip 3; page N → skip N×perPage. Page N of 20/page = results (20N+1)–(20N+20).

### The "+1 trick" — hasNextPage without a count query

Problem: a full page doesn't tell you whether a next page exists. Fetch **one extra** document; if it arrives, there's a next page — pop it before returning:

```js
async function getResults(page) {
  const resultsPerPage = 20;
  const results = await db.collection("results")
    .find({})
    .sort({ date: -1 })
    .skip(page * resultsPerPage)
    .limit(resultsPerPage + 1)   // fetch ONE extra
    .toArray();

  let hasNextPage = false;
  if (results.length > resultsPerPage) {
    hasNextPage = true;
    results.pop();               // discard the extra result
  }
  return { data: results, hasNextPage };
}
// UI: <button onClick={getNextPage} disabled={!hasNextPage}>Next</button>
```

### Cursor/keyset pagination (recommended for large data)

Offset pagination degrades on big collections (MongoDB must scan all skipped docs) and suffers **data drift** (inserts/deletes shift pages). Keyset pagination filters past the last-seen unique value instead:

```js
// page 1
const page1 = await db.items.find({}).sort({ _id: 1 }).limit(10).toArray();
const lastId = page1[page1.length - 1]._id;

// page 2 — start AFTER the last id; uses the index, skips nothing
db.items.find({ _id: { $gt: lastId } }).sort({ _id: 1 }).limit(10);

// sorting by a non-unique field? add _id as tiebreaker:
db.items.find({
  $or: [
    { price: { $gt: lastPrice } },
    { price: lastPrice, _id: { $gt: lastId } },
  ],
}).sort({ price: 1, _id: 1 }).limit(10);
```

| Feature | Offset (`skip`+`limit`) | Cursor/keyset |
|---|---|---|
| Large-data performance | Slow (scans skipped docs) | Consistently fast (index-driven) |
| Random page jumps | ✅ | ❌ sequential only |
| Data-drift resilience | Poor | Good |
| Best for | Small datasets, admin tables | Infinite scroll, APIs, large datasets |

### Atlas Search pagination (MongoDB 7.0.5+, brief)

`$search` supports token-based paging: project `{"$meta": "searchSequenceToken"}` to get a per-document token, then pass it via **`searchAfter`** (Next Page) / **`searchBefore`** (Previous Page, results come reversed — `toArray().reverse()`). Combine with `$skip`/`$limit` to jump pages efficiently, and count matches with `$searchMeta` + `count`. Sort by a unique/immutable field (e.g., `_id`) to avoid tie/drift inconsistencies.

---

## 8. Indexes

- An index is like a book's index: a sorted list of a field's values, each with a **pointer back to its document**. Queries on that field scan the small index instead of the whole collection.
- **Don't index everything:** every write to the collection must also update every index — more indexes = more write overhead. Index only fields you query/sort frequently, especially on large collections.

```js
// measure a query — BEFORE index
db.books.find({ rating: 8 }).explain("executionStats")
// executionStats: nReturned: 2, totalDocsExamined: 5, stage: 'COLLSCAN' (full collection scan)

db.books.createIndex({ rating: 8 })   // create index
db.books.getIndexes()                 // list — _id index always exists by default

// AFTER index
db.books.find({ rating: 8 }).explain("executionStats")
// executionStats: nReturned: 2, totalDocsExamined: 2 — only matching docs examined

db.books.dropIndex("rating_8")        // remove an index
```

Real `explain` output to read: `winningPlan.stage: 'COLLSCAN'` = full scan (no index used); with an index you'd see `IXSCAN`. Compare `totalDocsExamined` to `nReturned` — a big gap means an index could help.

---

## 9. MongoDB Atlas — Hosted Database

Production apps talk to a cloud database, not your local mongod. **Atlas** = MongoDB's multi-cloud database-as-a-service (AWS/GCP/Azure) with a free tier.

Setup steps:

1. Sign up at mongodb.com/atlas → **Build a Database** → free/shared tier → pick cloud provider + region → create cluster (takes a few minutes).
2. **Database Access** → add a database **user** (username + password) — this is what your code authenticates with.
3. **Network Access** → add IP address. "Allow access from anywhere" is fine for testing but **never in production** — whitelist specific IPs. (Also why MongoDB rejects you after switching Wi-Fi: your IP changed.)
4. Cluster → **Connect** → copy the **connection string**, substituting your username/password.

Swap the connection string in `db.js` — nothing else changes:

```js
// db.js
import { MongoClient } from "mongodb";

let dbConnection;
const uri = "mongodb+srv://<username>:<password>@cluster0.xxxxx.mongodb.net/?appName=Books";
// note: URL-encode special chars in the password (e.g., @ → %40)

export const connectToDB = (cb) => {
  return MongoClient.connect(uri)
    .then((client) => {
      dbConnection = client.db("books");  // name the db explicitly with the srv string
      return cb();
    })
    .catch((error) => {
      console.log(error);
      return cb(error);
    });
};

export const getDb = () => dbConnection;
```

Postman requests stay identical (still hitting your localhost API) — only the API's backing database moved to the cloud. Verify in Atlas → Browse Collections.

> Best practice beyond the tutorial: keep the URI in an environment variable (`process.env.MONGO_URI`), never hardcoded — same rule as SMTP credentials.

### Atlas platform extras (awareness level)

- **Atlas Search** — embedded full-text search ($search/$searchMeta aggregation stages): analyzers, relevance scoring, autocomplete, facets, pagination tokens.
- **Atlas Stream Processing** — aggregation pipelines over streaming data (Kafka topics, change streams) with windows, functions, and sinks.
- **Atlas Triggers** — run Functions on database events (insert/update/delete) or schedules.
- Integrations: Vercel/Netlify/Render hosting, Terraform provisioning, Datadog/Prometheus monitoring, Mongoose/Prisma ODMs, SSO/LDAP auth.

---

## 10. Complete Final Code

```js
// db.js
import { MongoClient } from "mongodb";

let dbConnection;
const uri = process.env.MONGO_URI || "mongodb://localhost:27017/bookstore";

export const connectToDB = (cb) => {
  return MongoClient.connect(uri)
    .then((client) => {
      dbConnection = client.db();
      return cb();
    })
    .catch((error) => {
      console.log(error);
      return cb(error);
    });
};

export const getDb = () => dbConnection;
```

```js
// app.js
import express from "express";
import { connectToDB, getDb } from "./db.js";
import { ObjectId } from "mongodb";

const app = express();
app.use(express.json());

let db;
connectToDB((err) => {
  if (!err) {
    app.listen(3000, () => console.log("Server is running on port 3000"));
    db = getDb();
  }
});

// READ all (paginated)
app.get("/books", (req, res) => {
  const page = parseInt(req.query.page) || 0;
  const booksPerPage = 3;

  let books = [];
  db.collection("books")
    .find()
    .sort({ author: 1 })
    .skip(page * booksPerPage)
    .limit(booksPerPage)
    .forEach((book) => books.push(book))
    .then(() => res.status(200).json(books))
    .catch(() => res.status(500).json({ error: "Could not fetch the documents" }));
});

// READ one
app.get("/books/:id", (req, res) => {
  if (!ObjectId.isValid(req.params.id)) {
    return res.status(400).json({ error: "Invalid book ID" });
  }
  db.collection("books")
    .findOne({ _id: new ObjectId(req.params.id) })
    .then((book) => {
      if (book) res.status(200).json(book);
      else res.status(404).json({ error: "Book not found" });
    })
    .catch(() => res.status(500).json({ error: "Could not fetch the document" }));
});

// CREATE
app.post("/books", (req, res) => {
  db.collection("books")
    .insertOne(req.body)
    .then((result) => res.status(201).json(result))
    .catch(() => res.status(500).json({ error: "Could not create a new book" }));
});

// DELETE
app.delete("/books/:id", (req, res) => {
  if (!ObjectId.isValid(req.params.id)) {
    return res.status(400).json({ error: "Invalid book ID" });
  }
  db.collection("books")
    .deleteOne({ _id: new ObjectId(req.params.id) })
    .then((result) => res.status(200).json(result))
    .catch(() => res.status(500).json({ error: "Could not delete the document" }));
});

// UPDATE
app.patch("/books/:id", (req, res) => {
  if (!ObjectId.isValid(req.params.id)) {
    return res.status(400).json({ error: "Invalid book ID" });
  }
  const updates = req.body;
  delete updates._id; // _id is immutable

  db.collection("books")
    .updateOne({ _id: new ObjectId(req.params.id) }, { $set: updates })
    .then((result) => {
      if (result.matchedCount === 0) res.status(404).json({ error: "Book not found" });
      else res.status(200).json(result);
    })
    .catch(() => res.status(500).json({ error: "Could not update the document" }));
});
```

---

## 11. Quick Revision

- `find()` in code returns a **cursor** — drain it with `.toArray()` or `.forEach()`; data arrives in ~101-doc batches.
- Single-doc routes: validate with `ObjectId.isValid()` (malformed → 400), wrap with `new ObjectId()`, `null` result = 404.
- CRUD endpoint map: `GET /books` (find + cursor), `GET /books/:id` (findOne), `POST /books` (insertOne + `express.json()` + 201), `DELETE /books/:id` (deleteOne), `PATCH /books/:id` (updateOne + `$set`, strip `_id`).
- Pagination: `?page=N` + `.skip(page*perPage).limit(perPage)` (always `.sort()` first); +1 trick for `hasNextPage`; switch to keyset (`_id: { $gt: lastId }`) for large data.
- Indexes: `createIndex`/`getIndexes`/`dropIndex`; verify with `.explain("executionStats")` — COLLSCAN + high `totalDocsExamined` = index candidate; indexes cost write overhead.
- Atlas: free cloud cluster → DB user + IP whitelist → swap the connection string (`mongodb+srv://...`) — the rest of the code is unchanged.