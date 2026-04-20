# JavaScript Arithmetic Operators

> **JavaScript Arithmetic Operators** operate upon numerical values and return a numerical value. They are the foundation of all mathematical operations in JavaScript.

---

## Overview of All Arithmetic Operators

| Operator | Symbol | Description |
|---|---|---|
| Addition | `+` | Adds two numbers, or concatenates strings |
| Subtraction | `-` | Finds the difference between two operands |
| Multiplication | `*` | Finds the product of two operands |
| Division | `/` | Divides left operand by right operand |
| Modulus | `%` | Returns the remainder after division |
| Exponentiation | `**` | Raises first operand to the power of the second |
| Increment | `++` | Adds 1 to the operand |
| Decrement | `--` | Subtracts 1 from the operand |
| Unary Negation | `-` | Negates a single operand |
| Unary Plus | `+` | Converts a non-number into a number |

---

## Table of Contents

1. [Addition (+)](#1-addition--operator)
2. [Subtraction (-)](#2-subtraction---operator)
3. [Multiplication (*)](#3-multiplication--operator)
4. [Division (/)](#4-division--operator)
5. [Modulus (%)](#5-modulus--operator)
6. [Exponentiation (**)](#6-exponentiation--operator)
7. [Increment (++)](#7-increment--operator)
8. [Decrement (--)](#8-decrement----operator)
9. [Unary Negation (-)](#9-unary-negation---operator)
10. [Unary Plus (+)](#10-unary-plus--operator)

---

## 1. Addition (`+`) Operator

The addition operator takes two numerical operands and returns their **numerical sum**. It also **concatenates** two strings or a number with a string.

```js
// Number + Number => Addition
let x = 1 + 2;
console.log(x);        // 3

// Number + String => Concatenation
let y = 5 + "hello";
console.log(y);        // "5hello"
```

### Key Points
- When **both operands are numbers**, it performs **addition**
- When **either operand is a string**, it performs **string concatenation**
- The `+` operator has **dual behaviour** — arithmetic and concatenation

---

## 2. Subtraction (`-`) Operator

The subtraction operator returns the **difference** between two operands as a numerical value.

```js
// Number - Number => Subtraction
let x = 10 - 7;
console.log(x);        // 3

let y = "Hello" - 1;
console.log(y);        // NaN
```

### Key Points
- Works straightforwardly between **two numbers**
- If a **non-numeric string** is used (e.g., `"Hello" - 1`), the result is **`NaN`** (Not-a-Number)
- Unlike `+`, the `-` operator does **not** concatenate — it always attempts numeric subtraction

---

## 3. Multiplication (`*`) Operator

The multiplication operator returns the **product** of two operands — one is the multiplicand and the other is the multiplier.

```js
// Number * Number => Multiplication
let x = 3 * 3;
let y = -4 * 4;
console.log(x);             // 9
console.log(y);             // -16

let a = Infinity * 0;
let b = Infinity * Infinity;
console.log(a);             // NaN
console.log(b);             // Infinity

let z = 'hi' * 2;
console.log(z);             // NaN
```

### Key Points
- Multiplying a **negative number** results in a negative product
- `Infinity * 0` → `NaN` (indeterminate form)
- `Infinity * Infinity` → `Infinity`
- Multiplying a **non-numeric string** by a number → `NaN`

---

## 4. Division (`/`) Operator

The division operator returns the **quotient** of its operands. The **left operand** is the dividend and the **right operand** is the divisor.

```js
// Number / Number => Division
let x = 5 / 2;
let y = 1.0 / 2.0;
console.log(x);        // 2.5
console.log(y);        // 0.5

let a = 3.0 / 0;
let b = 4.0 / 0.0;
console.log(a);        // Infinity
console.log(b);        // Infinity

let z = 2.0 / -0.0;
console.log(z);        // -Infinity
```

### Key Points
- JavaScript division returns **floating-point results** (not integer-only like some other languages)
- Dividing a **positive number by `0`** → `Infinity`
- Dividing a **positive number by `-0`** → `-Infinity`
- JavaScript treats `0` and `-0` as **distinct values** for division purposes

---

## 5. Modulus (`%`) Operator

The modulus operator (also called the **remainder operator**) returns the **remainder** left over when the dividend is divided by the divisor. The result takes the **sign of the dividend**.

```js
let x =  9 % 5;     console.log(x);   //  4
let y = -12 % 5;    console.log(y);   // -2
let z =  1 % -2;    console.log(z);   //  1
let a =  5.5 % 2;   console.log(a);   //  1.5
let b = -4 % 2;     console.log(b);   // -0
let c = NaN % 2;    console.log(c);   //  NaN
```

### Key Points
- The result always takes the **sign of the dividend** (left operand), not the divisor
- Works with **floating-point numbers** (e.g., `5.5 % 2` = `1.5`)
- `NaN % anything` → `NaN`
- Also known as the **remainder operator**

---

## 6. Exponentiation (`**`) Operator

The exponentiation operator raises the **first operand to the power of the second operand**. It is **right-associative**, meaning it evaluates from right to left.

```js
// let x = -4 ** 2;   // ❌ SyntaxError — ambiguous unary + base
let y = -(4 ** 2);    console.log(y);   // -16
let z = 2 ** 5;       console.log(z);   // 32
let a = 3 ** 3;       console.log(a);   // 27
let b = 3 ** 2.5;     console.log(b);   // 15.588457...
let c = 10 ** -2;     console.log(c);   // 0.01
let d = 2 ** 3 ** 2;  console.log(d);   // 512 (right-associative: 2 ** (3**2) = 2**9)
let e = NaN ** 2;     console.log(e);   // NaN
```

### Key Points
- **Right-associative**: `2 ** 3 ** 2` evaluates as `2 ** (3 ** 2)` = `2 ** 9` = `512`
- You **cannot** place a unary operator (`+`, `-`, `~`, `!`, `delete`, `void`) immediately before the base — use parentheses instead: `-(4 ** 2)`
- Supports **fractional exponents** (e.g., `3 ** 2.5`)
- Supports **negative exponents** (e.g., `10 ** -2` = `0.01`)
- `NaN ** anything` → `NaN`

---

## 7. Increment (`++`) Operator

The increment operator **adds 1** to its operand. It has two forms depending on where it is placed:

| Form | Syntax | Behaviour |
|---|---|---|
| **Postfix** | `x++` | Returns the value **before** incrementing |
| **Prefix** | `++x` | Returns the value **after** incrementing |

```js
// Postfix — returns OLD value, then increments
let a = 2;
b = a++;          // b = 2, a = 3
console.log(a);   // 3
console.log(b);   // 2

// Prefix — increments first, then returns NEW value
let x = 5;
y = ++x;          // x = 6, y = 6
console.log(x);   // 6
console.log(y);   // 6
```

### Key Points
- **Postfix (`x++`)** — use the current value now, increment later
- **Prefix (`++x`)** — increment first, use the new value immediately
- The difference only matters when the **result is assigned** to another variable

---

## 8. Decrement (`--`) Operator

The decrement operator **subtracts 1** from its operand. Like increment, it has two forms:

| Form | Syntax | Behaviour |
|---|---|---|
| **Postfix** | `x--` | Returns the value **before** decrementing |
| **Prefix** | `--x` | Returns the value **after** decrementing |

```js
// Prefix — decrements first, then returns NEW value
let a = 2;
b = --a;          // a = 1, b = 1
console.log(a);   // 1
console.log(b);   // 1

// Postfix — returns OLD value, then decrements
let x = 3;
y = x--;          // y = 3, x = 2
console.log(x);   // 2
console.log(y);   // 3
```

### Key Points
- **Postfix (`x--`)** — return the current value, decrement after
- **Prefix (`--x`)** — decrement first, return the new (lower) value
- Commonly used in **loops** to count down

---

## 9. Unary Negation (`-`) Operator

A **unary operator** — it operates on a **single operand** and returns its **negation**. It can also convert non-numbers into numbers.

```js
let a = 3;
b = -a;
console.log(a);   // 3
console.log(b);   // -3

// Unary negation can convert non-numbers into a number
let x = "3";
y = -x;
console.log(x);   // "3" (original string unchanged)
console.log(y);   // -3  (converted to number and negated)
```

### Key Points
- Flips the **sign** of a number (positive → negative, negative → positive)
- Can **convert a numeric string** like `"3"` into the number `-3`
- Does **not modify** the original variable — returns a new value

---

## 10. Unary Plus (`+`) Operator

The unary plus operator is the **fastest and preferred way** to convert a non-number into a number. Unlike unary negation, it performs **no other operation** on the value.

```js
let a = +4;       console.log(a);   // 4
let b = +'2';     console.log(b);   // 2      (string → number)
let c = +true;    console.log(c);   // 1      (boolean → number)
let x = +false;   console.log(x);   // 0      (boolean → number)
let y = +null;    console.log(y);   // 0      (null → number)
```

### Conversion Reference

| Value | After Unary `+` | Result |
|---|---|---|
| `4` | `+4` | `4` |
| `'2'` | `+'2'` | `2` |
| `true` | `+true` | `1` |
| `false` | `+false` | `0` |
| `null` | `+null` | `0` |

### Key Points
- Preferred over unary negation (`-`) for type conversion because it **doesn't change the value's sign**
- Converts strings, booleans, and `null` to their **numeric equivalents**
- Faster and cleaner than using `Number()` for quick conversions

---

## Key Takeaways

- The `+` operator is **unique** — it performs addition with numbers and **concatenation** with strings
- The `-`, `*`, `/`, and `%` operators always attempt **numeric operations** — non-numeric strings produce `NaN`
- The `**` operator is **right-associative** — always wrap unary operators in parentheses when using it
- `++` and `--` behave differently depending on **prefix vs postfix** placement — the order of evaluation matters when assigning results
- **Unary `+`** is the fastest way to convert a value to a number
- Dividing by `0` in JavaScript does **not throw an error** — it returns `Infinity` or `-Infinity`
- Any operation involving `NaN` will **always return `NaN`**

---