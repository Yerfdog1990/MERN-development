# JavaScript Template Literals

> **Template literals** are strings written using backticks (`` ` ``) that allow variables and expressions to be embedded directly. Introduced in **ES6**, they make strings more readable and support easy interpolation and multi-line text without complex concatenation.

---

## Core Concepts

- Use **backticks** (`` ` ``) instead of single or double quotes to define a template literal
- Use **`${}`** to embed variables, expressions, or function calls directly inside the string
- Introduced in **ES6** — a modern, cleaner alternative to traditional string concatenation

```js
let a = 'GFG';
console.log(`hello ${a}`);   // hello GFG
```

- **Embedding variables:** `hello ${a}` inserts the variable value directly, producing `hello GFG`
- **Cleaner concatenation:** No need for `+` signs — strings become more readable and easier to write

### Syntax at a Glance

| Syntax | Purpose |
|---|---|
| `` ` `` Backticks | Define a template literal |
| `${}` | Insert any expression — variables, math, function calls, conditions |

---

## Table of Contents

1. [String Interpolation with Expressions](#1-string-interpolation-with-expressions)
2. [Multi-line Strings](#2-multi-line-strings)
3. [Tagged Template Literals](#3-tagged-template-literals)
4. [Escaping Backticks and Dollar Signs](#4-escaping-backticks-and-dollar-signs)
5. [7 Types of Template Literal Usage](#7-types-of-template-literal-usage)
    - [Multi-line Strings](#type-1-multi-line-strings)
    - [Dynamic Expressions](#type-2-dynamic-expressions)
    - [Tagged Templates](#type-3-tagged-templates)
    - [HTML Templates](#type-4-html-template)
    - [Conditionals in Templates](#type-5-conditionals-in-templates)
    - [Loops with Templates](#type-6-loops-with-templates)
    - [Embedding Functions](#type-7-embedding-functions)
6. [Key Takeaways](#key-takeaways)

---

## 1. String Interpolation with Expressions

String interpolation lets you insert not just variables, but also **expressions** — like math operations or function results — directly into a string using `${}`.

```js
let x = 5;
let y = 10;
console.log(`The sum of ${x} and ${y} is ${x + y}`);
// The sum of 5 and 10 is 15
```

### Key Points
- Inside `${}`, expressions like `x + y` are **evaluated first**, then the result is inserted into the string
- Allows **dynamic string creation** by combining variables and expressions in one place
- Makes the code **cleaner and easier to read** compared to `"The sum of " + x + " and " + y + " is " + (x + y)`

---

## 2. Multi-line Strings

Template literals allow you to create **multi-line strings** naturally, without needing escape characters like `\n`.

```js
const s = `This is a multi-line
string that spans across
several lines.`;

console.log(s);
// This is a multi-line
// string that spans across
// several lines.
```

### Key Points
- Template literals **preserve line breaks** exactly as written in the code
- **No need for `\n`** — line breaks are handled automatically
- Makes writing multi-line text, HTML snippets, or poems much cleaner

---

## 3. Tagged Template Literals

Tagged template literals allow you to **customise how a string is processed** by passing it through a function. This gives you full control over string creation.

```js
function greet(strings, name) {
    return `${strings[0]}${name.toUpperCase()}${strings[1]}`;
}

const name = 'gfg';
console.log(greet`Hello, ${name}!`);
// Hello, GFG!
```

### How It Works

| Part | Value | Explanation |
|---|---|---|
| `strings[0]` | `"Hello, "` | Static text before the expression |
| `strings[1]` | `"!"` | Static text after the expression |
| `name` | `"gfg"` | The interpolated value passed as a parameter |
| `name.toUpperCase()` | `"GFG"` | The value is transformed before insertion |

### Key Points
- The **tag function** receives the static string parts as an array and the interpolated values as separate parameters
- You can **transform, validate, or sanitise** values before they are inserted into the final string
- Useful for advanced use cases like **internationalisation (i18n)**, **SQL query building**, or **HTML escaping**

---

## 4. Escaping Backticks and Dollar Signs

If you need to include a literal backtick or dollar sign inside a template literal, use a **backslash (`\`)** to escape them.

```js
const s = `This is a backtick: \` and this is a dollar sign: \$`;
console.log(s);
// This is a backtick: ` and this is a dollar sign: $
```

### Key Points

| Character | How to Escape | Result |
|---|---|---|
| Backtick `` ` `` | `` \` `` | Includes a literal backtick without ending the string |
| Dollar sign `$` | `\$` | Includes a literal `$` without triggering `${}` interpolation |

---

## 7 Types of Template Literal Usage

JavaScript template literals are classified into **7 types** based on their usage:

---

### Type 1: Multi-line Strings

Naturally write strings that span multiple lines without any escape characters.

```js
const poem = `Roses are red,
Violets are blue,
JavaScript is awesome,
And so are you!`;

console.log(poem);
```

**Output:**
```
Roses are red,
Violets are blue,
JavaScript is awesome,
And so are you!
```

- Backticks allow multi-line strings **naturally**
- Line breaks are **preserved as written**

---

### Type 2: Dynamic Expressions

Embed arithmetic or any JavaScript expression directly inside the string.

```js
const a = 5, b = 10;
const result = `Sum of ${a} and ${b} is ${a + b}.`;
console.log(result);
// Sum of 5 and 10 is 15.
```

- `${a + b}` **evaluates** the sum (`15`) and inserts it into the string
- Produces a complete, readable sentence dynamically

---

### Type 3: Tagged Templates

Use a **tag function** to process template literals and control how strings and values are combined.

```js
function tag(strings, ...values) {
    return strings.reduce((acc, str, i) => acc + str + (values[i] || ''), '');
}

const output = tag`Hello, ${"Elis"}!`;
console.log(output);   // Hello, Elis!
```

- The function receives **static parts** as an array and **interpolated values** separately
- `...values` uses rest parameters to collect all interpolated expressions
- Returns a correctly formatted string without extra concatenation

---

### Type 4: HTML Template

Build **HTML strings dynamically** using template literals — ideal for web content generation.

```js
const title = "Welcome";
const html = `<h1>${title}</h1>`;
console.log(html);   // <h1>Welcome</h1>
```

- `${title}` inserts the variable value into the HTML string
- Extremely useful for **dynamic web content**, UI rendering, or server-side HTML generation

---

### Type 5: Conditionals in Templates

Use **ternary operators** inside `${}` to evaluate conditions and insert different values based on logic.

```js
const isAdmin = true;
const userRole = `User role: ${isAdmin ? "Admin" : "Guest"}.`;
console.log(userRole);   // User role: Admin.
```

- `${isAdmin ? "Admin" : "Guest"}` evaluates the condition inline
- When `isAdmin` is `true`, `"Admin"` is inserted; otherwise, `"Guest"` is used
- Keeps conditional logic **readable and inline**

---

### Type 6: Loops with Templates

Use **array methods like `map()`** inside template literals to generate repeated or list-based content dynamically.

```js
const items = ["apple", "banana", "cherry"];
const list = `Items: ${items.map(item => `\n- ${item}`)}`;
console.log(list);
```

**Output:**
```
Items: 
- apple
- banana
- cherry
```

- `items.map()` transforms each array element into a formatted string with a `\n-` prefix
- The result is embedded directly into the outer template literal

---

### Type 7: Embedding Functions

Call **functions directly** inside `${}` — the return value is embedded into the string.

```js
const toUpper = str => str.toUpperCase();
const s = `Shouting: ${toUpper("hello")}`;
console.log(s);   // Shouting: HELLO
```

- `${toUpper("hello")}` **invokes the function** and inserts its return value (`"HELLO"`)
- Template literals support embedding **any valid JavaScript expression**, including function calls

---

## Quick Reference Summary

| Feature | Example | Description |
|---|---|---|
| Variable interpolation | `` `Hello ${name}` `` | Inserts variable value |
| Expression evaluation | `` `${x + y}` `` | Evaluates and inserts result |
| Multi-line strings | `` `Line 1\nLine 2` `` | Preserves line breaks naturally |
| Tagged templates | `` tag`Hello ${name}` `` | Custom string processing via function |
| Ternary in template | `` `${x > 0 ? "pos" : "neg"}` `` | Inline conditional logic |
| Function call | `` `${toUpper("hi")}` `` | Embeds function return value |
| HTML generation | `` `<h1>${title}</h1>` `` | Builds HTML strings dynamically |
| Escape backtick | `` `\`` `` | Includes literal backtick |

---

## Key Takeaways

- Template literals use **backticks** (`` ` ``) and **`${}`** for embedding expressions
- They are the **modern, preferred** way to build strings — cleaner than `+` concatenation
- Support **multi-line strings** natively, with no need for `\n`
- **Tagged templates** give advanced control over how strings are processed
- Inside `${}`, you can place **any valid JavaScript expression** — variables, math, ternaries, function calls, or even loops
- Escape backticks with `` \` `` and dollar signs with `\$` when needed inside a template literal

---