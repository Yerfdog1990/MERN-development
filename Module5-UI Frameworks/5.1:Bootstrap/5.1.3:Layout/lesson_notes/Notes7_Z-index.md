# Bootstrap — Z-index

While not part of Bootstrap's grid system, z-indexes play an important role in how components **overlay and interact** with one another.

---

## What Is Z-index in Bootstrap?

Bootstrap uses the CSS `z-index` property to control a **third axis** — depth — for layering content. This is how components like modals, tooltips, navbars, and dropdowns stack on top of each other correctly.

Bootstrap defines a **standardised z-index scale** across all layered components to ensure consistent, predictable behaviour.

> **Key principle:** The values start at an arbitrary high number (1000+) — high enough to avoid conflicts with typical project styles, but there is nothing special about the numbers themselves. `100+` or `500+` would work equally well — Bootstrap simply needs a *consistent internal scale*.

---

## The Z-index Scale

Defined in `scss/_variables.scss`:

```scss
$zindex-dropdown:             1000;
$zindex-sticky:               1020;
$zindex-fixed:                1030;
$zindex-offcanvas-backdrop:   1040;
$zindex-offcanvas:            1045;
$zindex-modal-backdrop:       1050;
$zindex-modal:                1055;
$zindex-popover:              1070;
$zindex-tooltip:              1080;
$zindex-toast:                1090;
```

---

## Layer Breakdown

| Variable | Value | Component |
|----------|-------|-----------|
| `$zindex-dropdown` | `1000` | Dropdown menus |
| `$zindex-sticky` | `1020` | Sticky positioned elements |
| `$zindex-fixed` | `1030` | Fixed navbars / fixed elements |
| `$zindex-offcanvas-backdrop` | `1040` | Offcanvas overlay backdrop |
| `$zindex-offcanvas` | `1045` | Offcanvas panel itself |
| `$zindex-modal-backdrop` | `1050` | Modal overlay backdrop |
| `$zindex-modal` | `1055` | Modal dialog itself |
| `$zindex-popover` | `1070` | Popovers |
| `$zindex-tooltip` | `1080` | Tooltips |
| `$zindex-toast` | `1090` | Toast notifications |

### Visual Stacking Order (low → high)

```
Page content (z-index: auto / 0)
      ↓
Dropdown          1000
Sticky            1020
Fixed             1030
Offcanvas backdrop 1040
Offcanvas          1045
Modal backdrop    1050
Modal             1055
Popover           1070
Tooltip           1080
Toast             1090  ← highest, always on top
```

> **Why the gaps?** The intentional gaps between values (e.g., 1040 → 1045 → 1050) leave room for project-specific layers to slot in between Bootstrap components if absolutely necessary.

---

## Component Pairs — Backdrop + Element

Several components come in pairs: a **backdrop** (overlay behind) and the **element itself**. The element always has a higher z-index than its backdrop:

```
Offcanvas backdrop  1040  ←  dims the page
Offcanvas           1045  ←  panel sits above its own backdrop

Modal backdrop      1050  ←  dims the page
Modal               1055  ←  dialog sits above its own backdrop
```

---

## Low Z-index Values — Component Borders

For handling **overlapping borders within components** (such as buttons and inputs inside input groups), Bootstrap uses low single-digit z-index values:

| State | Z-index |
|-------|---------|
| Default | `1` |
| Hover | `2` |
| Active / Focus | `3` |

On hover, focus, or active state, the element is brought to the **foreground** with a higher z-index so its border renders on top of its siblings — preventing double-border artifacts.

```scss
// Example of how Bootstrap handles this internally
.input-group > .form-control {
  z-index: 1;

  &:focus {
    z-index: 3; // focused input rises above siblings
  }
}

.input-group > .btn {
  z-index: 2; // button sits above default input
}
```

```html
<!-- Input group — borders managed by low z-index values -->
<div class="input-group">
  <button class="btn btn-outline-secondary">Button</button>
  <input type="text" class="form-control" placeholder="Focus me">
</div>
```

---

## Customisation Warning

> ⚠️ **Bootstrap strongly discourages customising individual z-index values.**
>
> The values are interdependent — if you change one, you likely need to update all of them to maintain correct stacking order. Changing `$zindex-modal` without adjusting `$zindex-modal-backdrop` or `$zindex-tooltip`, for example, could cause tooltips to appear *behind* modals.

### If You Must Customise

Override the entire scale together in your Sass, keeping the relative order intact:

```scss
// Override all together to maintain correct layering
$zindex-dropdown:             1100;
$zindex-sticky:               1120;
$zindex-fixed:                1130;
$zindex-offcanvas-backdrop:   1140;
$zindex-offcanvas:            1145;
$zindex-modal-backdrop:       1150;
$zindex-modal:                1155;
$zindex-popover:              1170;
$zindex-tooltip:              1180;
$zindex-toast:                1190;

@import "bootstrap";
```

---

## Quick Reference

```scss
// Full z-index scale from scss/_variables.scss
$zindex-dropdown:             1000;
$zindex-sticky:               1020;
$zindex-fixed:                1030;
$zindex-offcanvas-backdrop:   1040;
$zindex-offcanvas:            1045;
$zindex-modal-backdrop:       1050;
$zindex-modal:                1055;
$zindex-popover:              1070;
$zindex-tooltip:              1080;
$zindex-toast:                1090;

// Low values for intra-component border control
// default: 1 | hover: 2 | active/focus: 3
```

| Rule | Detail |
|------|--------|
| Scale starts at | `1000` |
| Highest layer | Toast at `1090` |
| Lowest (internal) | Default state at `1` |
| Customise? | Only change all values together |
| Gaps between values | Intentional — room for custom layers |

---