# ReadlineSync in JavaScript (Node.js)

> **ReadlineSync** is a Node.js library that allows developers to take user input from the terminal in a **synchronous** way. It is commonly used in command-line based JavaScript programs where the program needs to **pause and wait** for user input before continuing.

---

## Why ReadlineSync Matters

### The Type Conversion Problem with User Input
When taking data from an input field or terminal, it is always received as a **string** — even if the user enters a number. To perform numeric operations on that data, you must **convert the string to a number** first.

```
User types: 25
JavaScript receives: "25"   ← this is a string, not a number
```

ReadlineSync solves the **input** side of this problem, and JavaScript's built-in conversion functions (`Number()`, `parseInt()`, etc.) solve the **type conversion** side.

---

## Table of Contents

1. [Installing ReadlineSync](#installing-readlinesync)
2. [Setting Up ReadlineSync](#1-set-up-readlinesync)
3. [Getting User Input](#2-ask-for-user-input)
4. [Converting and Using Numeric Input](#3-convert-and-use-numeric-input)
5. [Full Example Code](#full-example-code)
6. [Running the Code](#running-the-code)
7. [Key Concepts Summary](#key-concepts-summary)
8. [Key Takeaways](#key-takeaways)

---

## Installing ReadlineSync

Before writing any code, the environment needs to be set up correctly.

### Prerequisites

**Step 1 — Install Node.js**
Download and install Node.js from the official website: [https://nodejs.org](https://nodejs.org)

> Node.js comes bundled with **npm** (Node Package Manager), which is used to install third-party packages like `readline-sync`.

**Step 2 — Install the readline-sync Package**
Open your terminal and run:

```bash
npm install readline-sync
```

This downloads and installs the `readline-sync` package into your project's `node_modules` folder, making it available to use in your scripts.

---

## Getting User Input — Step by Step

### 1. Set Up ReadlineSync

At the top of your script, **require** the package to make it available:

```js
const readlineSync = require('readline-sync');
```

- `require()` is Node.js's way of importing external modules
- This gives you access to all `readline-sync` methods via the `readlineSync` variable

---

### 2. Ask for User Input

Use `readlineSync.question()` to display a prompt and **capture whatever the user types**:

```js
const userName = readlineSync.question('May I know your name? ');
console.log(`Welcome, ${userName}!`);
```

**How it works:**
- `readlineSync.question('...')` — prints the message to the terminal and **waits** for the user to type and press Enter
- The user's input is returned as a **string** and stored in `userName`
- The program does **not continue** until the user responds (synchronous behaviour)

**Example interaction:**
```
May I know your name? Alice
Welcome, Alice!
```

---

### 3. Convert and Use Numeric Input

When asking for numeric data (like age), the input must be **converted from string to number** before performing any calculations:

```js
const userAge = readlineSync.question('May I know your age? ');

// Convert the input to a number
const userAgeNumber = Number(userAge);

// Check if the conversion was successful
if (!isNaN(userAgeNumber)) {
    const currentYear = new Date().getFullYear();
    const birthYear = currentYear - userAgeNumber;
    console.log(`You were born in the year ${birthYear}.`);
} else {
    console.log('Please enter a valid number for age.');
}
```

### Detailed Explanation

| Step | Code | Purpose |
|---|---|---|
| **Ask for input** | `readlineSync.question(...)` | Prompts the user and captures input as a string |
| **Convert to number** | `Number(userAge)` | Converts the string to a number; returns `NaN` if invalid |
| **Validate conversion** | `isNaN(userAgeNumber)` | Checks if the conversion failed (i.e., input was not a valid number) |
| **Calculate birth year** | `currentYear - userAgeNumber` | Performs arithmetic on the now-converted number |
| **Get current year** | `new Date().getFullYear()` | Retrieves the current year dynamically from the system |

**Example interaction:**
```
May I know your age? 25
You were born in the year 2001.
```

**If invalid input is entered:**
```
May I know your age? hello
Please enter a valid number for age.
```

---

## Full Example Code

Here is the complete script combining all three steps:

```js
const readlineSync = require('readline-sync');

// Step 1: Get user's name
const userName = readlineSync.question('May I know your name? ');
console.log(`Welcome, ${userName}!`);

// Step 2: Get user's age
const userAge = readlineSync.question('May I know your age? ');

// Step 3: Convert the string input to a number
const userAgeNumber = Number(userAge);

// Step 4: Validate and use the converted number
if (!isNaN(userAgeNumber)) {
    const currentYear = new Date().getFullYear();
    const birthYear = currentYear - userAgeNumber;
    console.log(`You were born in the year ${birthYear}.`);
} else {
    console.log('Please enter a valid number for age.');
}
```

**Full interaction example:**
```
May I know your name? Alice
Welcome, Alice!
May I know your age? 25
You were born in the year 2001.
```

---

## Running the Code

1. Open your **terminal**
2. **Navigate** to the directory containing your script:
   ```bash
   cd path/to/your/folder
   ```
3. **Run** the script with Node.js:
   ```bash
   node your-script-file.js
   ```
   Replace `your-script-file.js` with the actual name of your file (e.g., `index.js`)

---

## Key Concepts Summary

### 1. Type Conversion
Converting data from one type to another is essential for performing operations. Without converting string input to a number, arithmetic like subtraction would produce `NaN`.

```js
"25" - 2000    // NaN ❌ — can't subtract from a string
Number("25") - 2000  // -1975 ✅ — works after conversion
```

### 2. User Input with readline-sync
`readlineSync.question()` pauses the program and waits for the user to type a response — making it ideal for interactive terminal programs.

### 3. Error Handling
Always validate user input before using it in calculations. Use `isNaN()` to check whether a conversion produced a valid number:

```js
isNaN(Number("25"))      // false — "25" is a valid number ✅
isNaN(Number("hello"))   // true  — "hello" is not a number ❌
```

---

## Key Takeaways

- **ReadlineSync** is a Node.js library for capturing **synchronous** user input from the terminal
- Install it with `npm install readline-sync` and import it with `require('readline-sync')`
- All terminal input is received as a **string** — always convert to the correct type before using it in calculations
- Use **`Number()`** to convert string input to a number; it returns `NaN` if the input is invalid
- Use **`isNaN()`** to validate whether a conversion was successful before performing operations
- Use **`new Date().getFullYear()`** to dynamically get the current year at runtime
- Always include **error handling** to gracefully deal with invalid or unexpected user input

---