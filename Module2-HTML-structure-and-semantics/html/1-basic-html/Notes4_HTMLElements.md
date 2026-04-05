# HTML Elements 

---

## What are HTML Elements?

HTML elements are the **basic building blocks of a webpage**, defining its structure and content. Every visible or structural part of a page — headings, paragraphs, images, links — is an HTML element.

- Elements start with an **opening tag** and end with a **closing tag**, and can contain text, attributes, or other nested elements
- Some elements are **self-closing** (e.g., `<br>`, `<img>`) and carry no content
- Browsers use elements to render the page visually
- Properly nesting elements ensures valid, accessible, and well-structured HTML

---

## Syntax

```html
<tagname>Your Contents...</tagname>
```

### Basic Example

```html
<!DOCTYPE html>
<html>
  <head>
    <title></title>
  </head>
  <body>
    <p>Welcome to GeeksforGeeks!</p>
  </body>
</html>
```

---

## Anatomy of an HTML Element

An HTML element consists of three parts:

```
<tagname>   Content goes here   </tagname>
    ↑                                ↑
Opening tag                    Closing tag
```

| Part | Description |
|---|---|
| **Opening tag** | Indicates where the element and its content begins — `<tagname>` |
| **Content** | The actual text, media, or nested elements between the tags |
| **Closing tag** | Indicates where the element ends — `</tagname>` |

---

## Case Sensitivity

HTML tags are **not case-sensitive** — `<B>` and `<b>` both produce bold text. However, using **lowercase tags** is strongly recommended as a best practice for consistency, readability, and compatibility with modern standards.

```html
<!-- Both work, but lowercase is preferred -->
<B>Bold Text</B>       <!-- not recommended -->
<b>Bold Text</b>       <!-- recommended -->
```

---

## Nested HTML Elements

When one HTML element is placed **inside another**, it is called nesting. Nested elements create a clear hierarchical structure that organises content logically and ensures it displays correctly.

```html
<!DOCTYPE html>
<html>
  <head>
    <title></title>
  </head>
  <body style="text-align:center">
    <h1>GeeksforGeeks</h1>
    <p>Computer science portal</p>
  </body>
</html>
```

Here, `<h1>` and `<p>` are nested inside `<body>`, which is itself nested inside `<html>`. This hierarchy is what gives an HTML document its structure.

> **Rule:** Always close inner elements before closing outer elements to maintain valid nesting.

---

## The Importance of Closing Tags

Always include closing tags for non-void HTML elements. While browsers may attempt to auto-correct missing closing tags, this can lead to **unexpected layout and rendering issues** that are difficult to debug.

```html
<!-- Correct — closing tags present -->
<h2>Welcome To GeeksforGeeks</h2>
<p>Hi Geeks</p>

<!-- Incorrect — missing closing tags (avoid this) -->
<h2>Welcome To GeeksforGeeks
<p>Hi Geeks
```

- Browsers **may** auto-add missing closing tags
- This can cause **unpredictable layout behaviour**
- Always include closing tags for non-void elements

---

## HTML Empty Elements

HTML elements that contain **no content** and produce no visible output are called **empty elements** (also called void elements). They do **not** have a closing tag.

```html
<!DOCTYPE html>
<html>
  <head>
    <title></title>
  </head>
  <body>
    <h2>Welcome To GfG</h2>
    <br />
    <p>Hello Geeks.</p>
  </body>
</html>
```

### Common Empty Elements

| Element | Purpose |
|---|---|
| `<br>` | Inserts a line break |
| `<hr>` | Inserts a horizontal rule / divider |
| `<img>` | Embeds an image |
| `<input>` | Creates a form input field |
| `<link>` | Links external resources (e.g., CSS) |
| `<meta>` | Provides metadata about the document |

---

## Block-Level vs Inline Elements

HTML elements are broadly categorised into two types based on how they display within the document layout.

---

### 1. Block-Level Elements

Block-level elements always **start on a new line**, occupy the **full available width**, and stack vertically on the page. They can contain both block-level and inline elements inside them.

```html
<div>
  <h2>GeeksforGeeks</h2>
  <p>This content is inside a div.</p>
</div>
<table border="1">
  <tr>
    <th>Name</th>
    <th>Age</th>
  </tr>
  <tr>
    <td>David</td>
    <td>22</td>
  </tr>
</table>
```

### Common Block-Level Elements

| Element | Purpose |
|---|---|
| `<div>` | General-purpose container for other elements |
| `<p>` | Defines a paragraph |
| `<h1>` to `<h6>` | Heading elements of different levels |
| `<ol>`, `<ul>` | Ordered and unordered lists |
| `<table>` | Defines a table |
| `<form>` | Used to collect user input |
| `<section>`, `<article>`, `<nav>`, `<aside>`, `<header>`, `<footer>` | Semantic elements defining areas of a webpage |

---

### 2. Inline Elements

Inline elements do **not start on a new line** and only take up as much width as their content requires. They sit within the flow of surrounding content and are typically used inside block-level elements to style or add meaning to specific portions of text.

```html
<p>
  This is a <span>span element</span> used for styling text.
</p>
<p>
  <strong>Strong text</strong> and <b>bold text</b> are inline elements.
  <em>Emphasized text</em> and <i>italic text</i> are also inline.
</p>
<form>
  <label>Name:</label>
  <input type="text" placeholder="Enter your name">
</form>
```

### Common Inline Elements

| Element | Purpose |
|---|---|
| `<span>` | General-purpose inline container for styling portions of text |
| `<a>` | Creates hyperlinks |
| `<img>` | Embeds an image |
| `<strong>` | Indicates strong importance (bold, semantic) |
| `<b>` | Bold text (purely visual, no semantic meaning) |
| `<em>` | Emphasised text (italic, semantic) |
| `<i>` | Italic text (purely visual, no semantic meaning) |
| `<br>` | Inserts a line break within text |
| `<input>` | Creates interactive form controls |

---

## Block-Level vs Inline — Comparison

| | Block-Level | Inline |
|---|---|---|
| **Starts on new line** | Yes | No |
| **Width** | Full available width | Content width only |
| **Stacking** | Vertically, one after another | Flows within surrounding text |
| **Can contain** | Block and inline elements | Inline elements only |
| **Common examples** | `<div>`, `<p>`, `<h1>`, `<table>` | `<span>`, `<a>`, `<strong>`, `<img>` |

---

## Summary

HTML elements are the fundamental units of every web page. Understanding the difference between opening and closing tags, how nesting works, when to use empty elements, and how block-level and inline elements behave in the document flow are all essential skills for writing clean, valid, and well-structured HTML.

---