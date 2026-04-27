# Bootstrap Reboot 

## Table of Contents
1. [Approach](#approach)
2. [CSS Variables](#css-variables)
3. [Page Defaults](#page-defaults)
4. [Native Font Stack](#native-font-stack)
5. [Headings](#headings)
6. [Paragraphs](#paragraphs)
7. [Links](#links)
8. [Horizontal Rules](#horizontal-rules)
9. [Lists](#lists)
10. [Code Elements](#code-elements)
11. [Tables](#tables)
12. [Forms](#forms)
13. [Pointers on Buttons](#pointers-on-buttons)
14. [Misc Elements](#misc-elements)
15. [HTML5 \[hidden\] Attribute](#html5-hidden-attribute)

---

## Approach

Reboot is a **single-file collection of element-specific CSS resets** that builds on Normalize.css. It provides an elegant, consistent, and simple baseline — using only **element selectors**, never classes. Additional styling is always done via classes (e.g., `.table`, `.table-bordered`).

### Core Design Guidelines

- Use **`rem`** instead of `em` for scalable component spacing
- Avoid **`margin-top`** — vertical margins can collapse, yielding unexpected results; a single direction is a simpler mental model
- Block elements use **`rem` for margins** for easier scaling across device sizes
- Keep **font-related declarations minimal** — use `inherit` whenever possible

---

## CSS Variables

> **Added in v5.2.0**

Bootstrap 5.2+ standardizes the import of `_root.scss` across all CSS bundles (`bootstrap.css`, `bootstrap-reboot.css`, `bootstrap-grid.css`). This adds `:root`-level CSS variables to every bundle, enabling **real-time customization without Sass recompilation**.

### Root Variable Definitions (`scss/_root.scss`)

```scss
@if $font-size-root != null {
  --#{$prefix}root-font-size: #{$font-size-root};
}
--#{$prefix}body-font-family: #{inspect($font-family-base)};
@include rfs($font-size-base, --#{$prefix}body-font-size);
--#{$prefix}body-font-weight: #{$font-weight-base};
--#{$prefix}body-line-height: #{$line-height-base};
@if $body-text-align != null {
  --#{$prefix}body-text-align: #{$body-text-align};
}

--#{$prefix}body-color: #{$body-color};
--#{$prefix}body-color-rgb: #{to-rgb($body-color)};
--#{$prefix}body-bg: #{$body-bg};
--#{$prefix}body-bg-rgb: #{to-rgb($body-bg)};

--#{$prefix}emphasis-color: #{$body-emphasis-color};
--#{$prefix}emphasis-color-rgb: #{to-rgb($body-emphasis-color)};

--#{$prefix}secondary-color: #{$body-secondary-color};
--#{$prefix}secondary-color-rgb: #{to-rgb($body-secondary-color)};
--#{$prefix}secondary-bg: #{$body-secondary-bg};
--#{$prefix}secondary-bg-rgb: #{to-rgb($body-secondary-bg)};

--#{$prefix}tertiary-color: #{$body-tertiary-color};
--#{$prefix}tertiary-color-rgb: #{to-rgb($body-tertiary-color)};
--#{$prefix}tertiary-bg: #{$body-tertiary-bg};
--#{$prefix}tertiary-bg-rgb: #{to-rgb($body-tertiary-bg)};
```

### Applied in Reboot (`scss/_reboot.scss`)

```scss
body {
  margin: 0; // 1: remove default browser margin
  font-family: var(--#{$prefix}body-font-family);
  @include font-size(var(--#{$prefix}body-font-size));
  font-weight: var(--#{$prefix}body-font-weight);
  line-height: var(--#{$prefix}body-line-height);
  color: var(--#{$prefix}body-color);
  text-align: var(--#{$prefix}body-text-align);
  background-color: var(--#{$prefix}body-bg); // 2: explicit bg for safety
  -webkit-text-size-adjust: 100%; // 3: prevent font scaling in iOS
  -webkit-tap-highlight-color: rgba($black, 0); // 4: remove tap highlight
}
```

### Real-Time Override Example

```html
<!-- Override body color without recompiling Sass -->
<body style="--bs-body-color: #333;">
  <!-- ... -->
</body>
```

---

## Page Defaults

The `<html>` and `<body>` elements are updated to provide better page-wide defaults.

| Property | Behaviour |
|---|---|
| `box-sizing` | Set to `border-box` globally on `*`, `::before`, `::after` — declared width is never exceeded by padding or border |
| `font-size` | No base size on `<html>` (browser default 16px assumed); `1rem` on `<body>` for accessible, responsive scaling |
| `font-family` | Global default set on `<body>`, inherited by form elements for consistency |
| `background-color` | Declared as `#fff` on `<body>` for safety |

---

## Native Font Stack

Bootstrap uses a **system font stack** to render optimally on every device and OS, using each platform's own UI font.

```scss
$font-family-sans-serif:
  // Cross-platform generic font family (default user interface font)
  system-ui,
  // Safari for macOS and iOS (San Francisco)
  -apple-system,
  // Windows
  "Segoe UI",
  // Android
  Roboto,
  // Older macOS and iOS
  "Helvetica Neue",
  // Linux
  "Noto Sans",
  "Liberation Sans",
  // Basic web fallback
  Arial,
  // Sans-serif fallback
  sans-serif,
  // Emoji fonts
  "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji" !default;
```

> **Note:** Because emoji fonts are included, many Unicode symbols render as multicolored pictographs. Their appearance depends on the OS/browser's emoji font and cannot be affected by CSS `color` styles.

To change the global font family, update `$font-family-base` and recompile Bootstrap.

---

## Headings

All heading elements `<h1>`–`<h6>` receive the following Reboot changes:

- `margin-top` removed
- `margin-bottom: 0.5rem` set
- `line-height` tightened
- Color inherits by default — overridable via `--bs-heading-color`

| Element | Example |
|---|---|
| `<h1>` | h1. Bootstrap heading |
| `<h2>` | h2. Bootstrap heading |
| `<h3>` | h3. Bootstrap heading |
| `<h4>` | h4. Bootstrap heading |
| `<h5>` | h5. Bootstrap heading |
| `<h6>` | h6. Bootstrap heading |

```html
<h1>h1. Bootstrap heading</h1>
<h2>h2. Bootstrap heading</h2>
<h3>h3. Bootstrap heading</h3>
```

---

## Paragraphs

All `<p>` elements have:

- `margin-top` removed
- `margin-bottom: 1rem` set for easy spacing

```html
<p>This is an example paragraph.</p>
```

---

## Links

Default behavior:

- Default color and underline applied
- No `:visited` color change
- No special `:focus` styles

As of **v5.3**, link color uses `rgba()` and new `-rgb` CSS variables for opacity control:

```html
<!-- Default link -->
<a href="#">This is an example link</a>

<!-- Link with reduced opacity (v5.3+) -->
<a href="#" style="--bs-link-opacity: .5">This is an example link</a>

<!-- Placeholder link (no href) — color and text-decoration reset to defaults -->
<a>This is a placeholder link</a>
```

---

## Horizontal Rules

`<hr>` elements are simplified:

- Styled via `border-top`
- `opacity: 0.25` by default
- Inherits `border-color` from the `color` property
- Modifiable with text, border, and opacity utilities

```html
<!-- Default -->
<hr>

<!-- Inherits color from parent -->
<div class="text-success">
  <hr>
</div>

<!-- Custom styling with utilities -->
<hr class="border border-danger border-2 opacity-50">
<hr class="border border-primary border-3 opacity-75">
```

---

## Lists

All lists — `<ul>`, `<ol>`, and `<dl>` — receive:

- `margin-top` removed
- `margin-bottom: 1rem`
- `padding-left` reset on `<ul>` and `<ol>`
- Nested lists: no `margin-bottom`

Description lists (`<dl>`):

- `<dd>`: `margin-left: 0`, `margin-bottom: 0.5rem`
- `<dt>`: bolded

```html
<!-- Unordered list -->
<ul>
  <li>Item one</li>
  <li>Item two
    <ul>
      <li>Nested item (no bottom margin)</li>
    </ul>
  </li>
</ul>

<!-- Ordered list -->
<ol>
  <li>First item</li>
  <li>Second item</li>
</ol>

<!-- Description list -->
<dl>
  <dt>Term</dt>
  <dd>Definition for the term.</dd>
  <dd>A second definition for the same term.</dd>
  <dt>Another term</dt>
  <dd>Definition for this other term.</dd>
</dl>
```

---

## Code Elements

### `<code>` — Inline Code

Wrap inline snippets. Always escape HTML angle brackets.

```html
For example, <code>&lt;section&gt;</code> should be wrapped as inline.
```

### `<pre>` — Code Blocks

For multi-line code. `margin-top` removed; `margin-bottom` uses `rem` units.

```html
<pre><code>&lt;p&gt;Sample text here...&lt;/p&gt;
&lt;p&gt;And another line of sample text here...&lt;/p&gt;
</code></pre>
```

### `<var>` — Variables

For mathematical or programming variables.

```html
<var>y</var> = <var>m</var><var>x</var> + <var>b</var>
```

### `<kbd>` — Keyboard Input

For indicating input typically entered via keyboard. Can be nested.

```html
To switch directories, type <kbd>cd</kbd> followed by the name of the directory.<br>
To edit settings, press <kbd><kbd>Ctrl</kbd> + <kbd>,</kbd></kbd>
```

### `<samp>` — Sample Output

For indicating sample output from a program.

```html
<samp>This text is meant to be treated as sample output from a computer program.</samp>
```

---

## Tables

Reboot applies a minimal baseline reset to tables:

- Styles `<caption>`
- Collapses borders
- Ensures consistent `text-align` throughout

Full styling (borders, padding, striping, hovering) comes from the `.table` class and its modifiers.

```html
<table>
  <caption>
    This is an example table, and this is its caption to describe the contents.
  </caption>
  <thead>
    <tr>
      <th>Table heading</th>
      <th>Table heading</th>
      <th>Table heading</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Table cell</td>
      <td>Table cell</td>
      <td>Table cell</td>
    </tr>
    <tr>
      <td>Table cell</td>
      <td>Table cell</td>
      <td>Table cell</td>
    </tr>
  </tbody>
</table>

<!-- With Bootstrap table classes -->
<table class="table table-bordered table-striped">
  ...
</table>
```

---

## Forms

Key Reboot changes to form elements:

| Element | Reboot Changes |
|---|---|
| `<fieldset>` | No borders, padding, or margin — used as a plain wrapper |
| `<legend>` | Restyled to display as a heading |
| `<label>` | `display: inline-block` — allows margin to be applied |
| `<input>`, `<select>`, `<textarea>`, `<button>` | `margin` removed · `line-height: inherit` |
| `<textarea>` | Only **vertically** resizable — horizontal resize can break layouts |
| `<button>`, `<input[type=button]>` | `cursor: pointer` when `:not(:disabled)` |

```html
<form>
  <fieldset>
    <legend>Example legend</legend>

    <label for="name">Name</label>
    <input type="text" id="name" placeholder="Example input">

    <label for="email">Email</label>
    <input type="email" id="email" placeholder="Example email">

    <label for="select">Select</label>
    <select id="select">
      <option>Option one</option>
      <option>Option two</option>
    </select>

    <label>
      <input type="checkbox"> Check this checkbox
    </label>

    <label for="textarea">Textarea</label>
    <textarea id="textarea" rows="3"></textarea>

    <button type="submit">Submit</button>
  </fieldset>
</form>
```

---

## Pointers on Buttons

Reboot adds `cursor: pointer` to elements with `role="button"` to signal interactivity. This is not needed on `<button>` elements, which already get their own cursor change.

```html
<!-- Non-button element styled as a button -->
<span role="button" tabindex="0">Non-button element button</span>
```

---

## Misc Elements

### `<address>`

- `font-style` reset from `italic` → `normal`
- `line-height` inherited
- `margin-bottom: 1rem` added
- Use `<br>` to preserve line formatting

```html
<address>
  ACME Corporation<br>
  1123 Fictional St,<br>
  San Francisco, CA 94103<br>
  P: (123) 456-7890<br>
  <a href="mailto:first.last@example.com">first.last@example.com</a>
</address>
```

### `<blockquote>`

Default browser margin (`1em 40px`) reset to `0 0 1rem` for consistency with other elements.

```html
<blockquote>
  <p>A well-known quote, contained in a blockquote element.</p>
  <footer>— <cite>Someone famous in <em>Source Title</em></cite></footer>
</blockquote>
```

### `<abbr>` — Inline Elements

Receives basic styling to stand out from surrounding paragraph text.

```html
The <abbr title="HyperText Markup Language">HTML</abbr> abbreviation element.
```

### `<summary>`

Default `cursor` of `text` is reset to `pointer` to convey it is interactive.

```html
<details>
  <summary>Some details</summary>
  <p>Even more details here.</p>
</details>
```

---

## HTML5 [hidden] Attribute

Bootstrap overrides the browser's default `display: none` with `!important` to prevent accidental override by other CSS:

```css
/* Reboot's override */
[hidden] { display: none !important; }
```

```html
<!-- Element fully removed from layout -->
<input type="text" hidden>
```

> **Important:** `[hidden]` is **not compatible** with jQuery's `$(...).hide()` and `$(...).show()` methods.
>
> To merely toggle the **visibility** of an element (so it still affects document flow), use the `.invisible` class instead:

```html
<!-- Still takes up space, but not visible -->
<div class="invisible">This content is hidden but still occupies layout space.</div>
```

---
