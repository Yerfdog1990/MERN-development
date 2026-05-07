# Bootstrap Progress 

Documentation and examples for using Bootstrap custom progress bars featuring support for stacked bars, animated backgrounds, and text labels.

## Table of Contents
- [How It Works](#how-it-works)
- [Width](#width)
- [Height](#height)
- [Labels](#labels)
- [Long Labels](#long-labels)
- [Backgrounds](#backgrounds)
- [Multiple Bars (Stacked)](#multiple-bars-stacked)
- [Striped](#striped)
- [Animated Stripes](#animated-stripes)
- [CSS Variables](#css-variables)
- [Sass Variables](#sass-variables)
- [Keyframes](#keyframes)

---

## How It Works

> **v5.3.0 markup change:** The HTML structure for progress bars was updated in v5.3.0 for improved accessibility. The old structure continues to work until v6. See the migration guide for details.

Progress bars are built with **two nested HTML elements** — no `<progress>` HTML5 element is used. This decision enables stacking, animation, and text labels.

**Structure rules:**

| Element | Class | Role |
|---|---|---|
| Outer wrapper | `.progress` | Defines the track and max value |
| Inner bar | `.progress-bar` | The visual fill and optional label |

**Required attributes on `.progress`:**

| Attribute | Description |
|---|---|
| `role="progressbar"` | Declares the element as a progress bar to assistive technologies |
| `aria-label` (or `aria-labelledby`) | Provides an accessible name |
| `aria-valuenow` | The current value |
| `aria-valuemin` | The minimum value (usually `0`) |
| `aria-valuemax` | The maximum value (usually `100`) |

**Width** must be set on `.progress-bar` via inline style, utility class, or custom CSS — there is no default fill.

```html
<!-- 0% -->
<div class="progress" role="progressbar" aria-label="Basic example"
  aria-valuenow="0" aria-valuemin="0" aria-valuemax="100">
  <div class="progress-bar" style="width: 0%"></div>
</div>

<!-- 25% -->
<div class="progress" role="progressbar" aria-label="Basic example"
  aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
  <div class="progress-bar" style="width: 25%"></div>
</div>

<!-- 50% -->
<div class="progress" role="progressbar" aria-label="Basic example"
  aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">
  <div class="progress-bar" style="width: 50%"></div>
</div>

<!-- 75% -->
<div class="progress" role="progressbar" aria-label="Basic example"
  aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
  <div class="progress-bar" style="width: 75%"></div>
</div>

<!-- 100% -->
<div class="progress" role="progressbar" aria-label="Basic example"
  aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">
  <div class="progress-bar" style="width: 100%"></div>
</div>
```

---

## Width

Set the width of `.progress-bar` using inline styles, utility classes, or custom CSS.

### Inline style

```html
<div class="progress" role="progressbar" aria-label="Basic example"
  aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
  <div class="progress-bar" style="width: 75%"></div>
</div>
```

### Width utility class

```html
<div class="progress" role="progressbar" aria-label="Basic example"
  aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
  <div class="progress-bar w-75"></div>
</div>
```

**Width options comparison:**

| Method | Example | Notes |
|---|---|---|
| Inline style | `style="width: 75%"` | Most common; easy for dynamic values |
| Width utility | `.w-75`, `.w-50`, `.w-25` | Quick for fixed values |
| Custom CSS | `.my-bar { width: 63%; }` | For complex or responsive cases |

---

## Height

Set height **only on the `.progress` wrapper** — the inner `.progress-bar` resizes automatically to match.

```html
<!-- 1px thin bar -->
<div class="progress" role="progressbar" aria-label="Example 1px high"
  aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"
  style="height: 1px">
  <div class="progress-bar" style="width: 25%"></div>
</div>

<!-- 20px tall bar -->
<div class="progress" role="progressbar" aria-label="Example 20px high"
  aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"
  style="height: 20px">
  <div class="progress-bar" style="width: 25%"></div>
</div>
```

> The default height is `1rem` (set by `$progress-height`). Override with an inline style or custom CSS on `.progress`.

---

## Labels

Place text directly inside `.progress-bar` to show a visible label over the bar.

```html
<div class="progress" role="progressbar" aria-label="Example with label"
  aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
  <div class="progress-bar" style="width: 25%">25%</div>
</div>
```

---

## Long Labels

By default, `.progress-bar` uses `overflow: hidden`, so labels longer than the bar are clipped. To allow the label to overflow, add `.overflow-visible` from Bootstrap's overflow utilities.

```html
<div class="progress" role="progressbar" aria-label="Example with long label"
  aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
  <div class="progress-bar overflow-visible text-dark" style="width: 25%">
    Long label text that overflows the bar
  </div>
</div>
```

> ⚠️ **Accessibility caution:** When a label overlaps the `.progress` background, the text color must have sufficient contrast with **both** the track background and the bar background. This is difficult to guarantee. For better accessibility, **display the label outside the progress bar entirely.**

---

## Backgrounds

Use `.bg-*` utility classes on `.progress-bar` to change its color.

```html
<div class="progress" role="progressbar" aria-label="Success example"
  aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
  <div class="progress-bar bg-success" style="width: 25%"></div>
</div>

<div class="progress" role="progressbar" aria-label="Info example"
  aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">
  <div class="progress-bar bg-info" style="width: 50%"></div>
</div>

<div class="progress" role="progressbar" aria-label="Warning example"
  aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
  <div class="progress-bar bg-warning" style="width: 75%"></div>
</div>

<div class="progress" role="progressbar" aria-label="Danger example"
  aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">
  <div class="progress-bar bg-danger" style="width: 100%"></div>
</div>
```

### Colored bars with labels — use `.text-bg-*`

When combining a custom background with a text label, use `.text-bg-*` instead of `.bg-*` alone. This utility sets both the background color and an appropriate contrasting text color automatically.

```html
<div class="progress" role="progressbar" aria-label="Success example"
  aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
  <div class="progress-bar text-bg-success" style="width: 25%">25%</div>
</div>

<div class="progress" role="progressbar" aria-label="Info example"
  aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">
  <div class="progress-bar text-bg-info" style="width: 50%">50%</div>
</div>

<div class="progress" role="progressbar" aria-label="Warning example"
  aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
  <div class="progress-bar text-bg-warning" style="width: 75%">75%</div>
</div>

<div class="progress" role="progressbar" aria-label="Danger example"
  aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">
  <div class="progress-bar text-bg-danger" style="width: 100%">100%</div>
</div>
```

**`.bg-*` vs `.text-bg-*`:**

| Class | Sets background | Sets text color | Use when |
|---|---|---|---|
| `.bg-success` | ✅ | ❌ | No label text |
| `.text-bg-success` | ✅ | ✅ (auto-contrast) | With label text |

> **Accessibility note:** Color alone does not convey meaning to screen readers. Supplement color with visible text labels or `.visually-hidden` text where color is the only indicator.

---

## Multiple Bars (Stacked)

Wrap multiple `.progress` elements in a `.progress-stacked` container to create a single combined stacked bar.

> **Key difference from single bars:** When stacking, set the **width on the `.progress` wrapper** (not `.progress-bar`), since `.progress` elements inside `.progress-stacked` are the segments being sized.

```html
<div class="progress-stacked">
  <!-- Segment 1: default blue, 15% -->
  <div class="progress" role="progressbar" aria-label="Segment one"
    aria-valuenow="15" aria-valuemin="0" aria-valuemax="100"
    style="width: 15%">
    <div class="progress-bar"></div>
  </div>

  <!-- Segment 2: green, 30% -->
  <div class="progress" role="progressbar" aria-label="Segment two"
    aria-valuenow="30" aria-valuemin="0" aria-valuemax="100"
    style="width: 30%">
    <div class="progress-bar bg-success"></div>
  </div>

  <!-- Segment 3: cyan, 20% -->
  <div class="progress" role="progressbar" aria-label="Segment three"
    aria-valuenow="20" aria-valuemin="0" aria-valuemax="100"
    style="width: 20%">
    <div class="progress-bar bg-info"></div>
  </div>
</div>
```

**Single bar vs. stacked bar — width placement:**

| Type | Width set on |
|---|---|
| Single progress bar | `.progress-bar` (via `style` or utility) |
| Stacked progress bar | `.progress` wrapper (via `style`) |

Each `.progress` inside `.progress-stacked` still needs its own `role`, `aria-label`, and ARIA value attributes.

---

## Striped

Add `.progress-bar-striped` to `.progress-bar` to apply a diagonal stripe pattern via CSS gradient.

```html
<!-- Default striped -->
<div class="progress" role="progressbar" aria-label="Default striped example"
  aria-valuenow="10" aria-valuemin="0" aria-valuemax="100">
  <div class="progress-bar progress-bar-striped" style="width: 10%"></div>
</div>

<!-- Striped + success color -->
<div class="progress" role="progressbar" aria-label="Success striped example"
  aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
  <div class="progress-bar progress-bar-striped bg-success" style="width: 25%"></div>
</div>

<!-- Striped + info color -->
<div class="progress" role="progressbar" aria-label="Info striped example"
  aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">
  <div class="progress-bar progress-bar-striped bg-info" style="width: 50%"></div>
</div>

<!-- Striped + warning color -->
<div class="progress" role="progressbar" aria-label="Warning striped example"
  aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
  <div class="progress-bar progress-bar-striped bg-warning" style="width: 75%"></div>
</div>

<!-- Striped + danger color -->
<div class="progress" role="progressbar" aria-label="Danger striped example"
  aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">
  <div class="progress-bar progress-bar-striped bg-danger" style="width: 100%"></div>
</div>
```

> Stripes are applied via a CSS `background-image` gradient over the existing background color — adding `.bg-*` changes the color the stripe overlays.

---

## Animated Stripes

Add `.progress-bar-animated` alongside `.progress-bar-striped` to animate the stripe pattern from right to left using a CSS3 `@keyframes` animation.

```html
<div class="progress" role="progressbar" aria-label="Animated striped example"
  aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
  <div class="progress-bar progress-bar-striped progress-bar-animated"
    style="width: 75%"></div>
</div>
```

**Class combination for animated stripes:**
`.progress-bar` + `.progress-bar-striped` + `.progress-bar-animated`

> `.progress-bar-animated` requires `.progress-bar-striped` — animation alone without stripes has no visual effect.

---

## CSS Variables

Added in **Bootstrap v5.2.0**. Progress bars use local CSS variables on `.progress` for real-time customization.

Defined in `scss/_progress.scss`:

```scss
--#{$prefix}progress-height: #{$progress-height};
--#{$prefix}progress-font-size: #{$progress-font-size};
--#{$prefix}progress-bg: #{$progress-bg};
--#{$prefix}progress-border-radius: #{$progress-border-radius};
--#{$prefix}progress-box-shadow: #{$progress-box-shadow};
--#{$prefix}progress-bar-color: #{$progress-bar-color};
--#{$prefix}progress-bar-bg: #{$progress-bar-bg};
--#{$prefix}progress-bar-transition: #{$progress-bar-transition};
```

### Example: Override via CSS

```css
.progress {
  --bs-progress-height: 0.5rem;           /* thinner bar */
  --bs-progress-border-radius: 0;         /* square corners */
  --bs-progress-bar-bg: #6f42c1;          /* purple bar */
  --bs-progress-bg: #e9ecef;              /* light grey track */
}
```

---

## Sass Variables

Defined in `scss/_variables.scss`:

```scss
$progress-height:                   1rem;
$progress-font-size:                $font-size-base * .75;   /* 75% of base font size */
$progress-bg:                       var(--#{$prefix}secondary-bg);
$progress-border-radius:            var(--#{$prefix}border-radius);
$progress-box-shadow:               var(--#{$prefix}box-shadow-inset);
$progress-bar-color:                $white;                  /* label text color */
$progress-bar-bg:                   $primary;                /* default bar fill color */
$progress-bar-animation-timing:     1s linear infinite;      /* stripe animation speed */
$progress-bar-transition:           width .6s ease;          /* width change transition */
```

**Variable reference table:**

| Variable | Default | Description |
|---|---|---|
| `$progress-height` | `1rem` | Height of the progress track |
| `$progress-font-size` | `$font-size-base * .75` | Font size for labels inside the bar |
| `$progress-bg` | Secondary bg | Track (empty area) background color |
| `$progress-border-radius` | Border radius | Rounded corners on the track |
| `$progress-box-shadow` | Inset box shadow | Inner shadow on the track |
| `$progress-bar-color` | `$white` | Label text color on the bar |
| `$progress-bar-bg` | `$primary` | Default fill color of the bar |
| `$progress-bar-animation-timing` | `1s linear infinite` | Speed and timing of stripe animation |
| `$progress-bar-transition` | `width .6s ease` | Transition for width changes |

---

## Keyframes

The `@keyframes progress-bar-stripes` animation is defined conditionally in `scss/_progress.scss` — only included when `$enable-transitions` is `true` (the default).

```scss
@if $enable-transitions {
  @keyframes progress-bar-stripes {
    0% { background-position-x: var(--#{$prefix}progress-height); }
  }
}
```

**How it works:** The animation shifts the `background-position-x` by one `progress-height` unit on each cycle, creating the illusion of the stripes moving right to left continuously.

To customize animation speed, override `$progress-bar-animation-timing`:

```scss
// Slower animation
$progress-bar-animation-timing: 2s linear infinite;

// Faster animation
$progress-bar-animation-timing: 0.5s linear infinite;
```

---

## Quick Reference

```html
<!-- Basic progress bar -->
<div class="progress" role="progressbar" aria-label="Example"
  aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">
  <div class="progress-bar" style="width: 50%"></div>
</div>

<!-- With label -->
<div class="progress" role="progressbar" aria-label="Example with label"
  aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">
  <div class="progress-bar" style="width: 50%">50%</div>
</div>

<!-- Custom height (set on .progress, not .progress-bar) -->
<div class="progress" role="progressbar" aria-label="Tall example"
  aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"
  style="height: 20px">
  <div class="progress-bar" style="width: 50%"></div>
</div>

<!-- Colored bar (no label) -->
<div class="progress" role="progressbar" aria-label="Success"
  aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
  <div class="progress-bar bg-success" style="width: 75%"></div>
</div>

<!-- Colored bar with label (use text-bg-* for auto-contrast) -->
<div class="progress" role="progressbar" aria-label="Warning with label"
  aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
  <div class="progress-bar text-bg-warning" style="width: 75%">75%</div>
</div>

<!-- Stacked bars (width on .progress, not .progress-bar) -->
<div class="progress-stacked">
  <div class="progress" role="progressbar" aria-label="Segment one"
    aria-valuenow="15" aria-valuemin="0" aria-valuemax="100" style="width: 15%">
    <div class="progress-bar"></div>
  </div>
  <div class="progress" role="progressbar" aria-label="Segment two"
    aria-valuenow="30" aria-valuemin="0" aria-valuemax="100" style="width: 30%">
    <div class="progress-bar bg-success"></div>
  </div>
</div>

<!-- Striped -->
<div class="progress" role="progressbar" aria-label="Striped"
  aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">
  <div class="progress-bar progress-bar-striped" style="width: 50%"></div>
</div>

<!-- Animated striped -->
<div class="progress" role="progressbar" aria-label="Animated striped"
  aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
  <div class="progress-bar progress-bar-striped progress-bar-animated"
    style="width: 75%"></div>
</div>
```
---