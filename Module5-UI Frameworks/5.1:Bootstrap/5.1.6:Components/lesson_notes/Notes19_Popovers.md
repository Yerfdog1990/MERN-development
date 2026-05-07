# Bootstrap Popovers

Documentation and examples for adding Bootstrap popovers, like those found in iOS, to any element on your site.

## Table of Contents
- [Overview](#overview)
- [Enable Popovers](#enable-popovers)
- [Live Demo](#live-demo)
- [Four Directions](#four-directions)
- [Custom Container](#custom-container)
- [Custom Popovers](#custom-popovers)
- [Dismiss on Next Click](#dismiss-on-next-click)
- [Disabled Elements](#disabled-elements)
- [CSS Variables](#css-variables)
- [Sass Variables](#sass-variables)
- [Usage & Accessibility](#usage--accessibility)
- [Options Reference](#options-reference)
- [Using `popperConfig` as a Function](#using-popperconfig-as-a-function)
- [Methods Reference](#methods-reference)
- [Events Reference](#events-reference)

---

## Overview

Key things to know before using popovers:

- **Popper is required.** Include `popper.min.js` before `bootstrap.js`, or use `bootstrap.bundle.min.js` which contains Popper.
- **Opt-in only.** Popovers are not initialized automatically — you must initialize them yourself via JavaScript.
- **Zero-length title and content values will never show a popover.**
- Use `container: 'body'` to avoid rendering problems in complex components (input groups, button groups, etc.).
- Triggering popovers on **hidden elements** will not work.
- Popovers on `.disabled` or `disabled` elements must be triggered from a **wrapper element**.
- When triggered from anchors that wrap across multiple lines, popovers will be centered between the anchors' full width. Use `.text-nowrap` on `<a>` elements to avoid this.
- Popovers must be **hidden before their trigger element is removed** from the DOM.
- Popovers can be triggered from elements inside a **shadow DOM**.
- By default, a **built-in content sanitizer** strips disallowed HTML tags from content.
- Animation respects `prefers-reduced-motion`.

---

## Enable Popovers

Initialize all popovers on a page by selecting elements with `data-bs-toggle="popover"`:

```javascript
const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]')
const popoverList = [...popoverTriggerList].map(popoverTriggerEl =>
  new bootstrap.Popover(popoverTriggerEl)
)
```

---

## Live Demo

Set the popover **title** via `data-bs-title` and **body content** via `data-bs-content` directly in HTML.

> Using the native `title` attribute also works — Popper will automatically replace it with `data-bs-title` when the element is rendered.

```html
<button type="button" class="btn btn-lg btn-danger"
  data-bs-toggle="popover"
  data-bs-title="Popover title"
  data-bs-content="And here's some amazing content. It's very engaging. Right?">
  Click to toggle popover
</button>
```

---

## Four Directions

Set `data-bs-placement` to control which side the popover appears. Directions are mirrored in RTL mode.

```html
<button type="button" class="btn btn-secondary"
  data-bs-container="body"
  data-bs-toggle="popover"
  data-bs-placement="top"
  data-bs-content="Top popover">
  Popover on top
</button>

<button type="button" class="btn btn-secondary"
  data-bs-container="body"
  data-bs-toggle="popover"
  data-bs-placement="right"
  data-bs-content="Right popover">
  Popover on right
</button>

<button type="button" class="btn btn-secondary"
  data-bs-container="body"
  data-bs-toggle="popover"
  data-bs-placement="bottom"
  data-bs-content="Bottom popover">
  Popover on bottom
</button>

<button type="button" class="btn btn-secondary"
  data-bs-container="body"
  data-bs-toggle="popover"
  data-bs-placement="left"
  data-bs-content="Left popover">
  Popover on left
</button>
```

**Available placements:**

| Value | Position |
|---|---|
| `top` | Above the trigger |
| `bottom` | Below the trigger |
| `left` | To the left of the trigger |
| `right` | To the right of the trigger |
| `auto` | Dynamically reorients based on available space |

> **Note:** `data-bs-container="body"` is recommended on direction examples to prevent positioning issues in complex layouts.

---

## Custom Container

Use the `container` option to specify where the popover's HTML is appended in the DOM. This prevents positioning issues caused by parent element styles (e.g., in responsive tables or input groups).

### Appending to `<body>` (most common)

```javascript
const popover = new bootstrap.Popover('.example-popover', {
  container: 'body'
})
```

### Appending to a modal (for popovers inside modals)

When a popover is inside a modal, set `container` to the modal body. This is critical for popovers with **interactive content** (forms, links) because modals trap focus — if the popover is not a child of the modal, users won't be able to reach interactive elements inside it.

```javascript
const popover = new bootstrap.Popover('.example-popover', {
  container: '.modal-body'
})
```

---

## Custom Popovers

Added in **Bootstrap v5.2.0**. Use `data-bs-custom-class` to apply a scoped class to the popover, then override CSS variables on that class.

```html
<button type="button" class="btn btn-secondary"
  data-bs-toggle="popover"
  data-bs-placement="right"
  data-bs-custom-class="custom-popover"
  data-bs-title="Custom popover"
  data-bs-content="This popover is themed via CSS variables.">
  Custom popover
</button>
```

```scss
// Your custom SCSS
.custom-popover {
  --bs-popover-max-width: 200px;
  --bs-popover-border-color: var(--bd-violet-bg);
  --bs-popover-header-bg: var(--bd-violet-bg);
  --bs-popover-header-color: var(--bs-white);
  --bs-popover-body-padding-x: 1rem;
  --bs-popover-body-padding-y: .5rem;
}
```

**How it works:** `data-bs-custom-class` adds the given class to the `.popover` element when shown, scoping your CSS variable overrides without affecting other popovers on the page.

---

## Dismiss on Next Click

Use `data-bs-trigger="focus"` to dismiss the popover when the user clicks anywhere else on the page.

> **Important constraints for cross-browser/cross-platform compatibility:**
> - Must use an `<a>` element — **not** a `<button>`.
> - Must include `tabindex="0"` on the `<a>` element.

```html
<!-- HTML: must be <a> with tabindex -->
<a tabindex="0" class="btn btn-lg btn-danger" role="button"
  data-bs-toggle="popover"
  data-bs-trigger="focus"
  data-bs-title="Dismissible popover"
  data-bs-content="And here's some amazing content. It's very engaging. Right?">
  Dismissible popover
</a>
```

```javascript
// JavaScript alternative
const popover = new bootstrap.Popover('.popover-dismiss', {
  trigger: 'focus'
})
```

---

## Disabled Elements

Elements with the `disabled` attribute are not interactive — users cannot hover or click them to trigger a popover. Workaround: wrap the disabled element in a `<span>` or `<div>` and attach the popover to the wrapper.

- Make the wrapper **keyboard-focusable** with `tabindex="0"`.
- Use `data-bs-trigger="hover focus"` so the popover appears immediately on hover or focus, since users won't expect to click a disabled element.

```html
<span class="d-inline-block" tabindex="0"
  data-bs-toggle="popover"
  data-bs-trigger="hover focus"
  data-bs-content="Disabled popover">
  <button class="btn btn-primary" type="button" disabled>Disabled button</button>
</span>
```

---

## CSS Variables

Added in **Bootstrap v5.2.0**. Popovers use local CSS variables on `.popover` for real-time customization.

Defined in `scss/_popover.scss`:

```scss
--#{$prefix}popover-zindex: #{$zindex-popover};
--#{$prefix}popover-max-width: #{$popover-max-width};
--#{$prefix}popover-font-size: #{$popover-font-size};
--#{$prefix}popover-bg: #{$popover-bg};
--#{$prefix}popover-border-width: #{$popover-border-width};
--#{$prefix}popover-border-color: #{$popover-border-color};
--#{$prefix}popover-border-radius: #{$popover-border-radius};
--#{$prefix}popover-inner-border-radius: #{$popover-inner-border-radius};
--#{$prefix}popover-box-shadow: #{$popover-box-shadow};
--#{$prefix}popover-header-padding-x: #{$popover-header-padding-x};
--#{$prefix}popover-header-padding-y: #{$popover-header-padding-y};
--#{$prefix}popover-header-font-size: #{$popover-header-font-size};
--#{$prefix}popover-header-color: #{$popover-header-color};
--#{$prefix}popover-header-bg: #{$popover-header-bg};
--#{$prefix}popover-body-padding-x: #{$popover-body-padding-x};
--#{$prefix}popover-body-padding-y: #{$popover-body-padding-y};
--#{$prefix}popover-body-color: #{$popover-body-color};
--#{$prefix}popover-arrow-width: #{$popover-arrow-width};
--#{$prefix}popover-arrow-height: #{$popover-arrow-height};
--#{$prefix}popover-arrow-border: var(--#{$prefix}popover-border-color);
```

### Example: Override via CSS

```css
/* Global override */
.popover {
  --bs-popover-max-width: 350px;
  --bs-popover-border-radius: 0.75rem;
}

/* Scoped override using custom class */
.my-popover {
  --bs-popover-header-bg: #0d6efd;
  --bs-popover-header-color: #fff;
  --bs-popover-bg: #f8f9fa;
}
```

---

## Sass Variables

Defined in `scss/_variables.scss`:

```scss
/* Typography and sizing */
$popover-font-size:                 $font-size-sm;
$popover-max-width:                 276px;

/* Container */
$popover-bg:                        var(--#{$prefix}body-bg);
$popover-border-width:              var(--#{$prefix}border-width);
$popover-border-color:              var(--#{$prefix}border-color-translucent);
$popover-border-radius:             var(--#{$prefix}border-radius-lg);
$popover-inner-border-radius:       calc(#{$popover-border-radius} - #{$popover-border-width});
$popover-box-shadow:                var(--#{$prefix}box-shadow);

/* Header */
$popover-header-font-size:          $font-size-base;
$popover-header-bg:                 var(--#{$prefix}secondary-bg);
$popover-header-color:              $headings-color;
$popover-header-padding-y:          .5rem;
$popover-header-padding-x:          $spacer;

/* Body */
$popover-body-color:                var(--#{$prefix}body-color);
$popover-body-padding-y:            $spacer;
$popover-body-padding-x:            $spacer;

/* Arrow */
$popover-arrow-width:               1rem;
$popover-arrow-height:              .5rem;
```

---

## Usage & Accessibility

### Initialize via JavaScript

```javascript
const exampleEl = document.getElementById('example')
const popover = new bootstrap.Popover(exampleEl, options)
```

### Accessibility guidelines

- Only attach popovers to **keyboard-focusable, interactive elements** (links, form controls). Adding `tabindex="0"` to non-interactive elements creates confusing tab stops for keyboard users, and most assistive technologies will not announce the popover.
- **Do not rely solely on `hover`** as the trigger — this makes the popover inaccessible to keyboard users.
- **Avoid excessive HTML content** with the `html` option. All popover content is announced via `aria-describedby` as one continuous stream to screen readers.
- **Interactive elements inside popovers** (forms, links) can cause illogical focus order since popovers are placed randomly in the DOM. Consider using a **modal dialog** instead for such cases.

---

## Options Reference

Options can be passed via data attributes (kebab-case) or JavaScript (camelCase). As of Bootstrap 5.2.0, the `data-bs-config` JSON attribute is also supported.

> **Security note:** `sanitize`, `sanitizeFn`, and `allowList` cannot be set via data attributes — they must be passed via JavaScript only.

| Name | Type | Default | Description |
|---|---|---|---|
| `allowList` | object | Default value | Allowed HTML tags and attributes for the content sanitizer. Tags not on the list are stripped. |
| `animation` | boolean | `true` | Apply a CSS fade transition when showing/hiding. |
| `boundary` | string / element | `'clippingParents'` | Overflow constraint boundary for Popper's `preventOverflow` modifier. |
| `container` | string / element / `false` | `false` | Appends the popover to a specific element. Use `'body'` to avoid positioning issues. |
| `content` | string / element / function | `''` | The popover body text. If a function, called with `this` set to the trigger element. |
| `customClass` | string / function | `''` | Additional class(es) added to the popover when shown. Multiple classes: space-separated string. |
| `delay` | number / object | `0` | Delay in ms for show/hide (not applicable to `manual` trigger). Object form: `{ "show": 500, "hide": 100 }`. |
| `fallbackPlacements` | string / array | `['top', 'right', 'bottom', 'left']` | Ordered list of fallback placements if the preferred placement doesn't fit. |
| `html` | boolean | `false` | Allow HTML in title/content. **Avoid with user-generated input** — XSS risk. Use `innerText` (default `false`) for safety. |
| `offset` | number / string / function | `[0, 8]` | Offset `[skidding, distance]` from the trigger. Data attribute: `data-bs-offset="10,20"`. |
| `placement` | string / function | `'right'` | Popover position: `auto`, `top`, `bottom`, `left`, `right`. Function receives the popover DOM node and trigger element. |
| `popperConfig` | null / object / function | `null` | Override Bootstrap's default Popper config. Function receives the default config and must return the merged config. |
| `sanitize` | boolean | `true` | Enable content sanitization. Disabling this is a security risk — not covered by Bootstrap's security model. |
| `sanitizeFn` | null / function | `null` | Provide a custom sanitization function instead of the built-in sanitizer. |
| `selector` | string / `false` | `false` | CSS selector for event delegation — useful for dynamically added elements. |
| `template` | string | See below | Base HTML template for the popover. Title injected into `.popover-header`, content into `.popover-body`. |
| `title` | string / element / function | `''` | The popover title / header text. If a function, called with `this` set to the trigger element. |
| `trigger` | string | `'click'` | How the popover is triggered: `click`, `hover`, `focus`, `manual`. Multiple triggers: space-separated. `manual` cannot be combined with others. |

**Default template:**
```html
<div class="popover" role="tooltip">
  <div class="popover-arrow"></div>
  <h3 class="popover-header"></h3>
  <div class="popover-body"></div>
</div>
```

---

## Using `popperConfig` as a Function

```javascript
const popover = new bootstrap.Popover(element, {
  popperConfig(defaultBsPopperConfig) {
    // Merge or override the default config
    return {
      ...defaultBsPopperConfig,
      modifiers: [
        ...defaultBsPopperConfig.modifiers,
        { name: 'flip', options: { fallbackPlacements: ['bottom'] } }
      ]
    }
  }
})
```

---

## Methods Reference

> All API methods are **asynchronous** — they return as soon as the transition starts, not when it ends. Method calls on a transitioning component are ignored.

| Method | Description |
|---|---|
| `show` | Shows the popover. Returns before fully shown (before `shown.bs.popover`). Popovers with zero-length title and content are never shown. |
| `hide` | Hides the popover. Returns before fully hidden (before `hidden.bs.popover`). |
| `toggle` | Toggles the popover. Returns before transition completes. |
| `enable` | Allows the popover to be shown. Popovers are enabled by default. |
| `disable` | Prevents the popover from being shown. Can be re-enabled with `enable`. |
| `toggleEnabled` | Toggles the enabled/disabled ability to show. |
| `update` | Updates the popover's position. |
| `setContent` | Updates the popover's content after initialization. |
| `dispose` | Hides and destroys the popover instance, removing stored DOM data. Delegation-based popovers (using `selector`) cannot be individually destroyed on descendant elements. |
| `getInstance(element)` | Static — returns the popover instance for a DOM element. |
| `getOrCreateInstance(element)` | Static — returns an existing instance or creates a new one. |

```javascript
// Get or create instance
const popover = bootstrap.Popover.getOrCreateInstance('#example')

// Control visibility
popover.show()
popover.hide()
popover.toggle()

// Enable / disable
popover.enable()
popover.disable()
popover.toggleEnabled()

// Reposition after DOM changes
popover.update()

// Update content dynamically after initialization
popover.setContent({
  '.popover-header': 'New title',
  '.popover-body': 'New content'
})
// setContent values can be: string | element | function | null

// Destroy
popover.dispose()
```

> **`setContent` key format:** Each key must be a valid CSS selector matching an element within the popover template (e.g., `.popover-header`, `.popover-body`). Values can be a string, DOM element, function, or `null`.

---

## Events Reference

All popover events fire on the **trigger element** (the element with `data-bs-toggle="popover"`).

| Event | Description |
|---|---|
| `show.bs.popover` | Fires immediately when `show` is called (before transition). |
| `inserted.bs.popover` | Fires after `show.bs.popover` once the popover template has been added to the DOM. |
| `shown.bs.popover` | Fires after the popover is fully visible (CSS transitions complete). |
| `hide.bs.popover` | Fires immediately when `hide` is called (before transition). |
| `hidden.bs.popover` | Fires after the popover is fully hidden (CSS transitions complete). |

> **Event order when showing:** `show.bs.popover` → `inserted.bs.popover` → `shown.bs.popover`

```javascript
const myPopoverTrigger = document.getElementById('myPopover')

// Fires after fully shown
myPopoverTrigger.addEventListener('shown.bs.popover', () => {
  console.log('Popover is now visible')
})

// Fires after fully hidden
myPopoverTrigger.addEventListener('hidden.bs.popover', () => {
  console.log('Popover is now hidden')
})

// Fires when popover HTML is added to the DOM (between show and shown)
myPopoverTrigger.addEventListener('inserted.bs.popover', () => {
  console.log('Popover template added to DOM')
})
```

---

## Quick Reference

```html
<!-- Basic popover -->
<button type="button" class="btn btn-primary"
  data-bs-toggle="popover"
  data-bs-title="Title"
  data-bs-content="Body content here.">
  Toggle popover
</button>

<!-- Directional placement -->
<button data-bs-toggle="popover" data-bs-placement="top" data-bs-content="Top">Top</button>
<button data-bs-toggle="popover" data-bs-placement="bottom" data-bs-content="Bottom">Bottom</button>
<button data-bs-toggle="popover" data-bs-placement="left" data-bs-content="Left">Left</button>
<button data-bs-toggle="popover" data-bs-placement="right" data-bs-content="Right">Right</button>

<!-- Dismiss on next click (must be <a> with tabindex) -->
<a tabindex="0" class="btn btn-danger" role="button"
  data-bs-toggle="popover"
  data-bs-trigger="focus"
  data-bs-title="Dismissible"
  data-bs-content="Click anywhere else to close.">
  Dismissible
</a>

<!-- Disabled element (wrap in <span>) -->
<span class="d-inline-block" tabindex="0"
  data-bs-toggle="popover"
  data-bs-trigger="hover focus"
  data-bs-content="Disabled tooltip">
  <button class="btn btn-primary" disabled>Disabled</button>
</span>

<!-- Custom styled popover -->
<button data-bs-toggle="popover"
  data-bs-custom-class="my-popover"
  data-bs-title="Styled"
  data-bs-content="Themed via CSS variables.">
  Custom
</button>

<!-- Initialize all popovers -->
<script>
const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]')
const popoverList = [...popoverTriggerList].map(el => new bootstrap.Popover(el))
</script>

<!-- Initialize single popover with options -->
<script>
const popover = new bootstrap.Popover('#myBtn', {
  container: 'body',
  trigger: 'hover focus',
  placement: 'top',
  delay: { show: 300, hide: 100 }
})
</script>
```

---