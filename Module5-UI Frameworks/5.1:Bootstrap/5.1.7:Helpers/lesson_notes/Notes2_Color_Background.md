# Bootstrap Color and Background Utilities

## Overview

Set a background color with contrasting foreground color. Bootstrap's color and background helpers combine the power of `.text-*` utilities and `.bg-*` utilities in one class. Using the Sass `color-contrast()` function, Bootstrap automatically determines a contrasting color for a particular background color.

## How It Works

The color and background utilities work by:

1. **Background Color**: Applied using `.bg-{color}` classes
2. **Text Color**: Automatically determined using contrast function
3. **Combined Classes**: Both background and text classes applied to same element
4. **Accessibility**: Ensures proper contrast ratios for readability

**Important Note**: There's currently no support for a CSS-native `color-contrast()` function, so Bootstrap uses its own Sass `color-contrast()` function. This means that customizing theme colors via CSS variables may cause color contrast issues with these utilities.

## Basic Usage

### Solid Background Colors

Apply background colors with automatically contrasting text colors:

```html
<div class="text-bg-primary p-3">Primary with contrasting color</div>
<div class="text-bg-secondary p-3">Secondary with contrasting color</div>
<div class="text-bg-success p-3">Success with contrasting color</div>
<div class="text-bg-danger p-3">Danger with contrasting color</div>
<div class="text-bg-warning p-3">Warning with contrasting color</div>
<div class="text-bg-info p-3">Info with contrasting color</div>
<div class="text-bg-light p-3">Light with contrasting color</div>
<div class="text-bg-dark p-3">Dark with contrasting color</div>
```

## Available Color Classes

### Standard Theme Colors

| Class | Background | Text Color | Description |
|--------|------------|-------------|-------------|
| `.text-bg-primary` | `$primary` | Contrasting text for primary background |
| `.text-bg-secondary` | `$secondary` | Contrasting text for secondary background |
| `.text-bg-success` | `$success` | Contrasting text for success background |
| `.text-bg-danger` | `$danger` | Contrasting text for danger background |
| `.text-bg-warning` | `$warning` | Contrasting text for warning background |
| `.text-bg-info` | `$info` | Contrasting text for info background |
| `.text-bg-light` | `$light` | Contrasting text for light background |
| `.text-bg-dark` | `$dark` | Contrasting text for dark background |

### Extended Color Palette

Bootstrap also supports additional color variations:

```html
<div class="text-bg-white p-3">White background</div>
<div class="text-bg-transparent p-3">Transparent background</div>
```

## With Components

### Badges

Use color background utilities with badges for visual emphasis:

```html
<span class="badge text-bg-primary">Primary</span>
<span class="badge text-bg-info">Info</span>
<span class="badge text-bg-success">Success</span>
<span class="badge text-bg-warning">Warning</span>
<span class="badge text-bg-danger">Danger</span>
```

### Cards

Apply color backgrounds to cards for visual hierarchy:

```html
<div class="card text-bg-primary mb-3" style="max-width: 18rem;">
  <div class="card-header">Header</div>
  <div class="card-body">
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
</div>

<div class="card text-bg-info mb-3" style="max-width: 18rem;">
  <div class="card-header">Header</div>
  <div class="card-body">
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
</div>
```

### Alerts

Create colored alerts with appropriate text contrast:

```html
<div class="alert text-bg-primary" role="alert">
  Primary alert with contrasting text
</div>
<div class="alert text-bg-success" role="alert">
  Success alert with contrasting text
</div>
<div class="alert text-bg-danger" role="alert">
  Danger alert with contrasting text
</div>
<div class="alert text-bg-warning" role="alert">
  Warning alert with contrasting text
</div>
```

### Buttons

Apply color backgrounds to buttons for visual hierarchy:

```html
<button type="button" class="btn text-bg-primary">Primary</button>
<button type="button" class="btn text-bg-secondary">Secondary</button>
<button type="button" class="btn text-bg-success">Success</button>
<button type="button" class="btn text-bg-danger">Danger</button>
<button type="button" class="btn text-bg-warning">Warning</button>
<button type="button" class="btn text-bg-info">Info</button>
<button type="button" class="btn text-bg-light">Light</button>
<button type="button" class="btn text-bg-dark">Dark</button>
```

## Advanced Usage

### Gradient Backgrounds

Combine with gradient utilities for enhanced visual effects:

```html
<div class="text-bg-primary bg-gradient p-3">
  Primary gradient background with contrasting text
</div>
```

### Hover and Focus States

Color utilities work with interactive states:

```html
<button type="button" class="btn text-bg-primary hover:bg-primary-emphasis">
  Primary with hover emphasis
</button>

<a href="#" class="text-bg-info p-2 text-bg-focus">
  Info with focus state
</a>
```

### Opacity Variations

Combine with opacity utilities for subtle effects:

```html
<div class="text-bg-primary bg-opacity-50 p-3">
  Primary background with 50% opacity
</div>

<div class="text-bg-secondary bg-opacity-75 p-3">
  Secondary background with 75% opacity
</div>
```

## Accessibility Considerations

### Color Contrast

**Important**: Using color to add meaning only provides a visual indication, which will not be conveyed to users of assistive technologies like screen readers.

**Best Practices**:
- Ensure meaning is obvious from the content itself
- Use sufficient color contrast ratios
- Include alternative text for color-coded information
- Test with actual screen readers

```html
<!-- Good: Meaning is obvious from content -->
<div class="text-bg-success p-3">
  ✓ Success! Your changes have been saved.
</div>

<!-- Better: Include additional context -->
<div class="text-bg-success p-3">
  ✓ Success! Your changes have been saved.
  <span class="visually-hidden">Your form has been successfully submitted and processed.</span>
</div>
```

### WCAG Compliance

Ensure color combinations meet WCAG AA standards:
- **Normal Text**: 4.5:1 contrast ratio
- **Large Text**: 3:1 contrast ratio
- **Non-text**: 3:1 contrast ratio

## Customization

### Sass Variables

Customize theme colors by modifying Sass variables:

```scss
// Override default theme colors
$primary:       #0d6efd;
$secondary:     #6c757d;
$success:       #198754;
$danger:        #dc3545;
$warning:       #ffc107;
$info:          #0dcaf0;
$light:         #f8f9fa;
$dark:          #212529;
```

### CSS Variables (v5.2.0+)

For runtime customization, use CSS variables:

```css
:root {
  --bs-primary: #0d6efd;
  --bs-secondary: #6c757d;
  --bs-success: #198754;
  --bs-danger: #dc3545;
  --bs-warning: #ffc107;
  --bs-info: #0dcaf0;
  --bs-light: #f8f9fa;
  --bs-dark: #212529;
}
```

### Custom Color Schemes

Create your own color combinations:

```html
<div class="text-bg-custom" style="--bs-custom-bg: #6f42c1; --bs-custom-color: #ffffff;">
  Custom background with contrasting text
</div>
```

## Best Practices

### 1. Semantic Usage
- Use colors to convey meaning, not just decoration
- Maintain consistent color hierarchy
- Reserve certain colors for specific actions (red for danger, green for success)

### 2. Contrast Considerations
- Always test with actual content
- Consider color blindness accessibility
- Provide sufficient contrast ratios
- Use tools to verify contrast compliance

### 3. Performance
- CSS utilities are lightweight and fast
- Avoid unnecessary color variations
- Use semantic HTML with color classes

### 4. Responsive Design
- Ensure colors work across different screen sizes
- Test in various lighting conditions
- Consider dark mode compatibility

## Common Patterns

### Status Indicators
```html
<!-- Success state -->
<div class="text-bg-success p-2 rounded">
  ✓ Completed successfully
</div>

<!-- Error state -->
<div class="text-bg-danger p-2 rounded">
  ✗ Error occurred
</div>

<!-- Warning state -->
<div class="text-bg-warning p-2 rounded">
  ⚠ Please review changes
</div>
```

### Navigation States
```html
<!-- Active navigation -->
<nav class="text-bg-dark p-2">
  <a href="#" class="text-bg-primary px-3 py-2 rounded">Home</a>
  <a href="#" class="text-bg-light px-3 py-2 rounded">About</a>
</nav>
```

### Feature Highlighting
```html
<div class="row">
  <div class="col-md-4">
    <div class="text-bg-primary p-3 rounded text-center">
      <h5>Featured</h5>
      <p>Premium feature with special styling</p>
    </div>
  </div>
  <div class="col-md-4">
    <div class="text-bg-secondary p-3 rounded text-center">
      <h5>Standard</h5>
      <p>Regular feature with normal styling</p>
    </div>
  </div>
  <div class="col-md-4">
    <div class="text-bg-light p-3 rounded text-center">
      <h5>Basic</h5>
      <p>Basic feature with minimal styling</p>
    </div>
  </div>
</div>
```

## Troubleshooting

### Common Issues

1. **Poor Contrast**
   - Check if custom CSS variables are overriding contrast function
   - Verify color values are accessible
   - Test with actual content and users

2. **Inconsistent Colors**
   - Ensure consistent use of color scheme
   - Document color usage in style guide
   - Use design tokens for consistency

3. **CSS Specificity Issues**
   - Check for overriding styles
   - Use more specific selectors if needed
   - Verify Bootstrap version compatibility

### Debugging Tools

- **Browser DevTools**: Inspect computed colors and contrast
- **Color Contrast Checkers**: Online tools for WCAG compliance
- **Screen Readers**: Test with actual assistive technology
- **Multiple Devices**: Verify colors work across platforms

## Migration Notes

### From Bootstrap 4 to 5

The color and background utilities remain largely consistent:

- **Same Class Names**: `.text-bg-{color}` structure maintained
- **Enhanced Functionality**: Better contrast calculation
- **CSS Variables**: Added runtime customization support
- **Extended Palette**: More color options available

## Summary

Bootstrap's color and background utilities provide:

- **Automatic Contrast**: Built-in text color determination
- **Comprehensive Colors**: Full theme color palette
- **Component Integration**: Works with all Bootstrap components
- **Accessibility**: WCAG compliance considerations
- **Customization**: Sass and CSS variable support
- **Performance**: Lightweight CSS-only solution

Use these utilities to create visually appealing, accessible interfaces with proper color hierarchy and meaning.
