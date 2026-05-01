# Bootstrap Alerts

> Contextual feedback messages for typical user actions — available in 8 variants with optional dismissal.

---

## Examples

Alerts work with any length of text and an optional close button. Use one of the **eight contextual classes** for proper styling:

```html
<div class="alert alert-primary"   role="alert">A simple primary alert—check it out!</div>
<div class="alert alert-secondary" role="alert">A simple secondary alert—check it out!</div>
<div class="alert alert-success"   role="alert">A simple success alert—check it out!</div>
<div class="alert alert-danger"    role="alert">A simple danger alert—check it out!</div>
<div class="alert alert-warning"   role="alert">A simple warning alert—check it out!</div>
<div class="alert alert-info"      role="alert">A simple info alert—check it out!</div>
<div class="alert alert-light"     role="alert">A simple light alert—check it out!</div>
<div class="alert alert-dark"      role="alert">A simple dark alert—check it out!</div>
```

> **Accessibility tip:** Color alone doesn't convey meaning to screen readers. Make sure the alert's meaning is clear from the visible text itself, or add hidden text using the `.visually-hidden` class.

> **v5.3.0 note:** The `alert-variant()` Sass mixin is deprecated. Alert variants now use a Sass loop that overrides CSS variables.

---

## Live Example

Dynamically create and append a dismissible alert via JavaScript:

```html
<div id="liveAlertPlaceholder"></div>
<button type="button" class="btn btn-primary" id="liveAlertBtn">Show live alert</button>
```

```js
const alertPlaceholder = document.getElementById('liveAlertPlaceholder')

const appendAlert = (message, type) => {
  const wrapper = document.createElement('div')
  wrapper.innerHTML = [
    `<div class="alert alert-${type} alert-dismissible" role="alert">`,
    `   <div>${message}</div>`,
    '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
    '</div>'
  ].join('')

  alertPlaceholder.append(wrapper)
}

const alertTrigger = document.getElementById('liveAlertBtn')
if (alertTrigger) {
  alertTrigger.addEventListener('click', () => {
    appendAlert('Nice, you triggered this alert message!', 'success')
  })
}
```

---

## Link Color

Use `.alert-link` on anchor tags inside any alert to automatically match the alert's color scheme:

```html
<div class="alert alert-primary" role="alert">
  A simple primary alert with <a href="#" class="alert-link">an example link</a>.
</div>

<div class="alert alert-success" role="alert">
  A simple success alert with <a href="#" class="alert-link">an example link</a>.
</div>

<div class="alert alert-danger" role="alert">
  A simple danger alert with <a href="#" class="alert-link">an example link</a>.
</div>
```

---

## Additional Content

Alerts can contain any HTML — headings, paragraphs, dividers, etc. Use Bootstrap's margin utilities for spacing:

```html
<div class="alert alert-success" role="alert">
  <h4 class="alert-heading">Well done!</h4>
  <p>
    Aww yeah, you successfully read this important alert message. This example
    text is going to run a bit longer so that you can see how spacing within
    an alert works with this kind of content.
  </p>
  <hr>
  <p class="mb-0">
    Whenever you need to, be sure to use margin utilities to keep things nice and tidy.
  </p>
</div>
```

**Available inner elements:**

| Element | Class | Purpose |
|---|---|---|
| `<h4>` | `.alert-heading` | Styled heading that matches alert color |
| `<a>` | `.alert-link` | Colored link matching alert variant |
| `<hr>` | — | Divider inside the alert body |

---

## Icons

Use flexbox utilities alongside **Bootstrap Icons** to add icons to alerts.

### Single Inline SVG

```html
<div class="alert alert-primary d-flex align-items-center" role="alert">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    class="bi flex-shrink-0 me-2"
    viewBox="0 0 16 16"
    role="img"
    aria-label="Warning:"
  >
    <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091
    1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8
    5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1
    5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
  </svg>
  <div>An example alert with an icon</div>
</div>
```

### SVG Sprite (Reusable Icons)

Define symbols once, reference them everywhere:

```html
<!-- Hidden SVG sprite — place once in the page -->
<svg xmlns="http://www.w3.org/2000/svg" class="d-none">
  <symbol id="check-circle-fill" viewBox="0 0 16 16">
    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0
    0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97
    11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
  </symbol>
  <symbol id="info-fill" viewBox="0 0 16 16">
    <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm.93-9.412-1
    4.705c-.07.34.029.533.304.533.194 0 .487-.07.686-.246l-.088.416c-.287.346-.92.598-1.465.598-.703
    0-1.002-.422-.808-1.319l.738-3.468c.064-.293.006-.399-.287-.47l-.451-.081.082-.381
    2.29-.287zM8 5.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2z"/>
  </symbol>
  <symbol id="exclamation-triangle-fill" viewBox="0 0 16 16">
    <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091
    1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8
    5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1
    5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
  </symbol>
</svg>

<!-- Reuse icons by referencing symbol IDs -->
<div class="alert alert-primary d-flex align-items-center" role="alert">
  <svg class="bi flex-shrink-0 me-2" role="img" aria-label="Info:">
    <use xlink:href="#info-fill"/>
  </svg>
  <div>An example alert with an icon</div>
</div>

<div class="alert alert-success d-flex align-items-center" role="alert">
  <svg class="bi flex-shrink-0 me-2" role="img" aria-label="Success:">
    <use xlink:href="#check-circle-fill"/>
  </svg>
  <div>An example success alert with an icon</div>
</div>

<div class="alert alert-warning d-flex align-items-center" role="alert">
  <svg class="bi flex-shrink-0 me-2" role="img" aria-label="Warning:">
    <use xlink:href="#exclamation-triangle-fill"/>
  </svg>
  <div>An example warning alert with an icon</div>
</div>

<div class="alert alert-danger d-flex align-items-center" role="alert">
  <svg class="bi flex-shrink-0 me-2" role="img" aria-label="Danger:">
    <use xlink:href="#exclamation-triangle-fill"/>
  </svg>
  <div>An example danger alert with an icon</div>
</div>
```

---

## Dismissing

To make an alert dismissible:

1. Load the Bootstrap Alert JS plugin (or compiled Bootstrap JS)
2. Add `.alert-dismissible` to the alert — adds right padding and positions the close button
3. Add a `<button>` with `data-bs-dismiss="alert"` inside the alert
4. Add `.fade` and `.show` for an animated dismiss

```html
<div class="alert alert-warning alert-dismissible fade show" role="alert">
  <strong>Holy guacamole!</strong> You should check in on some of those fields below.
  <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div>
```

> **Important:** When an alert is dismissed, it is **completely removed from the DOM**. Keyboard users will lose focus. Listen for the `closed.bs.alert` event and programmatically move `focus()` to the most appropriate element. Add `tabindex="-1"` to non-interactive elements if you need to focus them.

---

## CSS Customization

### CSS Variables (Bootstrap 5.2+)

Alerts use scoped CSS variables on `.alert` for real-time customization:

```css
.alert {
  --bs-alert-bg: transparent;
  --bs-alert-padding-x: 1rem;
  --bs-alert-padding-y: 1rem;
  --bs-alert-margin-bottom: 1rem;
  --bs-alert-color: inherit;
  --bs-alert-border-color: transparent;
  --bs-alert-border: 1px solid var(--bs-alert-border-color);
  --bs-alert-border-radius: 0.375rem;
  --bs-alert-link-color: inherit;
}
```

### Key Sass Variables

```scss
$alert-padding-y:             $spacer;        // vertical padding
$alert-padding-x:             $spacer;        // horizontal padding
$alert-margin-bottom:         1rem;
$alert-border-radius:         var(--#{$prefix}border-radius);
$alert-link-font-weight:      $font-weight-bold;
$alert-border-width:          var(--#{$prefix}border-width);
$alert-dismissible-padding-r: $alert-padding-x * 3; // space for close button
```

### Sass Mixin (Deprecated in v5.3.0)

```scss
@mixin alert-variant($background, $border, $color) {
  --#{$prefix}alert-color: #{$color};
  --#{$prefix}alert-bg: #{$background};
  --#{$prefix}alert-border-color: #{$border};
  --#{$prefix}alert-link-color: #{shade-color($color, 20%)};
}
```

### Sass Loop (Current approach since v5.3.0)

Variant modifier classes are now generated with a loop that overrides CSS variables:

```scss
@each $state in map-keys($theme-colors) {
  .alert-#{$state} {
    --#{$prefix}alert-color:        var(--#{$prefix}#{$state}-text-emphasis);
    --#{$prefix}alert-bg:           var(--#{$prefix}#{$state}-bg-subtle);
    --#{$prefix}alert-border-color: var(--#{$prefix}#{$state}-border-subtle);
    --#{$prefix}alert-link-color:   var(--#{$prefix}#{$state}-text-emphasis);
  }
}
```

---

## JavaScript Behavior

### Initialize

```js
// Initialize all alerts on the page
const alertList = document.querySelectorAll('.alert')
const alerts = [...alertList].map(element => new bootstrap.Alert(element))
```

> **Note:** Manual initialization is not required just for dismissal. Adding `data-bs-dismiss="alert"` to a button auto-initializes and dismisses the alert.

### Triggers

**Dismiss button inside the alert:**

```html
<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
```

**Dismiss button outside the alert** (use `data-bs-target`):

```html
<button
  type="button"
  class="btn-close"
  data-bs-dismiss="alert"
  data-bs-target="#my-alert"
  aria-label="Close"
></button>
```

> Closing an alert **removes it from the DOM** entirely.

---

## Methods

Create an alert instance with the constructor:

```js
const bsAlert = new bootstrap.Alert('#myAlert')
```

| Method | Description |
|---|---|
| `.close()` | Closes and removes the alert from the DOM. Fades out first if `.fade` and `.show` classes are present. |
| `.dispose()` | Destroys the alert instance and removes stored data from the DOM element. |
| `.getInstance(el)` | Static. Returns the existing alert instance for a given element. |
| `.getOrCreateInstance(el)` | Static. Returns an existing instance or creates a new one. |

```js
// Get or create an instance and close it
const alert = bootstrap.Alert.getOrCreateInstance('#myAlert')
alert.close()
```

---

## Events

| Event | Description |
|---|---|
| `close.bs.alert` | Fires immediately when the `close` method is called. |
| `closed.bs.alert` | Fires after the alert is fully closed and CSS transitions have completed. |

```js
const myAlert = document.getElementById('myAlert')

myAlert.addEventListener('closed.bs.alert', event => {
  // Alert is gone from the DOM — move focus to avoid losing it
  // document.getElementById('some-element').focus()
})
```

---

## Quick Reference Cheatsheet

### Classes

| Class | Purpose |
|---|---|
| `.alert` | Base class — required on every alert |
| `.alert-primary` | Primary variant (blue) |
| `.alert-secondary` | Secondary variant (gray) |
| `.alert-success` | Success variant (green) |
| `.alert-danger` | Danger variant (red) |
| `.alert-warning` | Warning variant (yellow) |
| `.alert-info` | Info variant (cyan) |
| `.alert-light` | Light variant |
| `.alert-dark` | Dark variant |
| `.alert-dismissible` | Enables close button layout (adds right padding) |
| `.alert-heading` | Styled heading inside an alert |
| `.alert-link` | Colored link matching the alert's variant |
| `.fade` + `.show` | Enables animated fade-out on dismiss |

### Data Attributes

| Attribute | Placed On | Purpose |
|---|---|---|
| `data-bs-dismiss="alert"` | Button (inside or outside) | Auto-initializes and dismisses alert |
| `data-bs-target="#id"` | Button outside alert | Points to the alert to dismiss |
| `role="alert"` | `.alert` element | Required for screen reader accessibility |
| `aria-label="Close"` | Close button | Screen reader label |

### Events

| Event | Timing |
|---|---|
| `close.bs.alert` | Before closing animation starts |
| `closed.bs.alert` | After closing animation ends |

---
