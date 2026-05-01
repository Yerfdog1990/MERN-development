# Bootstrap Breadcrumb

> Indicates the current page's location within a navigational hierarchy. Separators are added automatically via CSS.

---

## How It Works

Breadcrumbs are built with an ordered or unordered list (`<ol>` or `<ul>`) wrapped in a `<nav>` element. The separator between items is generated purely via CSS using `::before` and `content` — no extra markup needed.

---

## Example

Three common breadcrumb patterns — single item, two levels, and three levels:

```html
<!-- Single item (current page only) -->
<nav aria-label="breadcrumb">
  <ol class="breadcrumb">
    <li class="breadcrumb-item active" aria-current="page">Home</li>
  </ol>
</nav>

<!-- Two levels -->
<nav aria-label="breadcrumb">
  <ol class="breadcrumb">
    <li class="breadcrumb-item"><a href="#">Home</a></li>
    <li class="breadcrumb-item active" aria-current="page">Library</li>
  </ol>
</nav>

<!-- Three levels -->
<nav aria-label="breadcrumb">
  <ol class="breadcrumb">
    <li class="breadcrumb-item"><a href="#">Home</a></li>
    <li class="breadcrumb-item"><a href="#">Library</a></li>
    <li class="breadcrumb-item active" aria-current="page">Data</li>
  </ol>
</nav>
```

**Key rules:**
- All items use `.breadcrumb-item`
- The current/active page gets `.active` and `aria-current="page"`
- Previous items are wrapped in `<a>` tags; the current page is plain text

---

## Dividers

Dividers are added automatically in CSS via `::before` pseudo-elements. The default divider is `/`. There are three ways to customize it.

### 1 — CSS Custom Property (no recompile needed)

Override `--bs-breadcrumb-divider` inline on the `<nav>` element:

```html
<!-- Custom character divider -->
<nav style="--bs-breadcrumb-divider: '>';" aria-label="breadcrumb">
  <ol class="breadcrumb">
    <li class="breadcrumb-item"><a href="#">Home</a></li>
    <li class="breadcrumb-item active" aria-current="page">Library</li>
  </ol>
</nav>
```

### 2 — Sass Variable (compile-time)

Use the `quote()` function when setting a string character:

```scss
$breadcrumb-divider: quote(">");
```

For RTL support, also set the flipped variant:

```scss
$breadcrumb-divider-flipped: quote("<");
```

### 3 — SVG Icon as Divider

Use an inline SVG as the divider. Note that reserved characters (`<`, `>`, `#`) must be URL-encoded when used in a CSS custom property:

```html
<!-- Via CSS custom property (URL-encoded SVG) -->
<nav style="--bs-breadcrumb-divider: url(&#34;data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='8' height='8'%3E%3Cpath d='M2.5 0L1 1.5 3.5 4 1 6.5 2.5 8l4-4-4-4z' fill='%236c757d'/%3E%3C/svg%3E&#34;);" aria-label="breadcrumb">
  <ol class="breadcrumb">
    <li class="breadcrumb-item"><a href="#">Home</a></li>
    <li class="breadcrumb-item active" aria-current="page">Library</li>
  </ol>
</nav>
```

```scss
// Via Sass variable — Bootstrap's escape-svg() handles encoding automatically
$breadcrumb-divider: url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' width='8' height='8'><path d='M2.5 0L1 1.5 3.5 4 1 6.5 2.5 8l4-4-4-4z' fill='#{$breadcrumb-divider-color}'/></svg>");
```

> **Note:** When using the CSS custom property with SVG, you must manually URL-encode reserved characters. Bootstrap's `escape-svg()` Sass function handles this automatically when using the Sass variable.

### 4 — Remove the Divider

Set the CSS variable to an empty string, or set the Sass variable to `none`:

```html
<!-- Via CSS custom property -->
<nav style="--bs-breadcrumb-divider: '';" aria-label="breadcrumb">
  <ol class="breadcrumb">
    <li class="breadcrumb-item"><a href="#">Home</a></li>
    <li class="breadcrumb-item active" aria-current="page">Library</li>
  </ol>
</nav>
```

```scss
// Via Sass variable
$breadcrumb-divider: none;
```

> **Important:** An empty string `''` in a CSS custom property is still treated as a value — it will render no divider character. This is intentional behavior, not a missing value.

---

## Divider Methods Comparison

| Method | How | Requires Recompile? |
|---|---|---|
| CSS custom property inline | `style="--bs-breadcrumb-divider: '>'"` | No |
| Sass variable | `$breadcrumb-divider: quote(">")` | Yes |
| SVG via CSS property | URL-encoded SVG string inline | No |
| SVG via Sass | `escape-svg()` Sass function | Yes |
| Remove divider (CSS) | `--bs-breadcrumb-divider: ''` | No |
| Remove divider (Sass) | `$breadcrumb-divider: none` | Yes |

---

## Accessibility

Breadcrumbs are a navigation landmark — follow these practices:

- Wrap the breadcrumb list in a `<nav>` element
- Add `aria-label="breadcrumb"` to the `<nav>` to describe its purpose to screen readers
- Add `aria-current="page"` to the last (active) item to indicate the current page
- Use `<ol>` (ordered list) to convey hierarchy semantically

```html
<nav aria-label="breadcrumb">
  <ol class="breadcrumb">
    <li class="breadcrumb-item"><a href="#">Home</a></li>
    <li class="breadcrumb-item"><a href="#">Library</a></li>
    <li class="breadcrumb-item active" aria-current="page">Data</li>
  </ol>
</nav>
```

> For more, see the [ARIA Authoring Practices Guide breadcrumb pattern](https://www.w3.org/WAI/ARIA/apg/patterns/breadcrumb/).

---

## CSS Customization

### CSS Variables (Bootstrap 5.2+)

Breadcrumbs expose scoped CSS variables on `.breadcrumb`:

```css
.breadcrumb {
  --bs-breadcrumb-padding-x: 0;
  --bs-breadcrumb-padding-y: 0;
  --bs-breadcrumb-margin-bottom: 1rem;
  --bs-breadcrumb-font-size: null;         /* inherits by default */
  --bs-breadcrumb-bg: null;                /* no background by default */
  --bs-breadcrumb-border-radius: null;
  --bs-breadcrumb-divider-color: var(--bs-secondary-color);
  --bs-breadcrumb-item-padding-x: 0.5rem;
  --bs-breadcrumb-item-active-color: var(--bs-secondary-color);
}
```

### Sass Variables

```scss
$breadcrumb-font-size:        null;                          // inherits parent
$breadcrumb-padding-y:        0;
$breadcrumb-padding-x:        0;
$breadcrumb-item-padding-x:   .5rem;                         // space around divider
$breadcrumb-margin-bottom:    1rem;
$breadcrumb-bg:               null;                          // no background
$breadcrumb-divider-color:    var(--#{$prefix}secondary-color);
$breadcrumb-active-color:     var(--#{$prefix}secondary-color);
$breadcrumb-divider:          quote("/");                    // default divider character
$breadcrumb-divider-flipped:  $breadcrumb-divider;           // RTL variant
$breadcrumb-border-radius:    null;
```

---

## Quick Reference Cheatsheet

### Classes

| Class | Applied To | Purpose |
|---|---|---|
| `.breadcrumb` | `<ol>` or `<ul>` | Base breadcrumb list |
| `.breadcrumb-item` | `<li>` | Each breadcrumb step |
| `.breadcrumb-item.active` | Last `<li>` | Marks the current page (no link) |

### ARIA Attributes

| Attribute | Applied To | Purpose |
|---|---|---|
| `aria-label="breadcrumb"` | `<nav>` | Identifies this as breadcrumb navigation |
| `aria-current="page"` | Active `<li>` | Marks the current page for screen readers |

### Divider Customization

| Goal | CSS Property | Sass Variable |
|---|---|---|
| Change to `>` | `--bs-breadcrumb-divider: '>'` | `$breadcrumb-divider: quote(">")` |
| Use SVG icon | URL-encoded SVG string | `escape-svg()` SVG data URI |
| Remove divider | `--bs-breadcrumb-divider: ''` | `$breadcrumb-divider: none` |
| RTL divider | — | `$breadcrumb-divider-flipped` |

---
