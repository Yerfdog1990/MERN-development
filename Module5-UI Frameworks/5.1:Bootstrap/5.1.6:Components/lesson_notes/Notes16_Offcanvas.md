# Bootstrap Offcanvas 

Build hidden sidebars into your project for navigation, shopping carts, and more with a few classes and Bootstrap's JavaScript plugin.

## Table of Contents
- [How It Works](#how-it-works)
- [Offcanvas Structure](#offcanvas-structure)
- [Live Demo](#live-demo)
- [Body Scrolling](#body-scrolling)
- [Body Scrolling and Backdrop](#body-scrolling-and-backdrop)
- [Static Backdrop](#static-backdrop)
- [Dark Offcanvas](#dark-offcanvas)
- [Responsive Offcanvas](#responsive-offcanvas)
- [Placement](#placement)
- [Accessibility](#accessibility)
- [CSS Variables](#css-variables)
- [Sass Variables](#sass-variables)
- [Usage: Data Attributes & JavaScript](#usage-data-attributes--javascript)
- [Options Reference](#options-reference)
- [Methods Reference](#methods-reference)
- [Events Reference](#events-reference)

---

## How It Works

Offcanvas is a **sidebar component** that slides in from the left, right, top, or bottom edge of the viewport. It is toggled via JavaScript by adding/removing the `.show` class.

Key facts:

- Triggered by buttons or anchor links using `data-bs-toggle="offcanvas"`.
- **Shares JavaScript code with modals** — they are conceptually similar but are separate plugins.
- Some Sass variables for offcanvas are **inherited from modal variables**.
- Includes a **default backdrop** when shown — clicking it dismisses the offcanvas.
- **Only one offcanvas can be open at a time.**
- **Do not use `margin` or `translate`** on `.offcanvas` — CSS animations require it to be positioned a specific way. Use it as an independent wrapping element instead.
- Animation respects `prefers-reduced-motion`.

**The two state classes:**

| Class | State |
|---|---|
| `.offcanvas` | Hidden (default) |
| `.offcanvas.show` | Visible |

---

## Offcanvas Structure

An offcanvas element has three parts:

```
.offcanvas                  ← main wrapper (placement, show/hide logic)
  ├── .offcanvas-header     ← title + close button
  └── .offcanvas-body       ← content area (padding, scrolling)
```

### Static example (visible by default via `.show`)

```html
<div class="offcanvas offcanvas-start show" tabindex="-1"
  id="offcanvas" aria-labelledby="offcanvasLabel">

  <div class="offcanvas-header">
    <h5 class="offcanvas-title" id="offcanvasLabel">Offcanvas</h5>
    <button type="button" class="btn-close"
      data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>

  <div class="offcanvas-body">
    Content for the offcanvas goes here. You can place just about
    any Bootstrap component or custom elements here.
  </div>

</div>
```

**Required attributes on `.offcanvas`:**

| Attribute | Purpose |
|---|---|
| `id` | Matched by `data-bs-target` on the trigger |
| `tabindex="-1"` | Allows programmatic focus on the panel |
| `aria-labelledby` | References the `.offcanvas-title` for screen readers |
| Placement class | Required — no default placement (see [Placement](#placement)) |

> Always include a dismiss action in `.offcanvas-header`, or provide another explicit close control.

---

## Live Demo

Use a link (`href`) or a button (`data-bs-target`) as a trigger — both require `data-bs-toggle="offcanvas"`.

```html
<!-- Trigger: link with href -->
<a class="btn btn-primary" data-bs-toggle="offcanvas"
  href="#offcanvasExample" role="button" aria-controls="offcanvasExample">
  Link with href
</a>

<!-- Trigger: button with data-bs-target -->
<button class="btn btn-primary" type="button"
  data-bs-toggle="offcanvas"
  data-bs-target="#offcanvasExample"
  aria-controls="offcanvasExample">
  Button with data-bs-target
</button>

<!-- Offcanvas panel -->
<div class="offcanvas offcanvas-start" tabindex="-1"
  id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
  <div class="offcanvas-header">
    <h5 class="offcanvas-title" id="offcanvasExampleLabel">Offcanvas</h5>
    <button type="button" class="btn-close"
      data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div class="offcanvas-body">
    <p>Some text as placeholder. In real life you can have elements like text, images, lists, etc.</p>
    <!-- Any Bootstrap component works inside offcanvas -->
    <div class="dropdown mt-3">
      <button class="btn btn-secondary dropdown-toggle" type="button"
        data-bs-toggle="dropdown">
        Dropdown button
      </button>
      <ul class="dropdown-menu">
        <li><a class="dropdown-item" href="#">Action</a></li>
        <li><a class="dropdown-item" href="#">Another action</a></li>
        <li><a class="dropdown-item" href="#">Something else here</a></li>
      </ul>
    </div>
  </div>
</div>
```

---

## Body Scrolling

By default, **`<body>` scrolling is disabled** when an offcanvas and its backdrop are visible. Enable body scrolling with `data-bs-scroll="true"`. When doing this, also set `data-bs-backdrop="false"` to remove the backdrop (otherwise the backdrop blocks scrolling interaction).

```html
<!-- Trigger -->
<button class="btn btn-primary" type="button"
  data-bs-toggle="offcanvas"
  data-bs-target="#offcanvasScrolling"
  aria-controls="offcanvasScrolling">
  Enable body scrolling
</button>

<!-- Offcanvas: scroll enabled, no backdrop -->
<div class="offcanvas offcanvas-start"
  data-bs-scroll="true"
  data-bs-backdrop="false"
  tabindex="-1"
  id="offcanvasScrolling"
  aria-labelledby="offcanvasScrollingLabel">
  <div class="offcanvas-header">
    <h5 class="offcanvas-title" id="offcanvasScrollingLabel">
      Offcanvas with body scrolling
    </h5>
    <button type="button" class="btn-close"
      data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div class="offcanvas-body">
    <p>Try scrolling the rest of the page to see this option in action.</p>
  </div>
</div>
```

---

## Body Scrolling and Backdrop

Enable both body scrolling **and** keep the visible backdrop by setting `data-bs-scroll="true"` without disabling the backdrop.

```html
<!-- Trigger -->
<button class="btn btn-primary" type="button"
  data-bs-toggle="offcanvas"
  data-bs-target="#offcanvasWithBothOptions"
  aria-controls="offcanvasWithBothOptions">
  Enable both scrolling & backdrop
</button>

<!-- Offcanvas: scroll enabled, backdrop visible (default) -->
<div class="offcanvas offcanvas-start"
  data-bs-scroll="true"
  tabindex="-1"
  id="offcanvasWithBothOptions"
  aria-labelledby="offcanvasWithBothOptionsLabel">
  <div class="offcanvas-header">
    <h5 class="offcanvas-title" id="offcanvasWithBothOptionsLabel">
      Backdrop with scrolling
    </h5>
    <button type="button" class="btn-close"
      data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div class="offcanvas-body">
    <p>Try scrolling the rest of the page to see this option in action.</p>
  </div>
</div>
```

**Scroll + backdrop behavior summary:**

| `scroll` | `backdrop` | Body scrolls? | Backdrop shown? | Click outside closes? |
|---|---|---|---|---|
| `false` (default) | `true` (default) | No | Yes | Yes |
| `true` | `false` | Yes | No | — |
| `true` | `true` (default) | Yes | Yes | Yes |
| `false` | `static` | No | Yes | No |

---

## Static Backdrop

Set `data-bs-backdrop="static"` to prevent closing the offcanvas when clicking outside it.

```html
<!-- Trigger -->
<button class="btn btn-primary" type="button"
  data-bs-toggle="offcanvas"
  data-bs-target="#staticBackdrop"
  aria-controls="staticBackdrop">
  Toggle static offcanvas
</button>

<!-- Offcanvas: static backdrop -->
<div class="offcanvas offcanvas-start"
  data-bs-backdrop="static"
  tabindex="-1"
  id="staticBackdrop"
  aria-labelledby="staticBackdropLabel">
  <div class="offcanvas-header">
    <h5 class="offcanvas-title" id="staticBackdropLabel">Offcanvas</h5>
    <button type="button" class="btn-close"
      data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div class="offcanvas-body">
    <p>I will not close if you click outside of me.</p>
  </div>
</div>
```

> When `backdrop` is `static` and the user clicks outside or presses `Esc` with `keyboard: false`, the `hidePrevented.bs.offcanvas` event fires.

---

## Dark Offcanvas

> ⚠️ **The manual dark approach (`.text-bg-dark`, `.btn-close-white`) was deprecated in Bootstrap v5.3.0.** Use `data-bs-theme="dark"` instead.

### Recommended approach (v5.3.0+)

```html
<div class="offcanvas offcanvas-start" data-bs-theme="dark" tabindex="-1"
  id="offcanvasDark" aria-labelledby="offcanvasDarkLabel">
  <div class="offcanvas-header">
    <h5 class="offcanvas-title" id="offcanvasDarkLabel">Offcanvas</h5>
    <button type="button" class="btn-close"
      data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div class="offcanvas-body">
    <p>Place offcanvas content here.</p>
  </div>
</div>
```

### Old approach (deprecated — avoid)

```html
<!-- ❌ Deprecated in v5.3.0 -->
<div class="offcanvas offcanvas-start text-bg-dark" tabindex="-1" ...>
  <div class="offcanvas-header">
    <h5 class="offcanvas-title">Offcanvas</h5>
    <!-- btn-close-white needed for visibility on dark bg -->
    <button type="button" class="btn-close btn-close-white"
      data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div class="offcanvas-body">...</div>
</div>
```

**Classes needed for dark offcanvas (old approach):**

| Element | Class to add |
|---|---|
| `.offcanvas` | `.text-bg-dark` |
| `.btn-close` | `.btn-close-white` |
| `.dropdown-menu` (if present) | `.dropdown-menu-dark` |

---

## Responsive Offcanvas

Added in **Bootstrap v5.2.0**. Replace the `.offcanvas` base class with a responsive variant to make content behave as offcanvas **below** a breakpoint and as **normal visible content above** it.

| Class | Offcanvas below... | Normal above... |
|---|---|---|
| `.offcanvas` | Always offcanvas | — |
| `.offcanvas-sm` | 576px | 576px+ |
| `.offcanvas-md` | 768px | 768px+ |
| `.offcanvas-lg` | 992px | 992px+ |
| `.offcanvas-xl` | 1200px | 1200px+ |
| `.offcanvas-xxl` | 1400px | 1400px+ |

> **Important:** When using responsive offcanvas, the close button **must** include an explicit `data-bs-target` attribute pointing to the offcanvas panel's `id`.

```html
<!-- Trigger button: only shown below lg (offcanvas visible) -->
<button class="btn btn-primary d-lg-none" type="button"
  data-bs-toggle="offcanvas"
  data-bs-target="#offcanvasResponsive"
  aria-controls="offcanvasResponsive">
  Toggle offcanvas
</button>

<!-- Info shown only on lg+ (when offcanvas is not active) -->
<div class="alert alert-info d-none d-lg-block">
  Resize your browser to show the responsive offcanvas toggle.
</div>

<!-- Responsive offcanvas: offcanvas on mobile, inline on lg+ -->
<div class="offcanvas-lg offcanvas-end" tabindex="-1"
  id="offcanvasResponsive" aria-labelledby="offcanvasResponsiveLabel">
  <div class="offcanvas-header">
    <h5 class="offcanvas-title" id="offcanvasResponsiveLabel">
      Responsive offcanvas
    </h5>
    <!-- data-bs-target required for responsive offcanvas close buttons -->
    <button type="button" class="btn-close"
      data-bs-dismiss="offcanvas"
      data-bs-target="#offcanvasResponsive"
      aria-label="Close"></button>
  </div>
  <div class="offcanvas-body">
    <p class="mb-0">This is content within an <code>.offcanvas-lg</code>.</p>
  </div>
</div>
```

---

## Placement

There is **no default placement** — you must add one of the four placement modifier classes to `.offcanvas`. Placement determines which edge the panel slides in from.

| Class | Slides in from... |
|---|---|
| `.offcanvas-start` | Left edge of the viewport |
| `.offcanvas-end` | Right edge of the viewport |
| `.offcanvas-top` | Top edge of the viewport |
| `.offcanvas-bottom` | Bottom edge of the viewport |

```html
<!-- Left (start) -->
<div class="offcanvas offcanvas-start" tabindex="-1"
  id="offcanvasLeft" aria-labelledby="offcanvasLeftLabel">
  <div class="offcanvas-header">
    <h5 class="offcanvas-title" id="offcanvasLeftLabel">Offcanvas left</h5>
    <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div class="offcanvas-body">...</div>
</div>

<!-- Right (end) -->
<div class="offcanvas offcanvas-end" tabindex="-1"
  id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
  <div class="offcanvas-header">
    <h5 class="offcanvas-title" id="offcanvasRightLabel">Offcanvas right</h5>
    <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div class="offcanvas-body">...</div>
</div>

<!-- Top -->
<div class="offcanvas offcanvas-top" tabindex="-1"
  id="offcanvasTop" aria-labelledby="offcanvasTopLabel">
  <div class="offcanvas-header">
    <h5 class="offcanvas-title" id="offcanvasTopLabel">Offcanvas top</h5>
    <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div class="offcanvas-body">...</div>
</div>

<!-- Bottom -->
<div class="offcanvas offcanvas-bottom" tabindex="-1"
  id="offcanvasBottom" aria-labelledby="offcanvasBottomLabel">
  <div class="offcanvas-header">
    <h5 class="offcanvas-title" id="offcanvasBottomLabel">Offcanvas bottom</h5>
    <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div class="offcanvas-body small">...</div>
</div>
```

---

## Accessibility

Offcanvas is conceptually a **modal dialog**, so the same accessibility rules apply:

- Add `aria-labelledby="..."` on `.offcanvas`, referencing the `id` of `.offcanvas-title`.
- **Do not** add `role="dialog"` manually — Bootstrap adds it via JavaScript automatically.
- Always include a visible, labeled close/dismiss action.

```html
<div class="offcanvas offcanvas-start" tabindex="-1"
  id="myOffcanvas"
  aria-labelledby="myOffcanvasTitle">   <!-- ← references the title's id -->
  <div class="offcanvas-header">
    <h5 class="offcanvas-title" id="myOffcanvasTitle">Panel Title</h5>
    <button type="button" class="btn-close"
      data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div class="offcanvas-body">...</div>
</div>
```

---

## CSS Variables

Added in **Bootstrap v5.2.0**. Offcanvas uses local CSS variables on `.offcanvas` for real-time customization.

Defined in `scss/_offcanvas.scss`:

```scss
--#{$prefix}offcanvas-zindex: #{$zindex-offcanvas};
--#{$prefix}offcanvas-width: #{$offcanvas-horizontal-width};
--#{$prefix}offcanvas-height: #{$offcanvas-vertical-height};
--#{$prefix}offcanvas-padding-x: #{$offcanvas-padding-x};
--#{$prefix}offcanvas-padding-y: #{$offcanvas-padding-y};
--#{$prefix}offcanvas-color: #{$offcanvas-color};
--#{$prefix}offcanvas-bg: #{$offcanvas-bg-color};
--#{$prefix}offcanvas-border-width: #{$offcanvas-border-width};
--#{$prefix}offcanvas-border-color: #{$offcanvas-border-color};
--#{$prefix}offcanvas-box-shadow: #{$offcanvas-box-shadow};
--#{$prefix}offcanvas-transition: #{transform $offcanvas-transition-duration ease-in-out};
--#{$prefix}offcanvas-title-line-height: #{$offcanvas-title-line-height};
```

### Example: Override via CSS

```css
#myOffcanvas {
  --bs-offcanvas-width: 500px;        /* wider than the 400px default */
  --bs-offcanvas-bg: #1a1a2e;         /* custom background */
  --bs-offcanvas-color: #ffffff;      /* custom text color */
}

/* Taller bottom offcanvas */
.offcanvas-bottom {
  --bs-offcanvas-height: 50vh;
}
```

---

## Sass Variables

Offcanvas inherits several values from modal variables (`scss/_variables.scss`):

```scss
$offcanvas-padding-y:               $modal-inner-padding;
$offcanvas-padding-x:               $modal-inner-padding;
$offcanvas-horizontal-width:        400px;
$offcanvas-vertical-height:         30vh;
$offcanvas-transition-duration:     .3s;
$offcanvas-border-color:            $modal-content-border-color;
$offcanvas-border-width:            $modal-content-border-width;
$offcanvas-title-line-height:       $modal-title-line-height;
$offcanvas-bg-color:                var(--#{$prefix}body-bg);
$offcanvas-color:                   var(--#{$prefix}body-color);
$offcanvas-box-shadow:              $modal-content-box-shadow-xs;
$offcanvas-backdrop-bg:             $modal-backdrop-bg;
$offcanvas-backdrop-opacity:        $modal-backdrop-opacity;
```

**Variable Reference Table:**

| Variable | Default | Description |
|---|---|---|
| `$offcanvas-horizontal-width` | `400px` | Width of left/right offcanvas panels |
| `$offcanvas-vertical-height` | `30vh` | Height of top/bottom offcanvas panels |
| `$offcanvas-transition-duration` | `.3s` | Slide-in/out animation duration |
| `$offcanvas-padding-x/y` | Inherits `$modal-inner-padding` | Inner content padding |
| `$offcanvas-bg-color` | `var(--bs-body-bg)` | Background color |
| `$offcanvas-color` | `var(--bs-body-color)` | Text color |
| `$offcanvas-border-color/width` | Inherits from modal | Border styling |
| `$offcanvas-box-shadow` | Inherits from modal | Drop shadow |
| `$offcanvas-backdrop-bg/opacity` | Inherits from modal | Backdrop color/opacity |

---

## Usage: Data Attributes & JavaScript

The offcanvas plugin toggles the `.show` class on the `.offcanvas` element and manages the backdrop and body scroll lock.

### Via Data Attributes — Toggle

```html
<!-- Trigger with data-bs-target (button) -->
<button type="button" data-bs-toggle="offcanvas" data-bs-target="#myOffcanvas"
  aria-controls="myOffcanvas">
  Open offcanvas
</button>

<!-- Trigger with href (link) -->
<a data-bs-toggle="offcanvas" href="#myOffcanvas"
  role="button" aria-controls="myOffcanvas">
  Open offcanvas
</a>

<!-- Default open: add .show to .offcanvas -->
<div class="offcanvas offcanvas-start show" id="myOffcanvas" ...>
```

### Via Data Attributes — Dismiss

```html
<!-- Dismiss button INSIDE the offcanvas -->
<button type="button" class="btn-close"
  data-bs-dismiss="offcanvas" aria-label="Close"></button>

<!-- Dismiss button OUTSIDE the offcanvas (requires data-bs-target) -->
<button type="button" class="btn-close"
  data-bs-dismiss="offcanvas"
  data-bs-target="#my-offcanvas"
  aria-label="Close"></button>
```

> **Note:** Dismissing from outside the offcanvas does not conform to the ARIA dialog pattern. Use with caution.

### Via JavaScript

```javascript
// Initialize all offcanvas elements
const offcanvasElementList = document.querySelectorAll('.offcanvas')
const offcanvasList = [...offcanvasElementList].map(offcanvasEl =>
  new bootstrap.Offcanvas(offcanvasEl)
)

// Initialize a single instance
const bsOffcanvas = new bootstrap.Offcanvas('#myOffcanvas')

// Initialize with options
const bsOffcanvas = new bootstrap.Offcanvas('#myOffcanvas', {
  backdrop: 'static',
  scroll: true,
  keyboard: false
})
```

---

## Options Reference

Options can be passed via data attributes (kebab-case) or JavaScript (camelCase).

| Name | Type | Default | Description |
|---|---|---|---|
| `backdrop` | boolean / `'static'` | `true` | `true` = show dismissible backdrop. `false` = no backdrop. `'static'` = backdrop shown but clicking it does **not** close the offcanvas. |
| `keyboard` | boolean | `true` | Closes the offcanvas when the `Esc` key is pressed. |
| `scroll` | boolean | `false` | Allows `<body>` to scroll while the offcanvas is open. Default is `false` (body scroll is locked). |

**Common combinations:**

```html
<!-- Default: backdrop, no scroll, keyboard closes -->
<div class="offcanvas offcanvas-start" ...>

<!-- Scrollable body, no backdrop -->
<div class="offcanvas offcanvas-start" data-bs-scroll="true" data-bs-backdrop="false" ...>

<!-- Scrollable body WITH backdrop -->
<div class="offcanvas offcanvas-start" data-bs-scroll="true" ...>

<!-- Static backdrop (won't close on outside click) -->
<div class="offcanvas offcanvas-start" data-bs-backdrop="static" ...>

<!-- Static backdrop + keyboard disabled (fully locked) -->
<div class="offcanvas offcanvas-start"
  data-bs-backdrop="static" data-bs-keyboard="false" ...>
```

---

## Methods Reference

> All API methods are **asynchronous** — they return as soon as the transition starts, not when it ends. Method calls on a transitioning component are ignored.

| Method | Description |
|---|---|
| `show` | Shows the offcanvas panel. Returns before the panel is fully visible (before `shown.bs.offcanvas` fires). |
| `hide` | Hides the offcanvas panel. Returns before the panel is fully hidden (before `hidden.bs.offcanvas` fires). |
| `toggle` | Toggles shown/hidden. Returns before the transition completes. |
| `dispose` | Destroys the offcanvas instance and removes stored DOM data. |
| `getInstance(element)` | Static — returns the offcanvas instance for a DOM element. |
| `getOrCreateInstance(element)` | Static — returns an existing instance or creates a new one. |

```javascript
const offcanvasEl = document.getElementById('myOffcanvas')
const offcanvas = bootstrap.Offcanvas.getOrCreateInstance(offcanvasEl)

offcanvas.show()    // open
offcanvas.hide()    // close
offcanvas.toggle()  // toggle open/closed
offcanvas.dispose() // destroy instance
```

---

## Events Reference

All offcanvas events fire on the **`.offcanvas` element** itself.

| Event | Description | Preventable? |
|---|---|---|
| `show.bs.offcanvas` | Fires immediately when `show` is called (before transition). | No |
| `shown.bs.offcanvas` | Fires after the offcanvas is fully visible (CSS transitions complete). | No |
| `hide.bs.offcanvas` | Fires immediately when `hide` is called (before transition). | No |
| `hidden.bs.offcanvas` | Fires after the offcanvas is fully hidden (CSS transitions complete). | No |
| `hidePrevented.bs.offcanvas` | Fires when `backdrop="static"` blocks an outside click, or when `Esc` is pressed with `keyboard: false`. | No |

```javascript
const myOffcanvas = document.getElementById('myOffcanvas')

// Fires when fully visible
myOffcanvas.addEventListener('shown.bs.offcanvas', event => {
  console.log('Offcanvas is now open')
})

// Fires when fully hidden
myOffcanvas.addEventListener('hidden.bs.offcanvas', event => {
  console.log('Offcanvas is now closed')
})

// Fires immediately when show starts
myOffcanvas.addEventListener('show.bs.offcanvas', event => {
  console.log('Offcanvas is about to open')
})

// Fires immediately when hide starts
myOffcanvas.addEventListener('hide.bs.offcanvas', event => {
  console.log('Offcanvas is about to close')
})

// Fires when static backdrop blocks dismissal
myOffcanvas.addEventListener('hidePrevented.bs.offcanvas', event => {
  console.log('Dismiss attempt blocked by static backdrop')
})
```

---

## Quick Reference

```html
<!-- Basic offcanvas (left) -->
<button type="button" class="btn btn-primary"
  data-bs-toggle="offcanvas" data-bs-target="#myOffcanvas"
  aria-controls="myOffcanvas">Open</button>

<div class="offcanvas offcanvas-start" tabindex="-1"
  id="myOffcanvas" aria-labelledby="myOffcanvasLabel">
  <div class="offcanvas-header">
    <h5 class="offcanvas-title" id="myOffcanvasLabel">Title</h5>
    <button type="button" class="btn-close"
      data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div class="offcanvas-body">Content here.</div>
</div>

<!-- Placement variants -->
<div class="offcanvas offcanvas-start">...</div>   <!-- left  -->
<div class="offcanvas offcanvas-end">...</div>     <!-- right -->
<div class="offcanvas offcanvas-top">...</div>     <!-- top   -->
<div class="offcanvas offcanvas-bottom">...</div>  <!-- bottom -->

<!-- Visible by default -->
<div class="offcanvas offcanvas-start show">...</div>

<!-- Body scroll, no backdrop -->
<div class="offcanvas offcanvas-start"
  data-bs-scroll="true" data-bs-backdrop="false">...</div>

<!-- Static backdrop (won't close on outside click) -->
<div class="offcanvas offcanvas-start"
  data-bs-backdrop="static">...</div>

<!-- Responsive: offcanvas below lg, normal above lg -->
<div class="offcanvas-lg offcanvas-end" tabindex="-1" id="resp">
  <div class="offcanvas-header">
    <h5 class="offcanvas-title">Title</h5>
    <!-- data-bs-target required for responsive close buttons -->
    <button type="button" class="btn-close"
      data-bs-dismiss="offcanvas"
      data-bs-target="#resp" aria-label="Close"></button>
  </div>
  <div class="offcanvas-body">...</div>
</div>

<!-- Dark theme -->
<div class="offcanvas offcanvas-start" data-bs-theme="dark">...</div>
```

---