# Bootstrap Accordion

> Vertically collapsing sections powered by the **Collapse JavaScript plugin**.

---

## How It Works

The Bootstrap Accordion is built on top of the **Collapse plugin** — it's a set of collapsible panels wired together with parent-group logic. Clicking a header toggles that item open while closing any other open item (unless configured otherwise).

The collapse animation respects the user's OS-level `prefers-reduced-motion` preference, improving accessibility automatically.

> **Key Insight:** The Accordion adds no special JavaScript of its own. "Only one panel open" behavior is achieved through the `data-bs-parent` attribute.

---

## DOM Structure

Every accordion follows the same 4-level nesting pattern:

```
div.accordion                        ← wrapper, holds id for parent reference
  div.accordion-item                 ← one panel
    h2.accordion-header              ← semantic heading
      button.accordion-button        ← the clickable trigger
    div.accordion-collapse.collapse  ← collapsible panel (data-bs-parent here)
      div.accordion-body             ← your content lives here
```

---

## Basic Example

Three items where only one can be open at a time. Item #1 starts open.

```html
<div class="accordion" id="accordionExample">

  <!-- Item 1 — starts OPEN -->
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button
        class="accordion-button"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#collapseOne"
        aria-expanded="true"
        aria-controls="collapseOne"
      >
        Accordion Item #1
      </button>
    </h2>
    <div
      id="collapseOne"
      class="accordion-collapse collapse show"
      data-bs-parent="#accordionExample"
    >
      <div class="accordion-body">
        Content for item one...
      </div>
    </div>
  </div>

  <!-- Item 2 — starts CLOSED -->
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button
        class="accordion-button collapsed"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#collapseTwo"
        aria-expanded="false"
        aria-controls="collapseTwo"
      >
        Accordion Item #2
      </button>
    </h2>
    <div
      id="collapseTwo"
      class="accordion-collapse collapse"
      data-bs-parent="#accordionExample"
    >
      <div class="accordion-body">
        Content for item two...
      </div>
    </div>
  </div>

</div>
```

**To make an item open by default:**
- Add `.show` to its `.accordion-collapse`
- Remove `.collapsed` from its button
- Set `aria-expanded="true"` on the button

---

## Variants

### 1 — Flush Style

Add `.accordion-flush` to the outer wrapper to remove borders and rounded corners, rendering it edge-to-edge with its parent container.

```html
<div class="accordion accordion-flush" id="accordionFlushExample">
  <!-- accordion items here -->
</div>
```

### 2 — Always Open (Multi-expand)

Omit `data-bs-parent` from every `.accordion-collapse`. Without it, panels are independent — opening one will **not** close others.

```html
<!-- NO data-bs-parent = items stay open independently -->
<div
  id="panelsStayOpen-collapseOne"
  class="accordion-collapse collapse show"
>
  <div class="accordion-body">Always visible until manually closed.</div>
</div>
```

| Mode | Behavior |
|---|---|
| **Standard** (with `data-bs-parent`) | Only one panel open at a time |
| **Always Open** (without `data-bs-parent`) | Any combination of panels can be open |

---

## Collapse Classes Reference

The Collapse plugin manages these three classes on the `.accordion-collapse` element automatically:

| Class | Meaning |
|---|---|
| `.collapse` | Content is hidden (default closed state) |
| `.collapse.show` | Content is visible (default open state) |
| `.collapsing` | Transitional — added at animation start, removed when done |

---

## JavaScript Usage

### Via Data Attributes (Recommended)

No JS needed. Data attributes handle all the wiring:

- `data-bs-toggle="collapse"` on the button activates the plugin
- `data-bs-target="#id"` points to the collapsible panel
- `data-bs-parent="#parentId"` on the panel enables close-others (accordion) behavior

### Via JavaScript

Enable manually — useful when building accordion HTML dynamically:

```js
// Select all collapse elements inside your accordion
const collapseEls = document.querySelectorAll('#myAccordion .collapse')

// Instantiate each one
const collapseList = [...collapseEls].map(el =>
  new bootstrap.Collapse(el)
)

// Or create a single instance with options
const bsCollapse = new bootstrap.Collapse('#myCollapse', {
  toggle: false  // don't toggle on init
})
```

---

## Options

Options can be passed via **data attributes** or **JavaScript**. Convert camelCase to kebab-case for data attributes (e.g., `data-bs-parent`).

| Name | Type | Default | Description |
|---|---|---|---|
| `parent` | selector / DOM element | `null` | When set, all other collapsible siblings under this parent close when this item opens. Set on the target collapse element. |
| `toggle` | boolean | `true` | Whether to toggle the element immediately on instantiation. |

> **Bootstrap 5.2+:** You can also pass options as a JSON string via `data-bs-config='{"toggle": false}'`. Individual `data-bs-*` attributes override values in `data-bs-config`.

---

## Methods

All API methods are **asynchronous** and start a transition. They return before the transition ends. Calling a method on a transitioning component is ignored.

| Method | Description |
|---|---|
| `.show()` | Shows the collapsible panel. Returns before it's fully visible. |
| `.hide()` | Hides the collapsible panel. Returns before it's fully hidden. |
| `.toggle()` | Toggles between shown/hidden. Returns before animation completes. |
| `.dispose()` | Destroys the instance and removes stored data from the DOM element. |
| `.getInstance(el)` | Static. Returns an existing Collapse instance for a given element. |
| `.getOrCreateInstance(el)` | Static. Returns existing instance or creates a new one. |

```js
// Get an existing instance
const myCollapse = bootstrap.Collapse.getInstance(
  document.querySelector('#collapseOne')
)

// Programmatically control it
myCollapse.show()
myCollapse.hide()
myCollapse.toggle()

// Safe create-or-get (won't throw if not yet initialized)
const safeInstance = bootstrap.Collapse.getOrCreateInstance('#collapseOne')
```

---

## Events

Listen for events on the `.accordion-collapse` element:

| Event | When It Fires |
|---|---|
| `show.bs.collapse` | Immediately when `.show()` is called — *before* animation starts |
| `shown.bs.collapse` | After the panel is fully visible — *after* CSS transition completes |
| `hide.bs.collapse` | Immediately when `.hide()` is called — *before* animation starts |
| `hidden.bs.collapse` | After the panel is fully hidden — *after* CSS transition completes |

```js
const myCollapsible = document.getElementById('myCollapsible')

// Fire when fully hidden
myCollapsible.addEventListener('hidden.bs.collapse', event => {
  console.log('Panel is now hidden!')
})

// Fire when fully shown
myCollapsible.addEventListener('shown.bs.collapse', event => {
  console.log('Panel is now open!')
})
```

---

## CSS Customization

### CSS Variables (Bootstrap 5.2+)

Accordions expose scoped CSS variables on `.accordion`, allowing real-time customization without recompiling Sass:

```css
.accordion {
  --bs-accordion-color: #212529;
  --bs-accordion-bg: #fff;
  --bs-accordion-border-color: rgba(0,0,0,.125);
  --bs-accordion-border-radius: 0.375rem;
  --bs-accordion-btn-padding-x: 1.25rem;
  --bs-accordion-btn-padding-y: 1rem;
  --bs-accordion-btn-color: var(--bs-body-color);
  --bs-accordion-btn-icon-width: 1.25rem;
  --bs-accordion-active-color: var(--bs-primary-text-emphasis);
  --bs-accordion-active-bg: var(--bs-primary-bg-subtle);
  --bs-accordion-body-padding-x: 1.25rem;
  --bs-accordion-body-padding-y: 1rem;
}
```

Override them per-accordion — no Sass compile step needed:

```css
#myAccordion {
  --bs-accordion-active-bg: #ffe8cc;
  --bs-accordion-active-color: #8a3800;
  --bs-accordion-btn-icon-width: 1.5rem;
  --bs-accordion-border-radius: 0.75rem;
}
```

### Key Sass Variables

```scss
// Spacing
$accordion-padding-y: 1rem;
$accordion-padding-x: 1.25rem;

// Active state (open panel header)
$accordion-button-active-bg:    var(--bs-primary-bg-subtle);
$accordion-button-active-color: var(--bs-primary-text-emphasis);

// Chevron icon
$accordion-icon-width:      1.25rem;
$accordion-icon-transform:  rotate(-180deg);
$accordion-icon-transition: transform .2s ease-in-out;
```

---

## Accessibility

- Use a semantic heading tag (`<h2>`, `<h3>`, etc.) wrapping `.accordion-header` — choose the level appropriate to your page hierarchy.
- Set `aria-expanded="true"` on open buttons and `"false"` on closed ones.
- Match `aria-controls` on the button to the `id` of its controlled panel.
- Bootstrap handles `prefers-reduced-motion` automatically.
- The `.accordion-button` **must** be a real `<button>` element for keyboard accessibility.

---

## Quick Reference Cheatsheet

### Classes

| Class | Purpose |
|---|---|
| `.accordion` | Outer wrapper |
| `.accordion-flush` | Variant: no borders/radius (edge-to-edge) |
| `.accordion-item` | One panel unit |
| `.accordion-header` | Semantic heading wrapper |
| `.accordion-button` | The clickable toggle button |
| `.accordion-button.collapsed` | Closed state (auto-managed by plugin) |
| `.accordion-collapse` | The collapsible body wrapper |
| `.accordion-collapse.collapse` | Hidden state |
| `.accordion-collapse.collapse.show` | Visible/open state |
| `.accordion-body` | Inner content area |

### Data Attributes

| Attribute | Placed On | Purpose |
|---|---|---|
| `data-bs-toggle="collapse"` | Button | Activates the Collapse plugin |
| `data-bs-target="#id"` | Button | Targets the collapsible panel |
| `data-bs-parent="#accordionId"` | Panel | Enables close-others behavior |
| `aria-expanded="true\|false"` | Button | Accessibility state |
| `aria-controls="collapseId"` | Button | Accessibility link to panel |

### Events

| Event | Timing |
|---|---|
| `show.bs.collapse` | Before opening animation starts |
| `shown.bs.collapse` | After opening animation ends |
| `hide.bs.collapse` | Before closing animation starts |
| `hidden.bs.collapse` | After closing animation ends |

---
