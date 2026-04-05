# HTML `<a>` Tag 

---

## What is the `<a>` Tag?

The `<a>` tag (anchor tag) defines a **hyperlink** that connects one page or resource to another. It is one of the most fundamental elements in HTML and forms the backbone of web navigation.

- Its key attribute, `href`, specifies the destination URL where users are directed upon clicking
- Can link to web pages, email addresses, phone numbers, or sections within the same page
- Supports attributes like `target`, `rel`, and `download` for enhanced functionality

---

## Syntax

```html
<a href="link">Link Name</a>
```

### Basic Example

```html
<!DOCTYPE html>
<html>
  <body>
    <a href="https://www.geeksforgeeks.org/html/html-tutorial/" target="_blank">
      HTML Tutorial
    </a>
  </body>
</html>
```

---

## Default Link Appearance

By default, all browsers style links in the following way without any CSS:

| Link State | Appearance |
|---|---|
| **Unvisited** | Underlined and blue |
| **Visited** | Underlined and purple |
| **Active** (being clicked) | Underlined and red |

---

## Common Uses of the `<a>` Tag

---

### 1. Opening Links in a New Tab

Adding `target="_blank"` opens the linked page in a **new browser tab** instead of navigating away from the current page.

```html
<a href="https://www.geeksforgeeks.org/" target="_blank">GeeksforGeeks</a>
```

> **Best Practice:** When using `target="_blank"`, also add `rel="noopener noreferrer"` for security — it prevents the new tab from gaining access to the original page via `window.opener`.

```html
<a href="https://www.geeksforgeeks.org/" target="_blank" rel="noopener noreferrer">
  GeeksforGeeks
</a>
```

---

### 2. Linking to Email Addresses and Phone Numbers

The `<a>` tag can trigger the user's default email client or phone dialler using special URL schemes.

**Email link — uses `mailto:`**
```html
<a href="mailto:example@xyz.com">Send email</a>
```

**Phone number link — uses `tel:`**
```html
<a href="tel:+910000000">+910000000</a>
```

- Clicking a `mailto:` link opens the user's default email application with the address pre-filled
- Clicking a `tel:` link initiates a phone call on mobile devices or compatible desktop applications

---

### 3. Creating Internal Page Anchors

The `<a>` tag can link to a **specific section within the same page** using the `#` symbol followed by the `id` of the target element.

```html
<!-- The link -->
<a href="#section1">Go to Section 1</a>

<!-- The target section -->
<h2 id="section1">Section 1</h2>
```

- Clicking the link scrolls the page directly to the element with the matching `id`
- Commonly used in long pages for navigation menus and table of contents

---

### 4. Executing JavaScript

The `<a>` tag can be used to trigger JavaScript code using the `javascript:` scheme in the `href` attribute.

```html
<a href="javascript:alert('Hello Geek');">Execute JavaScript</a>
```

> **Note:** This approach is generally discouraged in modern development. Using event listeners in JavaScript (e.g., `onclick`) is the preferred and cleaner alternative.

---

## `<a>` Tag Attributes

| Attribute | Description | HTML5 Support |
|---|---|---|
| `href` | Specifies the destination URL or resource the link points to | ✅ |
| `target` | Specifies where to open the linked document (`_blank`, `_self`, `_parent`, `_top`) | ✅ |
| `download` | Specifies that the target link should be downloaded when clicked | ✅ |
| `hreflang` | Specifies the language of the linked document | ✅ |
| `rel` | Specifies the relationship between the current and linked document | ✅ |
| `media` | Specifies the media type the linked resource is optimised for | ✅ |
| `type` | Specifies the MIME type of the linked resource | ✅ |
| `charset` | Specifies the character set of the linked document | ❌ Not supported in HTML5 |
| `name` | Specifies the anchor name — use the global `id` attribute instead in HTML5 | ❌ Not supported in HTML5 |
| `shape` | Specifies the shape of the link area | ❌ Not supported in HTML5 |
| `rev` | Specifies the relationship between the linked document and the current document | ❌ Not supported in HTML5 |

---

### `target` Attribute Values

| Value | Behaviour |
|---|---|
| `_blank` | Opens the link in a new tab or window |
| `_self` | Opens the link in the same tab (default behaviour) |
| `_parent` | Opens the link in the parent frame |
| `_top` | Opens the link in the full body of the window, breaking out of all frames |

---

## Complete Example — All Key Uses

```html
<!DOCTYPE html>
<html>
  <body>

    <!-- Basic external link -->
    <a href="https://www.geeksforgeeks.org/">Visit GeeksforGeeks</a>

    <!-- Open in new tab -->
    <a href="https://www.geeksforgeeks.org/" target="_blank" rel="noopener noreferrer">
      Open in New Tab
    </a>

    <!-- Email link -->
    <a href="mailto:example@xyz.com">Send us an Email</a>

    <!-- Phone link -->
    <a href="tel:+910000000">Call Us</a>

    <!-- Internal anchor link -->
    <a href="#section1">Jump to Section 1</a>

    <!-- Download link -->
    <a href="file.pdf" download>Download PDF</a>

    <!-- JavaScript trigger (legacy approach) -->
    <a href="javascript:alert('Hello!');">Click Me</a>

    <!-- Target section -->
    <h2 id="section1">Section 1</h2>
    <p>You have jumped to Section 1.</p>

  </body>
</html>
```

---

## Summary

| Use Case | Syntax |
|---|---|
| External link | `<a href="https://example.com">Text</a>` |
| Open in new tab | `<a href="url" target="_blank">Text</a>` |
| Email link | `<a href="mailto:email@example.com">Text</a>` |
| Phone link | `<a href="tel:+123456789">Text</a>` |
| Internal anchor | `<a href="#sectionId">Text</a>` |
| File download | `<a href="file.pdf" download>Text</a>` |
| JavaScript trigger | `<a href="javascript:code;">Text</a>` |

The `<a>` tag is the cornerstone of web navigation. Mastering its `href`, `target`, `rel`, and `download` attributes is essential for building well-connected, accessible, and user-friendly web pages.

---