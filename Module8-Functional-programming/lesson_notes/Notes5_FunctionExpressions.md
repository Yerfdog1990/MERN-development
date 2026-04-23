# JavaScript Function Expressions

## Introduction

A **function expression** is a way to define a function by assigning it to a variable or using it within an expression. This approach allows the function to be stored, passed as an argument, or executed immediately.

Key characteristics:
- Function expressions can be **named or anonymous**.
- They are **not hoisted** — meaning they are only accessible after their definition in the code.
- Frequently used in **callbacks**, **closures**, and **dynamic function creation**.
- Enable **encapsulation** of functionality within a limited scope.

```javascript
const greet = function(name) {
  return `Hello, ${name}!`;
};

console.log(greet("Steven")); // Output: Hello, Steven!
```

**Breaking it down:**
- `function(name)` creates an anonymous function assigned to the `greet` variable.
- The function takes `name` as a parameter and returns a greeting string.
- Calling `greet("Steven")` invokes the function and outputs the greeting.

---

## Syntax

```javascript
const fName = function(params) {
  // function body
};
```

- `fName` — the variable that stores the function.
- `function(params)` — defines the function; parameters are optional.
- `{ // function body }` — contains the logic to execute when the function is called.

> A function expression defines a function as part of an expression, making it versatile for assigning to variables, passing as arguments, or invoking immediately.

---

## Named vs Anonymous Function Expressions

### Anonymous Function Expression

The function has **no name** and is typically assigned to a variable.

```javascript
const sum = function(a, b) {
  return a + b;
};

console.log(sum(5, 3)); // Output: 8
```

- The function itself carries no name — it is only reachable through the variable `sum`.
- If it appears in an error stack trace, it will show as `anonymous`.

---

### Named Function Expression

The function is given a **name**, which is especially useful for **recursion** and **debugging**.

```javascript
const factorial = function fact(n) {
  if (n === 0) return 1;
  return n * fact(n - 1);
};

console.log(factorial(5)); // Output: 120
```

- The internal name `fact` is used for **self-reference** (recursion) inside the function.
- Outside the function, it is only accessible through the variable `factorial`.
- The name `fact` appears in stack traces, making debugging easier.

> **Key distinction:** In a named function expression, the internal name is scoped to the function itself and cannot be accessed from outside.

---

## Use Cases of Function Expressions

### 1. Storing in Variables

Function expressions can be stored in variables so they can be reused easily whenever needed.

```javascript
const add = function(x, y) {
  return x + y;
};

console.log(add(3, 5)); // Output: 8
```

- The function is defined once and stored in `add`.
- It can be called as many times as needed just like any named function.

---

### 2. Callback Functions

A **callback function** is passed as an argument to another function and executed later when needed. Function expressions are ideal for this.

```javascript
setTimeout(function() {
  console.log("This message appears after 3 seconds!");
}, 3000);
```

- The anonymous function is passed directly as the first argument to `setTimeout()`.
- It executes automatically after **3000 milliseconds (3 seconds)**.
- There is no need to define a named function separately since it is used only once.

---

### 3. Event Handlers

Function expressions are useful for **event listeners** because they allow you to define a function directly where it is needed.

```javascript
document.querySelector("button").addEventListener("click", function() {
  console.log("Button clicked!");
});
```

- The anonymous function is defined inline as the event handler.
- It runs every time the button is clicked.
- Keeping the logic close to where it's needed makes the code more readable.

---

### 4. Self-Invoking Functions (IIFE)

Function expressions can be **immediately executed** without being assigned to a variable or called separately.

```javascript
(function() {
  console.log("This is a self-invoking function!");
})();

// Output: This is a self-invoking function!
```

- The function is wrapped in `()` to treat it as an expression.
- The trailing `()` immediately invokes it.
- Useful for initialization code that should run once without polluting the global scope.

---

## Arrow Functions — A Variant of Function Expressions

Arrow functions are a **concise, modern ES6 syntax** for writing function expressions. They are particularly useful for short, single-purpose functions.

```javascript
const arrowFunc = (param1, param2) => param1 + param2;

console.log(arrowFunc(5, 7)); // Output: 12
```

### Key Features of Arrow Functions

- **Implicit return** — for single-line functions, the result is returned automatically without the `return` keyword.
- **No `this` binding** — arrow functions do not bind their own `this`, making them unsuitable for object methods that need a `this` context.
- **Cleaner syntax** — less boilerplate compared to traditional function expressions.

```javascript
// Traditional function expression
const square = function(n) {
  return n * n;
};

// Equivalent arrow function
const square = n => n * n;

console.log(square(6)); // Output: 36
```

---

## Advantages of Function Expressions

### Flexibility
Function expressions can be used as callbacks, event handlers, or part of any expression — wherever a value is expected.

```javascript
const operate = function(a, b, operation) {
  return operation(a, b);
};

console.log(operate(4, 2, function(x, y) { return x * y; })); // Output: 8
```

### Encapsulation
Variables and logic inside a function expression stay within their scope, avoiding pollution of the global namespace.

```javascript
(function() {
  let localVar = "I'm scoped here";
  console.log(localVar); // Output: I'm scoped here
})();

// console.log(localVar); // ❌ Error: localVar is not defined
```

### Control Over Execution
Unlike function declarations (which are hoisted and available everywhere), function expressions execute **only when explicitly invoked** or when their containing code runs.

---

## Function Expression vs Function Declaration

| Feature                    | Function Expression                              | Function Declaration                         |
|----------------------------|--------------------------------------------------|----------------------------------------------|
| **Hoisting**               | ❌ Not hoisted — must be defined before use       | ✅ Hoisted — can be called before definition  |
| **Naming**                 | Can be anonymous or named                        | Always has a name                            |
| **Syntax**                 | Defined within an expression                     | Uses `function` keyword with a name          |
| **Best used for**          | Callbacks, dynamic functions, closures           | Defining reusable standalone functions       |
| **Stored in variable**     | ✅ Yes                                            | ❌ No (defined as a statement)               |
| **Passed as argument**     | ✅ Yes                                            | ⚠️ Possible but uncommon                    |

### Hoisting in Action

```javascript
// ✅ Function Declaration — works before definition (hoisted)
console.log(sayHello()); // Output: Hello!

function sayHello() {
  return "Hello!";
}

// ❌ Function Expression — cannot be called before definition
console.log(greet()); // ❌ Error: greet is not a function

const greet = function() {
  return "Hi!";
};
```

---

## Summary

```javascript
// 1. Anonymous Function Expression
const multiply = function(a, b) {
  return a * b;
};
console.log(multiply(3, 4)); // Output: 12

// 2. Named Function Expression (with recursion)
const power = function exp(base, exponent) {
  if (exponent === 0) return 1;
  return base * exp(base, exponent - 1);
};
console.log(power(2, 5)); // Output: 32

// 3. Arrow Function Expression
const divide = (a, b) => a / b;
console.log(divide(10, 2)); // Output: 5

// 4. Immediately Invoked (IIFE)
(function() {
  console.log("Runs immediately!");
})(); // Output: Runs immediately!

// 5. As a Callback
[1, 2, 3].forEach(function(num) {
  console.log(num * 10);
});
// Output: 10, 20, 30
```

---

## Key Takeaways

- A **function expression** assigns a function to a variable or uses it as part of an expression.
- Function expressions are **not hoisted** — always define them before calling them.
- **Anonymous** function expressions have no internal name; **named** ones allow recursion and better stack traces.
- Use function expressions for **callbacks**, **event handlers**, **IIFEs**, and anywhere a function needs to be passed or stored dynamically.
- **Arrow functions** are a modern, concise form of function expressions but lack their own `this` binding.
- Prefer **function declarations** for general reusable functions; prefer **function expressions** for dynamic, scoped, or one-time-use logic.

---