
---

# 🧩 CSS Grid Layout Module 

## 🔹 Overview

The **CSS Grid Layout Module** is a **two-dimensional layout system** that allows developers to design web pages using both:

* Rows
* Columns

👉 It provides:

* Precise control over layout structure
* Ability to place elements exactly where needed
* Support for building complex and responsive designs

---

## 🔹 Key Features

* Works in **two dimensions (rows + columns)**
* Creates structured layouts easily
* Eliminates the need for floats or complex positioning
* Supports responsive design
* Allows precise placement using:

    * Grid lines
    * Grid areas

---

## 🔹 Basic Grid Example

```html id="dwr6m0"
<html>
<head>
    <style>
        .grid-container {
            display: grid;
            grid-template-columns: auto auto;
            gap: 10px;
        }
    </style>
</head>
<body>
    <div class="grid-container">
        <div class="grid-item">Item 1</div>
        <div class="grid-item">Item 2</div>
        <div class="grid-item">Item 3</div>
        <div class="grid-item">Item 4</div>
    </div>
</body>
</html>
```

### 📊 Explanation:

* `display: grid` → turns container into a grid
* `grid-template-columns: auto auto` → creates 2 columns
* `gap: 10px` → spacing between items

---

## 🔹 Syntax

```css id="fy69t3"
.class {
    display: grid;
}
```

👉 Alternative:

```css
display: inline-grid;
```

* Makes the grid behave like an inline element

---

## 🔹 Important CSS Grid Properties

### 📌 Layout & Structure

* `grid` → enables grid layout
* `grid-template` → shorthand for rows, columns, areas
* `grid-template-columns` → defines number & size of columns
* `grid-template-rows` → defines number & height of rows
* `grid-template-areas` → names layout sections

---

### 📌 Spacing

* `gap` → space between rows and columns
* `grid-gap` → older shorthand for gap
* `column-gap` / `grid-column-gap` → column spacing
* `grid-row-gap` → row spacing

---

### 📌 Placement & Positioning

* `grid-area` → defines position and size of item
* `grid-column` → controls column placement
* `grid-column-start` / `grid-column-end` → column boundaries
* `grid-row` → controls row placement
* `grid-row-start` / `grid-row-end` → row boundaries

---

### 📌 Auto Layout

* `grid-auto-columns` → size of auto-created columns
* `grid-auto-rows` → size of auto-created rows
* `grid-auto-flow` → controls auto placement direction

---

## 🔹 More Examples

---

## 1. Three-Column Layout

```html id="zq4lhx"
<html>
<head>
    <style>
        .grid-container {
            display: grid;
            grid-template-columns: 1fr 1fr 1fr;
            gap: 10px;
        }

        .grid-item {
            background-color: #f0f0f0;
            padding: 20px;
            text-align: center;
        }
    </style>
</head>
<body>
    <div class="grid-container">
        <div class="grid-item">Column 1</div>
        <div class="grid-item">Column 2</div>
        <div class="grid-item">Column 3</div>
    </div>
</body>
</html>
```

### 📊 Explanation:

* `1fr` → equal fractional units
* Creates **3 equal-width columns**
* `gap: 10px` → spacing between columns

---

## 2. Two-Row Layout

```html id="8q1a8y"
<html>
<head>
    <style>
        .grid-container {
            display: grid;
            grid-template-rows: auto auto;
            gap: 15px;
        }

        .grid-item {
            background-color: #e0e0e0;
            padding: 15px;
            text-align: center;
        }
    </style>
</head>
<body>
    <div class="grid-container">
        <div class="grid-item">Row 1</div>
        <div class="grid-item">Row 2</div>
    </div>
</body>
</html>
```

### 📊 Explanation:

* Defines **2 rows**
* Height adjusts automatically (`auto`)
* Adds vertical spacing using `gap`

---

## 3. Unequal Column Layout

```html id="i1v8d8"
<html>
<head>
    <style>
        .grid-container {
            display: grid;
            grid-template-columns: 1fr 2fr;
            gap: 10px;
        }

        .grid-item {
            background-color: #f0f0f0;
            padding: 20px;
            text-align: center;
        }
    </style>
</head>
<body>
    <div class="grid-container">
        <div class="grid-item">Item 1</div>
        <div class="grid-item">Item 2</div>
        <div class="grid-item">Item 3</div>
        <div class="grid-item">Item 4</div>
    </div>
</body>
</html>
```

### 📊 Explanation:

* First column → `1fr`
* Second column → `2fr` (twice the width)
* Creates **unequal column distribution**

---

## 🔹 Best Practices for CSS Grid

### ✅ 1. Use Flexible Units

* Use `fr`, `%`, or `minmax()`
* Helps build responsive layouts

---

### ✅ 2. Define Grid Areas

* Use `grid-template-areas`
* Improves:

    * Readability
    * Maintainability

---

### ✅ 3. Combine with Flexbox

* Use:

    * **Grid** → overall layout
    * **Flexbox** → alignment inside components

---

## 🔹 Key Takeaways

* Grid is a **two-dimensional layout system**
* Controls both:

    * Rows
    * Columns
* Uses powerful properties like:

    * `grid-template-columns`
    * `grid-template-rows`
    * `gap`
* Supports:

    * Responsive layouts
    * Precise positioning

---

## 🧠 Final Summary

CSS Grid is one of the most powerful tools for modern web design.

👉 It allows you to:

* Build complex layouts easily
* Align elements precisely
* Create responsive designs without hacks

### ⭐ When to Use Grid:

* Page layouts (header, sidebar, content)
* Dashboards
* Complex responsive designs

---

