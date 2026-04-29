# Bootstrap Input Group

A guide to extending form controls by adding text, buttons, or button groups on either side of textual inputs, custom selects, and custom file inputs.

---

## Overview

Input groups use the `.input-group` wrapper to attach **addons** (`.input-group-text`) to either side of a form control. Always place `<label>` elements **outside** the input group.

---

## Basic Example

Addons can be placed before, after, or on both sides of an input. Works with `<input>` and `<textarea>`.

```html
<!-- Addon before -->
<div class="input-group mb-3">
  <span class="input-group-text" id="basic-addon1">@</span>
  <input type="text" class="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1">
</div>

<!-- Addon after -->
<div class="input-group mb-3">
  <input type="text" class="form-control" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="basic-addon2">
  <span class="input-group-text" id="basic-addon2">@example.com</span>
</div>

<!-- With label and help text outside the group -->
<div class="mb-3">
  <label for="basic-url" class="form-label">Your vanity URL</label>
  <div class="input-group">
    <span class="input-group-text" id="basic-addon3">https://example.com/users/</span>
    <input type="text" class="form-control" id="basic-url" aria-describedby="basic-addon3 basic-addon4">
  </div>
  <div class="form-text" id="basic-addon4">Example help text goes outside the input group.</div>
</div>

<!-- Addons on both sides -->
<div class="input-group mb-3">
  <span class="input-group-text">$</span>
  <input type="text" class="form-control" aria-label="Amount (to the nearest dollar)">
  <span class="input-group-text">.00</span>
</div>

<!-- Two inputs with an addon between -->
<div class="input-group mb-3">
  <input type="text" class="form-control" placeholder="Username" aria-label="Username">
  <span class="input-group-text">@</span>
  <input type="text" class="form-control" placeholder="Server" aria-label="Server">
</div>

<!-- With textarea -->
<div class="input-group">
  <span class="input-group-text">With textarea</span>
  <textarea class="form-control" aria-label="With textarea"></textarea>
</div>
```

---

## Wrapping

Input groups use `flex-wrap: wrap` by default to support custom form validation. Disable wrapping with `.flex-nowrap`.

```html
<div class="input-group flex-nowrap">
  <span class="input-group-text" id="addon-wrapping">@</span>
  <input type="text" class="form-control" placeholder="Username" aria-label="Username" aria-describedby="addon-wrapping">
</div>
```

---

## Border Radius

> **Known limitation:** Border-radius styles can only be applied to the **first and last visible children** of `.input-group`. Any non-visible element (e.g. `d-none`) in one of those positions causes the group to render incorrectly. This is not expected to be fixed until v6.

```html
<!-- Hidden input breaks border-radius on the visible last child -->
<div class="input-group">
  <span class="input-group-text" id="visible-addon">@</span>
  <input type="text" class="form-control" placeholder="Username" aria-label="Username" aria-describedby="visible-addon">
  <input type="text" class="form-control d-none" placeholder="Hidden input" aria-label="Hidden input" aria-describedby="visible-addon">
</div>
```

---

## Sizing

Apply sizing to the `.input-group` itself — all child elements resize automatically. Do **not** apply size classes to individual elements inside the group.

| Class | Size |
|---|---|
| `.input-group-sm` | Small |
| *(none)* | Default |
| `.input-group-lg` | Large |

```html
<!-- Small -->
<div class="input-group input-group-sm mb-3">
  <span class="input-group-text" id="inputGroup-sizing-sm">Small</span>
  <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm">
</div>

<!-- Default -->
<div class="input-group mb-3">
  <span class="input-group-text" id="inputGroup-sizing-default">Default</span>
  <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default">
</div>

<!-- Large -->
<div class="input-group input-group-lg">
  <span class="input-group-text" id="inputGroup-sizing-lg">Large</span>
  <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg">
</div>
```

---

## Checkboxes and Radios

Place checkboxes or radios inside `.input-group-text` as addons. Add `.mt-0` to `.form-check-input` when there is no visible text beside the input.

```html
<!-- Checkbox addon -->
<div class="input-group mb-3">
  <div class="input-group-text">
    <input class="form-check-input mt-0" type="checkbox" value="" aria-label="Checkbox for following text input">
  </div>
  <input type="text" class="form-control" aria-label="Text input with checkbox">
</div>

<!-- Radio addon -->
<div class="input-group">
  <div class="input-group-text">
    <input class="form-check-input mt-0" type="radio" value="" aria-label="Radio button for following text input">
  </div>
  <input type="text" class="form-control" aria-label="Text input with radio button">
</div>
```

---

## Multiple Inputs

Multiple `<input>` elements are supported visually, but **validation styles only work with a single `<input>`** per group.

```html
<div class="input-group">
  <span class="input-group-text">First and last name</span>
  <input type="text" aria-label="First name" class="form-control">
  <input type="text" aria-label="Last name" class="form-control">
</div>
```

---

## Multiple Addons

Stack multiple `.input-group-text` spans on either side. Can be mixed with checkboxes and radios.

```html
<!-- Multiple addons before -->
<div class="input-group mb-3">
  <span class="input-group-text">$</span>
  <span class="input-group-text">0.00</span>
  <input type="text" class="form-control" aria-label="Dollar amount (with dot and two decimal places)">
</div>

<!-- Multiple addons after -->
<div class="input-group">
  <input type="text" class="form-control" aria-label="Dollar amount (with dot and two decimal places)">
  <span class="input-group-text">$</span>
  <span class="input-group-text">0.00</span>
</div>
```

---

## Button Addons

Replace `.input-group-text` spans with `<button>` elements. Buttons can be placed before, after, or on both sides.

```html
<!-- Button before -->
<div class="input-group mb-3">
  <button class="btn btn-outline-secondary" type="button" id="button-addon1">Button</button>
  <input type="text" class="form-control" aria-label="Example text with button addon" aria-describedby="button-addon1">
</div>

<!-- Button after -->
<div class="input-group mb-3">
  <input type="text" class="form-control" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="button-addon2">
  <button class="btn btn-outline-secondary" type="button" id="button-addon2">Button</button>
</div>

<!-- Two buttons before -->
<div class="input-group mb-3">
  <button class="btn btn-outline-secondary" type="button">Button</button>
  <button class="btn btn-outline-secondary" type="button">Button</button>
  <input type="text" class="form-control" aria-label="Example text with two button addons">
</div>

<!-- Two buttons after -->
<div class="input-group">
  <input type="text" class="form-control" placeholder="Recipient's username" aria-label="Recipient's username with two button addons">
  <button class="btn btn-outline-secondary" type="button">Button</button>
  <button class="btn btn-outline-secondary" type="button">Button</button>
</div>
```

---

## Buttons with Dropdowns

Use Bootstrap's dropdown component inside input groups. Add `dropdown-menu-end` to right-align a dropdown that opens from the right side.

```html
<!-- Dropdown before -->
<div class="input-group mb-3">
  <button class="btn btn-outline-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">Dropdown</button>
  <ul class="dropdown-menu">
    <li><a class="dropdown-item" href="#">Action</a></li>
    <li><a class="dropdown-item" href="#">Another action</a></li>
    <li><a class="dropdown-item" href="#">Something else here</a></li>
    <li><hr class="dropdown-divider"></li>
    <li><a class="dropdown-item" href="#">Separated link</a></li>
  </ul>
  <input type="text" class="form-control" aria-label="Text input with dropdown button">
</div>

<!-- Dropdown after (right-aligned) -->
<div class="input-group mb-3">
  <input type="text" class="form-control" aria-label="Text input with dropdown button">
  <button class="btn btn-outline-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">Dropdown</button>
  <ul class="dropdown-menu dropdown-menu-end">
    <li><a class="dropdown-item" href="#">Action</a></li>
    <li><a class="dropdown-item" href="#">Another action</a></li>
    <li><hr class="dropdown-divider"></li>
    <li><a class="dropdown-item" href="#">Separated link</a></li>
  </ul>
</div>

<!-- Dropdowns on both sides -->
<div class="input-group">
  <button class="btn btn-outline-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">Dropdown</button>
  <ul class="dropdown-menu">
    <li><a class="dropdown-item" href="#">Action before</a></li>
    <li><a class="dropdown-item" href="#">Another action before</a></li>
    <li><hr class="dropdown-divider"></li>
    <li><a class="dropdown-item" href="#">Separated link</a></li>
  </ul>
  <input type="text" class="form-control" aria-label="Text input with 2 dropdown buttons">
  <button class="btn btn-outline-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">Dropdown</button>
  <ul class="dropdown-menu dropdown-menu-end">
    <li><a class="dropdown-item" href="#">Action</a></li>
    <li><a class="dropdown-item" href="#">Another action</a></li>
    <li><hr class="dropdown-divider"></li>
    <li><a class="dropdown-item" href="#">Separated link</a></li>
  </ul>
</div>
```

---

## Segmented Buttons

Combine a regular action button with a split `.dropdown-toggle-split` button. Use `visually-hidden` for accessible toggle labelling.

```html
<!-- Segmented button before -->
<div class="input-group mb-3">
  <button type="button" class="btn btn-outline-secondary">Action</button>
  <button type="button" class="btn btn-outline-secondary dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false">
    <span class="visually-hidden">Toggle Dropdown</span>
  </button>
  <ul class="dropdown-menu">
    <li><a class="dropdown-item" href="#">Action</a></li>
    <li><a class="dropdown-item" href="#">Another action</a></li>
    <li><hr class="dropdown-divider"></li>
    <li><a class="dropdown-item" href="#">Separated link</a></li>
  </ul>
  <input type="text" class="form-control" aria-label="Text input with segmented dropdown button">
</div>

<!-- Segmented button after -->
<div class="input-group">
  <input type="text" class="form-control" aria-label="Text input with segmented dropdown button">
  <button type="button" class="btn btn-outline-secondary">Action</button>
  <button type="button" class="btn btn-outline-secondary dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false">
    <span class="visually-hidden">Toggle Dropdown</span>
  </button>
  <ul class="dropdown-menu dropdown-menu-end">
    <li><a class="dropdown-item" href="#">Action</a></li>
    <li><a class="dropdown-item" href="#">Another action</a></li>
    <li><hr class="dropdown-divider"></li>
    <li><a class="dropdown-item" href="#">Separated link</a></li>
  </ul>
</div>
```

---

## Custom Forms

Input groups support custom selects and custom file inputs. Browser-default versions of these are **not supported**.

### Custom Select

Use `.form-select` in place of a standard `<select>`. Labels and buttons can be combined on either side.

```html
<!-- Label before -->
<div class="input-group mb-3">
  <label class="input-group-text" for="inputGroupSelect01">Options</label>
  <select class="form-select" id="inputGroupSelect01">
    <option selected>Choose...</option>
    <option value="1">One</option>
    <option value="2">Two</option>
    <option value="3">Three</option>
  </select>
</div>

<!-- Label after -->
<div class="input-group mb-3">
  <select class="form-select" id="inputGroupSelect02">
    <option selected>Choose...</option>
    <option value="1">One</option>
    <option value="2">Two</option>
    <option value="3">Three</option>
  </select>
  <label class="input-group-text" for="inputGroupSelect02">Options</label>
</div>

<!-- Button before -->
<div class="input-group mb-3">
  <button class="btn btn-outline-secondary" type="button">Button</button>
  <select class="form-select" id="inputGroupSelect03" aria-label="Example select with button addon">
    <option selected>Choose...</option>
    <option value="1">One</option>
    <option value="2">Two</option>
    <option value="3">Three</option>
  </select>
</div>

<!-- Button after -->
<div class="input-group">
  <select class="form-select" id="inputGroupSelect04" aria-label="Example select with button addon">
    <option selected>Choose...</option>
    <option value="1">One</option>
    <option value="2">Two</option>
    <option value="3">Three</option>
  </select>
  <button class="btn btn-outline-secondary" type="button">Button</button>
</div>
```

### Custom File Input

Use `<input type="file" class="form-control">` with labels or buttons on either side.

```html
<!-- Label before -->
<div class="input-group mb-3">
  <label class="input-group-text" for="inputGroupFile01">Upload</label>
  <input type="file" class="form-control" id="inputGroupFile01">
</div>

<!-- Label after -->
<div class="input-group mb-3">
  <input type="file" class="form-control" id="inputGroupFile02">
  <label class="input-group-text" for="inputGroupFile02">Upload</label>
</div>

<!-- Button before -->
<div class="input-group mb-3">
  <button class="btn btn-outline-secondary" type="button" id="inputGroupFileAddon03">Button</button>
  <input type="file" class="form-control" id="inputGroupFile03" aria-describedby="inputGroupFileAddon03" aria-label="Upload">
</div>

<!-- Button after -->
<div class="input-group">
  <input type="file" class="form-control" id="inputGroupFile04" aria-describedby="inputGroupFileAddon04" aria-label="Upload">
  <button class="btn btn-outline-secondary" type="button" id="inputGroupFileAddon04">Button</button>
</div>
```

---

## CSS / Sass Variables

Addon appearance is controlled via variables in `scss/_variables.scss`. These match standard input padding and color values by default.

```scss
$input-group-addon-padding-y:       $input-padding-y;
$input-group-addon-padding-x:       $input-padding-x;
$input-group-addon-font-weight:     $input-font-weight;
$input-group-addon-color:           $input-color;
$input-group-addon-bg:              var(--#{$prefix}tertiary-bg);
$input-group-addon-border-color:    $input-border-color;
```

| Variable | Default | Description |
|---|---|---|
| `$input-group-addon-padding-y` | `$input-padding-y` | Vertical padding (matches input) |
| `$input-group-addon-padding-x` | `$input-padding-x` | Horizontal padding (matches input) |
| `$input-group-addon-font-weight` | `$input-font-weight` | Font weight of addon text |
| `$input-group-addon-color` | `$input-color` | Text color of addon |
| `$input-group-addon-bg` | `tertiary-bg` | Background color of addon |
| `$input-group-addon-border-color` | `$input-border-color` | Border color (matches input border) |

---

## Quick Reference

| Feature | Key class / attribute |
|---|---|
| Group wrapper | `.input-group` |
| Text addon | `.input-group-text` |
| Prevent wrapping | `.flex-nowrap` on `.input-group` |
| Small size | `.input-group-sm` on `.input-group` |
| Large size | `.input-group-lg` on `.input-group` |
| Checkbox/radio addon | `.form-check-input.mt-0` inside `.input-group-text` |
| Button addon | `<button class="btn ...">` directly in `.input-group` |
| Dropdown button | Add `.dropdown-toggle` + `data-bs-toggle="dropdown"` |
| Segmented dropdown | `.dropdown-toggle-split` + `visually-hidden` label |
| Custom select | `.form-select` inside `.input-group` |
| Custom file input | `<input type="file" class="form-control">` inside `.input-group` |

---