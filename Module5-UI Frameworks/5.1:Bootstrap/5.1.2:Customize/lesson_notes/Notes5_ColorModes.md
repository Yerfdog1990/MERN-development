# Bootstrap — Color Modes

---

## Overview

Bootstrap supports **color modes** (themes) as of **v5.3.0**. This includes a default light mode and a new dark mode, with the ability to create fully custom color modes. Color modes are controlled via the `data-bs-theme` attribute and can be applied globally or scoped to individual components.

---

## Dark Mode

Bootstrap's dark mode can be toggled:

- **Globally** on the `<html>` element
- **Per component/element** using `data-bs-theme` on any parent element

> **Note:** Bootstrap does not ship a built-in color mode picker, but one is available from Bootstrap's own documentation.

### Example — Per-component color mode

Apply `data-bs-theme="light"` or `data-bs-theme="dark"` to a parent element to lock that component to a specific theme, regardless of the global color mode:

```html
<!-- Light dropdown -->
<div class="dropdown" data-bs-theme="light">
  <button class="btn btn-secondary dropdown-toggle" type="button"
    id="dropdownMenuButtonLight" data-bs-toggle="dropdown" aria-expanded="false">
    Default dropdown
  </button>
  <ul class="dropdown-menu" aria-labelledby="dropdownMenuButtonLight">
    <li><a class="dropdown-item active" href="#">Action</a></li>
    <li><a class="dropdown-item" href="#">Action</a></li>
    <li><a class="dropdown-item" href="#">Another action</a></li>
    <li><a class="dropdown-item" href="#">Something else here</a></li>
    <li><hr class="dropdown-divider"></li>
    <li><a class="dropdown-item" href="#">Separated link</a></li>
  </ul>
</div>

<!-- Dark dropdown -->
<div class="dropdown" data-bs-theme="dark">
  <button class="btn btn-secondary dropdown-toggle" type="button"
    id="dropdownMenuButtonDark" data-bs-toggle="dropdown" aria-expanded="false">
    Dark dropdown
  </button>
  <ul class="dropdown-menu" aria-labelledby="dropdownMenuButtonDark">
    <li><a class="dropdown-item active" href="#">Action</a></li>
    <li><a class="dropdown-item" href="#">Action</a></li>
    <li><a class="dropdown-item" href="#">Another action</a></li>
    <li><a class="dropdown-item" href="#">Something else here</a></li>
    <li><hr class="dropdown-divider"></li>
    <li><a class="dropdown-item" href="#">Separated link</a></li>
  </ul>
</div>
```

---

## How It Works

- Color mode styles are controlled by the **`data-bs-theme` attribute**
- Applied to `<html>` → affects everything
- Applied to a component or element → scoped to that element only
- For each color mode, new overrides must be written for the **shared global CSS variables**
- Bootstrap handles dark mode overrides in `_root.scss` using the `color-mode()` mixin:

```scss
// Color mode variables in _root.scss
@include color-mode(dark) {
  // CSS variable overrides here...
}
```

- A custom `_variables-dark.scss` file powers the dark mode CSS variable overrides
- This file is required for Bootstrap's dark mode for two reasons:
    1. Provides a single place to reset global colors
    2. Some Sass variables must be overridden for background images embedded in CSS (accordions, form components, etc.)

---

## Usage

### Enable Dark Mode Globally

Add `data-bs-theme="dark"` to the `<html>` element to apply dark mode across the entire project:

```html
<!doctype html>
<html lang="en" data-bs-theme="dark">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Bootstrap demo</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/css/bootstrap.min.css"
      rel="stylesheet"
      integrity="sha384-sRIl4kxILFvY47J16cr9ZwB07vP4J8+LH7qKQnuqkuIAvNWLzeN8tE5YBujZqJLB"
      crossorigin="anonymous">
  </head>
  <body>
    <h1>Hello, world!</h1>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/js/bootstrap.bundle.min.js"
      integrity="sha384-FKyoEForCGlyvwx9Hj09JcYn3nv7wiPVlz7YYwJrWVcXK/BmnVDxM+D2scQbITxI"
      crossorigin="anonymous"></script>
  </body>
</html>
```

---

## Building with Sass

Dark mode is controlled via **data attributes**, not media queries, and does not automatically toggle the color mode. You can:

- **Disable dark mode entirely** by setting `$enable-dark-mode: false` in Sass
- **Switch to media query mode** by changing the `$color-mode-type` Sass variable

### Data attribute approach (default)

```scss
$color-mode-type: data;

@include color-mode(dark) {
  .element {
    color: var(--bs-primary-text-emphasis);
    background-color: var(--bs-primary-bg-subtle);
  }
}
```

**Compiled output:**

```css
[data-bs-theme=dark] .element {
  color: var(--bs-primary-text-emphasis);
  background-color: var(--bs-primary-bg-subtle);
}
```

### Media query approach

```scss
$color-mode-type: media-query;

@include color-mode(dark) {
  .element {
    color: var(--bs-primary-text-emphasis);
    background-color: var(--bs-primary-bg-subtle);
  }
}
```

**Compiled output:**

```css
@media (prefers-color-scheme: dark) {
  .element {
    color: var(--bs-primary-text-emphasis);
    background-color: var(--bs-primary-bg-subtle);
  }
}
```

> **Important:** Using the media query approach removes the ability to toggle themes on a **per-component basis**.

---

## Custom Color Modes

You can create your own color modes beyond light and dark. Create a `data-bs-theme` selector with a custom value and override CSS/Sass variables as needed.

### Example — "Blue" theme

```scss
// site/src/scss/_content.scss

[data-bs-theme="blue"] {
  --bs-body-color: var(--bs-white);
  --bs-body-color-rgb: #{to-rgb($white)};
  --bs-body-bg: var(--bs-blue);
  --bs-body-bg-rgb: #{to-rgb($blue)};
  --bs-tertiary-bg: #{$blue-600};

  .dropdown-menu {
    --bs-dropdown-bg: #{mix($blue-500, $blue-600)};
    --bs-dropdown-link-active-bg: #{$blue-700};
  }

  .btn-secondary {
    --bs-btn-bg: #{mix($gray-600, $blue-400, .5)};
    --bs-btn-border-color: #{rgba($white, .25)};
    --bs-btn-hover-bg: #{darken(mix($gray-600, $blue-400, .5), 5%)};
    --bs-btn-hover-border-color: #{rgba($white, .25)};
    --bs-btn-active-bg: #{darken(mix($gray-600, $blue-400, .5), 10%)};
    --bs-btn-active-border-color: #{rgba($white, .5)};
    --bs-btn-focus-border-color: #{rgba($white, .5)};
    --bs-btn-focus-box-shadow: 0 0 0 .25rem rgba(255, 255, 255, .2);
  }
}
```

Apply it in HTML:

```html
<div data-bs-theme="blue">
  ...
</div>
```

---

## JavaScript — Color Mode Toggler

To allow users to toggle color modes, create a toggle element that controls the `data-bs-theme` attribute on `<html>`. The toggler below:

- Defers initially to the user's system color mode
- Saves preference to `localStorage`
- Supports `auto`, `light`, and `dark` modes

> **Tip:** Include this JavaScript at the **top of your page** to reduce screen flickering on page reload.

```javascript
/*!
 * Color mode toggler for Bootstrap's docs (https://getbootstrap.com/)
 * Copyright 2011-2025 The Bootstrap Authors
 * Licensed under the Creative Commons Attribution 3.0 Unported License.
 */

(() => {
  'use strict'

  const getStoredTheme = () => localStorage.getItem('theme')
  const setStoredTheme = theme => localStorage.setItem('theme', theme)

  const getPreferredTheme = () => {
    const storedTheme = getStoredTheme()
    if (storedTheme) {
      return storedTheme
    }
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
  }

  const setTheme = theme => {
    if (theme === 'auto') {
      document.documentElement.setAttribute('data-bs-theme',
        (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'))
    } else {
      document.documentElement.setAttribute('data-bs-theme', theme)
    }
  }

  setTheme(getPreferredTheme())

  const showActiveTheme = (theme, focus = false) => {
    const themeSwitcher = document.querySelector('#bd-theme')

    if (!themeSwitcher) {
      return
    }

    const themeSwitcherText = document.querySelector('#bd-theme-text')
    const activeThemeIcon = document.querySelector('.theme-icon-active use')
    const btnToActive = document.querySelector(`[data-bs-theme-value="${theme}"]`)
    const svgOfActiveBtn = btnToActive.querySelector('svg use').getAttribute('href')

    document.querySelectorAll('[data-bs-theme-value]').forEach(element => {
      element.classList.remove('active')
      element.setAttribute('aria-pressed', 'false')
    })

    btnToActive.classList.add('active')
    btnToActive.setAttribute('aria-pressed', 'true')
    activeThemeIcon.setAttribute('href', svgOfActiveBtn)
    const themeSwitcherLabel = `${themeSwitcherText.textContent} (${btnToActive.dataset.bsThemeValue})`
    themeSwitcher.setAttribute('aria-label', themeSwitcherLabel)

    if (focus) {
      themeSwitcher.focus()
    }
  }

  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', () => {
    const storedTheme = getStoredTheme()
    if (storedTheme !== 'light' && storedTheme !== 'dark') {
      setTheme(getPreferredTheme())
    }
  })

  window.addEventListener('DOMContentLoaded', () => {
    showActiveTheme(getPreferredTheme())

    document.querySelectorAll('[data-bs-theme-value]')
      .forEach(toggle => {
        toggle.addEventListener('click', () => {
          const theme = toggle.getAttribute('data-bs-theme-value')
          setStoredTheme(theme)
          setTheme(theme)
          showActiveTheme(theme, true)
        })
      })
  })
})()
```

---

## Adding Theme Colors

Adding a new color to `$theme-colors` alone is **not enough** for components like alerts and list groups. New colors must also be defined in the following maps for both light and dark modes:

| Map | Mode |
|---|---|
| `$theme-colors-text` | Light |
| `$theme-colors-bg-subtle` | Light |
| `$theme-colors-border-subtle` | Light |
| `$theme-colors-text-dark` | Dark |
| `$theme-colors-bg-subtle-dark` | Dark |
| `$theme-colors-border-subtle-dark` | Dark |

> **Note:** This is a manual process — Sass cannot generate its own variables from an existing variable or map.

### Full example — Adding a custom color for both modes

```scss
// Required
@import "functions";
@import "variables";
@import "variables-dark";

// Add custom color to $theme-colors
$custom-colors: (
  "custom-color": #712cf9
);
$theme-colors: map-merge($theme-colors, $custom-colors);

@import "maps";
@import "mixins";
@import "utilities";

// Light mode maps
$custom-colors-text:           ("custom-color": #712cf9);
$custom-colors-bg-subtle:      ("custom-color": #e1d2fe);
$custom-colors-border-subtle:  ("custom-color": #bfa1fc);

$theme-colors-text:           map-merge($theme-colors-text, $custom-colors-text);
$theme-colors-bg-subtle:      map-merge($theme-colors-bg-subtle, $custom-colors-bg-subtle);
$theme-colors-border-subtle:  map-merge($theme-colors-border-subtle, $custom-colors-border-subtle);

// Dark mode maps
$custom-colors-text-dark:           ("custom-color": #e1d2f2);
$custom-colors-bg-subtle-dark:      ("custom-color": #8951fa);
$custom-colors-border-subtle-dark:  ("custom-color": #e1d2f2);

$theme-colors-text-dark:           map-merge($theme-colors-text-dark, $custom-colors-text-dark);
$theme-colors-bg-subtle-dark:      map-merge($theme-colors-bg-subtle-dark, $custom-colors-bg-subtle-dark);
$theme-colors-border-subtle-dark:  map-merge($theme-colors-border-subtle-dark, $custom-colors-border-subtle-dark);

// Remainder of Bootstrap imports
@import "root";
@import "reboot";
// etc.
```

---

## CSS Variables

Dozens of root-level CSS variables are overridden for dark mode, scoped to the `data-bs-theme` selector (or `prefers-color-scheme` media query). These serve as a guide for creating custom color modes.

```scss
// scss/_root.scss

--#{$prefix}body-color: #{$body-color-dark};
--#{$prefix}body-color-rgb: #{to-rgb($body-color-dark)};
--#{$prefix}body-bg: #{$body-bg-dark};
--#{$prefix}body-bg-rgb: #{to-rgb($body-bg-dark)};

--#{$prefix}emphasis-color: #{$body-emphasis-color-dark};
--#{$prefix}emphasis-color-rgb: #{to-rgb($body-emphasis-color-dark)};

--#{$prefix}secondary-color: #{$body-secondary-color-dark};
--#{$prefix}secondary-color-rgb: #{to-rgb($body-secondary-color-dark)};
--#{$prefix}secondary-bg: #{$body-secondary-bg-dark};
--#{$prefix}secondary-bg-rgb: #{to-rgb($body-secondary-bg-dark)};

--#{$prefix}tertiary-color: #{$body-tertiary-color-dark};
--#{$prefix}tertiary-color-rgb: #{to-rgb($body-tertiary-color-dark)};
--#{$prefix}tertiary-bg: #{$body-tertiary-bg-dark};
--#{$prefix}tertiary-bg-rgb: #{to-rgb($body-tertiary-bg-dark)};

@each $color, $value in $theme-colors-text-dark {
  --#{$prefix}#{$color}-text-emphasis: #{$value};
}

@each $color, $value in $theme-colors-bg-subtle-dark {
  --#{$prefix}#{$color}-bg-subtle: #{$value};
}

@each $color, $value in $theme-colors-border-subtle-dark {
  --#{$prefix}#{$color}-border-subtle: #{$value};
}

--#{$prefix}heading-color: #{$headings-color-dark};

--#{$prefix}link-color: #{$link-color-dark};
--#{$prefix}link-hover-color: #{$link-hover-color-dark};
--#{$prefix}link-color-rgb: #{to-rgb($link-color-dark)};
--#{$prefix}link-hover-color-rgb: #{to-rgb($link-hover-color-dark)};

--#{$prefix}code-color: #{$code-color-dark};
--#{$prefix}highlight-color: #{$mark-color-dark};
--#{$prefix}highlight-bg: #{$mark-bg-dark};

--#{$prefix}border-color: #{$border-color-dark};
--#{$prefix}border-color-translucent: #{$border-color-translucent-dark};

--#{$prefix}form-valid-color: #{$form-valid-color-dark};
--#{$prefix}form-valid-border-color: #{$form-valid-border-color-dark};
--#{$prefix}form-invalid-color: #{$form-invalid-color-dark};
--#{$prefix}form-invalid-border-color: #{$form-invalid-border-color-dark};
```

---

## Sass Variables (`_variables-dark.scss`)

Dark mode CSS variables are partially generated from Sass variables in `_variables-dark.scss`. This also handles SVG overrides for embedded component images.

```scss
// scss/_variables-dark.scss

// Text emphasis (tinted for dark backgrounds)
$primary-text-emphasis-dark:    tint-color($primary, 40%);
$secondary-text-emphasis-dark:  tint-color($secondary, 40%);
$success-text-emphasis-dark:    tint-color($success, 40%);
$info-text-emphasis-dark:       tint-color($info, 40%);
$warning-text-emphasis-dark:    tint-color($warning, 40%);
$danger-text-emphasis-dark:     tint-color($danger, 40%);
$light-text-emphasis-dark:      $gray-100;
$dark-text-emphasis-dark:       $gray-300;

// Subtle backgrounds (heavily shaded)
$primary-bg-subtle-dark:    shade-color($primary, 80%);
$secondary-bg-subtle-dark:  shade-color($secondary, 80%);
$success-bg-subtle-dark:    shade-color($success, 80%);
$info-bg-subtle-dark:       shade-color($info, 80%);
$warning-bg-subtle-dark:    shade-color($warning, 80%);
$danger-bg-subtle-dark:     shade-color($danger, 80%);
$light-bg-subtle-dark:      $gray-800;
$dark-bg-subtle-dark:       mix($gray-800, $black);

// Subtle borders (moderately shaded)
$primary-border-subtle-dark:    shade-color($primary, 40%);
$secondary-border-subtle-dark:  shade-color($secondary, 40%);
$success-border-subtle-dark:    shade-color($success, 40%);
$info-border-subtle-dark:       shade-color($info, 40%);
$warning-border-subtle-dark:    shade-color($warning, 40%);
$danger-border-subtle-dark:     shade-color($danger, 40%);
$light-border-subtle-dark:      $gray-700;
$dark-border-subtle-dark:       $gray-800;

// Body colors
$body-color-dark:               $gray-300;
$body-bg-dark:                  $gray-900;
$body-secondary-color-dark:     rgba($body-color-dark, .75);
$body-secondary-bg-dark:        $gray-800;
$body-tertiary-color-dark:      rgba($body-color-dark, .5);
$body-tertiary-bg-dark:         mix($gray-800, $gray-900, 50%);
$body-emphasis-color-dark:      $white;
$border-color-dark:             $gray-700;
$border-color-translucent-dark: rgba($white, .15);
$headings-color-dark:           inherit;
$link-color-dark:               tint-color($primary, 40%);
$link-hover-color-dark:         shift-color($link-color-dark, -$link-shade-percentage);
$code-color-dark:               tint-color($code-color, 40%);
$mark-color-dark:               $body-color-dark;
$mark-bg-dark:                  $yellow-800;

// Forms
$form-select-indicator-color-dark:  $body-color-dark;
$form-valid-color-dark:             $green-300;
$form-valid-border-color-dark:      $green-300;
$form-invalid-color-dark:           $red-300;
$form-invalid-border-color-dark:    $red-300;

// Accordion
$accordion-icon-color-dark:         $primary-text-emphasis-dark;
$accordion-icon-active-color-dark:  $primary-text-emphasis-dark;
```

---

## Sass Mixins (`_color-mode.scss`)

The `color-mode()` mixin scopes color mode styles to either the `data-bs-theme` attribute or a `prefers-color-scheme` media query, depending on `$color-mode-type`.

```scss
// scss/mixins/_color-mode.scss

@mixin color-mode($mode: light, $root: false) {
  @if $color-mode-type == "media-query" {
    @if $root == true {
      @media (prefers-color-scheme: $mode) {
        :root {
          @content;
        }
      }
    } @else {
      @media (prefers-color-scheme: $mode) {
        @content;
      }
    }
  } @else {
    [data-bs-theme="#{$mode}"] {
      @content;
    }
  }
}
```

| `$color-mode-type` | Output selector |
|---|---|
| `data` (default) | `[data-bs-theme="dark"] { ... }` |
| `media-query` | `@media (prefers-color-scheme: dark) { ... }` |

---

