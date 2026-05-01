# Bootstrap Buttons

> Custom button styles for actions in forms, dialogs, and more — with support for multiple variants, sizes, states, and toggle behavior.

---

## Base Class

`.btn` is the foundation of every Bootstrap button. It sets padding and content alignment but has a transparent border and background, and no explicit focus or hover styles by default.

```html
<button type="button" class="btn">Base class</button>
```

> **Note:** Always combine `.btn` with a variant class. If you use `.btn` alone, make sure to define explicit `:focus` and/or `:focus-visible` styles for accessibility.

---

## Variants

Bootstrap provides nine button variants, each with its own semantic purpose:

```html
<button type="button" class="btn btn-primary">Primary</button>
<button type="button" class="btn btn-secondary">Secondary</button>
<button type="button" class="btn btn-success">Success</button>
<button type="button" class="btn btn-danger">Danger</button>
<button type="button" class="btn btn-warning">Warning</button>
<button type="button" class="btn btn-info">Info</button>
<button type="button" class="btn btn-light">Light</button>
<button type="button" class="btn btn-dark">Dark</button>
<button type="button" class="btn btn-link">Link</button>
```

> **Accessibility tip:** Color alone doesn't convey meaning to screen readers. Ensure the button's purpose is clear from its text, or add hidden context with `.visually-hidden`.

---

## Disable Text Wrapping

Prevent button text from wrapping with the `.text-nowrap` utility class:

```html
<button type="button" class="btn btn-primary text-nowrap">No wrap button</button>
```

Or disable wrapping globally for all buttons in Sass:

```scss
$btn-white-space: nowrap;
```

---

## Button Tags

`.btn` works on `<button>`, `<a>`, and `<input>` elements — though browsers may render them slightly differently:

```html
<a class="btn btn-primary" href="#" role="button">Link</a>
<button class="btn btn-primary" type="submit">Button</button>
<input class="btn btn-primary" type="button" value="Input">
<input class="btn btn-primary" type="submit" value="Submit">
<input class="btn btn-primary" type="reset" value="Reset">
```

> **Important:** When using `.btn` on `<a>` elements that trigger in-page functionality (not navigation), add `role="button"` so assistive technologies correctly identify the element's purpose.

---

## Outline Buttons

Remove background colors and images by using `.btn-outline-*` instead of `.btn-*`:

```html
<button type="button" class="btn btn-outline-primary">Primary</button>
<button type="button" class="btn btn-outline-secondary">Secondary</button>
<button type="button" class="btn btn-outline-success">Success</button>
<button type="button" class="btn btn-outline-danger">Danger</button>
<button type="button" class="btn btn-outline-warning">Warning</button>
<button type="button" class="btn btn-outline-info">Info</button>
<button type="button" class="btn btn-outline-light">Light</button>
<button type="button" class="btn btn-outline-dark">Dark</button>
```

> Some outline variants (e.g. `.btn-outline-light`) use a light foreground color — only use these on dark backgrounds to ensure sufficient contrast.

---

## Sizes

### Large buttons — add `.btn-lg`

```html
<button type="button" class="btn btn-primary btn-lg">Large button</button>
<button type="button" class="btn btn-secondary btn-lg">Large button</button>
```

### Small buttons — add `.btn-sm`

```html
<button type="button" class="btn btn-primary btn-sm">Small button</button>
<button type="button" class="btn btn-secondary btn-sm">Small button</button>
```

### Custom size via CSS variables

Override the button's CSS variables inline for any size you need:

```html
<button
  type="button"
  class="btn btn-primary"
  style="--bs-btn-padding-y: .25rem; --bs-btn-padding-x: .5rem; --bs-btn-font-size: .75rem;"
>
  Custom button
</button>
```

---

## Disabled State

### On `<button>` elements

Add the `disabled` boolean attribute. Bootstrap applies `pointer-events: none` to prevent hover and active states:

```html
<button type="button" class="btn btn-primary" disabled>Primary button</button>
<button type="button" class="btn btn-secondary" disabled>Button</button>
<button type="button" class="btn btn-outline-primary" disabled>Primary button</button>
<button type="button" class="btn btn-outline-secondary" disabled>Button</button>
```

### On `<a>` elements

`<a>` elements don't support the `disabled` attribute — use these rules instead:

- Add the `.disabled` class for the visual disabled appearance
- Add `aria-disabled="true"` to inform assistive technologies
- Remove the `href` attribute when possible

```html
<a class="btn btn-primary disabled" role="button" aria-disabled="true">Primary link</a>
<a class="btn btn-secondary disabled" role="button" aria-disabled="true">Link</a>
```

### Link functionality caveat

If you must keep `href` on a disabled link, also add `tabindex="-1"` to remove it from keyboard focus, and use custom JavaScript to block its functionality entirely. `pointer-events: none` alone does not prevent keyboard activation:

```html
<a href="#" class="btn btn-primary disabled" tabindex="-1" role="button" aria-disabled="true">
  Primary link
</a>
<a href="#" class="btn btn-secondary disabled" tabindex="-1" role="button" aria-disabled="true">
  Link
</a>
```

| Approach | Prevents mouse click | Prevents keyboard activation |
|---|---|---|
| `.disabled` + `pointer-events: none` | ✅ | ❌ |
| `tabindex="-1"` | ✅ | ✅ (removes from tab order) |
| Custom JavaScript | ✅ | ✅ |

---

## Block Buttons

Bootstrap 5 uses display and gap utilities instead of a dedicated `.btn-block` class — giving you more control over spacing, alignment, and responsive behavior.

### Full-width stack

```html
<div class="d-grid gap-2">
  <button class="btn btn-primary" type="button">Button</button>
  <button class="btn btn-primary" type="button">Button</button>
</div>
```

### Responsive — stacked on mobile, inline on `md+`

```html
<div class="d-grid gap-2 d-md-block">
  <button class="btn btn-primary" type="button">Button</button>
  <button class="btn btn-primary" type="button">Button</button>
</div>
```

### Constrained width, centered

Use grid column classes to limit width, and `.mx-auto` to center:

```html
<div class="d-grid gap-2 col-6 mx-auto">
  <button class="btn btn-primary" type="button">Button</button>
  <button class="btn btn-primary" type="button">Button</button>
</div>
```

### Right-aligned when horizontal

Use flex utilities for alignment when buttons are side-by-side:

```html
<div class="d-grid gap-2 d-md-flex justify-content-md-end">
  <button class="btn btn-primary me-md-2" type="button">Button</button>
  <button class="btn btn-primary" type="button">Button</button>
</div>
```

---

## Button Plugin — Toggle States

Add `data-bs-toggle="button"` to turn any button into an on/off toggle. The plugin manages the `.active` state and `aria-pressed` attribute.

> **Note:** Toggle buttons are announced as "button"/"button pressed" by screen readers, unlike checkbox toggles which are announced as "checked"/"not checked". Choose the appropriate pattern for your use case.

### Pre-toggled (starts active)

When a button is pre-toggled, manually add `.active` and `aria-pressed="true"`:

```html
<!-- Base buttons -->
<button type="button" class="btn" data-bs-toggle="button">Toggle button</button>
<button type="button" class="btn active" data-bs-toggle="button" aria-pressed="true">Active toggle button</button>
<button type="button" class="btn" disabled data-bs-toggle="button">Disabled toggle button</button>

<!-- Styled buttons -->
<button type="button" class="btn btn-primary" data-bs-toggle="button">Toggle button</button>
<button type="button" class="btn btn-primary active" data-bs-toggle="button" aria-pressed="true">Active toggle button</button>
<button type="button" class="btn btn-primary" disabled data-bs-toggle="button">Disabled toggle button</button>
```

### Toggle links (`<a>` elements)

```html
<a href="#" class="btn" role="button" data-bs-toggle="button">Toggle link</a>
<a href="#" class="btn active" role="button" data-bs-toggle="button" aria-pressed="true">Active toggle link</a>
<a class="btn disabled" aria-disabled="true" role="button" data-bs-toggle="button">Disabled toggle link</a>
```

### Methods

Create a button instance with the constructor:

```js
const bsButton = new bootstrap.Button('#myButton')
```

| Method | Description |
|---|---|
| `.toggle()` | Toggles the push state — makes the button appear activated/deactivated |
| `.dispose()` | Destroys the button instance and removes stored data from the DOM element |
| `.getInstance(el)` | Static. Returns the existing Button instance for a given element |
| `.getOrCreateInstance(el)` | Static. Returns an existing instance or creates a new one |

```js
// Toggle all buttons on the page
document.querySelectorAll('.btn').forEach(buttonElement => {
  const button = bootstrap.Button.getOrCreateInstance(buttonElement)
  button.toggle()
})
```

---

## CSS Customization

### CSS Variables (Bootstrap 5.2+)

Buttons use scoped CSS variables on `.btn`. Each `.btn-*` modifier class overrides only the relevant variables:

```css
.btn {
  --bs-btn-padding-x: 0.75rem;
  --bs-btn-padding-y: 0.375rem;
  --bs-btn-font-family: inherit;
  --bs-btn-font-size: 1rem;
  --bs-btn-font-weight: 400;
  --bs-btn-line-height: 1.5;
  --bs-btn-color: var(--bs-body-color);
  --bs-btn-bg: transparent;
  --bs-btn-border-width: 1px;
  --bs-btn-border-color: transparent;
  --bs-btn-border-radius: 0.375rem;
  --bs-btn-hover-border-color: transparent;
  --bs-btn-box-shadow: inset 0 1px 0 rgba(255,255,255,.15), 0 1px 1px rgba(0,0,0,.075);
  --bs-btn-disabled-opacity: 0.65;
  --bs-btn-focus-box-shadow: 0 0 0 0.25rem rgba(var(--bs-btn-focus-shadow-rgb), .5);
}
```

### Custom Button Variant Example

Build a fully custom `.btn-*` class by overriding only the CSS variables you need:

```scss
.btn-bd-primary {
  --bs-btn-font-weight: 600;
  --bs-btn-color: var(--bs-white);
  --bs-btn-bg: var(--bd-violet-bg);
  --bs-btn-border-color: var(--bd-violet-bg);
  --bs-btn-hover-color: var(--bs-white);
  --bs-btn-hover-bg: #{shade-color($bd-violet, 10%)};
  --bs-btn-hover-border-color: #{shade-color($bd-violet, 10%)};
  --bs-btn-focus-shadow-rgb: var(--bd-violet-rgb);
  --bs-btn-active-color: var(--bs-btn-hover-color);
  --bs-btn-active-bg: #{shade-color($bd-violet, 20%)};
  --bs-btn-active-border-color: #{shade-color($bd-violet, 20%)};
}
```

### Key Sass Variables

```scss
// Padding & typography
$btn-color:           var(--#{$prefix}body-color);
$btn-padding-y:       $input-btn-padding-y;
$btn-padding-x:       $input-btn-padding-x;
$btn-font-family:     $input-btn-font-family;
$btn-font-size:       $input-btn-font-size;
$btn-line-height:     $input-btn-line-height;
$btn-white-space:     null;       // Set to `nowrap` to prevent text wrapping

// Small size
$btn-padding-y-sm:    $input-btn-padding-y-sm;
$btn-padding-x-sm:    $input-btn-padding-x-sm;
$btn-font-size-sm:    $input-btn-font-size-sm;

// Large size
$btn-padding-y-lg:    $input-btn-padding-y-lg;
$btn-padding-x-lg:    $input-btn-padding-x-lg;
$btn-font-size-lg:    $input-btn-font-size-lg;

// Border
$btn-border-width:    $input-btn-border-width;
$btn-border-radius:   var(--#{$prefix}border-radius);
$btn-border-radius-sm: var(--#{$prefix}border-radius-sm);
$btn-border-radius-lg: var(--#{$prefix}border-radius-lg);

// States
$btn-font-weight:          $font-weight-normal;
$btn-disabled-opacity:     .65;
$btn-focus-width:          $input-btn-focus-width;
$btn-focus-box-shadow:     $input-btn-focus-box-shadow;
$btn-active-box-shadow:    inset 0 3px 5px rgba($black, .125);

// Hover shade/tint amounts
$btn-hover-bg-shade-amount:       15%;
$btn-hover-bg-tint-amount:        15%;
$btn-hover-border-shade-amount:   20%;
$btn-hover-border-tint-amount:    10%;

// Active shade/tint amounts
$btn-active-bg-shade-amount:      20%;
$btn-active-bg-tint-amount:       20%;
$btn-active-border-shade-amount:  25%;
$btn-active-border-tint-amount:   10%;

// Link button
$btn-link-color:              var(--#{$prefix}link-color);
$btn-link-hover-color:        var(--#{$prefix}link-hover-color);
$btn-link-disabled-color:     $gray-600;

// Transition
$btn-transition: color .15s ease-in-out,
                 background-color .15s ease-in-out,
                 border-color .15s ease-in-out,
                 box-shadow .15s ease-in-out;
```

### Sass Mixins

Three mixins power all button variants:

#### `button-variant()` — solid filled buttons

```scss
@mixin button-variant(
  $background,
  $border,
  $color: color-contrast($background),
  $hover-background: ...,   // auto-calculated shade/tint
  $hover-border: ...,
  $hover-color: ...,
  $active-background: ...,
  $active-border: ...,
  $active-color: ...,
  $disabled-background: $background,
  $disabled-border: $border,
  $disabled-color: color-contrast($disabled-background)
) {
  // Sets all --bs-btn-* CSS variables
}
```

#### `button-outline-variant()` — outline buttons

```scss
@mixin button-outline-variant(
  $color,
  $color-hover: color-contrast($color),
  $active-background: $color,
  $active-border: $color,
  $active-color: color-contrast($active-background)
) {
  // Sets outline-specific --bs-btn-* CSS variables
}
```

#### `button-size()` — size modifier

```scss
@mixin button-size($padding-y, $padding-x, $font-size, $border-radius) {
  --#{$prefix}btn-padding-y: #{$padding-y};
  --#{$prefix}btn-padding-x: #{$padding-x};
  --#{$prefix}btn-font-size: #{$font-size};
  --#{$prefix}btn-border-radius: #{$border-radius};
}
```

### Sass Loops

All `.btn-*` and `.btn-outline-*` modifier classes are auto-generated from the `$theme-colors` map:

```scss
// Solid variants
@each $color, $value in $theme-colors {
  .btn-#{$color} {
    @if $color == "light" {
      @include button-variant($value, $value,
        $hover-background: shade-color($value, $btn-hover-bg-shade-amount),
        $hover-border: shade-color($value, $btn-hover-border-shade-amount),
        $active-background: shade-color($value, $btn-active-bg-shade-amount),
        $active-border: shade-color($value, $btn-active-border-shade-amount)
      );
    } @else if $color == "dark" {
      @include button-variant($value, $value,
        $hover-background: tint-color($value, $btn-hover-bg-tint-amount),
        $hover-border: tint-color($value, $btn-hover-border-tint-amount),
        $active-background: tint-color($value, $btn-active-bg-tint-amount),
        $active-border: tint-color($value, $btn-active-border-tint-amount)
      );
    } @else {
      @include button-variant($value, $value);
    }
  }
}

// Outline variants
@each $color, $value in $theme-colors {
  .btn-outline-#{$color} {
    @include button-outline-variant($value);
  }
}
```

> `light` and `dark` use shade/tint in reverse compared to other colors to maintain proper contrast on hover and active states.

---

## Quick Reference Cheatsheet

### Classes

| Class | Purpose |
|---|---|
| `.btn` | Base class — required on every button |
| `.btn-primary` | Solid primary variant |
| `.btn-secondary` | Solid secondary variant |
| `.btn-success` | Solid success variant |
| `.btn-danger` | Solid danger variant |
| `.btn-warning` | Solid warning variant |
| `.btn-info` | Solid info variant |
| `.btn-light` | Solid light variant |
| `.btn-dark` | Solid dark variant |
| `.btn-link` | Link-styled button |
| `.btn-outline-*` | Outline variant (no background) |
| `.btn-lg` | Large size |
| `.btn-sm` | Small size |
| `.disabled` | Visual disabled state (for `<a>` elements) |
| `.active` | Active/pressed state |
| `.text-nowrap` | Prevents text wrapping |

### Block Button Utilities

| Class | Purpose |
|---|---|
| `d-grid` | Makes buttons full-width (block) |
| `gap-2` | Adds spacing between stacked buttons |
| `d-md-block` | Switches to inline layout at `md` breakpoint |
| `col-6 mx-auto` | Half-width and centered |
| `d-md-flex justify-content-md-end` | Right-aligned when horizontal |

### Data Attributes

| Attribute | Purpose |
|---|---|
| `data-bs-toggle="button"` | Enables toggle (on/off) behavior |
| `aria-pressed="true"` | Marks a pre-toggled active button |
| `role="button"` | Required on `<a>` used as buttons |
| `aria-disabled="true"` | Marks disabled state on `<a>` elements |
| `tabindex="-1"` | Removes disabled `<a>` from keyboard focus |

---
