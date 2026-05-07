# Bootstrap Navs and Tabs 

Documentation and examples for Bootstrap's included navigation components.

## Table of Contents
- [Base Nav](#base-nav)
- [Horizontal Alignment](#horizontal-alignment)
- [Vertical Nav](#vertical-nav)
- [Tabs](#tabs)
- [Pills](#pills)
- [Underline](#underline)
- [Fill and Justify](#fill-and-justify)
- [Working with Flex Utilities](#working-with-flex-utilities)
- [Accessibility (Static Navs)](#accessibility-static-navs)
- [Dropdowns in Navs](#dropdowns-in-navs)
- [CSS Variables](#css-variables)
- [Sass Variables](#sass-variables)
- [JavaScript Behavior](#javascript-behavior)
- [Accessibility (Dynamic Tabs)](#accessibility-dynamic-tabs)
- [Using Data Attributes](#using-data-attributes)
- [Via JavaScript](#via-javascript)
- [Fade Effect](#fade-effect)
- [Methods Reference](#methods-reference)
- [Events Reference](#events-reference)

---

## Base Nav

The `.nav` component is built on **flexbox** and is the foundation for all Bootstrap navigation. It provides:

- Style overrides for working with `<ul>` lists
- Larger hit areas via link padding
- Basic disabled styling

> The base `.nav` has **no active state styling** — `.active` class is present for demonstration only. Use `aria-current` to convey state to assistive technologies.

### `<ul>`-based markup (semantic lists)

```html
<ul class="nav">
  <li class="nav-item">
    <a class="nav-link active" aria-current="page" href="#">Active</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">Link</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">Link</a>
  </li>
  <li class="nav-item">
    <a class="nav-link disabled" aria-disabled="true">Disabled</a>
  </li>
</ul>
```

### `<nav>`-based markup (flat, no list required)

Since `.nav` uses `display: flex`, nav links behave identically to nav items without the extra `<li>` wrapper. Use `<ol>` if order matters.

```html
<nav class="nav">
  <a class="nav-link active" aria-current="page" href="#">Active</a>
  <a class="nav-link" href="#">Link</a>
  <a class="nav-link" href="#">Link</a>
  <a class="nav-link disabled" aria-disabled="true">Disabled</a>
</nav>
```

**Item state classes:**

| Class | Usage |
|---|---|
| `.active` | Highlights the current item (no built-in styling on base `.nav`) |
| `.disabled` | Mutes the item visually |
| `aria-current="page"` | Marks current page for screen readers |
| `aria-current="true"` | Marks current item in a set for screen readers |
| `aria-disabled="true"` | Marks item as disabled for screen readers |

---

## Horizontal Alignment

Navs are **left-aligned by default**. Use flexbox utilities on `.nav` to change alignment.

### Centered

```html
<ul class="nav justify-content-center">
  <li class="nav-item">
    <a class="nav-link active" aria-current="page" href="#">Active</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">Link</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">Link</a>
  </li>
  <li class="nav-item">
    <a class="nav-link disabled" aria-disabled="true">Disabled</a>
  </li>
</ul>
```

### Right-aligned

```html
<ul class="nav justify-content-end">
  <li class="nav-item">
    <a class="nav-link active" aria-current="page" href="#">Active</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">Link</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">Link</a>
  </li>
  <li class="nav-item">
    <a class="nav-link disabled" aria-disabled="true">Disabled</a>
  </li>
</ul>
```

| Alignment | Class |
|---|---|
| Left (default) | *(none)* |
| Center | `.justify-content-center` |
| Right | `.justify-content-end` |

---

## Vertical Nav

Stack navigation items with `.flex-column`. Use responsive variants like `.flex-sm-column` to go vertical only below a breakpoint.

### `<ul>`-based vertical nav

```html
<ul class="nav flex-column">
  <li class="nav-item">
    <a class="nav-link active" aria-current="page" href="#">Active</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">Link</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">Link</a>
  </li>
  <li class="nav-item">
    <a class="nav-link disabled" aria-disabled="true">Disabled</a>
  </li>
</ul>
```

### `<nav>`-based vertical nav (no `<ul>`)

```html
<nav class="nav flex-column">
  <a class="nav-link active" aria-current="page" href="#">Active</a>
  <a class="nav-link" href="#">Link</a>
  <a class="nav-link" href="#">Link</a>
  <a class="nav-link disabled" aria-disabled="true">Disabled</a>
</nav>
```

---

## Tabs

Add `.nav-tabs` to the base `.nav` to generate a tabbed interface. Combine with the Tab JavaScript plugin for tabbable content panes.

```html
<ul class="nav nav-tabs">
  <li class="nav-item">
    <a class="nav-link active" aria-current="page" href="#">Active</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">Link</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">Link</a>
  </li>
  <li class="nav-item">
    <a class="nav-link disabled" aria-disabled="true">Disabled</a>
  </li>
</ul>
```

---

## Pills

Replace `.nav-tabs` with `.nav-pills` for a pill-style nav. The same HTML structure works for both.

```html
<ul class="nav nav-pills">
  <li class="nav-item">
    <a class="nav-link active" aria-current="page" href="#">Active</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">Link</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">Link</a>
  </li>
  <li class="nav-item">
    <a class="nav-link disabled" aria-disabled="true">Disabled</a>
  </li>
</ul>
```

---

## Underline

Use `.nav-underline` for a minimal underline-style navigation (added in **Bootstrap v5.3.0**).

```html
<ul class="nav nav-underline">
  <li class="nav-item">
    <a class="nav-link active" aria-current="page" href="#">Active</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">Link</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">Link</a>
  </li>
  <li class="nav-item">
    <a class="nav-link disabled" aria-disabled="true">Disabled</a>
  </li>
</ul>
```

**Style comparison:**

| Class | Visual style |
|---|---|
| *(none)* | Plain links, no style indicator |
| `.nav-tabs` | Bordered tab look with active tab appearing "connected" to content below |
| `.nav-pills` | Pill-shaped background on active item |
| `.nav-underline` | Underline on active item (added v5.3.0) |

---

## Fill and Justify

Force nav items to extend across the full available width with either `.nav-fill` or `.nav-justified`.

### `.nav-fill` — proportional widths

Each item fills its share of space based on content width. Items are **not** equal width.

```html
<!-- With <ul> -->
<ul class="nav nav-pills nav-fill">
  <li class="nav-item">
    <a class="nav-link active" aria-current="page" href="#">Active</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">Much longer nav link</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">Link</a>
  </li>
  <li class="nav-item">
    <a class="nav-link disabled" aria-disabled="true">Disabled</a>
  </li>
</ul>

<!-- With <nav> — .nav-item not required, only .nav-link needed -->
<nav class="nav nav-pills nav-fill">
  <a class="nav-link active" aria-current="page" href="#">Active</a>
  <a class="nav-link" href="#">Much longer nav link</a>
  <a class="nav-link" href="#">Link</a>
  <a class="nav-link disabled" aria-disabled="true">Disabled</a>
</nav>
```

### `.nav-justified` — equal widths

All items are forced to the **same width**, distributing space evenly.

```html
<!-- With <ul> -->
<ul class="nav nav-pills nav-justified">
  <li class="nav-item">
    <a class="nav-link active" aria-current="page" href="#">Active</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">Much longer nav link</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">Link</a>
  </li>
  <li class="nav-item">
    <a class="nav-link disabled" aria-disabled="true">Disabled</a>
  </li>
</ul>

<!-- With <nav> -->
<nav class="nav nav-pills nav-justified">
  <a class="nav-link active" aria-current="page" href="#">Active</a>
  <a class="nav-link" href="#">Much longer nav link</a>
  <a class="nav-link" href="#">Link</a>
  <a class="nav-link disabled" aria-disabled="true">Disabled</a>
</nav>
```

**Comparison:**

| Class | Behavior |
|---|---|
| `.nav-fill` | All space used, items sized by content |
| `.nav-justified` | All space used, all items equal width |

> **Note:** When using `<nav>` with `.nav-fill` or `.nav-justified`, `.nav-item` is not required — only `.nav-link` is needed on `<a>` elements.

---

## Working with Flex Utilities

For responsive nav variations, use flexbox utilities directly for greater breakpoint control. The example below is stacked on mobile and switches to a horizontal, filled layout at `sm` and above.

```html
<nav class="nav nav-pills flex-column flex-sm-row">
  <a class="flex-sm-fill text-sm-center nav-link active" aria-current="page" href="#">Active</a>
  <a class="flex-sm-fill text-sm-center nav-link" href="#">Longer nav link</a>
  <a class="flex-sm-fill text-sm-center nav-link" href="#">Link</a>
  <a class="flex-sm-fill text-sm-center nav-link disabled" aria-disabled="true">Disabled</a>
</nav>
```

**Classes used:**
- `flex-column` — stacked vertically on all screens by default.
- `flex-sm-row` — switches to horizontal at `sm` (576px) and above.
- `flex-sm-fill` — each item fills equal space once horizontal.
- `text-sm-center` — centers link text once horizontal.

---

## Accessibility (Static Navs)

For **static navigation bars** (not dynamic tabs):

- Add `role="navigation"` to the **parent container** of a `<ul>` nav, or wrap with a `<nav>` element.
- Do **not** add `role="navigation"` to the `<ul>` itself — this would prevent it from being announced as a list.
- Navbars styled with `.nav-tabs` for visual appearance should **not** get `role="tablist"`, `role="tab"`, or `role="tabpanel"` — those are only for **dynamic** tab interfaces.
- `aria-current` is used for static navs. The JavaScript plugin handles `aria-selected` automatically for dynamic tabs.

---

## Dropdowns in Navs

Add dropdown menus to tabs or pills using the Dropdown plugin. The `.nav-item.dropdown` pattern works the same as in navbars.

### Tabs with dropdowns

```html
<ul class="nav nav-tabs">
  <li class="nav-item">
    <a class="nav-link active" aria-current="page" href="#">Active</a>
  </li>
  <li class="nav-item dropdown">
    <a class="nav-link dropdown-toggle" data-bs-toggle="dropdown"
      href="#" role="button" aria-expanded="false">Dropdown</a>
    <ul class="dropdown-menu">
      <li><a class="dropdown-item" href="#">Action</a></li>
      <li><a class="dropdown-item" href="#">Another action</a></li>
      <li><a class="dropdown-item" href="#">Something else here</a></li>
      <li><hr class="dropdown-divider"></li>
      <li><a class="dropdown-item" href="#">Separated link</a></li>
    </ul>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">Link</a>
  </li>
  <li class="nav-item">
    <a class="nav-link disabled" aria-disabled="true">Disabled</a>
  </li>
</ul>
```

### Pills with dropdowns

```html
<ul class="nav nav-pills">
  <li class="nav-item">
    <a class="nav-link active" aria-current="page" href="#">Active</a>
  </li>
  <li class="nav-item dropdown">
    <a class="nav-link dropdown-toggle" data-bs-toggle="dropdown"
      href="#" role="button" aria-expanded="false">Dropdown</a>
    <ul class="dropdown-menu">
      <li><a class="dropdown-item" href="#">Action</a></li>
      <li><a class="dropdown-item" href="#">Another action</a></li>
      <li><a class="dropdown-item" href="#">Something else here</a></li>
      <li><hr class="dropdown-divider"></li>
      <li><a class="dropdown-item" href="#">Separated link</a></li>
    </ul>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">Link</a>
  </li>
  <li class="nav-item">
    <a class="nav-link disabled" aria-disabled="true">Disabled</a>
  </li>
</ul>
```

> ⚠️ **The Tab JavaScript plugin does not support tabbed interfaces that contain dropdown menus.** This causes both usability problems (the active trigger is hidden inside a closed menu) and accessibility problems (no ARIA pattern covers this construct). Use dropdowns in navs only for static navigation, not dynamic tab panels.

---

## CSS Variables

Added in **Bootstrap v5.2.0** (`.nav-underline` in **v5.3.0**). Navs use local CSS variables on `.nav`, `.nav-tabs`, `.nav-pills`, and `.nav-underline`.

### On `.nav` (base)

```scss
--#{$prefix}nav-link-padding-x: #{$nav-link-padding-x};
--#{$prefix}nav-link-padding-y: #{$nav-link-padding-y};
--#{$prefix}nav-link-font-size: #{$nav-link-font-size};
--#{$prefix}nav-link-font-weight: #{$nav-link-font-weight};
--#{$prefix}nav-link-color: #{$nav-link-color};
--#{$prefix}nav-link-hover-color: #{$nav-link-hover-color};
--#{$prefix}nav-link-disabled-color: #{$nav-link-disabled-color};
```

### On `.nav-tabs`

```scss
--#{$prefix}nav-tabs-border-width: #{$nav-tabs-border-width};
--#{$prefix}nav-tabs-border-color: #{$nav-tabs-border-color};
--#{$prefix}nav-tabs-border-radius: #{$nav-tabs-border-radius};
--#{$prefix}nav-tabs-link-hover-border-color: #{$nav-tabs-link-hover-border-color};
--#{$prefix}nav-tabs-link-active-color: #{$nav-tabs-link-active-color};
--#{$prefix}nav-tabs-link-active-bg: #{$nav-tabs-link-active-bg};
--#{$prefix}nav-tabs-link-active-border-color: #{$nav-tabs-link-active-border-color};
```

### On `.nav-pills`

```scss
--#{$prefix}nav-pills-border-radius: #{$nav-pills-border-radius};
--#{$prefix}nav-pills-link-active-color: #{$nav-pills-link-active-color};
--#{$prefix}nav-pills-link-active-bg: #{$nav-pills-link-active-bg};
```

### On `.nav-underline` (v5.3.0+)

```scss
--#{$prefix}nav-underline-gap: #{$nav-underline-gap};
--#{$prefix}nav-underline-border-width: #{$nav-underline-border-width};
--#{$prefix}nav-underline-link-active-color: #{$nav-underline-link-active-color};
```

### Example: Override via CSS

```css
.nav-tabs {
  --bs-nav-tabs-border-radius: 0.5rem;
  --bs-nav-tabs-link-active-bg: #f8f9fa;
}

.nav-pills {
  --bs-nav-pills-link-active-bg: #6f42c1;
}
```

---

## Sass Variables

Defined in `scss/_variables.scss`:

```scss
/* Base nav link */
$nav-link-padding-y:                .5rem;
$nav-link-padding-x:                1rem;
$nav-link-font-size:                null;
$nav-link-font-weight:              null;
$nav-link-color:                    var(--#{$prefix}link-color);
$nav-link-hover-color:              var(--#{$prefix}link-hover-color);
$nav-link-transition:               color .15s ease-in-out,
                                    background-color .15s ease-in-out,
                                    border-color .15s ease-in-out;
$nav-link-disabled-color:           var(--#{$prefix}secondary-color);
$nav-link-focus-box-shadow:         $focus-ring-box-shadow;

/* Tabs */
$nav-tabs-border-color:             var(--#{$prefix}border-color);
$nav-tabs-border-width:             var(--#{$prefix}border-width);
$nav-tabs-border-radius:            var(--#{$prefix}border-radius);
$nav-tabs-link-hover-border-color:  var(--#{$prefix}secondary-bg)
                                    var(--#{$prefix}secondary-bg)
                                    $nav-tabs-border-color;
$nav-tabs-link-active-color:        var(--#{$prefix}emphasis-color);
$nav-tabs-link-active-bg:           var(--#{$prefix}body-bg);
$nav-tabs-link-active-border-color: var(--#{$prefix}border-color)
                                    var(--#{$prefix}border-color)
                                    $nav-tabs-link-active-bg;

/* Pills */
$nav-pills-border-radius:           var(--#{$prefix}border-radius);
$nav-pills-link-active-color:       $component-active-color;
$nav-pills-link-active-bg:          $component-active-bg;

/* Underline (v5.3.0) */
$nav-underline-gap:                 1rem;
$nav-underline-border-width:        .125rem;
$nav-underline-link-active-color:   var(--#{$prefix}emphasis-color);
```

---

## JavaScript Behavior

Use the **Tab plugin** (`bootstrap.Tab`) to wire up `.nav-tabs` or `.nav-pills` as dynamic tabbed content panes.

### Full tabbable tabs example (`<ul>`-based)

```html
<!-- Tab nav -->
<ul class="nav nav-tabs" id="myTab" role="tablist">
  <li class="nav-item" role="presentation">
    <button class="nav-link active" id="home-tab"
      data-bs-toggle="tab" data-bs-target="#home-tab-pane"
      type="button" role="tab"
      aria-controls="home-tab-pane" aria-selected="true">Home</button>
  </li>
  <li class="nav-item" role="presentation">
    <button class="nav-link" id="profile-tab"
      data-bs-toggle="tab" data-bs-target="#profile-tab-pane"
      type="button" role="tab"
      aria-controls="profile-tab-pane" aria-selected="false">Profile</button>
  </li>
  <li class="nav-item" role="presentation">
    <button class="nav-link" id="contact-tab"
      data-bs-toggle="tab" data-bs-target="#contact-tab-pane"
      type="button" role="tab"
      aria-controls="contact-tab-pane" aria-selected="false">Contact</button>
  </li>
  <li class="nav-item" role="presentation">
    <button class="nav-link" id="disabled-tab"
      data-bs-toggle="tab" data-bs-target="#disabled-tab-pane"
      type="button" role="tab"
      aria-controls="disabled-tab-pane" aria-selected="false" disabled>Disabled</button>
  </li>
</ul>

<!-- Tab panes -->
<div class="tab-content" id="myTabContent">
  <div class="tab-pane fade show active" id="home-tab-pane"
    role="tabpanel" aria-labelledby="home-tab" tabindex="0">
    Home content...
  </div>
  <div class="tab-pane fade" id="profile-tab-pane"
    role="tabpanel" aria-labelledby="profile-tab" tabindex="0">
    Profile content...
  </div>
  <div class="tab-pane fade" id="contact-tab-pane"
    role="tabpanel" aria-labelledby="contact-tab" tabindex="0">
    Contact content...
  </div>
  <div class="tab-pane fade" id="disabled-tab-pane"
    role="tabpanel" aria-labelledby="disabled-tab" tabindex="0">
    Disabled content...
  </div>
</div>
```

### `<nav>`-based tabbable tabs

When using `<nav>`, do **not** put `role="tablist"` on the `<nav>` element — it would override the native landmark role. Put `role="tablist"` on an **inner `<div>`** instead.

```html
<nav>
  <div class="nav nav-tabs" id="nav-tab" role="tablist">
    <button class="nav-link active" id="nav-home-tab"
      data-bs-toggle="tab" data-bs-target="#nav-home"
      type="button" role="tab"
      aria-controls="nav-home" aria-selected="true">Home</button>
    <button class="nav-link" id="nav-profile-tab"
      data-bs-toggle="tab" data-bs-target="#nav-profile"
      type="button" role="tab"
      aria-controls="nav-profile" aria-selected="false">Profile</button>
    <button class="nav-link" id="nav-contact-tab"
      data-bs-toggle="tab" data-bs-target="#nav-contact"
      type="button" role="tab"
      aria-controls="nav-contact" aria-selected="false">Contact</button>
    <button class="nav-link" id="nav-disabled-tab"
      data-bs-toggle="tab" data-bs-target="#nav-disabled"
      type="button" role="tab"
      aria-controls="nav-disabled" aria-selected="false" disabled>Disabled</button>
  </div>
</nav>
<div class="tab-content" id="nav-tabContent">
  <div class="tab-pane fade show active" id="nav-home"
    role="tabpanel" aria-labelledby="nav-home-tab" tabindex="0">...</div>
  <div class="tab-pane fade" id="nav-profile"
    role="tabpanel" aria-labelledby="nav-profile-tab" tabindex="0">...</div>
  <div class="tab-pane fade" id="nav-contact"
    role="tabpanel" aria-labelledby="nav-contact-tab" tabindex="0">...</div>
  <div class="tab-pane fade" id="nav-disabled"
    role="tabpanel" aria-labelledby="nav-disabled-tab" tabindex="0">...</div>
</div>
```

### Pills as tabbable interface

Replace `data-bs-toggle="tab"` with `data-bs-toggle="pill"` and use `.nav-pills`:

```html
<ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">
  <li class="nav-item" role="presentation">
    <button class="nav-link active" id="pills-home-tab"
      data-bs-toggle="pill" data-bs-target="#pills-home"
      type="button" role="tab"
      aria-controls="pills-home" aria-selected="true">Home</button>
  </li>
  <li class="nav-item" role="presentation">
    <button class="nav-link" id="pills-profile-tab"
      data-bs-toggle="pill" data-bs-target="#pills-profile"
      type="button" role="tab"
      aria-controls="pills-profile" aria-selected="false">Profile</button>
  </li>
  <li class="nav-item" role="presentation">
    <button class="nav-link" id="pills-contact-tab"
      data-bs-toggle="pill" data-bs-target="#pills-contact"
      type="button" role="tab"
      aria-controls="pills-contact" aria-selected="false">Contact</button>
  </li>
</ul>
<div class="tab-content" id="pills-tabContent">
  <div class="tab-pane fade show active" id="pills-home"
    role="tabpanel" aria-labelledby="pills-home-tab" tabindex="0">...</div>
  <div class="tab-pane fade" id="pills-profile"
    role="tabpanel" aria-labelledby="pills-profile-tab" tabindex="0">...</div>
  <div class="tab-pane fade" id="pills-contact"
    role="tabpanel" aria-labelledby="pills-contact-tab" tabindex="0">...</div>
</div>
```

### Vertical pills

Add `aria-orientation="vertical"` to the tab list container when using vertical tabs.

```html
<div class="d-flex align-items-start">
  <!-- Vertical pill nav -->
  <div class="nav flex-column nav-pills me-3" id="v-pills-tab"
    role="tablist" aria-orientation="vertical">
    <button class="nav-link active" id="v-pills-home-tab"
      data-bs-toggle="pill" data-bs-target="#v-pills-home"
      type="button" role="tab"
      aria-controls="v-pills-home" aria-selected="true">Home</button>
    <button class="nav-link" id="v-pills-profile-tab"
      data-bs-toggle="pill" data-bs-target="#v-pills-profile"
      type="button" role="tab"
      aria-controls="v-pills-profile" aria-selected="false">Profile</button>
    <button class="nav-link" id="v-pills-disabled-tab"
      data-bs-toggle="pill" data-bs-target="#v-pills-disabled"
      type="button" role="tab"
      aria-controls="v-pills-disabled" aria-selected="false" disabled>Disabled</button>
    <button class="nav-link" id="v-pills-messages-tab"
      data-bs-toggle="pill" data-bs-target="#v-pills-messages"
      type="button" role="tab"
      aria-controls="v-pills-messages" aria-selected="false">Messages</button>
    <button class="nav-link" id="v-pills-settings-tab"
      data-bs-toggle="pill" data-bs-target="#v-pills-settings"
      type="button" role="tab"
      aria-controls="v-pills-settings" aria-selected="false">Settings</button>
  </div>

  <!-- Tab panes -->
  <div class="tab-content" id="v-pills-tabContent">
    <div class="tab-pane fade show active" id="v-pills-home"
      role="tabpanel" aria-labelledby="v-pills-home-tab" tabindex="0">...</div>
    <div class="tab-pane fade" id="v-pills-profile"
      role="tabpanel" aria-labelledby="v-pills-profile-tab" tabindex="0">...</div>
    <div class="tab-pane fade" id="v-pills-disabled"
      role="tabpanel" aria-labelledby="v-pills-disabled-tab" tabindex="0">...</div>
    <div class="tab-pane fade" id="v-pills-messages"
      role="tabpanel" aria-labelledby="v-pills-messages-tab" tabindex="0">...</div>
    <div class="tab-pane fade" id="v-pills-settings"
      role="tabpanel" aria-labelledby="v-pills-settings-tab" tabindex="0">...</div>
  </div>
</div>
```

---

## Accessibility (Dynamic Tabs)

Dynamic tabbed interfaces require these ARIA roles and attributes:

| Element | Required attributes |
|---|---|
| Tab list container | `role="tablist"` |
| Each tab trigger `<button>` | `role="tab"`, `aria-controls="{pane-id}"`, `aria-selected="true/false"` |
| Each tab pane | `role="tabpanel"`, `aria-labelledby="{tab-id}"`, `tabindex="0"` |

**Additional notes:**

- Use **`<button>` elements** for tab triggers — they trigger dynamic changes, not page navigation.
- The plugin automatically manages **roving `tabindex`**: only the active tab is in the tab order; inactive tabs get `tabindex="-1"`.
- Keyboard navigation: **arrow keys** (left/up = previous, right/down = next), **Home** = first tab, **End** = last tab.
- The plugin does **not** distinguish horizontal vs vertical orientation for keyboard navigation — left/up both go to previous, right/down both go to next, regardless of layout.
- Add `tabindex="0"` to tab panes to make the panel itself focusable — recommended unless the first meaningful element inside is already focusable.
- Do **not** add `role="tablist"` directly to a `<nav>` element — put it on an inner `<div>`.
- `aria-current` is for **static** navs; `aria-selected` is for **dynamic** tabbed interfaces (managed automatically by the plugin).

---

## Using Data Attributes

No JavaScript needed — add `data-bs-toggle="tab"` (tabs) or `data-bs-toggle="pill"` (pills) directly to buttons.

```html
<!-- Tab nav -->
<ul class="nav nav-tabs" id="myTab" role="tablist">
  <li class="nav-item" role="presentation">
    <button class="nav-link active" id="home-tab"
      data-bs-toggle="tab" data-bs-target="#home"
      type="button" role="tab"
      aria-controls="home" aria-selected="true">Home</button>
  </li>
  <li class="nav-item" role="presentation">
    <button class="nav-link" id="profile-tab"
      data-bs-toggle="tab" data-bs-target="#profile"
      type="button" role="tab"
      aria-controls="profile" aria-selected="false">Profile</button>
  </li>
  <li class="nav-item" role="presentation">
    <button class="nav-link" id="messages-tab"
      data-bs-toggle="tab" data-bs-target="#messages"
      type="button" role="tab"
      aria-controls="messages" aria-selected="false">Messages</button>
  </li>
  <li class="nav-item" role="presentation">
    <button class="nav-link" id="settings-tab"
      data-bs-toggle="tab" data-bs-target="#settings"
      type="button" role="tab"
      aria-controls="settings" aria-selected="false">Settings</button>
  </li>
</ul>

<!-- Tab panes -->
<div class="tab-content">
  <div class="tab-pane active" id="home"
    role="tabpanel" aria-labelledby="home-tab" tabindex="0">...</div>
  <div class="tab-pane" id="profile"
    role="tabpanel" aria-labelledby="profile-tab" tabindex="0">...</div>
  <div class="tab-pane" id="messages"
    role="tabpanel" aria-labelledby="messages-tab" tabindex="0">...</div>
  <div class="tab-pane" id="settings"
    role="tabpanel" aria-labelledby="settings-tab" tabindex="0">...</div>
</div>
```

---

## Via JavaScript

Each tab trigger must be activated individually.

### Initialize all tabs

```javascript
const triggerTabList = document.querySelectorAll('#myTab button')
triggerTabList.forEach(triggerEl => {
  const tabTrigger = new bootstrap.Tab(triggerEl)

  triggerEl.addEventListener('click', event => {
    event.preventDefault()
    tabTrigger.show()
  })
})
```

### Activate specific tabs programmatically

```javascript
// By data-bs-target value
const triggerEl = document.querySelector('#myTab button[data-bs-target="#profile"]')
bootstrap.Tab.getInstance(triggerEl).show()

// First tab
const firstTabEl = document.querySelector('#myTab li:first-child button')
bootstrap.Tab.getInstance(firstTabEl).show()

// Using the constructor directly
const bsTab = new bootstrap.Tab('#myTab')
```

---

## Fade Effect

Add `.fade` to each `.tab-pane` for a fade-in transition. The **initially active pane** needs both `.fade` and `.show`.

```html
<div class="tab-content">
  <!-- First pane: needs .show AND .active -->
  <div class="tab-pane fade show active" id="home"
    role="tabpanel" aria-labelledby="home-tab" tabindex="0">...</div>
  <div class="tab-pane fade" id="profile"
    role="tabpanel" aria-labelledby="profile-tab" tabindex="0">...</div>
  <div class="tab-pane fade" id="messages"
    role="tabpanel" aria-labelledby="messages-tab" tabindex="0">...</div>
  <div class="tab-pane fade" id="settings"
    role="tabpanel" aria-labelledby="settings-tab" tabindex="0">...</div>
</div>
```

---

## Methods Reference

> All API methods are **asynchronous** — they return as soon as the transition starts, not when it ends. Method calls on a transitioning component are ignored.

| Method | Description |
|---|---|
| `show` | Selects the tab and shows its associated pane. Deselects and hides any previously active tab + pane. Returns before the pane is fully shown. |
| `dispose` | Destroys the tab instance. |
| `getInstance(element)` | Static — returns the tab instance for a DOM element. |
| `getOrCreateInstance(element)` | Static — returns an existing instance or creates a new one. |

```javascript
const tabEl = document.querySelector('#myTab button[data-bs-target="#profile"]')
const tab = bootstrap.Tab.getOrCreateInstance(tabEl)

tab.show()    // activate this tab
tab.dispose() // destroy instance
```

---

## Events Reference

Events fire in this **specific order** when switching tabs:

1. `hide.bs.tab` — on the current (outgoing) active tab
2. `show.bs.tab` — on the incoming (to-be-shown) tab
3. `hidden.bs.tab` — on the now-hidden tab (after transition)
4. `shown.bs.tab` — on the newly active tab (after transition)

> If no tab was previously active, `hide.bs.tab` and `hidden.bs.tab` will **not** fire.

| Event | Fires... | `event.target` | `event.relatedTarget` |
|---|---|---|---|
| `show.bs.tab` | Before new tab is shown | Incoming (to-be-shown) tab | Previous active tab |
| `shown.bs.tab` | After new tab is fully visible | Newly active tab | Previous active tab |
| `hide.bs.tab` | When active tab is about to be hidden | Current active (to-be-hidden) tab | Incoming tab |
| `hidden.bs.tab` | After active tab is fully hidden | Now-hidden tab | New active tab |

```javascript
const tabEl = document.querySelector('button[data-bs-toggle="tab"]')

tabEl.addEventListener('shown.bs.tab', event => {
  console.log('Now active:', event.target)        // newly activated tab
  console.log('Was active:', event.relatedTarget) // previous active tab
})

tabEl.addEventListener('hide.bs.tab', event => {
  console.log('Hiding:', event.target)
  console.log('Showing next:', event.relatedTarget)
})
```

---

## Quick Reference

```html
<!-- Base nav styles -->
<ul class="nav">...</ul>                        <!-- plain nav -->
<ul class="nav nav-tabs">...</ul>               <!-- tabs style -->
<ul class="nav nav-pills">...</ul>              <!-- pills style -->
<ul class="nav nav-underline">...</ul>          <!-- underline style (v5.3+) -->

<!-- Horizontal alignment -->
<ul class="nav justify-content-center">...</ul> <!-- centered -->
<ul class="nav justify-content-end">...</ul>    <!-- right-aligned -->

<!-- Vertical -->
<ul class="nav flex-column">...</ul>

<!-- Fill / justify -->
<ul class="nav nav-pills nav-fill">...</ul>      <!-- proportional widths -->
<ul class="nav nav-pills nav-justified">...</ul> <!-- equal widths -->

<!-- Responsive: stacked mobile, horizontal + filled sm+ -->
<nav class="nav nav-pills flex-column flex-sm-row">
  <a class="flex-sm-fill text-sm-center nav-link active" href="#">Active</a>
  <a class="flex-sm-fill text-sm-center nav-link" href="#">Link</a>
</nav>

<!-- Dropdown in tab/pill nav -->
<li class="nav-item dropdown">
  <a class="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button">Dropdown</a>
  <ul class="dropdown-menu">...</ul>
</li>

<!-- Dynamic tab interface (tabs) -->
<ul class="nav nav-tabs" id="myTab" role="tablist">
  <li class="nav-item" role="presentation">
    <button class="nav-link active" id="home-tab"
      data-bs-toggle="tab" data-bs-target="#home"
      type="button" role="tab"
      aria-controls="home" aria-selected="true">Home</button>
  </li>
</ul>
<div class="tab-content">
  <div class="tab-pane fade show active" id="home"
    role="tabpanel" aria-labelledby="home-tab" tabindex="0">...</div>
</div>

<!-- Dynamic tab interface (pills) — use data-bs-toggle="pill" -->
<button class="nav-link" data-bs-toggle="pill" data-bs-target="#pane">Tab</button>

<!-- Vertical pills with ARIA orientation -->
<div class="nav flex-column nav-pills" role="tablist" aria-orientation="vertical">...</div>
```

---