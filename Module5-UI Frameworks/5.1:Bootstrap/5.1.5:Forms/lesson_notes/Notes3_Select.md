# Bootstrap Select

> Detailed notes on customizing native `<select>` elements with Bootstrap's custom CSS.

---

## Table of Contents

1. [Default](#1-default)
2. [Sizing](#2-sizing)
3. [Disabled](#3-disabled)
4. [CSS & Sass Variables](#4-css--sass-variables)
5. [Quick Reference Cheat Sheet](#5-quick-reference-cheat-sheet)

---

## 1. Default

Custom `<select>` menus need only a single class — `.form-select` — to trigger Bootstrap's custom styles.

> **Note:** Custom styles are limited to the `<select>`'s **initial appearance** only. The `<option>` elements inside cannot be styled due to browser limitations.

```html
<select class="form-select" aria-label="Default select example">
  <option selected>Open this select menu</option>
  <option value="1">One</option>
  <option value="2">Two</option>
  <option value="3">Three</option>
</select>
```

**What `.form-select` provides:**
- Custom dropdown arrow (SVG chevron icon via `background-image`)
- Consistent padding, border, border-radius, and font styling
- Smooth focus ring on interaction
- Adapts to Bootstrap's color modes (light/dark)

---

## 2. Sizing

### 2.1 Height Sizing — Large and Small

Match the size of text inputs using `.form-select-lg` or `.form-select-sm` alongside `.form-select`.

| Class | Description |
|---|---|
| `.form-select-lg` | Large select — more padding, larger font |
| `.form-select` | Default size |
| `.form-select-sm` | Small select — less padding, smaller font |

```html
<!-- Large -->
<select class="form-select form-select-lg mb-3" aria-label="Large select example">
  <option selected>Open this select menu</option>
  <option value="1">One</option>
  <option value="2">Two</option>
  <option value="3">Three</option>
</select>

<!-- Small -->
<select class="form-select form-select-sm" aria-label="Small select example">
  <option selected>Open this select menu</option>
  <option value="1">One</option>
  <option value="2">Two</option>
  <option value="3">Three</option>
</select>
```

### 2.2 Multiple Attribute

The `multiple` attribute is fully supported, allowing users to select more than one option (typically shown as a list box).

```html
<select class="form-select" multiple aria-label="Multiple select example">
  <option selected>Open this select menu</option>
  <option value="1">One</option>
  <option value="2">Two</option>
  <option value="3">Three</option>
</select>
```

### 2.3 Size Attribute

The `size` attribute controls how many options are visible at once without scrolling.

```html
<!-- Shows 3 options at a time -->
<select class="form-select" size="3" aria-label="Size 3 select example">
  <option selected>Open this select menu</option>
  <option value="1">One</option>
  <option value="2">Two</option>
  <option value="3">Three</option>
</select>
```

**`multiple` vs `size` — key difference:**

| Attribute | Effect |
|---|---|
| `multiple` | Allows multi-selection; displays as a list box |
| `size="n"` | Shows `n` options visible at once; single selection by default |
| `multiple` + `size="n"` | Multi-selection list box with `n` visible rows |

---

## 3. Disabled

Add the `disabled` boolean attribute to give the select a **grayed-out appearance** and remove pointer events.

```html
<select class="form-select" aria-label="Disabled select example" disabled>
  <option selected>Open this select menu</option>
  <option value="1">One</option>
  <option value="2">Two</option>
  <option value="3">Three</option>
</select>
```

**What `disabled` does:**
- Applies a muted/grayed background (`$form-select-disabled-bg`)
- Removes pointer events — no click or hover interaction
- Prevents focus via keyboard or mouse
- Value is **not submitted** with the form

> To disable a select as part of a larger group, wrap the form in `<fieldset disabled>` — see the Bootstrap Forms Overview notes.

---

## 4. CSS & Sass Variables

All `$form-select-*` variables are defined in `scss/_variables.scss`. Most inherit directly from `$input-*` variables for visual consistency with text inputs.

### 4.1 Full Variable Reference

```scss
// ── Padding & Font ─────────────────────────────────────────────────────────
$form-select-padding-y:           $input-padding-y;
$form-select-padding-x:           $input-padding-x;
$form-select-font-family:         $input-font-family;
$form-select-font-size:           $input-font-size;
$form-select-font-weight:         $input-font-weight;
$form-select-line-height:         $input-line-height;

// Extra right padding to make room for the dropdown arrow background-image
$form-select-indicator-padding:   $form-select-padding-x * 3;

// ── Colors ──────────────────────────────────────────────────────────────────
$form-select-color:                $input-color;
$form-select-bg:                   $input-bg;
$form-select-disabled-color:       null;
$form-select-disabled-bg:          $input-disabled-bg;
$form-select-disabled-border-color: $input-disabled-border-color;

// ── Dropdown Arrow (SVG background-image) ───────────────────────────────────
$form-select-bg-position:          right $form-select-padding-x center;
$form-select-bg-size:              16px 12px; // Fixed px — image dimensions
$form-select-indicator-color:      $gray-800;
$form-select-indicator:            url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'><path fill='none' stroke='#{$form-select-indicator-color}' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='m2 5 6 6 6-6'/></svg>");

// ── Validation Feedback Icon ─────────────────────────────────────────────────
$form-select-feedback-icon-padding-end: $form-select-padding-x * 2.5 + $form-select-indicator-padding;
$form-select-feedback-icon-position:    center right $form-select-indicator-padding;
$form-select-feedback-icon-size:        $input-height-inner-half $input-height-inner-half;

// ── Border ──────────────────────────────────────────────────────────────────
$form-select-border-width:         $input-border-width;
$form-select-border-color:         $input-border-color;
$form-select-border-radius:        $input-border-radius;
$form-select-box-shadow:           var(--#{$prefix}box-shadow-inset);

// ── Focus State ─────────────────────────────────────────────────────────────
$form-select-focus-border-color:   $input-focus-border-color;
$form-select-focus-width:          $input-focus-width;
$form-select-focus-box-shadow:     0 0 0 $form-select-focus-width $input-btn-focus-color;

// ── Small Size ──────────────────────────────────────────────────────────────
$form-select-padding-y-sm:         $input-padding-y-sm;
$form-select-padding-x-sm:         $input-padding-x-sm;
$form-select-font-size-sm:         $input-font-size-sm;
$form-select-border-radius-sm:     $input-border-radius-sm;

// ── Large Size ──────────────────────────────────────────────────────────────
$form-select-padding-y-lg:         $input-padding-y-lg;
$form-select-padding-x-lg:         $input-padding-x-lg;
$form-select-font-size-lg:         $input-font-size-lg;
$form-select-border-radius-lg:     $input-border-radius-lg;

// ── Transition ──────────────────────────────────────────────────────────────
$form-select-transition:           $input-transition;
```

### 4.2 Variable Groups at a Glance

| Variable Group | Controls |
|---|---|
| `$form-select-padding-*` / `$form-select-font-*` | Spacing and typography |
| `$form-select-indicator-*` | The custom SVG dropdown arrow |
| `$form-select-color` / `$form-select-bg` | Text and background colors |
| `$form-select-disabled-*` | Appearance when `disabled` |
| `$form-select-border-*` | Border width, color, radius, shadow |
| `$form-select-focus-*` | Focus ring color, width, box-shadow |
| `$form-select-*-sm` / `$form-select-*-lg` | Small and large size variants |
| `$form-select-feedback-icon-*` | Validation icon positioning |
| `$form-select-transition` | Smooth border/shadow transitions |

### 4.3 How the Custom Arrow Works

Bootstrap replaces the browser's native dropdown arrow with an inline SVG via `background-image`. The key variables involved are:

```scss
// The SVG chevron icon
$form-select-indicator-color: $gray-800;
$form-select-indicator: url("data:image/svg+xml,...");

// Positioning — placed at the right edge
$form-select-bg-position: right $form-select-padding-x center;
$form-select-bg-size:     16px 12px;

// Extra padding on the right to prevent text overlapping the arrow
$form-select-indicator-padding: $form-select-padding-x * 3;
```

### 4.4 Customization Example

Override variables before importing Bootstrap:

```scss
// _custom.scss

// Increase padding for a taller select
$form-select-padding-y: .6rem;
$form-select-padding-x: 1rem;

// Custom border color and radius
$form-select-border-color:  #adb5bd;
$form-select-border-radius: .5rem;

// Custom focus ring color
$form-select-focus-border-color: #86b7fe;

// Change the dropdown arrow color to a brand color
$form-select-indicator-color: #0d6efd;

// Then import Bootstrap
@import "bootstrap";
```

---

## 5. Quick Reference Cheat Sheet

```html
<!-- Default -->
<select class="form-select" aria-label="...">
  <option selected>Choose...</option>
  <option value="1">One</option>
  <option value="2">Two</option>
</select>

<!-- Large -->
<select class="form-select form-select-lg" aria-label="...">
  <option selected>Choose...</option>
  <option value="1">One</option>
</select>

<!-- Small -->
<select class="form-select form-select-sm" aria-label="...">
  <option selected>Choose...</option>
  <option value="1">One</option>
</select>

<!-- Multiple selection -->
<select class="form-select" multiple aria-label="...">
  <option value="1">One</option>
  <option value="2">Two</option>
  <option value="3">Three</option>
</select>

<!-- Fixed visible rows (size attribute) -->
<select class="form-select" size="3" aria-label="...">
  <option value="1">One</option>
  <option value="2">Two</option>
  <option value="3">Three</option>
</select>

<!-- Disabled -->
<select class="form-select" disabled aria-label="...">
  <option selected>Cannot select</option>
</select>

<!-- Multiple + Size + Disabled -->
<select class="form-select" multiple size="4" disabled aria-label="...">
  <option value="1">One</option>
  <option value="2">Two</option>
  <option value="3">Three</option>
  <option value="4">Four</option>
</select>
```

---
