# Difference Between `var`, `let`, and `const` in JavaScript

JavaScript provides three ways to declare variables: `var`, `let`, and `const`. They differ in **scope**, **hoisting behaviour**, and **re-assignment rules**.

| Feature | `var` | `let` | `const` |
|---|---|---|---|
| Scope | Function / Global | Block | Block |
| Re-declaration | Allowed | Not allowed | Not allowed |
| Re-assignment | Allowed | Allowed | Not allowed |
| Hoisting | Yes (`undefined`) | Yes (TDZ) | Yes (TDZ) |
| Initialisation required | No | No | Yes |

```js
// var example
var x = 10;
var x = 20;   // Re-declaration allowed
x = 30;       // Update allowed
console.log(x); // 30

// let example
let y = 10;
// let y = 20; // Re-declaration NOT allowed
y = 25;        // Update allowed
console.log(y); // 25

// const example
const z = 10;
// z = 20;     // Re-assignment NOT allowed
console.log(z); // 10

// Block scope demonstration
if (true) {
  var a = 1;
  let b = 2;
  const c = 3;
}

console.log(a); // 1 — works (var is function/global scoped)
// console.log(b); // ReferenceError (let is block scoped)
// console.log(c); // ReferenceError (const is block scoped)
```

---

## 1. Declaring Variables with `var`

`var` is the original keyword for declaring variables in JavaScript. It is **function-scoped** or **globally scoped**, depending on where it is declared.

```js
function e() {
  var n = "Janardhan";
  console.log(n); // "Janardhan"
}

e();
```

- The variable `n` is declared inside the function with `var`, so it is scoped to that function.
- When `e()` is called, it outputs `"Janardhan"` to the console.
- `n` is not accessible outside the function.

---

## 2. Block Scope with `let`

Introduced in **ES6**, `let` provides **block-level scoping**. The variable is only accessible within the block (such as a loop, conditional, or any `{}`) where it is declared.

```js
if (true) {
  let age = 30;
  console.log(age); // 30
}

console.log(age); // ReferenceError: age is not defined
```

- `age` is declared with `let` inside the `if` block, so it is only accessible within that block.
- The second `console.log(age)` throws a `ReferenceError` because `age` does not exist in the outer scope.

---

## 3. Immutability with `const`

`const` is used to declare variables that **cannot be reassigned** after their initial assignment. Like `let`, it is also **block-scoped**.

```js
const country = "USA";
console.log(country); // "USA"

// country = "India"; // TypeError: Assignment to constant variable
```

- The variable `country` is declared with `const` — its value cannot be changed after initialisation.
- Any attempt to reassign it will throw a `TypeError`.

> `const` requires an initial value at the time of declaration. `const x;` alone is a `SyntaxError`.

---

## 4. Hoisting Behaviour of `var`, `let`, and `const`

Hoisting is a JavaScript behaviour where variable declarations are moved to the top of their scope during compilation. However, the behaviour differs for each keyword.

### Hoisting with `var`

```js
console.log(x); // undefined
var x = 5;
```

> `x` is hoisted and initialised to `undefined`. So accessing it before assignment returns `undefined`, not an error.

### Hoisting with `let`

```js
console.log(x); // ReferenceError: Cannot access 'x' before initialization
let x = 10;
```

> `let` is hoisted but **not initialised**. It stays in the **Temporal Dead Zone (TDZ)** until the declaration line is reached. Accessing it before that throws a `ReferenceError`.

### Hoisting with `const`

```js
console.log(x); // ReferenceError: Cannot access 'x' before initialization
const x = 10;
```

> Like `let`, `const` is hoisted but remains in the TDZ until its declaration is executed.

---

## 5. Re-declaring Variables

### Re-declaring with `var`

`var` allows re-declaration in the same scope. The second declaration simply overwrites the first.

```js
var name = "Pranjal";
var name = "Tanmay"; // No error
console.log(name);   // "Tanmay"
```

### Re-declaring with `let`

`let` allows **reassignment** but not **re-declaration** within the same scope.

```js
let name = "Pranjal";
name = "Tanmay";     // Reassignment allowed
console.log(name);   // "Tanmay"

// let name = "Rohit"; // SyntaxError: Identifier 'name' has already been declared
```

### Re-declaring with `const`

`const` allows neither reassignment nor re-declaration.

```js
const city = "New York";
city = "Los Angeles"; // TypeError: Assignment to constant variable
console.log(city);
```

---

## 6. Block-Level Scope in Loops with `let`

When using `let` in a loop, each iteration creates a **new instance** of the variable. This is different from `var`, which shares the same variable across all iterations.

```js
for (let i = 0; i < 3; i++) {
  console.log(i); // 0, 1, 2
}

console.log(i); // ReferenceError: i is not defined
```

- `let` creates a variable `i` scoped to the loop block.
- Accessing `i` outside the loop throws a `ReferenceError`.

**Compare with `var`:**

```js
for (var i = 0; i < 3; i++) {
  console.log(i); // 0, 1, 2
}

console.log(i); // 3 — accessible outside (var is not block-scoped)
```

---

## 7. Constant Arrays and Objects with `const`

`const` makes the **reference** constant, not the value itself. This means the contents of arrays and objects can still be modified.

### Arrays with `const`

```js
const numbers = [1, 2, 3];
numbers.push(4);          // Allowed — modifying contents
console.log(numbers);     // [1, 2, 3, 4]

numbers = [5, 6];         // TypeError — reassigning the reference is not allowed
```

### Objects with `const`

```js
const person = { name: "Pranjal", age: 30 };
person.age = 31;          // Allowed — modifying a property
console.log(person);      // { name: "Pranjal", age: 31 }

person = { name: "Nanda" }; // TypeError — reassigning the reference is not allowed
```

> `const` prevents re-binding the variable to a new value or object, but the internal contents of an object or array remain mutable.

---

## 8. When to Use `var`, `let`, and `const`

`var` can be tricky because its scope is either global or within a function, which can lead to hard-to-spot bugs. Modern JavaScript best practice is to avoid `var` entirely.

- Use **`const`** by default — for values that should not change once set.
- Use **`let`** when you know a variable's value will need to change later.
- Avoid **`var`** in modern code — its function-scoping and hoisting behaviour causes unexpected results.

---

## Full Comparison Table

| Feature | `var` | `let` | `const` |
|---|---|---|---|
| Scope | Function / Global | Block | Block |
| Hoisting | Yes, initialised to `undefined` | Yes, stays in TDZ | Yes, stays in TDZ |
| Re-declaration (same scope) | Allowed | Not allowed | Not allowed |
| Re-assignment | Allowed | Allowed | Not allowed |
| Declare without initialisation | Allowed | Allowed | Not allowed |
| Access before declaration | Returns `undefined` | `ReferenceError` | `ReferenceError` |
| Object/array contents mutable | Yes | Yes | Yes |

---

## Summary

- **`var`** — function-scoped, hoisted with `undefined`, allows re-declaration and re-assignment. Avoid in modern code.
- **`let`** — block-scoped, hoisted but in TDZ, allows re-assignment but not re-declaration. Use when a value needs to change.
- **`const`** — block-scoped, hoisted but in TDZ, allows neither re-assignment nor re-declaration. Use by default for most variables.

Using `let` and `const` makes code easier to understand and helps prevent errors caused by unexpected variable changes.

---