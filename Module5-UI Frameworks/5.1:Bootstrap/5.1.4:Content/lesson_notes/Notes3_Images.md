# Bootstrap Images 

## Table of Contents
1. [Responsive Images](#responsive-images)
2. [Image Thumbnails](#image-thumbnails)
3. [Aligning Images](#aligning-images)
4. [Picture Element](#picture-element)
5. [CSS & Sass Variables](#css--sass-variables)

---

## Responsive Images

Bootstrap makes images responsive using the `.img-fluid` class. This ensures images **never become wider than their parent container** and scale naturally with it.

### What `.img-fluid` does

```css
.img-fluid {
  max-width: 100%;
  height: auto;
}
```

- `max-width: 100%` — prevents the image from overflowing its parent
- `height: auto` — maintains the original aspect ratio as the image scales

### Usage

```html
<img src="photo.jpg" class="img-fluid" alt="Responsive image">
```

> **When to use:** Apply `.img-fluid` to any image inside a responsive container (e.g., grid columns, cards, or fluid layouts) to prevent overflow and maintain aspect ratio across all screen sizes.

---

## Image Thumbnails

Use `.img-thumbnail` to give an image a **rounded 1px border** appearance — useful for galleries, avatars, or any image that needs a framed look.

### Usage

```html
<img src="photo.jpg" class="img-thumbnail" alt="Thumbnail image">
```

### What `.img-thumbnail` applies

- A rounded border (1px solid)
- Padding around the image
- A subtle box shadow
- The body background color as the padding fill

> **Tip:** `.img-thumbnail` can be combined with `.img-fluid` for a responsive thumbnail:

```html
<img src="photo.jpg" class="img-fluid img-thumbnail" alt="Responsive thumbnail">
```

---

## Aligning Images

Bootstrap provides three approaches to align images — **float classes**, **text alignment on a parent**, or **margin utilities** for block-level centering.

### 1. Float Alignment (Left & Right)

Use helper float classes to align images within surrounding content (e.g., text wrapping around an image).

```html
<!-- Float left -->
<img src="photo.jpg" class="rounded float-start" alt="Left-aligned image">

<!-- Float right -->
<img src="photo.jpg" class="rounded float-end" alt="Right-aligned image">
```

| Class | Effect |
|---|---|
| `.float-start` | Floats the image to the left |
| `.float-end` | Floats the image to the right |

> **Note:** When using floats, add a clearfix to the parent container if needed (`.clearfix`).

### 2. Center a Block-Level Image with Margin Utility

`<img>` is an inline element by default. To center it, convert it to a block and use `.mx-auto`.

```html
<img src="photo.jpg" class="rounded mx-auto d-block" alt="Centered image">
```

| Class | Purpose |
|---|---|
| `.d-block` | Changes `display` to `block` |
| `.mx-auto` | Sets `margin-left: auto` and `margin-right: auto` for horizontal centering |

### 3. Center Using Text Alignment on Parent

Alternatively, wrap the image in a container and apply `.text-center` — this works because `<img>` is an inline element.

```html
<div class="text-center">
  <img src="photo.jpg" class="rounded" alt="Centered image">
</div>
```

### Alignment Methods — Quick Comparison

| Method | Classes Used | Use Case |
|---|---|---|
| Float left | `.float-start` | Text wraps to the right of image |
| Float right | `.float-end` | Text wraps to the left of image |
| Block center | `.mx-auto .d-block` | Standalone centered image, no wrapper needed |
| Parent center | `.text-center` on parent `<div>` | Centering inside a container |

---

## Picture Element

When using the HTML `<picture>` element to serve different image formats or sizes via multiple `<source>` elements, always apply Bootstrap's image classes to the **`<img>` tag**, not the `<picture>` tag.

### Correct Usage

```html
<picture>
  <source srcset="image.svg" type="image/svg+xml">
  <source srcset="image.webp" type="image/webp">
  <img src="image.jpg" class="img-fluid img-thumbnail" alt="Responsive picture">
</picture>
```

### Why this matters

The `<picture>` element is a wrapper — the browser selects the appropriate `<source>` and renders the `<img>`. Bootstrap's image classes must target the rendered `<img>` element to take effect.

> **Wrong** — classes on `<picture>`:
> ```html
> <picture class="img-fluid">   <!-- ❌ Has no effect -->
>   <source srcset="image.webp" type="image/webp">
>   <img src="image.jpg" alt="...">
> </picture>
> ```

> **Correct** — classes on `<img>`:
> ```html
> <picture>
>   <source srcset="image.webp" type="image/webp">
>   <img src="image.jpg" class="img-fluid" alt="...">   <!-- ✅ Correct -->
> </picture>
> ```

### Common `<picture>` Use Cases

```html
<!-- Serve different formats (WebP with JPEG fallback) -->
<picture>
  <source srcset="image.webp" type="image/webp">
  <img src="image.jpg" class="img-fluid" alt="Image with format fallback">
</picture>

<!-- Serve different sizes based on viewport (art direction) -->
<picture>
  <source media="(min-width: 768px)" srcset="image-large.jpg">
  <source media="(min-width: 480px)" srcset="image-medium.jpg">
  <img src="image-small.jpg" class="img-fluid" alt="Art directed image">
</picture>

<!-- SVG with raster fallback + thumbnail styling -->
<picture>
  <source srcset="logo.svg" type="image/svg+xml">
  <img src="logo.png" class="img-fluid img-thumbnail" alt="Logo">
</picture>
```

---

## CSS & Sass Variables

Variables are available to customize the `.img-thumbnail` appearance. All values reference Bootstrap's global CSS variables for consistency with theming.

### Sass Variables (`scss/_variables.scss`)

```scss
$thumbnail-padding:       .25rem;                              // Inner padding around the image
$thumbnail-bg:            var(--#{$prefix}body-bg);            // Background color (matches body bg)
$thumbnail-border-width:  var(--#{$prefix}border-width);       // Border thickness (typically 1px)
$thumbnail-border-color:  var(--#{$prefix}border-color);       // Border color
$thumbnail-border-radius: var(--#{$prefix}border-radius);      // Corner rounding
$thumbnail-box-shadow:    var(--#{$prefix}box-shadow-sm);      // Subtle shadow effect
```

### Variable Reference

| Variable | Default | Controls |
|---|---|---|
| `$thumbnail-padding` | `.25rem` | Space between the image and its border |
| `$thumbnail-bg` | body background | Fill color behind the padding area |
| `$thumbnail-border-width` | `--bs-border-width` | Thickness of the border (usually 1px) |
| `$thumbnail-border-color` | `--bs-border-color` | Color of the border |
| `$thumbnail-border-radius` | `--bs-border-radius` | Rounded corner radius |
| `$thumbnail-box-shadow` | `--bs-box-shadow-sm` | Small shadow for depth |

### Customizing Thumbnails

Override these Sass variables before importing Bootstrap to customize globally:

```scss
// Custom thumbnail styles
$thumbnail-padding:       .5rem;           // More padding
$thumbnail-border-color:  #0d6efd;         // Blue border
$thumbnail-border-radius: .75rem;          // More rounded corners
$thumbnail-box-shadow:    none;            // Remove shadow

@import "bootstrap";
```

---

## All Image Classes — Quick Reference

| Class | Effect | Use With |
|---|---|---|
| `.img-fluid` | `max-width: 100%; height: auto` | `<img>` or `<picture> > img` |
| `.img-thumbnail` | Rounded border, padding, shadow | `<img>` or `<picture> > img` |
| `.float-start` | Float left | `<img>` |
| `.float-end` | Float right | `<img>` |
| `.d-block` | `display: block` | `<img>` (required before `.mx-auto`) |
| `.mx-auto` | Center block-level image | `<img class="d-block">` |
| `.rounded` | Applies border-radius | `<img>` |

---

## Common Patterns

### Responsive image in a grid column

```html
<div class="container">
  <div class="row">
    <div class="col-md-6">
      <img src="photo.jpg" class="img-fluid" alt="Responsive in grid">
    </div>
  </div>
</div>
```

### Centered thumbnail

```html
<img src="photo.jpg" class="img-thumbnail mx-auto d-block" alt="Centered thumbnail">
```

### Responsive image gallery

```html
<div class="row g-2">
  <div class="col-6 col-md-4">
    <img src="photo1.jpg" class="img-fluid img-thumbnail" alt="Gallery image 1">
  </div>
  <div class="col-6 col-md-4">
    <img src="photo2.jpg" class="img-fluid img-thumbnail" alt="Gallery image 2">
  </div>
  <div class="col-6 col-md-4">
    <img src="photo3.jpg" class="img-fluid img-thumbnail" alt="Gallery image 3">
  </div>
</div>
```

### Float image with text wrap

```html
<div class="clearfix">
  <img src="photo.jpg" class="img-fluid rounded float-start me-3" alt="Float left image">
  <p>This text wraps around the floated image. Add as much content here as needed
  and it will flow naturally around the image on the left side...</p>
</div>
```

---
