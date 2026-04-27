# Bootstrap Tables 

## Table of Contents
1. [Overview](#overview)
2. [Variants](#variants)
3. [Accented Tables](#accented-tables)
    - [Striped Rows](#striped-rows)
    - [Striped Columns](#striped-columns)
    - [Hoverable Rows](#hoverable-rows)
    - [Active Tables](#active-tables)
    - [How Variants & Accented Tables Work](#how-variants--accented-tables-work)
4. [Table Borders](#table-borders)
    - [Bordered Tables](#bordered-tables)
    - [Tables Without Borders](#tables-without-borders)
5. [Small Tables](#small-tables)
6. [Table Group Dividers](#table-group-dividers)
7. [Vertical Alignment](#vertical-alignment)
8. [Nesting](#nesting)
9. [Anatomy](#anatomy)
    - [Table Head](#table-head)
    - [Table Foot](#table-foot)
    - [Captions](#captions)
10. [Responsive Tables](#responsive-tables)
11. [CSS & Sass Variables](#css--sass-variables)
12. [Sass Loops](#sass-loops)
13. [Customizing](#customizing)
14. [All Table Classes — Quick Reference](#all-table-classes--quick-reference)

---

## Overview

Bootstrap's table styles are **opt-in** — no styles are applied to `<table>` elements by default. This is intentional because tables are widely used inside third-party widgets (calendars, date pickers, etc.) and automatic styling would cause conflicts.

To use Bootstrap table styles, add the base class `.table` to any `<table>` element, then extend with optional modifier classes.

> **Important:** All table styles are **not inherited** by nested tables — nested tables can be styled independently from the parent.

### Basic Table Structure

```html
<table class="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">First</th>
      <th scope="col">Last</th>
      <th scope="col">Handle</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>John</td>
      <td>Doe</td>
      <td>@social</td>
    </tr>
  </tbody>
</table>
```

> **Accessibility tip:** Use `scope="col"` on `<th>` elements in `<thead>` and `scope="row"` on `<th>` elements used as row headers in `<tbody>`. This helps screen readers identify the relationship between headers and data cells.

---

## Variants

Use contextual classes to color **entire tables**, **individual rows**, or **individual cells**.

> **Note:** Due to more complex CSS in table variants, color mode adaptive styling (light/dark mode) is not expected until Bootstrap v6.

### On the Entire Table

```html
<table class="table table-primary">...</table>
<table class="table table-secondary">...</table>
<table class="table table-success">...</table>
<table class="table table-danger">...</table>
<table class="table table-warning">...</table>
<table class="table table-info">...</table>
<table class="table table-light">...</table>
<table class="table table-dark">...</table>
```

### On Rows

```html
<tr class="table-primary">...</tr>
<tr class="table-secondary">...</tr>
<tr class="table-success">...</tr>
<tr class="table-danger">...</tr>
<tr class="table-warning">...</tr>
<tr class="table-info">...</tr>
<tr class="table-light">...</tr>
<tr class="table-dark">...</tr>
```

### On Individual Cells (`<td>` or `<th>`)

```html
<tr>
  <td class="table-primary">Primary cell</td>
  <td class="table-secondary">Secondary cell</td>
  <td class="table-success">Success cell</td>
  <td class="table-danger">Danger cell</td>
  <td class="table-warning">Warning cell</td>
  <td class="table-info">Info cell</td>
  <td class="table-light">Light cell</td>
  <td class="table-dark">Dark cell</td>
</tr>
```

> **Accessibility warning:** Color alone does not convey meaning to screen readers. Always ensure meaning is clear from the cell content itself, or include hidden descriptive text using `.visually-hidden`.

```html
<!-- Example: including hidden context for screen readers -->
<td class="table-danger">
  Failed
  <span class="visually-hidden">(status: error)</span>
</td>
```

---

## Accented Tables

### Striped Rows

Add `.table-striped` to apply zebra-striping to all rows within `<tbody>`.

```html
<table class="table table-striped">
  ...
</table>
```

Combined with a dark variant:

```html
<table class="table table-dark table-striped">
  ...
</table>
```

Combined with a color variant:

```html
<table class="table table-success table-striped">
  ...
</table>
```

### Striped Columns

Add `.table-striped-columns` to apply zebra-striping to alternating columns instead of rows.

```html
<table class="table table-striped-columns">
  ...
</table>
```

Combined with variants:

```html
<table class="table table-dark table-striped-columns">
  ...
</table>

<table class="table table-success table-striped-columns">
  ...
</table>
```

### Hoverable Rows

Add `.table-hover` to enable a hover highlight state on rows within `<tbody>`.

```html
<!-- Default hover -->
<table class="table table-hover">
  ...
</table>

<!-- Dark table with hover -->
<table class="table table-dark table-hover">
  ...
</table>

<!-- Striped rows + hover combined -->
<table class="table table-striped table-hover">
  ...
</table>
```

### Active Tables

Highlight a specific row or cell with `.table-active`.

```html
<table class="table">
  <thead>...</thead>
  <tbody>
    <!-- Highlight entire row -->
    <tr class="table-active">
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <!-- Highlight a single cell -->
    <tr>
      <th scope="row">3</th>
      <td>John</td>
      <td>Doe</td>
      <td class="table-active">@social</td>
    </tr>
  </tbody>
</table>
```

Works with dark tables too:

```html
<table class="table table-dark">
  <tbody>
    <tr class="table-active">...</tr>
  </tbody>
</table>
```

---

## How Variants & Accented Tables Work

Bootstrap uses a layered CSS approach to make accented styles work across all color variants without conflicts:

1. **Base background via CSS custom property:** Each table cell has its background set through `--bs-table-bg`. All variants set this property to colorize cells — avoiding issues with semi-transparent backgrounds.

2. **Inset box-shadow overlay:** An inset box-shadow is applied to cells:
   ```css
   box-shadow: inset 0 0 0 9999px var(--bs-table-bg-state, var(--bs-table-bg-type, var(--bs-table-accent-bg)));
   ```
   The huge spread and no blur creates a flat, monotone color layer. Since `--bs-table-accent-bg` defaults to `transparent`, there's no visible shadow by default.

3. **State overrides:** When `.table-striped`, `.table-striped-columns`, `.table-hover`, or `.table-active` are added, either `--bs-table-bg-type` or `--bs-table-bg-state` is set to a semitransparent color to override the default `--bs-table-accent-bg`.

4. **Auto contrast:** For each variant, an accent color with the highest contrast is auto-generated. Darker variants (like `.table-dark`) get a lighter accent; lighter variants get a darker accent.

### Sass Mixin Behind the Scenes (`scss/mixins/_table-variants.scss`)

```scss
@mixin table-variant($state, $background) {
  .table-#{$state} {
    $color: color-contrast(opaque($body-bg, $background));
    $hover-bg: mix($color, $background, percentage($table-hover-bg-factor));
    $striped-bg: mix($color, $background, percentage($table-striped-bg-factor));
    $active-bg: mix($color, $background, percentage($table-active-bg-factor));
    $table-border-color: mix($color, $background, percentage($table-border-factor));

    --#{$prefix}table-color: #{$color};
    --#{$prefix}table-bg: #{$background};
    --#{$prefix}table-border-color: #{$table-border-color};
    --#{$prefix}table-striped-bg: #{$striped-bg};
    --#{$prefix}table-striped-color: #{color-contrast($striped-bg)};
    --#{$prefix}table-active-bg: #{$active-bg};
    --#{$prefix}table-active-color: #{color-contrast($active-bg)};
    --#{$prefix}table-hover-bg: #{$hover-bg};
    --#{$prefix}table-hover-color: #{color-contrast($hover-bg)};

    color: var(--#{$prefix}table-color);
    border-color: var(--#{$prefix}table-border-color);
  }
}
```

---

## Table Borders

### Bordered Tables

Add `.table-bordered` to apply borders on all sides of the table and every cell.

```html
<table class="table table-bordered">
  ...
</table>
```

Change border color using border color utilities:

```html
<table class="table table-bordered border-primary">
  ...
</table>

<table class="table table-bordered border-success">
  ...
</table>

<table class="table table-bordered border-danger">
  ...
</table>
```

### Tables Without Borders

Add `.table-borderless` for a clean, borderless look.

```html
<!-- Light borderless table -->
<table class="table table-borderless">
  ...
</table>

<!-- Dark borderless table -->
<table class="table table-dark table-borderless">
  ...
</table>
```

---

## Small Tables

Add `.table-sm` to make a table more compact by **cutting all cell padding in half**.

```html
<!-- Small light table -->
<table class="table table-sm">
  ...
</table>

<!-- Small dark table -->
<table class="table table-dark table-sm">
  ...
</table>
```

Can be combined with other modifiers:

```html
<table class="table table-sm table-striped table-bordered">
  ...
</table>
```

---

## Table Group Dividers

Add `.table-group-divider` to a `<tbody>` (or `<tfoot>`) to insert a **thicker, darker border** between table groups (`<thead>`, `<tbody>`, `<tfoot>`). Customize the divider color by setting `border-top-color` inline or via custom CSS.

```html
<table class="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">First</th>
      <th scope="col">Last</th>
      <th scope="col">Handle</th>
    </tr>
  </thead>
  <tbody class="table-group-divider">
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>John</td>
      <td>Doe</td>
      <td>@social</td>
    </tr>
  </tbody>
</table>
```

Custom divider color:

```html
<tbody class="table-group-divider" style="border-top-color: #0d6efd;">
  ...
</tbody>
```

---

## Vertical Alignment

- `<thead>` cells are always **aligned to the bottom** by default
- `<tbody>` cells **inherit from `<table>`** and default to `top`

Use vertical align utility classes to override alignment at the table, row, or cell level.

| Class | Effect |
|---|---|
| `.align-top` | Aligns content to the top |
| `.align-middle` | Aligns content to the middle |
| `.align-bottom` | Aligns content to the bottom |

```html
<div class="table-responsive">
  <table class="table align-middle">   <!-- All cells vertically centered -->
    <thead>
      <tr>
        <th>Heading 1</th>
        <th>Heading 2</th>
        <th>Heading 3</th>
        <th>Heading 4</th>
      </tr>
    </thead>
    <tbody>
      <!-- Inherits align-middle from table -->
      <tr>
        <td>Cell</td>
        <td>Cell</td>
        <td>Cell</td>
        <td>Tall content here to show alignment...</td>
      </tr>
      <!-- Row-level override -->
      <tr class="align-bottom">
        <td>Cell</td>
        <td>Cell</td>
        <td>Cell</td>
        <td>Tall content here to show alignment...</td>
      </tr>
      <!-- Cell-level override -->
      <tr>
        <td>Cell</td>
        <td>Cell</td>
        <td class="align-top">This cell is aligned to the top.</td>
        <td>Tall content here to show alignment...</td>
      </tr>
    </tbody>
  </table>
</div>
```

---

## Nesting

Nested tables **do not inherit** border styles, active styles, or variant classes from the parent table — they are styled completely independently.

```html
<table class="table table-striped table-bordered">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">First</th>
      <th scope="col">Last</th>
      <th scope="col">Handle</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    <!-- Nested table inside a row -->
    <tr>
      <td colspan="4">
        <table class="table mb-0">
          <thead>
            <tr>
              <th>Header</th>
              <th>Header</th>
              <th>Header</th>
            </tr>
          </thead>
          <tbody>
            <tr><td>A</td><td>First</td><td>Last</td></tr>
            <tr><td>B</td><td>First</td><td>Last</td></tr>
            <tr><td>C</td><td>First</td><td>Last</td></tr>
          </tbody>
        </table>
      </td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>John</td>
      <td>Doe</td>
      <td>@social</td>
    </tr>
  </tbody>
</table>
```

### How Nesting Works Internally

Bootstrap uses the **child combinator (`>`) selector** to prevent styles from leaking into nested tables:

```css
.table > :not(caption) > * > *
```

This targets all `<td>` and `<th>` elements that are direct descendants of `.table`'s `<thead>`, `<tbody>`, and `<tfoot>` — without affecting any nested table cells.

> **Note:** If you add `<tr>` elements as direct children of `<table>`, browsers wrap them in `<tbody>` automatically, which keeps Bootstrap's selectors working correctly.

---

## Anatomy

### Table Head

Style `<thead>` independently using `.table-light` or `.table-dark`.

```html
<!-- Light header -->
<table class="table">
  <thead class="table-light">
    <tr>
      <th scope="col">#</th>
      <th scope="col">First</th>
      <th scope="col">Last</th>
      <th scope="col">Handle</th>
    </tr>
  </thead>
  <tbody>
    ...
  </tbody>
</table>

<!-- Dark header -->
<table class="table">
  <thead class="table-dark">
    <tr>
      <th scope="col">#</th>
      <th scope="col">First</th>
      <th scope="col">Last</th>
      <th scope="col">Handle</th>
    </tr>
  </thead>
  <tbody>
    ...
  </tbody>
</table>
```

### Table Foot

`<tfoot>` receives no special Bootstrap styling by default but can be combined with any modifier class.

```html
<table class="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">First</th>
      <th scope="col">Last</th>
      <th scope="col">Handle</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
  </tbody>
  <tfoot>
    <tr>
      <td>Footer</td>
      <td>Footer</td>
      <td>Footer</td>
      <td>Footer</td>
    </tr>
  </tfoot>
</table>
```

### Captions

A `<caption>` acts like a heading for the table — it helps screen reader users understand the table's purpose before diving into it.

By default the caption appears **below** the table. Use `.caption-top` on the `<table>` to move it **above**.

```html
<!-- Caption at the bottom (default) -->
<table class="table table-sm">
  <caption>List of users</caption>
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">First</th>
      <th scope="col">Last</th>
      <th scope="col">Handle</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
  </tbody>
</table>

<!-- Caption at the top -->
<table class="table caption-top">
  <caption>List of users</caption>
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">First</th>
      <th scope="col">Last</th>
      <th scope="col">Handle</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
  </tbody>
</table>
```

---

## Responsive Tables

Wrap a `.table` inside a responsive container div to enable **horizontal scrolling** when the table is too wide for the viewport.

> **Warning:** Responsive tables use `overflow-y: hidden`, which clips content that goes beyond the top or bottom edges — this can cut off dropdown menus and third-party widgets.

### Always Responsive (all breakpoints)

```html
<div class="table-responsive">
  <table class="table">
    ...
  </table>
</div>
```

### Breakpoint Specific

Use `.table-responsive{-sm|-md|-lg|-xl|-xxl}` to make a table responsive only **up to** a specific breakpoint. At that breakpoint and above, the table displays normally without scrolling.

```html
<!-- Responsive only on xs (below 576px) -->
<div class="table-responsive">
  <table class="table">...</table>
</div>

<!-- Responsive below sm (576px) -->
<div class="table-responsive-sm">
  <table class="table">...</table>
</div>

<!-- Responsive below md (768px) -->
<div class="table-responsive-md">
  <table class="table">...</table>
</div>

<!-- Responsive below lg (992px) -->
<div class="table-responsive-lg">
  <table class="table">...</table>
</div>

<!-- Responsive below xl (1200px) -->
<div class="table-responsive-xl">
  <table class="table">...</table>
</div>

<!-- Responsive below xxl (1400px) -->
<div class="table-responsive-xxl">
  <table class="table">...</table>
</div>
```

### Responsive Breakpoints Reference

| Class | Scrollable below |
|---|---|
| `.table-responsive` | Always (all viewports) |
| `.table-responsive-sm` | `576px` |
| `.table-responsive-md` | `768px` |
| `.table-responsive-lg` | `992px` |
| `.table-responsive-xl` | `1200px` |
| `.table-responsive-xxl` | `1400px` |

---

## CSS & Sass Variables

All table variables are defined in `scss/_variables.scss`.

### Cell Padding

```scss
$table-cell-padding-y:    .5rem;   // Vertical padding (normal)
$table-cell-padding-x:    .5rem;   // Horizontal padding (normal)
$table-cell-padding-y-sm: .25rem;  // Vertical padding for .table-sm
$table-cell-padding-x-sm: .25rem;  // Horizontal padding for .table-sm
```

### Base Colors

```scss
$table-cell-vertical-align: top;                              // Default cell alignment

$table-color:                var(--#{$prefix}emphasis-color); // Text color
$table-bg:                   var(--#{$prefix}body-bg);        // Background
$table-accent-bg:            transparent;                     // Default accent (none)

$table-th-font-weight:       null;                            // null = inherit
```

### Striped

```scss
$table-striped-color:      $table-color;
$table-striped-bg-factor:  .05;                                            // 5% opacity
$table-striped-bg:         rgba(var(--#{$prefix}emphasis-color-rgb), $table-striped-bg-factor);
$table-striped-order:      odd;           // Stripe odd rows by default
$table-striped-columns-order: even;       // Stripe even columns by default
```

### Active

```scss
$table-active-color:       $table-color;
$table-active-bg-factor:   .1;                                             // 10% opacity
$table-active-bg:          rgba(var(--#{$prefix}emphasis-color-rgb), $table-active-bg-factor);
```

### Hover

```scss
$table-hover-color:        $table-color;
$table-hover-bg-factor:    .075;                                           // 7.5% opacity
$table-hover-bg:           rgba(var(--#{$prefix}emphasis-color-rgb), $table-hover-bg-factor);
```

### Borders

```scss
$table-border-factor:      .2;
$table-border-width:       var(--#{$prefix}border-width);
$table-border-color:       var(--#{$prefix}border-color);
```

### Miscellaneous

```scss
$table-group-separator-color: currentcolor;               // Group divider color
$table-caption-color:         var(--#{$prefix}secondary-color); // Caption text color
$table-bg-scale:              -80%;                       // How much variant bg colors are lightened
```

---

## Sass Loops

Table color variants are generated via a Sass map in `scss/_variables.scss`. Each theme color has its background shifted by `$table-bg-scale` (-80%) to produce a lighter tint.

```scss
$table-variants: (
  "primary":   shift-color($primary,   $table-bg-scale),  // Lightened primary
  "secondary": shift-color($secondary, $table-bg-scale),  // Lightened secondary
  "success":   shift-color($success,   $table-bg-scale),  // Lightened success
  "info":      shift-color($info,      $table-bg-scale),  // Lightened info
  "warning":   shift-color($warning,   $table-bg-scale),  // Lightened warning
  "danger":    shift-color($danger,    $table-bg-scale),  // Lightened danger
  "light":     $light,                                    // Used as-is
  "dark":      $dark,                                     // Used as-is
);
```

This map is iterated over by the `table-variant()` mixin to generate all `.table-*` classes automatically.

---

## Customizing

### Factor Variables

Three factor variables control the contrast level of accented states across all table variants:

| Variable | Default | Effect |
|---|---|---|
| `$table-striped-bg-factor` | `.05` | How visible striped rows/columns are (5% opacity) |
| `$table-active-bg-factor` | `.1` | How visible active rows/cells are (10% opacity) |
| `$table-hover-bg-factor` | `.075` | How visible hovered rows are (7.5% opacity) |

### Background Scale

`$table-bg-scale` controls how much theme colors are lightened for color variants. Default is `-80%` (very light tints). `light` and `dark` variants are **not affected** by this variable.

### Custom Override Example

```scss
// Override before importing Bootstrap
$table-cell-padding-y:    .75rem;       // More padding
$table-cell-padding-x:    1rem;
$table-striped-bg-factor:  .08;         // Slightly more visible stripes
$table-hover-bg-factor:    .12;         // More visible hover
$table-bg-scale:           -70%;        // Slightly darker variant tints

@import "bootstrap";
```

---

## All Table Classes — Quick Reference

### Base

| Class | Description |
|---|---|
| `.table` | Required base class for all Bootstrap tables |

### Variants

| Class | Description |
|---|---|
| `.table-primary` | Blue background |
| `.table-secondary` | Gray background |
| `.table-success` | Green background |
| `.table-danger` | Red background |
| `.table-warning` | Yellow background |
| `.table-info` | Cyan background |
| `.table-light` | Light gray background |
| `.table-dark` | Dark background |

### Accents

| Class | Description |
|---|---|
| `.table-striped` | Zebra-stripe rows in `<tbody>` |
| `.table-striped-columns` | Zebra-stripe columns |
| `.table-hover` | Hover highlight on `<tbody>` rows |
| `.table-active` | Highlight a specific row or cell |

### Borders

| Class | Description |
|---|---|
| `.table-bordered` | Borders on all sides |
| `.table-borderless` | Remove all borders |

### Sizing & Layout

| Class | Description |
|---|---|
| `.table-sm` | Compact table — halves all cell padding |
| `.table-group-divider` | Thick divider between table groups |
| `.caption-top` | Moves `<caption>` above the table |

### Vertical Alignment

| Class | Description |
|---|---|
| `.align-top` | Align cell content to top |
| `.align-middle` | Align cell content to middle |
| `.align-bottom` | Align cell content to bottom |

### Thead

| Class | Description |
|---|---|
| `.table-light` | Light gray thead |
| `.table-dark` | Dark thead |

### Responsive Wrappers

| Class | Scrollable below |
|---|---|
| `.table-responsive` | All viewports |
| `.table-responsive-sm` | 576px |
| `.table-responsive-md` | 768px |
| `.table-responsive-lg` | 992px |
| `.table-responsive-xl` | 1200px |
| `.table-responsive-xxl` | 1400px |

---
