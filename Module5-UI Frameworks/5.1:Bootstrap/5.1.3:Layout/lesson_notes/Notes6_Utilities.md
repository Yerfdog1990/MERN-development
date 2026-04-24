# Bootstrap — Utilities for Layout

Bootstrap includes dozens of utility classes for **showing, hiding, aligning, and spacing content**, making mobile-friendly and responsive development faster.

---

## 1. Changing Display

Use **display utilities** to responsively toggle common values of the `display` property. Combine with the grid system, content, or components to show or hide elements across specific viewports.

### Syntax

```
.d-{value}
.d-{breakpoint}-{value}
```

### Display Values

| Class | CSS Output |
|-------|-----------|
| `.d-none` | `display: none` |
| `.d-inline` | `display: inline` |
| `.d-inline-block` | `display: inline-block` |
| `.d-block` | `display: block` |
| `.d-flex` | `display: flex` |
| `.d-inline-flex` | `display: inline-flex` |
| `.d-grid` | `display: grid` |
| `.d-table` | `display: table` |

### Responsive Variants

Append a breakpoint to target specific screen sizes:

```html
<!-- Hidden on all screens -->
<div class="d-none">Hidden everywhere</div>

<!-- Hidden only on small screens, visible md and up -->
<div class="d-none d-md-block">Visible from md up</div>

<!-- Visible only on small screens -->
<div class="d-block d-md-none">Mobile only</div>

<!-- Block on xs, inline-block from lg up -->
<div class="d-block d-lg-inline-block">Responsive display</div>
```

### Breakpoints Reference

| Breakpoint | Infix | Starts at |
|------------|-------|-----------|
| Extra small | *(none)* | 0px |
| Small | `sm` | 576px |
| Medium | `md` | 768px |
| Large | `lg` | 992px |
| Extra large | `xl` | 1200px |
| XXL | `xxl` | 1400px |

> **Tip:** To hide an element on print, use `.d-print-none`. To show only on print, use `.d-none .d-print-block`.

---

## 2. Flexbox Options

Bootstrap is built with flexbox internally, but **does not apply `display: flex` globally** to avoid unnecessary overrides and unintended browser behavior changes. Flexbox is enabled selectively on components.

### Enabling Flexbox

Add `.d-flex` to any element to enable flexbox on it, then layer on flexbox utilities for alignment, sizing, and spacing.

```html
<!-- Basic flex container -->
<div class="d-flex">
  <div>Flex item 1</div>
  <div>Flex item 2</div>
</div>

<!-- Responsive: flex only from sm up -->
<div class="d-sm-flex">
  <div>Flex item 1</div>
  <div>Flex item 2</div>
</div>

<!-- Inline flex -->
<div class="d-inline-flex">
  <div>Item A</div>
  <div>Item B</div>
</div>
```

### Common Flexbox Utilities (used alongside `.d-flex`)

```html
<!-- Direction -->
<div class="d-flex flex-row">Row (default)</div>
<div class="d-flex flex-column">Column</div>
<div class="d-flex flex-row-reverse">Row reversed</div>

<!-- Justify content (main axis) -->
<div class="d-flex justify-content-start">Start</div>
<div class="d-flex justify-content-center">Center</div>
<div class="d-flex justify-content-end">End</div>
<div class="d-flex justify-content-between">Space between</div>
<div class="d-flex justify-content-around">Space around</div>

<!-- Align items (cross axis) -->
<div class="d-flex align-items-start">Top</div>
<div class="d-flex align-items-center">Middle</div>
<div class="d-flex align-items-end">Bottom</div>

<!-- Wrap -->
<div class="d-flex flex-wrap">Wrapping flex</div>
<div class="d-flex flex-nowrap">No wrap</div>

<!-- Gap between flex items -->
<div class="d-flex gap-3">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</div>
```

> **Note:** `.d-flex` or a `display: flex` value is **required** before any flexbox utility (like `justify-content-*`, `align-items-*`) will take effect.

---

## 3. Margin and Padding

Bootstrap provides a **six-level spacing scale** for margin and padding utilities, based on a `1rem` default `$spacer` variable.

### Syntax

```
.{property}{sides}-{size}
.{property}{sides}-{breakpoint}-{size}
```

### Properties

| Letter | Property |
|--------|----------|
| `m` | `margin` |
| `p` | `padding` |

### Sides

| Letter | Side |
|--------|------|
| `t` | top |
| `b` | bottom |
| `s` | start (left in LTR) |
| `e` | end (right in LTR) |
| `x` | left + right |
| `y` | top + bottom |
| *(none)* | all four sides |

### Size Scale

| Value | Size | Based on `$spacer` (1rem) |
|-------|------|--------------------------|
| `0` | 0 | 0 |
| `1` | 0.25rem | `$spacer * .25` |
| `2` | 0.5rem | `$spacer * .5` |
| `3` | 1rem | `$spacer` |
| `4` | 1.5rem | `$spacer * 1.5` |
| `5` | 3rem | `$spacer * 3` |
| `auto` | auto | `margin: auto` only |

### Examples

```html
<!-- Margin -->
<div class="m-3">Margin all sides (1rem)</div>
<div class="mt-4">Margin top (1.5rem)</div>
<div class="mb-2">Margin bottom (0.5rem)</div>
<div class="ms-3">Margin start/left (1rem) — LTR</div>
<div class="me-3">Margin end/right (1rem) — LTR</div>
<div class="mx-auto">Margin left & right auto (centers block)</div>
<div class="my-5">Margin top & bottom (3rem)</div>

<!-- Padding -->
<div class="p-3">Padding all sides (1rem)</div>
<div class="pt-2">Padding top (0.5rem)</div>
<div class="px-4">Padding left & right (1.5rem)</div>
<div class="py-1">Padding top & bottom (0.25rem)</div>

<!-- Responsive spacing -->
<div class="me-3 me-md-5">
  margin-right: 1rem on xs, 3rem from md up
</div>

<div class="p-2 p-lg-4">
  padding: 0.5rem on xs, 1.5rem from lg up
</div>
```

> **RTL note:** `.ms-*` (margin-start) and `.me-*` (margin-end) automatically flip in RTL layouts — no extra classes needed.

---

## 4. Toggle Visibility

When you need to **hide an element visually without removing it from the document flow**, use visibility utilities instead of display utilities.

> **Key difference:** `display: none` removes the element from layout entirely. `visibility: hidden` hides it visually but **still takes up space**.

### Classes

| Class | CSS Output |
|-------|-----------|
| `.visible` | `visibility: visible` |
| `.invisible` | `visibility: hidden` |

### Examples

```html
<!-- Element is hidden visually but still occupies space in layout -->
<div class="invisible">
  This is hidden but still takes up space on the page.
</div>

<!-- Element is visible (default behaviour, use to override) -->
<div class="visible">
  This is explicitly visible.
</div>
```

### Visibility vs Display — When to Use Which

| Scenario | Use |
|----------|-----|
| Completely remove from layout | `.d-none` |
| Hide visually but preserve layout space | `.invisible` |
| Show/hide at specific breakpoints | `.d-none .d-md-block` |
| Screen-reader accessible hidden content | `.visually-hidden` |

```html
<!-- Accessible hidden text (screen readers can still read this) -->
<span class="visually-hidden">This is for screen readers only</span>
```

---

## Quick Reference

```html
<!-- Display -->
<div class="d-none d-md-block">Hidden on mobile, visible md+</div>
<div class="d-block d-lg-none">Visible until lg</div>

<!-- Flexbox -->
<div class="d-flex justify-content-between align-items-center gap-2">
  <span>Left</span>
  <span>Right</span>
</div>

<!-- Spacing -->
<div class="p-3 mb-4 mx-auto">Padded, margin-bottom, centered</div>
<div class="mt-2 mt-md-5">Responsive top margin</div>

<!-- Visibility -->
<div class="invisible">Hidden but in flow</div>
<span class="visually-hidden">Screen reader only</span>
```

---