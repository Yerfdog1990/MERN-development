# Bootstrap Form Controls

> Detailed notes on styling `<input>`s and `<textarea>`s with custom styles, sizing, states, and more.

---

## Table of Contents

1. [Example](#1-example)
2. [Sizing](#2-sizing)
3. [Form Text](#3-form-text)
4. [Disabled](#4-disabled)
5. [Readonly](#5-readonly)
6. [Readonly Plain Text](#6-readonly-plain-text)
7. [File Input](#7-file-input)
8. [Color](#8-color)
9. [Datalists](#9-datalists)
10. [CSS & Sass Variables](#10-css--sass-variables)

---

## 1. Example

Form controls are styled with a mix of **Sass and CSS variables**, allowing them to adapt to color modes and support any customization method.

The `.form-control` class applies to textual `<input>` and `<textarea>` elements.

```html
<div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label">Email address</label>
  <input type="email" class="form-control" id="exampleFormControlInput1"
         placeholder="name@example.com">
</div>

<div class="mb-3">
  <label for="exampleFormControlTextarea1" class="form-label">Example textarea</label>
  <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
</div>
```

---

## 2. Sizing

Control the height of inputs using modifier classes. The width is always 100% by default unless constrained by a grid or container.

| Class | Description |
|---|---|
| `.form-control-lg` | Large input — more padding, larger font |
| `.form-control` | Default size |
| `.form-control-sm` | Small input — less padding, smaller font |

```html
<!-- Large -->
<input class="form-control form-control-lg" type="text"
       placeholder=".form-control-lg" aria-label=".form-control-lg example">

<!-- Default -->
<input class="form-control" type="text"
       placeholder="Default input" aria-label="default input example">

<!-- Small -->
<input class="form-control form-control-sm" type="text"
       placeholder=".form-control-sm" aria-label=".form-control-sm example">
```

> These size classes also apply to file inputs and selects — see sections 7 and the Form Component Reference.

---

## 3. Form Text

Block-level or inline-level hint/helper text can be created using `.form-text`.

> ⚠️ **Accessibility:** Always associate form text with its input using `aria-describedby`. This ensures screen readers announce the hint when the user focuses the control.

### 3.1 Block-Level Form Text

Placed below the input, `.form-text` on a block element (e.g. `<div>`) automatically adds a top margin for spacing.

```html
<label for="inputPassword5" class="form-label">Password</label>
<input type="password" id="inputPassword5" class="form-control"
       aria-describedby="passwordHelpBlock">
<div id="passwordHelpBlock" class="form-text">
  Your password must be 8-20 characters long, contain letters and numbers,
  and must not contain spaces, special characters, or emoji.
</div>
```

### 3.2 Inline Form Text

Use any inline HTML element (`<span>`, `<small>`, etc.) with `.form-text` for inline hints.

```html
<div class="row g-3 align-items-center">
  <div class="col-auto">
    <label for="inputPassword6" class="col-form-label">Password</label>
  </div>
  <div class="col-auto">
    <input type="password" id="inputPassword6" class="form-control"
           aria-describedby="passwordHelpInline">
  </div>
  <div class="col-auto">
    <span id="passwordHelpInline" class="form-text">
      Must be 8-20 characters long.
    </span>
  </div>
</div>
```

---

## 4. Disabled

Add the `disabled` boolean attribute to give an input a **grayed-out appearance**, remove pointer events, and prevent focusing.

```html
<!-- Disabled empty input -->
<input class="form-control" type="text"
       placeholder="Disabled input"
       aria-label="Disabled input example"
       disabled>

<!-- Disabled with a pre-filled value -->
<input class="form-control" type="text"
       value="Disabled readonly input"
       aria-label="Disabled input example"
       disabled readonly>
```

**What `disabled` does:**
- Grays out the input visually
- Removes pointer events (no click/hover)
- Prevents focus via keyboard or mouse

---

## 5. Readonly

Add the `readonly` boolean attribute to **prevent value modification** while still allowing the input to be focused and selected.

```html
<input class="form-control" type="text"
       value="Readonly input here..."
       aria-label="readonly input example"
       readonly>
```

**`readonly` vs `disabled` — key difference:**

| Behaviour | `disabled` | `readonly` |
|---|---|---|
| Grayed out visually | ✅ | ❌ |
| Prevents value change | ✅ | ✅ |
| Can be focused | ❌ | ✅ |
| Can be selected/copied | ❌ | ✅ |
| Submitted with form | ❌ | ✅ |

---

## 6. Readonly Plain Text

To display a `readonly` input as **plain text** (no border, no background), replace `.form-control` with `.form-control-plaintext`. This removes default form field styling while preserving correct margin and padding.

### 6.1 Horizontal Layout

```html
<div class="mb-3 row">
  <label for="staticEmail" class="col-sm-2 col-form-label">Email</label>
  <div class="col-sm-10">
    <input type="text" readonly class="form-control-plaintext"
           id="staticEmail" value="email@example.com">
  </div>
</div>

<div class="mb-3 row">
  <label for="inputPassword" class="col-sm-2 col-form-label">Password</label>
  <div class="col-sm-10">
    <input type="password" class="form-control" id="inputPassword">
  </div>
</div>
```

### 6.2 Inline Layout with Hidden Labels

```html
<form class="row g-3">
  <div class="col-auto">
    <label for="staticEmail2" class="visually-hidden">Email</label>
    <input type="text" readonly class="form-control-plaintext"
           id="staticEmail2" value="email@example.com">
  </div>
  <div class="col-auto">
    <label for="inputPassword2" class="visually-hidden">Password</label>
    <input type="password" class="form-control" id="inputPassword2"
           placeholder="Password">
  </div>
  <div class="col-auto">
    <button type="submit" class="btn btn-primary mb-3">Confirm identity</button>
  </div>
</form>
```

> Use `.visually-hidden` on labels when a visible label is not needed — the label remains accessible to screen readers.

---

## 7. File Input

File inputs use `.form-control` just like text inputs. Sizing modifier classes (`.form-control-sm`, `.form-control-lg`) work here too.

```html
<!-- Default -->
<div class="mb-3">
  <label for="formFile" class="form-label">Default file input example</label>
  <input class="form-control" type="file" id="formFile">
</div>

<!-- Multiple files -->
<div class="mb-3">
  <label for="formFileMultiple" class="form-label">Multiple files input example</label>
  <input class="form-control" type="file" id="formFileMultiple" multiple>
</div>

<!-- Disabled -->
<div class="mb-3">
  <label for="formFileDisabled" class="form-label">Disabled file input example</label>
  <input class="form-control" type="file" id="formFileDisabled" disabled>
</div>

<!-- Small -->
<div class="mb-3">
  <label for="formFileSm" class="form-label">Small file input example</label>
  <input class="form-control form-control-sm" id="formFileSm" type="file">
</div>

<!-- Large -->
<div>
  <label for="formFileLg" class="form-label">Large file input example</label>
  <input class="form-control form-control-lg" id="formFileLg" type="file">
</div>
```

**File input variants summary:**

| Variant | How to achieve |
|---|---|
| Default | `class="form-control" type="file"` |
| Multiple files | Add `multiple` attribute |
| Disabled | Add `disabled` attribute |
| Small | Add `.form-control-sm` |
| Large | Add `.form-control-lg` |

---

## 8. Color

For color picker inputs, use `type="color"` and add the `.form-control-color` modifier class. This sets a **fixed height** and overrides browser inconsistencies.

```html
<label for="exampleColorInput" class="form-label">Color picker</label>
<input type="color" class="form-control form-control-color"
       id="exampleColorInput" value="#563d7c" title="Choose your color">
```

**Classes used:**
- `.form-control` — base form control styles
- `.form-control-color` — sets fixed height and fixes cross-browser rendering issues

---

## 9. Datalists

Datalists create a group of `<option>`s that can be accessed (and autocompleted) from within an `<input>`. Link them using the `list` attribute on the input and a matching `id` on the `<datalist>`.

```html
<label for="exampleDataList" class="form-label">Datalist example</label>
<input class="form-control" list="datalistOptions"
       id="exampleDataList" placeholder="Type to search...">

<datalist id="datalistOptions">
  <option value="San Francisco">
  <option value="New York">
  <option value="Seattle">
  <option value="Los Angeles">
  <option value="Chicago">
</datalist>
```

**Datalists vs Selects:**

| Feature | `<datalist>` | `<select>` |
|---|---|---|
| Allows free text entry | ✅ | ❌ |
| Provides autocomplete suggestions | ✅ | ❌ |
| Consistent cross-browser styling | ❌ | ✅ (with `.form-select`) |
| Menu styling control | Limited | Full |

> ⚠️ Datalist styling is **inconsistent across browsers and OS**. Use with caution in production.

---

## 10. CSS & Sass Variables

Bootstrap form controls are built on three layers of Sass variables.

### 10.1 `$input-*` Variables

Shared across most form controls (not buttons). These inherit from `$input-btn-*` global variables.

```scss
// ── Padding & Font ─────────────────────────────────────────────────────────
$input-padding-y:          $input-btn-padding-y;
$input-padding-x:          $input-btn-padding-x;
$input-font-family:        $input-btn-font-family;
$input-font-size:          $input-btn-font-size;
$input-font-weight:        $font-weight-base;
$input-line-height:        $input-btn-line-height;

// ── Sizing Variants ─────────────────────────────────────────────────────────
$input-padding-y-sm:       $input-btn-padding-y-sm;
$input-padding-x-sm:       $input-btn-padding-x-sm;
$input-font-size-sm:       $input-btn-font-size-sm;

$input-padding-y-lg:       $input-btn-padding-y-lg;
$input-padding-x-lg:       $input-btn-padding-x-lg;
$input-font-size-lg:       $input-btn-font-size-lg;

// ── Colors ──────────────────────────────────────────────────────────────────
$input-bg:                 var(--#{$prefix}body-bg);
$input-disabled-color:     null;
$input-disabled-bg:        var(--#{$prefix}secondary-bg);
$input-disabled-border-color: null;

$input-color:              var(--#{$prefix}body-color);
$input-border-color:       var(--#{$prefix}border-color);
$input-border-width:       $input-btn-border-width;
$input-box-shadow:         var(--#{$prefix}box-shadow-inset);

// ── Border Radius ───────────────────────────────────────────────────────────
$input-border-radius:      var(--#{$prefix}border-radius);
$input-border-radius-sm:   var(--#{$prefix}border-radius-sm);
$input-border-radius-lg:   var(--#{$prefix}border-radius-lg);

// ── Focus State ─────────────────────────────────────────────────────────────
$input-focus-bg:           $input-bg;
$input-focus-border-color: tint-color($component-active-bg, 50%);
$input-focus-color:        $input-color;
$input-focus-width:        $input-btn-focus-width;
$input-focus-box-shadow:   $input-btn-focus-box-shadow;

// ── Placeholder ─────────────────────────────────────────────────────────────
$input-placeholder-color:  var(--#{$prefix}secondary-color);
$input-plaintext-color:    var(--#{$prefix}body-color);

// ── Height Calculations ─────────────────────────────────────────────────────
$input-height-border:      calc(#{$input-border-width} * 2);

$input-height-inner:         add($input-line-height * 1em, $input-padding-y * 2);
$input-height-inner-half:    add($input-line-height * .5em, $input-padding-y);
$input-height-inner-quarter: add($input-line-height * .25em, $input-padding-y * .5);

$input-height:    add($input-line-height * 1em, add($input-padding-y * 2, $input-height-border, false));
$input-height-sm: add($input-line-height * 1em, add($input-padding-y-sm * 2, $input-height-border, false));
$input-height-lg: add($input-line-height * 1em, add($input-padding-y-lg * 2, $input-height-border, false));

// ── Transition ──────────────────────────────────────────────────────────────
$input-transition: border-color .15s ease-in-out, box-shadow .15s ease-in-out;

// ── Color Input ─────────────────────────────────────────────────────────────
$form-color-width: 3rem;
```

### 10.2 `$form-label-*` Variables

Controls the styling of `<label>` elements.

```scss
$form-label-margin-bottom: .5rem;
$form-label-font-size:     null;    // Inherits by default
$form-label-font-style:    null;
$form-label-font-weight:   null;
$form-label-color:         null;
```

### 10.3 `$form-text-*` Variables

Controls the `.form-text` helper text component.

```scss
$form-text-margin-top:  .25rem;
$form-text-font-size:   $small-font-size;
$form-text-font-style:  null;
$form-text-font-weight: null;
$form-text-color:       var(--#{$prefix}secondary-color);
```

### 10.4 `$form-file-*` Variables

Controls the file input button styling.

```scss
$form-file-button-color:     $input-color;
$form-file-button-bg:        var(--#{$prefix}tertiary-bg);
$form-file-button-hover-bg:  var(--#{$prefix}secondary-bg);
```

### 10.5 Variable Group Summary

| Variable Group | Applies To |
|---|---|
| `$input-*` | All textual form controls (`<input>`, `<textarea>`) |
| `$input-btn-*` | Shared between inputs AND buttons |
| `$form-label-*` | `<label>` elements |
| `$form-text-*` | `.form-text` helper/hint text |
| `$form-file-*` | File input button area |

### 10.6 Customization Example

Override variables before importing Bootstrap:

```scss
// _custom.scss

// Taller inputs with more padding
$input-padding-y:    .6rem;
$input-padding-x:    1rem;

// Custom border and focus
$input-border-color:        #adb5bd;
$input-focus-border-color:  #86b7fe;

// Larger label text
$form-label-font-weight: 600;
$form-label-color:       #212529;

// Subtler helper text
$form-text-color: #6c757d;

// Then import Bootstrap
@import "bootstrap";
```

---

## Quick Reference Cheat Sheet

```html
<!-- Text Input -->
<input type="text" class="form-control" placeholder="Default">

<!-- Large / Small -->
<input type="text" class="form-control form-control-lg" placeholder="Large">
<input type="text" class="form-control form-control-sm" placeholder="Small">

<!-- Textarea -->
<textarea class="form-control" rows="3"></textarea>

<!-- With Label + Helper Text -->
<label for="i1" class="form-label">Field</label>
<input type="text" id="i1" class="form-control" aria-describedby="i1Help">
<div id="i1Help" class="form-text">Some helpful hint here.</div>

<!-- Disabled -->
<input type="text" class="form-control" disabled>

<!-- Readonly -->
<input type="text" class="form-control" readonly value="Cannot edit">

<!-- Readonly Plain Text (no border/bg) -->
<input type="text" class="form-control-plaintext" readonly value="Plain text">

<!-- File — Default / Multiple / Small / Large -->
<input type="file" class="form-control">
<input type="file" class="form-control" multiple>
<input type="file" class="form-control form-control-sm">
<input type="file" class="form-control form-control-lg">

<!-- Color Picker -->
<input type="color" class="form-control form-control-color" value="#563d7c">

<!-- Datalist -->
<input class="form-control" list="opts" placeholder="Type to search...">
<datalist id="opts">
  <option value="Option A">
  <option value="Option B">
  <option value="Option C">
</datalist>
```

---
