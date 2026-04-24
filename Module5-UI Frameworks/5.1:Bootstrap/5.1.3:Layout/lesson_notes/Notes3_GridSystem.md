# Bootstrap — Grid System

> A powerful mobile-first flexbox grid for building layouts of all shapes and sizes using a twelve column system, six responsive tiers, Sass variables and mixins, and dozens of predefined classes.

---

## How It Works

The grid system uses a series of **containers**, **rows**, and **columns** to lay out and align content. It is built with flexbox and is fully responsive.

Key principles:

- **6 responsive breakpoints** — based on `min-width` media queries, so a class like `.col-sm-4` applies to `sm`, `md`, `lg`, `xl`, and `xxl`.
- **Containers** — center and horizontally pad content. Use `.container` for responsive pixel widths, `.container-fluid` for full width, or `.container-{breakpoint}` for a combination.
- **Rows** — wrappers for columns. They apply negative margins to counteract column padding (gutters) so content stays visually aligned.
- **Columns** — 12 template columns are available per row. Column widths are set in percentages for consistent relative sizing.
- **Gutters** — the horizontal padding between columns. Responsive and customisable with `.gx-*`, `.gy-*`, or `.g-*` classes. Use `.g-0` to remove gutters entirely.
- **Sass-powered** — use source Sass to create custom semantic layouts instead of predefined classes.

**Basic example — three equal columns:**

```html
<div class="container text-center">
  <div class="row">
    <div class="col">Column</div>
    <div class="col">Column</div>
    <div class="col">Column</div>
  </div>
</div>
```

---

## Grid Options

The grid adapts across all six default breakpoints:

| | xs `<576px` | sm `≥576px` | md `≥768px` | lg `≥992px` | xl `≥1200px` | xxl `≥1400px` |
|---|---|---|---|---|---|---|
| **Container max-width** | None (auto) | 540px | 720px | 960px | 1140px | 1320px |
| **Class prefix** | `.col-` | `.col-sm-` | `.col-md-` | `.col-lg-` | `.col-xl-` | `.col-xxl-` |
| **# of columns** | 12 | 12 | 12 | 12 | 12 | 12 |
| **Gutter width** | 1.5rem (0.75rem on each side) | | | | | |
| **Custom gutters** | Yes | | | | | |
| **Nestable** | Yes | | | | | |
| **Column ordering** | Yes | | | | | |

---

## Auto-layout Columns

### Equal-width

Add any number of unit-less `.col` classes — every column will be the same width automatically.

```html
<div class="container text-center">
  <div class="row">
    <div class="col">1 of 2</div>
    <div class="col">2 of 2</div>
  </div>
  <div class="row">
    <div class="col">1 of 3</div>
    <div class="col">2 of 3</div>
    <div class="col">3 of 3</div>
  </div>
</div>
```

---

### Setting One Column Width

Set the width of one column and the siblings automatically resize around it. Uses predefined classes, grid mixins, or inline widths.

```html
<div class="container text-center">
  <div class="row">
    <div class="col">1 of 3</div>
    <div class="col-6">2 of 3 (wider)</div>
    <div class="col">3 of 3</div>
  </div>
  <div class="row">
    <div class="col">1 of 3</div>
    <div class="col-5">2 of 3 (wider)</div>
    <div class="col">3 of 3</div>
  </div>
</div>
```

> The other columns will resize no matter the width of the fixed column.

---

### Variable Width Content

Use `col-{breakpoint}-auto` to size a column based on the **natural width of its content**.

```html
<div class="container text-center">
  <div class="row justify-content-md-center">
    <div class="col col-lg-2">1 of 3</div>
    <div class="col-md-auto">Variable width content</div>
    <div class="col col-lg-2">3 of 3</div>
  </div>
  <div class="row">
    <div class="col">1 of 3</div>
    <div class="col-md-auto">Variable width content</div>
    <div class="col col-lg-2">3 of 3</div>
  </div>
</div>
```

---

## Responsive Classes

### All Breakpoints

Use `.col` or `.col-*` for grids that look the same from the smallest to the largest devices.

```html
<div class="container text-center">
  <div class="row">
    <div class="col">col</div>
    <div class="col">col</div>
    <div class="col">col</div>
    <div class="col">col</div>
  </div>
  <div class="row">
    <div class="col-8">col-8</div>
    <div class="col-4">col-4</div>
  </div>
</div>
```

---

### Stacked to Horizontal

Use `.col-sm-*` classes to start stacked on mobile and become horizontal at the `sm` breakpoint.

```html
<div class="container text-center">
  <div class="row">
    <div class="col-sm-8">col-sm-8</div>
    <div class="col-sm-4">col-sm-4</div>
  </div>
  <div class="row">
    <div class="col-sm">col-sm</div>
    <div class="col-sm">col-sm</div>
    <div class="col-sm">col-sm</div>
  </div>
</div>
```

---

### Mix and Match

Combine different classes for each breakpoint tier to create unique layouts per screen size.

```html
<div class="container text-center">
  <!-- Full-width on mobile, 8-col on md and above -->
  <div class="row">
    <div class="col-md-8">.col-md-8</div>
    <div class="col-6 col-md-4">.col-6 .col-md-4</div>
  </div>

  <!-- 50% on mobile, 33.3% on desktop -->
  <div class="row">
    <div class="col-6 col-md-4">.col-6 .col-md-4</div>
    <div class="col-6 col-md-4">.col-6 .col-md-4</div>
    <div class="col-6 col-md-4">.col-6 .col-md-4</div>
  </div>

  <!-- Always 50% wide -->
  <div class="row">
    <div class="col-6">.col-6</div>
    <div class="col-6">.col-6</div>
  </div>
</div>
```

---

## Row Columns

Use `.row-cols-*` classes on the parent `.row` to quickly control how many columns render per row. Use `.row-cols-auto` to let columns take their natural width.

```html
<!-- 2 columns per row -->
<div class="container text-center">
  <div class="row row-cols-2">
    <div class="col">Column</div>
    <div class="col">Column</div>
    <div class="col">Column</div>
    <div class="col">Column</div>
  </div>
</div>

<!-- 3 columns per row -->
<div class="container text-center">
  <div class="row row-cols-3">
    <div class="col">Column</div>
    <div class="col">Column</div>
    <div class="col">Column</div>
    <div class="col">Column</div>
  </div>
</div>

<!-- 4 columns per row -->
<div class="container text-center">
  <div class="row row-cols-4">
    <div class="col">Column</div>
    <div class="col">Column</div>
    <div class="col">Column</div>
    <div class="col">Column</div>
  </div>
</div>

<!-- Natural / auto width -->
<div class="container text-center">
  <div class="row row-cols-auto">
    <div class="col">Column</div>
    <div class="col">Column</div>
    <div class="col">Column</div>
    <div class="col">Column</div>
  </div>
</div>

<!-- Responsive row cols: 1 col on xs, 2 on sm, 4 on md -->
<div class="container text-center">
  <div class="row row-cols-1 row-cols-sm-2 row-cols-md-4">
    <div class="col">Column</div>
    <div class="col">Column</div>
    <div class="col">Column</div>
    <div class="col">Column</div>
  </div>
</div>
```

**Using the Sass mixin:**

```scss
.element {
  // Three columns to start
  @include row-cols(3);

  // Five columns from medium breakpoint up
  @include media-breakpoint-up(md) {
    @include row-cols(5);
  }
}
```

---

## Nesting

Nest a new `.row` and set of `.col-sm-*` columns inside an existing column. Nested rows should have columns that add up to **12 or fewer**.

```html
<div class="container text-center">
  <div class="row">
    <div class="col-sm-3">
      Level 1: .col-sm-3
    </div>
    <div class="col-sm-9">
      <div class="row">
        <div class="col-8 col-sm-6">
          Level 2: .col-8 .col-sm-6
        </div>
        <div class="col-4 col-sm-6">
          Level 2: .col-4 .col-sm-6
        </div>
      </div>
    </div>
  </div>
</div>
```

---

## CSS

### Sass Variables

Variables and maps control the number of columns, gutter width, and media query breakpoints.

```scss
$grid-columns:      12;
$grid-gutter-width: 1.5rem;
$grid-row-columns:  6;
```

```scss
// scss/_variables.scss

$grid-breakpoints: (
  xs: 0,
  sm: 576px,
  md: 768px,
  lg: 992px,
  xl: 1200px,
  xxl: 1400px
);
```

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

---

### Sass Mixins

Mixins generate semantic CSS for individual grid columns.

```scss
// Creates a wrapper for a series of columns
@include make-row();

// Make the element grid-ready (applying everything but the width)
@include make-col-ready();

// Equal columns (similar to .col)
@include make-col();

// Specific column width
@include make-col($size, $columns: $grid-columns);

// Offset with margins
@include make-col-offset($size, $columns: $grid-columns);
```

---

### Example Usage

A two-column layout using mixins with responsive width changes:

```scss
.example-container {
  @include make-container();
  // Override width: 100% set by make-container()
  width: 800px;
}

.example-row {
  @include make-row();
}

.example-content-main {
  @include make-col-ready();

  @include media-breakpoint-up(sm) {
    @include make-col(6);
  }
  @include media-breakpoint-up(lg) {
    @include make-col(8);
  }
}

.example-content-secondary {
  @include make-col-ready();

  @include media-breakpoint-up(sm) {
    @include make-col(6);
  }
  @include media-breakpoint-up(lg) {
    @include make-col(4);
  }
}
```

```html
<div class="example-container">
  <div class="example-row">
    <div class="example-content-main">Main content</div>
    <div class="example-content-secondary">Secondary content</div>
  </div>
</div>
```

---

## Customizing the Grid

### Columns and Gutters

Modify column count, gutter width, and max row columns via Sass variables:

```scss
$grid-columns:      12 !default;  // Total columns per row
$grid-gutter-width: 1.5rem !default;  // Space between columns
$grid-row-columns:  6 !default;   // Max columns for .row-cols-*
```

- `$grid-columns` — generates the percentage widths of each column
- `$grid-gutter-width` — sets the width of column gutters
- `$grid-row-columns` — sets the maximum for `.row-cols-*`; numbers above this limit are ignored

---

### Grid Tiers

You can reduce or change the number of grid tiers by modifying `$grid-breakpoints` and `$container-max-widths`. Example — a four-tier grid:

```scss
$grid-breakpoints: (
  xs: 0,
  sm: 480px,
  md: 768px,
  lg: 1024px
);

$container-max-widths: (
  sm: 420px,
  md: 720px,
  lg: 960px
);
```

> After modifying any Sass variables or maps, save and **recompile**. This generates a new set of predefined grid classes, offsets, ordering utilities, and responsive visibility classes. Always set grid values in `px` — not `rem`, `em`, or `%`.

---

## Quick Reference Summary

| Feature | Class / Mixin | Notes |
|---------|--------------|-------|
| Equal-width columns | `.col` | All same width, auto |
| Specific column span | `.col-{n}` | n = 1–12 |
| Breakpoint-specific | `.col-{bp}-{n}` | e.g. `.col-md-6` |
| Variable width | `.col-{bp}-auto` | Sizes to content |
| Row columns (parent) | `.row-cols-{n}` | Set on `.row`, not `.col` |
| Responsive row cols | `.row-cols-{bp}-{n}` | e.g. `.row-cols-md-4` |
| Remove gutters | `.g-0` | On the `.row` element |
| Horizontal gutters | `.gx-*` | |
| Vertical gutters | `.gy-*` | |
| Nest columns | New `.row` inside `.col` | Nested cols should sum ≤ 12 |
| Custom container | `@include make-container()` | Sass mixin |
| Custom row | `@include make-row()` | Sass mixin |
| Custom column | `@include make-col($size)` | Sass mixin |
| Column offset | `@include make-col-offset($size)` | Sass mixin |

---