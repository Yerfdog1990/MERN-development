# Bootstrap Form Validation

Provide valuable, actionable feedback to users with HTML5 form validation — via browser default behaviors, custom Bootstrap styles, or server-side classes.

---

> **Accessibility warning:** Client-side custom validation styles and tooltips are currently **not exposed to assistive technologies**. Until a fix is shipped, use the server-side option or browser-default validation for accessible implementations.

---

## How It Works

- Validation is applied via CSS pseudo-classes **`:invalid`** and **`:valid`** on `<input>`, `<select>`, and `<textarea>` elements
- Bootstrap scopes these styles to a **`.was-validated`** parent (usually `<form>`) to prevent required-but-empty fields from appearing invalid on initial page load
- To **reset** validation appearance (e.g. after an Ajax submission), remove `.was-validated` from the form
- **`.is-valid`** and **`.is-invalid`** can be used as fallbacks for server-side validation — no `.was-validated` parent required
- CSS cannot currently style a `<label>` that comes before its form control without custom JavaScript
- All modern browsers support the **Constraint Validation API** for validating controls via JavaScript
- Custom validity messages can be set via **`setCustomValidity()`** in JavaScript

---

## Custom Styles

Add `novalidate` to `<form>` to disable browser default tooltips while retaining access to the validation API. JavaScript adds `.was-validated` on submission to reveal `:valid` / `:invalid` styling.

> Background validation icons on `<select>` elements are only available with `.form-select`, not `.form-control`.

```html
<form class="row g-3 needs-validation" novalidate>
  <div class="col-md-4">
    <label for="validationCustom01" class="form-label">First name</label>
    <input type="text" class="form-control" id="validationCustom01" value="Mark" required>
    <div class="valid-feedback">Looks good!</div>
  </div>
  <div class="col-md-4">
    <label for="validationCustom02" class="form-label">Last name</label>
    <input type="text" class="form-control" id="validationCustom02" value="Otto" required>
    <div class="valid-feedback">Looks good!</div>
  </div>
  <div class="col-md-4">
    <label for="validationCustomUsername" class="form-label">Username</label>
    <div class="input-group has-validation">
      <span class="input-group-text" id="inputGroupPrepend">@</span>
      <input type="text" class="form-control" id="validationCustomUsername" aria-describedby="inputGroupPrepend" required>
      <div class="invalid-feedback">Please choose a username.</div>
    </div>
  </div>
  <div class="col-md-6">
    <label for="validationCustom03" class="form-label">City</label>
    <input type="text" class="form-control" id="validationCustom03" required>
    <div class="invalid-feedback">Please provide a valid city.</div>
  </div>
  <div class="col-md-3">
    <label for="validationCustom04" class="form-label">State</label>
    <select class="form-select" id="validationCustom04" required>
      <option selected disabled value="">Choose...</option>
      <option>...</option>
    </select>
    <div class="invalid-feedback">Please select a valid state.</div>
  </div>
  <div class="col-md-3">
    <label for="validationCustom05" class="form-label">Zip</label>
    <input type="text" class="form-control" id="validationCustom05" required>
    <div class="invalid-feedback">Please provide a valid zip.</div>
  </div>
  <div class="col-12">
    <div class="form-check">
      <input class="form-check-input" type="checkbox" value="" id="invalidCheck" required>
      <label class="form-check-label" for="invalidCheck">Agree to terms and conditions</label>
      <div class="invalid-feedback">You must agree before submitting.</div>
    </div>
  </div>
  <div class="col-12">
    <button class="btn btn-primary" type="submit">Submit form</button>
  </div>
</form>
```

### Required JavaScript

```js
(() => {
  'use strict'

  const forms = document.querySelectorAll('.needs-validation')

  Array.from(forms).forEach(form => {
    form.addEventListener('submit', event => {
      if (!form.checkValidity()) {
        event.preventDefault()     // Block submission
        event.stopPropagation()    // Stop event bubbling
      }
      form.classList.add('was-validated')  // Reveal validation styles
    }, false)
  })
})()
```

---

## Browser Defaults

Omit `novalidate` to let the browser handle validation natively. No JavaScript required. Tooltip styles vary by browser/OS and **cannot be customised with CSS**, though feedback text can still be customised via JavaScript.

```html
<form class="row g-3">
  <div class="col-md-4">
    <label for="validationDefault01" class="form-label">First name</label>
    <input type="text" class="form-control" id="validationDefault01" value="Mark" required>
  </div>
  <div class="col-md-4">
    <label for="validationDefault02" class="form-label">Last name</label>
    <input type="text" class="form-control" id="validationDefault02" value="Otto" required>
  </div>
  <div class="col-md-4">
    <label for="validationDefaultUsername" class="form-label">Username</label>
    <div class="input-group">
      <span class="input-group-text" id="inputGroupPrepend2">@</span>
      <input type="text" class="form-control" id="validationDefaultUsername" aria-describedby="inputGroupPrepend2" required>
    </div>
  </div>
  <!-- remaining fields follow the same pattern — no feedback divs needed -->
  <div class="col-12">
    <button class="btn btn-primary" type="submit">Submit form</button>
  </div>
</form>
```

---

## Server-Side Validation

Apply `.is-valid` or `.is-invalid` directly to controls to reflect server-returned results. No `.was-validated` parent or JavaScript required.

**Key rules:**
- Associate `.invalid-feedback` with its field via `aria-describedby` for accessibility — the attribute accepts multiple space-separated IDs
- Input groups with validation require `.has-validation` to fix border-radius rendering

```html
<form class="row g-3">
  <!-- Valid field -->
  <div class="col-md-4">
    <label for="validationServer01" class="form-label">First name</label>
    <input type="text" class="form-control is-valid" id="validationServer01" value="Mark" required>
    <div class="valid-feedback">Looks good!</div>
  </div>

  <!-- Invalid field -->
  <div class="col-md-6">
    <label for="validationServer03" class="form-label">City</label>
    <input type="text" class="form-control is-invalid" id="validationServer03" aria-describedby="validationServer03Feedback" required>
    <div id="validationServer03Feedback" class="invalid-feedback">Please provide a valid city.</div>
  </div>

  <!-- Invalid select -->
  <div class="col-md-3">
    <label for="validationServer04" class="form-label">State</label>
    <select class="form-select is-invalid" id="validationServer04" aria-describedby="validationServer04Feedback" required>
      <option selected disabled value="">Choose...</option>
      <option>...</option>
    </select>
    <div id="validationServer04Feedback" class="invalid-feedback">Please select a valid state.</div>
  </div>

  <!-- Invalid input group (note: aria-describedby references both addon and feedback IDs) -->
  <div class="col-md-4">
    <label for="validationServerUsername" class="form-label">Username</label>
    <div class="input-group has-validation">
      <span class="input-group-text" id="inputGroupPrepend3">@</span>
      <input type="text" class="form-control is-invalid" id="validationServerUsername"
             aria-describedby="inputGroupPrepend3 validationServerUsernameFeedback" required>
      <div id="validationServerUsernameFeedback" class="invalid-feedback">Please choose a username.</div>
    </div>
  </div>

  <!-- Invalid checkbox -->
  <div class="col-12">
    <div class="form-check">
      <input class="form-check-input is-invalid" type="checkbox" value="" id="invalidCheck3" aria-describedby="invalidCheck3Feedback" required>
      <label class="form-check-label" for="invalidCheck3">Agree to terms and conditions</label>
      <div id="invalidCheck3Feedback" class="invalid-feedback">You must agree before submitting.</div>
    </div>
  </div>
</form>
```

---

## Supported Elements

Validation styles work on:

- `<input>` and `<textarea>` with `.form-control` (max one `.form-control` per input group)
- `<select>` with `.form-select`
- `.form-check` elements (checkboxes and radios)
- `<input type="file">` with `.form-control`

```html
<form class="was-validated">
  <!-- Textarea -->
  <div class="mb-3">
    <label for="validationTextarea" class="form-label">Textarea</label>
    <textarea class="form-control" id="validationTextarea" placeholder="Required example textarea" required></textarea>
    <div class="invalid-feedback">Please enter a message in the textarea.</div>
  </div>

  <!-- Checkbox -->
  <div class="form-check mb-3">
    <input type="checkbox" class="form-check-input" id="validationFormCheck1" required>
    <label class="form-check-label" for="validationFormCheck1">Check this checkbox</label>
    <div class="invalid-feedback">Example invalid feedback text</div>
  </div>

  <!-- Radios — place feedback on the last radio in the group -->
  <div class="form-check">
    <input type="radio" class="form-check-input" id="validationFormCheck2" name="radio-stacked" required>
    <label class="form-check-label" for="validationFormCheck2">Toggle this radio</label>
  </div>
  <div class="form-check mb-3">
    <input type="radio" class="form-check-input" id="validationFormCheck3" name="radio-stacked" required>
    <label class="form-check-label" for="validationFormCheck3">Or toggle this other radio</label>
    <div class="invalid-feedback">More example invalid feedback text</div>
  </div>

  <!-- Select -->
  <div class="mb-3">
    <select class="form-select" required aria-label="select example">
      <option value="">Open this select menu</option>
      <option value="1">One</option>
      <option value="2">Two</option>
      <option value="3">Three</option>
    </select>
    <div class="invalid-feedback">Example invalid select feedback</div>
  </div>

  <!-- File input -->
  <div class="mb-3">
    <input type="file" class="form-control" aria-label="file example" required>
    <div class="invalid-feedback">Example invalid form file feedback</div>
  </div>

  <button class="btn btn-primary" type="submit" disabled>Submit form</button>
</form>
```

---

## Tooltips

Replace `.valid-feedback` / `.invalid-feedback` with `.valid-tooltip` / `.invalid-tooltip` to display feedback as a styled floating tooltip.

**Requirement:** The tooltip's parent element must have `position: relative`. Bootstrap's grid column classes already provide this — other layouts may need it added manually.

```html
<form class="row g-3 needs-validation" novalidate>
  <div class="col-md-4 position-relative">
    <label for="validationTooltip01" class="form-label">First name</label>
    <input type="text" class="form-control" id="validationTooltip01" value="Mark" required>
    <div class="valid-tooltip">Looks good!</div>
  </div>
  <div class="col-md-4 position-relative">
    <label for="validationTooltip02" class="form-label">Last name</label>
    <input type="text" class="form-control" id="validationTooltip02" value="Otto" required>
    <div class="valid-tooltip">Looks good!</div>
  </div>
  <div class="col-md-4 position-relative">
    <label for="validationTooltipUsername" class="form-label">Username</label>
    <div class="input-group has-validation">
      <span class="input-group-text" id="validationTooltipUsernamePrepend">@</span>
      <input type="text" class="form-control" id="validationTooltipUsername" aria-describedby="validationTooltipUsernamePrepend" required>
      <div class="invalid-tooltip">Please choose a unique and valid username.</div>
    </div>
  </div>
  <div class="col-md-6 position-relative">
    <label for="validationTooltip03" class="form-label">City</label>
    <input type="text" class="form-control" id="validationTooltip03" required>
    <div class="invalid-tooltip">Please provide a valid city.</div>
  </div>
  <div class="col-md-3 position-relative">
    <label for="validationTooltip04" class="form-label">State</label>
    <select class="form-select" id="validationTooltip04" required>
      <option selected disabled value="">Choose...</option>
      <option>...</option>
    </select>
    <div class="invalid-tooltip">Please select a valid state.</div>
  </div>
  <div class="col-md-3 position-relative">
    <label for="validationTooltip05" class="form-label">Zip</label>
    <input type="text" class="form-control" id="validationTooltip05" required>
    <div class="invalid-tooltip">Please provide a valid zip.</div>
  </div>
  <div class="col-12">
    <button class="btn btn-primary" type="submit">Submit form</button>
  </div>
</form>
```

### Feedback vs. Tooltip Classes

| State | Inline feedback | Floating tooltip |
|---|---|---|
| Valid | `.valid-feedback` | `.valid-tooltip` |
| Invalid | `.invalid-feedback` | `.invalid-tooltip` |
| Positioning needed | No | Yes — parent needs `position: relative` |

---

## CSS

### CSS Variables (v5.3.0+)

Bootstrap uses local CSS variables for validation, sourced from Sass. They are **color-mode adaptive** — values update automatically in dark mode.

```scss
// scss/_root.scss
--#{$prefix}form-valid-color: #{$form-valid-color};
--#{$prefix}form-valid-border-color: #{$form-valid-border-color};
--#{$prefix}form-invalid-color: #{$form-invalid-color};
--#{$prefix}form-invalid-border-color: #{$form-invalid-border-color};
```

### Sass Variables

```scss
// scss/_variables.scss — feedback text appearance
$form-feedback-margin-top:         $form-text-margin-top;
$form-feedback-font-size:          $form-text-font-size;
$form-feedback-font-style:         $form-text-font-style;
$form-feedback-valid-color:        $success;
$form-feedback-invalid-color:      $danger;

// Inline SVG icons shown inside validated inputs
$form-feedback-icon-valid-color:   $form-feedback-valid-color;
$form-feedback-icon-valid:         url("data:image/svg+xml,..."); // checkmark
$form-feedback-icon-invalid-color: $form-feedback-invalid-color;
$form-feedback-icon-invalid:       url("data:image/svg+xml,..."); // circle with exclamation

// State colors and borders
$form-valid-color:                 $form-feedback-valid-color;
$form-valid-border-color:          $form-feedback-valid-color;
$form-invalid-color:               $form-feedback-invalid-color;
$form-invalid-border-color:        $form-feedback-invalid-color;
```

```scss
// scss/_variables-dark.scss — dark mode overrides
$form-valid-color-dark:            $green-300;
$form-valid-border-color-dark:     $green-300;
$form-invalid-color-dark:          $red-300;
$form-invalid-border-color-dark:   $red-300;
```

### Sass Mixins

Two mixins work together to produce all validation styles.

**`form-validation-state-selector`** — generates selectors covering both `.was-validated :valid` and `.is-valid` patterns:

```scss
@mixin form-validation-state-selector($state) {
  @if ($state == "valid" or $state == "invalid") {
    .was-validated #{if(&, "&", "")}:#{$state},
    #{if(&, "&", "")}.is-#{$state} {
      @content;
    }
  } @else {
    #{if(&, "&", "")}.is-#{$state} {
      @content;
    }
  }
}
```

**`form-validation-state`** — generates feedback text, tooltip, icon, border, focus shadow, and per-control styles:

```scss
@mixin form-validation-state(
  $state,
  $color,
  $icon,
  $tooltip-color: color-contrast($color),
  $tooltip-bg-color: rgba($color, $form-feedback-tooltip-opacity),
  $focus-box-shadow: 0 0 $input-btn-focus-blur $input-focus-width rgba($color, $input-btn-focus-color-opacity),
  $border-color: $color
) { ... }
```

### Sass Map

All validation states are driven by `$form-validation-states`. Override or extend it to add custom states:

```scss
// scss/_variables.scss
$form-validation-states: (
  "valid": (
    "color":            var(--#{$prefix}form-valid-color),
    "icon":             $form-feedback-icon-valid,
    "tooltip-color":    #fff,
    "tooltip-bg-color": var(--#{$prefix}success),
    "focus-box-shadow": 0 0 $input-btn-focus-blur $input-focus-width rgba(var(--#{$prefix}success-rgb), $input-btn-focus-color-opacity),
    "border-color":     var(--#{$prefix}form-valid-border-color),
  ),
  "invalid": (
    "color":            var(--#{$prefix}form-invalid-color),
    "icon":             $form-feedback-icon-invalid,
    "tooltip-color":    #fff,
    "tooltip-bg-color": var(--#{$prefix}danger),
    "focus-box-shadow": 0 0 $input-btn-focus-blur $input-focus-width rgba(var(--#{$prefix}danger-rgb), $input-btn-focus-color-opacity),
    "border-color":     var(--#{$prefix}form-invalid-border-color),
  )
);
```

Each map entry supports these optional override keys: `tooltip-color`, `tooltip-bg-color`, and `focus-box-shadow`.

### Sass Loop

The map is iterated to compile all validation CSS — any additions to the map are automatically included:

```scss
// scss/forms/_validation.scss
@each $state, $data in $form-validation-states {
  @include form-validation-state($state, $data...);
}
```

> To add a **custom validation state** (e.g. `"warning"`), add a new entry to `$form-validation-states`. Custom states only work with `.is-{state}` classes — no additional browser pseudo-classes beyond `:valid` and `:invalid` are natively supported.

---

## Quick Reference

| Feature | Class / attribute |
|---|---|
| Trigger custom validation styles | `.was-validated` on `<form>` |
| Disable browser tooltips | `novalidate` on `<form>` |
| Mark form for JS interception | `.needs-validation` on `<form>` |
| Valid inline feedback | `.valid-feedback` |
| Invalid inline feedback | `.invalid-feedback` |
| Valid tooltip | `.valid-tooltip` + `position: relative` on parent |
| Invalid tooltip | `.invalid-tooltip` + `position: relative` on parent |
| Server-side valid state | `.is-valid` on control |
| Server-side invalid state | `.is-invalid` on control |
| Link feedback to field (a11y) | `aria-describedby="feedbackId"` on control |
| Fix input group border-radius | `.has-validation` on `.input-group` |
| Reset validation appearance | Remove `.was-validated` from `<form>` |
| Custom validation message | `input.setCustomValidity('message')` in JS |

---