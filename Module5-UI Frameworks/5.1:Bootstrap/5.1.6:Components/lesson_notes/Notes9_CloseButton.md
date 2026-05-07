# Bootstrap Close Button

A generic close button for dismissing content like modals and alerts.

## Table of Contents
- [Overview](#overview)
- [Example](#example)
- [Disabled State](#disabled-state)
- [Dark Variant](#dark-variant)
- [CSS Variables](#css-variables)
- [Sass Variables](#sass-variables)

---

## Overview

The close button is a simple, highly customizable dismiss control built around the `.btn-close` class. It is used across multiple Bootstrap components — including **modals**, **alerts**, and **toasts** — to provide a consistent "close" interaction.

Key points:
- Default styling is minimal but **highly customizable** via Sass variables or CSS variables.
- The background icon is rendered as an **inline SVG** set through a `background-image`.
- Always include `aria-label="Close"` for **screen reader accessibility**, since the button has no visible text.

---

## Example

The most basic usage — a single close button rendered with the `.btn-close` class.

```html
<button type="button" class="btn-close" aria-label="Close"></button>
```

**What to remember:**
- Use `type="button"` to prevent accidental form submission.
- The `aria-label="Close"` attribute is **required** for accessibility — the button contains no visible text, so screen readers rely on it.
- The ✕ icon is injected entirely via CSS `background-image` (an inline SVG), meaning no extra markup or icon library is needed.

---

## Disabled State

Add the `disabled` attribute to render a non-interactive close button.

```html
<button type="button" class="btn-close" disabled aria-label="Close"></button>
```

**What changes visually and behaviorally:**
- **Opacity** is reduced (controlled by `$btn-close-disabled-opacity`, default `0.25`).
- **`pointer-events: none`** is applied — hover and click events are blocked.
- **`user-select: none`** is applied — text selection is disabled.

---

## Dark Variant

> ⚠️ **`.btn-close-white` was deprecated in Bootstrap v5.3.0.** Use `data-bs-theme="dark"` instead.

To render the close button on a dark background, apply `data-bs-theme="dark"` to the button itself or any parent element. Bootstrap uses a CSS `filter` property to invert the SVG background image without overriding its value directly.

### Recommended approach (v5.3.0+)

```html
<div data-bs-theme="dark">
  <button type="button" class="btn-close" aria-label="Close"></button>
  <button type="button" class="btn-close" disabled aria-label="Close"></button>
</div>
```

### Scoping options for `data-bs-theme="dark"`

| Applied to | Effect |
|---|---|
| The `<button>` itself | Inverts only that button |
| A parent wrapper `<div>` | Inverts all close buttons inside |
| The root `<html>` element | Applies dark theme site-wide |

### Old approach (deprecated, avoid)

```html
<!-- ❌ Deprecated — do not use -->
<button type="button" class="btn-close btn-close-white" aria-label="Close"></button>
```

---

## CSS Variables

Added in **Bootstrap v5.3.0** as part of Bootstrap's evolving CSS-variable-first approach.

The `.btn-close` element exposes local CSS variables that allow **real-time customization** without recompiling Sass. These variables are set from Sass values by default, so Sass customization remains fully supported alongside them.

Defined in `scss/_close.scss`:

```scss
--#{$prefix}btn-close-color: #{$btn-close-color};
--#{$prefix}btn-close-bg: #{escape-svg($btn-close-bg)};
--#{$prefix}btn-close-opacity: #{$btn-close-opacity};
--#{$prefix}btn-close-hover-opacity: #{$btn-close-hover-opacity};
--#{$prefix}btn-close-focus-shadow: #{$btn-close-focus-shadow};
--#{$prefix}btn-close-focus-opacity: #{$btn-close-focus-opacity};
--#{$prefix}btn-close-disabled-opacity: #{$btn-close-disabled-opacity};
```

With the default Bootstrap prefix (`bs`), these resolve to:

```css
--bs-btn-close-color
--bs-btn-close-bg
--bs-btn-close-opacity
--bs-btn-close-hover-opacity
--bs-btn-close-focus-shadow
--bs-btn-close-focus-opacity
--bs-btn-close-disabled-opacity
```

### Example: Override via CSS custom property

```css
.btn-close {
  --bs-btn-close-opacity: 0.8;
  --bs-btn-close-hover-opacity: 1;
}
```

---

## Sass Variables

Defined in `scss/_variables.scss`. Customize these before compiling Bootstrap to change the close button globally.

```scss
$btn-close-width:            1em;
$btn-close-height:           $btn-close-width;
$btn-close-padding-x:        .25em;
$btn-close-padding-y:        $btn-close-padding-x;
$btn-close-color:            $black;
$btn-close-bg:               url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='#{$btn-close-color}'><path d='M.293.293a1 1 0 0 1 1.414 0L8 6.586 14.293.293a1 1 0 1 1 1.414 1.414L9.414 8l6.293 6.293a1 1 0 0 1-1.414 1.414L8 9.414l-6.293 6.293a1 1 0 0 1-1.414-1.414L6.586 8 .293 1.707a1 1 0 0 1 0-1.414'/></svg>");
$btn-close-focus-shadow:     $focus-ring-box-shadow;
$btn-close-opacity:          .5;
$btn-close-hover-opacity:    .75;
$btn-close-focus-opacity:    1;
$btn-close-disabled-opacity: .25;
$btn-close-filter:           null;
$btn-close-white-filter:     invert(1) grayscale(100%) brightness(200%); // Deprecated in v5.3.4
```

### Variable Reference Table

| Variable | Default | Description |
|---|---|---|
| `$btn-close-width` | `1em` | Width of the button |
| `$btn-close-height` | `$btn-close-width` | Height (matches width by default) |
| `$btn-close-padding-x` | `.25em` | Horizontal padding |
| `$btn-close-padding-y` | `$btn-close-padding-x` | Vertical padding (matches horizontal) |
| `$btn-close-color` | `$black` | Icon color — injected into the SVG fill |
| `$btn-close-bg` | Inline SVG ✕ icon | The background image (SVG data URI) |
| `$btn-close-focus-shadow` | `$focus-ring-box-shadow` | Box shadow on focus |
| `$btn-close-opacity` | `.5` | Default icon opacity |
| `$btn-close-hover-opacity` | `.75` | Opacity on hover |
| `$btn-close-focus-opacity` | `1` | Opacity when focused |
| `$btn-close-disabled-opacity` | `.25` | Opacity when disabled |
| `$btn-close-filter` | `null` | Optional CSS filter override |
| `$btn-close-white-filter` | `invert(1) grayscale(100%) brightness(200%)` | ⚠️ Deprecated in v5.3.4 |

### Example: Custom icon color via Sass

```scss
// Change close button icon to red before compiling
$btn-close-color: #dc3545;
```

Since `$btn-close-color` is interpolated directly into the SVG data URI, changing it automatically updates the icon fill color — no separate SVG editing needed.

---

## Quick Reference

```html
<!-- Standard close button -->
<button type="button" class="btn-close" aria-label="Close"></button>

<!-- Disabled close button -->
<button type="button" class="btn-close" disabled aria-label="Close"></button>

<!-- Dark variant (wrap in dark theme) -->
<div data-bs-theme="dark">
  <button type="button" class="btn-close" aria-label="Close"></button>
  <button type="button" class="btn-close" disabled aria-label="Close"></button>
</div>
```

---