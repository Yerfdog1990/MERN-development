# Bootstrap — Columns

> Learn how to modify columns with alignment, ordering, offsetting, and standalone usage thanks to Bootstrap's flexbox grid system.

> ⚠️ **Prerequisites:** Read the [Grid System](https://getbootstrap.com/docs/5.3/layout/grid/) notes before diving into columns.

---

## How They Work

Columns build on the grid's **flexbox architecture**, giving you options to change individual columns or modify groups of columns at the row level.

Key rules:
- All content goes inside columns. The hierarchy is: **container → row → column → content**.
- On rare occasions you may combine content and column directly, but this can have unintended consequences.
- Bootstrap includes predefined classes for fast, responsive layouts — six breakpoints × twelve columns = dozens of ready-made classes.
- Predefined column classes can be disabled via Sass if needed.

---

## Alignment

Use flexbox alignment utilities to vertically and horizontally align columns.

### Vertical Alignment

Apply `align-items-*` on the **row** to align all columns together.

| Class | Behaviour |
|-------|-----------|
| `align-items-start` | Align columns to the top |
| `align-items-center` | Align columns to the middle |
| `align-items-end` | Align columns to the bottom |

```html
<!-- Align all columns to the top -->
<div class="container text-center">
  <div class="row align-items-start">
    <div class="col">One of three columns</div>
    <div class="col">One of three columns</div>
    <div class="col">One of three columns</div>
  </div>
</div>

<!-- Align all columns to the middle -->
<div class="container text-center">
  <div class="row align-items-center">
    <div class="col">One of three columns</div>
    <div class="col">One of three columns</div>
    <div class="col">One of three columns</div>
  </div>
</div>

<!-- Align all columns to the bottom -->
<div class="container text-center">
  <div class="row align-items-end">
    <div class="col">One of three columns</div>
    <div class="col">One of three columns</div>
    <div class="col">One of three columns</div>
  </div>
</div>
```

Apply `align-self-*` on an **individual column** to override alignment per column:

| Class | Behaviour |
|-------|-----------|
| `align-self-start` | Align this column to the top |
| `align-self-center` | Align this column to the middle |
| `align-self-end` | Align this column to the bottom |

```html
<div class="container text-center">
  <div class="row">
    <div class="col align-self-start">One of three columns</div>
    <div class="col align-self-center">One of three columns</div>
    <div class="col align-self-end">One of three columns</div>
  </div>
</div>
```

---

### Horizontal Alignment

Apply `justify-content-*` on the **row** to control horizontal positioning of columns.

| Class | Behaviour |
|-------|-----------|
| `justify-content-start` | Align columns to the left |
| `justify-content-center` | Align columns to the centre |
| `justify-content-end` | Align columns to the right |
| `justify-content-around` | Equal space around each column |
| `justify-content-between` | Equal space between columns |
| `justify-content-evenly` | Equal space around and between columns |

```html
<div class="container text-center">

  <div class="row justify-content-start">
    <div class="col-4">One of two columns</div>
    <div class="col-4">One of two columns</div>
  </div>

  <div class="row justify-content-center">
    <div class="col-4">One of two columns</div>
    <div class="col-4">One of two columns</div>
  </div>

  <div class="row justify-content-end">
    <div class="col-4">One of two columns</div>
    <div class="col-4">One of two columns</div>
  </div>

  <div class="row justify-content-around">
    <div class="col-4">One of two columns</div>
    <div class="col-4">One of two columns</div>
  </div>

  <div class="row justify-content-between">
    <div class="col-4">One of two columns</div>
    <div class="col-4">One of two columns</div>
  </div>

  <div class="row justify-content-evenly">
    <div class="col-4">One of two columns</div>
    <div class="col-4">One of two columns</div>
  </div>

</div>
```

---

## Column Wrapping

If more than **12 columns** are placed in a single row, the extra columns wrap onto a new line as a contiguous unit.

```html
<div class="container">
  <div class="row">
    <div class="col-9">.col-9</div>
    <div class="col-4">
      .col-4
      <!-- 9 + 4 = 13 > 12, so this wraps to a new line -->
    </div>
    <div class="col-6">
      .col-6
      <!-- Continues on the new line -->
    </div>
  </div>
</div>
```

> `9 + 4 = 13` exceeds 12, so `.col-4` wraps to a new line. `.col-6` then continues along that new line.

---

## Column Breaks

To force columns onto a new line within a **single row**, insert a `<div class="w-100">` element where you want the break. This is a flexbox hack since flexbox doesn't natively support multi-line breaking within a single container.

```html
<!-- Break all the time -->
<div class="container text-center">
  <div class="row">
    <div class="col-6 col-sm-3">.col-6 .col-sm-3</div>
    <div class="col-6 col-sm-3">.col-6 .col-sm-3</div>

    <!-- Force next columns to break to a new line -->
    <div class="w-100"></div>

    <div class="col-6 col-sm-3">.col-6 .col-sm-3</div>
    <div class="col-6 col-sm-3">.col-6 .col-sm-3</div>
  </div>
</div>
```

Apply the break **only at specific breakpoints** using responsive display utilities:

```html
<!-- Break only at md breakpoint and above -->
<div class="container text-center">
  <div class="row">
    <div class="col-6 col-sm-4">.col-6 .col-sm-4</div>
    <div class="col-6 col-sm-4">.col-6 .col-sm-4</div>

    <!-- Hidden below md, visible (and breaks) at md and above -->
    <div class="w-100 d-none d-md-block"></div>

    <div class="col-6 col-sm-4">.col-6 .col-sm-4</div>
    <div class="col-6 col-sm-4">.col-6 .col-sm-4</div>
  </div>
</div>
```

---

## Reordering

### Order Classes

Use `.order-{n}` to control the **visual order** of columns without changing the DOM order. These are responsive — e.g., `.order-1 .order-md-2`.

- Supports order values **1 through 5** across all six grid tiers.

```html
<div class="container text-center">
  <div class="row">
    <div class="col">First in DOM, no order applied</div>
    <div class="col order-5">Second in DOM, with a larger order</div>
    <div class="col order-1">Third in DOM, with an order of 1</div>
  </div>
</div>
```

Use `.order-first` and `.order-last` to move elements to the very start or end:

| Class | CSS applied | Result |
|-------|------------|--------|
| `.order-first` | `order: -1` | Moves to the very beginning |
| `.order-last` | `order: 6` | Moves to the very end |

```html
<div class="container text-center">
  <div class="row">
    <div class="col order-last">First in DOM, ordered last</div>
    <div class="col">Second in DOM, unordered</div>
    <div class="col order-first">Third in DOM, ordered first</div>
  </div>
</div>
```

**Adding custom `.order-*` values via Sass:**

```scss
$utilities: map-merge(
  $utilities,
  (
    "order": map-merge(
      map-get($utilities, "order"),
      (
        values: map-merge(
          map-get(map-get($utilities, "order"), "values"),
          (
            6: 6,   // Adds .order-{breakpoint}-6
            last: 7 // Updates .order-{breakpoint}-last to use 7
          )
        ),
      ),
    ),
  )
);
```

---

## Offsetting Columns

Columns can be offset two ways: **offset classes** (grid-sized) or **margin utilities** (flexible).

### Offset Classes

Use `.offset-{breakpoint}-{n}` to move a column to the right by increasing its left margin by `n` columns.

```html
<div class="container text-center">

  <!-- offset-md-4 pushes .col-md-4 four columns to the right -->
  <div class="row">
    <div class="col-md-4">.col-md-4</div>
    <div class="col-md-4 offset-md-4">.col-md-4 .offset-md-4</div>
  </div>

  <!-- Two 3-col items each offset by 3 -->
  <div class="row">
    <div class="col-md-3 offset-md-3">.col-md-3 .offset-md-3</div>
    <div class="col-md-3 offset-md-3">.col-md-3 .offset-md-3</div>
  </div>

  <!-- Centred 6-col item -->
  <div class="row">
    <div class="col-md-6 offset-md-3">.col-md-6 .offset-md-3</div>
  </div>

</div>
```

**Resetting offsets across breakpoints** — use `offset-{breakpoint}-0` to clear an offset at a larger breakpoint:

```html
<div class="container text-center">
  <div class="row">
    <div class="col-sm-5 col-md-6">.col-sm-5 .col-md-6</div>
    <div class="col-sm-5 offset-sm-2 col-md-6 offset-md-0">
      .col-sm-5 .offset-sm-2 .col-md-6 .offset-md-0
    </div>
  </div>
  <div class="row">
    <div class="col-sm-6 col-md-5 col-lg-6">.col-sm-6 .col-md-5 .col-lg-6</div>
    <div class="col-sm-6 col-md-5 offset-md-2 col-lg-6 offset-lg-0">
      .col-sm-6 .col-md-5 .offset-md-2 .col-lg-6 .offset-lg-0
    </div>
  </div>
</div>
```

---

### Margin Utilities

Use margin utilities like `.ms-auto` and `.me-auto` to push sibling columns apart with flexbox.

| Class | Behaviour |
|-------|-----------|
| `.ms-auto` | Pushes element to the right (auto left margin) |
| `.me-auto` | Pushes element to the left (auto right margin) |
| `.ms-{bp}-auto` | Responsive — applies from breakpoint up |

```html
<div class="container text-center">

  <!-- ms-auto pushes .col-md-4 to the right -->
  <div class="row">
    <div class="col-md-4">.col-md-4</div>
    <div class="col-md-4 ms-auto">.col-md-4 .ms-auto</div>
  </div>

  <!-- Responsive: ms-md-auto applies from md and above -->
  <div class="row">
    <div class="col-md-3 ms-md-auto">.col-md-3 .ms-md-auto</div>
    <div class="col-md-3 ms-md-auto">.col-md-3 .ms-md-auto</div>
  </div>

  <!-- me-auto pushes .col-auto to the left edge -->
  <div class="row">
    <div class="col-auto me-auto">.col-auto .me-auto</div>
    <div class="col-auto">.col-auto</div>
  </div>

</div>
```

---

## Standalone Column Classes

`.col-*` classes can be used **outside a `.row`** to give any element a specific width. When used this way, the horizontal padding (gutters) is omitted automatically.

```html
<!-- 25% wide at all breakpoints -->
<div class="col-3 p-3 mb-2">
  .col-3: width of 25%
</div>

<!-- 75% wide above the sm breakpoint -->
<div class="col-sm-9 p-3">
  .col-sm-9: width of 75% above sm breakpoint
</div>
```

**Use with floated images** — combine standalone column classes with float utilities to wrap text around an image. Always use a `.clearfix` wrapper to prevent layout issues when text is shorter than the image.

```html
<div class="clearfix">
  <img src="..." class="col-md-6 float-md-end mb-3 ms-md-3" alt="...">

  <p>
    A paragraph of placeholder text. We're using it here to show the use of
    the clearfix class...
  </p>

  <p>
    As you can see the paragraphs gracefully wrap around the floated image...
  </p>

  <p>
    And yet, here you are, still persevering in reading this placeholder text...
  </p>
</div>
```

> The `.clearfix` class ensures the container expands to fully wrap around the floated image even when the text is shorter.

---

## Quick Reference Summary

| Feature | Class / Utility | Applied on |
|---------|----------------|-----------|
| Align all cols — top | `align-items-start` | `.row` |
| Align all cols — middle | `align-items-center` | `.row` |
| Align all cols — bottom | `align-items-end` | `.row` |
| Align single col — top | `align-self-start` | `.col` |
| Align single col — middle | `align-self-center` | `.col` |
| Align single col — bottom | `align-self-end` | `.col` |
| Horizontal — left | `justify-content-start` | `.row` |
| Horizontal — centre | `justify-content-center` | `.row` |
| Horizontal — right | `justify-content-end` | `.row` |
| Horizontal — space around | `justify-content-around` | `.row` |
| Horizontal — space between | `justify-content-between` | `.row` |
| Horizontal — space evenly | `justify-content-evenly` | `.row` |
| Force column break | `<div class="w-100">` | Inside `.row` |
| Responsive column break | `w-100 d-none d-{bp}-block` | Inside `.row` |
| Visual reordering | `order-{n}` (1–5) | `.col` |
| Move to first | `order-first` | `.col` |
| Move to last | `order-last` | `.col` |
| Offset by columns | `offset-{bp}-{n}` | `.col` |
| Reset offset | `offset-{bp}-0` | `.col` |
| Push right with margin | `ms-auto` | `.col` |
| Push left with margin | `me-auto` | `.col` |
| Standalone width | `col-{n}` outside `.row` | Any element |

---