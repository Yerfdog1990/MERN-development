# Bootstrap Floating Labels

A guide to Bootstrap's floating labels — beautifully simple form labels that animate over your input fields.

---

## Overview

Wrap a `<input class="form-control">` and `<label>` pair inside `.form-floating` to enable the floating label effect.

**Three requirements:**
1. Each `<input>` must have a **non-empty `placeholder` attribute** — the CSS-only implementation relies on the `:placeholder-shown` pseudo-element to detect when the input is empty. The placeholder text itself is never visible to users; only the label is shown.
2. The **`<input>` must come before the `<label>`** so Bootstrap can use the sibling selector (`~`) to control label positioning.
3. `id` and `for` attributes must match between the input and label.

```html
<div class="form-floating mb-3">
  <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com">
  <label for="floatingInput">Email address</label>
</div>

<div class="form-floating">
  <input type="password" class="form-control" id="floatingPassword" placeholder="Password">
  <label for="floatingPassword">Password</label>
</div>
```

### Pre-filled Value

When an input already has a value, the label automatically adjusts to its floated (raised) position.

```html
<form class="form-floating">
  <input type="email" class="form-control" id="floatingInputValue" placeholder="name@example.com" value="test@example.com">
  <label for="floatingInputValue">Input with value</label>
</form>
```

### With Validation

Validation styles work as expected alongside floating labels.

```html
<form class="form-floating">
  <input type="email" class="form-control is-invalid" id="floatingInputInvalid" placeholder="name@example.com" value="test@example.com">
  <label for="floatingInputInvalid">Invalid input</label>
</form>
```

---

## Textareas

`<textarea class="form-control">` inside `.form-floating` defaults to the same height as a standard `<input>`.

```html
<div class="form-floating">
  <textarea class="form-control" placeholder="Leave a comment here" id="floatingTextarea"></textarea>
  <label for="floatingTextarea">Comments</label>
</div>
```

### Custom Height

> **Do not use the `rows` attribute** to control textarea height inside `.form-floating`. Set an explicit height via inline style or custom CSS instead.

```html
<div class="form-floating">
  <textarea class="form-control" placeholder="Leave a comment here" id="floatingTextarea2" style="height: 100px"></textarea>
  <label for="floatingTextarea2">Comments</label>
</div>
```

---

## Selects

Floating labels work with `.form-select` in the same way as inputs, with one key difference: the label is **always shown in its floated state** (it never drops down into the field).

> **Not supported:** `<select>` with `size` or `multiple` attributes.

```html
<div class="form-floating">
  <select class="form-select" id="floatingSelect" aria-label="Floating label select example">
    <option selected>Open this select menu</option>
    <option value="1">One</option>
    <option value="2">Two</option>
    <option value="3">Three</option>
  </select>
  <label for="floatingSelect">Works with selects</label>
</div>
```

---

## Disabled

Add the `disabled` boolean attribute to any input, textarea, or select inside `.form-floating` to apply a grayed-out appearance, remove pointer events, and prevent focusing.

```html
<!-- Disabled input -->
<div class="form-floating mb-3">
  <input type="email" class="form-control" id="floatingInputDisabled" placeholder="name@example.com" disabled>
  <label for="floatingInputDisabled">Email address</label>
</div>

<!-- Disabled textarea (default height) -->
<div class="form-floating mb-3">
  <textarea class="form-control" placeholder="Leave a comment here" id="floatingTextareaDisabled" disabled></textarea>
  <label for="floatingTextareaDisabled">Comments</label>
</div>

<!-- Disabled textarea (custom height with content) -->
<div class="form-floating mb-3">
  <textarea class="form-control" placeholder="Leave a comment here" id="floatingTextarea2Disabled" style="height: 100px" disabled>Disabled textarea with some text inside</textarea>
  <label for="floatingTextarea2Disabled">Comments</label>
</div>

<!-- Disabled select -->
<div class="form-floating">
  <select class="form-select" id="floatingSelectDisabled" aria-label="Floating label disabled select example" disabled>
    <option selected>Open this select menu</option>
    <option value="1">One</option>
    <option value="2">Two</option>
    <option value="3">Three</option>
  </select>
  <label for="floatingSelectDisabled">Works with selects</label>
</div>
```

---

## Readonly Plaintext

Floating labels support `.form-control-plaintext` for toggling an input from editable to a plain text display **without affecting page layout**.

```html
<!-- Empty plaintext (label stays in field position) -->
<div class="form-floating mb-3">
  <input type="email" readonly class="form-control-plaintext" id="floatingEmptyPlaintextInput" placeholder="name@example.com">
  <label for="floatingEmptyPlaintextInput">Empty input</label>
</div>

<!-- Plaintext with value (label floats automatically) -->
<div class="form-floating mb-3">
  <input type="email" readonly class="form-control-plaintext" id="floatingPlaintextInput" placeholder="name@example.com" value="name@example.com">
  <label for="floatingPlaintextInput">Input with value</label>
</div>
```

---

## Input Groups

Nest `.form-floating` **inside** `.input-group` to combine floating labels with addons.

```html
<div class="input-group mb-3">
  <span class="input-group-text">@</span>
  <div class="form-floating">
    <input type="text" class="form-control" id="floatingInputGroup1" placeholder="Username">
    <label for="floatingInputGroup1">Username</label>
  </div>
</div>
```

### Input Groups with Validation

When combining `.input-group` and `.form-floating` with validation, place the feedback element **outside** `.form-floating` but **inside** `.input-group`. Feedback display must be triggered via JavaScript.

```html
<div class="input-group has-validation">
  <span class="input-group-text">@</span>
  <div class="form-floating is-invalid">
    <input type="text" class="form-control is-invalid" id="floatingInputGroup2" placeholder="Username" required>
    <label for="floatingInputGroup2">Username</label>
  </div>
  <div class="invalid-feedback">
    Please choose a username.
  </div>
</div>
```

**Nesting structure:**
```
.input-group.has-validation
  ├── .input-group-text         (addon)
  ├── .form-floating.is-invalid (floating label wrapper)
  │     ├── input.form-control.is-invalid
  │     └── label
  └── .invalid-feedback         (outside .form-floating)
```

---

## Layout

When using Bootstrap's grid, wrap `.form-floating` elements inside column classes as normal.

```html
<div class="row g-2">
  <div class="col-md">
    <div class="form-floating">
      <input type="email" class="form-control" id="floatingInputGrid" placeholder="name@example.com" value="mdo@example.com">
      <label for="floatingInputGrid">Email address</label>
    </div>
  </div>
  <div class="col-md">
    <div class="form-floating">
      <select class="form-select" id="floatingSelectGrid">
        <option selected>Open this select menu</option>
        <option value="1">One</option>
        <option value="2">Two</option>
        <option value="3">Three</option>
      </select>
      <label for="floatingSelectGrid">Works with selects</label>
    </div>
  </div>
</div>
```

---

## CSS / Sass Variables

All floating label styles are defined in `scss/_variables.scss`.

```scss
$form-floating-height:               add(3.5rem, $input-height-border);
$form-floating-line-height:          1.25;
$form-floating-padding-x:            $input-padding-x;
$form-floating-padding-y:            1rem;
$form-floating-input-padding-t:      1.625rem;
$form-floating-input-padding-b:      .625rem;
$form-floating-label-height:         1.5em;
$form-floating-label-opacity:        .65;
$form-floating-label-transform:      scale(.85) translateY(-.5rem) translateX(.15rem);
$form-floating-label-disabled-color: $gray-600;
$form-floating-transition:           opacity .1s ease-in-out, transform .1s ease-in-out;
```

| Variable | Default | Description |
|---|---|---|
| `$form-floating-height` | `3.5rem + border` | Total height of the floating input |
| `$form-floating-line-height` | `1.25` | Line height inside the field |
| `$form-floating-padding-x` | `$input-padding-x` | Horizontal padding (matches input) |
| `$form-floating-padding-y` | `1rem` | Vertical padding |
| `$form-floating-input-padding-t` | `1.625rem` | Top padding to make room for the floated label |
| `$form-floating-input-padding-b` | `.625rem` | Bottom padding for balanced spacing |
| `$form-floating-label-height` | `1.5em` | Height of the label element |
| `$form-floating-label-opacity` | `.65` | Dimmed opacity of the floated label |
| `$form-floating-label-transform` | `scale(.85) translateY/X` | Shrink and shift applied when label floats |
| `$form-floating-label-disabled-color` | `$gray-600` | Label color when the field is disabled |
| `$form-floating-transition` | `.1s ease-in-out` | Animation for opacity and transform on float |

---

## Quick Reference

| Feature | How to apply |
|---|---|
| Basic floating label | `.form-floating` wrapping `input.form-control` + `label` |
| Input order | `<input>` **must come before** `<label>` |
| Placeholder requirement | Non-empty `placeholder` attribute is **required** on every input |
| Textarea custom height | Use inline `style="height: Xpx"` — **not** the `rows` attribute |
| Select support | Use `.form-select`; label always stays floated |
| Unsupported selects | `size` and `multiple` attributes are not supported |
| Disabled state | Add `disabled` attribute to the input/textarea/select |
| Readonly plaintext | Use `.form-control-plaintext` with `readonly` |
| With input group | Nest `.form-floating` **inside** `.input-group` |
| Validation feedback | Place `.invalid-feedback` outside `.form-floating`, inside `.input-group` |
| Grid layout | Wrap `.form-floating` inside grid column classes as normal |

---