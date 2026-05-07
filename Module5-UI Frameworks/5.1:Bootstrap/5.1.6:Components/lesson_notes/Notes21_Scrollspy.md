# Bootstrap Scrollspy

## Overview

Scrollspy is a Bootstrap component that automatically updates navigation or list group components based on scroll position to indicate which link is currently active in the viewport. It toggles the `.active` class on anchor (`<a>`) elements when the element with the `id` referenced by the anchor's `href` is scrolled into view.

## How It Works

Scrollspy requires two main components:
1. **Navigation**: A nav component, list group, or simple set of links
2. **Scrollable Container**: The `<body>` or a custom element with set `height` and `overflow-y: scroll`

### Basic Setup Requirements

- Add `data-bs-spy="scroll"` to the scrollable container
- Add `data-bs-target="#navId"` where `navId` is the unique ID of the associated navigation
- Include `tabindex="0"` if there's no focusable element inside the scrollable container
- Links must have resolvable `id` targets (e.g., `<a href="#home">` must correspond to `<div id="home">`)

## Examples

### 1. Navbar Example

```html
<nav id="navbar-example2" class="navbar bg-body-tertiary px-3 mb-3">
  <a class="navbar-brand" href="#">Navbar</a>
  <ul class="nav nav-pills">
    <li class="nav-item">
      <a class="nav-link" href="#scrollspyHeading1">First</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="#scrollspyHeading2">Second</a>
    </li>
    <li class="nav-item dropdown">
      <a class="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false">Dropdown</a>
      <ul class="dropdown-menu">
        <li><a class="dropdown-item" href="#scrollspyHeading3">Third</a></li>
        <li><a class="dropdown-item" href="#scrollspyHeading4">Fourth</a></li>
        <li><hr class="dropdown-divider"></li>
        <li><a class="dropdown-item" href="#scrollspyHeading5">Fifth</a></li>
      </ul>
    </li>
  </ul>
</nav>

<div data-bs-spy="scroll" data-bs-target="#navbar-example2" data-bs-root-margin="0px 0px -40%" data-bs-smooth-scroll="true" class="scrollspy-example bg-body-tertiary p-3 rounded-2" tabindex="0">
  <h4 id="scrollspyHeading1">First heading</h4>
  <p>...</p>
  <h4 id="scrollspyHeading2">Second heading</h4>
  <p>...</p>
  <h4 id="scrollspyHeading3">Third heading</h4>
  <p>...</p>
  <h4 id="scrollspyHeading4">Fourth heading</h4>
  <p>...</p>
  <h4 id="scrollspyHeading5">Fifth heading</h4>
  <p>...</p>
</div>
```

### 2. Nested Navigation

Scrollspy works with nested `.navs`. If a nested `.nav` is `.active`, its parents will also be `.active`.

```html
<div class="row">
  <div class="col-4">
    <nav id="navbar-example3" class="h-100 flex-column align-items-stretch pe-4 border-end">
      <nav class="nav nav-pills flex-column">
        <a class="nav-link" href="#item-1">Item 1</a>
        <nav class="nav nav-pills flex-column">
          <a class="nav-link ms-3 my-1" href="#item-1-1">Item 1-1</a>
          <a class="nav-link ms-3 my-1" href="#item-1-2">Item 1-2</a>
        </nav>
        <a class="nav-link" href="#item-2">Item 2</a>
        <a class="nav-link" href="#item-3">Item 3</a>
        <nav class="nav nav-pills flex-column">
          <a class="nav-link ms-3 my-1" href="#item-3-1">Item 3-1</a>
          <a class="nav-link ms-3 my-1" href="#item-3-2">Item 3-2</a>
        </nav>
      </nav>
    </nav>
  </div>

  <div class="col-8">
    <div data-bs-spy="scroll" data-bs-target="#navbar-example3" data-bs-smooth-scroll="true" class="scrollspy-example-2" tabindex="0">
      <div id="item-1">
        <h4>Item 1</h4>
        <p>...</p>
      </div>
      <div id="item-1-1">
        <h5>Item 1-1</h5>
        <p>...</p>
      </div>
      <!-- More content sections... -->
    </div>
  </div>
</div>
```

### 3. List Group

```html
<div class="row">
  <div class="col-4">
    <div id="list-example" class="list-group">
      <a class="list-group-item list-group-item-action" href="#list-item-1">Item 1</a>
      <a class="list-group-item list-group-item-action" href="#list-item-2">Item 2</a>
      <a class="list-group-item list-group-item-action" href="#list-item-3">Item 3</a>
      <a class="list-group-item list-group-item-action" href="#list-item-4">Item 4</a>
    </div>
  </div>
  <div class="col-8">
    <div data-bs-spy="scroll" data-bs-target="#list-example" data-bs-smooth-scroll="true" class="scrollspy-example" tabindex="0">
      <h4 id="list-item-1">Item 1</h4>
      <p>...</p>
      <!-- More content sections... -->
    </div>
  </div>
</div>
```

### 4. Simple Anchors

Scrollspy works with any `<a>` anchor elements, not just nav components.

```html
<div class="row">
  <div class="col-4">
    <div id="simple-list-example" class="d-flex flex-column gap-2 simple-list-example-scrollspy text-center">
      <a class="p-1 rounded" href="#simple-list-item-1">Item 1</a>
      <a class="p-1 rounded" href="#simple-list-item-2">Item 2</a>
      <a class="p-1 rounded" href="#simple-list-item-3">Item 3</a>
      <a class="p-1 rounded" href="#simple-list-item-4">Item 4</a>
      <a class="p-1 rounded" href="#simple-list-item-5">Item 5</a>
    </div>
  </div>
  <div class="col-8">
    <div data-bs-spy="scroll" data-bs-target="#simple-list-example" data-bs-offset="0" data-bs-smooth-scroll="true" class="scrollspy-example" tabindex="0">
      <h4 id="simple-list-item-1">Item 1</h4>
      <p>...</p>
      <!-- More content sections... -->
    </div>
  </div>
</div>
```

## Non-visible Elements

Target elements that aren't visible will be ignored, and their corresponding nav items won't receive an `.active` class. Scrollspy instances initialized in a non-visible wrapper will ignore all target elements.

### Solution for Dynamic Content

Use the `refresh` method to check for observable elements once the wrapper becomes visible:

```javascript
document.querySelectorAll('#nav-tab>[data-bs-toggle="tab"]').forEach(el => {
  el.addEventListener('shown.bs.tab', () => {
    const target = el.getAttribute('data-bs-target')
    const scrollElem = document.querySelector(`${target} [data-bs-spy="scroll"]`)
    bootstrap.ScrollSpy.getOrCreateInstance(scrollElem).refresh()
  })
})
```

## Usage

### Via Data Attributes

```html
<body data-bs-spy="scroll" data-bs-target="#navbar-example">
  ...
  <div id="navbar-example">
    <ul class="nav nav-tabs" role="tablist">
      ...
    </ul>
  </div>
  ...
</body>
```

### Via JavaScript

```javascript
const scrollSpy = new bootstrap.ScrollSpy(document.body, {
  target: '#navbar-example'
})
```

## Options

Options can be passed via data attributes or JavaScript. When using data attributes, append the option name to `data-bs-` and convert from camelCase to kebab-case.

| Name | Type | Default | Description |
|------|------|---------|-------------|
| `rootMargin` | string | `0px 0px -25%` | Intersection Observer `rootMargin` valid units when calculating scroll position |
| `smoothScroll` | boolean | `false` | Enables smooth scrolling when a user clicks on a link that refers to ScrollSpy observables |
| `target` | string, DOM element | `null` | Specifies element to apply Scrollspy plugin |
| `threshold` | array | `[0.1, 0.5, 1]` | IntersectionObserver `threshold` valid input when calculating scroll position |

### Data Attribute Examples

```html
<div data-bs-spy="scroll" 
     data-bs-target="#navbar-example" 
     data-bs-smooth-scroll="true" 
     data-bs-root-margin="0px 0px -40%">
```

### Configuration Priority (Bootstrap 5.2.0+)

The final configuration object is the merged result of:
1. `data-bs-config` (JSON string)
2. Individual `data-bs-*` attributes
3. JavaScript object

Latest given key-value overrides the others.

```html
<div data-bs-config='{"smoothScroll": true}' 
     data-bs-smooth-scroll="false">
  <!-- smoothScroll will be false -->
</div>
```

## Deprecated Options

Up until v5.1.3, Bootstrap used `offset` & `method` options, which are now deprecated and replaced by `rootMargin`. Backwards compatibility is maintained but will be removed in v6.

## Methods

| Method | Description |
|--------|-------------|
| `dispose` | Destroys an element's scrollspy (removes stored data on the DOM element) |
| `getInstance` | Static method to get the scrollspy instance associated with a DOM element |
| `getOrCreateInstance` | Static method to get the scrollspy instance or create a new one if not initialized |
| `refresh` | Call when adding or removing elements in the DOM |

### Method Usage Examples

```javascript
// Get instance
const scrollSpyInstance = bootstrap.ScrollSpy.getInstance(element);

// Get or create instance
const scrollSpy = bootstrap.ScrollSpy.getOrCreateInstance(element);

// Refresh after DOM changes
const dataSpyList = document.querySelectorAll('[data-bs-spy="scroll"]')
dataSpyList.forEach(dataSpyEl => {
  bootstrap.ScrollSpy.getInstance(dataSpyEl).refresh()
})

// Dispose
bootstrap.ScrollSpy.getInstance(element).dispose();
```

## Events

### activate.bs.scrollspy

This event fires on the scroll element whenever an anchor is activated by the scrollspy.

```javascript
const firstScrollSpyEl = document.querySelector('[data-bs-spy="scroll"]')
firstScrollSpyEl.addEventListener('activate.bs.scrollspy', (event) => {
  // event.relatedTarget is the newly activated nav item
  console.log('Activated:', event.relatedTarget);
  
  // Custom logic when section becomes active
  const activeSection = event.relatedTarget.getAttribute('href');
  updatePageTitle(activeSection);
})
```

## Best Practices

### 1. Performance Considerations
- Avoid multiple visible scrollspy targets at the same time
- Use appropriate `rootMargin` values to fine-tune activation timing
- Call `refresh()` method after dynamic content changes

### 2. Accessibility
- Always include `tabindex="0"` on scrollable containers without focusable elements
- Ensure proper heading hierarchy for content sections
- Use semantic HTML structure for navigation

### 3. Common Issues and Solutions

**Issue**: Multiple targets visible simultaneously
**Solution**: Adjust `rootMargin` or content spacing

**Issue**: Scrollspy not working after AJAX content load
**Solution**: Call `refresh()` method after content update

**Issue**: Active class not updating properly
**Solution**: Ensure target elements have proper IDs and are visible

### 4. CSS Requirements

For custom scrollspy containers, ensure proper CSS:

```css
.scrollspy-example {
  position: relative;
  height: 300px;
  overflow-y: scroll;
}
```

## Integration with Other Components

### With Tabs
```javascript
document.querySelectorAll('[data-bs-toggle="tab"]').forEach(tab => {
  tab.addEventListener('shown.bs.tab', () => {
    const targetPane = document.querySelector(tab.getAttribute('data-bs-target'));
    const scrollSpy = targetPane.querySelector('[data-bs-spy="scroll"]');
    if (scrollSpy) {
      bootstrap.ScrollSpy.getOrCreateInstance(scrollSpy).refresh();
    }
  });
});
```

### With Modals
```javascript
const modal = document.getElementById('exampleModal');
modal.addEventListener('shown.bs.modal', () => {
  const scrollSpy = modal.querySelector('[data-bs-spy="scroll"]');
  if (scrollSpy) {
    bootstrap.ScrollSpy.getOrCreateInstance(scrollSpy).refresh();
  }
});
```

## Advanced Customization

### Custom Root Margin for Different Viewports
```javascript
function updateScrollspyRootMargin() {
  const width = window.innerWidth;
  const scrollSpy = bootstrap.ScrollSpy.getInstance(document.body);
  
  if (scrollSpy) {
    if (width < 768) {
      scrollSpy._config.rootMargin = '0px 0px -50%';
    } else {
      scrollSpy._config.rootMargin = '0px 0px -25%';
    }
    scrollSpy.refresh();
  }
}

window.addEventListener('resize', updateScrollspyRootMargin);
```

### Smooth Scroll with Offset
```javascript
const scrollSpy = new bootstrap.ScrollSpy(document.body, {
  target: '#navbar-example',
  smoothScroll: true,
  rootMargin: '0px 0px -40%'
});

// Custom smooth scroll behavior
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});
```

## Browser Compatibility

Scrollspy uses the Intersection Observer API, which is supported in all modern browsers. For older browsers, consider using a polyfill.

## Summary

Scrollspy is a powerful Bootstrap component for creating interactive navigation that responds to scroll position. It's highly customizable through data attributes and JavaScript, works with various navigation patterns, and provides events for advanced integration. Proper setup and understanding of its options and methods are essential for optimal performance and user experience.
