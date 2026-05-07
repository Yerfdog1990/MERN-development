# Bootstrap Colored Links

## Overview

Colored links with hover states provide visual feedback and enhance user interaction. Bootstrap's link utilities offer comprehensive styling options for navigation and interactive elements.

## How It Works

Bootstrap's link utilities use:
- **Base Colors**: Applied via `.link-{color}` classes
- **Hover States**: Built-in `:hover` and `:focus` styling
- **Emphasis Options**: Special `.link-body-emphasis` for high-contrast links
- **Utility Modifiers**: Additional classes for underline, opacity, and offset styling

**Important Note**: `.link-body-emphasis` is currently the only colored link that adapts to color modes. It's treated as a special case until v6 arrives with more thorough theme color support for color modes.

## Basic Usage

### Standard Link Colors

Apply color classes to links for visual hierarchy:

```html
<p><a href="#" class="link-primary">Primary link</a></p>
<p><a href="#" class="link-secondary">Secondary link</a></p>
<p><a href="#" class="link-success">Success link</a></p>
<p><a href="#" class="link-danger">Danger link</a></p>
<p><a href="#" class="link-warning">Warning link</a></p>
<p><a href="#" class="link-info">Info link</a></p>
<p><a href="#" class="link-light">Light link</a></p>
<p><a href="#" class="link-dark">Dark link</a></p>
<p><a href="#" class="link-body-emphasis">Emphasis link</a></p>
```

## Available Link Classes

### Standard Theme Colors

| Class | Color | Description |
|--------|-------|-------------|
| `.link-primary` | `$primary` | Primary theme color |
| `.link-secondary` | `$secondary` | Secondary theme color |
| `.link-success` | `$success` | Success state color |
| `.link-danger` | `$danger` | Danger/warning color |
| `.link-warning` | `$warning` | Warning state color |
| `.link-info` | `$info` | Informational color |
| `.link-light` | `$light` | Light theme color |
| `.link-dark` | `$dark` | Dark theme color |
| `.link-body-emphasis` | High contrast | Special emphasis link with mode adaptation |

## Advanced Styling

### Utility Modifiers

Enhance links with additional utility classes:

```html
<!-- Link with offset and underline opacity -->
<p><a href="#" class="link-primary link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover">Primary link</a></p>

<!-- Multiple utility combinations -->
<p><a href="#" class="link-secondary link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover">Secondary link</a></p>
<p><a href="#" class="link-success link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover">Success link</a></p>
<p><a href="#" class="link-danger link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover">Danger link</a></p>
<p><a href="#" class="link-warning link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover">Warning link</a></p>
<p><a href="#" class="link-info link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover">Info link</a></p>
<p><a href="#" class="link-light link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover">Light link</a></p>
<p><a href="#" class="link-dark link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover">Dark link</a></p>
<p><a href="#" class="link-body-emphasis link-offset-2 link-underline-opacity-25 link-underline-opacity-75-hover">Emphasis link</a></p>
```

## Interactive States

### Hover and Focus

Link utilities automatically handle hover and focus states with appropriate visual feedback:

```html
<!-- Hover effect demonstration -->
<div class="p-3">
  <a href="#" class="link-primary">Hover over me to see the hover effect</a>
</div>

<!-- Focus effect demonstration -->
<div class="p-3">
  <a href="#" class="link-secondary">Tab to me to see the focus effect</a>
</div>
```

### Active States

For navigation, combine with active state classes:

```html
<nav class="nav">
  <a href="#" class="nav-link link-primary active">Active page</a>
  <a href="#" class="nav-link link-secondary">Other page</a>
</nav>
```

## Component Integration

### Navigation Menus

Style navigation links with appropriate colors:

```html
<!-- Primary navigation -->
<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <div class="container-fluid">
    <a class="navbar-brand link-light" href="#">Brand</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a href="#" class="nav-link link-light">Home</a>
        </li>
        <li class="nav-item">
          <a href="#" class="nav-link link-light active">Features</a>
        </li>
        <li class="nav-item">
          <a href="#" class="nav-link link-light">About</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
```

### Breadcrumb Navigation

```html
<nav aria-label="breadcrumb">
  <ol class="breadcrumb">
    <li class="breadcrumb-item"><a href="#" class="link-primary">Home</a></li>
    <li class="breadcrumb-item"><a href="#" class="link-secondary">Library</a></li>
    <li class="breadcrumb-item active" aria-current="page">Data</li>
  </ol>
</nav>
```

### Pagination

```html
<nav aria-label="Page navigation">
  <ul class="pagination">
    <li class="page-item disabled">
      <a class="page-link" href="#" tabindex="-1">Previous</a>
    </li>
    <li class="page-item active" aria-current="page">
      <a class="page-link link-primary" href="#">1</a>
    </li>
    <li class="page-item">
      <a class="page-link link-secondary" href="#">2</a>
    </li>
    <li class="page-item">
      <a class="page-link link-secondary" href="#">3</a>
    </li>
  </ul>
</nav>
```

### Card Links

```html
<div class="card">
  <div class="card-body">
    <h5 class="card-title">Card with Links</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Primary action</a>
    <a href="#" class="link-secondary">Secondary link</a>
  </div>
</div>
```

## Accessibility Considerations

### Color Contrast

**Important**: Using color to add meaning only provides a visual indication, which will not be conveyed to users of assistive technologies like screen readers.

**Best Practices**:
- Ensure meaning is obvious from the content itself
- Use sufficient color contrast ratios
- Provide alternative text for color-coded information
- Test with actual screen readers

```html
<!-- Good: Meaning is obvious from content -->
<a href="#" class="link-success">
  ✓ Success! Your changes have been saved.
</a>

<!-- Better: Include additional context -->
<a href="#" class="link-success">
  ✓ Success! Your changes have been saved.
  <span class="visually-hidden">Your form has been successfully submitted and processed.</span>
</a>
```

### Focus Management

Ensure links are keyboard accessible:

```html
<!-- Good: Proper focus handling -->
<nav>
  <a href="#" class="link-primary" tabindex="0">Accessible link</a>
  <a href="#" class="link-secondary" tabindex="0">Another accessible link</a>
</nav>

<!-- Avoid: Non-focusable elements -->
<div>
  <a href="#" class="link-primary">Link without tabindex</a>
  <span class="text-muted">|</span>
  <a href="#" class="link-secondary">Another link without tabindex</a>
</div>
```

## Customization

### Sass Variables

Override default link colors by modifying Sass variables:

```scss
// Custom theme colors
$link-color:                              $primary;
$link-decoration:                           $link-decoration;
$link-hover-color:                        $link-hover-color;
$link-hover-decoration:                     $link-hover-decoration;

// Override specific link colors
$link-primary-color:                     #0d6efd;
$link-secondary-color:                   #6c757d;
$link-success-color:                       #198754;
$link-danger-color:                          #dc3545;
$link-warning-color:                        #ffc107;
$link-info-color:                           #0dcaf0;
$link-light-color:                         #f8f9fa;
$link-dark-color:                           #212529;
```

### CSS Variables (v5.2.0+)

For runtime customization, use CSS variables:

```css
:root {
  --bs-link-color: #0d6efd;
  --bs-link-decoration: underline;
  --bs-link-hover-color: #0a58ca;
  --bs-link-hover-decoration: underline;
}

/* Apply custom colors */
.custom-link {
  color: var(--bs-custom-link-color);
  text-decoration: var(--bs-link-decoration);
}

.custom-link:hover {
  color: var(--bs-link-hover-color);
  text-decoration: var(--bs-link-hover-decoration);
}
```

## Utility Classes Reference

### Offset Classes

| Class | Description |
|--------|-------------|
| `.link-offset-1` | Adds 0.25rem offset |
| `.link-offset-2` | Adds 0.5rem offset |
| `.link-offset-3` | Adds 1rem offset |

### Underline Opacity Classes

| Class | Description |
|--------|-------------|
| `.link-underline-opacity-0` | Removes underline |
| `.link-underline-opacity-10` | 10% underline opacity |
| `.link-underline-opacity-25` | 25% underline opacity |
| `.link-underline-opacity-50` | 50% underline opacity |
| `.link-underline-opacity-75` | 75% underline opacity |
| `.link-underline-opacity-100` | Full underline opacity |

### Hover Modifiers

| Class | Description |
|--------|-------------|
| `.link-opacity-10-hover` | 10% opacity on hover |
| `.link-opacity-25-hover` | 25% opacity on hover |
| `.link-opacity-50-hover` | 50% opacity on hover |
| `.link-opacity-75-hover` | 75% opacity on hover |
| `.link-opacity-100-hover` | Full opacity on hover |

## Best Practices

### 1. Semantic Usage
- Use colors to convey meaning, not just decoration
- Maintain consistent color hierarchy throughout your application
- Reserve certain colors for specific actions (red for danger, green for success)

### 2. Accessibility
- Ensure sufficient contrast between link color and background
- Provide focus indicators for keyboard navigation
- Include descriptive text for screen readers
- Test with actual assistive technologies

### 3. Performance
- Link utilities are lightweight CSS-only
- Avoid unnecessary custom CSS
- Use utility classes for consistency
- Consider CSS-in-JS optimization for large link lists

### 4. Common Patterns

#### Call to Action Links
```html
<div class="text-center">
  <h3>Get Started Today</h3>
  <p>Join thousands of satisfied customers.</p>
  <a href="#" class="btn btn-primary btn-lg">Sign Up Now</a>
  <a href="#" class="link-secondary ms-3">Learn More</a>
</div>
```

#### Documentation Links
```html
<article>
  <h2>Getting Started</h2>
  <p>Learn the basics with our comprehensive guide.</p>
  <a href="#" class="link-primary">Read Documentation</a>
  <a href="#" class="link-secondary">View Examples</a>
  <a href="#" class="link-info">Get Help</a>
</article>
```

#### Footer Links
```html
<footer class="bg-dark text-center py-3">
  <div class="container">
    <p>&copy; 2024 Your Company</p>
    <nav>
      <a href="#" class="link-light me-3">Privacy</a>
      <span class="text-muted">|</span>
      <a href="#" class="link-light ms-3">Terms</a>
    </nav>
  </div>
</footer>
```

## Troubleshooting

### Common Issues

1. **Links Not Styling**
   - Verify class names are correct
   - Check for CSS specificity conflicts
   - Ensure Bootstrap CSS is loaded

2. **Hover States Not Working**
   - Check if hover classes are applied
   - Verify no conflicting CSS rules
   - Test in different browsers

3. **Poor Contrast**
   - Test color combinations with contrast checkers
   - Consider different background colors
   - Use high-contrast alternatives

4. **Focus Issues**
   - Ensure links have proper tabindex
   - Test keyboard navigation
   - Verify focus indicators are visible

## Migration Notes

### From Bootstrap 4 to 5

Link utilities remain largely consistent:
- **Class Structure**: `.link-{color}` maintained
- **Enhanced Features**: New utility modifiers added
- **Mode Support**: Better preparation for color modes
- **CSS Variables**: Added runtime customization support

## Summary

Bootstrap's colored link utilities provide:

- **Comprehensive Colors**: Full theme color palette
- **Interactive States**: Built-in hover and focus handling
- **Utility Modifiers**: Offset, opacity, and decoration options
- **Accessibility**: Screen reader and keyboard navigation support
- **Customization**: Sass and CSS variable support
- **Performance**: Lightweight CSS-only implementation
- **Integration**: Works with all Bootstrap components

Use these utilities to create visually appealing, accessible navigation and interactive elements that enhance user experience and provide clear visual feedback.
