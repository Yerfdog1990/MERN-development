# Bootstrap — Color

---

## Overview

Bootstrap is supported by an **extensive color system** that themes styles and components. It enables comprehensive customization and extension for any project. The color palette expanded significantly in **v5.3.0**, adding new variables for secondary and tertiary text and background colors, plus subtle background, border, and text-emphasis variants for all theme colors.

---

## Colors (v5.3.0+)

New variables introduced in v5.3.0 are available via **Sass and CSS variables** (but not color maps or utility classes). They are globally set on `:root` and automatically adapt to **dark mode**.

> **Note:** Colors ending in `-rgb` provide red, green, blue values for use in `rgb()` and `rgba()`.
> Example: `rgba(var(--bs-secondary-bg-rgb), .5)`

### Color Variable Groups

#### Body
Default foreground and background, including components.

```css
--bs-body-color
--bs-body-color-rgb
--bs-body-bg
--bs-body-bg-rgb
```

#### Secondary
Use the color option for lighter text. Use the bg option for dividers and disabled component states.

```css
--bs-secondary-color
--bs-secondary-color-rgb
--bs-secondary-bg
--bs-secondary-bg-rgb
```

#### Tertiary
Use the color option for even lighter text. Use the bg option for hover state backgrounds, accents, and wells.

```css
--bs-tertiary-color
--bs-tertiary-color-rgb
--bs-tertiary-bg
--bs-tertiary-bg-rgb
```

#### Emphasis
For higher contrast text. Not applicable for backgrounds.

```css
--bs-emphasis-color
--bs-emphasis-color-rgb
```

#### Border
For component borders, dividers, and rules. Use `--bs-border-color-translucent` to blend with backgrounds via `rgba()`.

```css
--bs-border-color
--bs-border-color-rgb
```

---

## Theme Colors

Each theme color exposes four variable types: base color, subtle background, subtle border, and text emphasis.

#### Primary
Main theme color — used for hyperlinks, focus styles, and active states.

```css
--bs-primary
--bs-primary-rgb
--bs-primary-bg-subtle
--bs-primary-border-subtle
--bs-primary-text-emphasis
```

#### Success
Used for positive or successful actions and information.

```css
--bs-success
--bs-success-rgb
--bs-success-bg-subtle
--bs-success-border-subtle
--bs-success-text-emphasis
```

#### Danger
Used for errors and dangerous actions.

```css
--bs-danger
--bs-danger-rgb
--bs-danger-bg-subtle
--bs-danger-border-subtle
--bs-danger-text-emphasis
```

#### Warning
Used for non-destructive warning messages.

```css
--bs-warning
--bs-warning-rgb
--bs-warning-bg-subtle
--bs-warning-border-subtle
--bs-warning-text-emphasis
```

#### Info
Used for neutral and informative content.

```css
--bs-info
--bs-info-rgb
--bs-info-bg-subtle
--bs-info-border-subtle
--bs-info-text-emphasis
```

#### Light
Additional theme option for less contrasting colors.

```css
--bs-light
--bs-light-rgb
--bs-light-bg-subtle
--bs-light-border-subtle
--bs-light-text-emphasis
```

#### Dark
Additional theme option for higher contrasting colors.

```css
--bs-dark
--bs-dark-rgb
--bs-dark-bg-subtle
--bs-dark-border-subtle
--bs-dark-text-emphasis
```

---

## Using the New Colors

The new color variables are accessible via **CSS variables** and **utility classes**. Since the CSS variables are adapted for dark mode, the utility classes are also automatically adaptive to the active color mode.

### Example — Composing with utility classes

```html
<div class="p-3 text-primary-emphasis bg-primary-subtle border border-primary-subtle rounded-3">
  Example element with utilities
</div>
```

This combines:
- `text-primary-emphasis` — high contrast text color
- `bg-primary-subtle` — subtle primary background
- `border-primary-subtle` — subtle primary border

---

## Theme Colors Sass Map

Bootstrap uses a subset of all colors to create a smaller palette for generating color schemes. These are available as Sass variables and a Sass map in `scss/_variables.scss`.

**Theme colors:** Primary, Secondary, Success, Danger, Warning, Info, Light, Dark

```scss
// scss/_variables.scss

$theme-colors: (
  "primary":    $primary,
  "secondary":  $secondary,
  "success":    $success,
  "info":       $info,
  "warning":    $warning,
  "danger":     $danger,
  "light":      $light,
  "dark":       $dark
);
```

> See Sass maps and loops documentation for modifying these colors.

---

## All Colors

All Bootstrap colors are available as **Sass variables** and a **Sass map** in `scss/_variables.scss`. Bootstrap does not generate text or background utility classes for every variable — only a subset is used for the theme palette — to avoid increased file sizes.

> **Important:** Always monitor contrast ratios when customizing colors.

### Full Color Palette

| Color | Base (500) | Shades Available |
|---|---|---|
| Blue | `#0d6efd` | `$blue-100` through `$blue-900` |
| Indigo | `#6610f2` | `$indigo-100` through `$indigo-900` |
| Purple | `#6f42c1` | `$purple-100` through `$purple-900` |
| Pink | `#d63384` | `$pink-100` through `$pink-900` |
| Red | `#dc3545` | `$red-100` through `$red-900` |
| Orange | `#fd7e14` | `$orange-100` through `$orange-900` |
| Yellow | `#ffc107` | `$yellow-100` through `$yellow-900` |
| Green | `#198754` | `$green-100` through `$green-900` |
| Teal | `#20c997` | `$teal-100` through `$teal-900` |
| Cyan | `#0dcaf0` | `$cyan-100` through `$cyan-900` |
| Gray | `#adb5bd` | `$gray-100` through `$gray-900` |
| Black | `#000` | — |
| White | `#fff` | — |

---

## Notes on Sass

Sass **cannot programmatically generate variables**, so Bootstrap manually created variables for every tint and shade. Each color series specifies a midpoint value (e.g. `$blue-500`) and uses custom functions to generate lighter and darker variants.

### `mix()` vs `lighten()` / `darken()`

Bootstrap uses `mix()` rather than the native `lighten()` and `darken()` functions:

| Function | Behaviour |
|---|---|
| `lighten()` / `darken()` | Adjusts the HSL lightness value only |
| `mix()` | Blends the color with white or black |

Using `mix()` produces a much more complete and natural-looking suite of colors. Bootstrap's `tint-color()` and `shade-color()` functions both use `mix()` alongside the `$theme-color-interval` variable, which specifies a stepped percentage for each mixed color.

> Full source: `scss/_functions.scss` and `scss/_variables.scss`

---

## Color Sass Maps

Bootstrap's source Sass files include **three maps** for looping over colors:

### `$colors` — All base (500) colors

```scss
// scss/_variables.scss

$colors: (
  "blue":       $blue,
  "indigo":     $indigo,
  "purple":     $purple,
  "pink":       $pink,
  "red":        $red,
  "orange":     $orange,
  "yellow":     $yellow,
  "green":      $green,
  "teal":       $teal,
  "cyan":       $cyan,
  "black":      $black,
  "white":      $white,
  "gray":       $gray-600,
  "gray-dark":  $gray-800
);
```

### `$theme-colors` — Semantically named theme colors

See the Theme Colors section above.

### `$grays` — All tints and shades of gray

Available in `scss/_variables.scss`.

> **Note:** Not every component currently uses these Sass maps. Plan to use `${color}` variables and the maps together until broader support is added in future versions.

### Usage Example

```scss
.alpha { color: $purple; }

.beta {
  color: $yellow-300;
  background-color: $indigo-900;
}
```

Color and background utility classes are also available for the **500-level** color values.

---

## Generating Utilities (v5.1.0+)

Bootstrap doesn't include color/background utilities for every color variable, but you can generate them yourself using the **utility API** and extended Sass maps.

### Steps

1. Import Bootstrap's functions, variables, mixins, and utilities
2. Use `map-merge-multiple()` to merge multiple Sass maps into one
3. Merge the combined map into `$utilities` to generate `{color}-{level}` class names

### Example — Generate `.text-{color}-{level}` utilities

```scss
@import "bootstrap/scss/functions";
@import "bootstrap/scss/variables";
@import "bootstrap/scss/variables-dark";
@import "bootstrap/scss/maps";
@import "bootstrap/scss/mixins";
@import "bootstrap/scss/utilities";

$all-colors: map-merge-multiple(
  $blues, $indigos, $purples, $pinks, $reds,
  $oranges, $yellows, $greens, $teals, $cyans
);

$utilities: map-merge(
  $utilities,
  (
    "color": map-merge(
      map-get($utilities, "color"),
      (
        values: map-merge(
          map-get(map-get($utilities, "color"), "values"),
          (
            $all-colors
          ),
        ),
      ),
    ),
  )
);

@import "bootstrap/scss/utilities/api";
```

This generates new `.text-{color}-{level}` utilities for every color and level (e.g. `.text-purple-500`). The same approach can be applied to any other utility and property.

---
