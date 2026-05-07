# Bootstrap Vertical Rule

## Overview

Use custom vertical rule helper to create vertical dividers like `<hr>` elements. Vertical rules are inspired by the `<hr>` element, allowing you to create vertical dividers in common layouts.

## How It Works

The `.vr` class creates a vertical divider with:

- **1px Width**: Creates a thin vertical line
- **Current Color**: Uses `currentColor` for the divider color
- **25% Opacity**: Semi-transparent for subtle visual separation
- **1em Height**: Scales with font size of parent element
- **Flexbox Compatible**: Works seamlessly with flexbox layouts

## Basic Usage

### Simple Vertical Rule

Create a basic vertical divider:

```html
<div class="vr"></div>
```

### Vertical Rules in Stacks

They can also be used in stacks to separate items:

```html
<div class="hstack gap-3">
  <div class="p-2">First item</div>
  <div class="vr"></div>
  <div class="p-2">Second item</div>
  <div class="vr"></div>
  <div class="p-2">Third item</div>
</div>
```

## Advanced Usage

### Vertical Rules in Flex Layouts

Vertical rules scale their height in flex layouts:

```html
<div class="d-flex" style="height: 200px;">
  <div class="vr"></div>
</div>
```

### Vertical Rules with Custom Height

Override the default height using inline styles:

```html
<div class="vr" style="height: 50px;"></div>
<div class="vr" style="height: 100px;"></div>
<div class="vr" style="height: 2rem;"></div>
```

### Vertical Rules in Grid Systems

Use vertical rules within Bootstrap grid layouts:

```html
<div class="row">
  <div class="col-4">
    <div class="p-3 bg-light">
      Content area 1
    </div>
    <div class="vr" style="height: 100px;"></div>
  </div>
  <div class="col-4">
    <div class="p-3 bg-light">
      Content area 2
    </div>
    <div class="vr" style="height: 100px;"></div>
  </div>
  <div class="col-4">
    <div class="p-3 bg-light">
      Content area 3
    </div>
  </div>
</div>
```

## Common Use Cases

### 1. Navigation Separation

Separate navigation items or sections:

```html
<nav class="navbar">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Brand</a>
    <div class="vr ms-3"></div>
    <div class="navbar-nav">
      <a class="nav-link" href="#">Home</a>
      <a class="nav-link" href="#">About</a>
      <a class="nav-link" href="#">Contact</a>
    </div>
  </div>
</nav>
```

### 2. Card Layouts

Divide card content or separate card sections:

```html
<div class="card">
  <div class="card-body">
    <h5 class="card-title">Card Title</h5>
    <p class="card-text">First section of content.</p>
    <div class="vr my-3"></div>
    <p class="card-text">Second section of content.</p>
    <div class="vr my-3"></div>
    <p class="card-text">Third section of content.</p>
  </div>
</div>
```

### 3. Form Separation

Separate form sections or create visual hierarchy:

```html
<form>
  <div class="mb-3">
    <label for="name" class="form-label">Personal Information</label>
    <input type="text" class="form-control" id="name">
  </div>
  <div class="vr my-3"></div>
  <div class="mb-3">
    <label for="email" class="form-label">Contact Information</label>
    <input type="email" class="form-control" id="email">
  </div>
  <div class="vr my-3"></div>
  <div class="mb-3">
    <label for="message" class="form-label">Message</label>
    <textarea class="form-control" id="message" rows="3"></textarea>
  </div>
  <button type="submit" class="btn btn-primary">Submit</button>
</form>
```

### 4. Sidebar Layouts

Create visual separation in sidebar layouts:

```html
<div class="row">
  <div class="col-md-3">
    <div class="bg-light p-3">
      <h6>Sidebar</h6>
      <ul class="nav flex-column">
        <li class="nav-item">
          <a href="#" class="nav-link">Dashboard</a>
        </li>
        <li class="nav-item">
          <a href="#" class="nav-link">Profile</a>
        </li>
      </ul>
    </div>
  </div>
  <div class="vr" style="height: 300px;"></div>
  <div class="col-md-9">
    <div class="p-3">
      <h1>Main Content</h1>
      <p>Main content area goes here.</p>
    </div>
  </div>
</div>
```

### 5. List Separation

Create visual breaks in lists:

```html
<ul class="list-group">
  <li class="list-group-item">First item</li>
  <li class="list-group-item">Second item</li>
  <div class="vr"></div>
  <li class="list-group-item">
    <div class="vr"></div>
    <div>Sub-item 1</div>
  </li>
  <li class="list-group-item">
    <div class="vr"></div>
    <div>Sub-item 2</div>
  </li>
</ul>
```

## CSS Implementation

### Core CSS

```css
.vr {
  display: inline-block;
  align-self: stretch;
  width: 1px;
  min-height: 1em;
  background-color: currentColor;
  opacity: 0.25;
}
```

### Sass Variables

Customize vertical rule Sass variables to change their appearance:

```scss
$vr-border-width:             var(--#{$prefix}border-width);
```

### Custom Vertical Rules

Create custom vertical rule styles:

```css
.vr-thick {
  width: 3px;
  background-color: #dee2e6;
  opacity: 0.5;
}

.vr-dashed {
  width: 1px;
  background-color: currentColor;
  opacity: 0.5;
  border-top: 2px dashed currentColor;
}

.vr-gradient {
  width: 2px;
  background: linear-gradient(to bottom, transparent, currentColor);
  opacity: 0.3;
}
```

## Advanced Techniques

### Responsive Vertical Rules

Create vertical rules that adapt to different screen sizes:

```html
<div class="vr d-none d-md-block"></div>
```

### Vertical Rules with Colors

Apply color utilities to vertical rules:

```html
<div class="vr text-primary"></div>
<div class="vr text-success"></div>
<div class="vr text-danger"></div>
<div class="vr text-warning"></div>
<div class="vr text-info"></div>
```

### Animated Vertical Rules

Add subtle animations to vertical rules:

```css
.vr-animated {
  opacity: 0;
  transform: scaleY(0);
  transition: all 0.3s ease;
}

.vr-animated:hover {
  opacity: 1;
  transform: scaleY(1);
}
```

### Vertical Rules with Icons

Combine vertical rules with icon utilities:

```html
<div class="vr">
  <i class="bi bi-three-dots-vertical"></i>
</div>
```

## Best Practices

### 1. Semantic Usage

- **Visual Separation**: Use for visual content separation, not semantic breaks
- **Consistent Spacing**: Apply margin utilities for consistent spacing
- **Color Harmony**: Use colors that complement your design system
- **Accessibility**: Ensure vertical rules don't interfere with screen readers

### 2. Layout Integration

- **Flexbox Compatible**: Works seamlessly with flexbox utilities
- **Grid Friendly**: Integrates well with Bootstrap grid system
- **Component Based**: Use within cards, forms, and navigation
- **Responsive Design**: Consider how vertical rules adapt to different screen sizes

### 3. Performance Considerations

- **Lightweight**: Minimal CSS overhead
- **Hardware Accelerated**: Use transform for smooth animations
- **Efficient Selectors**: Simple class-based implementation
- **Minimal DOM**: No additional elements required

### 4. Common Patterns

#### Navigation with Vertical Rules
```html
<nav class="navbar navbar-expand-lg">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Logo</a>
    <div class="vr ms-3"></div>
    <div class="navbar-nav">
      <a class="nav-link" href="#">Home</a>
      <a class="nav-link" href="#">Features</a>
      <div class="vr ms-3"></div>
      <a class="nav-link" href="#">Pricing</a>
      <a class="nav-link" href="#">Contact</a>
    </div>
  </div>
</nav>
```

#### Card Content Sections
```html
<div class="card">
  <div class="card-header">
    <h5 class="card-title">Card Header</h5>
  </div>
  <div class="card-body">
    <div class="d-flex align-items-center mb-3">
      <div class="vr flex-grow-1"></div>
      <h6 class="mb-0">Section Title</h6>
    </div>
    <p class="card-text">Content for this section.</p>
    <div class="vr my-3"></div>
    <div class="d-flex align-items-center mb-3">
      <div class="vr flex-grow-1"></div>
      <h6 class="mb-0">Another Section</h6>
    </div>
    <p class="card-text">More content here.</p>
  </div>
</div>
```

#### Form Field Separation
```html
<form class="needs-validation">
  <div class="mb-3">
    <label for="username" class="form-label">Username</label>
    <input type="text" class="form-control" id="username" required>
  </div>
  <div class="vr my-3"></div>
  <div class="mb-3">
    <label for="password" class="form-label">Password</label>
    <input type="password" class="form-control" id="password" required>
  </div>
  <div class="vr my-3"></div>
  <div class="mb-3">
    <div class="form-check">
      <input class="form-check-input" type="checkbox" id="remember">
      <label class="form-check-label" for="remember">Remember me</label>
    </div>
    <button type="submit" class="btn btn-primary">Sign In</button>
  </div>
</form>
```

## Troubleshooting

### Common Issues

1. **Vertical Rule Not Visible**
   - Check if parent element has sufficient height
   - Verify color contrast with background
   - Ensure no conflicting opacity settings

2. **Vertical Rule Too Short**
   - Check if parent has defined height
   - Use custom height styles if needed
   - Verify min-height is not overriding

3. **Spacing Issues**
   - Use margin utilities for consistent spacing
   - Check for padding conflicts
   - Ensure proper responsive behavior

4. **Color Problems**
   - Verify currentColor is working as expected
   - Test with different background colors
   - Use explicit color classes if needed

### Debugging Tips

```html
<!-- Add background to see vertical rule -->
<div class="bg-light p-3">
  <div class="vr"></div>
</div>

<!-- Test different heights -->
<div class="vr" style="height: 50px;"></div>
<div class="vr" style="height: 100px;"></div>
<div class="vr" style="height: 200px;"></div>
```

## Browser Compatibility

### Modern Browser Support
- **Chrome**: Full support
- **Firefox**: Full support
- **Safari**: Full support
- **Edge**: Full support

### Legacy Browser Considerations
- **IE11**: Limited support for some CSS properties
- **Older Mobile**: May have rendering inconsistencies
- **Fallback Options**: Consider border-based dividers for older browsers

## Summary

Bootstrap's Vertical Rule utility provides:

- **Simple Implementation**: Single class `.vr` for vertical dividers
- **Flexible Sizing**: Scales with parent element height
- **Color Adaptive**: Uses currentColor for automatic color matching
- **Layout Integration**: Works seamlessly with flexbox and grid systems
- **Customizable**: Easy to style with CSS variables and utilities
- **Performance**: Lightweight CSS-only solution
- **Semantic**: Visual separation without semantic implications

Use vertical rules to create clean, organized layouts with clear visual hierarchy and consistent spacing between content sections.
