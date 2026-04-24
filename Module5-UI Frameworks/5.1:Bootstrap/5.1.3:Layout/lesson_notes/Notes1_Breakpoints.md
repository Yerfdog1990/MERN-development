# Bootstrap — Breakpoints

> Responsive layout system | Grid tiers | Media queries

---

## Core Concepts

Breakpoints are customizable widths that control how responsive layouts adapt across viewport sizes.

- **Media queries** are used to apply styles conditionally at each breakpoint.
- Bootstrap follows a **mobile-first** approach — minimal styles are applied at the smallest size, then layered on top for larger devices. This reduces CSS size and improves rendering time.
- We most commonly use `min-width` in media queries.

---

## Available Breakpoints

Bootstrap ships with **six default breakpoints** (also called grid tiers). They can be customised via Sass.

| Breakpoint        | Class Infix | Dimensions |
|-------------------|-------------|------------|
| Extra small       | *(none)*    | < 576px    |
| Small             | `sm`        | ≥ 576px    |
| Medium            | `md`        | ≥ 768px    |
| Large             | `lg`        | ≥ 992px    |
| Extra large       | `xl`        | ≥ 1200px   |
| Extra extra large | `xxl`       | ≥ 1400px   |

Each breakpoint was chosen to comfortably hold containers whose widths are multiples of 12.

### Sass Map (`scss/_variables.scss`)

```scss
$grid-breakpoints: (
  xs: 0,
  sm: 576px,
  md: 768px,
  lg: 992px,
  xl: 1200px,
  xxl: 1400px
);
```

> To customise breakpoints, modify this map in your source Sass files. Refer to the CSS section of the Grid documentation for more.

---

## Media Queries

### 1. Min-width (Mobile-first / Upward)

Styles apply from the given breakpoint **and up**. This is Bootstrap's primary approach.

**Sass mixins:**

```scss
@include media-breakpoint-up(sm)  { ... }  // ≥ 576px
@include media-breakpoint-up(md)  { ... }  // ≥ 768px
@include media-breakpoint-up(lg)  { ... }  // ≥ 992px
@include media-breakpoint-up(xl)  { ... }  // ≥ 1200px
@include media-breakpoint-up(xxl) { ... }  // ≥ 1400px
```

**Compiled CSS equivalent:**

```css
/* X-Small — no media query needed (default in Bootstrap) */

/* Small devices (landscape phones, 576px and up) */
@media (min-width: 576px)  { ... }

/* Medium devices (tablets, 768px and up) */
@media (min-width: 768px)  { ... }

/* Large devices (desktops, 992px and up) */
@media (min-width: 992px)  { ... }

/* X-Large devices (large desktops, 1200px and up) */
@media (min-width: 1200px) { ... }

/* XX-Large devices (larger desktops, 1400px and up) */
@media (min-width: 1400px) { ... }
```

**Example — hide by default, show at `sm` and above:**

```scss
.custom-class {
  display: none;
}

@include media-breakpoint-up(sm) {
  .custom-class {
    display: block;
  }
}
```

---

### 2. Max-width (Downward)

Styles apply at the given breakpoint **and below**. Bootstrap subtracts **0.02px** from each breakpoint value to avoid overlap with fractional viewports on hi-DPI displays.

**Sass mixins:**

```scss
@include media-breakpoint-down(sm)  { ... }  // < 576px
@include media-breakpoint-down(md)  { ... }  // < 768px
@include media-breakpoint-down(lg)  { ... }  // < 992px
@include media-breakpoint-down(xl)  { ... }  // < 1200px
@include media-breakpoint-down(xxl) { ... }  // < 1400px
```

**Compiled CSS equivalent:**

```css
/* xs — returns only a ruleset, no media query */

/* sm — portrait phones, less than 576px */
@media (max-width: 575.98px)  { ... }

/* md — landscape phones, less than 768px */
@media (max-width: 767.98px)  { ... }

/* lg — tablets, less than 992px */
@media (max-width: 991.98px)  { ... }

/* xl — desktops, less than 1200px */
@media (max-width: 1199.98px) { ... }

/* xxl — x-large desktops, less than 1400px */
@media (max-width: 1399.98px) { ... }
```

**Example — apply styles from medium breakpoint and down:**

```scss
@include media-breakpoint-down(md) {
  .custom-class {
    display: block;
  }
}
```

> **Why −0.02px?** Browsers don't currently support range context queries. Bootstrap works around limitations of `min-` and `max-` prefixes on high-DPI devices (which can produce fractional viewport widths) by using values with higher precision.

---

### 3. Single Breakpoint (Only)

Styles apply **only** within a specific breakpoint range — bounded above and below.

**Sass mixins:**

```scss
@include media-breakpoint-only(xs)  { ... }
@include media-breakpoint-only(sm)  { ... }
@include media-breakpoint-only(md)  { ... }
@include media-breakpoint-only(lg)  { ... }
@include media-breakpoint-only(xl)  { ... }
@include media-breakpoint-only(xxl) { ... }
```

**Example — `md` only compiles to:**

```css
@media (min-width: 768px) and (max-width: 991.98px) { ... }
```

---

### 4. Between Breakpoints

Styles apply across a **range** spanning multiple breakpoints.

**Sass mixin:**

```scss
@include media-breakpoint-between(md, xl) { ... }
```

**Compiled CSS equivalent:**

```css
/* Applies styles starting from medium devices and up to extra large devices */
@media (min-width: 768px) and (max-width: 1199.98px) { ... }
```

---

## Quick Reference Summary

| Mixin                                | Direction  | Applies when…              |
|--------------------------------------|------------|----------------------------|
| `media-breakpoint-up(bp)`            | ↑ Upward   | viewport ≥ bp              |
| `media-breakpoint-down(bp)`          | ↓ Downward | viewport < bp              |
| `media-breakpoint-only(bp)`          | ↔ Exact    | viewport within bp range   |
| `media-breakpoint-between(bp-a, bp-b)` | ↔ Range  | viewport ≥ bp-a and < bp-b |

---