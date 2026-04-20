# JavaScript Type Conversion

> **Type Conversion** in JavaScript is the process of converting a variable's data type from one type to another. This can happen **automatically by JavaScript** (implicit) or **manually by the programmer** (explicit).

---

## Two Types of Conversion

| Type | Also Called | Who Does It | How |
|---|---|---|---|
| **Implicit** | Coercion | JavaScript (automatically) | Happens during arithmetic or logical operations |
| **Explicit** | Type Casting | The programmer (manually) | Using built-in functions like `Number()`, `String()`, `Boolean()` |

---

## Table of Contents

1. [Implicit Type Conversion (Coercion)](#implicit-type-conversion-coercion)
    - [String with Number](#1-string-with-number-concatenation)
    - [Boolean to Number](#2-boolean-to-number)
    - [Equality Comparison (==)](#3-equality-comparison-)
    - [Automatic Conversion in Logical Operations](#4-automatic-conversion-in-logical-operations)
2. [Explicit Type Conversion](#explicit-type-conversion)
    - [Converting to String](#1-converting-to-string)
    - [Converting to Number](#2-converting-to-number)
    - [Converting to Boolean](#3-converting-to-boolean)
3. [Why Learn Type Conversion?](#why-learn-type-conversion)
4. [Comparison Table](#type-conversion-comparison-table)
5. [Key Takeaways](#key-takeaways)

---

## Implicit Type Conversion (Coercion)

> Implicit type conversion is the **automatic** conversion of a variable's data type by JavaScript. It mostly occurs during **arithmetic** or **logical operations**.

---

### 1. String with Number (Concatenation)

When a **number is added to a string**, JavaScript automatically converts the number into a string and performs **string concatenation** instead of addition.

```js
let res = 5 + "5";
console.log(res);    // "55" (string, not the number 10)
```

> ⚠️ The `+` operator triggers **concatenation** when either operand is a string. JavaScript converts the number `5` to `"5"` automatically.

---

### 2. Boolean to Number

When performing **mathematical operations**, JavaScript automatically converts:
- `true` → `1`
- `false` → `0`

```js
let res = true + 1;
console.log(res);    // 2
```

| Boolean | Numeric Equivalent |
|---|---|
| `true` | `1` |
| `false` | `0` |

---

### 3. Equality Comparison (`==`)

The **loose equality operator (`==`)** compares two values **after converting them to the same data type** first. This is called type coercion during comparison.

```js
let res = (5 == "5");
console.log(res);    // true
```

> ⚠️ `5 == "5"` returns `true` because JavaScript converts `"5"` to the number `5` before comparing.
> 
> ✅ Use **strict equality (`===`)** to compare without type conversion — `5 === "5"` returns `false`.

---

### 4. Automatic Conversion in Logical Operations

In logical operations, JavaScript automatically converts values to `true` or `false` (called **truthy** and **falsy** values).

**Falsy values** — automatically converted to `false`:

| Value | Converts To |
|---|---|
| `undefined` | `false` |
| `null` | `false` |
| `""` (empty string) | `false` |
| `false` | `false` |
| `NaN` | `false` |
| `0` | `false` |

**All other values** are automatically converted to `true` (truthy).

```js
let res  = Boolean("");        // false — empty string is falsy
let res2 = Boolean("Hello");   // true  — non-empty string is truthy

console.log(res);    // false
console.log(res2);   // true
```

---

## Explicit Type Conversion

> Explicit type conversion is when the **programmer manually changes** the data type of a variable using JavaScript's built-in conversion functions.

---

### 1. Converting to String

Three ways to convert a value to a string:

| Method | Syntax | Notes |
|---|---|---|
| `String()` function | `String(value)` | Most common, works on all types |
| `.toString()` method | `value.toString()` | Called on the variable directly |
| Empty string concat | `value + ""` | Implicit — triggers coercion |

```js
let n = 123;

let s1 = String(n);      // "123"
let s2 = n.toString();   // "123"

console.log(s1);   // "123"
console.log(s2);   // "123"
```

---

### 2. Converting to Number

Three ways to convert a value to a number:

| Method | Syntax | Notes |
|---|---|---|
| `Number()` function | `Number(value)` | Converts entire value; returns `NaN` if invalid |
| `parseInt()` | `parseInt(string)` | Parses only the **integer** part of a string |
| `parseFloat()` | `parseFloat(string)` | Parses the **decimal** part of a string too |

```js
let s = "123";
let n = Number(s);         // 123
console.log(n);            // 123

let s1 = "12.34";
let n1 = parseFloat(s1);   // 12.34
console.log(n1);           // 12.34
```

#### Quick Comparison

| Input | `Number()` | `parseInt()` | `parseFloat()` |
|---|---|---|---|
| `"123"` | `123` | `123` | `123` |
| `"12.34"` | `12.34` | `12` | `12.34` |
| `"123abc"` | `NaN` | `123` | `123` |
| `""` | `0` | `NaN` | `NaN` |
| `true` | `1` | `NaN` | `NaN` |
| `false` | `0` | `NaN` | `NaN` |

---

### 3. Converting to Boolean

Use the `Boolean()` function to explicitly convert any value to `true` or `false`.

```js
let str      = "Hello";
let b1       = Boolean(str);       // true — non-empty string

let emptyStr = "";
let b2       = Boolean(emptyStr);  // false — empty string

console.log(b1);   // true
console.log(b2);   // false
```

#### Conversion Rules

| Value | `Boolean()` Result |
|---|---|
| Any non-empty string | `true` |
| `""` (empty string) | `false` |
| Any non-zero number | `true` |
| `0` or `NaN` | `false` |
| Any object or array | `true` |
| `null` or `undefined` | `false` |

---

## Why Learn Type Conversion?

### 1. Data Handling
When working with **API responses**, **user inputs**, and **calculations**, type conversion is frequently required. Data from external sources often arrives as strings and must be converted before use.

### 2. Prevent Bugs
Understanding type conversion helps **prevent unexpected bugs** that occur when JavaScript implicitly converts values in ways you didn't intend (e.g., `5 + "5"` giving `"55"` instead of `10`).

### 3. Code Clarity
Using **explicit conversion** makes your intentions clear to other developers. It makes the code **more predictable, bug-free, and easier to maintain**.

---

## Type Conversion Comparison Table

| Scenario | Implicit Conversion (Coercion) | Explicit Conversion |
|---|---|---|
| **String + Number** | Automatically converts number to string | Manually convert using `String()` or `.toString()` |
| **Number + Boolean** | Converts `true` to `1`, `false` to `0` | Use `Number()` to explicitly convert |
| **String to Boolean** | Non-empty strings → `true`; empty → `false` | Use `Boolean()` for clarity |
| **Number from String** | Implicit coercion with `+` operator | Use `Number()`, `parseInt()`, or `parseFloat()` |

---

## Key Takeaways

- JavaScript has **two kinds** of type conversion — implicit (coercion) and explicit (manual)
- The `+` operator is the most common source of **implicit coercion bugs** — adding a number to a string gives a string, not a number
- Always prefer **`===` (strict equality)** over `==` (loose equality) to avoid unintended type coercion during comparison
- The six **falsy values** to memorise: `false`, `0`, `""`, `null`, `undefined`, `NaN` — everything else is truthy
- Use **`Number()`** for general conversion, **`parseInt()`** for integers, and **`parseFloat()`** for decimals
- **Explicit conversion** makes code clearer, safer, and easier to debug than relying on JavaScript's automatic coercion

---