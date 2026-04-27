# Bootstrap Figures 

## Table of Contents
1. [Overview](#overview)
2. [Basic Figure](#basic-figure)
3. [Responsive Images in Figures](#responsive-images-in-figures)
4. [Caption Alignment](#caption-alignment)
5. [CSS & Sass Variables](#css--sass-variables)
6. [All Figure Classes — Quick Reference](#all-figure-classes--quick-reference)
7. [Common Patterns](#common-patterns)

---

## Overview

Use a `<figure>` element whenever you need to display a piece of content — typically an image — with an optional caption. Bootstrap provides three dedicated classes to style figures consistently:

| Class | Applied To | Purpose |
|---|---|---|
| `.figure` | `<figure>` | Baseline wrapper styles |
| `.figure-img` | `<img>` | Styles the image inside the figure |
| `.figure-caption` | `<figcaption>` | Styles the caption text |

> **Note:** Images inside figures have **no explicit size** set by Bootstrap. Always add `.img-fluid` to make the image responsive (scales with its parent container).

---

## Basic Figure

Wrap an `<img>` and `<figcaption>` inside a `<figure>` element and apply the corresponding Bootstrap classes.

```html
<figure class="figure">
  <img src="photo.jpg" class="figure-img img-fluid rounded" alt="A descriptive alt text">
  <figcaption class="figure-caption">A caption for the above image.</figcaption>
</figure>
```

### Class Breakdown

- **`.figure`** — Applied to `<figure>`. Provides baseline display and spacing styles for the wrapper.
- **`.figure-img`** — Applied to `<img>`. Adds a small bottom margin to create space between the image and caption.
- **`.img-fluid`** — Applied to `<img>`. Adds `max-width: 100%; height: auto;` to keep the image responsive.
- **`.rounded`** — Optional. Adds border-radius for rounded corners on the image.
- **`.figure-caption`** — Applied to `<figcaption>`. Reduces font size and applies a muted secondary color.

---

## Responsive Images in Figures

Since Bootstrap does not set an explicit size on figure images, `.img-fluid` is essential to prevent the image from overflowing its container.

```html
<!-- Correct: responsive figure image -->
<figure class="figure">
  <img src="photo.jpg" class="figure-img img-fluid" alt="Responsive figure image">
  <figcaption class="figure-caption">This image scales with its container.</figcaption>
</figure>

<!-- Without .img-fluid — image may overflow on small screens -->
<figure class="figure">
  <img src="photo.jpg" class="figure-img" alt="Non-responsive figure image">
  <figcaption class="figure-caption">This image has no responsive sizing.</figcaption>
</figure>
```

---

## Caption Alignment

Caption alignment is controlled using Bootstrap's **text utility classes** applied directly to the `<figcaption>` element.

### Left-Aligned (default)

```html
<figure class="figure">
  <img src="photo.jpg" class="figure-img img-fluid rounded" alt="...">
  <figcaption class="figure-caption">Left-aligned caption (default).</figcaption>
</figure>
```

### Center-Aligned

```html
<figure class="figure">
  <img src="photo.jpg" class="figure-img img-fluid rounded" alt="...">
  <figcaption class="figure-caption text-center">Center-aligned caption.</figcaption>
</figure>
```

### Right-Aligned

```html
<figure class="figure">
  <img src="photo.jpg" class="figure-img img-fluid rounded" alt="...">
  <figcaption class="figure-caption text-end">Right-aligned caption.</figcaption>
</figure>
```

### Caption Alignment — Quick Reference

| Class on `<figcaption>` | Alignment |
|---|---|
| *(none)* | Left (default) |
| `.text-start` | Left (explicit) |
| `.text-center` | Center |
| `.text-end` | Right |

---

## CSS & Sass Variables

Bootstrap exposes two Sass variables for customizing figure captions (`scss/_variables.scss`):

```scss
$figure-caption-font-size: $small-font-size;                    // .875em
$figure-caption-color:     var(--#{$prefix}secondary-color);    // Muted secondary color
```

### Variable Reference

| Variable | Default | Controls |
|---|---|---|
| `$figure-caption-font-size` | `$small-font-size` (`.875em`) | Font size of the `<figcaption>` text |
| `$figure-caption-color` | `--bs-secondary-color` | Text color of the `<figcaption>` (muted/secondary) |

### Customizing via Sass

Override these variables before importing Bootstrap to change caption styles globally:

```scss
// Custom figure caption styles
$figure-caption-font-size: .8rem;        // Slightly smaller caption
$figure-caption-color:     #6c757d;      // Custom muted gray

@import "bootstrap";
```

### Customizing via CSS Variables

You can also override the secondary color CSS variable directly for one-off changes:

```html
<figcaption class="figure-caption" style="color: #0d6efd;">
  Caption with custom blue color.
</figcaption>
```

---

## All Figure Classes — Quick Reference

| Class | Element | Description |
|---|---|---|
| `.figure` | `<figure>` | Baseline wrapper — sets `display: inline-flex` and block spacing |
| `.figure-img` | `<img>` | Adds `margin-bottom: 0.5rem` to space image from caption |
| `.figure-caption` | `<figcaption>` | Reduces font size to `.875em` and applies muted secondary color |
| `.img-fluid` | `<img>` | Makes the image responsive (`max-width: 100%; height: auto`) |
| `.rounded` | `<img>` | Adds default border-radius to the image (optional) |
| `.text-start` | `<figcaption>` | Aligns caption to the left |
| `.text-center` | `<figcaption>` | Aligns caption to the center |
| `.text-end` | `<figcaption>` | Aligns caption to the right |

---

## Common Patterns

### Standard Responsive Figure

```html
<figure class="figure">
  <img src="photo.jpg" class="figure-img img-fluid rounded" alt="A scenic mountain view">
  <figcaption class="figure-caption">A scenic mountain view from the summit.</figcaption>
</figure>
```

### Right-Aligned Caption

```html
<figure class="figure">
  <img src="photo.jpg" class="figure-img img-fluid rounded" alt="...">
  <figcaption class="figure-caption text-end">Photo credit: Jane Doe</figcaption>
</figure>
```

### Centered Figure with Centered Caption

```html
<figure class="figure d-block text-center">
  <img src="photo.jpg" class="figure-img img-fluid rounded" alt="...">
  <figcaption class="figure-caption text-center">A centered figure with a centered caption.</figcaption>
</figure>
```

### Figure Inside a Grid Column

```html
<div class="row">
  <div class="col-md-6">
    <figure class="figure">
      <img src="photo1.jpg" class="figure-img img-fluid rounded" alt="First image">
      <figcaption class="figure-caption">Caption for the first image.</figcaption>
    </figure>
  </div>
  <div class="col-md-6">
    <figure class="figure">
      <img src="photo2.jpg" class="figure-img img-fluid rounded" alt="Second image">
      <figcaption class="figure-caption">Caption for the second image.</figcaption>
    </figure>
  </div>
</div>
```

### Figure with `<picture>` Element

When using `<picture>` for multiple source formats, apply `.figure-img` and `.img-fluid` to the `<img>`, not the `<picture>` tag.

```html
<figure class="figure">
  <picture>
    <source srcset="photo.webp" type="image/webp">
    <img src="photo.jpg" class="figure-img img-fluid rounded" alt="...">
  </picture>
  <figcaption class="figure-caption">Caption for a picture element figure.</figcaption>
</figure>
```

### Figure with Dark Caption Color Override

```html
<figure class="figure">
  <img src="photo.jpg" class="figure-img img-fluid rounded" alt="...">
  <figcaption class="figure-caption text-body">
    Caption using the primary body color instead of the muted default.
  </figcaption>
</figure>
```

---
