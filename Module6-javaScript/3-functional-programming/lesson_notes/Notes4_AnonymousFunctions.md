# JavaScript Anonymous Functions

## Introduction

An **anonymous function** is a function **without a name**, mainly used for specific or short-term tasks. It is often assigned to variables or passed as arguments in situations where reuse is not required.

Key characteristics:
- It omits the function name and is defined using either the `function` keyword or arrow (`=>`) syntax.
- It is commonly used as **callbacks** or for **one-time execution** within a limited scope.

```javascript
let greet = function() {
  console.log("Hello!");
};

greet(); // Output: Hello!
```

---

## Syntax

### Using the `function` Keyword

```javascript
function() {
  // Function Body
}
```

### Using Arrow Function Syntax

```javascript
(() => {
  // Function Body
})();
```

> **Important Note:** When using an anonymous function as an IIFE (self-executing), you **must** wrap it in parentheses `()`. The parentheses treat the anonymous function as an **expression**, which returns a function object. Omitting them results in a **syntax error**.

---

## Basic Examples

### Example 1 — Storing in a Variable

An anonymous function is defined, stored in the `greet` variable, and executed by calling `greet()`.

```javascript
const greet = function () {
  console.log("Welcome to GeeksforGeeks!");
};

greet(); // Output: Welcome to GeeksforGeeks!
```

**How it works:**
- The anonymous function has no name of its own.
- It is assigned to the variable `greet`.
- The variable `greet` is then used to call and execute the function.

---

### Example 2 — Passing Arguments

Anonymous functions can accept parameters just like named functions.

```javascript
const greet = function(str) {
  console.log("Welcome to", str);
};

greet("GeeksforGeeks!"); // Output: Welcome to GeeksforGeeks!
```

- `str` is the parameter that receives the argument `"GeeksforGeeks!"` when the function is called.

---

### Example 3 — As a Callback Function

Because JavaScript supports **Higher-Order Functions**, anonymous functions can be passed as arguments to other functions. This is one of their most common use cases.

```javascript
setTimeout(function () {
  console.log("Welcome to GeeksforGeeks!");
}, 2000);

// Output (after 2 seconds): Welcome to GeeksforGeeks!
```

- The anonymous function is passed directly as the first argument to `setTimeout()`.
- It executes automatically after **2000 milliseconds (2 seconds)**.
- There is no need to define a named function separately since it is only used once.

---

## Self-Executing Anonymous Functions (IIFE)

An **Immediately Invoked Function Expression (IIFE)** is an anonymous function that **runs immediately** after it is defined, without needing to be called separately.

```javascript
(function () {
  console.log("Welcome to GeeksforGeeks!");
})();

// Output: Welcome to GeeksforGeeks!
```

**Why use IIFEs?**
- To run code **immediately** without polluting the global scope.
- To create a **private scope** — variables inside an IIFE are not accessible from outside.
- Commonly used for **initialization code** that only needs to run once.

```javascript
// Variables inside an IIFE stay private
(function () {
  let message = "This is private!";
  console.log(message); // Output: This is private!
})();

// console.log(message); // ❌ Error: message is not defined
```

---

## Arrow Functions

Arrow functions are a **shorter ES6 syntax** for writing anonymous functions. The `function` keyword is not required — instead, `=>` is used to define the function.

- They provide a more **concise and readable** syntax.
- Commonly used for **callbacks** and short function expressions.
- Arrow functions do **not** have their own `this` binding — they inherit `this` from their surrounding (lexical) scope.

### Example 1 — Basic Arrow Function

```javascript
const greet = () => {
  console.log("Welcome to GeeksforGeeks!");
};

greet(); // Output: Welcome to GeeksforGeeks!
```

---

### Example 2 — Concise Single-Expression Arrow Function

If an arrow function contains **only one statement**, the curly braces `{}` can be omitted. The result of that statement is returned **automatically** without needing the `return` keyword.

```javascript
const greet = () => console.log("Welcome to GeeksforGeeks!");

greet(); // Output: Welcome to GeeksforGeeks!
```

---

### Example 3 — Arrow Function IIFE

Arrow functions can also be written as self-executing IIFEs.

```javascript
(() => {
  console.log("GeeksforGeeks");
})();

// Output: GeeksforGeeks
```

---

## Comparison — `function` Keyword vs Arrow Function

| Feature                     | `function` Keyword Anonymous       | Arrow Function (`=>`)              |
|-----------------------------|------------------------------------|------------------------------------|
| Syntax                      | `function() { }`                   | `() => { }`                        |
| Own `this` binding          | ✅ Yes                              | ❌ No — inherits from outer scope   |
| Can be used as constructor  | ✅ Yes (with `new`)                 | ❌ No                               |
| Concise single-line form    | ❌ No                               | ✅ Yes — `() => expression`         |
| `arguments` object          | ✅ Available                        | ❌ Not available                    |
| Best used for               | Callbacks, constructors, methods   | Callbacks, short expressions       |

---

## Anonymous Functions vs Named Functions

| Feature               | Named Function              | Anonymous Function                |
|-----------------------|-----------------------------|-----------------------------------|
| Has a name            | ✅ Yes                       | ❌ No                              |
| Hoisted               | ✅ Yes                       | ❌ No (only variable is hoisted)   |
| Reusable by name      | ✅ Yes                       | ❌ Only via the variable it's in   |
| Self-referencing      | ✅ Easy (use the name)       | ⚠️ Requires the variable          |
| Appears in stack trace| ✅ Yes (with its name)       | ❌ Shown as anonymous              |

---

## Practical Use Cases

### As an Event Listener

```javascript
document.getElementById("btn").addEventListener("click", function () {
  console.log("Button clicked!");
});
```

### As an Arrow Function Callback with `map()`

```javascript
const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map(n => n * 2);

console.log(doubled); // Output: [2, 4, 6, 8, 10]
```

### Storing Logic in a Variable

```javascript
const multiply = function(a, b) {
  return a * b;
};

console.log(multiply(3, 4)); // Output: 12
```

---

## Key Takeaways

- An **anonymous function** has no name and is typically assigned to a variable or passed as a callback.
- Anonymous functions are **not hoisted** — they must be defined before they are called.
- **IIFEs** (Immediately Invoked Function Expressions) allow anonymous functions to execute immediately, creating a private scope.
- **Arrow functions** are the modern, concise ES6 way to write anonymous functions.
- Arrow functions with a **single expression** can omit `{}` and `return` for even cleaner syntax.
- Arrow functions do **not** have their own `this`, making them unsuitable as object methods or constructors.
- Use anonymous functions for **callbacks**, **event handlers**, and **one-time logic** where naming a function is unnecessary.

---