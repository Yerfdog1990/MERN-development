# Bootstrap — Options

---

## Overview

Bootstrap includes a set of **built-in custom variables** that let you quickly toggle global CSS preferences without manually editing component styles. These are controlled via `$enable-*` Sass variables found in:

```
scss/_variables.scss
```

To apply changes, override the variable's value in your custom Sass file and recompile:

```bash
npm run test
```

---

## Global Options Reference

### `$spacer`

| Default | Values |
|---|---|
| `1rem` | Any value greater than 0 |

Controls the default spacer value used to programmatically generate **spacer utilities** (e.g. margin and padding utility classes).

```scss
$spacer: 1.5rem; // increases all spacer-based utilities
```

---

### `$enable-dark-mode`

| Default | Values |
|---|---|
| `true` | `true` or `false` |

Enables built-in **dark mode support** across the project and all components. Set to `false` to strip dark mode styles from your build.

```scss
$enable-dark-mode: false;
```

---

### `$enable-rounded`

| Default | Values |
|---|---|
| `true` | `true` or `false` |

Enables predefined `border-radius` styles on various components. Disable to produce sharp-cornered components globally.

```scss
$enable-rounded: false;
```

---

### `$enable-shadows`

| Default | Values |
|---|---|
| `false` | `true` or `false` |

Enables predefined decorative `box-shadow` styles on various components.

> **Note:** This does **not** affect `box-shadow` used for focus states — those are preserved regardless.

```scss
$enable-shadows: true;
```

---

### `$enable-gradients`

| Default | Values |
|---|---|
| `false` | `true` or `false` |

Enables predefined gradients via `background-image` styles on various components.

```scss
$enable-gradients: true;
```

---

### `$enable-transitions`

| Default | Values |
|---|---|
| `true` | `true` or `false` |

Enables predefined `transition` animations on various components (e.g. hover effects, collapse, modal fade).

```scss
$enable-transitions: false;
```

---

### `$enable-reduced-motion`

| Default | Values |
|---|---|
| `true` | `true` or `false` |

Enables the `prefers-reduced-motion` **media query**, which suppresses certain animations and transitions based on the user's browser or OS accessibility preferences.

```scss
$enable-reduced-motion: false; // ignores user motion preferences — not recommended
```

---

### `$enable-grid-classes`

| Default | Values |
|---|---|
| `true` | `true` or `false` |

Enables generation of CSS classes for the **standard grid system** (e.g. `.row`, `.col-md-1`, etc.).

```scss
$enable-grid-classes: false; // removes grid CSS from output
```

---

### `$enable-cssgrid`

| Default | Values |
|---|---|
| `false` | `true` or `false` |

Enables the **experimental CSS Grid system** (e.g. `.grid`, `.g-col-md-1`, etc.). This is an alternative to Bootstrap's traditional flexbox grid.

```scss
$enable-cssgrid: true;
```

---

### `$enable-container-classes`

| Default | Values |
|---|---|
| `true` | `true` or `false` |

Enables generation of CSS classes for **layout containers**. Introduced in **v5.2.0**.

```scss
$enable-container-classes: false;
```

---

### `$enable-caret`

| Default | Values |
|---|---|
| `true` | `true` or `false` |

Enables the pseudo-element **caret arrow** on `.dropdown-toggle` elements.

```scss
$enable-caret: false; // removes dropdown arrow indicators
```

---

### `$enable-button-pointers`

| Default | Values |
|---|---|
| `true` | `true` or `false` |

Adds a **"hand" (pointer) cursor** to non-disabled button elements, making clickable buttons more obvious to users.

```scss
$enable-button-pointers: false;
```

---

### `$enable-rfs`

| Default | Values |
|---|---|
| `true` | `true` or `false` |

Globally enables **RFS** (Responsive Font Sizes), which automatically scales font sizes and other properties across breakpoints.

```scss
$enable-rfs: false; // disables responsive font scaling
```

---

### `$enable-validation-icons`

| Default | Values |
|---|---|
| `true` | `true` or `false` |

Enables `background-image` icons within textual inputs and some custom form elements for **validation states** (valid/invalid feedback visuals).

```scss
$enable-validation-icons: false;
```

---

### `$enable-negative-margins`

| Default | Values |
|---|---|
| `false` | `true` or `false` |

Enables generation of **negative margin utilities** (e.g. `.mt-n3`). Disabled by default to keep the CSS output lean.

```scss
$enable-negative-margins: true; // enables .mt-n1, .mb-n2, etc.
```

---

### `$enable-deprecation-messages`

| Default | Values |
|---|---|
| `true` | `true` or `false` |

Controls whether **deprecation warnings** are shown when using mixins or functions planned for removal in `v6`. Set to `false` to silence these warnings temporarily.

```scss
$enable-deprecation-messages: false;
```

---

### `$enable-important-utilities`

| Default | Values |
|---|---|
| `true` | `true` or `false` |

Enables the `!important` suffix on utility classes (e.g. `.d-none` outputs `display: none !important`). Disabling this may cause utility classes to be overridden by component styles.

```scss
$enable-important-utilities: false;
```

---

### `$enable-smooth-scroll`

| Default | Values |
|---|---|
| `true` | `true` or `false` |

Applies `scroll-behavior: smooth` globally for smooth anchor scrolling — **except** for users who have enabled the `prefers-reduced-motion` media query, whose preference is always respected.

```scss
$enable-smooth-scroll: false;
```

---

## Quick Reference Summary

| Variable | Default | Purpose |
|---|---|---|
| `$spacer` | `1rem` | Base spacer for utility generation |
| `$enable-dark-mode` | `true` | Dark mode support |
| `$enable-rounded` | `true` | Border radius on components |
| `$enable-shadows` | `false` | Decorative box shadows |
| `$enable-gradients` | `false` | Background gradients |
| `$enable-transitions` | `true` | CSS transitions on components |
| `$enable-reduced-motion` | `true` | Respect user motion preferences |
| `$enable-grid-classes` | `true` | Standard flexbox grid classes |
| `$enable-cssgrid` | `false` | Experimental CSS Grid classes |
| `$enable-container-classes` | `true` | Container layout classes (v5.2.0+) |
| `$enable-caret` | `true` | Dropdown caret pseudo-element |
| `$enable-button-pointers` | `true` | Pointer cursor on buttons |
| `$enable-rfs` | `true` | Responsive font sizes |
| `$enable-validation-icons` | `true` | Form validation background icons |
| `$enable-negative-margins` | `false` | Negative margin utilities |
| `$enable-deprecation-messages` | `true` | Show deprecation warnings |
| `$enable-important-utilities` | `true` | `!important` on utility classes |
| `$enable-smooth-scroll` | `true` | Global smooth scroll behavior |

---

