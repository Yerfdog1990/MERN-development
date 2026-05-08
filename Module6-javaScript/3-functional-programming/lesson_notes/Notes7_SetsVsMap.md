# Set vs Map in JavaScript

## Introduction

In JavaScript, **Set** and **Map** are built-in data structures used to store **ordered collections of data**. While they share some similarities, they serve distinct purposes:

- **Set** — stores a collection of **unique values** with no duplicates.
- **Map** — stores data as **key–value pairs**, allowing efficient lookup by keys.

Understanding when to use each is essential to writing clean and efficient JavaScript.

---

## JavaScript Set

A **Set** is a collection of **unique values** accessed without keys. Duplicate entries are not allowed — if you try to add a value that already exists, it is simply ignored.

### Key Characteristics
- Stores only **distinct values** — no duplicates.
- Maintains **insertion order**.
- Commonly used to **remove duplicates** from arrays or other data structures.
- Values can be of **any data type** (strings, numbers, objects, etc.).

### Syntax

```javascript
new Set([iterable]);
```

- The optional `iterable` argument (e.g. an array) pre-populates the Set with values.

### Basic Example

```javascript
let sample = new Set();

sample.add("Hello");
sample.add(1);
sample.add("Bye");
sample.add("@");

for (let item of sample) {
  console.log(item);
}
// Output:
// Hello
// 1
// Bye
// @
```

**Breaking it down:**
- A new Set named `sample` is created using `new Set()`.
- Four distinct values are added using `.add()`.
- Iterating with `for...of` logs each value in the order they were inserted.
- Any duplicate additions would be silently ignored.

### Duplicate Handling Example

```javascript
let numbers = new Set();

numbers.add(10);
numbers.add(20);
numbers.add(10); // duplicate — ignored
numbers.add(30);

console.log(numbers); // Set { 10, 20, 30 }
console.log(numbers.size); // Output: 3
```

### Removing Duplicates from an Array

One of the most common real-world uses of Set is to deduplicate an array quickly.

```javascript
const withDuplicates = [1, 2, 2, 3, 4, 4, 5];
const unique = [...new Set(withDuplicates)];

console.log(unique); // Output: [1, 2, 3, 4, 5]
```

### Common Set Methods

| Method            | Description                                      | Example                        |
|-------------------|--------------------------------------------------|--------------------------------|
| `.add(value)`     | Adds a value to the Set                          | `set.add(10)`                  |
| `.has(value)`     | Returns `true` if value exists, else `false`     | `set.has(10)`                  |
| `.delete(value)`  | Removes a value from the Set                     | `set.delete(10)`               |
| `.clear()`        | Removes all values from the Set                  | `set.clear()`                  |
| `.size`           | Returns the number of values in the Set          | `set.size`                     |
| `.forEach()`      | Iterates over each value                         | `set.forEach(v => ...)`        |

```javascript
let fruits = new Set(["Apple", "Mango", "Banana"]);

console.log(fruits.has("Mango"));  // Output: true
console.log(fruits.size);          // Output: 3

fruits.delete("Mango");
console.log(fruits.has("Mango"));  // Output: false
console.log(fruits.size);          // Output: 2
```

---

## JavaScript Map

A **Map** stores data in **key–value pairs**, where each key uniquely identifies its associated value. Unlike plain JavaScript objects, Map keys can be of **any data type**.

### Key Characteristics
- Keys can be of **any data type** — strings, numbers, objects, functions, etc.
- Maintains **insertion order** for all entries.
- Provides efficient **key-based lookups**.
- The **size** of a Map is easily accessible via `.size`.

### Syntax

```javascript
new Map([iterable]);
```

- The optional `iterable` argument is typically an array of `[key, value]` pairs.

### Basic Example

```javascript
let sample = new Map();

sample.set("name", "Ram");
sample.set("Role", "SDE");
sample.set("Country", "India");

for (let item of sample) {
  console.log(item);
}
// Output:
// [ 'name', 'Ram' ]
// [ 'Role', 'SDE' ]
// [ 'Country', 'India' ]
```

**Breaking it down:**
- A Map is created using `new Map()`.
- Key–value pairs are added using `.set(key, value)`.
- Iterating with `for...of` prints each entry as a `[key, value]` array in insertion order.

### Accessing Map Values

```javascript
let userMap = new Map();
userMap.set("name", "Alice");
userMap.set("age", 25);
userMap.set("city", "Bangkok");

console.log(userMap.get("name")); // Output: Alice
console.log(userMap.get("age"));  // Output: 25
console.log(userMap.size);        // Output: 3
```

### Using Non-String Keys

```javascript
let map = new Map();

let keyObj = { id: 1 };
let keyFunc = function() {};

map.set(keyObj, "Object as key");
map.set(keyFunc, "Function as key");
map.set(42, "Number as key");

console.log(map.get(keyObj));   // Output: Object as key
console.log(map.get(keyFunc));  // Output: Function as key
console.log(map.get(42));       // Output: Number as key
```

### Common Map Methods

| Method              | Description                                         | Example                         |
|---------------------|-----------------------------------------------------|---------------------------------|
| `.set(key, value)`  | Adds or updates a key–value pair                    | `map.set("name", "Alice")`      |
| `.get(key)`         | Returns the value associated with the key           | `map.get("name")`               |
| `.has(key)`         | Returns `true` if key exists, else `false`          | `map.has("name")`               |
| `.delete(key)`      | Removes the entry with the specified key            | `map.delete("name")`            |
| `.clear()`          | Removes all entries from the Map                    | `map.clear()`                   |
| `.size`             | Returns the number of key–value pairs               | `map.size`                      |
| `.keys()`           | Returns an iterator of all keys                     | `for (let k of map.keys())`     |
| `.values()`         | Returns an iterator of all values                   | `for (let v of map.values())`   |
| `.entries()`        | Returns an iterator of all `[key, value]` pairs     | `for (let e of map.entries())`  |

```javascript
let scores = new Map([
  ["Alice", 95],
  ["Bob", 87],
  ["Charlie", 92]
]);

// Iterate over keys
for (let name of scores.keys()) {
  console.log(name);
}
// Output: Alice, Bob, Charlie

// Iterate over values
for (let score of scores.values()) {
  console.log(score);
}
// Output: 95, 87, 92

// Check and delete
console.log(scores.has("Bob")); // Output: true
scores.delete("Bob");
console.log(scores.has("Bob")); // Output: false
```

---

## When to Use Set or Map

The choice between Set and Map depends on **how the data needs to be accessed**.

| Situation                                          | Use       |
|----------------------------------------------------|-----------|
| You need to store a list of **unique values**      | **Set**   |
| You need to **remove duplicates** from a collection| **Set**   |
| You need to **associate data with specific keys**  | **Map**   |
| You need **key-based lookups**                     | **Map**   |
| Keys need to be **non-string types** (objects, numbers, etc.) | **Map** |
| You simply need to check **membership** of a value | **Set**  |

---

## Difference Between Set and Map

| Feature               | Map                                         | Set                                           |
|-----------------------|---------------------------------------------|-----------------------------------------------|
| **Structure**         | Collection of **key–value pairs**           | Collection of **unique values only**          |
| **Dimensions**        | Two-dimensional (key + value)               | One-dimensional (value only)                  |
| **Access method**     | Values accessed using **keys** via `.get()` | Values accessed using **built-in methods**    |
| **Duplicates**        | Keys must be unique; values can repeat      | All values must be unique                     |
| **Key types**         | Any data type                               | N/A — no keys                                 |
| **Primary use**       | Lookup tables, dictionaries, frequency maps | Deduplication, membership testing             |
| **Iteration output**  | `[key, value]` pairs                        | Individual values                             |

---

## Side-by-Side Comparison

```javascript
// --- SET ---
const mySet = new Set([1, 2, 3, 2, 1]); // Duplicates removed
console.log(mySet);        // Set { 1, 2, 3 }
console.log(mySet.size);   // Output: 3
console.log(mySet.has(2)); // Output: true

// --- MAP ---
const myMap = new Map();
myMap.set("a", 1);
myMap.set("b", 2);
myMap.set("c", 3);
console.log(myMap);           // Map { 'a' => 1, 'b' => 2, 'c' => 3 }
console.log(myMap.size);      // Output: 3
console.log(myMap.get("b"));  // Output: 2
```

---

## Key Takeaways

- **Set** is ideal when you only care about whether a value exists — not what it's associated with.
- **Map** is ideal when you need to **pair values with keys** and retrieve them efficiently.
- Both Set and Map **maintain insertion order**, unlike plain objects in older JavaScript environments.
- Map keys can be **any data type** — this is a key advantage over plain objects, which only support string/symbol keys.
- Use `new Set(array)` as a quick trick to **remove duplicates** from an array.
- Both structures offer clean, built-in methods like `.has()`, `.delete()`, `.clear()`, and `.size` for managing data.
- Neither Set nor Map is better overall — the right choice depends entirely on whether your data is **value-only** or **key–value paired**.

---