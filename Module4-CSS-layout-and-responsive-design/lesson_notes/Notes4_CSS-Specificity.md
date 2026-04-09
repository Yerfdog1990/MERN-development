
---

# 🎯 CSS Specificity 

## 🔹 Overview

**CSS Specificity** is a set of rules used by browsers to decide **which CSS rule is applied** when multiple rules target the same HTML element.

👉 When there is a conflict:

* The rule with **higher specificity** is applied

---

## 🔹 Key Principles of Specificity

* **Inline styles** have the highest priority
* **ID selectors** override:

    * Class selectors
    * Attribute selectors
    * Element selectors
* **Class selectors** override:

    * Element selectors
* If specificity is the same:

    * The **last declared rule** is applied

---

## 🔹 Example: Inline vs Internal vs External CSS

```html
<!DOCTYPE html>
<html>

<head>
    <link rel="stylesheet" 
          type="text/css" 
          href="external.css">

    <style type="text/css">
        h1 {
            background-color: red;
            color: white;
        }

        h2 {
            color: blue;
        }
    </style>
</head>

<body>
    <h1>
        Internal CSS overrides external CSS
    </h1>

    <h2 style="color: green;">
        Inline CSS overrides internal CSS
    </h2>
</body>

</html>
```

### 📊 Explanation:

* `h1` → Internal CSS overrides external CSS
* `h2` → Inline CSS overrides internal CSS

---

## 🔹 Types of CSS Based on Location

### 1. Inline CSS

* Applied directly inside HTML elements using `style`
* **Highest specificity**
* Overrides both internal and external CSS

---

### 2. Internal CSS

* Written inside `<style>` tag within HTML
* Specificity depends on selectors:

    * ID > Class > Element
* Overrides external CSS if specificity is equal

---

### 3. External CSS

* Written in a separate `.css` file
* Linked using `<link>`
* Used for styling multiple pages

---

## 🔹 Important Note on Specificity

* Specificity is determined mainly by **selectors**, NOT by where CSS is written
* Internal vs external CSS does **not affect specificity directly**
* If selectors are the same:

    * The rule that appears **later in the document wins**

---

## 🔹 General Rules

* When two rules target the same element:

    * Higher specificity wins
* If specificity is equal:

    * Last rule applied wins
* Universal selectors (`*`) and inherited styles:

    * Have the **lowest specificity**

---

## 🔹 Specificity Hierarchy

| Priority Level | Selector Type                       | Description                         |
| -------------- | ----------------------------------- | ----------------------------------- |
| 🔴 Highest     | Inline styles                       | Applied using `style` attribute     |
| 🟠 High        | ID selectors                        | `#id`                               |
| 🟡 Medium      | Classes, attributes, pseudo-classes | `.class`, `[type="text"]`, `:hover` |
| 🟢 Low         | Elements and pseudo-elements        | `h1`, `p`, `::before`               |

---

## 🔹 Example Demonstrating Specificity

```html
<!DOCTYPE html>
<html>

<head>
    <style type="text/css">
        h1 {
            background-color: red;
            color: white;
        }

        #second {
            background-color: black;
            color: white;
        }

        .third {
            background-color: pink;
            color: blue;
        }

        #second1 {
            color: blue;
        }

        .third1 {
            color: red;
        }
    </style>
</head>

<body>

    <h1 id="second" class="third">
        ID selector overrides class and element selectors.
    </h1>

    <h1>
        Element selector has the lowest priority.
    </h1>

    <h1 class="third">
        Class selector overrides element selector.
    </h1>

    <h2 style="color: green;" 
        id="second1"
        class="third1">
        Inline CSS overrides all other styles.
    </h2>

</body>

</html>
```

---

## 🔹 Explanation of the Example

1. **First `<h1>`**

    * Has:

        * ID (`#second`)
        * Class (`.third`)
        * Element (`h1`)
    * 👉 ID selector wins → background becomes **black**

---

2. **Second `<h1>`**

    * Only element selector applies
    * 👉 Lowest priority → basic styling

---

3. **Third `<h1>`**

    * Has class `.third`
    * 👉 Class overrides element → pink background

---

4. **`<h2>` Element**

    * Has:

        * Inline style
        * ID
        * Class
    * 👉 Inline style wins → text becomes **green**

---

## 🔹 Key Takeaways

* Specificity determines **which CSS rule is applied**
* Order of importance:

  ```
  Inline > ID > Class/Attribute/Pseudo-class > Element
  ```
* If specificity is equal:

    * Last rule wins
* External vs internal CSS does NOT change specificity
* Universal selectors have the lowest priority

---

## 🧠 Final Summary

CSS specificity is essential for:

* Resolving style conflicts
* Writing predictable CSS
* Avoiding unexpected behavior

👉 Best Practice:

* Avoid overusing IDs and inline styles
* Prefer classes for reusable styling
* Keep CSS simple and maintainable

---

