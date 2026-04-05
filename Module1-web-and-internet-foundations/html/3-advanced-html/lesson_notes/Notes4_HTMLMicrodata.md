# HTML Microdata 

---

## What is HTML Microdata?

**HTML Microdata** is a specification used to embed structured data directly into HTML content. It helps search engines better understand webpage information by adding meaningful metadata to HTML elements.

---

## Key Features

| Feature | Description |
|---|---|
| Predefined attributes | Describes items and their properties using special attributes |
| Search engine clarity | Helps search engines interpret content more accurately |
| Rich snippets | Enables enhanced results like ratings, reviews, and knowledge panels |
| SEO improvement | Improves visibility and content understanding in search results |

---

## Core Microdata Attributes

There are three key attributes used in HTML Microdata:

| Attribute | Purpose |
|---|---|
| `itemscope` | Declares that an element contains microdata about a specific item |
| `itemtype` | Specifies the vocabulary URL that defines the item type |
| `itemprop` | Defines a property and its value for the item |

---

## Basic Syntax

```html
<!DOCTYPE html>
<html>
<body>

    <div itemscope>
        <p>This website is
            <span itemprop="name" style="color:green">
                <b>GeeksForGeeks</b>
            </span>.
        </p>
    </div>

    <div itemscope>
        <p>
            Learn from the basics of Data Structure and Algorithms from
            <span itemprop="name" style="color:green">
                <b>DSA-Self Paced</b>
            </span>.
        </p>

        <p>I live in
            <span itemprop="country" style="color:green">
                <b>India</b>
            </span>.
        </p>
    </div>

</body>
</html>
```

- `itemscope` marks the `<div>` as containing microdata.
- `itemprop="name"` labels the content inside `<span>` as the item's name.
- `itemprop="country"` labels the content as the item's country.

---

## Microdata Vocabulary

**Microdata Vocabulary** defines the meaning and structure of items used in HTML Microdata. It allows developers to describe data clearly using a **namespace URL** and predefined properties.

- Developers can use **existing vocabularies** (e.g. schema.org) or create **custom ones**.
- A **namespace URL** is required to define a microdata vocabulary and is set using `itemtype`.

### Common Vocabulary Properties

| Property | Type | Description |
|---|---|---|
| `name` | String | Represents the person's or item's name |
| `country` | String | Represents the country name |
| `url` | URL | Represents the personal website URL of the user |
| `photo` | URL | Represents a URL pointing to the user's image |

---

## Global Attributes in Microdata

HTML global attributes can be used alongside microdata to enhance behaviour and presentation. They can be applied to any HTML element such as `<div>`, `<p>`, `<img>`, and more.

| Attribute | Purpose |
|---|---|
| `id` | Uniquely identifies an element |
| `class` | Groups elements for styling |
| `style` | Applies inline CSS |
| `title` | Provides extra information (tooltip) |
| `lang` | Declares the language of content |

> Global attributes control aspects like styling, identification, accessibility, and interaction.

---

## Microdata Parsing Example

When a search engine crawler (e.g. Google) detects microdata matching a vocabulary URL, it extracts and stores the structured data along with the page information.

```html
<!DOCTYPE html>
<html>
<body>

    <div itemscope>
        <section itemscope itemtype="https://abc-xyz.org/geek">

            <h1 itemprop="name">GeeksForGeeks</h1>

            <p>
                <img itemprop="photo"
                     src="https://media.geeksforgeeks.org/gfg_logo.png">
            </p>

            <a itemprop="url" href="https://www.geeksforgeeks.org/">
                Link to Site
            </a>

        </section>
    </div>

</body>
</html>
```

### What each part does:

| Code | Role |
|---|---|
| `itemscope` | Declares this section contains a microdata item |
| `itemtype="https://abc-xyz.org/geek"` | Specifies the vocabulary used to define the item |
| `itemprop="name"` | Marks the `<h1>` text as the item's name |
| `itemprop="photo"` | Marks the `<img>` as the item's photo (URL) |
| `itemprop="url"` | Marks the `<a>` href as the item's website URL |

---

## Benefits of HTML Microdata

### 1. Improved Search Engine Understanding
- Helps search engines clearly understand the meaning of webpage content.
- Provides structured data that improves content interpretation.

### 2. Enhanced Search Results
- Enables **rich results** such as ratings, reviews, and event details.
- Makes search listings more informative and visually appealing.

### 3. Better SEO and Accessibility
- Improves SEO by supplying meaningful and structured metadata.
- Makes content more **machine-readable** and accessible.

---

## Quick Reference Checklist

| Task | How |
|---|---|
| Mark an item | Add `itemscope` to the container element |
| Define vocabulary | Add `itemtype="https://vocabulary-url.org/Type"` |
| Label a property | Add `itemprop="propertyName"` to the child element |
| Text value | Use inside `<span>`, `<p>`, `<h1>`, etc. |
| URL value | Use as `href` in `<a>` or `src` in `<img>` |

---

## Important Notes

- Microdata is one of several structured data formats — others include **JSON-LD** (recommended by Google) and **RDFa**.
- The most widely used vocabulary for microdata is **schema.org**, which defines types for people, organisations, products, events, and more.
- Microdata does not change how the page looks — it only adds invisible metadata for machines.
- Always test microdata using **Google's Rich Results Test** tool to confirm it is parsed correctly.

---