# Bootstrap Stacks

## Overview

Shorthand helpers that build on top of flexbox utilities to make component layout faster and easier than ever. Stacks offer a shortcut for applying a number of flexbox properties to quickly and easily create layouts in Bootstrap.

**Credit**: All credit for the concept and implementation goes to the open source Pylon project.

**Browser Support Note**: Support for gap utilities with flexbox isn't available in Safari prior to 14.5, so consider verifying your intended browser support. Grid layout should have no issues.

## Stack Types

### Vertical Stacks (`.vstack`)

Use `.vstack` to create vertical layouts. Stacked items are full-width by default. Use `.gap-*` utilities to add space between items.

```html
<div class="vstack gap-3">
  <div class="p-2">First item</div>
  <div class="p-2">Second item</div>
  <div class="p-2">Third item</div>
</div>
```

**Key Features:**
- **Full Width**: Items take up full available width
- **Vertical Direction**: Stacks items from top to bottom
- **Flexible Height**: Can grow to fill available space
- **Gap Support**: Works with gap utilities for spacing

### Horizontal Stacks (`.hstack`)

Use `.hstack` for horizontal layouts. Stacked items are vertically centered by default and only take up their necessary width. Use `.gap-*` utilities to add space between items.

```html
<div class="hstack gap-3">
  <div class="p-2">First item</div>
  <div class="p-2">Second item</div>
  <div class="p-2">Third item</div>
</div>
```

**Key Features:**
- **Natural Width**: Items only take up necessary width
- **Vertical Centering**: Items are vertically centered by default
- **Horizontal Direction**: Stacks items from left to right
- **Gap Support**: Works with gap utilities for spacing

## Advanced Horizontal Stacks

### Using Margin Utilities

Use horizontal margin utilities like `.ms-auto` as spacers:

```html
<div class="hstack gap-3">
  <div class="p-2">First item</div>
  <div class="p-2 ms-auto">Second item</div>
  <div class="p-2">Third item</div>
</div>
```

### Using Vertical Rules

Add vertical rules (`<div class="vr"></div>`) for visual separation:

```html
<div class="hstack gap-3">
  <div class="p-2">First item</div>
  <div class="p-2 ms-auto">Second item</div>
  <div class="vr"></div>
  <div class="p-2">Third item</div>
</div>
```

## Practical Examples

### Button Stacks

Use `.vstack` to stack buttons and other elements:

```html
<div class="vstack gap-2 col-md-5 mx-auto">
  <button type="button" class="btn btn-secondary">Save changes</button>
  <button type="button" class="btn btn-outline-secondary">Cancel</button>
</div>
```

### Inline Forms

Create an inline form with `.hstack`:

```html
<div class="hstack gap-3">
  <input class="form-control me-auto" type="text" placeholder="Add your item here..." aria-label="Add your item here...">
  <button type="button" class="btn btn-secondary">Submit</button>
  <div class="vr"></div>
  <button type="button" class="btn btn-outline-danger">Reset</button>
</div>
```

## Common Implementation Patterns

### 1. Navigation Elements

```html
<!-- Horizontal navigation with vertical rule -->
<nav class="hstack gap-3">
  <a href="#" class="nav-link">Home</a>
  <a href="#" class="nav-link">About</a>
  <div class="vr"></div>
  <a href="#" class="nav-link">Contact</a>
  <a href="#" class="nav-link ms-auto">Login</a>
</nav>

<!-- Vertical navigation for mobile -->
<nav class="vstack gap-2">
  <a href="#" class="nav-link">Home</a>
  <a href="#" class="nav-link">About</a>
  <a href="#" class="nav-link">Contact</a>
  <a href="#" class="nav-link">Login</a>
</nav>
```

### 2. Card Actions

```html
<div class="card">
  <div class="card-body">
    <h5 class="card-title">Card with Actions</h5>
    <p class="card-text">Some quick example text.</p>
  </div>
  <div class="card-footer">
    <div class="hstack gap-2">
      <button class="btn btn-primary btn-sm">View</button>
      <button class="btn btn-outline-secondary btn-sm">Edit</button>
      <button class="btn btn-outline-danger btn-sm ms-auto">Delete</button>
    </div>
  </div>
</div>
```

### 3. Form Layouts

```html
<!-- Vertical form stack -->
<div class="vstack gap-3">
  <div class="form-group">
    <label for="name" class="form-label">Name</label>
    <input type="text" class="form-control" id="name">
  </div>
  <div class="form-group">
    <label for="email" class="form-label">Email</label>
    <input type="email" class="form-control" id="email">
  </div>
  <div class="form-group">
    <label for="message" class="form-label">Message</label>
    <textarea class="form-control" id="message" rows="3"></textarea>
  </div>
  <button type="submit" class="btn btn-primary">Submit</button>
</div>

<!-- Horizontal form with inline elements -->
<div class="hstack gap-3">
  <input type="text" class="form-control" placeholder="Search...">
  <button class="btn btn-outline-secondary">Search</button>
  <div class="vr"></div>
  <button class="btn btn-outline-primary">Advanced</button>
</div>
```

### 4. List Items

```html
<!-- Vertical list -->
<div class="vstack gap-2">
  <div class="border rounded p-3">Item 1: Description here</div>
  <div class="border rounded p-3">Item 2: Description here</div>
  <div class="border rounded p-3">Item 3: Description here</div>
</div>

<!-- Horizontal list with tags -->
<div class="hstack gap-2">
  <span class="badge bg-primary">Tag 1</span>
  <span class="badge bg-secondary">Tag 2</span>
  <span class="badge bg-success">Tag 3</span>
  <span class="badge bg-danger ms-auto">Featured</span>
</div>
```

### 5. Header and Footer Layouts

```html
<!-- Header with horizontal stack -->
<header class="border-bottom pb-3 mb-4">
  <div class="hstack gap-3">
    <div class="p-2">
      <h4>Application Title</h4>
    </div>
    <div class="vr"></div>
    <div class="p-2 ms-auto">
      <div class="hstack gap-2">
        <button class="btn btn-sm btn-outline-secondary">Settings</button>
        <button class="btn btn-sm btn-primary">Profile</button>
      </div>
    </div>
  </div>
</header>

<!-- Footer with horizontal stack -->
<footer class="border-top pt-3 mt-4">
  <div class="hstack gap-3">
    <div class="p-2">© 2024 Your Company</div>
    <div class="vr"></div>
    <div class="p-2 ms-auto">
      <div class="hstack gap-2">
        <a href="#" class="link-secondary">Privacy</a>
        <a href="#" class="link-secondary">Terms</a>
        <a href="#" class="link-secondary">Support</a>
      </div>
    </div>
  </div>
</footer>
```

## CSS Implementation

### Core CSS

```scss
.hstack {
  display: flex;
  flex-direction: row;
  align-items: center;
  align-self: stretch;
}

.vstack {
  display: flex;
  flex: 1 1 auto;
  flex-direction: column;
  align-self: stretch;
}
```

### Vertical Rule Helper

```css
.vr {
  flex-shrink: 0;
  width: 1px;
  height: 1em;
  background-color: currentColor;
  opacity: 0.25;
}
```

## Customization Options

### Gap Variations

Use different gap utilities for spacing:

```html
<!-- Small gaps -->
<div class="vstack gap-1">
  <div>Item 1</div>
  <div>Item 2</div>
</div>

<!-- Large gaps -->
<div class="hstack gap-4">
  <div>Item 1</div>
  <div>Item 2</div>
</div>

<!-- No gaps -->
<div class="vstack gap-0">
  <div>Item 1</div>
  <div>Item 2</div>
</div>
```

### Alignment Options

Combine with alignment utilities:

```html
<!-- Left-aligned vertical stack -->
<div class="vstack gap-3 align-items-start">
  <div>Left-aligned item</div>
  <div>Another left-aligned item</div>
</div>

<!-- Right-aligned horizontal stack -->
<div class="hstack gap-3 justify-content-end">
  <div>Right-aligned</div>
  <div>Items</div>
</div>

<!-- Centered vertical stack -->
<div class="vstack gap-3 align-items-center">
  <div>Centered item</div>
  <div>Another centered item</div>
</div>
```

## Advanced Techniques

### Responsive Stacks

Combine with responsive utilities:

```html
<!-- Stack vertically on mobile, horizontally on desktop -->
<div class="vstack vstack-md-hstack gap-3">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</div>

<!-- Different gaps at different breakpoints -->
<div class="vstack gap-2 gap-lg-4">
  <div>Item 1</div>
  <div>Item 2</div>
</div>
```

### Nested Stacks

Create complex layouts with nested stacks:

```html
<div class="vstack gap-3">
  <div class="hstack gap-2">
    <div class="p-2">Header</div>
    <div class="vr"></div>
    <div class="p-2 ms-auto">Actions</div>
  </div>
  <div class="p-2">Main content area</div>
  <div class="hstack gap-2">
    <div class="p-2">Footer item 1</div>
    <div class="p-2">Footer item 2</div>
    <div class="p-2 ms-auto">Footer item 3</div>
  </div>
</div>
```

### Dynamic Stacks with JavaScript

```javascript
// Toggle between vertical and horizontal stacks
function toggleStackOrientation(element) {
  if (element.classList.contains('vstack')) {
    element.classList.remove('vstack');
    element.classList.add('hstack');
  } else {
    element.classList.remove('hstack');
    element.classList.add('vstack');
  }
}

// Add item to stack
function addStackItem(stackId, content) {
  const stack = document.getElementById(stackId);
  const newItem = document.createElement('div');
  newItem.className = 'p-2';
  newItem.textContent = content;
  stack.appendChild(newItem);
}
```

## Best Practices

### 1. Performance Considerations

- **Browser Support**: Consider Safari < 14.5 gap support limitations
- **Grid Alternative**: Use CSS grid for better gap support in older browsers
- **Efficient DOM**: Keep stack structures simple and avoid excessive nesting

### 2. Accessibility

- **Semantic HTML**: Use appropriate HTML elements within stacks
- **Keyboard Navigation**: Ensure interactive elements are properly ordered
- **Screen Readers**: Test stack layouts with assistive technologies

### 3. Design Consistency

- **Consistent Gaps**: Use consistent gap sizes throughout your application
- **Visual Hierarchy**: Use stacks to establish clear content hierarchy
- **Responsive Behavior**: Consider how stacks behave across different screen sizes

### 4. Common Pitfalls

```html
<!-- Problem: Mixing flex utilities incorrectly -->
<div class="vstack gap-3 flex-row">
  <!-- This won't work as expected -->
</div>

<!-- Solution: Use the correct stack class -->
<div class="hstack gap-3">
  <!-- This works correctly -->
</div>

<!-- Problem: Overriding stack behavior -->
<div class="vstack gap-3" style="flex-direction: row;">
  <!-- This defeats the purpose of the stack -->
</div>

<!-- Solution: Use the appropriate stack type -->
<div class="hstack gap-3">
  <!-- This is the correct approach -->
</div>
```

## Troubleshooting

### Common Issues

1. **Gaps Not Working in Safari**
   - Safari < 14.5 doesn't support gap with flexbox
   - Solution: Use margin utilities instead of gap utilities
   - Alternative: Use CSS grid layout

2. **Items Not Aligning Properly**
   - Check for conflicting flex utilities
   - Verify stack class is applied correctly
   - Ensure items don't have conflicting positioning

3. **Responsive Behavior Issues**
   - Test across different viewport sizes
   - Check for responsive utility conflicts
   - Verify breakpoint usage

4. **Vertical Rules Not Showing**
   - Ensure `.vr` class is applied
   - Check for color contrast issues
   - Verify parent has appropriate height

## Browser Compatibility

### Modern Browser Support
- **Chrome**: Full support
- **Firefox**: Full support
- **Edge**: Full support
- **Safari**: Full support (14.5+ for gap utilities)

### Legacy Browser Considerations
- **Safari < 14.5**: Gap utilities not supported with flexbox
- **IE11**: Limited flexbox support
- **Workarounds**: Use margin utilities or CSS grid for older browsers

## Summary

Bootstrap's Stack utilities provide:

- **Simplified Flexbox**: Shorthand for common flexbox patterns
- **Vertical Stacks**: `.vstack` for column layouts
- **Horizontal Stacks**: `.hstack` for row layouts
- **Gap Support**: Built-in spacing with gap utilities
- **Vertical Rules**: `.vr` helper for visual separation
- **Responsive Design**: Works with responsive utilities
- **Performance**: Lightweight CSS-only implementation
- **Flexibility**: Combines with other Bootstrap utilities

Use stacks to quickly create common layout patterns like navigation bars, form layouts, button groups, and component interfaces without writing custom flexbox CSS.
