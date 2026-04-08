# CSS Text Formatting

---

## Overview

CSS text formatting styles and controls text appearance, improving readability and visual appeal.

- Helps control how text looks across your entire webpage.
- Covers color, alignment, spacing, decoration, shadow, and more.
- Improves both aesthetics and readability of web content.

### Example — Styled Initials

```css
.initials {
    font-size: 40px;        /* Large, prominent text */
    font-weight: bold;      /* Bold for emphasis */
    color: #4CAF50;         /* Green shade */
    text-transform: uppercase; /* All capital letters */
    font-family: Arial, sans-serif; /* Clean, modern font */
}
```

---

## All CSS Text Formatting Properties — Quick Reference

| Property | Description |
|---|---|
| `color` | Sets the color of the text |
| `text-align` | Specifies horizontal alignment of text |
| `text-align-last` | Sets alignment of the last line in an element |
| `text-decoration` | Decorates text (underline, overline, etc.) |
| `text-decoration-color` | Sets color of text decorations |
| `text-decoration-line` | Sets the type of decoration line |
| `text-decoration-style` | Sets the style of the decoration line |
| `text-indent` | Indents the first line of a paragraph |
| `text-justify` | Controls spacing in justified text |
| `text-overflow` | Specifies how hidden overflow text appears |
| `text-transform` | Controls capitalization of text |
| `text-shadow` | Adds shadow to text |
| `letter-spacing` | Specifies space between characters |
| `line-height` | Sets the space between lines |
| `direction` | Sets the text direction |
| `word-spacing` | Specifies space between words |

---

## Detailed Property Notes

---

### 1. `color`

Sets the color of text within an element. Applies to child text if no parent overrides it.

- Supports multiple formats: color names, RGB, RGBA, HEX, HSL, HSLA.

```css
p {
    color: green;
    font-size: 50px;
}
```

**Syntax:**
```css
element {
    color: color-name | rgb() | rgba() | hsl() | hsla() | #hexvalue;
}
```

---

### 2. `text-align`

Aligns text horizontally within an element. Supports direction-based values like `start` and `end`.

- Common values: `left`, `right`, `center`, `justify`
- `start` and `end` align relative to the writing direction of the container.

```css
p {
    text-align: center;
}
```

**Syntax:**
```css
element {
    text-align: left | right | center | justify | start | end | initial | inherit;
}
```

---

### 3. `text-align-last`

Aligns the **last line** of a text block — the line after a natural line break due to page width.

- Useful for paragraphs with `text-align: justify`.
- Applies after natural line wrapping, not manual `<br>` breaks.

```css
p {
    text-align-last: center;
}
```

**Syntax:**
```css
element {
    text-align-last: left | right | center | justify | initial | inherit;
}
```

---

### 4. `text-decoration`

Adds decorative lines to text. Common uses include underline, overline, and strikethrough.

```css
p {
    text-decoration: underline;
}
```

**Syntax:**
```css
element {
    text-decoration: dashed | dotted | double | line-through | none | overline | solid | underline | wavy;
}
```

---

### 5. `text-decoration-color`

Sets the **color** of the decoration line added by `text-decoration`. Only works when `text-decoration` is applied.

```css
p {
    text-decoration: underline;
    text-decoration-color: red;
}
```

**Syntax:**
```css
element {
    text-decoration-color: color | initial | inherit;
}
```

---

### 6. `text-decoration-line`

Defines the **type** of decoration line applied to text. Can combine multiple line types.

- `underline` — line below text
- `overline` — line above text
- `line-through` — line through the middle (strikethrough)

```css
p {
    text-decoration-line: line-through;
}
```

**Syntax:**
```css
element {
    text-decoration-line: underline | overline | line-through | none | inherit | initial;
}
```

---

### 7. `text-decoration-style`

Sets the **visual style** of the decoration line. Works alongside `text-decoration-line`.

| Value | Appearance |
|---|---|
| `solid` | A plain, unbroken line |
| `dashed` | A dashed line |
| `dotted` | A dotted line |
| `double` | Two parallel lines |
| `wavy` | A wavy line |

```css
p {
    text-decoration: underline;
    text-decoration-style: wavy;
    text-decoration-color: green;
}
```

**Syntax:**
```css
element {
    text-decoration-style: dashed | dotted | double | none | solid | wavy | initial | inherit;
}
```

---

### 8. `text-indent`

Adds an **indentation to the first line** of text within an element, measured from the start of the element.

- Commonly used in paragraphs.
- Accepts length values like `px` or `em`.

```css
p {
    text-indent: 70px;
}
```

**Syntax:**
```css
element {
    text-indent: value(px/em) | inherit | initial;
}
```

---

### 9. `text-justify`

Controls the **spacing method** used when text is justified. Specifies whether spacing is added between words or characters.

- Must be used alongside `text-align: justify`.
- `inter-word` — adds space between words.
- `inter-character` — adds space between individual characters.

```css
div {
    text-align: justify;
    text-justify: inter-word;
}
```

**Syntax:**
```css
element {
    text-justify: initial | inter-word | inter-character | inherit;
}
```

---

### 10. `text-overflow`

Controls how **overflowing text** that doesn't fit in its container is displayed.

- Most commonly used with `ellipsis` (…) to indicate hidden text.
- Requires `overflow: hidden` and `white-space: nowrap` to work correctly.

```css
p {
    width: 200px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}
```

**Syntax:**
```css
element {
    text-overflow: clip | ellipsis | inherit | initial;
}
```

> **Note:** Without `overflow: hidden` and `white-space: nowrap`, `text-overflow` has no effect.

---

### 11. `text-transform`

Controls the **letter casing** of text. Does not modify the original HTML content — only the visual display.

| Value | Result |
|---|---|
| `uppercase` | ALL LETTERS CAPITALISED |
| `lowercase` | all letters in lowercase |
| `capitalize` | First Letter Of Each Word Capitalised |
| `none` | No transformation |

```css
p {
    text-transform: capitalize;
}
```

**Syntax:**
```css
element {
    text-transform: capitalize | lowercase | uppercase | initial | inherit;
}
```

---

### 12. `text-shadow`

Adds a **shadow effect** to text. Supports blur radius and color customization for enhanced visual style.

- Parameters: horizontal offset, vertical offset, blur radius, shadow color.

```css
p {
    text-shadow: 10px 10px 5px red;
}
```

**Syntax:**
```css
element {
    text-shadow: shadow-height shadow-width blur-radius shadow-color;
}
```

**Example breakdown:**
```
text-shadow: 10px  10px  5px   red;
             ↑      ↑     ↑     ↑
          h-offset v-offset blur color
```

---

### 13. `bdo` (Bidirectional Override)

An **HTML tag** (not a CSS property) that explicitly overrides text direction using the `dir` attribute.

- `dir="ltr"` — Left to right (default)
- `dir="rtl"` — Right to left

```html
<bdo dir="rtl">Welcome to GeeksforGeeks</bdo>
```

> This would display: **skeegrofskeeG ot emocleW**

---

## Comparison — text-decoration Sub-Properties

| Property | Controls |
|---|---|
| `text-decoration` | Shorthand — sets all decoration at once |
| `text-decoration-line` | *What* kind of line (underline, overline, line-through) |
| `text-decoration-color` | *What color* the line is |
| `text-decoration-style` | *What style* the line is (solid, wavy, dotted, etc.) |

---

## Quick Reference — Syntax Cheat Sheet

```css
/* Color */
color: green | #4CAF50 | rgb(0,128,0);

/* Alignment */
text-align: left | right | center | justify;
text-align-last: left | right | center | justify;

/* Decoration */
text-decoration: underline | overline | line-through | none;
text-decoration-color: red;
text-decoration-line: underline | overline | line-through;
text-decoration-style: solid | dashed | dotted | wavy | double;

/* Spacing & Layout */
text-indent: 70px;
letter-spacing: 2px;
word-spacing: 5px;
line-height: 1.6;

/* Transformation */
text-transform: uppercase | lowercase | capitalize;

/* Overflow */
text-overflow: ellipsis | clip;   /* needs overflow:hidden + white-space:nowrap */

/* Justification */
text-justify: inter-word | inter-character;   /* needs text-align:justify */

/* Shadow */
text-shadow: h-offset v-offset blur color;
```

---

