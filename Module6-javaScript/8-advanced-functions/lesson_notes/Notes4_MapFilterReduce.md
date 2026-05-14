# JavaScript Array Methods: `map()`, `filter()`, and `reduce()`

The `map()`, `filter()`, and `reduce()` methods are powerful JavaScript array functions that help transform and process data efficiently. They allow you to apply custom logic to arrays in a clean, functional programming style.

| Method | Returns | Purpose |
|--------|---------|---------|
| `map()` | New array (same length) | Transforms each element |
| `filter()` | New array (same or shorter) | Keeps elements that pass a condition |
| `reduce()` | Single value | Combines all elements into one result |

---

## 1. `map()`

### What it does
`map()` creates a **new array** by applying a callback function to **every element** of the original array. The original array is not modified.

### How it works
- Iterates through every element of the array
- Executes the callback function for each element
- Stores the returned value in a new array

### Syntax
```js
arr.map(function(value, index, array) {
    // return transformed value
});

// Arrow function shorthand
arr.map(val => val + 2);
```

### Example
```js
let arr = [2, 4, 8, 10];
let updatedArr = arr.map(val => val + 2);

console.log(arr);         // [2, 4, 8, 10]  — original unchanged
console.log(updatedArr);  // [4, 6, 10, 12] — new transformed array
```

### Key points
- Always returns an array of the **same length** as the original
- Does **not** mutate the original array
- The callback receives `(currentValue, index, array)`

---

## 2. `filter()`

### What it does
`filter()` creates a **new array** containing only the elements that **satisfy a condition** defined in the callback function.

### How it works
- Iterates over each element of the array
- Includes elements when the callback returns `true`
- Excludes elements when the callback returns `false`

### Syntax
```js
arr.filter(function(value, index, array) {
    // return true to keep, false to exclude
});

// Arrow function shorthand
arr.filter(val => val < 5);
```

### Example
```js
let arr = [2, 4, 8, 10];
let updatedArr = arr.filter(val => val < 5);

console.log(arr);         // [2, 4, 8, 10] — original unchanged
console.log(updatedArr);  // [2, 4]         — only values less than 5
```

> **Note:** The example above uses `arr.slice().filter(...)` — `slice()` first creates a shallow copy of the array before filtering. This is unnecessary since `filter()` already returns a new array without mutating the original, but it's harmless.

### Key points
- Returns an array that is the **same length or shorter** than the original
- Does **not** mutate the original array
- The callback must return a **boolean** (or truthy/falsy value)

---

## 3. `reduce()`

### What it does
`reduce()` combines **all elements** of an array into a **single value** by applying a callback function repeatedly, carrying forward an accumulator.

### How it works
- **Accumulator** — stores the running result after each iteration
- **currentValue** — the current element being processed
- **currentIndex** — the index of the current element
- An optional **initial value** can be provided as the second argument to `reduce()`

### Syntax
```js
arr.reduce(function(accumulator, currentValue, currentIndex, array) {
    // return updated accumulator
}, initialValue);

// Arrow function shorthand
arr.reduce((prev, curr) => prev + curr, 0);
```

### Example (correct)
```js
let arr = [2, 4, 8, 10];
let sum = arr.reduce((prev, curr) => prev + curr, 0);

console.log(arr);   // [2, 4, 8, 10]
console.log(sum);   // 24
```

### Common mistake to avoid
```js
// ❌ INCORRECT — two bugs:
let updatedArr = arr.reduce((prev, curr) => curr = prev + curr);
//  Bug 1: `curr = prev + curr` reassigns curr instead of returning the sum
//  Bug 2: No initial accumulator value is provided

// ✅ CORRECT
let updatedArr = arr.reduce((prev, curr) => prev + curr, 0);
```

### Key points
- Returns a **single value** (number, string, object, array, etc.)
- Always provide an **initial value** as the second argument to avoid unexpected behaviour with empty or single-element arrays
- The accumulator persists across all iterations

---

## Comparison: `map()` vs `filter()` vs `reduce()`

| Feature | `map()` | `filter()` | `reduce()` |
|---|---|---|---|
| **Return type** | New array | New array | Single value |
| **Output length** | Same as input | ≤ input length | N/A (one value) |
| **Purpose** | Transform elements | Select elements | Aggregate elements |
| **Callback params** | `value, index, array` | `value, index, array` | `accumulator, currentValue, index, array` |
| **Mutates original?** | No | No | No |

---

## Chaining All Three Together

These methods can be chained for expressive, readable data pipelines:

```js
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let result = arr
    .filter(val => val % 2 === 0)   // keep even numbers: [2, 4, 6, 8, 10]
    .map(val => val * val)           // square each: [4, 16, 36, 64, 100]
    .reduce((sum, val) => sum + val, 0); // sum them: 220

console.log(result); // 220
```

---

## Quick Reference

```js
// map()   — double every value
[1, 2, 3].map(x => x * 2);          // [2, 4, 6]

// filter() — keep values greater than 1
[1, 2, 3].filter(x => x > 1);       // [2, 3]

// reduce() — sum all values
[1, 2, 3].reduce((acc, x) => acc + x, 0); // 6
```
---