# Bootstrap — CSS Variables

---

## Overview

Bootstrap includes many **CSS custom properties** (variables) in its compiled CSS, enabling real-time customization **without recompiling Sass**. They provide easy access to commonly used values — theme colors, breakpoints, font stacks — directly in the browser inspector, code sandboxes, or during prototyping.

Key facts:
- All Bootstrap custom properties are prefixed with `bs-` to avoid conflicts with third-party CSS
- Variables are located in `_root.scss` and included in all compiled dist files
- The `:root` selector is required for global access
- Available wherever Bootstrap's CSS is loaded

---

## Root Variables

### Default

These CSS variables are available **everywhere**, regardless of color mode (light or dark):

```css
:root,
[data-bs-theme=light] {

  /* Base colors */
  --bs-blue: #0d6efd;
  --bs-indigo: #6610f2;
  --bs-purple: #6f42c1;
  --bs-pink: #d63384;
  --bs-red: #dc3545;
  --bs-orange: #fd7e14;
  --bs-yellow: #ffc107;
  --bs-green: #198754;
  --bs-teal: #20c997;
  --bs-cyan: #0dcaf0;
  --bs-black: #000;
  --bs-white: #fff;

  /* Gray scale */
  --bs-gray: #6c757d;
  --bs-gray-dark: #343a40;
  --bs-gray-100: #f8f9fa;
  --bs-gray-200: #e9ecef;
  --bs-gray-300: #dee2e6;
  --bs-gray-400: #ced4da;
  --bs-gray-500: #adb5bd;
  --bs-gray-600: #6c757d;
  --bs-gray-700: #495057;
  --bs-gray-800: #343a40;
  --bs-gray-900: #212529;

  /* Theme colors */
  --bs-primary: #0d6efd;
  --bs-secondary: #6c757d;
  --bs-success: #198754;
  --bs-info: #0dcaf0;
  --bs-warning: #ffc107;
  --bs-danger: #dc3545;
  --bs-light: #f8f9fa;
  --bs-dark: #212529;

  /* Theme colors — RGB format (for use with rgba()) */
  --bs-primary-rgb: 13, 110, 253;
  --bs-secondary-rgb: 108, 117, 125;
  --bs-success-rgb: 25, 135, 84;
  --bs-info-rgb: 13, 202, 240;
  --bs-warning-rgb: 255, 193, 7;
  --bs-danger-rgb: 220, 53, 69;
  --bs-light-rgb: 248, 249, 250;
  --bs-dark-rgb: 33, 37, 41;

  /* Theme text emphasis */
  --bs-primary-text-emphasis: #052c65;
  --bs-secondary-text-emphasis: #2b2f32;
  --bs-success-text-emphasis: #0a3622;
  --bs-info-text-emphasis: #055160;
  --bs-warning-text-emphasis: #664d03;
  --bs-danger-text-emphasis: #58151c;
  --bs-light-text-emphasis: #495057;
  --bs-dark-text-emphasis: #495057;

  /* Theme subtle backgrounds */
  --bs-primary-bg-subtle: #cfe2ff;
  --bs-secondary-bg-subtle: #e2e3e5;
  --bs-success-bg-subtle: #d1e7dd;
  --bs-info-bg-subtle: #cff4fc;
  --bs-warning-bg-subtle: #fff3cd;
  --bs-danger-bg-subtle: #f8d7da;
  --bs-light-bg-subtle: #fcfcfd;
  --bs-dark-bg-subtle: #ced4da;

  /* Theme subtle borders */
  --bs-primary-border-subtle: #9ec5fe;
  --bs-secondary-border-subtle: #c4c8cb;
  --bs-success-border-subtle: #a3cfbb;
  --bs-info-border-subtle: #9eeaf9;
  --bs-warning-border-subtle: #ffe69c;
  --bs-danger-border-subtle: #f1aeb5;
  --bs-light-border-subtle: #e9ecef;
  --bs-dark-border-subtle: #adb5bd;

  /* Utility RGB */
  --bs-white-rgb: 255, 255, 255;
  --bs-black-rgb: 0, 0, 0;

  /* Typography */
  --bs-font-sans-serif: system-ui, -apple-system, "Segoe UI", Roboto,
    "Helvetica Neue", "Noto Sans", "Liberation Sans", Arial, sans-serif,
    "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
  --bs-font-monospace: SFMono-Regular, Menlo, Monaco, Consolas,
    "Liberation Mono", "Courier New", monospace;
  --bs-gradient: linear-gradient(180deg, rgba(255, 255, 255, 0.15), rgba(255, 255, 255, 0));

  /* Body */
  --bs-body-font-family: var(--bs-font-sans-serif);
  --bs-body-font-size: 1rem;
  --bs-body-font-weight: 400;
  --bs-body-line-height: 1.5;
  --bs-body-color: #212529;
  --bs-body-color-rgb: 33, 37, 41;
  --bs-body-bg: #fff;
  --bs-body-bg-rgb: 255, 255, 255;

  /* Contextual text colors */
  --bs-emphasis-color: #000;
  --bs-emphasis-color-rgb: 0, 0, 0;
  --bs-secondary-color: rgba(33, 37, 41, 0.75);
  --bs-secondary-color-rgb: 33, 37, 41;
  --bs-secondary-bg: #e9ecef;
  --bs-secondary-bg-rgb: 233, 236, 239;
  --bs-tertiary-color: rgba(33, 37, 41, 0.5);
  --bs-tertiary-color-rgb: 33, 37, 41;
  --bs-tertiary-bg: #f8f9fa;
  --bs-tertiary-bg-rgb: 248, 249, 250;

  /* Headings & links */
  --bs-heading-color: inherit;
  --bs-link-color: #0d6efd;
  --bs-link-color-rgb: 13, 110, 253;
  --bs-link-decoration: underline;
  --bs-link-hover-color: #0a58ca;
  --bs-link-hover-color-rgb: 10, 88, 202;

  /* Code & highlight */
  --bs-code-color: #d63384;
  --bs-highlight-color: #212529;
  --bs-highlight-bg: #fff3cd;

  /* Borders */
  --bs-border-width: 1px;
  --bs-border-style: solid;
  --bs-border-color: #dee2e6;
  --bs-border-color-translucent: rgba(0, 0, 0, 0.175);

  /* Border radius */
  --bs-border-radius: 0.375rem;
  --bs-border-radius-sm: 0.25rem;
  --bs-border-radius-lg: 0.5rem;
  --bs-border-radius-xl: 1rem;
  --bs-border-radius-xxl: 2rem;
  --bs-border-radius-2xl: var(--bs-border-radius-xxl);
  --bs-border-radius-pill: 50rem;

  /* Box shadows */
  --bs-box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);
  --bs-box-shadow-sm: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075);
  --bs-box-shadow-lg: 0 1rem 3rem rgba(0, 0, 0, 0.175);
  --bs-box-shadow-inset: inset 0 1px 2px rgba(0, 0, 0, 0.075);

  /* Focus ring */
  --bs-focus-ring-width: 0.25rem;
  --bs-focus-ring-opacity: 0.25;
  --bs-focus-ring-color: rgba(13, 110, 253, 0.25);

  /* Form validation */
  --bs-form-valid-color: #198754;
  --bs-form-valid-border-color: #198754;
  --bs-form-invalid-color: #dc3545;
  --bs-form-invalid-border-color: #dc3545;
}
```

---

### Dark Mode

These variables are **scoped to dark mode** only, applied via the `[data-bs-theme=dark]` selector:

```css
[data-bs-theme=dark] {
  color-scheme: dark;

  /* Body */
  --bs-body-color: #dee2e6;
  --bs-body-color-rgb: 222, 226, 230;
  --bs-body-bg: #212529;
  --bs-body-bg-rgb: 33, 37, 41;

  /* Contextual colors */
  --bs-emphasis-color: #fff;
  --bs-emphasis-color-rgb: 255, 255, 255;
  --bs-secondary-color: rgba(222, 226, 230, 0.75);
  --bs-secondary-color-rgb: 222, 226, 230;
  --bs-secondary-bg: #343a40;
  --bs-secondary-bg-rgb: 52, 58, 64;
  --bs-tertiary-color: rgba(222, 226, 230, 0.5);
  --bs-tertiary-color-rgb: 222, 226, 230;
  --bs-tertiary-bg: #2b3035;
  --bs-tertiary-bg-rgb: 43, 48, 53;

  /* Theme text emphasis */
  --bs-primary-text-emphasis: #6ea8fe;
  --bs-secondary-text-emphasis: #a7acb1;
  --bs-success-text-emphasis: #75b798;
  --bs-info-text-emphasis: #6edff6;
  --bs-warning-text-emphasis: #ffda6a;
  --bs-danger-text-emphasis: #ea868f;
  --bs-light-text-emphasis: #f8f9fa;
  --bs-dark-text-emphasis: #dee2e6;

  /* Theme subtle backgrounds */
  --bs-primary-bg-subtle: #031633;
  --bs-secondary-bg-subtle: #161719;
  --bs-success-bg-subtle: #051b11;
  --bs-info-bg-subtle: #032830;
  --bs-warning-bg-subtle: #332701;
  --bs-danger-bg-subtle: #2c0b0e;
  --bs-light-bg-subtle: #343a40;
  --bs-dark-bg-subtle: #1a1d20;

  /* Theme subtle borders */
  --bs-primary-border-subtle: #084298;
  --bs-secondary-border-subtle: #41464b;
  --bs-success-border-subtle: #0f5132;
  --bs-info-border-subtle: #087990;
  --bs-warning-border-subtle: #997404;
  --bs-danger-border-subtle: #842029;
  --bs-light-border-subtle: #495057;
  --bs-dark-border-subtle: #343a40;

  /* Headings & links */
  --bs-heading-color: inherit;
  --bs-link-color: #6ea8fe;
  --bs-link-hover-color: #8bb9fe;
  --bs-link-color-rgb: 110, 168, 254;
  --bs-link-hover-color-rgb: 139, 185, 254;

  /* Code & highlight */
  --bs-code-color: #e685b5;
  --bs-highlight-color: #dee2e6;
  --bs-highlight-bg: #664d03;

  /* Borders */
  --bs-border-color: #495057;
  --bs-border-color-translucent: rgba(255, 255, 255, 0.15);

  /* Form validation */
  --bs-form-valid-color: #75b798;
  --bs-form-valid-border-color: #75b798;
  --bs-form-invalid-color: #ea868f;
  --bs-form-invalid-border-color: #ea868f;
}
```

---

## Component Variables

Bootstrap 5 increasingly uses CSS custom properties as **local variables** for individual components. Benefits include:

- Reduced compiled CSS output
- Prevents style inheritance in places like nested tables
- Enables basic restyling and extending **after Sass compilation** without recompiling

Components currently using CSS variables include tables, navbars (from v5.2.0), and grids (primarily for gutters and the opt-in CSS grid). More components will adopt this approach in future versions.

Wherever possible, Bootstrap assigns CSS variables at the **base component level** (e.g. `.navbar` for navbars and all sub-components). This makes customization predictable — you always know where to look.

---

## Prefix

Most CSS variables use a prefix to prevent naming collisions with your codebase. The default prefix is `bs-` (note the trailing dash), added in addition to the required `--` that all CSS variables use.

Customize the prefix via the `$prefix` Sass variable:

```scss
// Default
$prefix: "bs-"; // outputs --bs-*

// Custom
$prefix: "my-app-"; // outputs --my-app-*
```

---

## Examples

CSS variables offer the same flexibility as Sass variables, but work **directly in the browser** without any compilation step. For example, resetting font and link styles using CSS variables:

```css
body {
  font: 1rem/1.5 var(--bs-font-sans-serif);
}

a {
  color: var(--bs-blue);
}
```

Using a theme color with `rgba()` via the `-rgb` variable:

```css
.custom-overlay {
  background-color: rgba(var(--bs-primary-rgb), 0.5);
}
```

Overriding a component's local CSS variable without touching Sass:

```css
/* Override navbar background for a specific instance */
.navbar {
  --bs-navbar-bg: #1a1a2e;
}
```

---

## Focus Variables (v5.3.0+)

Bootstrap provides custom `:focus` styles using a combination of Sass and CSS variables. These can be applied to specific components and elements — Bootstrap does **not** yet globally override all `:focus` styles.

### Sass defaults (customizable before compiling)

```scss
// scss/_variables.scss

$focus-ring-width:      .25rem;
$focus-ring-opacity:    .25;
$focus-ring-color:      rgba($primary, $focus-ring-opacity);
$focus-ring-blur:       0;
$focus-ring-box-shadow: 0 0 $focus-ring-blur $focus-ring-width $focus-ring-color;
```

### CSS variable output (customizable at runtime)

These Sass variables are then assigned to `:root` level CSS variables, including `x` and `y` offset options (defaulting to `0`):

```scss
// scss/_root.scss

--#{$prefix}focus-ring-width:   #{$focus-ring-width};
--#{$prefix}focus-ring-opacity: #{$focus-ring-opacity};
--#{$prefix}focus-ring-color:   #{$focus-ring-color};
```

Which outputs as:

```css
:root {
  --bs-focus-ring-width: 0.25rem;
  --bs-focus-ring-opacity: 0.25;
  --bs-focus-ring-color: rgba(13, 110, 253, 0.25);
}
```

---

## Grid Breakpoints

Bootstrap includes grid breakpoints as CSS variables (except for `xs`):

```css
:root {
  --bs-breakpoint-sm: 576px;
  --bs-breakpoint-md: 768px;
  --bs-breakpoint-lg: 992px;
  --bs-breakpoint-xl: 1200px;
  --bs-breakpoint-xxl: 1400px;
}
```

> **Important limitation:** CSS variables **do not work inside media queries**. This is by design in the CSS specification and may change in the future with support for `env()` variables. In the meantime, use these variables in other CSS contexts or in JavaScript — but not in `@media` rules.

### Valid usage — in JavaScript

```javascript
const breakpointMd = getComputedStyle(document.documentElement)
  .getPropertyValue('--bs-breakpoint-md');
// returns "768px"
```

### Valid usage — in other CSS properties

```css
.custom-element {
  min-width: var(--bs-breakpoint-md); /* ✓ works */
}
```

### Invalid usage — inside media queries

```css
/* ✗ Does NOT work */
@media (min-width: var(--bs-breakpoint-md)) {
  ...
}
```

---

## Variable Categories at a Glance

| Category | Example variables |
|---|---|
| Base colors | `--bs-blue`, `--bs-red`, `--bs-green` |
| Gray scale | `--bs-gray-100` through `--bs-gray-900` |
| Theme colors | `--bs-primary`, `--bs-danger`, `--bs-success` |
| RGB variants | `--bs-primary-rgb`, `--bs-danger-rgb` |
| Subtle backgrounds | `--bs-primary-bg-subtle`, `--bs-danger-bg-subtle` |
| Subtle borders | `--bs-primary-border-subtle` |
| Text emphasis | `--bs-primary-text-emphasis` |
| Typography | `--bs-font-sans-serif`, `--bs-body-font-size` |
| Body | `--bs-body-color`, `--bs-body-bg` |
| Borders | `--bs-border-color`, `--bs-border-radius` |
| Shadows | `--bs-box-shadow`, `--bs-box-shadow-sm` |
| Focus ring | `--bs-focus-ring-width`, `--bs-focus-ring-color` |
| Form validation | `--bs-form-valid-color`, `--bs-form-invalid-color` |
| Grid breakpoints | `--bs-breakpoint-sm` through `--bs-breakpoint-xxl` |

---

