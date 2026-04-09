
---

# 1. CSS Display Property

## 📌 Overview

The **display property** defines how an HTML element is rendered on a webpage.

* Controls layout behavior
* Defines the type of box generated
* Affects page flow and structure

### 🔹 Syntax

```css
display: value;
```

---

## 🔹 Common Display Values

### 1. Block

* Takes full width
* Starts on a new line
* Example elements: `<div>`, `<p>`

```css
display: block;
```

✔ Elements stack vertically

---

### 2. Inline

* Does NOT start on a new line
* Takes only required width
* Cannot set width/height

```css
display: inline;
```

✔ Flows with text

---

### 3. Inline-block

* Combines inline + block
* Can set width/height
* Stays inline

```css
display: inline-block;
```

✔ Useful for responsive layouts

---

### 4. None

* Completely removes element from layout

```css
display: none;
```

✔ No space occupied

---

### 5. Flex & Grid

* Modern layout systems

```css
display: flex;
display: grid;
```

✔ Flex → 1D layout

✔ Grid → 2D layout

---

## 🔹 Other Values

* `inline-flex`, `inline-grid`
* `table`, `table-row`, `table-cell`
* `contents`, `list-item`
* `inherit`, `initial`

---

# 2. CSS Selectors

## 📌 Overview

Selectors are used to **target HTML elements** for styling.

---

## 🔹 1. Basic Selectors

### Universal Selector

```css
* {
  color: red;
}
```

✔ Targets all elements

---

### Element Selector

```css
p {
  font-size: 16px;
}
```

✔ Targets all `<p>` tags

---

### Class Selector

```css
.button {
  background-color: blue;
}
```

✔ Targets class attributes

---

### ID Selector

```css
#header {
  background-color: gray;
}
```

✔ Targets unique element

---

## 🔹 2. Combinator Selectors

### Descendant

```css
div p { }
```

✔ Targets all `<p>` inside `<div>`

---

### Child

```css
div > p { }
```

✔ Direct children only

---

### Adjacent Sibling

```css
h1 + p { }
```

✔ First `<p>` after `<h1>`

---

### General Sibling

```css
h1 ~ p { }
```

✔ All `<p>` after `<h1>`

---

## 🔹 3. Attribute Selectors

```css
input[type="text"]
a[href^="https"]
a[href*="example"]
a[href$=".pdf"]
```

✔ Target elements by attributes

---

## 🔹 4. Pseudo-Classes

* `:hover`
* `:focus`
* `:first-child`
* `:last-child`
* `:not()`

```css
a:hover { color: red; }
```

---

## 🔹 5. Pseudo-Elements

* `::before`
* `::after`
* `::first-line`
* `::first-letter`
* `::placeholder`

```css
h1::before {
  content: "★ ";
}
```

---

# 3. CSS Specificity

## 📌 Overview

Specificity determines **which CSS rule is applied** when multiple rules target the same element.

---

## 🔹 Priority Order

1. Inline styles ✅ (highest)
2. ID selectors
3. Class / attribute / pseudo-class
4. Element / pseudo-element ❌ (lowest)

---

## 🔹 Key Rules

* Inline > Internal > External (only when specificity ties)
* Higher specificity wins
* If equal → last rule applies

---

## 🔹 Example

```css
#id { color: red; }     /* Higher */
.class { color: blue; }
p { color: green; }     /* Lowest */
```

---

# 4. CSS Positioning

## 📌 Overview

Controls placement of elements using:

```css
position: value;
```

---

## 🔹 Types

### 1. Static (default)

* Normal flow
* No positioning

---

### 2. Relative

```css
position: relative;
top: 20px;
```

✔ Moves relative to itself

---

### 3. Absolute

```css
position: absolute;
top: 50px;
left: 50px;
```

✔ Positioned relative to nearest positioned parent
✔ Removed from normal flow

---

### 4. Fixed

```css
position: fixed;
top: 0;
```

✔ Stays fixed on screen

---

### 5. Sticky

```css
position: sticky;
top: 0;
```

✔ Switches between relative & fixed

---

# 5. CSS Flexbox

## 📌 Overview

A **1D layout system** for arranging items in rows or columns.

---

## 🔹 Key Concepts

* Flex Container → parent
* Flex Items → children

```css
display: flex;
```

---

## 🔹 Axes

* Main Axis → direction of layout
* Cross Axis → perpendicular

---

## 🔹 Flex Direction

```css
flex-direction: row | column;
```

---

## 🔹 Alignment

```css
justify-content: center;   /* main axis */
align-items: center;       /* cross axis */
```

---

## 🔹 Features

* Responsive layouts
* Equal spacing
* No floats needed

---

# 6. CSS Stacking Context & z-index

## 📌 Overview

Controls **layering of elements** (which appears on top).

---

## 🔹 Default Order

1. Root `<html>`
2. Non-positioned elements
3. Positioned elements

---

## 🔹 z-index

```css
z-index: 10;
```

✔ Higher value = on top

✔ Works only on positioned elements

---

## 🔹 Important Notes

* `z-index` does NOT work on static elements
* Stacking context affects layering
* Parent-child relationships matter

---

# 7. CSS Grid Layout

## 📌 Overview

A **2D layout system** (rows + columns).

---

## 🔹 Basic Setup

```css
display: grid;
grid-template-columns: auto auto;
gap: 10px;
```

---

## 🔹 Key Properties

* `grid-template-columns`
* `grid-template-rows`
* `gap`
* `grid-area`
* `grid-column`, `grid-row`

---

## 🔹 Example

```css
grid-template-columns: 1fr 1fr 1fr;
```

✔ Equal columns

---

## 🔹 Features

* Precise layout control
* Responsive design
* Works with Flexbox

---

# 8. CSS Transform Property

## 📌 Overview

Used to visually transform elements **without affecting layout**.

---

## 🔹 Syntax

```css
transform: function();
```

---

## 🔹 Common Functions

### Translate

```css
transform: translate(10px, 10px);
```

---

### Rotate

```css
transform: rotate(45deg);
```

---

### Scale

```css
transform: scale(1.2);
```

---

### Skew

```css
transform: skew(30deg);
```

---

## 🔹 3D Transforms

* `translate3d()`
* `rotateX()`, `rotateY()`
* `scale3d()`

---

## 🔹 Notes

* Does NOT affect layout flow
* Used for animations & effects

---

# 9. CSS Transitions

## 📌 Overview

Creates **smooth animations between states**.

---

## 🔹 Example

```css
transition: background-color 0.5s;
```

---

## 🔹 Properties

### 1. transition-property

```css
transition-property: width;
```

---

### 2. transition-duration

```css
transition-duration: 0.5s;
```

---

### 3. transition-timing-function

```css
ease | linear | ease-in-out
```

---

### 4. transition-delay

```css
transition-delay: 1s;
```

---

## 🔹 Shorthand

```css
transition: width 0.5s ease-in-out 1s;
```

---

## 🔹 Best Practices

* Use shorthand
* Animate only supported properties
* Keep transitions smooth and subtle

---

# 🔥 Final Summary

| Concept     | Purpose           |
| ----------- | ----------------- |
| Display     | Layout behavior   |
| Selectors   | Target elements   |
| Specificity | Resolve conflicts |
| Positioning | Element placement |
| Flexbox     | 1D layouts        |
| Grid        | 2D layouts        |
| z-index     | Layering          |
| Transform   | Visual effects    |
| Transitions | Animations        |

---

