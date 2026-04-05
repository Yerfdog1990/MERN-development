# HTML `<template>` Tag 

---

## What is the `<template>` tag?

The `<template>` tag is used to store **reusable HTML code fragments** that are **not rendered** when the page loads. Its content remains hidden on the client side and can be activated, cloned, and inserted into the document using JavaScript.

> **Note:** The `<template>` tag is new in **HTML5** and supports all global HTML attributes.

---

## Key Features

| Feature | Description |
|---|---|
| Hidden by default | Content is not displayed on page load |
| Reusable markup | Clone the same structure multiple times without duplicating code |
| JS-activated | Rendered only when JavaScript explicitly clones and appends it |
| Better performance | Reduces initial page load time by keeping unused content hidden |

---

## Syntax

```html
<template id="myTemplate">
    <p>This is template content</p>
</template>
```

---

## Approach 1 — Content stays hidden (no JavaScript)

Content inside `<template>` stays completely hidden. The browser parses it but never renders it.

```html
<!DOCTYPE html>
<html>
<body>
    <h1>GeeksforGeeks</h1>
    <h3>HTML template tag</h3>

    <p>Content inside a template tag is hidden from the client.</p>

    <!-- Content is hidden — never shown on screen -->
    <template>
        <h2>GeeksforGeeks: A computer science portal</h2>
        <img src="logo.png">
        Content Writer:
        <input type="text" placeholder="author name">
    </template>

    <p>End of the example of template tag</p>
</body>
</html>
```

**Result:** Nothing inside `<template>` appears on the page.

---

## Approach 2 — JavaScript activation (button click)

JavaScript retrieves the template, clones its content with `cloneNode(true)`, and appends it to the DOM — typically triggered by a user action.

```html
<!DOCTYPE html>
<html>
<body>
    <h1>GeeksforGeeks</h1>
    <h3>HTML template tag</h3>

    <p>Click the button to get the content from a template.</p>

    <button onclick="myGeeks()">Show content</button>

    <template>
        <h2>GeeksforGeeks: A computer science portal</h2>
        <img src="logo.png"><br>
        Content Writer:
        <input type="text" placeholder="author name">
    </template>

    <script>
        function myGeeks() {
            // Step 1: Get the template element
            let t = document.getElementsByTagName("template")[0];

            // Step 2: Deep clone its content
            let clone = t.content.cloneNode(true);

            // Step 3: Append the clone to the page
            document.body.appendChild(clone);
        }
    </script>
</body>
</html>
```

### The 3-Step JS Pattern

1. **Get** the template → `document.getElementsByTagName("template")[0]`
2. **Clone** its content → `.content.cloneNode(true)`
3. **Append** to the DOM → `document.body.appendChild(clone)`

---

## Example — Hidden list of courses

```html
<template>
    <h2>GeeksforGeeks: A computer science portal</h2>
    <h4>GeeksforGeeks Offline Courses</h4>
    <ul>
        <li>DSA</li>
        <li>Placement & Interview Preparation</li>
        <li>Web Development</li>
        <li>Algorithms & basic programming</li>
    </ul>
</template>
```

The unordered list remains hidden until activated by JavaScript.

---

## Use Cases

### 1. Lists and Cards
- Clone the same card or list item structure multiple times.
- Reduces repetition and keeps HTML clean and consistent.

### 2. User Interaction Based Rendering
- Display content only after user actions such as button clicks or selections.
- Enhances interactivity and improves user experience.

### 3. Reusable UI Components
- Build modals, alerts, and navigation menus once.
- Update the template in one place to change every instance.

### 4. Improved Page Performance
- Keeps unused content hidden until required.
- Reduces initial page load time and improves performance.

---

## Important Notes

- `<template>` is **HTML5 only** — not supported in very old browsers.
- Content inside is **inert** — scripts don't run, images don't load, and styles don't apply until the template is cloned into the live DOM.
- Use the `id` attribute on `<template>` to target specific templates: `document.getElementById("myTemplate")`.
- It supports all standard **global HTML attributes**.

---

## Quick Reference

```
<template>          →  defines the hidden fragment
.content            →  access the template's DocumentFragment
.cloneNode(true)    →  deep clone all child elements
.appendChild()      →  insert clone into the live DOM
```

---