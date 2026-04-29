# Bootstrap Forms Overview

> Complete reference notes with examples, accessibility guidance, and Sass variables.

---

## Table of Contents

1. [Overview](#1-overview)
2. [Disabled Forms](#2-disabled-forms)
3. [Accessibility](#3-accessibility)
4. [CSS & Sass Variables](#4-css--sass-variables)
5. [Form Component Reference](#5-form-component-reference)
6. [Quick Cheat Sheet](#6-quick-cheat-sheet)

---

## 1. Overview

Bootstrap extends browser-default form styles using component classes. These classes opt into customized rendering for a **consistent appearance across browsers and devices**.

> **Key principle:** Always use an appropriate `type` attribute on inputs (e.g., `type="email"`, `type="number"`) to leverage newer browser controls like email verification and number selection.

### 1.1 Quick Example

A basic Bootstrap form with email, password, checkbox, and submit button:

```html
<form>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1"
           aria-describedby="emailHelp">
    <div id="emailHelp" class="form-text">
      We'll never share your email with anyone else.
    </div>
  </div>

  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1">
  </div>

  <div class="mb-3 form-check">
    <input type="checkbox" class="form-check-input" id="exampleCheck1">
    <label class="form-check-label" for="exampleCheck1">Check me out</label>
  </div>

  <button type="submit" class="btn btn-primary">Submit</button>
</form>
```

### 1.2 Key Classes Used

| Class | Purpose |
|---|---|
| `form-label` | Styles the `<label>` element |
| `form-control` | Styles textual `<input>` and `<textarea>` elements |
| `form-text` | Styles helper/hint text beneath an input |
| `form-check` | Wrapper for checkboxes and radios |
| `form-check-input` | Styles the checkbox or radio input |
| `form-check-label` | Styles the label for a checkbox or radio |
| `mb-3` | Bootstrap utility; adds bottom margin spacing |

---

## 2. Disabled Forms

Bootstrap provides two mechanisms for disabling form inputs.

### 2.1 Single Input — `disabled` Attribute

Add the `disabled` boolean attribute to any single `<input>` to prevent interaction and apply a muted visual style:

```html
<input class="form-control"
       id="disabledInput"
       type="text"
       placeholder="Disabled input here..."
       disabled>
```

### 2.2 Entire Fieldset — `<fieldset disabled>`

Adding `disabled` to a `<fieldset>` disables **all** native controls (`<input>`, `<select>`, `<button>`) inside it — both keyboard and mouse interactions:

```html
<form>
  <fieldset disabled>
    <legend>Disabled fieldset example</legend>

    <div class="mb-3">
      <label for="disabledTextInput" class="form-label">Disabled input</label>
      <input type="text" id="disabledTextInput" class="form-control"
             placeholder="Disabled input">
    </div>

    <div class="mb-3">
      <label for="disabledSelect" class="form-label">Disabled select menu</label>
      <select id="disabledSelect" class="form-select">
        <option>Disabled select</option>
      </select>
    </div>

    <div class="mb-3">
      <div class="form-check">
        <input class="form-check-input" type="checkbox"
               id="disabledFieldsetCheck" disabled>
        <label class="form-check-label" for="disabledFieldsetCheck">
          Can't check this
        </label>
      </div>
    </div>

    <button type="submit" class="btn btn-primary">Submit</button>
  </fieldset>
</form>
```

> ⚠️ **Important:** Custom button-like elements (`<a class="btn btn-*">`) are **NOT** disabled by `<fieldset>` — they only receive `pointer-events: none` and remain keyboard-focusable. Fix this manually:
> ```html
> <a class="btn btn-primary" tabindex="-1" aria-disabled="disabled">Link button</a>
> ```

---

## 3. Accessibility

Every form control must have an **accessible name** so assistive technologies (screen readers, etc.) can convey its purpose to users.

### 3.1 Recommended Methods (in order of preference)

1. **Visible `<label>` element** — the simplest and most universally supported approach
2. **Descriptive text inside `<button>`** — for button elements

### 3.2 Alternative Methods (when a visible label isn't possible)

| Method | How it works |
|---|---|
| `.visually-hidden` class | Visually hides a `<label>` while keeping it accessible to screen readers |
| `aria-labelledby` | Points to an existing visible element to act as the label |
| `title` attribute | Provides a tooltip and acts as an accessible name fallback |
| `aria-label` | Explicitly sets the accessible name directly on the element |

> **Note:** The `placeholder` attribute is a last-resort fallback — it disappears when the user types. Always prefer a visible label for both accessibility and usability.

### 3.3 Example — `.visually-hidden` Label

```html
<!-- Label hidden visually, but available to screen readers -->
<label for="searchInput" class="visually-hidden">Search</label>
<input type="search" id="searchInput" class="form-control"
       placeholder="Search...">
```

### 3.4 Example — `aria-label`

```html
<!-- No visible label; accessible name set directly on the input -->
<input type="email" class="form-control"
       aria-label="Email address"
       placeholder="Email address">
```

### 3.5 Example — `aria-labelledby`

```html
<!-- Input labelled by an existing element on the page -->
<h2 id="sectionTitle">Contact Details</h2>
<input type="text" class="form-control" aria-labelledby="sectionTitle">
```

---

## 4. CSS & Sass Variables

Bootstrap forms are built on a shared variable system. Understanding these variables is key for theming and customization.

### 4.1 Variable Architecture

- **`$input-btn-*`** — Global shared variables used by **both** buttons and form components
- **`$input-*`** — Input-specific variables, often reassigned from `$input-btn-*` values

### 4.2 Full `$input-btn-*` Variable Reference

From `scss/_variables.scss`:

```scss
// ── Padding & Font ─────────────────────────────────────────────────────────
$input-btn-padding-y:         .375rem;      // Vertical padding (default size)
$input-btn-padding-x:         .75rem;       // Horizontal padding (default size)
$input-btn-font-family:       null;         // Inherits from body by default
$input-btn-font-size:         $font-size-base;    // Typically 1rem (16px)
$input-btn-line-height:       $line-height-base;  // Typically 1.5

// ── Focus Ring ─────────────────────────────────────────────────────────────
$input-btn-focus-width:         $focus-ring-width;
$input-btn-focus-color-opacity: $focus-ring-opacity;
$input-btn-focus-color:         $focus-ring-color;
$input-btn-focus-blur:          $focus-ring-blur;
$input-btn-focus-box-shadow:    $focus-ring-box-shadow;

// ── Small Size ─────────────────────────────────────────────────────────────
$input-btn-padding-y-sm:      .25rem;
$input-btn-padding-x-sm:      .5rem;
$input-btn-font-size-sm:      $font-size-sm;

// ── Large Size ─────────────────────────────────────────────────────────────
$input-btn-padding-y-lg:      .5rem;
$input-btn-padding-x-lg:      1rem;
$input-btn-font-size-lg:      $font-size-lg;

// ── Border ─────────────────────────────────────────────────────────────────
$input-btn-border-width:      var(--#{$prefix}border-width);
```

### 4.3 How Variables Map to Sizes

| Property | Small (`.sm`) | Default | Large (`.lg`) |
|---|---|---|---|
| Padding Y | `.25rem` | `.375rem` | `.5rem` |
| Padding X | `.5rem` | `.75rem` | `1rem` |
| Font Size | `$font-size-sm` | `$font-size-base` | `$font-size-lg` |

### 4.4 Customizing via Sass

Override variables **before** importing Bootstrap to customize form styles globally:

```scss
// your-custom-styles.scss

// Override before importing Bootstrap
$input-btn-padding-y:    .5rem;    // Taller inputs
$input-btn-padding-x:    1rem;     // Wider inputs
$input-btn-font-size:    1.1rem;   // Slightly larger text
$input-btn-border-width: 2px;      // Thicker borders

// Then import Bootstrap
@import "bootstrap";
```

---

## 5. Form Component Reference

Bootstrap provides specialized classes for each type of form control:

| Component | Class / Element | Notes |
|---|---|---|
| Text / Textarea | `.form-control` | Styled inputs and textareas with multiple states |
| Select | `.form-select` | Custom initial appearance over browser default |
| Checkboxes & Radios | `.form-check`, `.form-check-input`, `.form-check-label` | Custom styled check/radio controls |
| Range | `.form-range` | Replaces browser default range slider |
| Input Group | `.input-group` | Attach labels/buttons to inputs |
| Floating Labels | `.form-floating` | Labels that float above the input field |
| Layout | Grid / `.row` / `.col-*` | Inline, horizontal, or grid-based layouts |
| Validation | `.is-valid`, `.is-invalid`, `.was-validated` | Custom or native validation feedback |

---

## 6. Quick Cheat Sheet

```html
<!-- ── Text Input ───────────────────────────────────────────────────── -->
<input type="text" class="form-control">

<!-- ── Select ───────────────────────────────────────────────────────── -->
<select class="form-select">
  <option>Option 1</option>
</select>

<!-- ── Checkbox ─────────────────────────────────────────────────────── -->
<div class="form-check">
  <input class="form-check-input" type="checkbox" id="cb1">
  <label class="form-check-label" for="cb1">Label</label>
</div>

<!-- ── Radio ────────────────────────────────────────────────────────── -->
<div class="form-check">
  <input class="form-check-input" type="radio" name="r" id="r1">
  <label class="form-check-label" for="r1">Option A</label>
</div>

<!-- ── Range ────────────────────────────────────────────────────────── -->
<input type="range" class="form-range">

<!-- ── Floating Label ───────────────────────────────────────────────── -->
<div class="form-floating">
  <input type="email" class="form-control" id="floatEmail"
         placeholder="name@example.com">
  <label for="floatEmail">Email address</label>
</div>

<!-- ── Input Group ──────────────────────────────────────────────────── -->
<div class="input-group">
  <span class="input-group-text">@</span>
  <input type="text" class="form-control" placeholder="Username">
</div>

<!-- ── Validation ───────────────────────────────────────────────────── -->
<input type="text" class="form-control is-valid">
<div class="valid-feedback">Looks good!</div>

<input type="text" class="form-control is-invalid">
<div class="invalid-feedback">Please provide a valid value.</div>

<!-- ── Disabled Single Input ────────────────────────────────────────── -->
<input type="text" class="form-control" disabled>

<!-- ── Disabled Fieldset ────────────────────────────────────────────── -->
<fieldset disabled>
  <input type="text" class="form-control">
  <select class="form-select"><option>...</option></select>
  <button class="btn btn-primary">Submit</button>
</fieldset>
```

---
