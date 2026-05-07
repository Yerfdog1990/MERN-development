# Bootstrap List Group 

A flexible and powerful component for displaying a series of content. Modify and extend to support just about any content within.

## Table of Contents
- [Basic Example](#basic-example)
- [Active Items](#active-items)
- [Links and Buttons](#links-and-buttons)
- [Flush](#flush)
- [Numbered](#numbered)
- [Horizontal](#horizontal)
- [Variants](#variants)
- [With Badges](#with-badges)
- [Custom Content](#custom-content)
- [Checkboxes and Radios](#checkboxes-and-radios)
- [CSS Variables](#css-variables)
- [Sass Variables](#sass-variables)
- [Sass Mixins](#sass-mixins)
- [Sass Loops](#sass-loops)
- [JavaScript Behavior](#javascript-behavior)
- [Using Data Attributes](#using-data-attributes)
- [Via JavaScript](#via-javascript)
- [Fade Effect](#fade-effect)
- [Methods Reference](#methods-reference)
- [Events Reference](#events-reference)

---

## Basic Example

The simplest list group — an unordered list with `.list-group` on the `<ul>` and `.list-group-item` on each `<li>`.

```html
<ul class="list-group">
  <li class="list-group-item">An item</li>
  <li class="list-group-item">A second item</li>
  <li class="list-group-item">A third item</li>
  <li class="list-group-item">A fourth item</li>
  <li class="list-group-item">And a fifth one</li>
</ul>
```

---

## Active Items

Add `.active` to a `.list-group-item` to highlight the current selection. Always pair it with `aria-current="true"` for accessibility.

```html
<ul class="list-group">
  <li class="list-group-item active" aria-current="true">An active item</li>
  <li class="list-group-item">A second item</li>
  <li class="list-group-item">A third item</li>
  <li class="list-group-item">A fourth item</li>
  <li class="list-group-item">And a fifth one</li>
</ul>
```

---

## Links and Buttons

Use `<a>` or `<button>` elements with `.list-group-item-action` to create **interactive** list group items that have hover, active, and disabled states.

> **Why a separate class?** `.list-group-item-action` keeps hover/tap affordance off non-interactive elements (like `<li>` or `<div>`). Do **not** use `.btn` classes here.

### With `<a>` elements

```html
<div class="list-group">
  <a href="#" class="list-group-item list-group-item-action active" aria-current="true">
    The current link item
  </a>
  <a href="#" class="list-group-item list-group-item-action">A second link item</a>
  <a href="#" class="list-group-item list-group-item-action">A third link item</a>
  <a href="#" class="list-group-item list-group-item-action">A fourth link item</a>
  <!-- Disabled: use .disabled + aria-disabled="true" for <a> elements -->
  <a href="#" class="list-group-item list-group-item-action disabled" aria-disabled="true">
    A disabled link item
  </a>
</div>
```

### With `<button>` elements

```html
<div class="list-group">
  <button type="button" class="list-group-item list-group-item-action active" aria-current="true">
    The current button
  </button>
  <button type="button" class="list-group-item list-group-item-action">A second button item</button>
  <button type="button" class="list-group-item list-group-item-action">A third button item</button>
  <button type="button" class="list-group-item list-group-item-action">A fourth button item</button>
  <!-- Disabled: <button> supports the native disabled attribute -->
  <button type="button" class="list-group-item list-group-item-action" disabled>
    A disabled button item
  </button>
</div>
```

**Disabled state comparison:**

| Element | How to disable |
|---|---|
| `<a>` | `.disabled` class + `aria-disabled="true"` (no native disabled attribute) |
| `<button>` | Native `disabled` attribute (preferred), or `.disabled` class |

---

## Flush

Add `.list-group-flush` to remove outer borders and rounded corners so items render **edge-to-edge** — ideal for use inside cards or other containers.

```html
<ul class="list-group list-group-flush">
  <li class="list-group-item">An item</li>
  <li class="list-group-item">A second item</li>
  <li class="list-group-item">A third item</li>
  <li class="list-group-item">A fourth item</li>
  <li class="list-group-item">And a fifth one</li>
</ul>
```

> **Note:** Horizontal list groups cannot be combined with `.list-group-flush`.

---

## Numbered

Add `.list-group-numbered` (optionally on an `<ol>`) to generate CSS-based counters. Numbers are produced via `counter-reset` on the `<ol>` and `counter-increment` + `::before` pseudo-element on each `<li>` — giving more control over placement and styling than the browser's default `<ol>` numbering.

### Basic numbered list

```html
<ol class="list-group list-group-numbered">
  <li class="list-group-item">A list item</li>
  <li class="list-group-item">A list item</li>
  <li class="list-group-item">A list item</li>
</ol>
```

### Numbered with rich content and badges

```html
<ol class="list-group list-group-numbered">
  <li class="list-group-item d-flex justify-content-between align-items-start">
    <div class="ms-2 me-auto">
      <div class="fw-bold">Subheading</div>
      Content for list item
    </div>
    <span class="badge text-bg-primary rounded-pill">14</span>
  </li>
  <li class="list-group-item d-flex justify-content-between align-items-start">
    <div class="ms-2 me-auto">
      <div class="fw-bold">Subheading</div>
      Content for list item
    </div>
    <span class="badge text-bg-primary rounded-pill">14</span>
  </li>
  <li class="list-group-item d-flex justify-content-between align-items-start">
    <div class="ms-2 me-auto">
      <div class="fw-bold">Subheading</div>
      Content for list item
    </div>
    <span class="badge text-bg-primary rounded-pill">14</span>
  </li>
</ol>
```

---

## Horizontal

Add `.list-group-horizontal` to lay items out side by side instead of stacked. Use responsive variants to go horizontal only at a specific breakpoint and above.

> **Tip:** Add `.flex-fill` to each item for equal-width horizontal items.

| Class | Effect |
|---|---|
| `.list-group-horizontal` | Always horizontal |
| `.list-group-horizontal-sm` | Horizontal from `sm` (576px) and up |
| `.list-group-horizontal-md` | Horizontal from `md` (768px) and up |
| `.list-group-horizontal-lg` | Horizontal from `lg` (992px) and up |
| `.list-group-horizontal-xl` | Horizontal from `xl` (1200px) and up |
| `.list-group-horizontal-xxl` | Horizontal from `xxl` (1400px) and up |

```html
<!-- Always horizontal -->
<ul class="list-group list-group-horizontal">
  <li class="list-group-item">An item</li>
  <li class="list-group-item">A second item</li>
  <li class="list-group-item">A third item</li>
</ul>

<!-- Horizontal at md and up -->
<ul class="list-group list-group-horizontal-md">
  <li class="list-group-item">An item</li>
  <li class="list-group-item">A second item</li>
  <li class="list-group-item">A third item</li>
</ul>

<!-- Equal-width horizontal items -->
<ul class="list-group list-group-horizontal">
  <li class="list-group-item flex-fill">An item</li>
  <li class="list-group-item flex-fill">A second item</li>
  <li class="list-group-item flex-fill">A third item</li>
</ul>
```

---

## Variants

Use contextual modifier classes to apply a themed background and text color to individual items.

> ⚠️ **`list-group-item-variant()` Sass mixin deprecated in v5.3.0.** Variants are now generated via a Sass loop that overrides CSS variables.

```html
<ul class="list-group">
  <li class="list-group-item">A simple default list group item</li>
  <li class="list-group-item list-group-item-primary">A simple primary list group item</li>
  <li class="list-group-item list-group-item-secondary">A simple secondary list group item</li>
  <li class="list-group-item list-group-item-success">A simple success list group item</li>
  <li class="list-group-item list-group-item-danger">A simple danger list group item</li>
  <li class="list-group-item list-group-item-warning">A simple warning list group item</li>
  <li class="list-group-item list-group-item-info">A simple info list group item</li>
  <li class="list-group-item list-group-item-light">A simple light list group item</li>
  <li class="list-group-item list-group-item-dark">A simple dark list group item</li>
</ul>
```

### Variants on links and buttons

Combine variant classes with `.list-group-item-action` to get themed hover states as well.

```html
<div class="list-group">
  <a href="#" class="list-group-item list-group-item-action">Default</a>
  <a href="#" class="list-group-item list-group-item-action list-group-item-primary">Primary</a>
  <a href="#" class="list-group-item list-group-item-action list-group-item-secondary">Secondary</a>
  <a href="#" class="list-group-item list-group-item-action list-group-item-success">Success</a>
  <a href="#" class="list-group-item list-group-item-action list-group-item-danger">Danger</a>
  <a href="#" class="list-group-item list-group-item-action list-group-item-warning">Warning</a>
  <a href="#" class="list-group-item list-group-item-action list-group-item-info">Info</a>
  <a href="#" class="list-group-item list-group-item-action list-group-item-light">Light</a>
  <a href="#" class="list-group-item list-group-item-action list-group-item-dark">Dark</a>
</div>
```

> **Accessibility note:** Color alone doesn't convey meaning to screen readers. Make sure the meaning is obvious from the text content itself, or supplement with `.visually-hidden` text.

---

## With Badges

Use flexbox utilities to align badges alongside list item text.

```html
<ul class="list-group">
  <li class="list-group-item d-flex justify-content-between align-items-center">
    A list item
    <span class="badge text-bg-primary rounded-pill">14</span>
  </li>
  <li class="list-group-item d-flex justify-content-between align-items-center">
    A second list item
    <span class="badge text-bg-primary rounded-pill">2</span>
  </li>
  <li class="list-group-item d-flex justify-content-between align-items-center">
    A third list item
    <span class="badge text-bg-primary rounded-pill">1</span>
  </li>
</ul>
```

**Classes used:**
- `d-flex` — makes the `<li>` a flex container.
- `justify-content-between` — pushes badge to the far right.
- `align-items-center` — vertically centers the badge with the text.

---

## Custom Content

Place nearly any HTML inside list group items. Flexbox utilities make complex layouts (heading + timestamp, body text, small print) easy.

```html
<div class="list-group">
  <!-- Active item with custom content -->
  <a href="#" class="list-group-item list-group-item-action active" aria-current="true">
    <div class="d-flex w-100 justify-content-between">
      <h5 class="mb-1">List group item heading</h5>
      <small>3 days ago</small>
    </div>
    <p class="mb-1">Some placeholder content in a paragraph.</p>
    <small>And some small print.</small>
  </a>

  <!-- Inactive item -->
  <a href="#" class="list-group-item list-group-item-action">
    <div class="d-flex w-100 justify-content-between">
      <h5 class="mb-1">List group item heading</h5>
      <small class="text-body-secondary">3 days ago</small>
    </div>
    <p class="mb-1">Some placeholder content in a paragraph.</p>
    <small class="text-body-secondary">And some muted small print.</small>
  </a>

  <!-- Another inactive item -->
  <a href="#" class="list-group-item list-group-item-action">
    <div class="d-flex w-100 justify-content-between">
      <h5 class="mb-1">List group item heading</h5>
      <small class="text-body-secondary">3 days ago</small>
    </div>
    <p class="mb-1">Some placeholder content in a paragraph.</p>
    <small class="text-body-secondary">And some muted small print.</small>
  </a>
</div>
```

---

## Checkboxes and Radios

Embed Bootstrap checkboxes or radios directly inside list group items.

> If used without `<label>` elements, add `aria-label` to the input for accessibility.

### Checkboxes

```html
<ul class="list-group">
  <li class="list-group-item">
    <input class="form-check-input me-1" type="checkbox" value="" id="firstCheckbox">
    <label class="form-check-label" for="firstCheckbox">First checkbox</label>
  </li>
  <li class="list-group-item">
    <input class="form-check-input me-1" type="checkbox" value="" id="secondCheckbox">
    <label class="form-check-label" for="secondCheckbox">Second checkbox</label>
  </li>
  <li class="list-group-item">
    <input class="form-check-input me-1" type="checkbox" value="" id="thirdCheckbox">
    <label class="form-check-label" for="thirdCheckbox">Third checkbox</label>
  </li>
</ul>
```

### Radios

```html
<ul class="list-group">
  <li class="list-group-item">
    <input class="form-check-input me-1" type="radio" name="listGroupRadio" value="" id="firstRadio" checked>
    <label class="form-check-label" for="firstRadio">First radio</label>
  </li>
  <li class="list-group-item">
    <input class="form-check-input me-1" type="radio" name="listGroupRadio" value="" id="secondRadio">
    <label class="form-check-label" for="secondRadio">Second radio</label>
  </li>
  <li class="list-group-item">
    <input class="form-check-input me-1" type="radio" name="listGroupRadio" value="" id="thirdRadio">
    <label class="form-check-label" for="thirdRadio">Third radio</label>
  </li>
</ul>
```

### Stretched-link checkboxes (entire item is clickable)

Add `.stretched-link` to the `<label>` to make the entire list item the click target.

```html
<ul class="list-group">
  <li class="list-group-item">
    <input class="form-check-input me-1" type="checkbox" value="" id="firstCheckboxStretched">
    <label class="form-check-label stretched-link" for="firstCheckboxStretched">First checkbox</label>
  </li>
  <li class="list-group-item">
    <input class="form-check-input me-1" type="checkbox" value="" id="secondCheckboxStretched">
    <label class="form-check-label stretched-link" for="secondCheckboxStretched">Second checkbox</label>
  </li>
  <li class="list-group-item">
    <input class="form-check-input me-1" type="checkbox" value="" id="thirdCheckboxStretched">
    <label class="form-check-label stretched-link" for="thirdCheckboxStretched">Third checkbox</label>
  </li>
</ul>
```

---

## CSS Variables

Added in **Bootstrap v5.2.0**. List groups use local CSS variables on `.list-group` for real-time customization without recompiling Sass.

Defined in `scss/_list-group.scss`:

```scss
--#{$prefix}list-group-color: #{$list-group-color};
--#{$prefix}list-group-bg: #{$list-group-bg};
--#{$prefix}list-group-border-color: #{$list-group-border-color};
--#{$prefix}list-group-border-width: #{$list-group-border-width};
--#{$prefix}list-group-border-radius: #{$list-group-border-radius};
--#{$prefix}list-group-item-padding-x: #{$list-group-item-padding-x};
--#{$prefix}list-group-item-padding-y: #{$list-group-item-padding-y};
--#{$prefix}list-group-action-color: #{$list-group-action-color};
--#{$prefix}list-group-action-hover-color: #{$list-group-action-hover-color};
--#{$prefix}list-group-action-hover-bg: #{$list-group-hover-bg};
--#{$prefix}list-group-action-active-color: #{$list-group-action-active-color};
--#{$prefix}list-group-action-active-bg: #{$list-group-action-active-bg};
--#{$prefix}list-group-disabled-color: #{$list-group-disabled-color};
--#{$prefix}list-group-disabled-bg: #{$list-group-disabled-bg};
--#{$prefix}list-group-active-color: #{$list-group-active-color};
--#{$prefix}list-group-active-bg: #{$list-group-active-bg};
--#{$prefix}list-group-active-border-color: #{$list-group-active-border-color};
```

### Example: Override via CSS

```css
.list-group {
  --bs-list-group-border-radius: 0;
  --bs-list-group-item-padding-x: 1.5rem;
}
```

---

## Sass Variables

Defined in `scss/_variables.scss`:

```scss
$list-group-color:                  var(--#{$prefix}body-color);
$list-group-bg:                     var(--#{$prefix}body-bg);
$list-group-border-color:           var(--#{$prefix}border-color);
$list-group-border-width:           var(--#{$prefix}border-width);
$list-group-border-radius:          var(--#{$prefix}border-radius);

$list-group-item-padding-y:         $spacer * .5;
$list-group-item-padding-x:         $spacer;
// Deprecated in v5.3.0:
$list-group-item-bg-scale:          -80%;
$list-group-item-color-scale:       40%;

$list-group-hover-bg:               var(--#{$prefix}tertiary-bg);
$list-group-active-color:           $component-active-color;
$list-group-active-bg:              $component-active-bg;
$list-group-active-border-color:    $list-group-active-bg;

$list-group-disabled-color:         var(--#{$prefix}secondary-color);
$list-group-disabled-bg:            $list-group-bg;

$list-group-action-color:           var(--#{$prefix}secondary-color);
$list-group-action-hover-color:     var(--#{$prefix}emphasis-color);
$list-group-action-active-color:    var(--#{$prefix}body-color);
$list-group-action-active-bg:       var(--#{$prefix}secondary-bg);
```

### Variable Reference Table

| Variable | Description |
|---|---|
| `$list-group-color` / `$list-group-bg` | Default text and background |
| `$list-group-border-color/width/radius` | Border styling |
| `$list-group-item-padding-y/x` | Item padding (vertical / horizontal) |
| `$list-group-hover-bg` | Background on hover for action items |
| `$list-group-active-*` | Active item color, background, border |
| `$list-group-disabled-color/bg` | Disabled item appearance |
| `$list-group-action-color` | Default text color for action items |
| `$list-group-action-hover-color` | Text color on hover for action items |
| `$list-group-action-active-color/bg` | Color and background when item is pressed |

---

## Sass Mixins

> ⚠️ **Deprecated in Bootstrap v5.3.0.** The mixin below has been replaced by the Sass loop approach.

```scss
// scss/mixins/_list-group.scss
@mixin list-group-item-variant($state, $background, $color) {
  .list-group-item-#{$state} {
    color: $color;
    background-color: $background;

    &.list-group-item-action {
      &:hover,
      &:focus {
        color: $color;
        background-color: shade-color($background, 10%);
      }

      &.active {
        color: $white;
        background-color: $color;
        border-color: $color;
      }
    }
  }
}
```

---

## Sass Loops

The modern replacement for the deprecated mixin. Iterates over `$theme-colors` and generates each `.list-group-item-{state}` class by overriding local CSS variables — no selector duplication needed.

```scss
// scss/_list-group.scss
@each $state in map-keys($theme-colors) {
  .list-group-item-#{$state} {
    --#{$prefix}list-group-color: var(--#{$prefix}#{$state}-text-emphasis);
    --#{$prefix}list-group-bg: var(--#{$prefix}#{$state}-bg-subtle);
    --#{$prefix}list-group-border-color: var(--#{$prefix}#{$state}-border-subtle);
    --#{$prefix}list-group-action-hover-color: var(--#{$prefix}emphasis-color);
    --#{$prefix}list-group-action-hover-bg: var(--#{$prefix}#{$state}-border-subtle);
    --#{$prefix}list-group-action-active-color: var(--#{$prefix}emphasis-color);
    --#{$prefix}list-group-action-active-bg: var(--#{$prefix}#{$state}-border-subtle);
    --#{$prefix}list-group-active-color: var(--#{$prefix}#{$state}-bg-subtle);
    --#{$prefix}list-group-active-bg: var(--#{$prefix}#{$state}-text-emphasis);
    --#{$prefix}list-group-active-border-color: var(--#{$prefix}#{$state}-text-emphasis);
  }
}
```

This generates classes like `.list-group-item-primary`, `.list-group-item-danger`, etc. for all theme colors automatically.

---

## JavaScript Behavior

Use the **Tab plugin** (`bootstrap.Tab`) to turn a list group into a **tabbed navigation** that shows and hides associated content panes.

```html
<div class="row">
  <div class="col-4">
    <!-- List group acting as tab nav -->
    <div class="list-group" id="list-tab" role="tablist">
      <a class="list-group-item list-group-item-action active"
        id="list-home-list" data-bs-toggle="list"
        href="#list-home" role="tab" aria-controls="list-home">Home</a>
      <a class="list-group-item list-group-item-action"
        id="list-profile-list" data-bs-toggle="list"
        href="#list-profile" role="tab" aria-controls="list-profile">Profile</a>
      <a class="list-group-item list-group-item-action"
        id="list-messages-list" data-bs-toggle="list"
        href="#list-messages" role="tab" aria-controls="list-messages">Messages</a>
      <a class="list-group-item list-group-item-action"
        id="list-settings-list" data-bs-toggle="list"
        href="#list-settings" role="tab" aria-controls="list-settings">Settings</a>
    </div>
  </div>
  <div class="col-8">
    <!-- Tab pane content -->
    <div class="tab-content" id="nav-tabContent">
      <div class="tab-pane fade show active" id="list-home"
        role="tabpanel" aria-labelledby="list-home-list">
        Home content here...
      </div>
      <div class="tab-pane fade" id="list-profile"
        role="tabpanel" aria-labelledby="list-profile-list">
        Profile content here...
      </div>
      <div class="tab-pane fade" id="list-messages"
        role="tabpanel" aria-labelledby="list-messages-list">
        Messages content here...
      </div>
      <div class="tab-pane fade" id="list-settings"
        role="tabpanel" aria-labelledby="list-settings-list">
        Settings content here...
      </div>
    </div>
  </div>
</div>
```

**Required ARIA attributes for tabbed list groups:**

| Element | Required attributes |
|---|---|
| `.list-group` | `role="tablist"` |
| Each trigger `<a>` | `role="tab"`, `aria-controls="{pane-id}"` |
| Each `.tab-pane` | `role="tabpanel"`, `aria-labelledby="{trigger-id}"` |

---

## Using Data Attributes

No JavaScript needed — just add `data-bs-toggle="list"` to each trigger link.

```html
<div role="tabpanel">
  <!-- List group nav -->
  <div class="list-group" id="myList" role="tablist">
    <a class="list-group-item list-group-item-action active"
      data-bs-toggle="list" href="#home" role="tab">Home</a>
    <a class="list-group-item list-group-item-action"
      data-bs-toggle="list" href="#profile" role="tab">Profile</a>
    <a class="list-group-item list-group-item-action"
      data-bs-toggle="list" href="#messages" role="tab">Messages</a>
    <a class="list-group-item list-group-item-action"
      data-bs-toggle="list" href="#settings" role="tab">Settings</a>
  </div>

  <!-- Tab panes -->
  <div class="tab-content">
    <div class="tab-pane active" id="home" role="tabpanel">Home content...</div>
    <div class="tab-pane" id="profile" role="tabpanel">Profile content...</div>
    <div class="tab-pane" id="messages" role="tabpanel">Messages content...</div>
    <div class="tab-pane" id="settings" role="tabpanel">Settings content...</div>
  </div>
</div>
```

---

## Via JavaScript

Each tab trigger must be activated individually. Use `bootstrap.Tab` and call `.show()` on click.

### Initialize all tabs

```javascript
const triggerTabList = document.querySelectorAll('#myTab a')
triggerTabList.forEach(triggerEl => {
  const tabTrigger = new bootstrap.Tab(triggerEl)

  triggerEl.addEventListener('click', event => {
    event.preventDefault()
    tabTrigger.show()
  })
})
```

### Activate a specific tab programmatically

```javascript
// Select by href/name
const triggerEl = document.querySelector('#myTab a[href="#profile"]')
bootstrap.Tab.getInstance(triggerEl).show()

// Select the first tab
const firstTabEl = document.querySelector('#myTab li:first-child a')
bootstrap.Tab.getInstance(firstTabEl).show()

// Using the constructor directly
const bsTab = new bootstrap.Tab('#myTab')
```

---

## Fade Effect

Add `.fade` to each `.tab-pane` to animate pane transitions with a fade. The **initially active pane** must also have `.show` to be visible on load.

```html
<div class="tab-content">
  <!-- First pane: needs both .show and .active -->
  <div class="tab-pane fade show active" id="home" role="tabpanel">...</div>
  <div class="tab-pane fade" id="profile" role="tabpanel">...</div>
  <div class="tab-pane fade" id="messages" role="tabpanel">...</div>
  <div class="tab-pane fade" id="settings" role="tabpanel">...</div>
</div>
```

---

## Methods Reference

> All API methods are **asynchronous** — they return as soon as the transition starts, not when it ends. Method calls on a transitioning component are ignored.

| Method | Description |
|---|---|
| `show` | Selects the given tab and shows its associated pane. Hides any previously active tab and its pane. Returns before the pane is fully shown (i.e., before `shown.bs.tab` fires). |
| `dispose` | Destroys the tab instance. |
| `getInstance(element)` | Static — returns the tab instance associated with a DOM element. |
| `getOrCreateInstance(element)` | Static — returns an existing instance or creates a new one. |

```javascript
const tabEl = document.querySelector('#myTab a[href="#profile"]')
const tab = bootstrap.Tab.getOrCreateInstance(tabEl)

tab.show()    // activate this tab
tab.dispose() // destroy instance
```

---

## Events Reference

When switching tabs, events fire in a **specific order**:

1. `hide.bs.tab` — on the current (outgoing) active tab
2. `show.bs.tab` — on the incoming tab
3. `hidden.bs.tab` — on the previous active tab (after transition)
4. `shown.bs.tab` — on the newly active tab (after transition)

> If no tab was previously active, `hide.bs.tab` and `hidden.bs.tab` will **not** fire.

| Event type | Fires... | `event.target` | `event.relatedTarget` |
|---|---|---|---|
| `show.bs.tab` | Immediately when `show` is called | The incoming (to-be-shown) tab | The previous active tab |
| `shown.bs.tab` | After the tab is fully visible | The newly active tab | The previous active tab |
| `hide.bs.tab` | When a new tab is about to be shown | The current active (to-be-hidden) tab | The incoming tab |
| `hidden.bs.tab` | After the tab is fully hidden | The now-hidden tab | The new active tab |

```javascript
const tabElms = document.querySelectorAll('a[data-bs-toggle="list"]')

tabElms.forEach(tabElm => {
  // Fires after a tab becomes active
  tabElm.addEventListener('shown.bs.tab', event => {
    console.log('Now active:', event.target)        // newly activated tab
    console.log('Was active:', event.relatedTarget) // previous active tab
  })

  // Fires before a tab is hidden
  tabElm.addEventListener('hide.bs.tab', event => {
    console.log('Hiding:', event.target)
    console.log('Showing next:', event.relatedTarget)
  })
})
```

---

## Quick Reference

```html
<!-- Basic list group -->
<ul class="list-group">
  <li class="list-group-item active" aria-current="true">Active item</li>
  <li class="list-group-item">Regular item</li>
  <li class="list-group-item disabled" aria-disabled="true">Disabled item</li>
</ul>

<!-- Actionable links -->
<div class="list-group">
  <a href="#" class="list-group-item list-group-item-action active" aria-current="true">Active</a>
  <a href="#" class="list-group-item list-group-item-action">Normal</a>
  <a href="#" class="list-group-item list-group-item-action disabled" aria-disabled="true">Disabled</a>
</div>

<!-- Flush (edge-to-edge) -->
<ul class="list-group list-group-flush">...</ul>

<!-- Numbered -->
<ol class="list-group list-group-numbered">
  <li class="list-group-item">Item</li>
</ol>

<!-- Horizontal -->
<ul class="list-group list-group-horizontal">...</ul>
<ul class="list-group list-group-horizontal-md">...</ul>

<!-- With badge -->
<li class="list-group-item d-flex justify-content-between align-items-center">
  Item text
  <span class="badge text-bg-primary rounded-pill">9</span>
</li>

<!-- Contextual variant -->
<li class="list-group-item list-group-item-success">Success item</li>

<!-- Tabbed list group trigger -->
<a class="list-group-item list-group-item-action active"
  data-bs-toggle="list" href="#pane1" role="tab">Tab 1</a>

<!-- Tab pane with fade -->
<div class="tab-pane fade show active" id="pane1" role="tabpanel">Content</div>
```

---