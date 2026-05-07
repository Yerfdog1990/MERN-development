# Bootstrap Pagination 

Documentation and examples for showing pagination to indicate a series of related content exists across multiple pages.

## Table of Contents
- [Overview](#overview)
- [Working with Icons](#working-with-icons)
- [Active State](#active-state)
- [Disabled State](#disabled-state)
- [Sizing](#sizing)
- [Alignment](#alignment)
- [CSS Variables](#css-variables)
- [Sass Variables](#sass-variables)
- [Sass Mixins](#sass-mixins)

---

## Overview

Pagination uses a **block of connected links** inside a `<ul>` list, wrapped in a `<nav>` element.

Key design decisions:
- Built with **list HTML** (`<ul>` + `<li>`) so screen readers can announce the number of available links.
- The `<nav>` wrapper identifies it as a **navigation landmark** for assistive technologies.
- When a page has **multiple navigation sections**, add a descriptive `aria-label` to each `<nav>` to distinguish them (e.g., `aria-label="Search results pages"`).

```html
<nav aria-label="Page navigation example">
  <ul class="pagination">
    <li class="page-item"><a class="page-link" href="#">Previous</a></li>
    <li class="page-item"><a class="page-link" href="#">1</a></li>
    <li class="page-item"><a class="page-link" href="#">2</a></li>
    <li class="page-item"><a class="page-link" href="#">3</a></li>
    <li class="page-item"><a class="page-link" href="#">Next</a></li>
  </ul>
</nav>
```

**Structural classes:**

| Class | Applied to | Purpose |
|---|---|---|
| `.pagination` | `<ul>` | Base pagination styles and flex layout |
| `.page-item` | `<li>` | Wrapper for each pagination item |
| `.page-link` | `<a>` or `<span>` | Styles the link/button inside each item |

---

## Working with Icons

When replacing text with icons or symbols (e.g., `«` and `»`), use ARIA attributes to ensure screen reader support:

- Put the meaningful label on the `<a>` with `aria-label="Previous"` / `aria-label="Next"`.
- Add `aria-hidden="true"` to the `<span>` containing the icon so it's ignored by screen readers (the `aria-label` on the `<a>` is read instead).

```html
<nav aria-label="Page navigation example">
  <ul class="pagination">
    <li class="page-item">
      <a class="page-link" href="#" aria-label="Previous">
        <span aria-hidden="true">&laquo;</span>
      </a>
    </li>
    <li class="page-item"><a class="page-link" href="#">1</a></li>
    <li class="page-item"><a class="page-link" href="#">2</a></li>
    <li class="page-item"><a class="page-link" href="#">3</a></li>
    <li class="page-item">
      <a class="page-link" href="#" aria-label="Next">
        <span aria-hidden="true">&raquo;</span>
      </a>
    </li>
  </ul>
</nav>
```

**Common icon characters:**

| Symbol | HTML entity | Use |
|---|---|---|
| « | `&laquo;` | Previous / First |
| » | `&raquo;` | Next / Last |
| ‹ | `&lsaquo;` | Previous (single) |
| › | `&rsaquo;` | Next (single) |

---

## Active State

Add `.active` to a `.page-item` to highlight the currently viewed page.

- If using an `<a>` element for the active page, also add `aria-current="page"` for assistive technologies.
- If using a non-interactive `<span>` for the active page, `aria-current` is optional (and can be omitted).

### With `<a>` (interactive, navigable)

```html
<nav aria-label="...">
  <ul class="pagination">
    <li class="page-item"><a class="page-link" href="#">Previous</a></li>
    <li class="page-item"><a class="page-link" href="#">1</a></li>

    <!-- Active page: .active on <li> + aria-current="page" on <a> -->
    <li class="page-item active">
      <a class="page-link" href="#" aria-current="page">2</a>
    </li>

    <li class="page-item"><a class="page-link" href="#">3</a></li>
    <li class="page-item"><a class="page-link" href="#">Next</a></li>
  </ul>
</nav>
```

### With `<span>` (non-interactive, no link)

```html
<!-- Current page rendered as non-interactive span -->
<li class="page-item active">
  <span class="page-link">2</span>
</li>
```

> Using `<span>` prevents the user from "re-clicking" the current page and avoids a redundant navigation action.

---

## Disabled State

Add `.disabled` to a `.page-item` to make it appear un-clickable (e.g., "Previous" on the first page).

> **Important:** `.disabled` uses `pointer-events: none` — but this is **not standardized** and does not cover keyboard navigation. You must also:
> - Add `tabindex="-1"` to remove the link from keyboard tab order.
> - Use custom JavaScript to fully disable functionality if needed.

### With `<a>` + `tabindex="-1"`

```html
<nav aria-label="...">
  <ul class="pagination">
    <!-- Disabled: remove href and add tabindex="-1" -->
    <li class="page-item disabled">
      <a class="page-link" tabindex="-1" aria-disabled="true">Previous</a>
    </li>

    <li class="page-item"><a class="page-link" href="#">1</a></li>
    <li class="page-item active">
      <a class="page-link" href="#" aria-current="page">2</a>
    </li>
    <li class="page-item"><a class="page-link" href="#">3</a></li>
    <li class="page-item"><a class="page-link" href="#">Next</a></li>
  </ul>
</nav>
```

### With `<span>` (fully non-interactive, recommended)

Swapping the `<a>` for a `<span>` removes click functionality and keyboard focus entirely, while retaining the disabled visual style.

```html
<li class="page-item disabled">
  <span class="page-link">Previous</span>
</li>
```

**Active vs. Disabled comparison:**

| State | Class on `<li>` | Recommended element | Additional attribute |
|---|---|---|---|
| Active | `.active` | `<a>` or `<span>` | `aria-current="page"` on `<a>` |
| Disabled | `.disabled` | `<span>` (preferred) or `<a>` | `tabindex="-1"` + `aria-disabled="true"` on `<a>` |

---

## Sizing

Add `.pagination-lg` or `.pagination-sm` to the `.pagination` element for larger or smaller pagination.

### Large

```html
<nav aria-label="...">
  <ul class="pagination pagination-lg">
    <li class="page-item active">
      <a class="page-link" href="#" aria-current="page">1</a>
    </li>
    <li class="page-item"><a class="page-link" href="#">2</a></li>
    <li class="page-item"><a class="page-link" href="#">3</a></li>
  </ul>
</nav>
```

### Small

```html
<nav aria-label="...">
  <ul class="pagination pagination-sm">
    <li class="page-item active">
      <a class="page-link" href="#" aria-current="page">1</a>
    </li>
    <li class="page-item"><a class="page-link" href="#">2</a></li>
    <li class="page-item"><a class="page-link" href="#">3</a></li>
  </ul>
</nav>
```

**Size reference:**

| Size | Class | Padding Y | Padding X | Border radius |
|---|---|---|---|---|
| Small | `.pagination-sm` | `.25rem` | `.5rem` | `var(--bs-border-radius-sm)` |
| Default | *(none)* | `.375rem` | `.75rem` | `var(--bs-border-radius)` |
| Large | `.pagination-lg` | `.75rem` | `1.5rem` | `var(--bs-border-radius-lg)` |

---

## Alignment

Pagination is left-aligned by default. Use flexbox utilities on `.pagination` to change alignment.

### Centered

```html
<nav aria-label="Page navigation example">
  <ul class="pagination justify-content-center">
    <li class="page-item disabled">
      <a class="page-link">Previous</a>
    </li>
    <li class="page-item"><a class="page-link" href="#">1</a></li>
    <li class="page-item"><a class="page-link" href="#">2</a></li>
    <li class="page-item"><a class="page-link" href="#">3</a></li>
    <li class="page-item">
      <a class="page-link" href="#">Next</a>
    </li>
  </ul>
</nav>
```

### Right-aligned

```html
<nav aria-label="Page navigation example">
  <ul class="pagination justify-content-end">
    <li class="page-item disabled">
      <a class="page-link">Previous</a>
    </li>
    <li class="page-item"><a class="page-link" href="#">1</a></li>
    <li class="page-item"><a class="page-link" href="#">2</a></li>
    <li class="page-item"><a class="page-link" href="#">3</a></li>
    <li class="page-item">
      <a class="page-link" href="#">Next</a>
    </li>
  </ul>
</nav>
```

**Alignment options:**

| Alignment | Class on `.pagination` |
|---|---|
| Left (default) | *(none)* |
| Center | `.justify-content-center` |
| Right | `.justify-content-end` |

---

## CSS Variables

Added in **Bootstrap v5.2.0**. Pagination uses local CSS variables on `.pagination` for real-time customization.

Defined in `scss/_pagination.scss`:

```scss
--#{$prefix}pagination-padding-x: #{$pagination-padding-x};
--#{$prefix}pagination-padding-y: #{$pagination-padding-y};
--#{$prefix}pagination-font-size: #{$pagination-font-size};
--#{$prefix}pagination-color: #{$pagination-color};
--#{$prefix}pagination-bg: #{$pagination-bg};
--#{$prefix}pagination-border-width: #{$pagination-border-width};
--#{$prefix}pagination-border-color: #{$pagination-border-color};
--#{$prefix}pagination-border-radius: #{$pagination-border-radius};
--#{$prefix}pagination-hover-color: #{$pagination-hover-color};
--#{$prefix}pagination-hover-bg: #{$pagination-hover-bg};
--#{$prefix}pagination-hover-border-color: #{$pagination-hover-border-color};
--#{$prefix}pagination-focus-color: #{$pagination-focus-color};
--#{$prefix}pagination-focus-bg: #{$pagination-focus-bg};
--#{$prefix}pagination-focus-box-shadow: #{$pagination-focus-box-shadow};
--#{$prefix}pagination-active-color: #{$pagination-active-color};
--#{$prefix}pagination-active-bg: #{$pagination-active-bg};
--#{$prefix}pagination-active-border-color: #{$pagination-active-border-color};
--#{$prefix}pagination-disabled-color: #{$pagination-disabled-color};
--#{$prefix}pagination-disabled-bg: #{$pagination-disabled-bg};
--#{$prefix}pagination-disabled-border-color: #{$pagination-disabled-border-color};
```

### Example: Override via CSS

```css
.pagination {
  --bs-pagination-active-bg: #6f42c1;          /* purple active state */
  --bs-pagination-active-border-color: #6f42c1;
  --bs-pagination-border-radius: 50rem;         /* pill-shaped items */
}
```

---

## Sass Variables

Defined in `scss/_variables.scss`:

```scss
/* Padding per size */
$pagination-padding-y:              .375rem;
$pagination-padding-x:              .75rem;
$pagination-padding-y-sm:           .25rem;
$pagination-padding-x-sm:           .5rem;
$pagination-padding-y-lg:           .75rem;
$pagination-padding-x-lg:           1.5rem;

/* Typography */
$pagination-font-size:              $font-size-base;

/* Default state */
$pagination-color:                  var(--#{$prefix}link-color);
$pagination-bg:                     var(--#{$prefix}body-bg);
$pagination-border-radius:          var(--#{$prefix}border-radius);
$pagination-border-width:           var(--#{$prefix}border-width);
$pagination-margin-start:           calc(-1 * #{$pagination-border-width}); // collapses borders between items
$pagination-border-color:           var(--#{$prefix}border-color);

/* Focus state */
$pagination-focus-color:            var(--#{$prefix}link-hover-color);
$pagination-focus-bg:               var(--#{$prefix}secondary-bg);
$pagination-focus-box-shadow:       $focus-ring-box-shadow;
$pagination-focus-outline:          0;

/* Hover state */
$pagination-hover-color:            var(--#{$prefix}link-hover-color);
$pagination-hover-bg:               var(--#{$prefix}tertiary-bg);
$pagination-hover-border-color:     var(--#{$prefix}border-color);

/* Active state */
$pagination-active-color:           $component-active-color;
$pagination-active-bg:              $component-active-bg;
$pagination-active-border-color:    $component-active-bg;

/* Disabled state */
$pagination-disabled-color:         var(--#{$prefix}secondary-color);
$pagination-disabled-bg:            var(--#{$prefix}secondary-bg);
$pagination-disabled-border-color:  var(--#{$prefix}border-color);

/* Transition */
$pagination-transition:             color .15s ease-in-out,
                                    background-color .15s ease-in-out,
                                    border-color .15s ease-in-out,
                                    box-shadow .15s ease-in-out;

/* Size-specific border radii */
$pagination-border-radius-sm:       var(--#{$prefix}border-radius-sm);
$pagination-border-radius-lg:       var(--#{$prefix}border-radius-lg);
```

**Notable detail:** `$pagination-margin-start` uses a negative value equal to the border width. This collapses adjacent borders between page items so they share a single border line rather than doubling up.

---

## Sass Mixins

The `pagination-size()` mixin is used internally to generate `.pagination-sm` and `.pagination-lg` by overriding the relevant CSS variables.

Defined in `scss/mixins/_pagination.scss`:

```scss
@mixin pagination-size($padding-y, $padding-x, $font-size, $border-radius) {
  --#{$prefix}pagination-padding-x: #{$padding-x};
  --#{$prefix}pagination-padding-y: #{$padding-y};
  @include rfs($font-size, --#{$prefix}pagination-font-size);
  --#{$prefix}pagination-border-radius: #{$border-radius};
}
```

### Example: Create a custom size

```scss
// Custom extra-large pagination
.pagination-xl {
  @include pagination-size(
    $padding-y:     1rem,
    $padding-x:     2rem,
    $font-size:     $font-size-lg * 1.25,
    $border-radius: var(--#{$prefix}border-radius-xl)
  );
}
```

---

## Quick Reference

```html
<!-- Basic pagination -->
<nav aria-label="Page navigation">
  <ul class="pagination">
    <li class="page-item"><a class="page-link" href="#">Previous</a></li>
    <li class="page-item"><a class="page-link" href="#">1</a></li>
    <li class="page-item active">
      <a class="page-link" href="#" aria-current="page">2</a>
    </li>
    <li class="page-item"><a class="page-link" href="#">3</a></li>
    <li class="page-item"><a class="page-link" href="#">Next</a></li>
  </ul>
</nav>

<!-- Icon-based prev/next -->
<li class="page-item">
  <a class="page-link" href="#" aria-label="Previous">
    <span aria-hidden="true">&laquo;</span>
  </a>
</li>

<!-- Active page (interactive) -->
<li class="page-item active">
  <a class="page-link" href="#" aria-current="page">2</a>
</li>

<!-- Active page (non-interactive span) -->
<li class="page-item active">
  <span class="page-link">2</span>
</li>

<!-- Disabled (recommended: use <span>) -->
<li class="page-item disabled">
  <span class="page-link">Previous</span>
</li>

<!-- Disabled (with <a>: add tabindex + aria-disabled) -->
<li class="page-item disabled">
  <a class="page-link" tabindex="-1" aria-disabled="true">Previous</a>
</li>

<!-- Sizing -->
<ul class="pagination pagination-lg">...</ul>
<ul class="pagination pagination-sm">...</ul>

<!-- Alignment -->
<ul class="pagination justify-content-center">...</ul>
<ul class="pagination justify-content-end">...</ul>
```

---