# Bootstrap Dropdowns 

Toggle contextual overlays for displaying lists of links and more with the Bootstrap dropdown plugin.

## Table of Contents
- [Overview](#overview)
- [Accessibility](#accessibility)
- [Single Button](#single-button)
- [Split Button](#split-button)
- [Sizing](#sizing)
- [Dark Dropdowns](#dark-dropdowns)
- [Directions](#directions)
- [Menu Items](#menu-items)
- [Menu Alignment](#menu-alignment)
- [Menu Content](#menu-content)
- [Dropdown Options](#dropdown-options)
- [Auto Close Behavior](#auto-close-behavior)
- [CSS Variables](#css-variables)
- [Sass Variables](#sass-variables)
- [Sass Mixins](#sass-mixins)
- [Usage: Data Attributes & JavaScript](#usage-data-attributes--javascript)
- [Options Reference](#options-reference)
- [Methods Reference](#methods-reference)
- [Events Reference](#events-reference)

---

## Overview

Dropdowns are **toggleable, contextual overlays** for displaying lists of links and more. They are:

- Made interactive with the included Bootstrap dropdown JavaScript plugin.
- **Triggered by clicking**, not hovering — this is an intentional design decision.
- Powered by **[Popper](https://popper.js.org/)** for dynamic positioning and viewport detection.

> **Popper requirement:** Include `popper.min.js` before Bootstrap's JS, or use `bootstrap.bundle.min.js` / `bootstrap.bundle.js` which already includes Popper. Popper is **not** used in navbars since dynamic positioning isn't needed there.

**Basic structure:** Wrap the toggle trigger and the dropdown menu inside a `.dropdown` (or any element with `position: relative`).

```html
<div class="dropdown">
  <!-- trigger -->
  <!-- .dropdown-menu -->
</div>
```

---

## Accessibility

Bootstrap's dropdowns are **generic** components, not true ARIA `role="menu"` widgets. True ARIA menus are only appropriate for application-like menus that trigger actions/functions and can only contain specific content types (menu items, checkbox items, radio items, etc.).

Because Bootstrap dropdowns can contain any content (forms, inputs, links), Bootstrap does **not** automatically add `role` or `aria-*` attributes — authors must add those themselves when appropriate.

**What Bootstrap does handle automatically:**
- Moving through `.dropdown-item` elements with cursor keys.
- Closing the menu with the `Esc` key.

---

## Single Button

Any `.btn` can become a dropdown toggle. Use `<button>` elements (recommended) or `<a>` elements.

### Button trigger

```html
<div class="dropdown">
  <button class="btn btn-secondary dropdown-toggle" type="button"
    data-bs-toggle="dropdown" aria-expanded="false">
    Dropdown button
  </button>
  <ul class="dropdown-menu">
    <li><a class="dropdown-item" href="#">Action</a></li>
    <li><a class="dropdown-item" href="#">Another action</a></li>
    <li><a class="dropdown-item" href="#">Something else here</a></li>
  </ul>
</div>
```

### Link trigger

If you must use an `<a>`, add `role="button"` to convey purpose to screen readers.

```html
<div class="dropdown">
  <a class="btn btn-secondary dropdown-toggle" href="#"
    role="button" data-bs-toggle="dropdown" aria-expanded="false">
    Dropdown link
  </a>
  <ul class="dropdown-menu">
    <li><a class="dropdown-item" href="#">Action</a></li>
    <li><a class="dropdown-item" href="#">Another action</a></li>
    <li><a class="dropdown-item" href="#">Something else here</a></li>
  </ul>
</div>
```

### With divider (works on any button variant)

```html
<div class="btn-group">
  <button type="button" class="btn btn-danger dropdown-toggle"
    data-bs-toggle="dropdown" aria-expanded="false">
    Danger
  </button>
  <ul class="dropdown-menu">
    <li><a class="dropdown-item" href="#">Action</a></li>
    <li><a class="dropdown-item" href="#">Another action</a></li>
    <li><a class="dropdown-item" href="#">Something else here</a></li>
    <li><hr class="dropdown-divider"></li>
    <li><a class="dropdown-item" href="#">Separated link</a></li>
  </ul>
</div>
```

---

## Split Button

A split button separates the main action from the dropdown toggle. Add `.dropdown-toggle-split` to the caret button to reduce its horizontal padding by 25% and properly center the caret.

```html
<div class="btn-group">
  <!-- Main action button -->
  <button type="button" class="btn btn-danger">Danger</button>

  <!-- Dropdown caret toggle -->
  <button type="button" class="btn btn-danger dropdown-toggle dropdown-toggle-split"
    data-bs-toggle="dropdown" aria-expanded="false">
    <span class="visually-hidden">Toggle Dropdown</span>
  </button>

  <ul class="dropdown-menu">
    <li><a class="dropdown-item" href="#">Action</a></li>
    <li><a class="dropdown-item" href="#">Another action</a></li>
    <li><a class="dropdown-item" href="#">Something else here</a></li>
    <li><hr class="dropdown-divider"></li>
    <li><a class="dropdown-item" href="#">Separated link</a></li>
  </ul>
</div>
```

**Key difference from single button:**
- `.dropdown-toggle-split` is added to the caret button only.
- The main button has no `data-bs-toggle` — clicking it performs the primary action.
- `<span class="visually-hidden">` provides screen reader text for the caret-only button.

---

## Sizing

Dropdowns work with all button sizes. Add `.btn-lg` or `.btn-sm` to the button(s).

### Large buttons

```html
<!-- Large single dropdown -->
<div class="btn-group">
  <button class="btn btn-secondary btn-lg dropdown-toggle" type="button"
    data-bs-toggle="dropdown" aria-expanded="false">
    Large button
  </button>
  <ul class="dropdown-menu">...</ul>
</div>

<!-- Large split dropdown -->
<div class="btn-group">
  <button class="btn btn-secondary btn-lg" type="button">Large split button</button>
  <button type="button" class="btn btn-lg btn-secondary dropdown-toggle dropdown-toggle-split"
    data-bs-toggle="dropdown" aria-expanded="false">
    <span class="visually-hidden">Toggle Dropdown</span>
  </button>
  <ul class="dropdown-menu">...</ul>
</div>
```

### Small buttons

```html
<!-- Small single dropdown -->
<div class="btn-group">
  <button class="btn btn-secondary btn-sm dropdown-toggle" type="button"
    data-bs-toggle="dropdown" aria-expanded="false">
    Small button
  </button>
  <ul class="dropdown-menu">...</ul>
</div>

<!-- Small split dropdown -->
<div class="btn-group">
  <button class="btn btn-secondary btn-sm" type="button">Small split button</button>
  <button type="button" class="btn btn-sm btn-secondary dropdown-toggle dropdown-toggle-split"
    data-bs-toggle="dropdown" aria-expanded="false">
    <span class="visually-hidden">Toggle Dropdown</span>
  </button>
  <ul class="dropdown-menu">...</ul>
</div>
```

---

## Dark Dropdowns

> ⚠️ **`.dropdown-menu-dark` was deprecated in Bootstrap v5.3.0.** Use `data-bs-theme="dark"` instead.

### Recommended approach (v5.3.0+)

Apply `data-bs-theme="dark"` to the `.dropdown`, a parent wrapper, or the root element.

```html
<div class="dropdown" data-bs-theme="dark">
  <button class="btn btn-secondary dropdown-toggle" type="button"
    data-bs-toggle="dropdown" aria-expanded="false">
    Dropdown button
  </button>
  <ul class="dropdown-menu">
    <li><a class="dropdown-item active" href="#">Action</a></li>
    <li><a class="dropdown-item" href="#">Another action</a></li>
    <li><a class="dropdown-item" href="#">Something else here</a></li>
    <li><hr class="dropdown-divider"></li>
    <li><a class="dropdown-item" href="#">Separated link</a></li>
  </ul>
</div>
```

### Old approach (deprecated, avoid)

```html
<!-- ❌ Deprecated -->
<ul class="dropdown-menu dropdown-menu-dark">...</ul>
```

### In a dark navbar

```html
<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Navbar</a>
    <div class="collapse navbar-collapse" id="navbarNavDarkDropdown">
      <ul class="navbar-nav">
        <li class="nav-item dropdown">
          <button class="btn btn-dark dropdown-toggle"
            data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </button>
          <ul class="dropdown-menu dropdown-menu-dark">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</nav>
```

---

## Directions

Control which direction the dropdown menu opens by changing the class on the **parent element**. Directions are flipped automatically in RTL mode.

| Parent class | Menu opens... |
|---|---|
| `.dropdown` (default) | Below the toggle |
| `.dropdown-center` | Below, centered on the toggle |
| `.dropup` | Above the toggle |
| `.dropup-center .dropup` | Above, centered on the toggle |
| `.dropend` | To the right |
| `.dropstart` | To the left |

### Centered dropdown

```html
<div class="dropdown-center">
  <button class="btn btn-secondary dropdown-toggle" type="button"
    data-bs-toggle="dropdown" aria-expanded="false">
    Centered dropdown
  </button>
  <ul class="dropdown-menu">
    <li><a class="dropdown-item" href="#">Action</a></li>
    <li><a class="dropdown-item" href="#">Action two</a></li>
    <li><a class="dropdown-item" href="#">Action three</a></li>
  </ul>
</div>
```

### Dropup

```html
<div class="btn-group dropup">
  <button type="button" class="btn btn-secondary dropdown-toggle"
    data-bs-toggle="dropdown" aria-expanded="false">
    Dropup
  </button>
  <ul class="dropdown-menu">...</ul>
</div>
```

### Dropup centered

```html
<div class="dropup-center dropup">
  <button class="btn btn-secondary dropdown-toggle" type="button"
    data-bs-toggle="dropdown" aria-expanded="false">
    Centered dropup
  </button>
  <ul class="dropdown-menu">...</ul>
</div>
```

### Dropend (right)

```html
<div class="btn-group dropend">
  <button type="button" class="btn btn-secondary dropdown-toggle"
    data-bs-toggle="dropdown" aria-expanded="false">
    Dropend
  </button>
  <ul class="dropdown-menu">...</ul>
</div>
```

### Dropstart (left)

```html
<!-- Note: for split dropstart, the caret button comes BEFORE the menu and BEFORE the main button -->
<div class="btn-group dropstart">
  <button type="button" class="btn btn-secondary dropdown-toggle dropdown-toggle-split"
    data-bs-toggle="dropdown" aria-expanded="false">
    <span class="visually-hidden">Toggle Dropstart</span>
  </button>
  <ul class="dropdown-menu">...</ul>
  <button type="button" class="btn btn-secondary">Split dropstart</button>
</div>
```

---

## Menu Items

### Using `<a>` or `<button>` as items

```html
<ul class="dropdown-menu">
  <li><a class="dropdown-item" href="#">Link item</a></li>
  <li><button class="dropdown-item" type="button">Button item</button></li>
</ul>
```

### Non-interactive text items

Use `.dropdown-item-text` for plain text that is not clickable.

```html
<ul class="dropdown-menu">
  <li><span class="dropdown-item-text">Dropdown item text</span></li>
  <li><a class="dropdown-item" href="#">Action</a></li>
  <li><a class="dropdown-item" href="#">Another action</a></li>
</ul>
```

### Active items

Add `.active` to style an item as selected. Use `aria-current="true"` (or `aria-current="page"` for the current page) for accessibility.

```html
<ul class="dropdown-menu">
  <li><a class="dropdown-item" href="#">Regular link</a></li>
  <li><a class="dropdown-item active" href="#" aria-current="true">Active link</a></li>
  <li><a class="dropdown-item" href="#">Another link</a></li>
</ul>
```

### Disabled items

Add `.disabled` and `aria-disabled="true"` to style an item as non-interactive.

```html
<ul class="dropdown-menu">
  <li><a class="dropdown-item" href="#">Regular link</a></li>
  <li><a class="dropdown-item disabled" aria-disabled="true">Disabled link</a></li>
  <li><a class="dropdown-item" href="#">Another link</a></li>
</ul>
```

---

## Menu Alignment

By default, the menu aligns to the **left** of the toggle, 100% from the top of its parent.

### Right-align the menu

Add `.dropdown-menu-end` to the `.dropdown-menu`.

```html
<div class="btn-group">
  <button type="button" class="btn btn-secondary dropdown-toggle"
    data-bs-toggle="dropdown" aria-expanded="false">
    Right-aligned menu
  </button>
  <ul class="dropdown-menu dropdown-menu-end">
    <li><button class="dropdown-item" type="button">Action</button></li>
    <li><button class="dropdown-item" type="button">Another action</button></li>
  </ul>
</div>
```

### Responsive alignment

Use responsive breakpoint suffixes to change alignment at specific screen widths. **Requires `data-bs-display="static"`** to disable Popper's dynamic positioning.

| Class | Effect |
|---|---|
| `.dropdown-menu-sm-end` | Right-align on `sm` and up |
| `.dropdown-menu-md-end` | Right-align on `md` and up |
| `.dropdown-menu-lg-end` | Right-align on `lg` and up |
| `.dropdown-menu-xl-end` | Right-align on `xl` and up |
| `.dropdown-menu-xxl-end` | Right-align on `xxl` and up |

To switch from right to left at a breakpoint, combine `.dropdown-menu-end` with `.dropdown-menu-{breakpoint}-start`.

```html
<!-- Left-aligned by default, right-aligned on lg+ -->
<div class="btn-group">
  <button type="button" class="btn btn-secondary dropdown-toggle"
    data-bs-toggle="dropdown" data-bs-display="static" aria-expanded="false">
    Left-aligned but right aligned when large screen
  </button>
  <ul class="dropdown-menu dropdown-menu-lg-end">
    <li><button class="dropdown-item" type="button">Action</button></li>
  </ul>
</div>

<!-- Right-aligned by default, left-aligned on lg+ -->
<div class="btn-group">
  <button type="button" class="btn btn-secondary dropdown-toggle"
    data-bs-toggle="dropdown" data-bs-display="static" aria-expanded="false">
    Right-aligned but left aligned when large screen
  </button>
  <ul class="dropdown-menu dropdown-menu-end dropdown-menu-lg-start">
    <li><button class="dropdown-item" type="button">Action</button></li>
  </ul>
</div>
```

> **Note:** `data-bs-display="static"` is NOT needed for dropdowns inside navbars, since Popper isn't used there.

---

## Menu Content

### Headers

Label sections of a dropdown menu with `.dropdown-header`.

```html
<ul class="dropdown-menu">
  <li><h6 class="dropdown-header">Dropdown header</h6></li>
  <li><a class="dropdown-item" href="#">Action</a></li>
  <li><a class="dropdown-item" href="#">Another action</a></li>
</ul>
```

### Dividers

Separate groups of items with `<hr class="dropdown-divider">`.

```html
<ul class="dropdown-menu">
  <li><a class="dropdown-item" href="#">Action</a></li>
  <li><a class="dropdown-item" href="#">Another action</a></li>
  <li><a class="dropdown-item" href="#">Something else here</a></li>
  <li><hr class="dropdown-divider"></li>
  <li><a class="dropdown-item" href="#">Separated link</a></li>
</ul>
```

### Freeform text

Place any text content inside a dropdown with padding utilities. Set a `max-width` to constrain the menu.

```html
<div class="dropdown-menu p-4 text-body-secondary" style="max-width: 200px;">
  <p>Some example text that's free-flowing within the dropdown menu.</p>
  <p class="mb-0">And this is more example text.</p>
</div>
```

### Forms inside dropdowns

Embed a form directly in a dropdown menu using padding utilities for spacing.

```html
<div class="dropdown-menu">
  <form class="px-4 py-3">
    <div class="mb-3">
      <label for="dropdownEmail" class="form-label">Email address</label>
      <input type="email" class="form-control" id="dropdownEmail" placeholder="email@example.com">
    </div>
    <div class="mb-3">
      <label for="dropdownPassword" class="form-label">Password</label>
      <input type="password" class="form-control" id="dropdownPassword" placeholder="Password">
    </div>
    <div class="mb-3">
      <div class="form-check">
        <input type="checkbox" class="form-check-input" id="dropdownCheck">
        <label class="form-check-label" for="dropdownCheck">Remember me</label>
      </div>
    </div>
    <button type="submit" class="btn btn-primary">Sign in</button>
  </form>
  <div class="dropdown-divider"></div>
  <a class="dropdown-item" href="#">New around here? Sign up</a>
  <a class="dropdown-item" href="#">Forgot password?</a>
</div>
```

When the `<form>` itself is the dropdown menu, use `data-bs-auto-close="outside"` so clicking inside the form doesn't close it.

```html
<div class="dropdown">
  <button type="button" class="btn btn-primary dropdown-toggle"
    data-bs-toggle="dropdown" aria-expanded="false" data-bs-auto-close="outside">
    Dropdown form
  </button>
  <form class="dropdown-menu p-4">
    <!-- form fields... -->
    <button type="submit" class="btn btn-primary">Sign in</button>
  </form>
</div>
```

---

## Dropdown Options

Use `data-bs-offset` to shift the menu position, or `data-bs-reference` to change the reference element for Popper positioning.

```html
<div class="d-flex">
  <!-- Offset: shifts menu 10px horizontally, 20px vertically -->
  <div class="dropdown me-1">
    <button type="button" class="btn btn-secondary dropdown-toggle"
      data-bs-toggle="dropdown" aria-expanded="false" data-bs-offset="10,20">
      Offset
    </button>
    <ul class="dropdown-menu">...</ul>
  </div>

  <!-- Reference: positions menu relative to the parent btn-group instead of the toggle -->
  <div class="btn-group">
    <button type="button" class="btn btn-secondary">Reference</button>
    <button type="button" class="btn btn-secondary dropdown-toggle dropdown-toggle-split"
      data-bs-toggle="dropdown" aria-expanded="false" data-bs-reference="parent">
      <span class="visually-hidden">Toggle Dropdown</span>
    </button>
    <ul class="dropdown-menu">...</ul>
  </div>
</div>
```

---

## Auto Close Behavior

Control when the dropdown closes using `data-bs-auto-close` on the toggle button.

| Value | Closes when... |
|---|---|
| `true` (default) | Clicking inside **or** outside the menu |
| `false` | Only via toggle button, `.hide()`, or `.toggle()` method. Esc key also won't close it. |
| `'inside'` | Clicking **inside** the menu only |
| `'outside'` | Clicking **outside** the menu only |

> **Note:** Regardless of `autoClose` setting, the `Esc` key will always close the dropdown — except when `autoClose` is `false`.

```html
<!-- Default: closes on inside or outside click -->
<button class="btn btn-secondary dropdown-toggle" type="button"
  data-bs-toggle="dropdown" data-bs-auto-close="true" aria-expanded="false">
  Default dropdown
</button>

<!-- Stays open when clicking outside (useful for forms) -->
<button class="btn btn-secondary dropdown-toggle" type="button"
  data-bs-toggle="dropdown" data-bs-auto-close="outside" aria-expanded="false">
  Clickable outside
</button>

<!-- Only closes by clicking inside the menu -->
<button class="btn btn-secondary dropdown-toggle" type="button"
  data-bs-toggle="dropdown" data-bs-auto-close="inside" aria-expanded="false">
  Clickable inside
</button>

<!-- Manual close only — must call .hide() or .toggle() programmatically -->
<button class="btn btn-secondary dropdown-toggle" type="button"
  data-bs-toggle="dropdown" data-bs-auto-close="false" aria-expanded="false">
  Manual close
</button>
```

---

## CSS Variables

Added in **Bootstrap v5.2.0**. Dropdowns use local CSS variables on `.dropdown-menu` for real-time customization without recompiling Sass.

Defined in `scss/_dropdown.scss`:

```scss
--#{$prefix}dropdown-zindex: #{$zindex-dropdown};
--#{$prefix}dropdown-min-width: #{$dropdown-min-width};
--#{$prefix}dropdown-padding-x: #{$dropdown-padding-x};
--#{$prefix}dropdown-padding-y: #{$dropdown-padding-y};
--#{$prefix}dropdown-spacer: #{$dropdown-spacer};
--#{$prefix}dropdown-font-size: #{$dropdown-font-size};
--#{$prefix}dropdown-color: #{$dropdown-color};
--#{$prefix}dropdown-bg: #{$dropdown-bg};
--#{$prefix}dropdown-border-color: #{$dropdown-border-color};
--#{$prefix}dropdown-border-radius: #{$dropdown-border-radius};
--#{$prefix}dropdown-border-width: #{$dropdown-border-width};
--#{$prefix}dropdown-inner-border-radius: #{$dropdown-inner-border-radius};
--#{$prefix}dropdown-divider-bg: #{$dropdown-divider-bg};
--#{$prefix}dropdown-divider-margin-y: #{$dropdown-divider-margin-y};
--#{$prefix}dropdown-box-shadow: #{$dropdown-box-shadow};
--#{$prefix}dropdown-link-color: #{$dropdown-link-color};
--#{$prefix}dropdown-link-hover-color: #{$dropdown-link-hover-color};
--#{$prefix}dropdown-link-hover-bg: #{$dropdown-link-hover-bg};
--#{$prefix}dropdown-link-active-color: #{$dropdown-link-active-color};
--#{$prefix}dropdown-link-active-bg: #{$dropdown-link-active-bg};
--#{$prefix}dropdown-link-disabled-color: #{$dropdown-link-disabled-color};
--#{$prefix}dropdown-item-padding-x: #{$dropdown-item-padding-x};
--#{$prefix}dropdown-item-padding-y: #{$dropdown-item-padding-y};
--#{$prefix}dropdown-header-color: #{$dropdown-header-color};
--#{$prefix}dropdown-header-padding-x: #{$dropdown-header-padding-x};
--#{$prefix}dropdown-header-padding-y: #{$dropdown-header-padding-y};
```

One variable is set on items, not the menu itself:

```css
--bs-dropdown-item-border-radius
```

The dark variant overrides only the relevant CSS variables without duplicating selectors:

```scss
/* scss/_dropdown.scss — dark variant overrides */
--#{$prefix}dropdown-color: #{$dropdown-dark-color};
--#{$prefix}dropdown-bg: #{$dropdown-dark-bg};
--#{$prefix}dropdown-border-color: #{$dropdown-dark-border-color};
--#{$prefix}dropdown-box-shadow: #{$dropdown-dark-box-shadow};
--#{$prefix}dropdown-link-color: #{$dropdown-dark-link-color};
--#{$prefix}dropdown-link-hover-color: #{$dropdown-dark-link-hover-color};
--#{$prefix}dropdown-divider-bg: #{$dropdown-dark-divider-bg};
--#{$prefix}dropdown-link-hover-bg: #{$dropdown-dark-link-hover-bg};
--#{$prefix}dropdown-link-active-color: #{$dropdown-dark-link-active-color};
--#{$prefix}dropdown-link-active-bg: #{$dropdown-dark-link-active-bg};
--#{$prefix}dropdown-link-disabled-color: #{$dropdown-dark-link-disabled-color};
--#{$prefix}dropdown-header-color: #{$dropdown-dark-header-color};
```

---

## Sass Variables

### Standard dropdown variables (`scss/_variables.scss`)

```scss
$dropdown-min-width:                10rem;
$dropdown-padding-x:                0;
$dropdown-padding-y:                .5rem;
$dropdown-spacer:                   .125rem;
$dropdown-font-size:                $font-size-base;
$dropdown-color:                    var(--#{$prefix}body-color);
$dropdown-bg:                       var(--#{$prefix}body-bg);
$dropdown-border-color:             var(--#{$prefix}border-color-translucent);
$dropdown-border-radius:            var(--#{$prefix}border-radius);
$dropdown-border-width:             var(--#{$prefix}border-width);
$dropdown-inner-border-radius:      calc(#{$dropdown-border-radius} - #{$dropdown-border-width});
$dropdown-divider-bg:               $dropdown-border-color;
$dropdown-divider-margin-y:         $spacer * .5;
$dropdown-box-shadow:               var(--#{$prefix}box-shadow);

$dropdown-link-color:               var(--#{$prefix}body-color);
$dropdown-link-hover-color:         $dropdown-link-color;
$dropdown-link-hover-bg:            var(--#{$prefix}tertiary-bg);

$dropdown-link-active-color:        $component-active-color;
$dropdown-link-active-bg:           $component-active-bg;

$dropdown-link-disabled-color:      var(--#{$prefix}tertiary-color);

$dropdown-item-padding-y:           $spacer * .25;
$dropdown-item-padding-x:           $spacer;

$dropdown-header-color:             $gray-600;
$dropdown-header-padding-x:         $dropdown-item-padding-x;
$dropdown-header-padding-y:         $dropdown-padding-y;
$dropdown-header-padding:           $dropdown-header-padding-y $dropdown-header-padding-x; // Deprecated in v5.2.0
```

### Dark dropdown variables

```scss
$dropdown-dark-color:               $gray-300;
$dropdown-dark-bg:                  $gray-800;
$dropdown-dark-border-color:        $dropdown-border-color;
$dropdown-dark-divider-bg:          $dropdown-divider-bg;
$dropdown-dark-box-shadow:          null;
$dropdown-dark-link-color:          $dropdown-dark-color;
$dropdown-dark-link-hover-color:    $white;
$dropdown-dark-link-hover-bg:       rgba($white, .15);
$dropdown-dark-link-active-color:   $dropdown-link-active-color;
$dropdown-dark-link-active-bg:      $dropdown-link-active-bg;
$dropdown-dark-link-disabled-color: $gray-500;
$dropdown-dark-header-color:        $gray-500;
```

### Caret variables

```scss
$caret-width:           .3em;
$caret-vertical-align:  $caret-width * .85;
$caret-spacing:         $caret-width * .85;
```

---

## Sass Mixins

Caret indicators are generated with mixins defined in `scss/mixins/_caret.scss`.

```scss
@mixin caret-down($width: $caret-width) {
  border-top: $width solid;
  border-right: $width solid transparent;
  border-bottom: 0;
  border-left: $width solid transparent;
}

@mixin caret-up($width: $caret-width) {
  border-top: 0;
  border-right: $width solid transparent;
  border-bottom: $width solid;
  border-left: $width solid transparent;
}

@mixin caret-end($width: $caret-width) {
  border-top: $width solid transparent;
  border-right: 0;
  border-bottom: $width solid transparent;
  border-left: $width solid;
}

@mixin caret-start($width: $caret-width) {
  border-top: $width solid transparent;
  border-right: $width solid;
  border-bottom: $width solid transparent;
}

@mixin caret(
  $direction: down,
  $width: $caret-width,
  $spacing: $caret-spacing,
  $vertical-align: $caret-vertical-align
) {
  @if $enable-caret {
    &::after {
      display: inline-block;
      margin-left: $spacing;
      vertical-align: $vertical-align;
      content: "";
      @if $direction == down    { @include caret-down($width); }
      @else if $direction == up { @include caret-up($width); }
      @else if $direction == end{ @include caret-end($width); }
    }

    @if $direction == start {
      &::after  { display: none; }
      &::before {
        display: inline-block;
        margin-right: $spacing;
        vertical-align: $vertical-align;
        content: "";
        @include caret-start($width);
      }
    }

    &:empty::after { margin-left: 0; }
  }
}
```

---

## Usage: Data Attributes & JavaScript

The dropdown plugin works by toggling the `.show` class on the parent `.dropdown-menu`. `data-bs-toggle="dropdown"` is **required on the trigger element** in all cases — whether you use the data API or JavaScript.

> **Touch device note:** Opening a dropdown on iOS adds empty `mouseover` handlers to `<body>` children as a workaround for iOS event delegation quirks. These are removed when the dropdown closes.

### Via Data Attributes

```html
<div class="dropdown">
  <button type="button" data-bs-toggle="dropdown" aria-expanded="false">
    Dropdown trigger
  </button>
  <ul class="dropdown-menu">
    ...
  </ul>
</div>
```

### Via JavaScript

```javascript
// Initialize all dropdowns on the page
const dropdownElementList = document.querySelectorAll('.dropdown-toggle')
const dropdownList = [...dropdownElementList].map(dropdownToggleEl =>
  new bootstrap.Dropdown(dropdownToggleEl)
)

// Initialize a single dropdown with options
const myDropdown = new bootstrap.Dropdown('#myDropdownToggle', {
  autoClose: 'outside',
  offset: [0, 8]
})
```

---

## Options Reference

Options can be passed via data attributes (kebab-case) or JavaScript (camelCase).

| Name | Type | Default | Description |
|---|---|---|---|
| `autoClose` | boolean / string | `true` | Controls when the dropdown closes. `true` = inside or outside click; `false` = only manually; `'inside'` = only inside click; `'outside'` = only outside click. Esc always closes except when `false`. |
| `boundary` | string / element | `'clippingParents'` | Overflow constraint boundary for Popper's `preventOverflow` modifier. Accepts an HTMLElement reference via JS. |
| `display` | string | `'dynamic'` | Use `'static'` to disable Popper dynamic positioning (required for responsive alignment classes). |
| `offset` | array / string / function | `[0, 2]` | Offset of the dropdown from its trigger. As data attribute: `data-bs-offset="10,20"`. As a function, receives Popper state object and trigger element; must return `[skidding, distance]`. |
| `popperConfig` | null / object / function | `null` | Override Bootstrap's default Popper config. As a function, receives the default config and must return the merged config object. |
| `reference` | string / element / object | `'toggle'` | Reference element for positioning. Accepts `'toggle'`, `'parent'`, an HTMLElement, or an object with `getBoundingClientRect`. |

### Using `popperConfig` as a function

```javascript
const dropdown = new bootstrap.Dropdown(element, {
  popperConfig(defaultBsPopperConfig) {
    // Merge or override the default config
    return {
      ...defaultBsPopperConfig,
      placement: 'top'
    }
  }
})
```

---

## Methods Reference

| Method | Description |
|---|---|
| `show` | Shows the dropdown menu. |
| `hide` | Hides the dropdown menu. |
| `toggle` | Toggles the dropdown menu open or closed. |
| `update` | Updates the position of the dropdown (useful after DOM changes). |
| `dispose` | Destroys the dropdown instance and removes stored DOM data. |
| `getInstance(element)` | Static — returns the dropdown instance for a DOM element. |
| `getOrCreateInstance(element)` | Static — returns an existing instance or creates a new one. |

```javascript
const toggleEl = document.getElementById('myDropdownToggle')
const dropdown = bootstrap.Dropdown.getInstance(toggleEl)

dropdown.show()    // open the menu
dropdown.hide()    // close the menu
dropdown.toggle()  // toggle open/closed
dropdown.update()  // reposition after layout changes
dropdown.dispose() // destroy the instance
```

---

## Events Reference

All dropdown events fire on the **toggle element** and bubble up, so you can also listen on the `.dropdown-menu`'s parent.

`hide.bs.dropdown` and `hidden.bs.dropdown` include a `clickEvent` property (when the original event type is `click`) containing the original click Event object.

| Event type | Fires... |
|---|---|
| `show.bs.dropdown` | Immediately when `show` is called (before transition) |
| `shown.bs.dropdown` | After the dropdown is visible and CSS transitions complete |
| `hide.bs.dropdown` | Immediately when `hide` is called (before transition) |
| `hidden.bs.dropdown` | After the dropdown is hidden and CSS transitions complete |

```javascript
const myDropdown = document.getElementById('myDropdown')

// Before opening
myDropdown.addEventListener('show.bs.dropdown', event => {
  console.log('Dropdown is about to open')
})

// After fully open
myDropdown.addEventListener('shown.bs.dropdown', event => {
  console.log('Dropdown is now open')
})

// Before closing — access the original click event if triggered by a click
myDropdown.addEventListener('hide.bs.dropdown', event => {
  if (event.clickEvent) {
    console.log('Closed by click at:', event.clickEvent.target)
  }
})

// After fully closed
myDropdown.addEventListener('hidden.bs.dropdown', event => {
  console.log('Dropdown is now closed')
})
```

---

## Quick Reference

```html
<!-- Basic dropdown -->
<div class="dropdown">
  <button class="btn btn-secondary dropdown-toggle" type="button"
    data-bs-toggle="dropdown" aria-expanded="false">Dropdown</button>
  <ul class="dropdown-menu">
    <li><a class="dropdown-item" href="#">Action</a></li>
    <li><hr class="dropdown-divider"></li>
    <li><a class="dropdown-item" href="#">Separated action</a></li>
  </ul>
</div>

<!-- Split button dropdown -->
<div class="btn-group">
  <button type="button" class="btn btn-primary">Main action</button>
  <button type="button" class="btn btn-primary dropdown-toggle dropdown-toggle-split"
    data-bs-toggle="dropdown" aria-expanded="false">
    <span class="visually-hidden">Toggle</span>
  </button>
  <ul class="dropdown-menu">...</ul>
</div>

<!-- Direction variants — change class on parent -->
<div class="dropup">...</div>
<div class="dropend">...</div>
<div class="dropstart">...</div>
<div class="dropdown-center">...</div>
<div class="dropup-center dropup">...</div>

<!-- Right-aligned menu -->
<ul class="dropdown-menu dropdown-menu-end">...</ul>

<!-- Keep open when clicking inside (e.g. forms) -->
<button data-bs-toggle="dropdown" data-bs-auto-close="outside">...</button>

<!-- Dark theme -->
<div class="dropdown" data-bs-theme="dark">...</div>
```

---