# Bootstrap Badges

> Small count and labeling component that scales with its parent element using relative font sizing and `em` units.

---

## How It Works

Badges scale automatically to match the size of their immediate parent element — no manual sizing needed. As of **v5**, badges no longer have focus or hover styles for links.

---

## Examples

### Headings

Badges adapt to the heading level they're placed in:

```html
<h1>Example heading <span class="badge text-bg-secondary">New</span></h1>
<h2>Example heading <span class="badge text-bg-secondary">New</span></h2>
<h3>Example heading <span class="badge text-bg-secondary">New</span></h3>
<h4>Example heading <span class="badge text-bg-secondary">New</span></h4>
<h5>Example heading <span class="badge text-bg-secondary">New</span></h5>
<h6>Example heading <span class="badge text-bg-secondary">New</span></h6>
```

### Buttons

Use badges inside buttons or links to display a counter:

```html
<button type="button" class="btn btn-primary">
  Notifications <span class="badge text-bg-secondary">4</span>
</button>
```

> **Accessibility note:** Screen readers will read the badge content as plain text — it may sound like a random word or number appended to a button. If the context isn't obvious (e.g. "4" on its own), add hidden descriptive text using `.visually-hidden`.

```html
<button type="button" class="btn btn-primary">
  Messages
  <span class="badge text-bg-secondary">
    4
    <span class="visually-hidden">unread messages</span>
  </span>
</button>
```

---

## Positioned

Use positioning utilities to pin a badge to the corner of a button or link.

### With a count

```html
<button type="button" class="btn btn-primary position-relative">
  Inbox
  <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
    99+
    <span class="visually-hidden">unread messages</span>
  </span>
</button>
```

### Without a count (dot indicator)

Replace the badge with a simple dot — no number needed:

```html
<button type="button" class="btn btn-primary position-relative">
  Profile
  <span class="position-absolute top-0 start-100 translate-middle p-2 bg-danger border border-light rounded-circle">
    <span class="visually-hidden">New alerts</span>
  </span>
</button>
```

**Positioning utility breakdown:**

| Class | Effect |
|---|---|
| `position-relative` | On the parent — creates the positioning context |
| `position-absolute` | On the badge — takes it out of flow |
| `top-0 start-100` | Places badge at the top-right corner of the parent |
| `translate-middle` | Shifts badge so it straddles the corner perfectly |
| `rounded-pill` | Fully rounded badge shape |
| `rounded-circle` | Circular dot shape (for no-count variant) |

---

## Background Colors

Added in **v5.2.0** — use `.text-bg-{color}` helpers to automatically set a background color with a contrasting foreground color. No need to manually pair `.text-{color}` and `.bg-{color}`.

```html
<span class="badge text-bg-primary">Primary</span>
<span class="badge text-bg-secondary">Secondary</span>
<span class="badge text-bg-success">Success</span>
<span class="badge text-bg-danger">Danger</span>
<span class="badge text-bg-warning">Warning</span>
<span class="badge text-bg-info">Info</span>
<span class="badge text-bg-light">Light</span>
<span class="badge text-bg-dark">Dark</span>
```

> **Accessibility tip:** Color alone doesn't convey meaning to screen readers. Ensure the badge's meaning is clear from the visible text, or include hidden context with `.visually-hidden`.

---

## Pill Badges

Add `.rounded-pill` for a more capsule-shaped badge with a larger border-radius:

```html
<span class="badge rounded-pill text-bg-primary">Primary</span>
<span class="badge rounded-pill text-bg-secondary">Secondary</span>
<span class="badge rounded-pill text-bg-success">Success</span>
<span class="badge rounded-pill text-bg-danger">Danger</span>
<span class="badge rounded-pill text-bg-warning">Warning</span>
<span class="badge rounded-pill text-bg-info">Info</span>
<span class="badge rounded-pill text-bg-light">Light</span>
<span class="badge rounded-pill text-bg-dark">Dark</span>
```

---

## CSS Customization

### CSS Variables (Bootstrap 5.2+)

Badges use scoped CSS variables on `.badge` for real-time customization:

```css
.badge {
  --bs-badge-padding-x: 0.65em;
  --bs-badge-padding-y: 0.35em;
  --bs-badge-font-size: 0.75em;
  --bs-badge-font-weight: 700;
  --bs-badge-color: #fff;
  --bs-badge-border-radius: 0.375rem;
}
```

### Sass Variables

```scss
$badge-font-size:     .75em;
$badge-font-weight:   $font-weight-bold;
$badge-color:         $white;
$badge-padding-y:     .35em;
$badge-padding-x:     .65em;
$badge-border-radius: var(--#{$prefix}border-radius);
```

> All sizing uses `em` units, so badges scale proportionally with the font size of their parent element.

---

## Quick Reference Cheatsheet

### Classes

| Class | Purpose |
|---|---|
| `.badge` | Base class — required on every badge |
| `.text-bg-primary` | Primary color with auto-contrast text |
| `.text-bg-secondary` | Secondary color with auto-contrast text |
| `.text-bg-success` | Success color with auto-contrast text |
| `.text-bg-danger` | Danger color with auto-contrast text |
| `.text-bg-warning` | Warning color with auto-contrast text |
| `.text-bg-info` | Info color with auto-contrast text |
| `.text-bg-light` | Light color with auto-contrast text |
| `.text-bg-dark` | Dark color with auto-contrast text |
| `.rounded-pill` | Pill/capsule shape with large border-radius |

### Positioning (for corner badges)

| Class | Applied To | Purpose |
|---|---|---|
| `position-relative` | Parent button/link | Establishes positioning context |
| `position-absolute` | Badge | Removes from document flow |
| `top-0 start-100` | Badge | Anchors to the top-right corner |
| `translate-middle` | Badge | Centers the badge on the corner point |
| `visually-hidden` | Inner `<span>` | Hidden text for screen reader context |

---
