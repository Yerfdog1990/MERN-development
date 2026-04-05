# HTML Accessibility 

---

## What is HTML Accessibility?

HTML accessibility refers to the practice of writing HTML code in a way that makes web content **usable and understandable for all users**, including people with disabilities. It ensures that websites can be accessed effectively using assistive technologies such as:

- Screen readers
- Keyboards
- Voice navigation

---

## Core Goals

| Goal | Description |
|---|---|
| Proper HTML tags | Clearly organise and explain content |
| Easier navigation | Helps people with different disabilities use the site |
| Better UX & SEO | Improves experience across devices and search engines |

---

## Benefits of Accessible HTML

### 1. Inclusivity
- Uses clear HTML tags, proper headings, and descriptive attributes.
- Makes websites accessible to everyone, including people with disabilities.
- Includes features like:
    - Alternative text for images
    - Language declaration
    - Meaningful link text
    - Accessible data tables for screen readers

### 2. SEO Friendliness
- Structures web content so search engines can easily understand and index it.
- Improves visibility in search results using semantic HTML and accessible content practices.

### 3. Mobile Responsiveness
- Ensures websites are easy to navigate on mobile devices.
- Enhances usability for all users, including those with disabilities, on smartphones and tablets.

---

## Key Methods for Structuring Accessible HTML

### 1. Semantic HTML
Use meaningful HTML tags to clearly define the purpose of content.

```html
<header>...</header>
<nav>...</nav>
<main>...</main>
<footer>...</footer>
<address>...</address>
```

- Helps screen readers and assistive technologies understand page structure.
- Avoids generic `<div>` and `<span>` tags where semantic alternatives exist.

---

### 2. Proper Use of Headings
Use headings in a logical, hierarchical order.

```html
<h1>Main Page Title</h1>
  <h2>Section Title</h2>
    <h3>Subsection Title</h3>
```

- Use `<h1>` for the main title only — once per page.
- Use `<h2>`–`<h6>` for subheadings in order.
- Improves content navigation and readability for screen reader users.

---

### 3. Alternative Text for Images
Always provide an `alt` attribute on `<img>` tags.

```html
<!-- Descriptive alt text -->
<img src="logo.jpg" alt="GFG Logo">

<!-- Decorative image (empty alt so screen readers skip it) -->
<img src="divider.png" alt="">
```

- Helps users when images do not load.
- Essential for screen reader users who cannot see images.

---

### 4. Declaring the Page Language
Use the `lang` attribute on the `<html>` tag.

```html
<html lang="en">
```

- Tells screen readers which language to use for pronunciation.
- Improves interpretation by assistive technologies.
- Use standard language codes: `en` (English), `fr` (French), `es` (Spanish), etc.

---

### 5. Meaningful Link Text
Use descriptive text inside `<a>` tags instead of generic phrases.

```html
<!-- Bad -->
<a href="services.html">Click here</a>

<!-- Good -->
<a href="services.html">View our web development services</a>
```

- Helps users understand the link purpose before clicking.
- Screen readers often read out link lists — generic text like "click here" provides no context.

---

### 6. Accessible Data Tables
Use `<th>` and `<caption>` to define table structure clearly.

```html
<table>
    <caption>Monthly Sales Data</caption>
    <tr>
        <th>Month</th>
        <th>Sales</th>
    </tr>
    <tr>
        <td>January</td>
        <td>$5,000</td>
    </tr>
</table>
```

- `<caption>` gives the table a title.
- `<th>` marks header cells so screen readers can associate data correctly.
- Improves data understanding for screen reader users.

---

### 7. Accessible Forms
Always pair `<label>` with its `<input>` using matching `for` and `id` attributes.

```html
<label for="name">Name:</label>
<input type="text" id="name" name="name" required>

<label for="email">Email:</label>
<input type="email" id="email" name="email" required>

<label for="message">Message:</label>
<textarea id="message" name="message" required></textarea>

<button type="submit">Send Message</button>
```

- The `for` attribute in `<label>` must match the `id` of the `<input>`.
- The `required` attribute communicates mandatory fields to assistive technologies.
- Use descriptive button text like `Send Message` rather than just `Submit`.

---

## Full Accessible Page Example

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Accessible Website Example</title>
</head>

<body>

    <header>
        <h1>Welcome to Our Accessible Website</h1>
    </header>

    <nav>
        <ul>
            <li><a href="#about-us">About Us</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#contact">Contact</a></li>
        </ul>
    </nav>

    <main>
        <h2>About Us</h2>
        <p>We are a company dedicated to creating accessible and user-friendly websites.</p>

        <img alt="GFG Logo" src="gfg-logo.jpg">

        <h2>Services</h2>
        <p>We offer a variety of web development services, including:</p>
        <ul>
            <li>Accessible HTML and CSS coding</li>
            <li>Website design and development</li>
            <li>Content creation and management</li>
        </ul>

        <h2>Contact</h2>
        <address>123 Main Street, Anytown, CA 12345</address>

        <form>
            <label for="name">Name:</label>
            <input type="text" id="name" name="name" required>

            <label for="email">Email:</label>
            <input type="email" id="email" name="email" required>

            <label for="message">Message:</label>
            <textarea id="message" name="message" required></textarea>

            <button type="submit">Send Message</button>
        </form>
    </main>

    <footer>
        <p>&copy; 2024 Accessible Website Example</p>
    </footer>

</body>
</html>
```

---

## Quick Reference Checklist

| Practice | How to implement |
|---|---|
| Semantic HTML | Use `<header>`, `<nav>`, `<main>`, `<footer>` |
| Headings | `<h1>` once per page, `<h2>`–`<h6>` in order |
| Image alt text | `alt="descriptive text"` on every `<img>` |
| Page language | `<html lang="en">` |
| Link text | Descriptive text, not "click here" |
| Table headers | Use `<th>` and `<caption>` |
| Form labels | `<label for="id">` matched to `<input id="...">` |

---

## Important Notes

- Accessibility is not optional — it is a legal requirement in many countries (e.g. WCAG standards, ADA compliance).
- Semantic HTML benefits **everyone**, not just users with disabilities — it also improves SEO and code maintainability.
- Always test your pages with a screen reader (e.g. NVDA, VoiceOver) to verify accessibility.

---