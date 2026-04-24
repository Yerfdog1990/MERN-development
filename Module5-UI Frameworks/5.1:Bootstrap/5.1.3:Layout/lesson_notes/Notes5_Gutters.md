# Bootstrap Gutters

Gutters are the **padding between columns** in the Bootstrap grid system, used to responsively space and align content.

---

## How They Work

- Gutters are gaps between column content created by **horizontal padding**
- Bootstrap sets `padding-right` and `padding-left` on each column
- **Negative margins** on `.row` offset the padding at the start and end so content stays aligned
- Default gutter width: **1.5rem (24px)**
- Gutters can be **responsively adjusted** using breakpoint-specific classes

---

## Gutter Classes Overview

| Class | Effect |
|-------|--------|
| `.gx-*` | Horizontal gutters only |
| `.gy-*` | Vertical gutters only |
| `.g-*` | Both horizontal & vertical gutters |
| `.g-0` | Remove all gutters |

Scale values (`*`): `0, 1, 2, 3, 4, 5`

---

## 1. Horizontal Gutters — `.gx-*`

Controls horizontal spacing between columns. When using large gutter values, adjust the parent container with a matching padding utility (e.g., `.px-4`) to prevent overflow.

### Option A — Adjust container padding

```html
<div class="container px-4 text-center">
  <div class="row gx-5">
    <div class="col">
      <div class="p-3">Custom column padding</div>
    </div>
    <div class="col">
      <div class="p-3">Custom column padding</div>
    </div>
  </div>
</div>
```

### Option B — Use `.overflow-hidden` wrapper

```html
<div class="container overflow-hidden text-center">
  <div class="row gx-5">
    <div class="col">
      <div class="p-3">Custom column padding</div>
    </div>
    <div class="col">
      <div class="p-3">Custom column padding</div>
    </div>
  </div>
</div>
```

> **Tip:** `.overflow-hidden` on the container is a cleaner alternative that avoids modifying padding manually.

---

## 2. Vertical Gutters — `.gy-*`

Controls vertical spacing between columns **when they wrap to new lines**. Can cause overflow below `.row` — use `.overflow-hidden` if needed.

```html
<div class="container overflow-hidden text-center">
  <div class="row gy-5">
    <div class="col-6">
      <div class="p-3">Custom column padding</div>
    </div>
    <div class="col-6">
      <div class="p-3">Custom column padding</div>
    </div>
    <div class="col-6">
      <div class="p-3">Custom column padding</div>
    </div>
    <div class="col-6">
      <div class="p-3">Custom column padding</div>
    </div>
  </div>
</div>
```

> **Note:** Vertical gutters only have a visible effect when columns **wrap** onto multiple lines.

---

## 3. Horizontal & Vertical Gutters — `.g-*`

Controls both directions at once. For smaller values, `.overflow-hidden` is typically not needed.

```html
<div class="container text-center">
  <div class="row g-2">
    <div class="col-6">
      <div class="p-3">Custom column padding</div>
    </div>
    <div class="col-6">
      <div class="p-3">Custom column padding</div>
    </div>
    <div class="col-6">
      <div class="p-3">Custom column padding</div>
    </div>
    <div class="col-6">
      <div class="p-3">Custom column padding</div>
    </div>
  </div>
</div>
```

---

## 4. Row Columns Gutters

Gutter classes work with **row columns** (`row-cols-*`) too, including responsive variants.

```html
<div class="container text-center">
  <div class="row row-cols-2 row-cols-lg-5 g-2 g-lg-3">
    <div class="col"><div class="p-3">Row column</div></div>
    <div class="col"><div class="p-3">Row column</div></div>
    <div class="col"><div class="p-3">Row column</div></div>
    <div class="col"><div class="p-3">Row column</div></div>
    <div class="col"><div class="p-3">Row column</div></div>
    <div class="col"><div class="p-3">Row column</div></div>
    <div class="col"><div class="p-3">Row column</div></div>
    <div class="col"><div class="p-3">Row column</div></div>
    <div class="col"><div class="p-3">Row column</div></div>
    <div class="col"><div class="p-3">Row column</div></div>
  </div>
</div>
```

- On **small screens**: 2 columns per row, `g-2` gutters
- On **large screens** (`lg`+): 5 columns per row, `g-lg-3` gutters

---

## 5. No Gutters — `.g-0`

Removes all gutters (negative margins from `.row` and padding from columns).

```html
<div class="row g-0 text-center">
  <div class="col-sm-6 col-md-8">.col-sm-6 .col-md-8</div>
  <div class="col-6 col-md-4">.col-6 .col-md-4</div>
</div>
```

> **Edge-to-edge design tip:** Drop the `.container` / `.container-fluid` and add `.mx-0` to `.row` to prevent overflow and achieve a truly full-width layout.

---

## 6. Customising Gutters (Sass)

Gutter classes are generated from the `$gutters` Sass map, which inherits from `$spacers`.

```scss
$grid-gutter-width: 1.5rem;

$gutters: (
  0: 0,
  1: $spacer * .25,   // ~4px
  2: $spacer * .5,    // ~8px
  3: $spacer,         // ~16px
  4: $spacer * 1.5,   // ~24px
  5: $spacer * 3,     // ~48px
);
```

To add custom gutter sizes, extend the `$gutters` map in your Sass before importing Bootstrap:

```scss
$gutters: (
  6: $spacer * 4,  // custom size
);
```

---

## Quick Reference

```html
<!-- Horizontal only -->
<div class="row gx-3"> ... </div>

<!-- Vertical only -->
<div class="row gy-3"> ... </div>

<!-- Both directions -->
<div class="row g-3"> ... </div>

<!-- No gutters -->
<div class="row g-0"> ... </div>

<!-- Responsive gutters -->
<div class="row g-2 g-md-4 g-lg-5"> ... </div>
```

---