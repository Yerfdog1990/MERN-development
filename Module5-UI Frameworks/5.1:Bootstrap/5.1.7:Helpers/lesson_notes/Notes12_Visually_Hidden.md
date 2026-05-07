# Bootstrap Visually Hidden

## Overview

Use these helpers to visually hide elements but keep them accessible to assistive technologies (such as screen readers) with `.visually-hidden`. Use `.visually-hidden-focusable` to visually hide an element by default, but to display it when it's focused (e.g., by a keyboard-only user). `.visually-hidden-focusable` can also be applied to a container–thanks to `:focus-within`, the container will be displayed when any child element of the container receives focus.

## How It Works

The visually hidden utilities provide:

- **Screen Reader Access**: Elements remain accessible to assistive technologies
- **Visual Hiding**: Content is hidden from sighted users
- **Keyboard Navigation**: Focusable elements can be revealed when needed
- **Semantic Preservation**: HTML structure and meaning are maintained
- **Focus Management**: Proper focus handling for interactive elements

## Basic Usage

### Simple Visually Hidden Element

Hide an element from visual display while keeping it accessible:

```html
<h2 class="visually-hidden">Title for screen readers</h2>
<p>This content is only visible to screen readers.</p>
```

### Focusable Element

Create an element that's hidden by default but visible when focused:

```html
<div class="visually-hidden-focusable">
  <a href="#content">Skip to main content</a>
</div>
```

### Container with Focusable Element

Use `.visually-hidden-focusable` on a container to show it when any child receives focus:

```html
<div class="visually-hidden-focusable">
  <h2 class="visually-hidden">Title for screen readers</h2>
  <p>This content is only visible to screen readers.</p>
  <a href="#content" class="visually-hidden-focusable">Skip to main content</a>
</div>
```

## Common Use Cases

### 1. Skip Navigation Links

Create accessible skip links for keyboard navigation:

```html
<header>
  <h1 class="visually-hidden">Main Title</h1>
  <nav>
    <a href="#main" class="visually-hidden-focusable">Skip to main content</a>
    <a href="#navigation" class="visually-hidden-focusable">Skip to navigation</a>
  </nav>
</header>

<main id="main">
  <h2>Main Content</h2>
  <p>This is the main content area.</p>
</main>
```

### 2. Screen Reader Only Content

Provide content specifically for screen readers:

```html
<div class="visually-hidden">
  <p>This content is only intended for screen readers and will not be visible to sighted users.</p>
  <div class="visually-hidden-focusable">
    <button>Screen reader specific controls</button>
  </div>
</div>
```

### 3. Loading Indicators

Hide loading text from visual display while keeping it accessible:

```html
<div class="visually-hidden">
  <span>Loading content, please wait...</span>
  <div class="visually-hidden-focusable">
    <button>Stop loading</button>
  </div>
</div>
```

### 4. Form Validation Messages

Display validation messages to screen readers only:

```html
<form>
  <div class="visually-hidden" id="error-message" role="alert">
    <p>Error: This field is required.</p>
  </div>
  
  <input type="text" id="email" aria-describedby="error-message" required>
  
  <div class="visually-hidden-focusable">
    <button type="submit">Submit</button>
  </div>
</form>
```

### 5. Icon Descriptions

Hide decorative icons while providing screen reader descriptions:

```html
<button>
  <span class="visually-hidden">Search</span>
  <i class="bi bi-search" aria-hidden="true"></i>
</button>
```

## Advanced Implementation

### Dynamic Content Revealing

Toggle visibility based on user interaction:

```javascript
// Show/hide screen reader content
function toggleScreenReaderContent(show) {
  const element = document.getElementById('sr-content');
  if (show) {
    element.classList.remove('visually-hidden');
  } else {
    element.classList.add('visually-hidden');
  }
}

// Handle focus events
document.addEventListener('focusin', function(e) {
  if (e.target.classList.contains('visually-hidden-focusable')) {
    // Reveal screen reader content when focusable element is focused
    document.getElementById('sr-content').classList.remove('visually-hidden');
  }
});
```

### Multiple Focusable Elements

Create multiple elements that can receive focus:

```html
<div class="visually-hidden-focusable">
  <h2 class="visually-hidden">Screen Reader Title</h2>
  <div>
    <button class="visually-hidden-focusable">Action 1</button>
    <button class="visually-hidden-focusable">Action 2</button>
    <button class="visually-hidden-focusable">Action 3</button>
  </div>
</div>
```

### Conditional Visibility

Show content based on user preferences or device type:

```html
<div class="visually-hidden" id="mobile-only">
  <p>This content is only for mobile users with screen readers.</p>
</div>

<script>
// Detect if user prefers reduced motion or is on mobile
if (window.matchMedia('(max-width: 768px)').matches || window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  document.getElementById('mobile-only').classList.remove('visually-hidden');
}
</script>
```

## CSS Implementation

### Core CSS

```css
.visually-hidden,
.visually-hidden-focusable {
  position: absolute !important;
  width: 1px !important;
  height: 1px !important;
  padding: 0 !important;
  margin: -1px !important;
  border: 0 !important;
  clip: rect(1px, 1px, 1px, 1px) !important;
  clip-path: inset(50%) !important;
  overflow: hidden !important;
  white-space: nowrap !important;
}

.visually-hidden-focusable:focus-within > .visually-hidden {
  position: static !important;
  width: auto !important;
  height: auto !important;
  padding: 0 !important;
  margin: 0 !important;
  clip: auto !important;
  clip-path: none !important;
  overflow: visible !important;
  white-space: normal !important;
}
```

### Sass Mixins

Use mixins for reusable visually hidden patterns:

```scss
// Base mixin
@mixin visually-hidden() {
  position: absolute !important;
  width: 1px !important;
  height: 1px !important;
  padding: 0 !important;
  margin: -1px !important;
  border: 0 !important;
  clip: rect(1px, 1px, 1px, 1px) !important;
  clip-path: inset(50%) !important;
  overflow: hidden !important;
  white-space: nowrap !important;
}

// Usage
.sr-only-text {
  @include visually-hidden;
}

.sr-only-title {
  @include visually-hidden;
}
```

## Best Practices

### 1. Accessibility Guidelines

- **Screen Reader First**: Consider screen reader users in all design decisions
- **Keyboard Navigation**: Ensure all interactive elements are keyboard accessible
- **Focus Management**: Provide clear focus indicators and logical tab order
- **Semantic HTML**: Use appropriate HTML elements for their semantic meaning

### 2. Content Strategy

- **Progressive Enhancement**: Start with basic functionality, enhance for screen readers
- **Equivalent Experience**: Ensure hidden content provides equivalent information
- **Context Awareness**: Consider when and why content should be hidden
- **User Control**: Allow users to toggle visibility when appropriate

### 3. Testing Considerations

- **Screen Reader Testing**: Test with actual assistive technologies
- **Keyboard Navigation**: Verify all functionality works without mouse
- **Mobile Testing**: Test on various mobile devices and screen sizes
- **Browser Compatibility**: Ensure consistent behavior across browsers

### 4. Common Patterns

#### Accessible Navigation
```html
<nav aria-label="Main navigation">
  <h2 class="visually-hidden">Main Navigation</h2>
  <ul>
    <li><a href="#" class="visually-hidden-focusable">Home</a></li>
    <li><a href="#" class="visually-hidden-focusable">About</a></li>
    <li><a href="#" class="visually-hidden-focusable">Services</a></li>
  </ul>
</nav>
```

#### Form Instructions
```html
<form>
  <fieldset class="visually-hidden" aria-describedby="form-help">
    <legend>Form Instructions</legend>
    <p>These instructions are provided to screen readers to help with form completion.</p>
  </fieldset>
  
  <div class="visually-hidden-focusable">
    <input type="text" aria-describedby="form-help" placeholder="Enter your information">
    <button type="submit">Submit</button>
  </div>
</form>
```

#### Status Messages
```html
<div class="visually-hidden" role="status" aria-live="polite">
  <p id="loading-status">Loading your data...</p>
</div>

<div class="visually-hidden-focusable">
  <button onclick="showError()">Show Error Details</button>
</div>

<script>
function showError() {
  document.getElementById('loading-status').textContent = 'Error occurred while processing your request';
  document.getElementById('loading-status').setAttribute('role', 'alert');
}
</script>
```

## Troubleshooting

### Common Issues

1. **Content Still Visible**
   - Check if `.visually-hidden` class is applied
   - Verify no conflicting CSS rules
   - Test with different browsers

2. **Focus Not Working**
   - Ensure parent has `.visually-hidden-focusable` class
   - Check for JavaScript errors
   - Test keyboard navigation

3. **Screen Reader Issues**
   - Test with actual screen readers (JAWS, NVDA, VoiceOver)
   - Verify ARIA attributes are correct
   - Check for semantic HTML structure

4. **Keyboard Navigation Problems**
   - Ensure focusable elements are in logical tab order
   - Test tab navigation through all interactive elements
   - Verify focus indicators are visible

### Debugging Tips

```html
<!-- Add border to see hidden element boundaries -->
<div class="visually-hidden" style="border: 2px solid red;">
  This should be hidden but has red border for debugging
</div>

<!-- Test focus behavior -->
<div class="visually-hidden-focusable">
  <button>Test Focus</button>
</div>

<script>
// Log focus events
document.addEventListener('focus', function(e) {
  console.log('Element focused:', e.target);
});

document.addEventListener('focusin', function(e) {
  console.log('Focus entered container:', e.target);
});
</script>
```

## Browser Compatibility

### Modern Browser Support
- **Chrome**: Full support
- **Firefox**: Full support
- **Safari**: Full support
- **Edge**: Full support

### Legacy Browser Considerations
- **IE11**: Limited support for some CSS properties
- **Older Mobile**: May have accessibility issues
- **Screen Readers**: Compatibility varies by device and software

## Summary

Bootstrap's Visually Hidden utilities provide:

- **Accessibility First**: Maintains screen reader access while hiding visual content
- **Flexible Implementation**: Works with any HTML element
- **Focus Management**: `.visually-hidden-focusable` for dynamic content revelation
- **Semantic Preservation**: Maintains HTML structure and meaning
- **Cross-Browser**: Consistent behavior across all modern browsers
- **Performance**: Lightweight CSS-only solution
- **Standards Compliant**: Follows WCAG accessibility guidelines

Use visually hidden utilities to create inclusive web experiences that serve both sighted and screen reader users effectively.
