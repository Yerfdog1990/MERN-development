
---

# 🎯 CSS Selectors 

## 🔹 Overview

**CSS Selectors** are patterns used to target HTML elements so styles can be applied to them.

They allow you to:

* Select elements based on:

    * Tag name
    * Class
    * ID
    * Attributes
* Apply styles such as:

    * Colors
    * Fonts
    * Spacing
    * Layout

👉 They are essential for creating **structured, consistent, and visually appealing web pages**.

---

## 🔹 Categories of CSS Selectors

CSS selectors are divided into **five main categories**:

1. Basic Selectors
2. Combinator Selectors
3. Attribute Selectors
4. Pseudo-Classes
5. Pseudo-Elements

---

# 🔹 1. Basic Selectors

Basic selectors are used to target elements using simple patterns like tag name, class, ID, or all elements.

---

### 1. Universal Selector (`*`)

* Selects **all elements** on the page

### ✅ Example:

```html
<html>
<head>
    <style>
        * {
            color: red;
        }
    </style>
</head>
<body>
    <h1>Header Text</h1>
    <p>Paragraph Text</p>
</body>
</html>
```

👉 All elements will have red text.

---

### 2. Element Selector

* Targets elements by their **HTML tag name**

### ✅ Example:

```html
<html>
<head>
    <style>
        p {
            font-size: 16px;
        }
    </style>
</head>
<body>
    <p>This paragraph styled with font size 16px.</p>
</body>
</html>
```

---

### 3. Class Selector (`.`)

* Targets elements with a specific **class**

### ✅ Example:

```html
<html>
<head>
    <style>
        .button {
            background-color: blue;
            color: white;
        }
    </style>
</head>
<body>
    <button class="button">Click Me!</button>
</body>
</html>
```

---

### 4. ID Selector (`#`)

* Targets a **unique element** using its ID

### ✅ Example:

```html
<html>
<head>
    <style>
        #header {
            background-color: gray;
        }
    </style>
</head>
<body>
    <div id="header">This is the header section.</div>
</body>
</html>
```

---

# 🔹 2. Combinator Selectors

Combinator selectors define relationships between elements based on their structure in the DOM.

---

### 1. Descendant Selector (` `)

* Targets elements **inside another element**

### ✅ Example:

```html
<html>
<head>
    <style>
        div p {
            color: red;
        }
    </style>
</head>
<body>
    <div>
        <p>This paragraph inside a div will be red.</p>
    </div>
</body>
</html>
```

---

### 2. Child Selector (`>`)

* Targets **direct children only**

### ✅ Example:

```html
<html>
<head>
    <style>
        div > p {
            margin-left: 20px;
        }
    </style>
</head>
<body>
    <div>
        <p>This is a direct child and has a left margin.</p>
        <div>
            <p>This is not a direct child.</p>
        </div>
    </div>
</body>
</html>
```

---

### 3. Adjacent Sibling Selector (`+`)

* Targets the element **immediately after another**

### ✅ Example:

```html
<html>
<head>
    <style>
        h1 + p {
            font-weight: bold;
        }
    </style>
</head>
<body>
    <h1>This is a header.</h1>
    <p>This is immediately following the header and is bold.</p>
    <p>This will not be bold.</p>
</body>
</html>
```

---

### 4. General Sibling Selector (`~`)

* Targets **all siblings after an element**

### ✅ Example:

```html
<html>
<head>
    <style>
        h1 ~ p {
            font-style: italic;
        }
    </style>
</head>
<body>
    <h1>This is a header.</h1>
    <p>This is a sibling and will be italicized.</p>
    <p>This will also be italicized.</p>
</body>
</html>
```

---

# 🔹 3. Attribute Selectors

Attribute selectors target elements based on their attributes or attribute values.

---

### 1. Presence Selector

* Targets elements that **have a specific attribute**

### ✅ Example:

```html
<html>
<head>
    <style>
        input[type] {
            border: 2px solid black;
        }
    </style>
</head>
<body>
    <input type="text" placeholder="Text input">
    <input type="number" placeholder="Number input">
</body>
</html>
```

---

### 2. Attribute Value Selector

* Targets elements with a **specific value**

### ✅ Example:

```html
<html>
<head>
    <style>
        input[type="text"] {
            background-color: yellow;
        }
    </style>
</head>
<body>
    <input type="text" placeholder="Text input">
    <input type="password" placeholder="Password input">
</body>
</html>
```

---

### 3. Starts With Selector (`^=`)

* Matches values that **start with a specific string**

### ✅ Example:

```html
<html>
<head>
    <style>
        a[href^="https"] {
            color: green;
        }
    </style>
</head>
<body>
    <a href="https://example.com/">Secure link</a>
    <a href="http://example.com/">Non-secure link</a>
</body>
</html>
```

---

### 4. Contains Selector (`*=`)

* Matches values that **contain a substring**

### ✅ Example:

```html
<html>
<head>
    <style>
        a[href*="example"] {
            text-decoration: underline;
        }
    </style>
</head>
<body>
    <a href="https://example.com/">Underlined link</a>
    <a href="https://otherlink.com">Not underlined</a>
</body>
</html>
```

---

### 5. Ends With Selector (`$=`)

* Matches values that **end with a string**

### ✅ Example:

```html
<style>
a[href$=".pdf"] {
    color: red;
}
</style>
```

---

### 6. Word Match Selector (`~=`)

* Matches **whole words** in space-separated values

### ✅ Example:

```html
<style>
p[class~="highlight"] {
    background: yellow;
}
</style>
```

---

### 7. Hyphen Match Selector (`|=`)

* Matches values that start with a word followed by `-`

### ✅ Example:

```html
<style>
p[lang|="en"] {
    color: blue;
}
</style>
```

---

# 🔹 4. Pseudo-Classes

Pseudo-classes define **special states** of elements.

---

### 1. `:hover`

* Applies style when user hovers over an element

```html
<html>
<head>
    <style>
        a:hover {
            color: red;
        }
    </style>
</head>
<body>
    <a href="https://example.com/">Hover over this link</a>
</body>
</html>
```

---

### 2. `:focus`

* Applies when an element is focused

```html
<html>
<head>
    <style>
        input:focus {
            outline: 3px solid red;
        }
    </style>
</head>
<body>
    <input type="text">
</body>
</html>
```

---

### 3. `:first-child`

* Targets the first child of a parent

```html
<html>
<style>
    p:first-child {
        color: brown;
    }
</style>
<body>
    <div>
        <p>Hello1</p>
        <p>Hello2</p>
    </div>
</body>
</html>
```

---

### 4. `:last-child`

* Targets the last child

```html
<html>
<style>
    p:last-child {
        color: green;
    }
</style>
<body>
    <div>
        <p>Hello1</p>
        <p>Hello2</p>
    </div>
</body>
</html>
```

---

### 5. `:not()`

* Excludes specific elements

```html
<html>
<style>
    p:not(.one) {
        color: blue;
    }
</style>
<body>
    <div>
        <p class="one">Hello1</p>
        <p class="two">Hello2</p>
    </div>
</body>
</html>
```

---

# 🔹 5. Pseudo-Elements

Pseudo-elements style **specific parts of elements**.

---

### 1. `::before`

* Inserts content before an element

```html
<html>
<style>
    h1::before {
        content: "★ ";
    }
</style>
<body>
    <h1>Welcome to GFG</h1>
</body>
</html>
```

---

### 2. `::after`

* Inserts content after an element

```html
<html>
<style>
    h1::after {
        content: "☀ ";
        color: orangered;
    }
</style>
<body>
    <h1>Welcome to GFG</h1>
</body>
</html>
```

---

### 3. `::first-line`

* Styles the first line of text

```html
<html>
<style>
    p::first-line {
        color: red;
    }
</style>
<body>
    <p>
        Welcome to GFG<br>
        Hello GFG
    </p>
</body>
</html>
```

---

### 4. `::first-letter`

* Styles the first letter

```html
<html>
<style>
    p::first-letter {
        color: red;
        font-size: 23px;
    }
</style>
<body>
    <p>Welcome to GFG</p>
</body>
</html>
```

---

### 5. `::placeholder`

* Styles input placeholder text

```html
<html>
<style>
    input::placeholder {
        font-size: 20px;
        font-family: sans-serif;
        font-weight: 900;
    }
</style>
<body>
    <input type="text" placeholder="Enter your name">
</body>
</html>
```

---

# 🔹 Key Takeaways

* CSS selectors are used to **target and style elements**
* Main categories:

    * Basic
    * Combinators
    * Attribute
    * Pseudo-classes
    * Pseudo-elements
* They control **how styles are applied across a webpage**
* Essential for **efficient and maintainable CSS**

---

## 🧠 Final Summary

CSS selectors are the foundation of styling in web development.

👉 Mastering selectors allows you to:

* Write cleaner CSS
* Target elements precisely
* Build scalable and maintainable designs

---

