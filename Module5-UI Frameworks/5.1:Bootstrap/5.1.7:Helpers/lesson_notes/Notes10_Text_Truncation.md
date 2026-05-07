# Bootstrap Text Truncation

## Overview

Truncate long strings of text with an ellipsis. Bootstrap's text truncation utilities help you manage text overflow in a clean, consistent way across your application.

## How It Works

The `.text-truncate` class truncates text by:

1. **Ellipsis Addition**: Adds "..." at the truncation point
2. **Overflow Control**: Uses `overflow: hidden` to prevent text wrapping
3. **White Space**: Uses `white-space: nowrap` to prevent line breaks
4. **Display Requirement**: Requires `display: inline-block` or `display: block`

## Basic Usage

### Block Level Truncation

Apply truncation to block-level elements:

```html
<div class="row">
  <div class="col-2 text-truncate">
    This text is quite long, and will be truncated once displayed.
  </div>
</div>
```

### Inline Level Truncation

Apply truncation to inline elements with specific max-width:

```html
<span class="d-inline-block text-truncate" style="max-width: 150px;">
  This text is quite long, and will be truncated once displayed.
</span>
```

## Common Use Cases

### 1. Card Titles

Truncate long card titles to maintain consistent card heights:

```html
<div class="card">
  <div class="card-body">
    <h5 class="card-title text-truncate">
      This is a very long card title that needs to be truncated to maintain consistent card layout across different content lengths
    </h5>
    <p class="card-text">Card content goes here.</p>
  </div>
</div>
```

### 2. Table Cells

Truncate text in table cells to prevent layout breaking:

```html
<div class="table-responsive">
  <table class="table">
    <thead>
      <tr>
        <th scope="col">Product Name</th>
        <th scope="col">Description</th>
        <th scope="col">Price</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>
          <div class="text-truncate" style="max-width: 200px;">
            Very Long Product Name That Should Be Truncated
          </div>
        </td>
        <td>Product description here</td>
        <td>$29.99</td>
      </tr>
    </tbody>
  </table>
</div>
```

### 3. Navigation Items

Truncate long navigation menu items:

```html
<nav class="navbar">
  <div class="container-fluid">
    <a class="navbar-brand text-truncate" href="#" style="max-width: 150px;">
      Very Long Brand Name That Needs Truncation
    </a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link text-truncate" href="#" style="max-width: 120px;">
            This is a very long navigation item that should be truncated
          </a>
        </li>
      </ul>
    </div>
  </div>
</nav>
```

### 4. List Items

Truncate text in lists to maintain consistent layout:

```html
<ul class="list-group">
  <li class="list-group-item">
    <div class="d-flex justify-content-between align-items-center">
      <span class="text-truncate" style="max-width: 200px;">
        This is a very long list item that needs to be truncated to maintain consistent layout
      </span>
      <span class="badge bg-primary ms-2">New</span>
    </div>
  </li>
  <li class="list-group-item">
    <div class="text-truncate" style="max-width: 200px;">
      Another very long list item that demonstrates truncation behavior
    </div>
  </li>
</ul>
```

### 5. Breadcrumb Items

Truncate breadcrumb items to prevent overflow:

```html
<nav aria-label="breadcrumb">
  <ol class="breadcrumb">
    <li class="breadcrumb-item">
      <a href="#" class="text-truncate" style="max-width: 100px;">
        This is a very long breadcrumb item that needs truncation
      </a>
    </li>
    <li class="breadcrumb-item">
      <a href="#" class="text-truncate" style="max-width: 100px;">
        Another long breadcrumb item
      </a>
    </li>
    <li class="breadcrumb-item active" aria-current="page">
      <span class="text-truncate" style="max-width: 100px;">
        Current page with very long title
      </span>
    </li>
  </ol>
</nav>
```

## Advanced Implementation

### Responsive Truncation

Apply different truncation widths at different breakpoints:

```html
<div class="row">
  <div class="col-12 col-md-6">
    <div class="text-truncate" style="max-width: 200px;">
      Truncate at 200px on mobile
    </div>
  </div>
  <div class="col-12 col-md-6">
    <div class="text-truncate" style="max-width: 300px;">
      Truncate at 300px on desktop
    </div>
  </div>
</div>
```

### Dynamic Truncation with JavaScript

Toggle truncation based on user interaction:

```javascript
// Toggle truncation
function toggleTruncation(elementId, enable) {
  const element = document.getElementById(elementId);
  if (enable) {
    element.classList.add('text-truncate');
  } else {
    element.classList.remove('text-truncate');
  }
}

// Expand truncated text
function expandText(elementId) {
  const element = document.getElementById(elementId);
  element.classList.remove('text-truncate');
  element.style.maxWidth = 'none';
}
```

```html
<div class="card">
  <div class="card-body">
    <h5 id="truncatedTitle" class="text-truncate" style="max-width: 200px;">
      Long title that can be expanded
    </h5>
    <p class="card-text">Content here...</p>
    <button class="btn btn-sm btn-outline-primary" onclick="expandText('truncatedTitle')">
      Show Full Title
    </button>
  </div>
</div>
```

### Multi-line Truncation

For scenarios requiring multiple lines with truncation:

```html
<div class="text-truncate" style="display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden;">
  This is a very long text that should be truncated after two lines. The truncation will show an ellipsis at the end of the second line, providing a clean way to handle longer text content while maintaining readability and design consistency.
</div>
```

## Best Practices

### 1. Accessibility Considerations

- **Full Text Available**: Provide ways to access full text (e.g., expand on click)
- **Screen Reader Support**: Ensure truncated content is still accessible
- **Keyboard Navigation**: Truncated elements should remain keyboard accessible
- **Title Attributes**: Use `title` attribute for full text on hover

```html
<!-- Good: Accessible truncation -->
<div class="text-truncate" title="This is the full text that was truncated">
  Truncated text here...
</div>

<!-- Better: Expandable truncation -->
<div class="text-truncate" id="truncatableText" title="Full text available on click">
  Truncated text here...
</div>
<button class="btn btn-sm btn-link" onclick="showFullText()">
  Show More
</button>

<script>
function showFullText() {
  const element = document.getElementById('truncatableText');
  element.classList.remove('text-truncate');
  element.style.whiteSpace = 'normal';
}
</script>
```

### 2. Performance Optimization

- **Efficient Selectors**: Use specific classes rather than complex selectors
- **Minimal DOM Manipulation**: Avoid frequent DOM changes for truncation
- **CSS Hardware Acceleration**: Use `transform: translateZ(0)` for smooth animations

### 3. Design Consistency

- **Consistent Widths**: Use standard max-width values across similar components
- **Visual Hierarchy**: Apply truncation consistently within same component types
- **User Experience**: Provide clear indicators when text is truncated

### 4. Responsive Design

- **Mobile-First**: Consider smaller screens first for truncation
- **Progressive Enhancement**: Expand truncation on larger screens
- **Touch-Friendly**: Ensure truncated areas remain tappable on mobile

## Troubleshooting

### Common Issues

1. **Truncation Not Working**
   - Check if element has `display: inline-block` or `display: block`
   - Verify `white-space: nowrap` is applied
   - Ensure parent container has defined width

2. **Text Not Truncating**
   - Check if `max-width` is set appropriately
   - Verify no conflicting CSS rules
   - Test in different browsers

3. **Layout Breaking**
   - Ensure truncated elements don't break grid layouts
   - Check for padding or margin conflicts
   - Test with various text lengths

### Debugging Tips

```html
<!-- Add border to see truncation boundary -->
<div class="text-truncate border border-primary" style="max-width: 200px;">
  This text will be truncated at 200px
</div>

<!-- Test with different content lengths -->
<div class="text-truncate" style="max-width: 150px;">Short text</div>
<div class="text-truncate" style="max-width: 150px;">Medium length text that should truncate</div>
<div class="text-truncate" style="max-width: 150px;">Very long text that definitely truncates</div>
```

## CSS Implementation

### Core CSS

```css
.text-truncate {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
```

### Custom Truncation Styles

Create custom truncation effects:

```css
/* Custom truncation with fade effect */
.text-truncate-fade {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  position: relative;
}

.text-truncate-fade::after {
  content: '';
  position: absolute;
  right: 0;
  top: 0;
  width: 50px;
  height: 100%;
  background: linear-gradient(to right, transparent, white);
}

/* Multi-line truncation */
.text-truncate-multiline {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
}
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
- **Fallback Options**: Consider JavaScript polyfills for older browsers

## Summary

Bootstrap's Text Truncation utilities provide:

- **Simple Implementation**: Single class `.text-truncate` for basic truncation
- **Flexible Usage**: Works with both block and inline elements
- **Responsive Design**: Can be combined with max-width for responsive truncation
- **Accessibility**: Maintains screen reader compatibility
- **Performance**: Lightweight CSS-only solution
- **Cross-Browser**: Consistent behavior across all modern browsers
- **Integration**: Works seamlessly with all Bootstrap components

Use text truncation utilities to create clean, consistent layouts that handle varying text lengths gracefully while maintaining design integrity and user experience.
