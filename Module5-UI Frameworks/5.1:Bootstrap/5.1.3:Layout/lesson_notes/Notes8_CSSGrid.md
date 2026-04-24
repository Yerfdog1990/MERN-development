# Bootstrap — CSS Grid

Bootstrap's CSS Grid system is an **experimental, opt-in** alternative layout system built on native CSS Grid, available from **v5.1.0**. It sits alongside (not replacing) the default flexbox grid.

> ⚠️ **Experimental & opt-in:** The CSS Grid system is disabled by default. You must explicitly enable it in your Sass configuration.

---

## How It Works

Bootstrap's CSS Grid wraps native CSS Grid in familiar Bootstrap-style classes. The key setup steps are:

**1. Enable via Sass**

```scss
// Disable the default flexbox grid
$enable-grid-classes: false;

// Enable the CSS Grid system
$enable-cssgrid: true;

// Then recompile your Sass
```

**2. Replace `.row` with `.grid`**

`.grid` sets `display: grid` and creates a `grid-template` to build on.

**3. Replace `.col-*` with `.g-col-*`**

CSS Grid columns use the `grid-column` property instead of `width`.

**4. Control columns and gaps with CSS variables**

Set `--bs-columns` and `--bs-gap` on the parent `.grid` element — inline or in a stylesheet.

---

## Key Differences from the Default Grid

| Feature | Default Grid (Flexbox) | CSS Grid |
|---------|----------------------|----------|
| Container class | `.row` | `.grid` |
| Column class | `.col-*` | `.g-col-*` |
| Spacing model | Gutters (padding + negative margin) | `gap` property |
| Negative margins | Yes (on `.row`) | **No** |
| Margin utilities on gutters | Supported | **Not supported** |
| Flex utilities on columns | Supported | Limited effect |
| Inline customisation | Modifier classes | CSS variables / inline styles |
| Nesting column count | Resets automatically | **Must reset manually** |

> **Gap vs Gutters:** The `gap` property replaces horizontal padding from the default grid and behaves more like `margin`. It applies **both horizontally and vertically** by default.

---

## Examples

### Three Columns

Three equal-width columns across all viewports using `.g-col-4` (4 of 12 columns each):

```html
<div class="grid text-center">
  <div class="g-col-4">.g-col-4</div>
  <div class="g-col-4">.g-col-4</div>
  <div class="g-col-4">.g-col-4</div>
</div>
```

---

### Responsive

Start with 2 columns on small screens, switch to 3 on medium and above:

```html
<div class="grid text-center">
  <div class="g-col-6 g-col-md-4">.g-col-6 .g-col-md-4</div>
  <div class="g-col-6 g-col-md-4">.g-col-6 .g-col-md-4</div>
  <div class="g-col-6 g-col-md-4">.g-col-6 .g-col-md-4</div>
</div>
```

Fixed two-column layout at all viewports:

```html
<div class="grid text-center">
  <div class="g-col-6">.g-col-6</div>
  <div class="g-col-6">.g-col-6</div>
</div>
```

---

### Wrapping

Grid items automatically wrap to the next line when there's no more room. Gaps apply both horizontally and vertically:

```html
<div class="grid text-center">
  <div class="g-col-6">.g-col-6</div>
  <div class="g-col-6">.g-col-6</div>

  <div class="g-col-6">.g-col-6</div>
  <div class="g-col-6">.g-col-6</div>
</div>
```

---

### Starts (Offsets)

`.g-start-*` replaces offset classes. They use `grid-column-start` under the hood.

> **Note:** Start values begin at `1` — `0` is invalid for `grid-column-start`.

```html
<div class="grid text-center">
  <!-- 3 columns wide, starting at column 2 -->
  <div class="g-col-3 g-start-2">.g-col-3 .g-start-2</div>

  <!-- 4 columns wide, starting at column 6 -->
  <div class="g-col-4 g-start-6">.g-col-4 .g-start-6</div>
</div>
```

---

### Auto Columns

When grid items have **no `.g-col-*` class**, each item is automatically sized to one column wide. With 12 columns, 12 items each take 1 column:

```html
<div class="grid text-center">
  <div>1</div>
  <div>1</div>
  <div>1</div>
  <div>1</div>
  <div>1</div>
  <div>1</div>
  <div>1</div>
  <div>1</div>
  <div>1</div>
  <div>1</div>
  <div>1</div>
  <div>1</div>
</div>
```

Auto columns can be **mixed with explicit column classes**:

```html
<div class="grid text-center">
  <div class="g-col-6">.g-col-6</div>  <!-- takes 6 columns -->
  <div>1</div>  <!-- each remaining item auto-sizes across the leftover 6 columns -->
  <div>1</div>
  <div>1</div>
  <div>1</div>
  <div>1</div>
  <div>1</div>
</div>
```

---

### Nesting

Nested `.grid` elements inherit `--bs-columns`, `--bs-rows`, and `--bs-gap` from their parent, unlike the default grid. **You must manually reset column counts when nesting.**

```html
<div class="grid text-center overflow-x-auto" style="--bs-columns: 3;">

  <!-- First auto-column: inherits 3-column grid -->
  <div>
    First auto-column
    <div class="grid">
      <div>Auto-column</div>  <!-- 1 of 3 -->
      <div>Auto-column</div>  <!-- 1 of 3 -->
    </div>
  </div>

  <!-- Second auto-column: resets to 12-column grid -->
  <div>
    Second auto-column
    <div class="grid" style="--bs-columns: 12;">
      <div class="g-col-6">6 of 12</div>
      <div class="g-col-4">4 of 12</div>
      <div class="g-col-2">2 of 12</div>
    </div>
  </div>

  <!-- Third auto-column: no nested grid -->
  <div>Third auto-column</div>

</div>
```

> **Key nesting rule:** If a nested `.grid` should use a different column count from its parent, always set `--bs-columns` explicitly on the nested element.

---

## Customising

### CSS Variables

Control layout using these CSS variables on the `.grid` parent:

| Variable | Fallback | Description |
|----------|----------|-------------|
| `--bs-rows` | `1` | Number of rows in the grid template |
| `--bs-columns` | `12` | Number of columns in the grid template |
| `--bs-gap` | `1.5rem` | Gap size between columns and rows |

> **How fallbacks work:** These variables have no default value. Bootstrap uses `var(--bs-rows, 1)` — so the fallback (`1`) applies until you explicitly set the variable on an element.

---

### No Grid Classes

Immediate children of `.grid` are automatically grid items. Without `.g-col-*`, they distribute evenly across the defined columns:

```html
<!-- 3 equal auto-columns, no classes needed -->
<div class="grid text-center" style="--bs-columns: 3;">
  <div>Auto-column</div>
  <div>Auto-column</div>
  <div>Auto-column</div>
</div>
```

---

### Columns and Gaps

Override the column count and gap size together:

```html
<!-- 4-column grid with large 5rem gap -->
<div class="grid text-center" style="--bs-columns: 4; --bs-gap: 5rem;">
  <div class="g-col-2">.g-col-2</div>
  <div class="g-col-2">.g-col-2</div>
</div>

<!-- 10-column grid with 1rem gap -->
<div class="grid text-center" style="--bs-columns: 10; --bs-gap: 1rem;">
  <div class="g-col-6">.g-col-6</div>
  <div class="g-col-4">.g-col-4</div>
</div>
```

---

### Adding Rows

Use `--bs-rows` alongside `grid-row` inline styles to control row placement:

```html
<div class="grid text-center" style="--bs-rows: 3; --bs-columns: 3;">
  <div>Auto-column</div>
  <div class="g-start-2" style="grid-row: 2">Auto-column</div>
  <div class="g-start-3" style="grid-row: 3">Auto-column</div>
</div>
```

---

### Gaps — Vertical and Horizontal

Control only the **vertical** gap with `row-gap`:

```html
<div class="grid text-center" style="row-gap: 0;">
  <div class="g-col-6">.g-col-6</div>
  <div class="g-col-6">.g-col-6</div>
  <div class="g-col-6">.g-col-6</div>
  <div class="g-col-6">.g-col-6</div>
</div>
```

Set **different vertical and horizontal gaps** using a value pair (`vertical horizontal`):

```html
<!-- 0.25rem vertical gap, 1rem horizontal gap -->
<div class="grid text-center" style="--bs-gap: .25rem 1rem;">
  <div class="g-col-6">.g-col-6</div>
  <div class="g-col-6">.g-col-6</div>
  <div class="g-col-6">.g-col-6</div>
  <div class="g-col-6">.g-col-6</div>
</div>
```

---

## Sass Limitations

The CSS Grid classes are still generated by two Sass variables:

```scss
$grid-columns:      12;
$grid-gutter-width: 1.5rem;
```

These control how many `.g-col-*` classes exist in compiled CSS. If you need more columns, you have two options:

**Option A — Modify Sass variables and recompile:**

```scss
$grid-columns: 18;
@import "bootstrap";
```

**Option B — Use inline styles with existing classes:**

```html
<!-- 18-column grid using inline CSS variable + mixed classes -->
<div class="grid text-center" style="--bs-columns: 18; --bs-gap: .5rem;">
  <div style="grid-column: span 14;">14 columns</div>
  <div class="g-col-4">.g-col-4</div>
</div>
```

---

## Quick Reference

```html
<!-- Enable (Sass) -->
<!-- $enable-grid-classes: false; -->
<!-- $enable-cssgrid: true; -->

<!-- Basic 3-column grid -->
<div class="grid">
  <div class="g-col-4">col</div>
  <div class="g-col-4">col</div>
  <div class="g-col-4">col</div>
</div>

<!-- Responsive columns -->
<div class="grid">
  <div class="g-col-12 g-col-md-6 g-col-lg-4">col</div>
</div>

<!-- Custom columns, gap, rows -->
<div class="grid" style="--bs-columns: 6; --bs-gap: 1rem; --bs-rows: 2;">
  <div class="g-col-3">half</div>
  <div class="g-col-3">half</div>
</div>

<!-- Offset with g-start-* -->
<div class="grid">
  <div class="g-col-4 g-start-5">offset to col 5</div>
</div>

<!-- Different vertical/horizontal gap -->
<div class="grid" style="--bs-gap: .5rem 2rem;">
  <div class="g-col-6">col</div>
  <div class="g-col-6">col</div>
</div>
```

### Class Comparison

| Default Grid | CSS Grid |
|-------------|----------|
| `.row` | `.grid` |
| `.col-4` | `.g-col-4` |
| `.col-md-6` | `.g-col-md-6` |
| `.offset-2` | `.g-start-3` |
| `.g-3` (gutter) | `--bs-gap: 1rem` |
| `.row-cols-3` | `--bs-columns: 3` |

---