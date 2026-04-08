# Adding CSS to HTML — 3 Approaches

---

## Overview

Each method of adding CSS serves a different purpose based on how you organize and manage your styles.

- Helps you structure CSS according to your project needs.
- Makes your code easier to maintain and update.
- Allows flexibility in applying styles to different parts of a webpage.
- Improves readability and reusability of your design.

---

## 1. Inline CSS

Inline CSS allows you to apply styles **directly within HTML tags** using the `style` attribute.

- Best for small-scale styling or applying a unique style to a single element.
- Style is written directly inside the opening HTML tag.

### Syntax Example

```html
<!DOCTYPE html>
<html>
<head>
    <title>Inline CSS</title>
</head>
<body>
    <h2 style="color: green;">
        Welcome to
        <i style="color: green;">GeeksforGeeks</i>
    </h2>
</body>
</html>
```

### Key Points

| Feature | Detail |
|---|---|
| Location | Inside the HTML tag using the `style` attribute |
| Scope | Affects only the single element it is applied to |
| Reusability | Not reusable — must be repeated for each element |
| Best used for | Quick, one-off style changes or testing |
| Drawback | Clutters HTML and makes maintenance harder if overused |

> **Tip:** Use inline CSS sparingly to keep your HTML clean and readable.

---

## 2. Internal CSS

Internal CSS involves adding styles **within the HTML file** inside `<style>` tags, placed in the `<head>` section.

- More efficient than inline CSS for styling a single HTML document.
- Keeps CSS organized in one place within the file.

### Syntax Example

```html
<!DOCTYPE html>
<html>
<head>
    <title>Internal CSS</title>
    <style>
        h2 {
            color: green;
        }
    </style>
</head>
<body>
    <h2>Welcome to GeeksforGeeks</h2>
</body>
</html>
```

### Key Points

| Feature | Detail |
|---|---|
| Location | Inside `<style>` tags within the `<head>` section |
| Scope | Affects all matching elements on that single page |
| Reusability | Not reusable across multiple pages |
| Best used for | Single-page websites or pages with unique styling needs |
| Drawback | Not recommended for larger, multi-page projects |

> **Note:** Always place `<style>` tags inside the `<head>` section so styles are loaded before the body content is rendered.

---

## 3. External CSS

External CSS uses a **separate `.css` file** linked to the HTML document using the `<link>` tag.

- Ideal for large projects — keeps styles completely separate from HTML.
- The same CSS file can be linked to multiple HTML pages.

### Syntax Example

**HTML file:**
```html
<!DOCTYPE html>
<html>
<head>
    <title>External CSS</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <h2>Welcome to GeeksforGeeks</h2>
</body>
</html>
```

**styles.css file:**
```css
h2 {
    color: green;
}
```

### Key Points

| Feature | Detail |
|---|---|
| Location | Separate `.css` file linked via `<link>` tag in `<head>` |
| Scope | Applies to all HTML pages that link to the file |
| Reusability | Fully reusable across unlimited pages |
| Best used for | Large projects and multi-page websites |
| Advantage | Browser caches the CSS file, improving performance |

> **Best Practice:** Always keep your CSS separate from your HTML using external stylesheets wherever possible.

---

## Comparison Table — All 3 Methods

| Feature | Inline CSS | Internal CSS | External CSS |
|---|---|---|---|
| Location | Inside HTML tag | `<style>` in `<head>` | Separate `.css` file |
| Scope | Single element | Single page | Multiple pages |
| Reusability | None | Page-only | Fully reusable |
| Maintainability | Poor | Moderate | Excellent |
| Best for | Quick/unique styles | Single-page sites | Large projects |
| Performance | Low | Moderate | High (browser caching) |
| Recommended | Sparingly | When needed | Always preferred |

---

## Best Practices Summary

1. **Prefer external CSS** — keeps HTML clean and styles reusable across the entire project.
2. **Use internal CSS** only for single-page websites or pages with truly unique styling.
3. **Use inline CSS sparingly** — only for quick tests or truly one-off element styles.
4. **Never mix all three heavily** — pick a consistent approach to keep code maintainable.
5. **Place all `<style>` and `<link>` tags inside `<head>`** so styles load before content renders.

---

## Quick Reference

```
Inline CSS   → style="..." inside an HTML tag          → single element only
Internal CSS → <style> block inside <head>             → single page only
External CSS → <link href="styles.css"> in <head>      → entire website
```

---

