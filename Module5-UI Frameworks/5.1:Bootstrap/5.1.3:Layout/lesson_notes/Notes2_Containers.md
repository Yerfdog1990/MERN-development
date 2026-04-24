# Bootstrap — Containers

> Fundamental building blocks that contain, pad, and align content within a given device or viewport.

---

## How They Work

Containers are the **most basic layout element** in Bootstrap and are required when using the default grid system. They are used to contain, pad, and (sometimes) center the content within them.

- Containers can be nested, but most layouts do not require a nested container.
- Bootstrap provides **three types** of containers:

| Class | Behaviour |
|-------|-----------|
| `.container` | Sets a `max-width` at each responsive breakpoint |
| `.container-{breakpoint}` | `width: 100%` until the specified breakpoint, then applies `max-width` |
| `.container-fluid` | `width: 100%` at all breakpoints |

---

## Container max-width Comparison Table

How each container's `max-width` behaves across every breakpoint:

| Class | Extra small `<576px` | Small `≥576px` | Medium `≥768px` | Large `≥992px` | X-Large `≥1200px` | XX-Large `≥1400px` |
|---|---|---|---|---|---|---|
| `.container` | 100% | 540px | 720px | 960px | 1140px | 1320px |
| `.container-sm` | 100% | 540px | 720px | 960px | 1140px | 1320px |
| `.container-md` | 100% | 100% | 720px | 960px | 1140px | 1320px |
| `.container-lg` | 100% | 100% | 100% | 960px | 1140px | 1320px |
| `.container-xl` | 100% | 100% | 100% | 100% | 1140px | 1320px |
| `.container-xxl` | 100% | 100% | 100% | 100% | 100% | 1320px |
| `.container-fluid` | 100% | 100% | 100% | 100% | 100% | 100% |

---

## Default Container

`.container` is a **responsive, fixed-width** container. Its `max-width` changes at each breakpoint automatically.

```html
<div class="container">
  <!-- Content here -->
</div>
```

> Use this as the standard container for most page layouts. It keeps content from stretching too wide on large screens.

---

## Responsive Containers

Responsive containers are **100% wide** until a specified breakpoint is reached, after which `max-width` values apply for all higher breakpoints.

```html
<div class="container-sm">100% wide until small breakpoint</div>
<div class="container-md">100% wide until medium breakpoint</div>
<div class="container-lg">100% wide until large breakpoint</div>
<div class="container-xl">100% wide until extra large breakpoint</div>
<div class="container-xxl">100% wide until extra extra large breakpoint</div>
```

**How each one behaves:**

- `.container-sm` — 100% wide until `sm` (≥576px), then scales with `md`, `lg`, `xl`, `xxl`
- `.container-md` — 100% wide until `md` (≥768px), then scales with `lg`, `xl`, `xxl`
- `.container-lg` — 100% wide until `lg` (≥992px), then scales with `xl`, `xxl`
- `.container-xl` — 100% wide until `xl` (≥1200px), then scales with `xxl`
- `.container-xxl` — 100% wide until `xxl` (≥1400px), then applies `max-width: 1320px`

---

## Fluid Containers

`.container-fluid` spans the **entire width of the viewport** at all breakpoints — no `max-width` is ever applied.

```html
<div class="container-fluid">
  ...
</div>
```

> Use this for full-bleed layouts like hero sections, headers, or any content that should always stretch edge to edge.

---

## CSS

### Sass variables

Bootstrap generates all predefined container classes from a Sass map in `_variables.scss`. You can customise the `max-width` values for each breakpoint by editing this map:

```scss
// scss/_variables.scss

$container-max-widths: (
  sm: 540px,
  md: 720px,
  lg: 960px,
  xl: 1140px,
  xxl: 1320px
);
```

> For more details on modifying Sass maps and variables, refer to the Sass section of the Grid documentation.

---

### Sass mixins

You can also build **custom containers** using Bootstrap's `make-container()` mixin, rather than relying on the predefined classes.

```scss
// Source mixin
@mixin make-container($padding-x: $container-padding-x) {
  width: 100%;
  padding-right: $padding-x;
  padding-left: $padding-x;
  margin-right: auto;
  margin-left: auto;
}

// Usage
.custom-container {
  @include make-container();
}
```

**What the mixin does:**

- Sets `width: 100%` so it fills its parent
- Adds left and right padding using `$container-padding-x`
- Centers the container with `margin-right: auto` and `margin-left: auto`

---

## Quick Reference Summary

| Container | Full width at | Applies max-width from |
|-----------|--------------|----------------------|
| `.container` | xs only | sm and above |
| `.container-sm` | xs only | sm and above |
| `.container-md` | xs–sm | md and above |
| `.container-lg` | xs–md | lg and above |
| `.container-xl` | xs–lg | xl and above |
| `.container-xxl` | xs–xl | xxl only |
| `.container-fluid` | always | never |

---