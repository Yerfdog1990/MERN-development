# HTML LocalStorage and SessionStorage 

---

## What are LocalStorage and SessionStorage?

**LocalStorage** and **SessionStorage** are Web Storage API features that let web applications store data in the browser as **key–value pairs** for client-side state management.

---

## Key Features (Both)

| Feature | Description |
|---|---|
| Storage format | Store data as key–value pairs in the browser |
| Origin restriction | Data is accessible only within the same origin |
| Use cases | Client-side preferences, tokens, and temporary state |
| Data type | Keys and values must be strings or numbers |

---

## SessionStorage

SessionStorage stores data on the client side for the **duration of a single browser tab or session**.

| Property | Detail |
|---|---|
| Purpose | Temporary client-side data storage |
| Storage limit | Approximately 5 MB |
| Data persistence | Only while the current tab is open |
| On tab close | Data is automatically cleared |

> **Note:** When a closed tab is restored (Ctrl + Shift + T), SessionStorage **may persist** in Chrome and Firefox but **not in Safari**. This behaviour is browser-dependent.

---

## LocalStorage

LocalStorage is used to store data on the client side with **no expiration time**, allowing data to persist until it is manually removed.

| Property | Detail |
|---|---|
| Purpose | Persistent client-side data storage |
| Storage limit | Approximately 5 MB |
| Data persistence | Persists even after the browser is closed |
| When removed | Only when the user or code explicitly clears it |

---

## LocalStorage vs SessionStorage — Comparison

| Feature | LocalStorage | SessionStorage |
|---|---|---|
| Data persistence | Permanent (until manually cleared) | Only for current tab/session |
| On browser close | Data remains | Data cleared |
| On tab close | Data remains | Data cleared |
| Storage limit | ~5 MB | ~5 MB |
| Scope | All tabs of same origin | Current tab only |

---

## Storage Type

Both LocalStorage and SessionStorage are **object-based** storage mechanisms that store data as key–value pairs in the browser.

---

## Data Format — Important Rules

- Keys and values **must be strings or numbers**.
- Data stored as a plain JavaScript object is **automatically converted to a string**.
- Retrieving an object stored without conversion returns `"[object Object]"` — not the actual data.

### Problem — Storing an Object Directly

```javascript
localStorage.setItem("geek", { "key": "value" });
// stores "[object Object]" — incorrect!

localStorage.getItem("geek");
// returns: "[object Object]"
```

### Solution — Use `JSON.stringify()` and `JSON.parse()`

```javascript
// Storing an object — convert to string first
localStorage.setItem("geeks", JSON.stringify({ "key": "value" }));

// Retrieving the object — convert back from string
localStorage.getItem("geeks");
// returns: '{"key":"value"}'
```

---

## Common Methods

### 1. Storing Data — `setItem()`

Use `setItem()` to store key–value pairs (values are stored as strings).

```javascript
localStorage.setItem("key", "value");
sessionStorage.setItem("key", "value");
```

> Both key and value must be a string or number.

---

### 2. Getting Data — `getItem()`

Use `getItem(key)` to retrieve the value associated with the given key.

```javascript
localStorage.getItem("key");
sessionStorage.getItem("key");
```

> Pass the key — it returns the stored value.

---

### 3. Getting the Length — `.length`

Use the `length` property to get the total number of stored key–value pairs.

```javascript
localStorage.length;
sessionStorage.length;
```

---

### 4. Deleting a Key–Value Pair — `removeItem()`

Use `removeItem(key)` to delete a specific stored item.

```javascript
localStorage.removeItem("key");
sessionStorage.removeItem("key");
```

---

### 5. Clearing All Storage — `clear()`

Use `clear()` to remove **all** key–value pairs from storage.

```javascript
localStorage.clear();
sessionStorage.clear();
```

---

### 6. Getting the nth Key — `key(n)`

Use `key(n)` to retrieve the name of the key at index `n`.

```javascript
localStorage.key(n);
sessionStorage.key(n);
```

---

## Methods Quick Reference Table

| Method | Description | Example |
|---|---|---|
| `setItem(key, value)` | Stores a key–value pair | `localStorage.setItem("name", "Ali")` |
| `getItem(key)` | Retrieves value by key | `localStorage.getItem("name")` |
| `removeItem(key)` | Deletes a specific key–value pair | `localStorage.removeItem("name")` |
| `clear()` | Removes all stored data | `localStorage.clear()` |
| `length` | Returns number of stored items | `localStorage.length` |
| `key(n)` | Returns the key name at index n | `localStorage.key(0)` |

> All methods work identically for both `localStorage` and `sessionStorage`.

---

## Storing Non-String Values with JSON

Web Storage supports **only string values**, so objects and arrays must be converted before storing.

### The 3-Step Pattern

1. **Convert** the object to a string using `JSON.stringify()`
2. **Store** the string in localStorage or sessionStorage
3. **Retrieve** and convert it back using `JSON.parse()`

### Example

```javascript
// Object to store
let gfgObj = { name: "GeeksForGeeks", score: "100" };

// Step 1 & 2 — convert and store
localStorage.setItem("data", JSON.stringify(gfgObj));

// Step 3 — retrieve and convert back
let item = JSON.parse(localStorage.getItem("data"));
console.log(item.name);  // "GeeksForGeeks"
console.log(item.score); // "100"
```

> The same approach works for `sessionStorage` as well.

---

## Security Notes

> **Warning:** Web Storage stores data in **plain text**.

| Rule | Reason |
|---|---|
| Never store passwords | Data is readable by anyone with access to the browser |
| Never store payment details | No encryption is applied |
| Use cookies for server-side data | Web Storage is client-side only — cookies can be sent with HTTP requests |

---

## Important Notes

- Web Storage is accessible only on the **client side** — for server-side data storage, cookies are a better option.
- `localStorage` and `sessionStorage` are **scoped to the origin** (protocol + domain + port) — data cannot be accessed across different origins.
- Storing an object without `JSON.stringify()` will silently store `"[object Object]"` — always stringify objects before storing.
- `sessionStorage` is useful for storing **temporary form data** or **one-session tokens** that should not persist.
- `localStorage` is useful for storing **user preferences**, **theme settings**, or **remembered login states**.

---