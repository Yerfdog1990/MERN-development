# Bootstrap Collapse 

Toggle the visibility of content across your project with a few classes and JavaScript plugins.

## Table of Contents
- [How It Works](#how-it-works)
- [Example](#example)
- [Horizontal Collapse](#horizontal-collapse)
- [Multiple Toggles and Targets](#multiple-toggles-and-targets)
- [Accessibility](#accessibility)
- [CSS Classes](#css-classes)
- [Sass Variables](#sass-variables)
- [Usage: Data Attributes & JavaScript](#usage-data-attributes--javascript)
- [Options Reference](#options-reference)
- [Methods Reference](#methods-reference)
- [Events Reference](#events-reference)

---

## How It Works

The collapse plugin shows and hides content by animating the **height** of an element from its current value down to `0`.

Key points:
- **Buttons or anchors** act as triggers mapped to the collapsible elements they control.
- You **cannot use `padding`** on a `.collapse` element directly — the CSS animation won't work correctly. Instead, wrap the padded content in an inner element and apply `.collapse` to an outer wrapper.
- The animation respects the `prefers-reduced-motion` media query.

**The three state classes:**

| Class | Description |
|---|---|
| `.collapse` | Hides content (default hidden state) |
| `.collapsing` | Applied during the transition animation |
| `.collapse.show` | Shows content (visible state) |

---

## Example

Use a `<button>` with `data-bs-target`, or an `<a>` with `href`, to trigger a collapse. Both require `data-bs-toggle="collapse"`.

```html
<p class="d-inline-flex gap-1">
  <!-- Option 1: <a> link with href -->
  <a class="btn btn-primary" data-bs-toggle="collapse" href="#collapseExample"
    role="button" aria-expanded="false" aria-controls="collapseExample">
    Link with href
  </a>

  <!-- Option 2: <button> with data-bs-target (recommended) -->
  <button class="btn btn-primary" type="button" data-bs-toggle="collapse"
    data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
    Button with data-bs-target
  </button>
</p>

<div class="collapse" id="collapseExample">
  <div class="card card-body">
    Some placeholder content for the collapse component. This panel is hidden by default
    but revealed when the user activates the relevant trigger.
  </div>
</div>
```

**Rules:**
- `<button>` with `data-bs-target` is **recommended** for semantic correctness.
- `<a>` with `href` works too but requires `role="button"` for accessibility.
- Always add `data-bs-toggle="collapse"` to the trigger element.
- The collapsible target must have the `.collapse` class and a matching `id`.

---

## Horizontal Collapse

By default, collapse animates **height**. Add `.collapse-horizontal` to animate **width** instead.

```html
<p>
  <button class="btn btn-primary" type="button" data-bs-toggle="collapse"
    data-bs-target="#collapseWidthExample" aria-expanded="false"
    aria-controls="collapseWidthExample">
    Toggle width collapse
  </button>
</p>

<div style="min-height: 120px;">
  <div class="collapse collapse-horizontal" id="collapseWidthExample">
    <div class="card card-body" style="width: 300px;">
      This is some placeholder content for a horizontal collapse.
      It's hidden by default and shown when triggered.
    </div>
  </div>
</div>
```

**Key requirements for horizontal collapse:**
- Add `.collapse-horizontal` alongside `.collapse` on the collapsible wrapper.
- Set a **fixed `width`** on the **immediate child element** — this is what gets transitioned.
- The `min-height` on the outer wrapper in the example above is only to prevent layout repaints in docs — it is **not required** in practice.

---

## Multiple Toggles and Targets

### One trigger → multiple targets

A single trigger can expand/collapse multiple elements by targeting a **shared CSS class** in `data-bs-target`.

### Multiple triggers → one target

Multiple triggers can all control the **same collapsible element** by pointing to the same `id`.

```html
<p class="d-inline-flex gap-1">
  <!-- Toggles only the first element -->
  <a class="btn btn-primary" data-bs-toggle="collapse" href="#multiCollapseExample1"
    role="button" aria-expanded="false" aria-controls="multiCollapseExample1">
    Toggle first element
  </a>

  <!-- Toggles only the second element -->
  <button class="btn btn-primary" type="button" data-bs-toggle="collapse"
    data-bs-target="#multiCollapseExample2" aria-expanded="false"
    aria-controls="multiCollapseExample2">
    Toggle second element
  </button>

  <!-- Toggles BOTH elements using a shared class selector -->
  <button class="btn btn-primary" type="button" data-bs-toggle="collapse"
    data-bs-target=".multi-collapse" aria-expanded="false"
    aria-controls="multiCollapseExample1 multiCollapseExample2">
    Toggle both elements
  </button>
</p>

<div class="row">
  <div class="col">
    <div class="collapse multi-collapse" id="multiCollapseExample1">
      <div class="card card-body">
        Content for the first collapse panel.
      </div>
    </div>
  </div>
  <div class="col">
    <div class="collapse multi-collapse" id="multiCollapseExample2">
      <div class="card card-body">
        Content for the second collapse panel.
      </div>
    </div>
  </div>
</div>
```

**How targeting works:**

| Trigger `data-bs-target` value | Effect |
|---|---|
| `#specificId` | Controls a single element by ID |
| `.sharedClass` | Controls all elements with that class |
| Multiple IDs in `aria-controls` | Documents which elements are controlled (for accessibility) |

---

## Accessibility

Proper ARIA attributes are essential for screen readers and assistive technologies.

### `aria-expanded`

Always add `aria-expanded` to the trigger element. Bootstrap will automatically toggle it as the collapsible opens and closes.

| State | Value |
|---|---|
| Collapsed (default) | `aria-expanded="false"` |
| Expanded (open by default) | `aria-expanded="true"` |

### `aria-controls`

If a trigger controls a **single** collapsible element, add `aria-controls` containing the target's `id`. Modern screen readers use this to provide direct navigation shortcuts to the collapsible element.

```html
<!-- Single target: use aria-controls with the target id -->
<button data-bs-toggle="collapse" data-bs-target="#myContent"
  aria-expanded="false" aria-controls="myContent">
  Toggle
</button>

<!-- Multiple targets: space-separate the ids -->
<button data-bs-toggle="collapse" data-bs-target=".multi-collapse"
  aria-expanded="false" aria-controls="panelOne panelTwo">
  Toggle All
</button>
```

### `role="button"`

If the trigger element is **not** a `<button>` (e.g., `<a>` or `<div>`), add `role="button"`.

```html
<a class="btn btn-primary" data-bs-toggle="collapse" href="#collapseExample"
  role="button" aria-expanded="false" aria-controls="collapseExample">
  Toggle
</a>
```

> **Note:** Bootstrap's collapse implementation does **not** include the optional keyboard interaction patterns from the ARIA Authoring Practices Guide accordion pattern. These must be implemented manually with custom JavaScript if needed.

---

## CSS Classes

Defined in `scss/_transitions.scss` (shared with the accordion component):

```scss
.collapse {
  &:not(.show) {
    display: none;
  }
}

.collapsing {
  height: 0;
  overflow: hidden;
  @include transition($transition-collapse);

  &.collapse-horizontal {
    width: 0;
    height: auto;
    @include transition($transition-collapse-width);
  }
}
```

**Summary of class behavior:**

| Class | When applied | Effect |
|---|---|---|
| `.collapse` | Always on the target element | Hidden by default (`display: none`) |
| `.collapse.show` | When content is visible | Removes `display: none` |
| `.collapsing` | During the open/close animation | Animates height (or width) to/from 0 |
| `.collapse-horizontal` | On the target element | Switches animation axis from height → width |

---

## Sass Variables

Defined in `scss/_variables.scss`:

```scss
$transition-collapse:       height .35s ease;
$transition-collapse-width: width .35s ease;
```

| Variable | Default | Description |
|---|---|---|
| `$transition-collapse` | `height .35s ease` | Vertical collapse transition |
| `$transition-collapse-width` | `width .35s ease` | Horizontal collapse transition |

To customize the animation speed or easing, override these before compiling:

```scss
// Example: slower, smoother collapse
$transition-collapse: height .6s cubic-bezier(0.4, 0, 0.2, 1);
```

---

## Usage: Data Attributes & JavaScript

### Via Data Attributes

Add `data-bs-toggle="collapse"` and `data-bs-target` to any trigger element — no JavaScript required.

```html
<!-- Hidden by default -->
<button data-bs-toggle="collapse" data-bs-target="#myPanel">Toggle</button>
<div class="collapse" id="myPanel">Hidden content</div>

<!-- Open by default — add .show -->
<button data-bs-toggle="collapse" data-bs-target="#myPanel">Toggle</button>
<div class="collapse show" id="myPanel">Visible content</div>
```

**Accordion-like behavior:** Add `data-bs-parent="#parentSelector"` to close sibling collapsibles when one opens.

```html
<div id="accordionParent">
  <div class="collapse" data-bs-parent="#accordionParent" id="item1">...</div>
  <div class="collapse" data-bs-parent="#accordionParent" id="item2">...</div>
</div>
```

### Via JavaScript

Initialize all collapse elements manually:

```javascript
const collapseElementList = document.querySelectorAll('.collapse')
const collapseList = [...collapseElementList].map(collapseEl =>
  new bootstrap.Collapse(collapseEl)
)
```

Initialize a single instance with options:

```javascript
const bsCollapse = new bootstrap.Collapse('#myCollapse', {
  toggle: false  // don't toggle on initialization
})
```

> **As of Bootstrap 5.2.0**, you can pass config as a JSON string via `data-bs-config`:
> ```html
> <div class="collapse" data-bs-config='{"toggle": false}' id="myCollapse">...</div>
> ```
> Individual `data-bs-*` attributes take priority over `data-bs-config` values.

---

## Options Reference

Options can be passed via data attributes (kebab-case) or JavaScript (camelCase).

| Name | Type | Default | Description |
|---|---|---|---|
| `parent` | selector / DOM element | `null` | When set, all other collapsibles under this parent will close when this one opens — creating accordion-like behavior. Set on the **target collapsible element**, not the trigger. |
| `toggle` | boolean | `true` | If `true`, toggles the element on initialization. Set to `false` to initialize without triggering a toggle. |

---

## Methods Reference

> All API methods are **asynchronous** — they return to the caller as soon as the transition starts, not when it ends. Method calls on a transitioning component are ignored.

| Method | Description |
|---|---|
| `show` | Shows the collapsible element. Returns before the element is fully visible (i.e., before `shown.bs.collapse` fires). |
| `hide` | Hides the collapsible element. Returns before the element is fully hidden (i.e., before `hidden.bs.collapse` fires). |
| `toggle` | Toggles visibility. Returns before the transition completes. |
| `dispose` | Destroys the collapse instance and removes stored DOM data. |
| `getInstance(element)` | Static — returns the collapse instance associated with a DOM element. |
| `getOrCreateInstance(element)` | Static — returns an existing instance or creates a new one. |

```javascript
const myCollapseEl = document.getElementById('myCollapse')
const collapse = bootstrap.Collapse.getInstance(myCollapseEl)

collapse.show()    // expand
collapse.hide()    // collapse
collapse.toggle()  // toggle between states
collapse.dispose() // destroy instance
```

---

## Events Reference

Four events are available, split into "before" and "after" pairs for both showing and hiding.

| Event type | Fires... |
|---|---|
| `show.bs.collapse` | Immediately when `show` is called (before transition starts) |
| `shown.bs.collapse` | After the element is fully visible (CSS transition complete) |
| `hide.bs.collapse` | Immediately when `hide` is called (before transition starts) |
| `hidden.bs.collapse` | After the element is fully hidden (CSS transition complete) |

```javascript
const myCollapsible = document.getElementById('myCollapsible')

// Before hiding starts
myCollapsible.addEventListener('hide.bs.collapse', event => {
  console.log('Collapse is about to hide')
})

// After fully hidden
myCollapsible.addEventListener('hidden.bs.collapse', event => {
  console.log('Collapse is now hidden')
})

// Before showing starts
myCollapsible.addEventListener('show.bs.collapse', event => {
  console.log('Collapse is about to show')
})

// After fully visible
myCollapsible.addEventListener('shown.bs.collapse', event => {
  console.log('Collapse is now visible')
})
```

---

## Quick Reference

```html
<!-- Basic collapse -->
<button class="btn btn-primary" type="button"
  data-bs-toggle="collapse" data-bs-target="#myContent"
  aria-expanded="false" aria-controls="myContent">
  Toggle
</button>
<div class="collapse" id="myContent">
  <div class="card card-body">Hidden content here.</div>
</div>

<!-- Open by default -->
<div class="collapse show" id="myContent">...</div>

<!-- Horizontal collapse -->
<div class="collapse collapse-horizontal" id="myContent">
  <div style="width: 300px;">Fixed-width content</div>
</div>

<!-- Multiple targets via shared class -->
<button data-bs-toggle="collapse" data-bs-target=".multi-collapse">Toggle All</button>
<div class="collapse multi-collapse" id="panel1">...</div>
<div class="collapse multi-collapse" id="panel2">...</div>
```
---