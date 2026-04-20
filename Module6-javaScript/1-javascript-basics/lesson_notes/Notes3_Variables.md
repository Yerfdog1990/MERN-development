# JavaScript Variables

> **Variables** in JavaScript are used to store data values. They can be declared in different ways depending on how the value should behave.

---

## Core Concepts

- Variables can be declared using **`var`**, **`let`**, or **`const`**
- JavaScript is **dynamically typed** — types are decided at runtime
- You **do not** need to specify a data type when creating a variable

```js
// Old style
var a = 10;

// Preferred for non-constant values
let b = 20;

// Preferred for constant values (cannot be reassigned)
const c = 30;

console.log(a); // 10
console.log(b); // 20
console.log(c); // 30
```

---

## Table of Contents
1. [History of Variable Declaration](#history-of-variable-declaration)
2. [The Three Keywords](#the-three-keywords)
    - [var](#1-var)
    - [let](#2-let)
    - [const](#3-const)
3. [Rules for Naming Variables](#rules-for-naming-variables)
4. [Interesting Facts & Gotchas](#interesting-facts--gotchas)
5. [Quick Comparison Table](#quick-comparison-table)

---

## History of Variable Declaration

| Era | Keyword | Notes |
|---|---|---|
| **Before ES6 (pre-2015)** | `var` only | Function-scoped and global-scoped; caused issues like hoisting and global pollution |
| **ES6 (2015) onwards** | `let` and `const` | Introduced as safer, block-scoped alternatives to `var` |

> **Scope** refers to where a variable is accessible. `let` and `const` are **block-scoped** (limited to the `{ }` block they are declared in), which reduces errors compared to `var`.

---

## The Three Keywords

### 1. `var`

- **Function-scoped** — accessible anywhere within the function it is declared in
- **Hoisted** to the top of its scope (declared before code runs, but not initialised)
- Allows **redeclaration** in the same scope
- Can lead to **unexpected bugs** due to its loose scoping rules

```js
var a = "Hello Geeks";
var b = 10;

console.log(a); // Hello Geeks
console.log(b); // 10
```

---

### 2. `let`

- **Block-scoped** — only accessible within the `{ }` block it is declared in
- **Not hoisted** to the top (safer behaviour)
- Suitable for **mutable variables** (values that will change)
- Cannot be redeclared in the same scope

```js
let a = 12;
let b = "gfg";

console.log(a); // 12
console.log(b); // gfg
```

---

### 3. `const`

- **Block-scoped** — same as `let`
- Creates an **immutable binding** — the variable cannot be reassigned
- Must be **initialised at the time of declaration**
- Object properties and array elements **can still be mutated** (see Gotcha #5 below)

```js
const a = 5;
const b = "gfg";

console.log(a); // 5
console.log(b); // gfg
```

---

## Rules for Naming Variables

Follow these rules when naming variables in JavaScript:

| Rule | Example |
|---|---|
| Must begin with a **letter**, `_`, or `$` | `let userName`, `let _temp`, `let $price` |
| Subsequent characters can be letters, numbers, `_`, or `$` | `let user1` |
| Names are **case-sensitive** | `age` and `Age` are different variables |
| **Reserved keywords** cannot be used as names | `function`, `class`, `return`, etc. are off-limits |

```js
let userName = "Suman";  // ✅ Valid
let $price = 100;        // ✅ Valid
let _temp = 0;           // ✅ Valid
let 123name = "Ajay";   // ❌ Invalid — starts with a number
let function = "gfg";   // ❌ Invalid — reserved keyword
```

---

## Interesting Facts & Gotchas

### 1. Prefer `let` or `const` over `var`
The main issue with `var` is its scoping behaviour. `let` and `const` (introduced in ES6) are block-scoped and far safer to use.

```js
if (true) {
    var x = 10;
    let y = 20;
}

console.log(x); // 10 — var is function-scoped, leaks out of the block
console.log(y); // ❌ ReferenceError — let is block-scoped
```

---

### 2. `var` is Function-Scoped
A `var` variable can be accessed outside of the block it was declared in, as long as it's within the same function.

```js
if (true) {
    var x = 10;
}

// Accessible outside the block because we are in the same function
console.log(x); // 10
```

---

### 3. `let` and `const` are Block-Scoped
Cannot be accessed outside their `{ }` block, even if inside the same function.

```js
if (true) {
    let y = 20;
    const z = 30;
}

console.log(y, z); // ❌ ReferenceError
```

---

### 4. `var` Can Be Redeclared — `let` and `const` Cannot

```js
var x = 10;
var x = 20; // ✅ Allowed

let y = 30;
let y = 40; // ❌ SyntaxError

const z = 50;
const z = 60; // ❌ SyntaxError
```

---

### 5. `const` Objects and Arrays Can Still Be Mutated
`const` prevents **reassignment** of the variable itself, but the **contents** of objects and arrays can still be changed.

```js
const ob = { a: 10 };
ob.a = 20;           // ✅ Allowed — mutating a property
// ob = { b: 30 };  // ❌ TypeError — cannot reassign the variable

const arr = [10, 20, 30];
arr[2] = 40;         // ✅ Allowed — mutating an element
console.log(arr);    // [10, 20, 40]
// arr = [50, 100]; // ❌ TypeError — cannot reassign the variable
```

> 💡 Think of `const` as locking the **label**, not the **contents** of the box.

---

## Quick Comparison Table

| Feature | `var` | `let` | `const` |
|---|---|---|---|
| **Introduced** | ES1 (original) | ES6 (2015) | ES6 (2015) |
| **Scope** | Function / Global | Block | Block |
| **Hoisting** | Yes (undefined) | No | No |
| **Reassignable** | ✅ Yes | ✅ Yes | ❌ No |
| **Redeclarable** | ✅ Yes | ❌ No | ❌ No |
| **Recommended** | ❌ Avoid | ✅ Use for mutable values | ✅ Use for fixed values |

---

## Key Takeaways

- Always prefer **`const`** by default; use **`let`** when the value needs to change; avoid **`var`**
- JavaScript's **dynamic typing** means you never declare a type — the engine figures it out at runtime
- **Block scope** (`let`/`const`) is safer and more predictable than **function scope** (`var`)
- `const` prevents **reassignment**, not **mutation** — objects and arrays declared with `const` can still be modified internally

---