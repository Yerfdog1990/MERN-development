# Bootstrap Toasts

## Overview

Toasts are lightweight notifications designed to mimic push notifications that have been popularized by mobile and desktop operating systems. They're built with flexbox, so they're easy to align and position.

### Key Considerations

- **Opt-in Component**: Toasts are opt-in for performance reasons, so you must initialize them yourself
- **Auto-hide Behavior**: Toasts will automatically hide if you do not specify `autohide: false`
- **Animation**: The animation effect is dependent on `prefers-reduced-motion` media query
- **Accessibility**: Toasts are intended to be small interruptions to visitors

## Examples

### Basic Toast

To encourage extensible and predictable toasts, we recommend a header and body. Toast headers use `display: flex`, allowing easy alignment of content thanks to margin and flexbox utilities.

```html
<div class="toast" role="alert" aria-live="assertive" aria-atomic="true">
  <div class="toast-header">
    <img src="..." class="rounded me-2" alt="...">
    <strong class="me-auto">Bootstrap</strong>
    <small>11 mins ago</small>
    <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
  </div>
  <div class="toast-body">
    Hello, world! This is a toast message.
  </div>
</div>
```

**Note**: Previously, scripts dynamically added `.hide` class to completely hide a toast (with `display:none`, rather than just with `opacity:0`). This is now not necessary anymore. However, for backwards compatibility, Bootstrap's script will continue to toggle the class until the next major version.

### Live Example

Click the button below to show a toast (positioned with utilities in the lower right corner) that has been hidden by default.

```html
<button type="button" class="btn btn-primary" id="liveToastBtn">Show live toast</button>

<div class="toast-container position-fixed bottom-0 end-0 p-3">
  <div id="liveToast" class="toast" role="alert" aria-live="assertive" aria-atomic="true">
    <div class="toast-header">
      <img src="..." class="rounded me-2" alt="...">
      <strong class="me-auto">Bootstrap</strong>
      <small>11 mins ago</small>
      <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
    </div>
    <div class="toast-body">
      Hello, world! This is a toast message.
    </div>
  </div>
</div>
```

#### JavaScript Initialization

```javascript
const toastTrigger = document.getElementById('liveToastBtn')
const toastLiveExample = document.getElementById('liveToast')

if (toastTrigger) {
  const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastLiveExample)
  toastTrigger.addEventListener('click', () => {
    toastBootstrap.show()
  })
}
```

### Translucent Toasts

Toasts are slightly translucent to blend in with what's below them.

```html
<div class="toast" role="alert" aria-live="assertive" aria-atomic="true">
  <div class="toast-header">
    <img src="..." class="rounded me-2" alt="...">
    <strong class="me-auto">Bootstrap</strong>
    <small class="text-body-secondary">11 mins ago</small>
    <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
  </div>
  <div class="toast-body">
    Hello, world! This is a toast message.
  </div>
</div>
```

### Stacking

You can stack toasts by wrapping them in a toast container, which will vertically add some spacing.

```html
<div class="toast-container position-static">
  <div class="toast" role="alert" aria-live="assertive" aria-atomic="true">
    <div class="toast-header">
      <img src="..." class="rounded me-2" alt="...">
      <strong class="me-auto">Bootstrap</strong>
      <small class="text-body-secondary">just now</small>
      <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
    </div>
    <div class="toast-body">
      See? Just like this.
    </div>
  </div>

  <div class="toast" role="alert" aria-live="assertive" aria-atomic="true">
    <div class="toast-header">
      <img src="..." class="rounded me-2" alt="...">
      <strong class="me-auto">Bootstrap</strong>
      <small class="text-body-secondary">2 seconds ago</small>
      <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
    </div>
    <div class="toast-body">
      Heads up, toasts will stack automatically
    </div>
  </div>
</div>
```

### Custom Content

Customize your toasts by removing sub-components, tweaking them with utilities, or by adding your own markup.

#### Simplified Toast

```html
<div class="toast align-items-center" role="alert" aria-live="assertive" aria-atomic="true">
  <div class="d-flex">
    <div class="toast-body">
      Hello, world! This is a toast message.
    </div>
    <button type="button" class="btn-close me-2 m-auto" data-bs-dismiss="toast" aria-label="Close"></button>
  </div>
</div>
```

#### Toast with Additional Controls

```html
<div class="toast" role="alert" aria-live="assertive" aria-atomic="true">
  <div class="toast-body">
    Hello, world! This is a toast message.
    <div class="mt-2 pt-2 border-top">
      <button type="button" class="btn btn-primary btn-sm">Take action</button>
      <button type="button" class="btn btn-secondary btn-sm" data-bs-dismiss="toast">Close</button>
    </div>
  </div>
</div>
```

### Color Schemes

Building on the above examples, you can create different toast color schemes with color and background utilities.

```html
<div class="toast align-items-center text-bg-primary border-0" role="alert" aria-live="assertive" aria-atomic="true">
  <div class="d-flex">
    <div class="toast-body">
      Hello, world! This is a toast message.
    </div>
    <button type="button" class="btn-close btn-close-white me-2 m-auto" data-bs-dismiss="toast" aria-label="Close"></button>
  </div>
</div>
```

## Placement

Place toasts with custom CSS as you need them. The top right is often used for notifications, as is the top middle.

### Single Toast Positioning

If you're only ever going to show one toast at a time, put positioning styles right on `.toast`.

### Multiple Toast Positioning

For systems that generate more notifications, consider using a wrapping element so they can easily stack.

#### Position Selector Example

```html
<form>
  <div class="mb-3">
    <label for="selectToastPlacement">Toast placement</label>
    <select class="form-select mt-2" id="selectToastPlacement">
      <option value="" selected>Select a position...</option>
      <option value="top-0 start-0">Top left</option>
      <option value="top-0 start-50 translate-middle-x">Top center</option>
      <option value="top-0 end-0">Top right</option>
      <option value="top-50 start-0 translate-middle-y">Middle left</option>
      <option value="top-50 start-50 translate-middle">Middle center</option>
      <option value="top-50 end-0 translate-middle-y">Middle right</option>
      <option value="bottom-0 start-0">Bottom left</option>
      <option value="bottom-0 start-50 translate-middle-x">Bottom center</option>
      <option value="bottom-0 end-0">Bottom right</option>
    </select>
  </div>
</form>

<div aria-live="polite" aria-atomic="true" class="bg-body-secondary position-relative bd-example-toasts rounded-3">
  <div class="toast-container p-3" id="toastPlacement">
    <div class="toast">
      <div class="toast-header">
        <img src="..." class="rounded me-2" alt="...">
        <strong class="me-auto">Bootstrap</strong>
        <small>11 mins ago</small>
      </div>
      <div class="toast-body">
        Hello, world! This is a toast message.
      </div>
    </div>
  </div>
</div>
```

#### Fixed Container for Multiple Toasts

```html
<div aria-live="polite" aria-atomic="true" class="position-relative">
  <!-- Position it: -->
  <!-- - `.toast-container` for spacing between toasts -->
  <!-- - `top-0` & `end-0` to position toasts in upper right corner -->
  <!-- - `.p-3` to prevent toasts from sticking to edge of container -->
  <div class="toast-container top-0 end-0 p-3">

    <!-- Then put toasts within -->
    <div class="toast" role="alert" aria-live="assertive" aria-atomic="true">
      <div class="toast-header">
        <img src="..." class="rounded me-2" alt="...">
        <strong class="me-auto">Bootstrap</strong>
        <small class="text-body-secondary">just now</small>
        <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
      </div>
      <div class="toast-body">
        See? Just like this.
      </div>
    </div>

    <div class="toast" role="alert" aria-live="assertive" aria-atomic="true">
      <div class="toast-header">
        <img src="..." class="rounded me-2" alt="...">
        <strong class="me-auto">Bootstrap</strong>
        <small class="text-body-secondary">2 seconds ago</small>
        <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
      </div>
      <div class="toast-body">
        Heads up, toasts will stack automatically
      </div>
    </div>
  </div>
</div>
```

#### Flexbox Alignment

```html
<!-- Flexbox container for aligning toasts -->
<div aria-live="polite" aria-atomic="true" class="d-flex justify-content-center align-items-center w-100">

  <!-- Then put toasts within -->
  <div class="toast" role="alert" aria-live="assertive" aria-atomic="true">
    <div class="toast-header">
      <img src="..." class="rounded me-2" alt="...">
      <strong class="me-auto">Bootstrap</strong>
      <small>11 mins ago</small>
      <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
    </div>
    <div class="toast-body">
      Hello, world! This is a toast message.
    </div>
  </div>
</div>
```

## Accessibility

Toasts are intended to be small interruptions to your visitors or users, so to help those with screen readers and similar assistive technologies, you should wrap your toasts in an `aria-live` region.

### Key Accessibility Features

- **Live Regions**: Changes to live regions are automatically announced by screen readers
- **Atomic Announcements**: Include `aria-atomic="true"` to ensure entire toast is announced as a single unit
- **Timing**: Live regions need to be present in markup before the toast is generated or updated
- **Role Selection**: Adapt `role` and `aria-live` level based on content importance

### Accessibility Guidelines

#### Role and Live Region Selection

```html
<!-- For important messages like errors -->
<div class="toast" role="alert" aria-live="assertive" aria-atomic="true">
  <!-- Error toast content -->
</div>

<!-- For informational messages -->
<div class="toast" role="status" aria-live="polite" aria-atomic="true">
  <!-- Info toast content -->
</div>
```

#### Auto-hide Considerations

```html
<!-- Ensure users have enough time to read -->
<div class="toast" role="alert" aria-live="polite" aria-atomic="true" data-bs-delay="10000">
  <div role="alert" aria-live="assertive" aria-atomic="true">...</div>
</div>
```

#### Manual Dismissal

When using `autohide: false`, you must add a close button to allow users to dismiss the toast.

```html
<div role="alert" aria-live="assertive" aria-atomic="true" class="toast" data-bs-autohide="false">
  <div class="toast-header">
    <img src="..." class="rounded me-2" alt="...">
    <strong class="me-auto">Bootstrap</strong>
    <small>11 mins ago</small>
    <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
  </div>
  <div class="toast-body">
    Hello, world! This is a toast message.
  </div>
</div>
```

**Important**: While technically it's possible to add focusable/actionable controls (such as additional buttons or links) in your toast, you should avoid doing this for autohiding toasts. Even if you give a toast a long `delay` timeout, keyboard and assistive technology users may find it difficult to reach the toast in time to take action.

## CSS Customization

### CSS Variables (v5.2.0+)

As part of Bootstrap's evolving CSS variables approach, toasts now use local CSS variables on `.toast` for enhanced real-time customization.

```css
.toast {
  --#{$prefix}toast-zindex: #{$zindex-toast};
  --#{$prefix}toast-padding-x: #{$toast-padding-x};
  --#{$prefix}toast-padding-y: #{$toast-padding-y};
  --#{$prefix}toast-spacing: #{$toast-spacing};
  --#{$prefix}toast-max-width: #{$toast-max-width};
  @include rfs($toast-font-size, --#{$prefix}toast-font-size);
  --#{$prefix}toast-color: #{$toast-color};
  --#{$prefix}toast-bg: #{$toast-background-color};
  --#{$prefix}toast-border-width: #{$toast-border-width};
  --#{$prefix}toast-border-color: #{$toast-border-color};
  --#{$prefix}toast-border-radius: #{$toast-border-radius};
  --#{$prefix}toast-box-shadow: #{$toast-box-shadow};
  --#{$prefix}toast-header-color: #{$toast-header-color};
  --#{$prefix}toast-header-bg: #{$toast-header-background-color};
  --#{$prefix}toast-header-border-color: #{$toast-header-border-color};
}
```

### Sass Variables

```scss
$toast-max-width:                   350px;
$toast-padding-x:                   .75rem;
$toast-padding-y:                   .5rem;
$toast-font-size:                   .875rem;
$toast-color:                       null;
$toast-background-color:            rgba(var(--#{$prefix}body-bg-rgb), .85);
$toast-border-width:                var(--#{$prefix}border-width);
$toast-border-color:                var(--#{$prefix}border-color-translucent);
$toast-border-radius:               var(--#{$prefix}border-radius);
$toast-box-shadow:                  var(--#{$prefix}box-shadow);
$toast-spacing:                     $container-padding-x;

$toast-header-color:                var(--#{$prefix}secondary-color);
$toast-header-background-color:     rgba(var(--#{$prefix}body-bg-rgb), .85);
$toast-header-border-color:         $toast-border-color;
```

## Usage

### Initialization

Initialize toasts via JavaScript:

```javascript
const toastElList = document.querySelectorAll('.toast')
const toastList = [...toastElList].map(toastEl => new bootstrap.Toast(toastEl, option))
```

### Triggers

Dismissal can be achieved with `data-bs-dismiss` attribute on a button within the toast:

```html
<button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
```

Or on a button outside the toast using additional `data-bs-target`:

```html
<button type="button" class="btn-close" data-bs-dismiss="toast" data-bs-target="#my-toast" aria-label="Close"></button>
```

## Options

Options can be passed via data attributes or JavaScript. When using data attributes, append the option name to `data-bs-` and convert from camelCase to kebab-case.

### Configuration Priority (v5.2.0+)

As of Bootstrap 5.2.0, all components support an experimental reserved data attribute `data-bs-config` that can house simple component configuration as a JSON string. The final configuration object is the merged result of:
1. `data-bs-config`
2. Individual `data-bs-*` attributes
3. JavaScript object

The latest given key-value overrides the others.

```html
<div data-bs-config='{"delay":0, "title":123}' data-bs-title="456">
  <!-- title will be 456 -->
</div>
```

### Available Options

| Name | Type | Default | Description |
|-------|------|----------|-------------|
| `animation` | boolean | `true` | Apply a CSS fade transition to toast |
| `autohide` | boolean | `true` | Automatically hide toast after delay |
| `delay` | number | `5000` | Delay in milliseconds before hiding toast |

## Methods

All API methods are asynchronous and start a transition. They return to the caller as soon as the transition is started, but before it ends. In addition, a method call on a transitioning component will be ignored.

### Method Descriptions

| Method | Description |
|---------|-------------|
| `dispose` | Hides an element's toast. Your toast will remain on the DOM but won't show anymore |
| `getInstance` | Static method to get the toast instance associated with a DOM element |
| `getOrCreateInstance` | Static method to get the toast instance or create a new one if not initialized |
| `hide` | Hides an element's toast. Returns before toast has actually been hidden |
| `isShown` | Returns a boolean according to toast's visibility state |
| `show` | Reveals an element's toast. Returns before toast has actually been shown |

### Method Examples

```javascript
// Get instance
const myToastEl = document.getElementById('myToastEl')
const myToast = bootstrap.Toast.getInstance(myToastEl)

// Get or create instance
const myToast = bootstrap.Toast.getOrCreateInstance(myToastEl)

// Show toast (manually, when autohide: false)
myToast.show()

// Hide toast
myToast.hide()

// Check visibility
if (myToast.isShown()) {
  console.log('Toast is visible')
}

// Dispose
myToast.dispose()
```

## Events

| Event | Description |
|-------|-------------|
| `hide.bs.toast` | Fired immediately when `hide` instance method has been called |
| `hidden.bs.toast` | Fired when toast has finished being hidden from user |
| `show.bs.toast` | Fires immediately when `show` instance method is called |
| `shown.bs.toast` | Fired when toast has been made visible to user |

### Event Usage Example

```javascript
const myToastEl = document.getElementById('myToast')
myToastEl.addEventListener('hidden.bs.toast', () => {
  // do something after toast is hidden...
  console.log('Toast has been hidden');
})

myToastEl.addEventListener('shown.bs.toast', () => {
  // do something after toast is shown...
  console.log('Toast is now visible');
})
```

## Best Practices

### 1. Performance Considerations
- Toasts are opt-in for performance reasons
- Initialize only when needed
- Dispose properly when no longer needed
- Use appropriate delay values for user experience

### 2. Accessibility Best Practices
- Always include proper ARIA attributes
- Use appropriate role and live region settings
- Ensure sufficient delay for reading
- Provide manual dismissal options for autohiding toasts

### 3. Common Implementation Patterns

#### Success/Error Notifications
```javascript
function showToast(message, type = 'info') {
  const toastContainer = document.getElementById('toastContainer');
  const toastId = 'toast-' + Date.now();
  
  const toastHtml = `
    <div id="${toastId}" class="toast" role="alert" aria-live="assertive" aria-atomic="true">
      <div class="toast-header">
        <strong class="me-auto">${type.charAt(0).toUpperCase() + type.slice(1)}</strong>
        <small>just now</small>
        <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
      </div>
      <div class="toast-body">
        ${message}
      </div>
    </div>
  `;
  
  toastContainer.insertAdjacentHTML('beforeend', toastHtml);
  
  const toastElement = document.getElementById(toastId);
  const toast = new bootstrap.Toast(toastElement);
  toast.show();
  
  // Auto-remove after hidden
  toastElement.addEventListener('hidden.bs.toast', () => {
    toastElement.remove();
  });
}
```

#### Form Submission Feedback
```javascript
document.getElementById('myForm').addEventListener('submit', function(e) {
  e.preventDefault();
  
  const submitBtn = document.getElementById('submitBtn');
  const originalText = submitBtn.innerHTML;
  
  // Show loading state
  submitBtn.disabled = true;
  submitBtn.innerHTML = '<span class="spinner-border spinner-border-sm me-2"></span>Submitting...';
  
  // Simulate API call
  setTimeout(() => {
    submitBtn.disabled = false;
    submitBtn.innerHTML = originalText;
    
    // Show success toast
    showToast('Form submitted successfully!', 'success');
  }, 2000);
});
```

## Summary

Bootstrap Toasts provide a flexible, accessible way to display temporary notifications:

- **Lightweight**: Built with flexbox and minimal markup
- **Customizable**: Easy to style, position, and configure
- **Accessible**: Built with screen reader support in mind
- **Flexible**: Support various content types and layouts
- **Programmatic**: Full JavaScript API for control
- **Responsive**: Work across all viewport sizes

Use them to provide feedback for user actions, system notifications, or any temporary information that needs to be displayed without interrupting the user's workflow.
