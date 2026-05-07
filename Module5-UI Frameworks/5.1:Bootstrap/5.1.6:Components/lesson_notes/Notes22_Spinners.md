# Bootstrap Spinners

## Overview

Bootstrap "spinners" can be used to show the loading state in your projects. They're built only with HTML and CSS, meaning you don't need any JavaScript to create them. However, you will need some custom JavaScript to toggle their visibility. Their appearance, alignment, and sizing can be easily customized with Bootstrap utility classes.

## Accessibility

For accessibility purposes, each loader includes `role="status"` and a nested `<span class="visually-hidden">Loading...</span>`. The animation effect of this component is dependent on the `prefers-reduced-motion` media query. See the reduced motion section of Bootstrap's accessibility documentation.

## Types of Spinners

### 1. Border Spinner

Use border spinners for a lightweight loading indicator.

```html
<div class="spinner-border" role="status">
  <span class="visually-hidden">Loading...</span>
</div>
```

### 2. Growing Spinner

If you don't fancy a border spinner, switch to the grow spinner. While it doesn't technically spin, it does repeatedly grow!

```html
<div class="spinner-grow" role="status">
  <span class="visually-hidden">Loading...</span>
</div>
```

## Colors

Both spinner types use `currentColor` for their styling, meaning you can customize their color with text color utilities. You can use any of Bootstrap's text color utilities on standard spinners.

### Border Spinner Colors

```html
<div class="spinner-border text-primary" role="status">
  <span class="visually-hidden">Loading...</span>
</div>
<div class="spinner-border text-secondary" role="status">
  <span class="visually-hidden">Loading...</span>
</div>
<div class="spinner-border text-success" role="status">
  <span class="visually-hidden">Loading...</span>
</div>
<div class="spinner-border text-danger" role="status">
  <span class="visually-hidden">Loading...</span>
</div>
<div class="spinner-border text-warning" role="status">
  <span class="visually-hidden">Loading...</span>
</div>
<div class="spinner-border text-info" role="status">
  <span class="visually-hidden">Loading...</span>
</div>
<div class="spinner-border text-light" role="status">
  <span class="visually-hidden">Loading...</span>
</div>
<div class="spinner-border text-dark" role="status">
  <span class="visually-hidden">Loading...</span>
</div>
```

### Growing Spinner Colors

```html
<div class="spinner-grow text-primary" role="status">
  <span class="visually-hidden">Loading...</span>
</div>
<div class="spinner-grow text-secondary" role="status">
  <span class="visually-hidden">Loading...</span>
</div>
<div class="spinner-grow text-success" role="status">
  <span class="visually-hidden">Loading...</span>
</div>
<div class="spinner-grow text-danger" role="status">
  <span class="visually-hidden">Loading...</span>
</div>
<div class="spinner-grow text-warning" role="status">
  <span class="visually-hidden">Loading...</span>
</div>
<div class="spinner-grow text-info" role="status">
  <span class="visually-hidden">Loading...</span>
</div>
<div class="spinner-grow text-light" role="status">
  <span class="visually-hidden">Loading...</span>
</div>
<div class="spinner-grow text-dark" role="status">
  <span class="visually-hidden">Loading...</span>
</div>
```

**Note**: Why not use `border-color` utilities? Each border spinner specifies a `transparent` border for at least one side, so `.border-{color}` utilities would override that.

## Alignment

Spinners in Bootstrap are built with `rems`, `currentColor`, and `display: inline-flex`. This means they can easily be resized, recolored, and quickly aligned.

### Margin

Use margin utilities like `.m-5` for easy spacing.

```html
<div class="spinner-border m-5" role="status">
  <span class="visually-hidden">Loading...</span>
</div>
```

### Flexbox Alignment

Use flexbox utilities to place spinners exactly where you need them.

```html
<!-- Centered with flexbox -->
<div class="d-flex justify-content-center">
  <div class="spinner-border" role="status">
    <span class="visually-hidden">Loading...</span>
  </div>
</div>

<!-- Aligned with text -->
<div class="d-flex align-items-center">
  <strong role="status">Loading...</strong>
  <div class="spinner-border ms-auto" aria-hidden="true"></div>
</div>
```

### Floats

Use float utilities for positioning.

```html
<div class="clearfix">
  <div class="spinner-border float-end" role="status">
    <span class="visually-hidden">Loading...</span>
  </div>
</div>
```

### Text Alignment

Use text alignment utilities for centering.

```html
<div class="text-center">
  <div class="spinner-border" role="status">
    <span class="visually-hidden">Loading...</span>
  </div>
</div>
```

## Sizing

### Small Spinners

Add `.spinner-border-sm` and `.spinner-grow-sm` to make a smaller spinner that can quickly be used within other components.

```html
<div class="spinner-border spinner-border-sm" role="status">
  <span class="visually-hidden">Loading...</span>
</div>
<div class="spinner-grow spinner-grow-sm" role="status">
  <span class="visually-hidden">Loading...</span>
</div>
```

### Custom Sizing

Use custom CSS or inline styles to change the dimensions as needed.

```html
<div class="spinner-border" style="width: 3rem; height: 3rem;" role="status">
  <span class="visually-hidden">Loading...</span>
</div>
<div class="spinner-grow" style="width: 3rem; height: 3rem;" role="status">
  <span class="visually-hidden">Loading...</span>
</div>
```

## Buttons

Use spinners within buttons to indicate an action is currently processing or taking place. You may also swap the text out of the spinner element and utilize button text as needed.

### Border Spinner in Buttons

```html
<button class="btn btn-primary" type="button" disabled>
  <span class="spinner-border spinner-border-sm" aria-hidden="true"></span>
  <span class="visually-hidden" role="status">Loading...</span>
</button>
<button class="btn btn-primary" type="button" disabled>
  <span class="spinner-border spinner-border-sm" aria-hidden="true"></span>
  <span role="status">Loading...</span>
</button>
```

### Growing Spinner in Buttons

```html
<button class="btn btn-primary" type="button" disabled>
  <span class="spinner-grow spinner-grow-sm" aria-hidden="true"></span>
  <span class="visually-hidden" role="status">Loading...</span>
</button>
<button class="btn btn-primary" type="button" disabled>
  <span class="spinner-grow spinner-grow-sm" aria-hidden="true"></span>
  <span role="status">Loading...</span>
</button>
```

## CSS Customization

### CSS Variables (v5.2.0+)

As part of Bootstrap's evolving CSS variables approach, spinners now use local CSS variables on `.spinner-border` and `.spinner-grow` for enhanced real-time customization. Values for CSS variables are set via Sass, so Sass customization is still supported too.

#### Border Spinner Variables

```css
.spinner-border {
  --#{$prefix}spinner-width: #{$spinner-width};
  --#{$prefix}spinner-height: #{$spinner-height};
  --#{$prefix}spinner-vertical-align: #{$spinner-vertical-align};
  --#{$prefix}spinner-border-width: #{$spinner-border-width};
  --#{$prefix}spinner-animation-speed: #{$spinner-animation-speed};
  --#{$prefix}spinner-animation-name: spinner-border;
}
```

#### Growing Spinner Variables

```css
.spinner-grow {
  --#{$prefix}spinner-width: #{$spinner-width};
  --#{$prefix}spinner-height: #{$spinner-height};
  --#{$prefix}spinner-vertical-align: #{$spinner-vertical-align};
  --#{$prefix}spinner-animation-speed: #{$spinner-animation-speed};
  --#{$prefix}spinner-animation-name: spinner-grow;
}
```

#### Small Spinner Modifier

For both spinners, small spinner modifier classes are used to update values of these CSS variables as needed. For example, `.spinner-border-sm` class does the following:

```css
.spinner-border-sm {
  --#{$prefix}spinner-width: #{$spinner-width-sm};
  --#{$prefix}spinner-height: #{$spinner-height-sm};
  --#{$prefix}spinner-border-width: #{$spinner-border-width-sm};
}
```

### Sass Variables

```scss
$spinner-width:           2rem;
$spinner-height:          $spinner-width;
$spinner-vertical-align:  -.125em;
$spinner-border-width:    .25em;
$spinner-animation-speed: .75s;

$spinner-width-sm:        1rem;
$spinner-height-sm:       $spinner-width-sm;
$spinner-border-width-sm: .2em;
```

## CSS Animations

### Keyframes

Used for creating CSS animations for Bootstrap spinners. Included in `scss/_spinners.scss`.

#### Border Spinner Animation

```scss
@keyframes spinner-border {
  to { 
    transform: rotate(360deg) #{"/* rtl:ignore */"}; 
  }
}
```

#### Growing Spinner Animation

```scss
@keyframes spinner-grow {
  0% {
    transform: scale(0);
  }
  50% {
    opacity: 1;
    transform: none;
  }
}
```

## Best Practices

### 1. Accessibility
- Always include `role="status"` for screen readers
- Use `<span class="visually-hidden">Loading...</span>` for descriptive text
- Respect `prefers-reduced-motion` media query (handled automatically by Bootstrap)

### 2. Performance
- Spinners are CSS-only, so they're lightweight
- Consider using smaller spinners (`.spinner-border-sm`, `.spinner-grow-sm`) in tight spaces
- Use appropriate colors that match your design system

### 3. Usage Patterns
- Use in buttons during async operations
- Display during data loading
- Show in modals during form submissions
- Use in cards while content is being fetched

### 4. Common Implementations

#### Loading States
```html
<!-- Full page loading -->
<div class="d-flex justify-content-center p-5">
  <div class="spinner-border text-primary" role="status">
    <span class="visually-hidden">Loading page...</span>
  </div>
</div>

<!-- Component loading -->
<div class="text-center py-3">
  <div class="spinner-grow text-secondary" role="status">
    <span class="visually-hidden">Loading data...</span>
  </div>
</div>
```

#### Form Submission
```html
<button class="btn btn-success" type="submit" id="submitBtn">
  <span id="btnText">Submit Form</span>
  <span id="btnSpinner" class="spinner-border spinner-border-sm ms-2 d-none" aria-hidden="true"></span>
</button>

<script>
document.getElementById('submitBtn').addEventListener('click', function() {
  document.getElementById('btnText').textContent = 'Submitting...';
  document.getElementById('btnSpinner').classList.remove('d-none');
  this.disabled = true;
  
  // Submit form logic here
});
</script>
```

## Browser Compatibility

Spinners work in all modern browsers that support CSS animations and flexbox. For older browsers, consider:

- Providing fallback text content
- Using progressive enhancement
- Testing animation performance

## Summary

Bootstrap spinners provide a flexible, accessible way to indicate loading states in your applications. They're:

- **Lightweight**: CSS-only implementation
- **Customizable**: Easy to resize, color, and position
- **Accessible**: Built with screen reader support
- **Responsive**: Work across all viewport sizes
- **Themeable**: Can be customized with CSS variables or Sass

Use them to improve user experience during loading operations, form submissions, and any async operations in your Bootstrap applications.
