# Bootstrap Range

A guide to Bootstrap's custom range inputs for consistent cross-browser styling and built-in customization.

---

## Overview

Use `.form-range` on an `<input type="range">` to apply Bootstrap's custom styles. Both the **track** (background bar) and **thumb** (draggable value indicator) are styled consistently across browsers.

> **Note:** Only Firefox supports filling the track from the left/right of the thumb to visually indicate progress. Bootstrap does not currently support this feature.

```html
<label for="range1" class="form-label">Example range</label>
<input type="range" class="form-range" id="range1">
```

---

## Disabled

Add the `disabled` boolean attribute to give the range a grayed-out appearance, remove pointer events, and prevent focusing.

```html
<label for="disabledRange" class="form-label">Disabled range</label>
<input type="range" class="form-range" id="disabledRange" disabled>
```

---

## Min and Max

Range inputs default to `min="0"` and `max="100"`. Override these with explicit `min` and `max` attributes.

```html
<label for="range2" class="form-label">Example range</label>
<input type="range" class="form-range" min="0" max="5" id="range2">
```

| Attribute | Default | Description |
|---|---|---|
| `min` | `0` | Minimum selectable value |
| `max` | `100` | Maximum selectable value |

---

## Steps

By default, range inputs snap to **integer values**. Use the `step` attribute to change the snap interval. The example below uses `step="0.5"` to double the number of steps between 0 and 5.

```html
<label for="range3" class="form-label">Example range</label>
<input type="range" class="form-range" min="0" max="5" step="0.5" id="range3">
```

| `step` value | Behavior |
|---|---|
| `1` (default) | Snaps to whole integers |
| `0.5` | Snaps every half unit |
| `any` | Allows any decimal value (no snapping) |

---

## Output Value

Display the current range value live using the `<output>` element paired with a JavaScript event listener.

```html
<label for="range4" class="form-label">Example range</label>
<input type="range" class="form-range" min="0" max="100" value="50" id="range4">
<output for="range4" id="rangeValue" aria-hidden="true"></output>

<script>
  const rangeInput = document.getElementById('range4');
  const rangeOutput = document.getElementById('rangeValue');

  // Set initial value on page load
  rangeOutput.textContent = rangeInput.value;

  // Update on every change
  rangeInput.addEventListener('input', function () {
    rangeOutput.textContent = this.value;
  });
</script>
```

**Key points:**
- `value="50"` sets the initial thumb position
- `<output for="range4">` semantically associates the output with the input
- `aria-hidden="true"` hides the output from screen readers (since the range value is already accessible via the input itself)
- The `input` event fires continuously as the user drags, unlike `change` which fires only on release

---

## CSS / Sass Variables

All range styles are controlled via Sass variables in `scss/_variables.scss`.

### Track Variables

The track is the background bar the thumb slides along.

```scss
$form-range-track-width:          100%;
$form-range-track-height:         .5rem;
$form-range-track-cursor:         pointer;
$form-range-track-bg:             var(--#{$prefix}secondary-bg);
$form-range-track-border-radius:  1rem;
$form-range-track-box-shadow:     var(--#{$prefix}box-shadow-inset);
```

| Variable | Default | Description |
|---|---|---|
| `$form-range-track-width` | `100%` | Full-width track |
| `$form-range-track-height` | `.5rem` | Track thickness |
| `$form-range-track-cursor` | `pointer` | Cursor style on hover |
| `$form-range-track-bg` | `secondary-bg` | Track background color |
| `$form-range-track-border-radius` | `1rem` | Rounded track ends |
| `$form-range-track-box-shadow` | `box-shadow-inset` | Inset shadow for depth |

### Thumb Variables

The thumb is the draggable circular handle.

```scss
$form-range-thumb-width:                   1rem;
$form-range-thumb-height:                  $form-range-thumb-width;
$form-range-thumb-bg:                      $component-active-bg;
$form-range-thumb-border:                  0;
$form-range-thumb-border-radius:           1rem;
$form-range-thumb-box-shadow:              0 .1rem .25rem rgba($black, .1);
$form-range-thumb-focus-box-shadow:        0 0 0 1px $body-bg, $input-focus-box-shadow;
$form-range-thumb-focus-box-shadow-width:  $input-focus-width;
$form-range-thumb-active-bg:               tint-color($component-active-bg, 70%);
$form-range-thumb-disabled-bg:             var(--#{$prefix}secondary-color);
$form-range-thumb-transition:              background-color .15s ease-in-out, border-color .15s ease-in-out, box-shadow .15s ease-in-out;
```

| Variable | Default | Description |
|---|---|---|
| `$form-range-thumb-width` | `1rem` | Thumb diameter |
| `$form-range-thumb-height` | `= thumb-width` | Keeps thumb circular |
| `$form-range-thumb-bg` | `component-active-bg` | Thumb fill color (matches active/primary) |
| `$form-range-thumb-border` | `0` | No border on thumb |
| `$form-range-thumb-border-radius` | `1rem` | Circular thumb shape |
| `$form-range-thumb-box-shadow` | `0 .1rem .25rem ...` | Subtle drop shadow |
| `$form-range-thumb-focus-box-shadow` | `ring + input focus` | Focus indicator for accessibility |
| `$form-range-thumb-focus-box-shadow-width` | `$input-focus-width` | Fixes Edge focus ring rendering |
| `$form-range-thumb-active-bg` | `tint 70% of active-bg` | Lighter color while actively dragging |
| `$form-range-thumb-disabled-bg` | `secondary-color` | Grayed-out thumb when disabled |
| `$form-range-thumb-transition` | `.15s ease-in-out` | Smooth color/shadow transitions |

---

## Quick Reference

| Feature | How to apply |
|---|---|
| Basic range | `<input type="range" class="form-range">` |
| Disabled | Add `disabled` attribute |
| Custom min/max | `min="0" max="5"` attributes |
| Custom step | `step="0.5"` attribute |
| Show live value | Pair with `<output>` + JS `input` event listener |

---