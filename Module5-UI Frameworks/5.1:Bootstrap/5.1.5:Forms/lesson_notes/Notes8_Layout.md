# Bootstrap Form Layout

A guide to structuring forms — from simple stacked layouts to inline, horizontal, and custom grid implementations.

---

## Forms

Every group of form fields should live inside a `<form>` element. Bootstrap provides **no default styling** for `<form>` itself, but the browser provides several powerful native behaviours automatically.

**Two important defaults to remember:**
- `<button>` elements inside a `<form>` default to `type="submit"` — always specify a `type` explicitly to avoid unintended submissions
- Bootstrap applies `display: block` and `width: 100%` to almost all form controls, so forms **stack vertically by default**

### The `<form>` Element — Key Attributes

| Attribute | Values / Default | Description |
|---|---|---|
| `action` | URL | Where form data is sent on submission |
| `method` | `get` (default), `post`, `dialog` | HTTP method used to submit |
| `enctype` | `application/x-www-form-urlencoded` (default), `multipart/form-data`, `text/plain` | MIME type for POST submissions; use `multipart/form-data` when the form contains file inputs |
| `autocomplete` | `on` (default), `off` | Whether the browser can autofill values |
| `novalidate` | boolean | Skips browser validation on submit |
| `target` | `_self` (default), `_blank`, `_parent`, `_top` | Where to display the response |
| `name` | string | Names the form; must be unique in the document |
| `rel` | space-separated list | Controls link annotations (e.g. `noopener`, `noreferrer`) |

```html
<!-- GET form — data appended to URL, no side effects -->
<form method="get">
  <label>
    Name:
    <input name="submitted-name" autocomplete="name" />
  </label>
  <button type="submit">Save</button>
</form>

<!-- POST form — data sent in request body -->
<form method="post">
  <label>
    Name:
    <input name="submitted-name" autocomplete="name" />
  </label>
  <button type="submit">Save</button>
</form>

<!-- With fieldset, legend, and labels -->
<form method="post">
  <fieldset>
    <legend>Do you agree to the terms?</legend>
    <label><input type="radio" name="radio" value="yes" /> Yes</label>
    <label><input type="radio" name="radio" value="no" /> No</label>
  </fieldset>
</form>
```

> **Tip:** Use `:valid` and `:invalid` CSS pseudo-classes to style a `<form>` element based on the validity of its fields.

---

## Utilities

Margin utilities are the simplest way to add structure to forms. They group labels, controls, help text, and validation messages with consistent spacing.

**Best practice:** Stick to `mb-3` (margin-bottom) and use a single spacing direction throughout the form for consistency. Forms can be built with `<fieldset>`, `<div>`, or nearly any other element.

```html
<div class="mb-3">
  <label for="formGroupExampleInput" class="form-label">Example label</label>
  <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Example input placeholder">
</div>
<div class="mb-3">
  <label for="formGroupExampleInput2" class="form-label">Another label</label>
  <input type="text" class="form-control" id="formGroupExampleInput2" placeholder="Another input placeholder">
</div>
```

---

## Form Grid

Use Bootstrap's grid classes (`.row` / `.col`) to build multi-column form layouts. Requires the `$enable-grid-classes` Sass variable to be enabled (on by default).

```html
<div class="row">
  <div class="col">
    <input type="text" class="form-control" placeholder="First name" aria-label="First name">
  </div>
  <div class="col">
    <input type="text" class="form-control" placeholder="Last name" aria-label="Last name">
  </div>
</div>
```

### Gutters

Add gutter modifier classes (`.g-*`, `.gx-*`, `.gy-*`) to control spacing between columns in both directions.

```html
<div class="row g-3">
  <div class="col">
    <input type="text" class="form-control" placeholder="First name" aria-label="First name">
  </div>
  <div class="col">
    <input type="text" class="form-control" placeholder="Last name" aria-label="Last name">
  </div>
</div>
```

### Complex Grid Layout Example

Combine responsive column classes and a checkbox for a full address form:

```html
<form class="row g-3">
  <div class="col-md-6">
    <label for="inputEmail4" class="form-label">Email</label>
    <input type="email" class="form-control" id="inputEmail4">
  </div>
  <div class="col-md-6">
    <label for="inputPassword4" class="form-label">Password</label>
    <input type="password" class="form-control" id="inputPassword4">
  </div>
  <div class="col-12">
    <label for="inputAddress" class="form-label">Address</label>
    <input type="text" class="form-control" id="inputAddress" placeholder="1234 Main St">
  </div>
  <div class="col-12">
    <label for="inputAddress2" class="form-label">Address 2</label>
    <input type="text" class="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor">
  </div>
  <div class="col-md-6">
    <label for="inputCity" class="form-label">City</label>
    <input type="text" class="form-control" id="inputCity">
  </div>
  <div class="col-md-4">
    <label for="inputState" class="form-label">State</label>
    <select id="inputState" class="form-select">
      <option selected>Choose...</option>
      <option>...</option>
    </select>
  </div>
  <div class="col-md-2">
    <label for="inputZip" class="form-label">Zip</label>
    <input type="text" class="form-control" id="inputZip">
  </div>
  <div class="col-12">
    <div class="form-check">
      <input class="form-check-input" type="checkbox" id="gridCheck">
      <label class="form-check-label" for="gridCheck">Check me out</label>
    </div>
  </div>
  <div class="col-12">
    <button type="submit" class="btn btn-primary">Sign in</button>
  </div>
</form>
```

---

## Horizontal Form

Place labels and controls side by side by adding `.row` to form groups, using `.col-*-*` classes for width, and adding `.col-form-label` to labels so they are **vertically centered** with their controls.

> **Tip:** Use `.pt-0` on `<legend>` elements inside a `<fieldset>` to align the text baseline with radio/checkbox inputs.

```html
<form>
  <!-- Email row -->
  <div class="row mb-3">
    <label for="inputEmail3" class="col-sm-2 col-form-label">Email</label>
    <div class="col-sm-10">
      <input type="email" class="form-control" id="inputEmail3">
    </div>
  </div>

  <!-- Password row -->
  <div class="row mb-3">
    <label for="inputPassword3" class="col-sm-2 col-form-label">Password</label>
    <div class="col-sm-10">
      <input type="password" class="form-control" id="inputPassword3">
    </div>
  </div>

  <!-- Radios via fieldset -->
  <fieldset class="row mb-3">
    <legend class="col-form-label col-sm-2 pt-0">Radios</legend>
    <div class="col-sm-10">
      <div class="form-check">
        <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios1" value="option1" checked>
        <label class="form-check-label" for="gridRadios1">First radio</label>
      </div>
      <div class="form-check">
        <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios2" value="option2">
        <label class="form-check-label" for="gridRadios2">Second radio</label>
      </div>
      <div class="form-check disabled">
        <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios3" value="option3" disabled>
        <label class="form-check-label" for="gridRadios3">Third disabled radio</label>
      </div>
    </div>
  </fieldset>

  <!-- Offset checkbox -->
  <div class="row mb-3">
    <div class="col-sm-10 offset-sm-2">
      <div class="form-check">
        <input class="form-check-input" type="checkbox" id="gridCheck1">
        <label class="form-check-label" for="gridCheck1">Example checkbox</label>
      </div>
    </div>
  </div>

  <button type="submit" class="btn btn-primary">Sign in</button>
</form>
```

### Horizontal Form Label Sizing

Match label size to the input size using `.col-form-label-sm` or `.col-form-label-lg` on `<label>` or `<legend>` elements.

| Label class | Pairs with |
|---|---|
| `.col-form-label-sm` | `.form-control-sm` |
| `.col-form-label` | `.form-control` (default) |
| `.col-form-label-lg` | `.form-control-lg` |

```html
<!-- Small -->
<div class="row mb-3">
  <label for="colFormLabelSm" class="col-sm-2 col-form-label col-form-label-sm">Email</label>
  <div class="col-sm-10">
    <input type="email" class="form-control form-control-sm" id="colFormLabelSm" placeholder="col-form-label-sm">
  </div>
</div>

<!-- Default -->
<div class="row mb-3">
  <label for="colFormLabel" class="col-sm-2 col-form-label">Email</label>
  <div class="col-sm-10">
    <input type="email" class="form-control" id="colFormLabel" placeholder="col-form-label">
  </div>
</div>

<!-- Large -->
<div class="row">
  <label for="colFormLabelLg" class="col-sm-2 col-form-label col-form-label-lg">Email</label>
  <div class="col-sm-10">
    <input type="email" class="form-control form-control-lg" id="colFormLabelLg" placeholder="col-form-label-lg">
  </div>
</div>
```

---

## Column Sizing

Use specific column classes to give some fields more or less space, while remaining `.col` elements share the rest equally.

```html
<div class="row g-3">
  <div class="col-sm-7">
    <input type="text" class="form-control" placeholder="City" aria-label="City">
  </div>
  <div class="col-sm">
    <input type="text" class="form-control" placeholder="State" aria-label="State">
  </div>
  <div class="col-sm">
    <input type="text" class="form-control" placeholder="Zip" aria-label="Zip">
  </div>
</div>
```

---

## Auto-sizing

Use `.col-auto` so columns **size themselves to their content** rather than filling available space. Combine with flexbox alignment utilities like `align-items-center` to vertically center all elements.

```html
<form class="row gy-2 gx-3 align-items-center">
  <div class="col-auto">
    <label class="visually-hidden" for="autoSizingInput">Name</label>
    <input type="text" class="form-control" id="autoSizingInput" placeholder="Jane Doe">
  </div>
  <div class="col-auto">
    <label class="visually-hidden" for="autoSizingInputGroup">Username</label>
    <div class="input-group">
      <div class="input-group-text">@</div>
      <input type="text" class="form-control" id="autoSizingInputGroup" placeholder="Username">
    </div>
  </div>
  <div class="col-auto">
    <label class="visually-hidden" for="autoSizingSelect">Preference</label>
    <select class="form-select" id="autoSizingSelect">
      <option selected>Choose...</option>
      <option value="1">One</option>
      <option value="2">Two</option>
      <option value="3">Three</option>
    </select>
  </div>
  <div class="col-auto">
    <div class="form-check">
      <input class="form-check-input" type="checkbox" id="autoSizingCheck">
      <label class="form-check-label" for="autoSizingCheck">Remember me</label>
    </div>
  </div>
  <div class="col-auto">
    <button type="submit" class="btn btn-primary">Submit</button>
  </div>
</form>
```

Mix in responsive column classes for a more controlled auto-sizing layout:

```html
<form class="row gx-3 gy-2 align-items-center">
  <div class="col-sm-3">
    <label class="visually-hidden" for="specificSizeInputName">Name</label>
    <input type="text" class="form-control" id="specificSizeInputName" placeholder="Jane Doe">
  </div>
  <div class="col-sm-3">
    <label class="visually-hidden" for="specificSizeInputGroupUsername">Username</label>
    <div class="input-group">
      <div class="input-group-text">@</div>
      <input type="text" class="form-control" id="specificSizeInputGroupUsername" placeholder="Username">
    </div>
  </div>
  <div class="col-sm-3">
    <label class="visually-hidden" for="specificSizeSelect">Preference</label>
    <select class="form-select" id="specificSizeSelect">
      <option selected>Choose...</option>
      <option value="1">One</option>
      <option value="2">Two</option>
      <option value="3">Three</option>
    </select>
  </div>
  <div class="col-auto">
    <div class="form-check">
      <input class="form-check-input" type="checkbox" id="autoSizingCheck2">
      <label class="form-check-label" for="autoSizingCheck2">Remember me</label>
    </div>
  </div>
  <div class="col-auto">
    <button type="submit" class="btn btn-primary">Submit</button>
  </div>
</form>
```

---

## Inline Forms

Use `.row-cols-lg-auto` with gutter classes to create **responsive horizontal layouts** that collapse to stacked on narrow viewports. Add `align-items-center` to vertically align all elements, which also correctly aligns `.form-check` elements.

- On narrow (mobile) viewports: each item uses `.col-12`, stacking vertically
- On large (`lg`) viewports and above: each item sizes to fit its content inline

```html
<form class="row row-cols-lg-auto g-3 align-items-center">
  <div class="col-12">
    <label class="visually-hidden" for="inlineFormInputGroupUsername">Username</label>
    <div class="input-group">
      <div class="input-group-text">@</div>
      <input type="text" class="form-control" id="inlineFormInputGroupUsername" placeholder="Username">
    </div>
  </div>
  <div class="col-12">
    <label class="visually-hidden" for="inlineFormSelectPref">Preference</label>
    <select class="form-select" id="inlineFormSelectPref">
      <option selected>Choose...</option>
      <option value="1">One</option>
      <option value="2">Two</option>
      <option value="3">Three</option>
    </select>
  </div>
  <div class="col-12">
    <div class="form-check">
      <input class="form-check-input" type="checkbox" id="inlineFormCheck">
      <label class="form-check-label" for="inlineFormCheck">Remember me</label>
    </div>
  </div>
  <div class="col-12">
    <button type="submit" class="btn btn-primary">Submit</button>
  </div>
</form>
```

> **Accessibility note:** When using `visually-hidden` labels (as in auto-sizing and inline forms), always include a `<label>` element with `class="visually-hidden"` — never skip the label entirely.

---

## Layout Patterns — Quick Comparison

| Layout | Key classes | Best used for |
|---|---|---|
| Stacked (default) | `mb-3` on wrappers | Simple, single-column forms |
| Form grid | `.row` + `.col-*` + `.g-*` | Multi-column layouts |
| Horizontal | `.row` + `.col-form-label` + `.col-sm-*` | Label-beside-input alignment |
| Column sizing | `.col-sm-7`, `.col-sm` | Unequal column widths |
| Auto-sizing | `.col-auto` + `align-items-center` | Content-driven column widths |
| Inline | `.row-cols-lg-auto` + `align-items-center` | Responsive horizontal forms |

---

## Quick Reference

| Feature | How to apply |
|---|---|
| Vertical stack (default) | Bootstrap's default — no extra classes needed |
| Consistent spacing | Use `mb-3` on form group wrappers |
| Two-column layout | `.row` + `.col` inside a form |
| Gutters between columns | `.g-3`, `.gx-3`, `.gy-2` on `.row` |
| Horizontal label alignment | `.col-form-label` on `<label>` |
| Horizontal label sizing | `.col-form-label-sm` / `.col-form-label-lg` |
| Offset for checkbox in horizontal form | `.offset-sm-2` on the control column |
| Content-width columns | `.col-auto` |
| Responsive inline form | `.row-cols-lg-auto` + `.g-*` + `.align-items-center` |
| Hidden but accessible labels | `.visually-hidden` on `<label>` |
| Disable browser validation | `novalidate` on `<form>` |
| File upload encoding | `enctype="multipart/form-data"` on `<form>` |

---