# Bootstrap Modal 

Use Bootstrap's JavaScript modal plugin to add dialogs to your site for lightboxes, user notifications, or completely custom content.

## Table of Contents
- [How It Works](#how-it-works)
- [Modal Components (Structure)](#modal-components-structure)
- [Live Demo](#live-demo)
- [Static Backdrop](#static-backdrop)
- [Scrolling Long Content](#scrolling-long-content)
- [Vertically Centered](#vertically-centered)
- [Tooltips and Popovers](#tooltips-and-popovers)
- [Using the Grid](#using-the-grid)
- [Varying Modal Content](#varying-modal-content)
- [Toggle Between Modals](#toggle-between-modals)
- [Animation](#animation)
- [Dynamic Heights](#dynamic-heights)
- [Accessibility](#accessibility)
- [Optional Sizes](#optional-sizes)
- [Fullscreen Modal](#fullscreen-modal)
- [CSS Variables](#css-variables)
- [Sass Variables](#sass-variables)
- [Sass Loops](#sass-loops)
- [Usage: Data Attributes & JavaScript](#usage-data-attributes--javascript)
- [Options Reference](#options-reference)
- [Methods Reference](#methods-reference)
- [Events Reference](#events-reference)

---

## How It Works

Key facts to understand before using Bootstrap modals:

- Modals are built with **HTML, CSS, and JavaScript**. They use `position: fixed` and are layered above everything else.
- When a modal opens, **scroll is removed from `<body>`** so that modal content scrolls instead.
- **Clicking the backdrop** automatically closes the modal.
- **Only one modal can be open at a time.** Nested modals are not supported.
- Place modal HTML **at the top level of the document** to avoid rendering issues from other `position: fixed` elements.
- Mobile devices have some caveats due to `position: fixed` — see Bootstrap's browser support docs.
- The `autofocus` HTML attribute has **no effect** inside Bootstrap modals. Use JavaScript instead:

```javascript
const myModal = document.getElementById('myModal')
const myInput = document.getElementById('myInput')

myModal.addEventListener('shown.bs.modal', () => {
  myInput.focus()
})
```

- Animation respects the `prefers-reduced-motion` media query.

---

## Modal Components (Structure)

A modal has three structural layers:

```
.modal                  ← outermost wrapper (handles backdrop, scroll lock, positioning)
  └── .modal-dialog     ← sizes, centering, scrollability
        └── .modal-content  ← visible white box
              ├── .modal-header   ← title + close button
              ├── .modal-body     ← main content (required for padding)
              └── .modal-footer   ← action buttons (optional)
```

### Static example (structure only — no JS behavior)

```html
<div class="modal" tabindex="-1">
  <div class="modal-dialog">
    <div class="modal-content">

      <div class="modal-header">
        <h1 class="modal-title fs-5">Modal title</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>

      <div class="modal-body">
        <p>Modal body text goes here.</p>
      </div>

      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>

    </div>
  </div>
</div>
```

**Notes on structure:**
- `.modal-body` is **required** for proper padding.
- `.modal-footer` is optional, but recommended for action buttons.
- Always include a dismiss action in the `.modal-header` (or provide another explicit dismiss control).
- The `.modal-title` should ideally be an `<h1>` since modals are their own document context. Use font-size utilities (e.g., `.fs-5`) to control visual size without breaking heading hierarchy.

---

## Live Demo

A working modal triggered by a button. Slides down and fades in from the top.

```html
<!-- Trigger button -->
<button type="button" class="btn btn-primary"
  data-bs-toggle="modal" data-bs-target="#exampleModal">
  Launch demo modal
</button>

<!-- Modal -->
<div class="modal fade" id="exampleModal" tabindex="-1"
  aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        Modal content goes here.
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>
```

**Required attributes on `.modal`:**

| Attribute | Value | Purpose |
|---|---|---|
| `id` | Unique ID | Matched by `data-bs-target` on the trigger |
| `tabindex="-1"` | `-1` | Allows focus to be programmatically set on the modal |
| `aria-labelledby` | ID of `.modal-title` | Associates the dialog with its title for screen readers |
| `aria-hidden="true"` | `"true"` | Hides from assistive tech when closed (Bootstrap toggles this) |
| `.fade` | class | Enables the slide-in/fade animation |

---

## Static Backdrop

Prevent the modal from closing when the user clicks outside it by setting `data-bs-backdrop="static"`. Combine with `data-bs-keyboard="false"` to also disable `Esc` key closing.

```html
<!-- Trigger -->
<button type="button" class="btn btn-primary"
  data-bs-toggle="modal" data-bs-target="#staticBackdrop">
  Launch static backdrop modal
</button>

<!-- Modal -->
<div class="modal fade" id="staticBackdrop"
  data-bs-backdrop="static"
  data-bs-keyboard="false"
  tabindex="-1"
  aria-labelledby="staticBackdropLabel"
  aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="staticBackdropLabel">Modal title</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">...</div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Understood</button>
      </div>
    </div>
  </div>
</div>
```

**Behavior when `backdrop="static"`:**
- Clicking outside the modal does **not** close it.
- The modal briefly scales up (`.modal-scale-transform`) to indicate it cannot be dismissed that way.
- The `hidePrevented.bs.modal` event fires when a click outside or Esc is blocked.

---

## Scrolling Long Content

When modal content is taller than the viewport, the entire page scrolls by default. To make **only the modal body scroll** (keeping the header and footer fixed), add `.modal-dialog-scrollable` to `.modal-dialog`.

```html
<!-- Default: whole modal scrolls with page -->
<div class="modal-dialog">...</div>

<!-- Scrollable body only -->
<div class="modal-dialog modal-dialog-scrollable">...</div>
```

---

## Vertically Centered

Add `.modal-dialog-centered` to `.modal-dialog` to vertically center the modal in the viewport. Can be combined with `.modal-dialog-scrollable`.

```html
<!-- Vertically centered -->
<div class="modal-dialog modal-dialog-centered">...</div>

<!-- Vertically centered + scrollable body -->
<div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">...</div>
```

---

## Tooltips and Popovers

Bootstrap tooltips and popovers work inside modals. They are **automatically dismissed** when the modal closes — no extra cleanup needed.

```html
<div class="modal-body">
  <h2 class="fs-5">Popover in a modal</h2>
  <p>
    This
    <button class="btn btn-secondary"
      data-bs-toggle="popover"
      title="Popover title"
      data-bs-content="Popover body content is set in this attribute.">
      button
    </button>
    triggers a popover on click.
  </p>
  <hr>
  <h2 class="fs-5">Tooltips in a modal</h2>
  <p>
    <a href="#" data-bs-toggle="tooltip" title="Tooltip">This link</a>
    and
    <a href="#" data-bs-toggle="tooltip" title="Tooltip">that link</a>
    have tooltips on hover.
  </p>
</div>
```

---

## Using the Grid

Nest `.container-fluid` inside `.modal-body` to use Bootstrap's full grid system within a modal.

```html
<div class="modal-body">
  <div class="container-fluid">
    <div class="row">
      <div class="col-md-4">.col-md-4</div>
      <div class="col-md-4 ms-auto">.col-md-4 .ms-auto</div>
    </div>
    <div class="row">
      <div class="col-md-3 ms-auto">.col-md-3 .ms-auto</div>
      <div class="col-md-2 ms-auto">.col-md-2 .ms-auto</div>
    </div>
    <div class="row">
      <div class="col-md-6 ms-auto">.col-md-6 .ms-auto</div>
    </div>
    <div class="row">
      <div class="col-sm-9">
        Level 1: .col-sm-9
        <div class="row">
          <div class="col-8 col-sm-6">Level 2: .col-8 .col-sm-6</div>
          <div class="col-4 col-sm-6">Level 2: .col-4 .col-sm-6</div>
        </div>
      </div>
    </div>
  </div>
</div>
```

---

## Varying Modal Content

Use `event.relatedTarget` with `data-bs-*` attributes to dynamically change modal content based on which trigger button was clicked.

### HTML — multiple triggers, one modal

```html
<button type="button" class="btn btn-primary"
  data-bs-toggle="modal"
  data-bs-target="#exampleModal"
  data-bs-whatever="@mdo">Open modal for @mdo</button>

<button type="button" class="btn btn-primary"
  data-bs-toggle="modal"
  data-bs-target="#exampleModal"
  data-bs-whatever="@fat">Open modal for @fat</button>

<div class="modal fade" id="exampleModal" tabindex="-1"
  aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="exampleModalLabel">New message</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <form>
          <div class="mb-3">
            <label for="recipient-name" class="col-form-label">Recipient:</label>
            <input type="text" class="form-control" id="recipient-name">
          </div>
          <div class="mb-3">
            <label for="message-text" class="col-form-label">Message:</label>
            <textarea class="form-control" id="message-text"></textarea>
          </div>
        </form>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Send message</button>
      </div>
    </div>
  </div>
</div>
```

### JavaScript — read `data-bs-*` from `event.relatedTarget`

```javascript
const exampleModal = document.getElementById('exampleModal')

if (exampleModal) {
  exampleModal.addEventListener('show.bs.modal', event => {
    // The button that triggered the modal
    const button = event.relatedTarget

    // Extract value from custom data-bs-* attribute
    const recipient = button.getAttribute('data-bs-whatever')

    // Update modal content dynamically
    const modalTitle = exampleModal.querySelector('.modal-title')
    const modalBodyInput = exampleModal.querySelector('.modal-body input')

    modalTitle.textContent = `New message to ${recipient}`
    modalBodyInput.value = recipient
  })
}
```

**How it works:**
- Each trigger button carries data in its own `data-bs-whatever` attribute.
- The `show.bs.modal` event provides `event.relatedTarget` — the element that triggered the modal.
- You read the attribute from `relatedTarget` and update the modal's DOM before it becomes visible.

---

## Toggle Between Modals

Switch between two separate modals using `data-bs-toggle="modal"` and `data-bs-target` inside a modal's footer. Note: **two modals cannot be open simultaneously** — this pattern closes one before opening the next.

```html
<!-- Modal 1 -->
<div class="modal fade" id="exampleModalToggle"
  aria-hidden="true" aria-labelledby="exampleModalToggleLabel" tabindex="-1">
  <div class="modal-dialog modal-dialog-centered">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="exampleModalToggleLabel">Modal 1</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        Show a second modal and hide this one with the button below.
      </div>
      <div class="modal-footer">
        <!-- This closes Modal 1 and opens Modal 2 -->
        <button class="btn btn-primary"
          data-bs-target="#exampleModalToggle2"
          data-bs-toggle="modal">
          Open second modal
        </button>
      </div>
    </div>
  </div>
</div>

<!-- Modal 2 -->
<div class="modal fade" id="exampleModalToggle2"
  aria-hidden="true" aria-labelledby="exampleModalToggleLabel2" tabindex="-1">
  <div class="modal-dialog modal-dialog-centered">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="exampleModalToggleLabel2">Modal 2</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        Hide this modal and show the first with the button below.
      </div>
      <div class="modal-footer">
        <button class="btn btn-primary"
          data-bs-target="#exampleModalToggle"
          data-bs-toggle="modal">
          Back to first
        </button>
      </div>
    </div>
  </div>
</div>

<!-- External trigger -->
<button class="btn btn-primary"
  data-bs-target="#exampleModalToggle"
  data-bs-toggle="modal">
  Open first modal
</button>
```

---

## Animation

### Change animation

The modal uses two Sass variables to define its animation:

| Variable | Controls |
|---|---|
| `$modal-fade-transform` | Transform of `.modal-dialog` **before** (start of) the fade-in |
| `$modal-show-transform` | Transform of `.modal-dialog` **at the end of** the fade-in |

**Example: zoom-in animation**

```scss
// In your custom Sass before compiling
$modal-fade-transform: scale(.8);
```

This makes the modal scale from 80% to full size as it fades in.

### Remove animation entirely

Remove the `.fade` class from the `.modal` element to make it appear instantly with no transition.

```html
<!-- No fade animation -->
<div class="modal" tabindex="-1" aria-labelledby="..." aria-hidden="true">
  ...
</div>
```

---

## Dynamic Heights

If modal content changes height **while the modal is open** (e.g., a form validation message appears and causes a scrollbar), call `handleUpdate()` to readjust positioning:

```javascript
const myModal = bootstrap.Modal.getInstance('#myModal')
myModal.handleUpdate()
```

---

## Accessibility

- Add `aria-labelledby="..."` on `.modal`, referencing the `id` of `.modal-title`. This links the dialog to its title for screen readers.
- Optionally add `aria-describedby="..."` on `.modal` to reference a description of the modal's purpose.
- **Do not** add `role="dialog"` manually — Bootstrap adds it via JavaScript automatically.
- Always include a visible, labeled close/dismiss action in or near the modal header.

```html
<div class="modal fade" id="myModal" tabindex="-1"
  aria-labelledby="myModalTitle"
  aria-describedby="myModalDescription"
  aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="myModalTitle">Dialog Title</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <p id="myModalDescription">A clear description of what this modal does.</p>
      </div>
    </div>
  </div>
</div>
```

---

## Optional Sizes

Add a size modifier class to `.modal-dialog` to change the modal's max-width.

| Size | Class | Max-width |
|---|---|---|
| Small | `.modal-sm` | 300px |
| Default (medium) | *(none)* | 500px |
| Large | `.modal-lg` | 800px |
| Extra large | `.modal-xl` | 1140px |

> Size classes activate at breakpoints to avoid horizontal scrollbars on narrow screens.

```html
<div class="modal-dialog modal-sm">...</div>   <!-- 300px -->
<div class="modal-dialog">...</div>             <!-- 500px (default) -->
<div class="modal-dialog modal-lg">...</div>   <!-- 800px -->
<div class="modal-dialog modal-xl">...</div>   <!-- 1140px -->
```

---

## Fullscreen Modal

Make a modal cover the entire viewport with fullscreen modifier classes on `.modal-dialog`.

| Class | Goes fullscreen... |
|---|---|
| `.modal-fullscreen` | Always |
| `.modal-fullscreen-sm-down` | Below 576px |
| `.modal-fullscreen-md-down` | Below 768px |
| `.modal-fullscreen-lg-down` | Below 992px |
| `.modal-fullscreen-xl-down` | Below 1200px |
| `.modal-fullscreen-xxl-down` | Below 1400px |

```html
<!-- Always fullscreen -->
<div class="modal-dialog modal-fullscreen">...</div>

<!-- Fullscreen only on small screens (mobile-friendly modal) -->
<div class="modal-dialog modal-fullscreen-sm-down">...</div>

<!-- Combine with size for large screens, fullscreen on small -->
<div class="modal-dialog modal-lg modal-fullscreen-lg-down">...</div>
```

---

## CSS Variables

Added in **Bootstrap v5.2.0**. Modals use local CSS variables on `.modal` and `.modal-backdrop`.

Defined in `scss/_modal.scss`:

```scss
/* .modal variables */
--#{$prefix}modal-zindex: #{$zindex-modal};
--#{$prefix}modal-width: #{$modal-md};
--#{$prefix}modal-padding: #{$modal-inner-padding};
--#{$prefix}modal-margin: #{$modal-dialog-margin};
--#{$prefix}modal-color: #{$modal-content-color};
--#{$prefix}modal-bg: #{$modal-content-bg};
--#{$prefix}modal-border-color: #{$modal-content-border-color};
--#{$prefix}modal-border-width: #{$modal-content-border-width};
--#{$prefix}modal-border-radius: #{$modal-content-border-radius};
--#{$prefix}modal-box-shadow: #{$modal-content-box-shadow-xs};
--#{$prefix}modal-inner-border-radius: #{$modal-content-inner-border-radius};
--#{$prefix}modal-header-padding-x: #{$modal-header-padding-x};
--#{$prefix}modal-header-padding-y: #{$modal-header-padding-y};
--#{$prefix}modal-header-padding: #{$modal-header-padding};
--#{$prefix}modal-header-border-color: #{$modal-header-border-color};
--#{$prefix}modal-header-border-width: #{$modal-header-border-width};
--#{$prefix}modal-title-line-height: #{$modal-title-line-height};
--#{$prefix}modal-footer-gap: #{$modal-footer-margin-between};
--#{$prefix}modal-footer-bg: #{$modal-footer-bg};
--#{$prefix}modal-footer-border-color: #{$modal-footer-border-color};
--#{$prefix}modal-footer-border-width: #{$modal-footer-border-width};

/* .modal-backdrop variables */
--#{$prefix}backdrop-zindex: #{$zindex-modal-backdrop};
--#{$prefix}backdrop-bg: #{$modal-backdrop-bg};
--#{$prefix}backdrop-opacity: #{$modal-backdrop-opacity};
```

### Example: CSS variable override

```css
#myModal {
  --bs-modal-bg: #f8f9fa;
  --bs-modal-border-radius: 1rem;
  --bs-backdrop-opacity: 0.8;
}
```

---

## Sass Variables

Defined in `scss/_variables.scss`:

```scss
$modal-inner-padding:               $spacer;
$modal-footer-margin-between:       .5rem;
$modal-dialog-margin:               .5rem;
$modal-dialog-margin-y-sm-up:       1.75rem;
$modal-title-line-height:           $line-height-base;

$modal-content-color:               var(--#{$prefix}body-color);
$modal-content-bg:                  var(--#{$prefix}body-bg);
$modal-content-border-color:        var(--#{$prefix}border-color-translucent);
$modal-content-border-width:        var(--#{$prefix}border-width);
$modal-content-border-radius:       var(--#{$prefix}border-radius-lg);
$modal-content-inner-border-radius: subtract($modal-content-border-radius, $modal-content-border-width);
$modal-content-box-shadow-xs:       var(--#{$prefix}box-shadow-sm);
$modal-content-box-shadow-sm-up:    var(--#{$prefix}box-shadow);

$modal-backdrop-bg:                 $black;
$modal-backdrop-opacity:            .5;

$modal-header-border-color:         var(--#{$prefix}border-color);
$modal-header-border-width:         $modal-content-border-width;
$modal-header-padding-y:            $modal-inner-padding;
$modal-header-padding-x:            $modal-inner-padding;
$modal-header-padding:              $modal-header-padding-y $modal-header-padding-x;

$modal-footer-bg:                   null;
$modal-footer-border-color:         $modal-header-border-color;
$modal-footer-border-width:         $modal-header-border-width;

// Size widths
$modal-sm:                          300px;
$modal-md:                          500px;
$modal-lg:                          800px;
$modal-xl:                          1140px;

// Animation
$modal-fade-transform:              translate(0, -50px);  // start position
$modal-show-transform:              none;                 // end position
$modal-transition:                  transform .3s ease-out;
$modal-scale-transform:             scale(1.02);          // static backdrop "bounce"
```

---

## Sass Loops

Responsive fullscreen modal classes are auto-generated by looping over `$grid-breakpoints`:

```scss
// scss/_modal.scss
@each $breakpoint in map-keys($grid-breakpoints) {
  $infix: breakpoint-infix($breakpoint, $grid-breakpoints);
  $postfix: if($infix != "", $infix + "-down", "");

  @include media-breakpoint-down($breakpoint) {
    .modal-fullscreen#{$postfix} {
      width: 100vw;
      max-width: none;
      height: 100%;
      margin: 0;

      .modal-content {
        height: 100%;
        border: 0;
        @include border-radius(0);
      }

      .modal-header,
      .modal-footer {
        @include border-radius(0);
      }

      .modal-body {
        overflow-y: auto;
      }
    }
  }
}
```

This generates `.modal-fullscreen`, `.modal-fullscreen-sm-down`, `.modal-fullscreen-md-down`, and so on, for every breakpoint.

---

## Usage: Data Attributes & JavaScript

The modal plugin shows/hides content by toggling classes and a `.modal-backdrop`, overriding body scroll in the process.

### Via Data Attributes — Toggle

Add `data-bs-toggle="modal"` and `data-bs-target="#modalId"` to any trigger element.

```html
<button type="button" data-bs-toggle="modal" data-bs-target="#myModal">
  Launch modal
</button>
```

### Via Data Attributes — Dismiss

Inside the modal, use `data-bs-dismiss="modal"` on any button.

```html
<!-- Dismiss from inside the modal -->
<button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>

<!-- Dismiss from OUTSIDE the modal (requires data-bs-target) -->
<button type="button" data-bs-dismiss="modal" data-bs-target="#my-modal" aria-label="Close"></button>
```

> **Note:** Dismissing from outside the modal does not conform to the ARIA dialog pattern — use with caution.

### Via JavaScript

```javascript
// Initialize by element reference
const myModal = new bootstrap.Modal(document.getElementById('myModal'), options)

// Or by CSS selector string
const myModal = new bootstrap.Modal('#myModal', options)

// With options
const myModal = new bootstrap.Modal('#myModal', {
  backdrop: 'static',
  keyboard: false
})
```

---

## Options Reference

Options can be passed via data attributes (kebab-case) or JavaScript (camelCase).

| Name | Type | Default | Description |
|---|---|---|---|
| `backdrop` | boolean / `'static'` | `true` | `true` = show a dismissible backdrop. `false` = no backdrop. `'static'` = backdrop present but clicking it does **not** close the modal. |
| `focus` | boolean | `true` | Moves focus to the modal when it opens. |
| `keyboard` | boolean | `true` | Closes the modal when the `Esc` key is pressed. Set to `false` with `backdrop: 'static'` to fully lock the modal. |

---

## Methods Reference

> All API methods are **asynchronous** — they return as soon as the transition starts, not when it ends. Method calls on a transitioning modal are ignored.

| Method | Description |
|---|---|
| `show(relatedTarget?)` | Opens the modal. Optionally pass a DOM element as `relatedTarget` — it will be available on modal events. Returns before the modal is fully visible. |
| `hide` | Closes the modal. Returns before the modal is fully hidden. |
| `toggle` | Toggles open/closed. Returns before the transition ends. |
| `handleUpdate` | Readjusts the modal's position if its height changes while open (e.g., scrollbar appears). |
| `dispose` | Destroys the modal instance and removes stored DOM data. |
| `getInstance(element)` | Static — returns the modal instance for a DOM element. |
| `getOrCreateInstance(element)` | Static — returns an existing instance or creates a new one. |

```javascript
const modalEl = document.getElementById('myModal')
const modal = bootstrap.Modal.getOrCreateInstance(modalEl)

modal.show()           // open
modal.hide()           // close
modal.toggle()         // toggle

// Pass relatedTarget to make it available in events
const triggerBtn = document.getElementById('triggerBtn')
modal.show(triggerBtn)

modal.handleUpdate()   // reposition after height change
modal.dispose()        // destroy instance
```

---

## Events Reference

All modal events fire on the **`.modal` element** itself.

| Event | Description | Preventable? |
|---|---|---|
| `show.bs.modal` | Fires immediately when `show` is called. If triggered by a click, `event.relatedTarget` is the trigger element. | No |
| `shown.bs.modal` | Fires after the modal is fully visible (CSS transitions complete). `event.relatedTarget` is the trigger element if applicable. | No |
| `hide.bs.modal` | Fires immediately when `hide` is called. | **Yes** — call `event.preventDefault()` to cancel hiding. |
| `hidden.bs.modal` | Fires after the modal is fully hidden (CSS transitions complete). | No |
| `hidePrevented.bs.modal` | Fires when `backdrop="static"` is set and a click outside the modal (or `Esc` with `keyboard: false`) is blocked. | No |

```javascript
const myModalEl = document.getElementById('myModal')

// Fires when modal becomes fully visible
myModalEl.addEventListener('shown.bs.modal', event => {
  console.log('Modal shown, triggered by:', event.relatedTarget)
})

// Fires when modal becomes fully hidden
myModalEl.addEventListener('hidden.bs.modal', event => {
  console.log('Modal is now hidden')
})

// Fires immediately when hide starts — can be cancelled
myModalEl.addEventListener('hide.bs.modal', event => {
  const shouldCancel = true
  if (shouldCancel) {
    event.preventDefault() // stop the modal from hiding
  }
})

// Fires when static backdrop blocks dismissal
myModalEl.addEventListener('hidePrevented.bs.modal', event => {
  console.log('Dismiss attempt was blocked by static backdrop')
})
```

---

## Quick Reference

```html
<!-- Trigger -->
<button type="button" class="btn btn-primary"
  data-bs-toggle="modal" data-bs-target="#myModal">
  Open Modal
</button>

<!-- Standard modal -->
<div class="modal fade" id="myModal" tabindex="-1"
  aria-labelledby="myModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="myModalLabel">Title</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">Content here.</div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save</button>
      </div>
    </div>
  </div>
</div>

<!-- Static backdrop (won't close on outside click or Esc) -->
<div class="modal fade" data-bs-backdrop="static" data-bs-keyboard="false" ...>

<!-- Scrollable body -->
<div class="modal-dialog modal-dialog-scrollable">

<!-- Vertically centered -->
<div class="modal-dialog modal-dialog-centered">

<!-- Size variants -->
<div class="modal-dialog modal-sm">    <!-- 300px -->
<div class="modal-dialog modal-lg">    <!-- 800px -->
<div class="modal-dialog modal-xl">    <!-- 1140px -->

<!-- Fullscreen -->
<div class="modal-dialog modal-fullscreen">
<div class="modal-dialog modal-fullscreen-md-down">

<!-- No animation -->
<div class="modal" tabindex="-1" ...>   <!-- no .fade class -->
```

---