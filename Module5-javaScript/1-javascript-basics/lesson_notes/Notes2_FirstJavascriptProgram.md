# JavaScript Hello World

> The **JavaScript Hello World program** is a basic example used to introduce the language and demonstrate how to display output. It is traditionally the first program written when learning any new language.

---

## What It Does

- Prints the text **"Hello, World!"** to the screen
- Helps beginners understand **basic syntax** and **script execution**

---

## Table of Contents
1. [Method 1 — Using the Browser Console](#method-1--using-the-browser-console)
2. [Method 2 — Using an HTML File](#method-2--using-an-html-file)
3. [Method 3 — External JavaScript File](#method-3--external-javascript-file)
4. [Quick Comparison](#quick-comparison)

---

## Ways to Print Hello World in JS

JavaScript can be run in **three common ways**, depending on whether you're testing code, building small demos, or developing real-world applications.

---

## Method 1 — Using the Browser Console

One of the **simplest ways** to run JavaScript is by using the browser's built-in console. It is available in all modern browsers (Chrome, Firefox, Edge) and lets you execute JavaScript directly — no file needed.

### Steps

1. Open your web browser (e.g., **Google Chrome**)
2. Open Developer Tools using one of the following shortcuts:
    - **Windows/Linux:** `F12` or `Ctrl + Shift + I`
    - **Mac:** `Cmd + Opt + I`
3. Go to the **Console** tab
4. Type the following and press **Enter**:

```js
console.log("Hello, World!");
```

### Output
```
Hello, World!
```

> ✅ **Best for:** Quick testing, debugging, and experimenting with code snippets.

---

## Method 2 — Using an HTML File

JavaScript can be **embedded directly into an HTML document** using the `<script>` tag. This is the standard approach for adding interactivity and dynamic behaviour to websites.

### Steps

1. Open any text editor (e.g., Notepad, Sublime Text, **VS Code**)
2. Create a new file and save it with the `.html` extension (e.g., `hello-world.html`)
3. Write the following code:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Hello World in JavaScript</title>
</head>
<body>
    <script>
        alert("Hello, World!");
    </script>
</body>
</html>
```

4. Save the file and **open it in a web browser**

### Output
A pop-up alert box will appear in the browser displaying:
```
Hello, World!
```

> ✅ **Best for:** Learning how JavaScript integrates with HTML, building small web demos.

---

## Method 3 — External JavaScript File

For **larger applications**, it is best practice to separate JavaScript into its own external `.js` file. This improves **code organisation** and **reusability** across multiple pages.

### Steps

1. Create **two files** in the same directory:
    - `index.html` — for the webpage structure
    - `script.js` — to hold the JavaScript code

2. Write the following in `script.js`:

```js
console.log("Hello, World!");
```

3. Write the following in `index.html`, linking the external script:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Hello World</title>
</head>
<body>
    <script src="script.js"></script>
</body>
</html>
```

4. Save **both files** in the same directory and open `index.html` in a browser

### Output
Open the browser console (F12) to see:
```
Hello, World!
```

> ✅ **Best for:** Real-world projects, keeping code clean and maintainable, reusing scripts across multiple pages.

---

## Quick Comparison

| Method | Where Output Appears | Best Used For |
|---|---|---|
| **Browser Console** | Developer Tools console | Quick testing & debugging |
| **HTML File (inline)** | Alert pop-up in browser | Small demos & learning basics |
| **External JS File** | Developer Tools console | Real-world projects & larger apps |

---

## Key Takeaways

- `console.log()` — prints output to the **browser/terminal console**
- `alert()` — displays output as a **pop-up dialog** in the browser
- The `<script>` tag is used to **embed JavaScript inside HTML**
- The `src` attribute on `<script>` is used to **link an external JS file**
- Separating JS into its own file is **best practice** for maintainability

---