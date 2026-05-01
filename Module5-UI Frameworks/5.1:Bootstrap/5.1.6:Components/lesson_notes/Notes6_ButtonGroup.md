# Bootstrap Button Group

> Group a series of buttons together on a single line or stack them in a vertical column.

---

## Basic Example

Wrap a series of `.btn` elements inside a `.btn-group` div:

```html
<div class="btn-group" role="group" aria-label="Basic example">
  <button type="button" class="btn btn-primary">Left</button>
  <button type="button" class="btn btn-primary">Middle</button>
  <button type="button" class="btn btn-primary">Right</button>
</div>
```

> **Accessibility:** Button groups require `role="group"` and an `aria-label` or `aria-labelledby` so screen readers can identify and announce the group correctly.

Button groups also work on links as an alternative to `.nav` components:

```html
<div class="btn-group">
  <a href="#" class="btn btn-primary active" aria-current="page">Active link</a>
  <a href="#" class="btn btn-primary">Link</a>
  <a href="#" class="btn btn-primary">Link</a>
</div>
```

---

## Mixed Styles

Mix different button variants within a single group:

```html
<div class="btn-group" role="group" aria-label="Basic mixed styles example">
  <button type="button" class="btn btn-danger">Left</button>
  <button type="button" class="btn btn-warning">Middle</button>
  <button type="button" class="btn btn-success">Right</button>
</div>
```

---

## Outlined Styles

Use outline variants inside a group:

```html
<div class="btn-group" role="group" aria-label="Basic outlined example">
  <button type="button" class="btn btn-outline-primary">Left</button>
  <button type="button" class="btn btn-outline-primary">Middle</button>
  <button type="button" class="btn btn-outline-primary">Right</button>
</div>
```

---

## Checkbox and Radio Button Groups

Combine checkbox or radio inputs with `.btn-check` and styled labels to create toggle button groups that look like regular button groups.

### Checkbox group

Each checkbox is independent — multiple can be selected at once:

```html
<div class="btn-group" role="group" aria-label="Basic checkbox toggle button group">
  <input type="checkbox" class="btn-check" id="btncheck1" autocomplete="off">
  <label class="btn btn-outline-primary" for="btncheck1">Checkbox 1</label>

  <input type="checkbox" class="btn-check" id="btncheck2" autocomplete="off">
  <label class="btn btn-outline-primary" for="btncheck2">Checkbox 2</label>

  <input type="checkbox" class="btn-check" id="btncheck3" autocomplete="off">
  <label class="btn btn-outline-primary" for="btncheck3">Checkbox 3</label>
</div>
```

### Radio group

Share the same `name` attribute across radio inputs — only one can be selected at a time. Add `checked` to pre-select an option:

```html
<div class="btn-group" role="group" aria-label="Basic radio toggle button group">
  <input type="radio" class="btn-check" name="btnradio" id="btnradio1" autocomplete="off" checked>
  <label class="btn btn-outline-primary" for="btnradio1">Radio 1</label>

  <input type="radio" class="btn-check" name="btnradio" id="btnradio2" autocomplete="off">
  <label class="btn btn-outline-primary" for="btnradio2">Radio 2</label>

  <input type="radio" class="btn-check" name="btnradio" id="btnradio3" autocomplete="off">
  <label class="btn btn-outline-primary" for="btnradio3">Radio 3</label>
</div>
```

**Key pattern:** The `<input>` uses `.btn-check` (visually hidden), and the `<label>` uses `.btn` styling. The `for` attribute on the label must match the `id` of its input.

---

## Button Toolbar

Combine multiple `.btn-group` elements inside a `.btn-toolbar` for more complex control layouts. Use spacing utilities to separate groups:

```html
<div class="btn-toolbar" role="toolbar" aria-label="Toolbar with button groups">
  <div class="btn-group me-2" role="group" aria-label="First group">
    <button type="button" class="btn btn-primary">1</button>
    <button type="button" class="btn btn-primary">2</button>
    <button type="button" class="btn btn-primary">3</button>
    <button type="button" class="btn btn-primary">4</button>
  </div>
  <div class="btn-group me-2" role="group" aria-label="Second group">
    <button type="button" class="btn btn-secondary">5</button>
    <button type="button" class="btn btn-secondary">6</button>
    <button type="button" class="btn btn-secondary">7</button>
  </div>
  <div class="btn-group" role="group" aria-label="Third group">
    <button type="button" class="btn btn-info">8</button>
  </div>
</div>
```

### Toolbar with input group

Mix `.btn-group` and `.input-group` elements inside a toolbar. Use `justify-content-between` for a spread layout:

```html
<!-- Stacked layout -->
<div class="btn-toolbar mb-3" role="toolbar" aria-label="Toolbar with button groups">
  <div class="btn-group me-2" role="group" aria-label="First group">
    <button type="button" class="btn btn-outline-secondary">1</button>
    <button type="button" class="btn btn-outline-secondary">2</button>
    <button type="button" class="btn btn-outline-secondary">3</button>
    <button type="button" class="btn btn-outline-secondary">4</button>
  </div>
  <div class="input-group">
    <div class="input-group-text" id="btnGroupAddon">@</div>
    <input type="text" class="form-control" placeholder="Input group example"
      aria-label="Input group example" aria-describedby="btnGroupAddon">
  </div>
</div>

<!-- Space-between layout -->
<div class="btn-toolbar justify-content-between" role="toolbar" aria-label="Toolbar with button groups">
  <div class="btn-group" role="group" aria-label="First group">
    <button type="button" class="btn btn-outline-secondary">1</button>
    <button type="button" class="btn btn-outline-secondary">2</button>
    <button type="button" class="btn btn-outline-secondary">3</button>
    <button type="button" class="btn btn-outline-secondary">4</button>
  </div>
  <div class="input-group">
    <div class="input-group-text" id="btnGroupAddon2">@</div>
    <input type="text" class="form-control" placeholder="Input group example"
      aria-label="Input group example" aria-describedby="btnGroupAddon2">
  </div>
</div>
```

| ARIA attribute | Applied to | Purpose |
|---|---|---|
| `role="toolbar"` | `.btn-toolbar` | Identifies the toolbar to screen readers |
| `role="group"` | Each `.btn-group` | Identifies each sub-group |
| `aria-label` | Both elements | Labels each for screen readers |

---

## Sizing

Apply a single size class to the `.btn-group` wrapper — no need to add size classes to every individual button. This also applies when nesting groups:

```html
<!-- Large -->
<div class="btn-group btn-group-lg" role="group" aria-label="Large button group">
  <button type="button" class="btn btn-outline-primary">Left</button>
  <button type="button" class="btn btn-outline-primary">Middle</button>
  <button type="button" class="btn btn-outline-primary">Right</button>
</div>

<!-- Default (no size class needed) -->
<div class="btn-group" role="group" aria-label="Default button group">
  <button type="button" class="btn btn-outline-primary">Left</button>
  <button type="button" class="btn btn-outline-primary">Middle</button>
  <button type="button" class="btn btn-outline-primary">Right</button>
</div>

<!-- Small -->
<div class="btn-group btn-group-sm" role="group" aria-label="Small button group">
  <button type="button" class="btn btn-outline-primary">Left</button>
  <button type="button" class="btn btn-outline-primary">Middle</button>
  <button type="button" class="btn btn-outline-primary">Right</button>
</div>
```

| Class | Size |
|---|---|
| `.btn-group-lg` | Large |
| *(none)* | Default |
| `.btn-group-sm` | Small |

---

## Nesting

Place a `.btn-group` inside another `.btn-group` to mix regular buttons with dropdowns in the same row:

```html
<div class="btn-group" role="group" aria-label="Button group with nested dropdown">
  <button type="button" class="btn btn-primary">1</button>
  <button type="button" class="btn btn-primary">2</button>

  <!-- Nested group creates the dropdown -->
  <div class="btn-group" role="group">
    <button
      type="button"
      class="btn btn-primary dropdown-toggle"
      data-bs-toggle="dropdown"
      aria-expanded="false"
    >
      Dropdown
    </button>
    <ul class="dropdown-menu">
      <li><a class="dropdown-item" href="#">Dropdown link</a></li>
      <li><a class="dropdown-item" href="#">Dropdown link</a></li>
    </ul>
  </div>
</div>
```

> The nested `.btn-group` is what creates the dropdown trigger. The outer `.btn-group` holds both the regular buttons and the nested dropdown group together.

---

## Vertical Variation

Use `.btn-group-vertical` instead of `.btn-group` to stack buttons vertically.

> **Note:** Split button dropdowns are not supported in vertical groups.

### Simple vertical stack

```html
<div class="btn-group-vertical" role="group" aria-label="Vertical button group">
  <button type="button" class="btn btn-primary">Button</button>
  <button type="button" class="btn btn-primary">Button</button>
  <button type="button" class="btn btn-primary">Button</button>
  <button type="button" class="btn btn-primary">Button</button>
</div>
```

### Vertical with nested dropdowns

Use `.dropstart`, `.dropend`, and `.dropup` classes on nested `.btn-group` elements to control dropdown direction:

```html
<div class="btn-group-vertical" role="group" aria-label="Vertical button group">

  <!-- Dropdown opens downward (default) -->
  <div class="btn-group" role="group">
    <button type="button" class="btn btn-primary dropdown-toggle"
      data-bs-toggle="dropdown" aria-expanded="false">Dropdown</button>
    <ul class="dropdown-menu">
      <li><a class="dropdown-item" href="#">Dropdown link</a></li>
      <li><a class="dropdown-item" href="#">Dropdown link</a></li>
    </ul>
  </div>

  <button type="button" class="btn btn-primary">Button</button>
  <button type="button" class="btn btn-primary">Button</button>

  <!-- Dropdown opens to the left -->
  <div class="btn-group dropstart" role="group">
    <button type="button" class="btn btn-primary dropdown-toggle"
      data-bs-toggle="dropdown" aria-expanded="false">Dropdown</button>
    <ul class="dropdown-menu">
      <li><a class="dropdown-item" href="#">Dropdown link</a></li>
      <li><a class="dropdown-item" href="#">Dropdown link</a></li>
    </ul>
  </div>

  <!-- Dropdown opens to the right -->
  <div class="btn-group dropend" role="group">
    <button type="button" class="btn btn-primary dropdown-toggle"
      data-bs-toggle="dropdown" aria-expanded="false">Dropdown</button>
    <ul class="dropdown-menu">
      <li><a class="dropdown-item" href="#">Dropdown link</a></li>
      <li><a class="dropdown-item" href="#">Dropdown link</a></li>
    </ul>
  </div>

  <!-- Dropdown opens upward -->
  <div class="btn-group dropup" role="group">
    <button type="button" class="btn btn-primary dropdown-toggle"
      data-bs-toggle="dropdown" aria-expanded="false">Dropdown</button>
    <ul class="dropdown-menu">
      <li><a class="dropdown-item" href="#">Dropdown link</a></li>
      <li><a class="dropdown-item" href="#">Dropdown link</a></li>
    </ul>
  </div>

</div>
```

### Vertical radio toggle group

```html
<div class="btn-group-vertical" role="group" aria-label="Vertical radio toggle button group">
  <input type="radio" class="btn-check" name="vbtn-radio" id="vbtn-radio1" autocomplete="off" checked>
  <label class="btn btn-outline-danger" for="vbtn-radio1">Radio 1</label>

  <input type="radio" class="btn-check" name="vbtn-radio" id="vbtn-radio2" autocomplete="off">
  <label class="btn btn-outline-danger" for="vbtn-radio2">Radio 2</label>

  <input type="radio" class="btn-check" name="vbtn-radio" id="vbtn-radio3" autocomplete="off">
  <label class="btn btn-outline-danger" for="vbtn-radio3">Radio 3</label>
</div>
```

---

## Quick Reference Cheatsheet

### Classes

| Class | Purpose |
|---|---|
| `.btn-group` | Horizontal button group wrapper |
| `.btn-group-vertical` | Vertical button group wrapper |
| `.btn-group-lg` | Large size for the entire group |
| `.btn-group-sm` | Small size for the entire group |
| `.btn-toolbar` | Wrapper for combining multiple groups |
| `.btn-check` | Hidden checkbox/radio input for toggle buttons |
| `.dropstart` | Dropdown opens to the left |
| `.dropend` | Dropdown opens to the right |
| `.dropup` | Dropdown opens upward |

### ARIA Requirements

| Element | `role` | Label attribute |
|---|---|---|
| `.btn-toolbar` | `role="toolbar"` | `aria-label` or `aria-labelledby` |
| `.btn-group` | `role="group"` | `aria-label` or `aria-labelledby` |

### Checkbox / Radio Pattern

```
<input type="checkbox|radio" class="btn-check" id="uniqueId" autocomplete="off">
<label class="btn btn-outline-*" for="uniqueId">Label text</label>
```

- `autocomplete="off"` — prevents browser from restoring checked state on page reload
- Radio inputs share the same `name` attribute for mutual exclusivity
- Add `checked` attribute to pre-select a radio option

---
