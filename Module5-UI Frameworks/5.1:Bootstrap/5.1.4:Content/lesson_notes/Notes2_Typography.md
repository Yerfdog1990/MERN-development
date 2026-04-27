# Bootstrap Typography 

## Table of Contents
1. [Global Settings](#global-settings)
2. [Headings](#headings)
3. [Customizing Headings](#customizing-headings)
4. [Display Headings](#display-headings)
5. [Lead](#lead)
6. [Inline Text Elements](#inline-text-elements)
7. [Text Utilities](#text-utilities)
8. [Abbreviations](#abbreviations)
9. [Blockquotes](#blockquotes)
10. [Lists](#lists)
11. [Responsive Font Sizes](#responsive-font-sizes)
12. [CSS & Sass Variables](#css--sass-variables)
13. [Sass Mixins](#sass-mixins)

---

## Global Settings

Bootstrap sets basic global display, typography, and link styles via `_reboot.scss`. Global variables are defined in `_variables.scss`.

### Key Global Rules

| Setting | Description |
|---|---|
| Font family | Uses a **native system font stack** — selects the best font for each OS and device |
| Font size | Uses the **browser's default root font-size** (typically 16px) for accessibility — users can customize their browser defaults |
| Typographic base | `$font-family-base`, `$font-size-base`, and `$line-height-base` are applied to `<body>` |
| Link color | Set globally via `$link-color` |
| Background color | `$body-bg` sets `background-color` on `<body>` (default `#fff`) |

> **Important:** Always set `$font-size-base` in `rem`, not `px`.

### Where to Find These Styles

- Element resets → `_reboot.scss`
- Global variables → `_variables.scss`

---

## Headings

All HTML headings `<h1>` through `<h6>` are available and fully styled by Bootstrap.

### Semantic HTML Headings

```html
<h1>h1. Bootstrap heading</h1>
<h2>h2. Bootstrap heading</h2>
<h3>h3. Bootstrap heading</h3>
<h4>h4. Bootstrap heading</h4>
<h5>h5. Bootstrap heading</h5>
<h6>h6. Bootstrap heading</h6>
```

### Heading Classes `.h1` – `.h6`

Use `.h1` through `.h6` classes when you want **heading font styling** but cannot or should not use the semantic heading element (e.g., inside a `<p>`, `<span>`, or for SEO/structural reasons).

```html
<p class="h1">h1. Bootstrap heading</p>
<p class="h2">h2. Bootstrap heading</p>
<p class="h3">h3. Bootstrap heading</p>
<p class="h4">h4. Bootstrap heading</p>
<p class="h5">h5. Bootstrap heading</p>
<p class="h6">h6. Bootstrap heading</p>
```

---

## Customizing Headings

Use utility classes to add secondary faded text to headings — recreates the small secondary heading style from Bootstrap 3.

```html
<h3>
  Fancy display heading
  <small class="text-body-secondary">With faded secondary text</small>
</h3>
```

- `<small>` reduces font size
- `.text-body-secondary` applies a muted, faded color

---

## Display Headings

Display headings are **larger, more opinionated** heading styles — intended for hero sections or standout content, not body content headings.

### Available Classes

```html
<h1 class="display-1">Display 1</h1>
<h1 class="display-2">Display 2</h1>
<h1 class="display-3">Display 3</h1>
<h1 class="display-4">Display 4</h1>
<h1 class="display-5">Display 5</h1>
<h1 class="display-6">Display 6</h1>
```

### Sass Configuration (`scss/_variables.scss`)

```scss
// Font sizes for each display level
$display-font-sizes: (
  1: 5rem,
  2: 4.5rem,
  3: 4rem,
  4: 3.5rem,
  5: 3rem,
  6: 2.5rem
);

// Font style and family (null = inherit)
$display-font-family: null;
$display-font-style:  null;

// Weight and line-height
$display-font-weight: 300;
$display-line-height: $headings-line-height;
```

> Display headings are configured via the `$display-font-sizes` Sass map. Override these variables to customize all display heading sizes at once.

---

## Lead

Make a paragraph stand out from the rest of the body text by adding the `.lead` class. It increases the font size and reduces font weight.

```html
<p class="lead">
  This is a lead paragraph. It stands out from regular paragraphs.
</p>
```

### Sass Variables

```scss
$lead-font-size:   $font-size-base * 1.25;  // 1.25× base size
$lead-font-weight: 300;
```

---

## Inline Text Elements

Bootstrap styles common inline HTML5 elements for semantic use. Use the correct element for its **semantic meaning**, not just its visual appearance.

### All Inline Elements

```html
<!-- Highlighted text -->
<p>You can use the mark tag to <mark>highlight</mark> text.</p>

<!-- Deleted text (strikethrough — semantic: deleted content) -->
<p><del>This line of text is meant to be treated as deleted text.</del></p>

<!-- Strikethrough (no longer accurate) -->
<p><s>This line of text is meant to be treated as no longer accurate.</s></p>

<!-- Inserted text (underline — semantic: added content) -->
<p><ins>This line of text is meant to be treated as an addition to the document.</ins></p>

<!-- Underlined text -->
<p><u>This line of text will render as underlined.</u></p>

<!-- Fine print / small text -->
<p><small>This line of text is meant to be treated as fine print.</small></p>

<!-- Bold -->
<p><strong>This line rendered as bold text.</strong></p>

<!-- Italic -->
<p><em>This line rendered as italicized text.</em></p>
```

### Semantic Meanings — Quick Reference

| Tag | Semantic Purpose |
|---|---|
| `<mark>` | Text marked/highlighted for reference or notation |
| `<small>` | Side-comments, fine print, copyright, legal text |
| `<s>` | Content that is no longer relevant or accurate |
| `<u>` | Text with a non-textual annotation (e.g., misspelling) |
| `<del>` | Text that has been deleted from the document |
| `<ins>` | Text that has been inserted into the document |
| `<strong>` | Important text (bold) |
| `<em>` | Emphasized text (italic) |
| `<b>` | Highlight words/phrases without conveying importance |
| `<i>` | Voice, technical terms, foreign phrases |

### CSS Class Alternatives (for styling only, no semantic meaning)

If you want the **visual style** without the semantic meaning, use these utility classes instead:

| Class | Equivalent Element |
|---|---|
| `.mark` | `<mark>` |
| `.small` | `<small>` |
| `.text-decoration-underline` | `<u>` |
| `.text-decoration-line-through` | `<s>` |

```html
<!-- Styled without semantic meaning -->
<p class="mark">Highlighted with a class</p>
<p class="small">Small text with a class</p>
<p class="text-decoration-underline">Underlined with a class</p>
<p class="text-decoration-line-through">Strikethrough with a class</p>
```

---

## Text Utilities

Bootstrap provides a rich set of utility classes for text manipulation without writing custom CSS.

| Category | Example Classes |
|---|---|
| Alignment | `.text-start`, `.text-center`, `.text-end` |
| Transform | `.text-uppercase`, `.text-lowercase`, `.text-capitalize` |
| Style | `.fst-italic`, `.fst-normal` |
| Weight | `.fw-bold`, `.fw-semibold`, `.fw-normal`, `.fw-light` |
| Line height | `.lh-1`, `.lh-sm`, `.lh-base`, `.lh-lg` |
| Decoration | `.text-decoration-none`, `.text-decoration-underline`, `.text-decoration-line-through` |
| Color | `.text-primary`, `.text-secondary`, `.text-success`, `.text-danger`, `.text-muted` |

```html
<!-- Alignment -->
<p class="text-center">Centered text</p>
<p class="text-end">Right-aligned text</p>

<!-- Weight -->
<p class="fw-bold">Bold text</p>
<p class="fw-light">Light text</p>

<!-- Transform -->
<p class="text-uppercase">uppercased text</p>
<p class="text-capitalize">capitalized text</p>

<!-- Color -->
<p class="text-primary">Primary color text</p>
<p class="text-muted">Muted text</p>
```

---

## Abbreviations

Bootstrap styles the HTML `<abbr>` element to show the expanded version of an abbreviation or acronym on hover.

### Default behavior:
- Default underline applied
- `help` cursor on hover
- Accessible to assistive technologies via the `title` attribute

```html
<!-- Basic abbreviation -->
<p><abbr title="attribute">attr</abbr></p>

<!-- With .initialism — slightly smaller font size, uppercased -->
<p><abbr title="HyperText Markup Language" class="initialism">HTML</abbr></p>
```

### Sass Variable

```scss
$initialism-font-size: $small-font-size;  // .875em
```

---

## Blockquotes

For quoting blocks of content from another source within your document.

### Basic Blockquote

Wrap content in `<blockquote class="blockquote">`.

```html
<blockquote class="blockquote">
  <p>A well-known quote, contained in a blockquote element.</p>
</blockquote>
```

### Naming a Source

Per the HTML spec, attribution must be **outside** the `<blockquote>`. Use a `<figure>` wrapper with `<figcaption class="blockquote-footer">`. Wrap the source title in `<cite>`.

```html
<figure>
  <blockquote class="blockquote">
    <p>A well-known quote, contained in a blockquote element.</p>
  </blockquote>
  <figcaption class="blockquote-footer">
    Someone famous in <cite title="Source Title">Source Title</cite>
  </figcaption>
</figure>
```

### Alignment

Use text utility classes on the `<figure>` element to control alignment.

```html
<!-- Center-aligned blockquote -->
<figure class="text-center">
  <blockquote class="blockquote">
    <p>A well-known quote, contained in a blockquote element.</p>
  </blockquote>
  <figcaption class="blockquote-footer">
    Someone famous in <cite title="Source Title">Source Title</cite>
  </figcaption>
</figure>

<!-- Right-aligned blockquote -->
<figure class="text-end">
  <blockquote class="blockquote">
    <p>A well-known quote, contained in a blockquote element.</p>
  </blockquote>
  <figcaption class="blockquote-footer">
    Someone famous in <cite title="Source Title">Source Title</cite>
  </figcaption>
</figure>
```

### Sass Variables

```scss
$blockquote-margin-y:         $spacer;               // Top and bottom margin
$blockquote-font-size:        $font-size-base * 1.25; // 1.25× base size
$blockquote-footer-color:     $gray-600;              // Footer text color
$blockquote-footer-font-size: $small-font-size;       // .875em
```

---

## Lists

### Unstyled Lists

Remove default `list-style` and left margin using `.list-unstyled`. Applies to **immediate children only** — nested lists must also have the class applied if needed.

```html
<ul class="list-unstyled">
  <li>This is a list.</li>
  <li>It appears completely unstyled.</li>
  <li>Structurally, it's still a list.</li>
  <li>However, this style only applies to immediate child elements.</li>
  <li>Nested lists:
    <ul>
      <!-- These still show bullets unless .list-unstyled is added here too -->
      <li>are unaffected by this style</li>
      <li>will still show a bullet</li>
      <li>and have appropriate left margin</li>
    </ul>
  </li>
  <li>This may still come in handy in some situations.</li>
</ul>
```

### Inline Lists

Remove bullets and display list items horizontally using `.list-inline` on `<ul>` and `.list-inline-item` on each `<li>`.

```html
<ul class="list-inline">
  <li class="list-inline-item">This is a list item.</li>
  <li class="list-inline-item">And another one.</li>
  <li class="list-inline-item">But they're displayed inline.</li>
</ul>
```

### Sass Variable

```scss
$list-inline-padding: .5rem;  // Horizontal padding between inline items
```

### Description List Alignment

Use Bootstrap's grid system classes to align terms and definitions horizontally. Add `.text-truncate` to `<dt>` to truncate long terms with an ellipsis.

```html
<dl class="row">
  <dt class="col-sm-3">Description lists</dt>
  <dd class="col-sm-9">A description list is perfect for defining terms.</dd>

  <dt class="col-sm-3">Term</dt>
  <dd class="col-sm-9">
    <p>Definition for the term.</p>
    <p>And some more placeholder definition text.</p>
  </dd>

  <dt class="col-sm-3">Another term</dt>
  <dd class="col-sm-9">This definition is short, so no extra paragraphs or anything.</dd>

  <!-- Truncated term with ellipsis -->
  <dt class="col-sm-3 text-truncate">Truncated term is truncated</dt>
  <dd class="col-sm-9">This can be useful when space is tight. Adds an ellipsis at the end.</dd>

  <!-- Nested description list -->
  <dt class="col-sm-3">Nesting</dt>
  <dd class="col-sm-9">
    <dl class="row">
      <dt class="col-sm-4">Nested definition list</dt>
      <dd class="col-sm-8">I heard you like definition lists. Let me put a definition list inside your definition list.</dd>
    </dl>
  </dd>
</dl>
```

---

## Responsive Font Sizes

Bootstrap 5 enables **Responsive Font Sizing (RFS)** by default. Text scales more naturally across device and viewport sizes — font sizes automatically adjust based on the viewport width.

- RFS is applied globally through Bootstrap's Sass build
- No additional classes are needed
- See the [RFS documentation](https://github.com/twbs/rfs) for full details on how the algorithm works

---

## CSS & Sass Variables

### Heading Variables (`scss/_variables.scss`)

```scss
$headings-margin-bottom: $spacer * .5;   // 0.5rem bottom margin
$headings-font-family:   null;           // null = inherit from body
$headings-font-style:    null;
$headings-font-weight:   500;
$headings-line-height:   1.2;
$headings-color:         inherit;        // Inherits from parent
```

### Typography Element Variables (`scss/_variables.scss`)

```scss
// Lead paragraph
$lead-font-size:              $font-size-base * 1.25;
$lead-font-weight:            300;

// Small text
$small-font-size:             .875em;

// Superscript / subscript
$sub-sup-font-size:           .75em;

// Deprecated in 5.3.0
$text-muted:                  var(--#{$prefix}secondary-color);

// Abbreviation with .initialism
$initialism-font-size:        $small-font-size;

// Blockquote
$blockquote-margin-y:         $spacer;
$blockquote-font-size:        $font-size-base * 1.25;
$blockquote-footer-color:     $gray-600;
$blockquote-footer-font-size: $small-font-size;

// Horizontal rule
$hr-margin-y:                 $spacer;
$hr-color:                    inherit;
$hr-bg-color:                 null;          // Deprecated in v5.2.0
$hr-height:                   null;          // Deprecated in v5.2.0
$hr-border-color:             null;          // Allows inherited colors
$hr-border-width:             var(--#{$prefix}border-width);
$hr-opacity:                  .25;

// Vertical rule
$vr-border-width:             var(--#{$prefix}border-width);

// Legend
$legend-margin-bottom:        .5rem;
$legend-font-size:            1.5rem;
$legend-font-weight:          null;

// Definition term
$dt-font-weight:              $font-weight-bold;

// Inline list
$list-inline-padding:         .5rem;

// Mark / highlight
$mark-padding:                .1875em;
$mark-color:                  $body-color;
$mark-bg:                     $yellow-100;
```

### Display Heading Variables (`scss/_variables.scss`)

```scss
$display-font-sizes: (
  1: 5rem,
  2: 4.5rem,
  3: 4rem,
  4: 3.5rem,
  5: 3rem,
  6: 2.5rem
);

$display-font-family: null;
$display-font-style:  null;
$display-font-weight: 300;
$display-line-height: $headings-line-height;
```

---

## Sass Mixins

> There are **no dedicated mixins** for typography in Bootstrap.

Bootstrap uses **Responsive Font Sizing (RFS)** as its primary typographic mixin — applied automatically to headings, display headings, and lead paragraphs. RFS is a Sass mixin that makes font sizes fluid based on viewport width.

```scss
// RFS is called internally like this:
@include font-size(5rem);       // Applied to display-1
@include font-size(1.25rem);    // Applied to .lead
```

You can use RFS in your own Sass by calling `@include font-size(value)` or `@include rfs(value, property)`.

---
