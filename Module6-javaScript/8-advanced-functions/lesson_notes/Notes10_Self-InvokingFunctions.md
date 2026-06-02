# Self-Invoking Functions (IIFE)

An **IIFE** stands for **Immediately Invoked Function Expression** — a function that runs automatically the moment it is defined, without needing to be called.

---

## What is an IIFE?

Normally, a function only runs when you call it:

```js
function greet() {
  console.log('Hello');
}

greet(); // called manually
```

An IIFE runs on its own, the moment the JavaScript engine reads it:

```js
(function () {
  console.log('Hello');
})();
```

The function is defined and executed at the same time.

---

## Why Use an IIFE?

- Create a **private scope** (variables inside can't be accessed outside)
- Run **setup code** once, immediately
- **Avoid polluting the global scope**
- Use `await` at the top level (async IIFE)
- Work with **older JavaScript code** that relied on them before modules

---

## How an IIFE Works

A plain function declaration like this is invalid without a name:

```js
function () {} // ❌ invalid
```

Wrapping it in parentheses turns it into a **function expression**:

```js
(function () {}) // ✅ valid expression
```

Adding `()` at the end **immediately executes** it:

```js
(function () {
  // code runs immediately
})();
```

> **Key rule:** You can only self-invoke a **function expression**. You cannot self-invoke a function declaration.

---

## Syntax Variants

### Traditional Function IIFE

```js
(function () {
  // code
})();
```

### Arrow Function IIFE

```js
(() => {
  // code
})();
```

> Arrow IIFEs require the outer parentheses. `() => {}()` is invalid.

### Async IIFE

```js
(async () => {
  // code with await
})();
```

---

## 1. Non-Parameterized IIFE

```js
(function () {
  console.log('Application started');
})();
// Application started
```

Arrow version:

```js
(() => {
  console.log('Application started');
})();
// Application started
```

---

## 2. Parameterized IIFE

Arguments are passed in the final `()` at invocation time:

```js
(function (name) {
  console.log(`Hello ${name}`);
})('John');
// Hello John
```

Multiple parameters:

```js
(function (a, b) {
  console.log(a + b);
})(2, 3);
// 5
```

Arrow version:

```js
((name) => {
  console.log(`Hello ${name}`);
})('John');
// Hello John
```

---

## 3. IIFE with a Return Value

An IIFE can return a value and store it in a variable:

```js
let result = (function () {
  return 5 + 5;
})();

console.log(result); // 10
```

---

## 4. Named IIFE

You can give an IIFE a name — but the name is only accessible **inside** the function, not in the outer scope:

```js
(function greet() {
  console.log('Hello!');
})();

greet(); // ❌ ReferenceError: greet is not defined
```

Named IIFEs are useful for **recursion** — calling the function from within itself:

```js
(function factorial(n) {
  if (n <= 1) return 1;
  return n * factorial(n - 1); // calls itself recursively
})(5);

// 120
```

---

## 5. Async IIFE

Used when you need `await` outside of a named async function:

```js
(async () => {
  const result = await Promise.resolve('Data loaded');
  console.log(result);
  // Data loaded
})();
```

Real-world example with `fetch`:

```js
(async () => {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const users = await response.json();
    console.log(users);
  } catch (error) {
    console.log(error);
  }
})();
```

Async IIFE with a parameter:

```js
(async (username) => {
  const message = await Promise.resolve(`Welcome ${username}`);
  console.log(message);
})('John');
// Welcome John
```

---

## Avoiding Global Scope Pollution

Every variable declared inside an IIFE is **private** — inaccessible from outside:

```js
(function () {
  let x = 10;
})();

console.log(x); // ❌ ReferenceError: x is not defined
```

Without an IIFE, variables leak into the global scope:

```js
// ❌ Without IIFE — these become global
const apiKey = '12345';

function initialize() {
  console.log('Initialized');
}
```

```js
// ✅ With IIFE — everything stays private
(function () {
  const apiKey = '12345';

  function initialize() {
    console.log('Initialized');
  }

  initialize();
})();
```

---

## IIFE as a Module (Private Variables with Public Interface)

An IIFE can return an object that exposes a **public API** while keeping internal state private:

```js
const counter = (function () {
  let value = 0; // private

  return {
    increment() { value++; },
    get() { return value; }
  };
})();

counter.increment();
console.log(counter.get()); // 1
console.log(counter.value); // undefined — value is private
```

---

## IIFEs in Modern JavaScript

Before ES6, IIFEs were the primary tool for creating private scope. Today, `let`, `const`, and JavaScript modules have reduced the need for them — modules have their own scope by default:

```html
<script type="module">
  let x = 10; // scoped to this module, not global
</script>
```

IIFEs are still useful for:
- Running initialization code immediately
- Creating private variables in environments without modules
- Avoiding global scope pollution in legacy codebases
- Async startup logic using `await`

---

## Common Mistakes

**Forgetting the final `()`** — the function defines but never runs:

```js
(function () {
  console.log('Hello');
}); // ❌ never executes
```

**Trying to call an IIFE again** — IIFEs have no name in the outer scope, so they can't be re-invoked:

```js
(function () {
  console.log('Hello');
})();

// There is no way to call this again
```

**Invalid arrow IIFE syntax:**

```js
() => {}(); // ❌ invalid

(() => {})(); // ✅ correct
```

---

## Syntax Comparison Table

| Type | Traditional | Arrow |
|---|---|---|
| Basic | `(function(){})();` | `(()=>{})();` |
| Parameterized | `(function(x){})(5);` | `((x)=>{})(5);` |
| With return value | `let r = (function(){ return 1; })();` | `let r = (() => 1)();` |
| Async | `(async function(){})();` | `(async ()=>{})();` |
| Async + Parameters | `(async function(x){})(5);` | `(async (x)=>{})(5);` |

---

## Summary

An IIFE is a function expression that runs immediately after it is created.

- Wrap the function in `()` to make it an **expression**
- Add `()` at the end to **invoke it immediately**
- Everything inside is **private** — it does not leak into the global scope
- Can be **parameterized**, **async**, or return a **value**
- **Named IIFEs** allow recursion, but the name is invisible outside
- Heavily used before ES6 modules; still useful for initialization and encapsulation today

---