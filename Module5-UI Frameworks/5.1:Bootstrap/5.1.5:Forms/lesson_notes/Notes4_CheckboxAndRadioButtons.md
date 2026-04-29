# Bootstrap Checks and Radios

A complete guide to Bootstrap's rewritten checks component for consistent cross-browser checkboxes, radios, switches, and toggle buttons.

---

## Approach

Bootstrap replaces browser-default checkboxes and radios using the `.form-check` class. Key design decisions:

- `<input>` and `<label>` are **sibling elements**, not nested — requiring matching `id` and `for` attributes
- The **sibling selector (`~`)** targets all input states like `:checked` or `:disabled`
- Custom Bootstrap icons indicate **checked** and **indeterminate** states

---

## Checkboxes

### Basic Checkboxes

```html
<div class="form-check">
  <input class="form-check-input" type="checkbox" value="" id="checkDefault">
  <label class="form-check-label" for="checkDefault">
    Default checkbox
  </label>
</div>

<div class="form-check">
  <input class="form-check-input" type="checkbox" value="" id="checkChecked" checked>
  <label class="form-check-label" for="checkChecked">
    Checked checkbox
  </label>
</div>
```

### Indeterminate Checkbox

There is no HTML attribute for the indeterminate state — it must be set via **JavaScript**.

```html
<div class="form-check">
  <input class="form-check-input" type="checkbox" value="" id="checkIndeterminate">
  <label class="form-check-label" for="checkIndeterminate">
    Indeterminate checkbox
  </label>
</div>
```

```js
// Set indeterminate state via JS
document.getElementById('checkIndeterminate').indeterminate = true;
```

### Disabled Checkboxes

Add the `disabled` attribute. Associated `<label>` elements are automatically styled with a lighter color.

```html
<!-- Disabled indeterminate -->
<div class="form-check">
  <input class="form-check-input" type="checkbox" value="" id="checkIndeterminateDisabled" disabled>
  <label class="form-check-label" for="checkIndeterminateDisabled">
    Disabled indeterminate checkbox
  </label>
</div>

<!-- Disabled unchecked -->
<div class="form-check">
  <input class="form-check-input" type="checkbox" value="" id="checkDisabled" disabled>
  <label class="form-check-label" for="checkDisabled">
    Disabled checkbox
  </label>
</div>

<!-- Disabled checked -->
<div class="form-check">
  <input class="form-check-input" type="checkbox" value="" id="checkCheckedDisabled" checked disabled>
  <label class="form-check-label" for="checkCheckedDisabled">
    Disabled checked checkbox
  </label>
</div>
```

---

## Radios

### Basic Radios

```html
<div class="form-check">
  <input class="form-check-input" type="radio" name="radioDefault" id="radioDefault1">
  <label class="form-check-label" for="radioDefault1">
    Default radio
  </label>
</div>

<div class="form-check">
  <input class="form-check-input" type="radio" name="radioDefault" id="radioDefault2" checked>
  <label class="form-check-label" for="radioDefault2">
    Default checked radio
  </label>
</div>
```

### Disabled Radios

```html
<div class="form-check">
  <input class="form-check-input" type="radio" name="radioDisabled" id="radioDisabled" disabled>
  <label class="form-check-label" for="radioDisabled">
    Disabled radio
  </label>
</div>

<div class="form-check">
  <input class="form-check-input" type="radio" name="radioDisabled" id="radioCheckedDisabled" checked disabled>
  <label class="form-check-label" for="radioCheckedDisabled">
    Disabled checked radio
  </label>
</div>
```

---

## Switches

Switches use the **checkbox markup** but add the `.form-switch` class. Use `role="switch"` for better accessibility with assistive technologies.

```html
<!-- Default -->
<div class="form-check form-switch">
  <input class="form-check-input" type="checkbox" role="switch" id="switchCheckDefault">
  <label class="form-check-label" for="switchCheckDefault">Default switch checkbox input</label>
</div>

<!-- Checked -->
<div class="form-check form-switch">
  <input class="form-check-input" type="checkbox" role="switch" id="switchCheckChecked" checked>
  <label class="form-check-label" for="switchCheckChecked">Checked switch checkbox input</label>
</div>

<!-- Disabled -->
<div class="form-check form-switch">
  <input class="form-check-input" type="checkbox" role="switch" id="switchCheckDisabled" disabled>
  <label class="form-check-label" for="switchCheckDisabled">Disabled switch checkbox input</label>
</div>

<!-- Disabled + Checked -->
<div class="form-check form-switch">
  <input class="form-check-input" type="checkbox" role="switch" id="switchCheckCheckedDisabled" checked disabled>
  <label class="form-check-label" for="switchCheckCheckedDisabled">Disabled checked switch checkbox input</label>
</div>
```

> **Accessibility tip:** Assistive technologies that support `role="switch"` will announce these as switches. Older technologies fall back to announcing them as checkboxes.

### Native Switches (iOS 17.4+)

Add the `switch` attribute to enable **haptic feedback** in mobile Safari — no Bootstrap style changes are attached.

```html
<div class="form-check form-switch">
  <input class="form-check-input" type="checkbox" value="" id="checkNativeSwitch" switch>
  <label class="form-check-label" for="checkNativeSwitch">
    Native switch haptics
  </label>
</div>
```

> Supported in Safari 17.4+ on macOS and iOS. Other browsers fall back to the standard checkbox appearance.

---

## Layout Options

### Default (Stacked)

Checkboxes and radios that are immediate siblings are **vertically stacked** by default with `.form-check`.

```html
<div class="form-check">
  <input class="form-check-input" type="checkbox" value="" id="defaultCheck1">
  <label class="form-check-label" for="defaultCheck1">Default checkbox</label>
</div>
<div class="form-check">
  <input class="form-check-input" type="checkbox" value="" id="defaultCheck2" disabled>
  <label class="form-check-label" for="defaultCheck2">Disabled checkbox</label>
</div>
```

### Inline

Add `.form-check-inline` to place checkboxes or radios on the **same horizontal row**.

```html
<div class="form-check form-check-inline">
  <input class="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1">
  <label class="form-check-label" for="inlineCheckbox1">1</label>
</div>
<div class="form-check form-check-inline">
  <input class="form-check-input" type="checkbox" id="inlineCheckbox2" value="option2">
  <label class="form-check-label" for="inlineCheckbox2">2</label>
</div>
<div class="form-check form-check-inline">
  <input class="form-check-input" type="checkbox" id="inlineCheckbox3" value="option3" disabled>
  <label class="form-check-label" for="inlineCheckbox3">3 (disabled)</label>
</div>
```

### Reverse

Use `.form-check-reverse` to place the input on the **opposite side** of the label.

```html
<div class="form-check form-check-reverse">
  <input class="form-check-input" type="checkbox" value="" id="reverseCheck1">
  <label class="form-check-label" for="reverseCheck1">Reverse checkbox</label>
</div>

<div class="form-check form-check-reverse">
  <input class="form-check-input" type="checkbox" value="" id="reverseCheck2" disabled>
  <label class="form-check-label" for="reverseCheck2">Disabled reverse checkbox</label>
</div>

<!-- Reverse switch -->
<div class="form-check form-switch form-check-reverse">
  <input class="form-check-input" type="checkbox" id="switchCheckReverse">
  <label class="form-check-label" for="switchCheckReverse">Reverse switch checkbox input</label>
</div>
```

### Without Labels

Omit the `.form-check` wrapper and provide an `aria-label` for accessibility.

```html
<div>
  <input class="form-check-input" type="checkbox" id="checkboxNoLabel" value="" aria-label="...">
</div>

<div>
  <input class="form-check-input" type="radio" name="radioNoLabel" id="radioNoLabel1" value="" aria-label="...">
</div>
```

---

## Toggle Buttons

Create button-styled checkboxes and radios by using `.btn` classes on the `<label>` instead of `.form-check-label`.

### Checkbox Toggle Buttons

```html
<input type="checkbox" class="btn-check" id="btn-check" autocomplete="off">
<label class="btn btn-primary" for="btn-check">Single toggle</label>

<input type="checkbox" class="btn-check" id="btn-check-2" checked autocomplete="off">
<label class="btn btn-primary" for="btn-check-2">Checked</label>

<input type="checkbox" class="btn-check" id="btn-check-3" autocomplete="off" disabled>
<label class="btn btn-primary" for="btn-check-3">Disabled</label>
```

> **Accessibility note:** Checkbox toggle buttons are announced as "checked"/"not checked" by screen readers — unlike button plugin toggles which are announced as "button"/"button pressed".

### Radio Toggle Buttons

```html
<input type="radio" class="btn-check" name="options" id="option1" autocomplete="off" checked>
<label class="btn btn-secondary" for="option1">Checked</label>

<input type="radio" class="btn-check" name="options" id="option2" autocomplete="off">
<label class="btn btn-secondary" for="option2">Radio</label>

<input type="radio" class="btn-check" name="options" id="option3" autocomplete="off" disabled>
<label class="btn btn-secondary" for="option3">Disabled</label>

<input type="radio" class="btn-check" name="options" id="option4" autocomplete="off">
<label class="btn btn-secondary" for="option4">Radio</label>
```

### Outlined Styles

All `.btn-outline-*` variants are supported for toggle buttons.

```html
<!-- Outlined checkbox -->
<input type="checkbox" class="btn-check" id="btn-check-outlined" autocomplete="off">
<label class="btn btn-outline-primary" for="btn-check-outlined">Single toggle</label>

<input type="checkbox" class="btn-check" id="btn-check-2-outlined" checked autocomplete="off">
<label class="btn btn-outline-secondary" for="btn-check-2-outlined">Checked</label>

<!-- Outlined radios -->
<input type="radio" class="btn-check" name="options-outlined" id="success-outlined" autocomplete="off" checked>
<label class="btn btn-outline-success" for="success-outlined">Checked success radio</label>

<input type="radio" class="btn-check" name="options-outlined" id="danger-outlined" autocomplete="off">
<label class="btn btn-outline-danger" for="danger-outlined">Danger radio</label>
```

---

## CSS / Sass Variables

### Checkbox & Radio Variables (`scss/_variables.scss`)

| Variable | Default | Description |
|---|---|---|
| `$form-check-input-width` | `1em` | Size of the input |
| `$form-check-padding-start` | `input-width + .5em` | Label padding offset |
| `$form-check-margin-bottom` | `.125rem` | Spacing between stacked items |
| `$form-check-input-border-radius` | `.25em` | Checkbox corner radius |
| `$form-check-radio-border-radius` | `50%` | Radio corner radius (circular) |
| `$form-check-input-disabled-opacity` | `.5` | Opacity for disabled inputs |
| `$form-check-inline-margin-end` | `1rem` | Spacing between inline items |

```scss
$form-check-input-width:                  1em;
$form-check-min-height:                   $font-size-base * $line-height-base;
$form-check-padding-start:                $form-check-input-width + .5em;
$form-check-margin-bottom:                .125rem;
$form-check-input-active-filter:          brightness(90%);

$form-check-input-bg:                     $input-bg;
$form-check-input-border:                 var(--#{$prefix}border-width) solid var(--#{$prefix}border-color);
$form-check-input-border-radius:          .25em;
$form-check-radio-border-radius:          50%;
$form-check-input-focus-border:           $input-focus-border-color;
$form-check-input-focus-box-shadow:       $focus-ring-box-shadow;

$form-check-input-checked-color:          $component-active-color;
$form-check-input-checked-bg-color:       $component-active-bg;
$form-check-input-checked-border-color:   $form-check-input-checked-bg-color;

$form-check-input-indeterminate-color:          $component-active-color;
$form-check-input-indeterminate-bg-color:       $component-active-bg;
$form-check-input-indeterminate-border-color:   $form-check-input-indeterminate-bg-color;

$form-check-input-disabled-opacity:        .5;
$form-check-label-disabled-opacity:        $form-check-input-disabled-opacity;
$form-check-btn-check-disabled-opacity:    $btn-disabled-opacity;
$form-check-inline-margin-end:             1rem;
```

### Switch Variables (`scss/_variables.scss`)

| Variable | Default | Description |
|---|---|---|
| `$form-switch-width` | `2em` | Width of the switch track |
| `$form-switch-padding-start` | `width + .5em` | Label offset |
| `$form-switch-border-radius` | `$form-switch-width` | Pill-shaped track |
| `$form-switch-transition` | `background-position .15s ease-in-out` | Thumb slide animation |

```scss
$form-switch-color:               rgba($black, .25);
$form-switch-width:               2em;
$form-switch-padding-start:       $form-switch-width + .5em;
$form-switch-border-radius:       $form-switch-width;
$form-switch-transition:          background-position .15s ease-in-out;

$form-switch-focus-color:         $input-focus-border-color;

$form-switch-checked-color:       $component-active-color;
$form-switch-checked-bg-position: right center;
```

---

## Quick Reference

| Component | Key Class(es) |
|---|---|
| Checkbox / Radio wrapper | `.form-check` |
| Input element | `.form-check-input` |
| Label element | `.form-check-label` |
| Switch | `.form-check` + `.form-switch` |
| Inline layout | `.form-check-inline` |
| Reverse layout | `.form-check-reverse` |
| Toggle button input | `.btn-check` |
| Toggle button label | `.btn` + `.btn-*` or `.btn-outline-*` |

---