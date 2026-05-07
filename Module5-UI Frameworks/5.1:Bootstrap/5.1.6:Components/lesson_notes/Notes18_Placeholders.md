# Bootstrap Placeholders 

Use loading placeholders (skeleton loaders) for your components or pages to indicate something may still be loading.

## Table of Contents
- [About](#about)
- [Example](#example)
- [How It Works](#how-it-works)
- [Width](#width)
- [Color](#color)
- [Sizing](#sizing)
- [Animation](#animation)
- [Sass Variables](#sass-variables)

---

## About

Placeholders (also known as **skeleton loaders**) visually represent content that is still loading. Key facts:

- Built with **HTML and CSS only** — no JavaScript required to create them.
- **Custom JavaScript is needed** to toggle their visibility (swap between the real content and the placeholder state).
- Appearance, color, and size are all controlled with utility classes.
- Always add `aria-hidden="true"` to placeholder containers so screen readers skip them while content loads.

---

## Example

A side-by-side comparison of a real card component and its placeholder equivalent. The size and proportions are identical — only the content differs.

```html
<!-- Real card -->
<div class="card">
  <img src="..." class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">
      Some quick example text to build on the card title and make up
      the bulk of the card's content.
    </p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>

<!-- Placeholder card (loading state) -->
<div class="card" aria-hidden="true">
  <img src="..." class="card-img-top" alt="...">
  <div class="card-body">

    <!-- Title placeholder -->
    <h5 class="card-title placeholder-glow">
      <span class="placeholder col-6"></span>
    </h5>

    <!-- Body text placeholders — multiple lines at varying widths -->
    <p class="card-text placeholder-glow">
      <span class="placeholder col-7"></span>
      <span class="placeholder col-4"></span>
      <span class="placeholder col-4"></span>
      <span class="placeholder col-6"></span>
      <span class="placeholder col-8"></span>
    </p>

    <!-- Button placeholder — disabled link styled as a button -->
    <a class="btn btn-primary disabled placeholder col-6" aria-disabled="true"></a>

  </div>
</div>
```

**Key pattern notes:**
- `aria-hidden="true"` on the card wrapper hides the entire placeholder from screen readers.
- Multiple `<span>` elements at varying column widths simulate a block of text.
- The button placeholder uses `.disabled` + `aria-disabled="true"` alongside `.placeholder` directly on the `<a>` element.

> **Accessibility note:** `aria-hidden="true"` only hides the element from screen readers. You still need JavaScript to actually swap between the placeholder and real content, and to notify assistive technology users when the content has loaded.

---

## How It Works

Combine `.placeholder` with a **grid column class** (`.col-*`) to create a placeholder block. The column class sets the width.

```html
<!-- Inline text placeholder -->
<p aria-hidden="true">
  <span class="placeholder col-6"></span>
</p>

<!-- Button placeholder -->
<a class="btn btn-primary disabled placeholder col-4" aria-disabled="true"></a>
```

**How height is determined:**
- For regular elements (`<span>`, `<p>`, etc.), the placeholder height is derived from the **font size of the parent element**.
- For `.btn` elements, Bootstrap applies `::before` pseudo-element styles to ensure the correct button height is respected even with empty content.
- Alternatively, add a `&nbsp;` inside the placeholder element to reserve height based on the text line height.

**Two ways to use `.placeholder`:**

| Usage | Example |
|---|---|
| Replace text inside an element | `<span class="placeholder col-6"></span>` |
| As a modifier on an existing component | `<a class="btn btn-primary disabled placeholder col-4">` |

---

## Width

Control placeholder width using any of three approaches:

### Grid column classes (`.col-*`)

```html
<span class="placeholder col-6"></span>   <!-- 50% width -->
<span class="placeholder col-4"></span>   <!-- 33% width -->
<span class="placeholder col-8"></span>   <!-- 66% width -->
```

### Width utilities (`.w-*`)

```html
<span class="placeholder w-75"></span>    <!-- 75% width -->
<span class="placeholder w-50"></span>    <!-- 50% width -->
<span class="placeholder w-25"></span>    <!-- 25% width -->
```

### Inline styles

```html
<span class="placeholder" style="width: 25%;"></span>
<span class="placeholder" style="width: 180px;"></span>
```

**All three in one block:**

```html
<span class="placeholder col-6"></span>
<span class="placeholder w-75"></span>
<span class="placeholder" style="width: 25%;"></span>
```

> Using varying widths across multiple placeholder spans creates a convincing multi-line text simulation.

---

## Color

By default, `.placeholder` uses **`currentColor`** — it inherits the text color of its parent. Override with any `.bg-*` utility class.

```html
<!-- Default color (inherits currentColor) -->
<span class="placeholder col-12"></span>

<!-- Contextual colors -->
<span class="placeholder col-12 bg-primary"></span>
<span class="placeholder col-12 bg-secondary"></span>
<span class="placeholder col-12 bg-success"></span>
<span class="placeholder col-12 bg-danger"></span>
<span class="placeholder col-12 bg-warning"></span>
<span class="placeholder col-12 bg-info"></span>
<span class="placeholder col-12 bg-light"></span>
<span class="placeholder col-12 bg-dark"></span>
```

> Because the default color inherits from `currentColor`, placeholders inside a dark container or dark-themed component will automatically appear in a light color — no extra configuration needed.

---

## Sizing

Placeholder height is based on the **parent element's typography** by default. Use size modifier classes directly on `.placeholder` to override this independently of the parent.

```html
<span class="placeholder col-12 placeholder-lg"></span>   <!-- large -->
<span class="placeholder col-12"></span>                  <!-- default -->
<span class="placeholder col-12 placeholder-sm"></span>   <!-- small -->
<span class="placeholder col-12 placeholder-xs"></span>   <!-- extra small -->
```

**Size modifier reference:**

| Class | Relative size |
|---|---|
| `.placeholder-lg` | Larger than default |
| *(none)* | Default (matches parent font size) |
| `.placeholder-sm` | Smaller than default |
| `.placeholder-xs` | Extra small |

---

## Animation

Add an animation class to the **parent container** (not the `.placeholder` span itself) to convey that content is actively loading.

### Glow animation (`.placeholder-glow`)

Fades the placeholder opacity in and out — a subtle pulsing effect.

```html
<p class="placeholder-glow">
  <span class="placeholder col-12"></span>
</p>
```

### Wave animation (`.placeholder-wave`)

A sweeping wave passes across the placeholder from left to right.

```html
<p class="placeholder-wave">
  <span class="placeholder col-12"></span>
</p>
```

**Animation comparison:**

| Class | Applied to | Effect |
|---|---|---|
| `.placeholder-glow` | Parent element | Pulsing opacity fade |
| `.placeholder-wave` | Parent element | Left-to-right sweeping wave |

**Full animated placeholder card example:**

```html
<div class="card" aria-hidden="true">
  <div class="card-body">
    <h5 class="placeholder-glow">
      <span class="placeholder col-6"></span>
    </h5>
    <p class="placeholder-glow">
      <span class="placeholder col-7"></span>
      <span class="placeholder col-4"></span>
      <span class="placeholder col-5"></span>
    </p>
    <a class="btn btn-primary disabled placeholder col-4" aria-disabled="true"></a>
  </div>
</div>
```

---

## Sass Variables

Defined in `scss/_variables.scss`. These two variables control the opacity range used by the glow and wave animations:

```scss
$placeholder-opacity-max:   .5;
$placeholder-opacity-min:   .2;
```

| Variable | Default | Description |
|---|---|---|
| `$placeholder-opacity-max` | `.5` | Maximum opacity — the "solid" phase of the animation |
| `$placeholder-opacity-min` | `.2` | Minimum opacity — the "faded" phase of the animation |

The placeholder animates between `$placeholder-opacity-max` and `$placeholder-opacity-min`, creating the pulsing or wave visual effect. The larger the difference between the two values, the more dramatic the animation contrast.

### Example: More pronounced animation

```scss
// Higher contrast between animation states
$placeholder-opacity-max: .8;
$placeholder-opacity-min: .1;
```

---

## Quick Reference

```html
<!-- Basic placeholder -->
<span class="placeholder col-6"></span>

<!-- Paragraph simulation (always hide from screen readers) -->
<p aria-hidden="true" class="placeholder-glow">
  <span class="placeholder col-7"></span>
  <span class="placeholder col-4"></span>
  <span class="placeholder col-6"></span>
</p>

<!-- Button placeholder -->
<a class="btn btn-primary disabled placeholder col-4" aria-disabled="true"></a>

<!-- Width variants -->
<span class="placeholder col-4"></span>                   <!-- grid column -->
<span class="placeholder w-75"></span>                    <!-- width utility -->
<span class="placeholder" style="width: 30%;"></span>     <!-- inline style -->

<!-- Color variants -->
<span class="placeholder col-12 bg-primary"></span>
<span class="placeholder col-12 bg-danger"></span>

<!-- Size variants -->
<span class="placeholder col-6 placeholder-lg"></span>
<span class="placeholder col-6"></span>
<span class="placeholder col-6 placeholder-sm"></span>
<span class="placeholder col-6 placeholder-xs"></span>

<!-- Animation variants (apply class to parent, not the span) -->
<p class="placeholder-glow">
  <span class="placeholder col-12"></span>
</p>
<p class="placeholder-wave">
  <span class="placeholder col-12"></span>
</p>

<!-- Full placeholder card -->
<div class="card" aria-hidden="true">
  <div class="card-body">
    <h5 class="placeholder-glow">
      <span class="placeholder col-6"></span>
    </h5>
    <p class="placeholder-glow">
      <span class="placeholder col-7"></span>
      <span class="placeholder col-4"></span>
      <span class="placeholder col-5"></span>
    </p>
    <a class="btn btn-primary disabled placeholder col-4" aria-disabled="true"></a>
  </div>
</div>
```
---