# Bootstrap — Components

---

## Overview

Bootstrap's components are built **responsively** using a consistent **base and modifier class** approach. Shared properties are grouped into a base class, and style variations are handled by modifier classes. This structure makes components easy to extend, customize, and scale.

---

## Base Classes

The bulk of a component's styling is contained in a **base class**. This class holds all the shared properties — layout, spacing, typography — that apply to every variant of that component.

### Example

```css
.btn { ... }        /* base class — shared styles for all buttons */
```

Modifier classes then extend the base:

```css
.btn-primary { ... }   /* blue button */
.btn-success { ... }   /* green button */
.btn-danger  { ... }   /* red button */
```

Bootstrap builds modifier classes by using **Sass `@each` loops** to iterate over Sass maps like `$theme-colors`. This means:

- All variants are generated automatically from a single map
- Customizing the map and recompiling automatically updates all related components
- Adding a color to `$theme-colors` will generate new modifier classes across all looping components

> See Sass maps and loops documentation to learn how to customize these loops and extend Bootstrap's approach to your own code.

---

## Modifiers

Modifier classes contain only the **style variations** — colors, states, sizes — while the base class handles everything else. Bootstrap generates modifier classes by looping over the `$theme-colors` map.

### Example — Alert modifiers

```scss
// scss/_alert.scss

// Generate contextual modifier classes for colorizing the alert
@each $state in map-keys($theme-colors) {
  .alert-#{$state} {
    --#{$prefix}alert-color:        var(--#{$prefix}#{$state}-text-emphasis);
    --#{$prefix}alert-bg:           var(--#{$prefix}#{$state}-bg-subtle);
    --#{$prefix}alert-border-color: var(--#{$prefix}#{$state}-border-subtle);
    --#{$prefix}alert-link-color:   var(--#{$prefix}#{$state}-text-emphasis);
  }
}
```

This single loop generates all alert variants: `.alert-primary`, `.alert-success`, `.alert-danger`, `.alert-warning`, `.alert-info`, `.alert-light`, `.alert-dark` — automatically from the `$theme-colors` map.

### Example — List group modifiers

```scss
// scss/_list-group.scss

// List group contextual variants
// Must come after :hover states

@each $state in map-keys($theme-colors) {
  .list-group-item-#{$state} {
    --#{$prefix}list-group-color:               var(--#{$prefix}#{$state}-text-emphasis);
    --#{$prefix}list-group-bg:                  var(--#{$prefix}#{$state}-bg-subtle);
    --#{$prefix}list-group-border-color:        var(--#{$prefix}#{$state}-border-subtle);
    --#{$prefix}list-group-action-hover-color:  var(--#{$prefix}emphasis-color);
    --#{$prefix}list-group-action-hover-bg:     var(--#{$prefix}#{$state}-border-subtle);
    --#{$prefix}list-group-action-active-color: var(--#{$prefix}emphasis-color);
    --#{$prefix}list-group-action-active-bg:    var(--#{$prefix}#{$state}-border-subtle);
    --#{$prefix}list-group-active-color:        var(--#{$prefix}#{$state}-bg-subtle);
    --#{$prefix}list-group-active-bg:           var(--#{$prefix}#{$state}-text-emphasis);
    --#{$prefix}list-group-active-border-color: var(--#{$prefix}#{$state}-text-emphasis);
  }
}
```

Again, a single loop generates all variants: `.list-group-item-primary`, `.list-group-item-danger`, etc.

---

## Responsive

Sass loops aren't limited to color maps. Bootstrap also generates **responsive component variations** by looping over `$grid-breakpoints` and combining the loop with a media query include.

### Example — Responsive dropdown alignment

```scss
// scss/_dropdown.scss

// Deliberately hardcodes the `bs-` prefix because it is checked
// in JS to determine Popper's positioning

@each $breakpoint in map-keys($grid-breakpoints) {
  @include media-breakpoint-up($breakpoint) {
    $infix: breakpoint-infix($breakpoint, $grid-breakpoints);

    .dropdown-menu#{$infix}-start {
      --bs-position: start;

      &[data-bs-popper] {
        right: auto;
        left: 0;
      }
    }

    .dropdown-menu#{$infix}-end {
      --bs-position: end;

      &[data-bs-popper] {
        right: 0;
        left: auto;
      }
    }
  }
}
```

This generates classes like `.dropdown-menu-sm-start`, `.dropdown-menu-md-end`, etc. — one set for each breakpoint.

### Grid breakpoints map

Any changes made to `$grid-breakpoints` automatically apply to **all loops** that iterate over it:

```scss
// scss/_variables.scss

$grid-breakpoints: (
  xs:   0,
  sm:   576px,
  md:   768px,
  lg:   992px,
  xl:   1200px,
  xxl:  1400px
);
```

> For more on modifying Sass maps and variables, refer to the CSS section of the Grid documentation.

---

## Creating Your Own Components

Bootstrap encourages following the same base-modifier pattern when building your own custom components.

### Pattern

```css
/* Base class — shared styles for all variants */
.callout {}

/* Modifier classes — unique styles per variant */
.callout-info    {}
.callout-warning {}
.callout-danger  {}
```

### HTML usage

```html
<!-- Base component -->
<div class="callout">...</div>

<!-- With modifier -->
<div class="callout callout-info">
  This is an info callout. Example text to show it in action.
</div>

<div class="callout callout-warning">
  This is a warning callout. Example text to show it in action.
</div>

<div class="callout callout-danger">
  This is a danger callout. Example text to show it in action.
</div>
```

### How it works in practice

In this callout example, the unique styling between each variant is just a `border-left-color`. All other shared styles — padding, font size, margin — live in `.callout`. The modifier class only adds what is different:

```css
/* Base class handles everything shared */
.callout {
  padding: 1.25rem;
  margin-top: 1.25rem;
  margin-bottom: 1.25rem;
  border: 1px solid transparent;
  border-left-width: .25rem;
  border-radius: .25rem;
}

/* Modifier classes only override what's unique */
.callout-info    { border-left-color: #0dcaf0; }
.callout-warning { border-left-color: #ffc107; }
.callout-danger  { border-left-color: #dc3545; }
```

Combining the base with a modifier gives you the **complete component**:

| Class combination | Result |
|---|---|
| `.callout` | Base styles only, no color |
| `.callout .callout-info` | Base + info border color |
| `.callout .callout-warning` | Base + warning border color |
| `.callout .callout-danger` | Base + danger border color |

---

## Summary

| Concept | Description |
|---|---|
| **Base class** | Holds all shared styles for a component (e.g. `.btn`, `.alert`, `.callout`) |
| **Modifier class** | Holds variant-specific styles (e.g. `.btn-primary`, `.alert-danger`) |
| **`@each` loop** | Iterates over Sass maps to auto-generate all modifier classes |
| **`$theme-colors`** | The primary map used to generate color-based modifiers |
| **`$grid-breakpoints`** | The map used to generate responsive component variants |
| **Responsive variants** | Generated by combining `@each` loops with `media-breakpoint-up()` |
| **Custom components** | Follow the same base-modifier pattern for consistency and scalability |

---

