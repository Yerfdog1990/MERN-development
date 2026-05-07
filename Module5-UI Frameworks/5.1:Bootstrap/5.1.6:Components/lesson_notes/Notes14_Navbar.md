# Bootstrap Navbar 

Bootstrap's powerful, responsive navigation header with support for branding, navigation, forms, and more — including the Collapse plugin.

## Table of Contents
- [How It Works](#how-it-works)
- [Supported Content](#supported-content)
- [Full Example](#full-example)
- [Brand](#brand)
- [Nav Links](#nav-links)
- [Forms in Navbar](#forms-in-navbar)
- [Navbar Text](#navbar-text)
- [Color Schemes](#color-schemes)
- [Containers](#containers)
- [Placement](#placement)
- [Scrolling](#scrolling)
- [Responsive Behaviors & Toggler](#responsive-behaviors--toggler)
- [External Content](#external-content)
- [Offcanvas Navbar](#offcanvas-navbar)
- [CSS Variables](#css-variables)
- [Sass Variables](#sass-variables)
- [Sass Loops](#sass-loops)

---

## How It Works

Key rules before building with navbar:

- Navbars **require** `.navbar` plus a responsive expand class like `.navbar-expand-lg` for collapsing behavior.
- Navbar contents are **fluid by default**. Use containers to constrain horizontal width.
- Use **spacing and flex utilities** to control alignment.
- Responsive collapsing depends on the **Collapse JavaScript plugin**.
- Use a `<nav>` element for accessibility, or add `role="navigation"` to any other element used as a navbar.
- Mark the current page link with `aria-current="page"`, or the current item in a set with `aria-current="true"`.
- Animation respects `prefers-reduced-motion`.

**Version notes:**
- **v5.2.0:** Navbar theming moved to CSS variables. `.navbar-light` deprecated.
- **v5.3.0:** `.navbar-dark` rewritten to override CSS variables instead of adding styles. Use `data-bs-theme="dark"` instead.

---

## Supported Content

Built-in navbar sub-components:

| Sub-component | Description |
|---|---|
| `.navbar-brand` | Company, product, or project name/logo |
| `.navbar-nav` | Full-height lightweight nav with dropdown support |
| `.navbar-toggler` | Hamburger button for the Collapse plugin |
| `.navbar-text` | Vertically centered inline text |
| `.collapse.navbar-collapse` | Groups and hides content below a breakpoint |
| `.navbar-nav-scroll` | Adds max-height + scroll to collapsed nav content |
| Flex/spacing utilities | For any form controls and actions |

---

## Full Example

A complete responsive navbar that collapses at `lg`, including brand, nav links, a dropdown, a disabled link, and a search form.

```html
<nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">

    <!-- Brand -->
    <a class="navbar-brand" href="#">Navbar</a>

    <!-- Toggler (hamburger button for mobile) -->
    <button class="navbar-toggler" type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

    <!-- Collapsible content -->
    <div class="collapse navbar-collapse" id="navbarSupportedContent">

      <!-- Nav links -->
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Link</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button"
            data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><hr class="dropdown-divider"></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
        <li class="nav-item">
          <a class="nav-link disabled" aria-disabled="true">Disabled</a>
        </li>
      </ul>

      <!-- Search form -->
      <form class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>

    </div>
  </div>
</nav>
```

**Key utility classes used:**
- `me-auto` — pushes the form to the right by consuming all available space after the nav.
- `mb-2 mb-lg-0` — adds bottom margin on mobile, removes it on `lg+`.
- `me-2` — right margin on the search input.

---

## Brand

`.navbar-brand` can be applied to most elements — anchors work best. It can contain text, an image, or both.

### Text brand

```html
<!-- As a link -->
<nav class="navbar bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Navbar</a>
  </div>
</nav>

<!-- As a heading (use .mb-0.h1 to reset heading margins/size) -->
<nav class="navbar bg-body-tertiary">
  <div class="container-fluid">
    <span class="navbar-brand mb-0 h1">Navbar</span>
  </div>
</nav>
```

### Image brand

```html
<nav class="navbar bg-body-tertiary">
  <div class="container">
    <a class="navbar-brand" href="#">
      <img src="/assets/logo.svg" alt="Brand" width="30" height="24">
    </a>
  </div>
</nav>
```

### Image + text brand

Add `.d-inline-block` and `.align-text-top` to the `<img>` to align it with the text.

```html
<nav class="navbar bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">
      <img src="/assets/logo.svg" alt="Logo" width="30" height="24"
        class="d-inline-block align-text-top">
      Bootstrap
    </a>
  </div>
</nav>
```

---

## Nav Links

Navbar navigation uses `.navbar-nav` + `.nav-item` + `.nav-link`. Nav links grow to fill available horizontal space by default.

- Add `.active` + `aria-current="page"` to the current page link.
- Add `.disabled` + `aria-disabled="true"` to inactive links.

### Standard `<ul>` markup (recommended)

```html
<ul class="navbar-nav">
  <li class="nav-item">
    <a class="nav-link active" aria-current="page" href="#">Home</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">Features</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">Pricing</a>
  </li>
  <li class="nav-item">
    <a class="nav-link disabled" aria-disabled="true">Disabled</a>
  </li>
</ul>
```

### Alternative flat markup (no `<ul>`)

```html
<div class="navbar-nav">
  <a class="nav-link active" aria-current="page" href="#">Home</a>
  <a class="nav-link" href="#">Features</a>
  <a class="nav-link" href="#">Pricing</a>
  <a class="nav-link disabled" aria-disabled="true">Disabled</a>
</div>
```

### With dropdown

Dropdowns in navbars require **separate nested** `.nav-item` and `.nav-link` elements for the wrapping/positioning to work correctly.

```html
<ul class="navbar-nav">
  <li class="nav-item">
    <a class="nav-link active" aria-current="page" href="#">Home</a>
  </li>
  <li class="nav-item dropdown">
    <a class="nav-link dropdown-toggle" href="#" role="button"
      data-bs-toggle="dropdown" aria-expanded="false">
      Dropdown link
    </a>
    <ul class="dropdown-menu">
      <li><a class="dropdown-item" href="#">Action</a></li>
      <li><a class="dropdown-item" href="#">Another action</a></li>
      <li><a class="dropdown-item" href="#">Something else here</a></li>
    </ul>
  </li>
</ul>
```

> **Note:** Popper is **not** used to position dropdown menus inside navbars — dynamic positioning isn't needed there.

---

## Forms in Navbar

Navbar children use flex layout with `justify-content: space-between` by default. Add flex utilities as needed.

### Simple search form

```html
<nav class="navbar bg-body-tertiary">
  <div class="container-fluid">
    <form class="d-flex" role="search">
      <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
      <button class="btn btn-outline-success" type="submit">Search</button>
    </form>
  </div>
</nav>
```

### Brand + search form

```html
<nav class="navbar bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand">Navbar</a>
    <form class="d-flex" role="search">
      <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
      <button class="btn btn-outline-success" type="submit">Search</button>
    </form>
  </div>
</nav>
```

### Input group (entire navbar is a form)

When the navbar is mostly a form, use `<form>` as the container to save HTML.

```html
<nav class="navbar bg-body-tertiary">
  <form class="container-fluid">
    <div class="input-group">
      <span class="input-group-text" id="basic-addon1">@</span>
      <input type="text" class="form-control" placeholder="Username"
        aria-label="Username" aria-describedby="basic-addon1">
    </div>
  </form>
</nav>
```

### Multiple buttons

```html
<nav class="navbar bg-body-tertiary">
  <form class="container-fluid justify-content-start">
    <button class="btn btn-outline-success me-2" type="button">Main button</button>
    <button class="btn btn-sm btn-outline-secondary" type="button">Smaller button</button>
  </form>
</nav>
```

---

## Navbar Text

Use `.navbar-text` for inline text that is vertically centered and properly spaced within the navbar.

```html
<!-- Standalone text -->
<nav class="navbar bg-body-tertiary">
  <div class="container-fluid">
    <span class="navbar-text">
      Navbar text with an inline element
    </span>
  </div>
</nav>
```

### Mixed with nav links

```html
<nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Navbar w/ text</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
      data-bs-target="#navbarText" aria-controls="navbarText"
      aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarText">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Features</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Pricing</a>
        </li>
      </ul>
      <span class="navbar-text">
        Navbar text with an inline element
      </span>
    </div>
  </div>
</nav>
```

---

## Color Schemes

> **v5.3.0:** `.navbar-dark` has been rewritten using CSS variable overrides. Use `data-bs-theme="dark"` for dark navbars. `.navbar-light` is **deprecated**.

Navbar colors default to the "light" appearance via CSS variables on `.navbar`. Override with `data-bs-theme="dark"` and combine with `.bg-*` utilities or inline styles.

```html
<!-- Dark background -->
<nav class="navbar bg-dark border-bottom border-body" data-bs-theme="dark">
  <!-- Navbar content -->
</nav>

<!-- Primary background -->
<nav class="navbar bg-primary" data-bs-theme="dark">
  <!-- Navbar content -->
</nav>

<!-- Custom light color -->
<nav class="navbar" style="background-color: #e3f2fd;" data-bs-theme="light">
  <!-- Navbar content -->
</nav>
```

**How theming works:**

| Approach | Effect |
|---|---|
| Default (no theme attr) | Light navbar via CSS variable defaults |
| `data-bs-theme="dark"` on `.navbar` | Overrides CSS vars for dark text/icons |
| `.bg-*` utility | Controls background color |
| Inline `style="background-color: ..."` | Custom background color |

---

## Containers

Wrap a navbar in a `.container` to center it on the page. An inner container within `.navbar` is still required.

```html
<!-- Centered navbar -->
<div class="container">
  <nav class="navbar navbar-expand-lg bg-body-tertiary">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">Navbar</a>
    </div>
  </nav>
</div>
```

Use responsive containers to control content width at specific breakpoints:

```html
<nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-md">
    <a class="navbar-brand" href="#">Navbar</a>
  </div>
</nav>
```

---

## Placement

Use position utility classes on `.navbar` to control where it sits on the page.

| Class | Behavior |
|---|---|
| *(none)* | Default static flow |
| `.fixed-top` | Fixed to top — always visible, pulled from DOM flow |
| `.fixed-bottom` | Fixed to bottom — always visible, pulled from DOM flow |
| `.sticky-top` | Sticks to top when scrolled to; scrolls with page until then |
| `.sticky-bottom` | Sticks to bottom when scrolled to |

> **Fixed navbars warning:** `position: fixed` pulls the navbar out of the normal DOM flow. Add `padding-top` to `<body>` to prevent content from being hidden underneath it.

```html
<nav class="navbar fixed-top bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Fixed top</a>
  </div>
</nav>

<nav class="navbar fixed-bottom bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Fixed bottom</a>
  </div>
</nav>

<nav class="navbar sticky-top bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Sticky top</a>
  </div>
</nav>

<nav class="navbar sticky-bottom bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Sticky bottom</a>
  </div>
</nav>
```

---

## Scrolling

Add `.navbar-nav-scroll` to `.navbar-nav` to enable vertical scrolling within a collapsed navbar's content. Default max-height is `75vh`, overridable via `--bs-scroll-height`.

> **Caveat:** `overflow-y: auto` causes `overflow-x` to also become `auto`, which may clip some horizontal content.

```html
<nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Navbar scroll</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
      data-bs-target="#navbarScroll" aria-controls="navbarScroll"
      aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarScroll">
      <!-- --bs-scroll-height overrides the default 75vh max-height -->
      <ul class="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll"
        style="--bs-scroll-height: 100px;">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Link</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button"
            data-bs-toggle="dropdown" aria-expanded="false">Link</a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><hr class="dropdown-divider"></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
        <li class="nav-item">
          <a class="nav-link disabled" aria-disabled="true">Link</a>
        </li>
      </ul>
      <form class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
```

---

## Responsive Behaviors & Toggler

Control when the navbar collapses using `.navbar-expand-{breakpoint}`:

| Class | Collapses below... |
|---|---|
| `.navbar-expand` | Never collapses (always expanded) |
| `.navbar-expand-sm` | 576px |
| `.navbar-expand-md` | 768px |
| `.navbar-expand-lg` | 992px |
| `.navbar-expand-xl` | 1200px |
| `.navbar-expand-xxl` | 1400px |
| *(no expand class)* | Always collapsed |

The toggler button is **left-aligned by default** but moves to the far right when it follows a `.navbar-brand` sibling. Reverse markup order to reverse toggler position.

### Brand left, toggler right (most common)

```html
<nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
      data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02"
      aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Link</a>
        </li>
        <li class="nav-item">
          <a class="nav-link disabled" aria-disabled="true">Disabled</a>
        </li>
      </ul>
      <form class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
```

### Toggler left, brand right (reversed markup)

```html
<nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <!-- Toggler first in markup = left side -->
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
      data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03"
      aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <!-- Brand after toggler = right side -->
    <a class="navbar-brand" href="#">Navbar</a>
    <div class="collapse navbar-collapse" id="navbarTogglerDemo03">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">...</ul>
    </div>
  </div>
</nav>
```

### Hidden brand (brand inside collapse)

The brand is hidden on mobile (inside the collapsed content) and shown when expanded.

```html
<nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
      data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01"
      aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
      <!-- Brand is inside the collapse — hidden on mobile -->
      <a class="navbar-brand" href="#">Hidden brand</a>
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">...</ul>
    </div>
  </div>
</nav>
```

---

## External Content

Use the collapse plugin to toggle content that lives **outside** the `.navbar` element entirely. Works because the plugin matches on `id` + `data-bs-target`.

```html
<!-- External collapsible content — lives outside .navbar -->
<div class="collapse" id="navbarToggleExternalContent" data-bs-theme="dark">
  <div class="bg-dark p-4">
    <h5 class="text-body-emphasis h4">Collapsed content</h5>
    <span class="text-body-secondary">Toggleable via the navbar brand.</span>
  </div>
</div>

<!-- Navbar with toggler pointing to the external content -->
<nav class="navbar navbar-dark bg-dark">
  <div class="container-fluid">
    <button class="navbar-toggler" type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarToggleExternalContent"
      aria-controls="navbarToggleExternalContent"
      aria-expanded="false"
      aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
  </div>
</nav>
```

> **Accessibility:** When the external content is opened, move focus to it programmatically so keyboard users and assistive technology users can find it. Use `aria-controls` on the toggler pointing to the content's `id`.

---

## Offcanvas Navbar

Replace the standard collapse behavior with an **offcanvas drawer** by using the offcanvas component. Swap `data-bs-toggle="collapse"` for `data-bs-toggle="offcanvas"`.

### Always offcanvas (omit `.navbar-expand-*`)

```html
<nav class="navbar bg-body-tertiary fixed-top">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Offcanvas navbar</a>
    <button class="navbar-toggler" type="button"
      data-bs-toggle="offcanvas"
      data-bs-target="#offcanvasNavbar"
      aria-controls="offcanvasNavbar"
      aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="offcanvas offcanvas-end" tabindex="-1"
      id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
      <div class="offcanvas-header">
        <h5 class="offcanvas-title" id="offcanvasNavbarLabel">Offcanvas</h5>
        <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div class="offcanvas-body">
        <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Link</a>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" role="button"
              data-bs-toggle="dropdown" aria-expanded="false">Dropdown</a>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="#">Action</a></li>
              <li><a class="dropdown-item" href="#">Another action</a></li>
              <li><hr class="dropdown-divider"></li>
              <li><a class="dropdown-item" href="#">Something else here</a></li>
            </ul>
          </li>
        </ul>
        <form class="d-flex mt-3" role="search">
          <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
          <button class="btn btn-outline-success" type="submit">Search</button>
        </form>
      </div>
    </div>
  </div>
</nav>
```

### Offcanvas on mobile, normal navbar on large screens

Add `.navbar-expand-lg` to expand into a regular navbar at `lg+`:

```html
<nav class="navbar navbar-expand-lg bg-body-tertiary fixed-top">
  <a class="navbar-brand" href="#">Offcanvas navbar</a>
  <button class="navbar-toggler" type="button"
    data-bs-toggle="offcanvas"
    data-bs-target="#navbarOffcanvasLg"
    aria-controls="navbarOffcanvasLg"
    aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="offcanvas offcanvas-end" tabindex="-1"
    id="navbarOffcanvasLg" aria-labelledby="navbarOffcanvasLgLabel">
    ...
  </div>
</nav>
```

### Dark offcanvas navbar

When the navbar is dark, apply these classes to keep the offcanvas readable:

| Element | Required class |
|---|---|
| `.navbar` | `.navbar-dark .bg-dark` |
| `.offcanvas` | `.text-bg-dark` |
| `.dropdown-menu` | `.dropdown-menu-dark` |
| `.btn-close` | `.btn-close-white` |

```html
<nav class="navbar navbar-dark bg-dark fixed-top">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Offcanvas dark navbar</a>
    <button class="navbar-toggler" type="button"
      data-bs-toggle="offcanvas"
      data-bs-target="#offcanvasDarkNavbar"
      aria-controls="offcanvasDarkNavbar"
      aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="offcanvas offcanvas-end text-bg-dark" tabindex="-1"
      id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel">
      <div class="offcanvas-header">
        <h5 class="offcanvas-title" id="offcanvasDarkNavbarLabel">Dark offcanvas</h5>
        <button type="button" class="btn-close btn-close-white"
          data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div class="offcanvas-body">
        <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">Home</a>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" role="button"
              data-bs-toggle="dropdown" aria-expanded="false">Dropdown</a>
            <ul class="dropdown-menu dropdown-menu-dark">
              <li><a class="dropdown-item" href="#">Action</a></li>
              <li><a class="dropdown-item" href="#">Another action</a></li>
              <li><hr class="dropdown-divider"></li>
              <li><a class="dropdown-item" href="#">Something else here</a></li>
            </ul>
          </li>
        </ul>
        <form class="d-flex mt-3" role="search">
          <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
          <button class="btn btn-success" type="submit">Search</button>
        </form>
      </div>
    </div>
  </div>
</nav>
```

---

## CSS Variables

Added in **Bootstrap v5.2.0**. Navbars use local CSS variables on `.navbar` for real-time customization.

Defined in `scss/_navbar.scss`:

```scss
/* .navbar variables */
--#{$prefix}navbar-padding-x: #{if($navbar-padding-x == null, 0, $navbar-padding-x)};
--#{$prefix}navbar-padding-y: #{$navbar-padding-y};
--#{$prefix}navbar-color: #{$navbar-light-color};
--#{$prefix}navbar-hover-color: #{$navbar-light-hover-color};
--#{$prefix}navbar-disabled-color: #{$navbar-light-disabled-color};
--#{$prefix}navbar-active-color: #{$navbar-light-active-color};
--#{$prefix}navbar-brand-padding-y: #{$navbar-brand-padding-y};
--#{$prefix}navbar-brand-margin-end: #{$navbar-brand-margin-end};
--#{$prefix}navbar-brand-font-size: #{$navbar-brand-font-size};
--#{$prefix}navbar-brand-color: #{$navbar-light-brand-color};
--#{$prefix}navbar-brand-hover-color: #{$navbar-light-brand-hover-color};
--#{$prefix}navbar-nav-link-padding-x: #{$navbar-nav-link-padding-x};
--#{$prefix}navbar-toggler-padding-y: #{$navbar-toggler-padding-y};
--#{$prefix}navbar-toggler-padding-x: #{$navbar-toggler-padding-x};
--#{$prefix}navbar-toggler-font-size: #{$navbar-toggler-font-size};
--#{$prefix}navbar-toggler-icon-bg: #{escape-svg($navbar-light-toggler-icon-bg)};
--#{$prefix}navbar-toggler-border-color: #{$navbar-light-toggler-border-color};
--#{$prefix}navbar-toggler-border-radius: #{$navbar-toggler-border-radius};
--#{$prefix}navbar-toggler-focus-width: #{$navbar-toggler-focus-width};
--#{$prefix}navbar-toggler-transition: #{$navbar-toggler-transition};
```

Additional variables on `.navbar-nav`:

```scss
--#{$prefix}nav-link-padding-x: 0;
--#{$prefix}nav-link-padding-y: #{$nav-link-padding-y};
--#{$prefix}nav-link-font-size: #{$nav-link-font-size};
--#{$prefix}nav-link-font-weight: #{$nav-link-font-weight};
--#{$prefix}nav-link-color: var(--#{$prefix}navbar-color);
--#{$prefix}nav-link-hover-color: var(--#{$prefix}navbar-hover-color);
--#{$prefix}nav-link-disabled-color: var(--#{$prefix}navbar-disabled-color);
```

The `.navbar-dark` class overrides only the color-related variables — no duplicate selectors:

```scss
--#{$prefix}navbar-color: #{$navbar-dark-color};
--#{$prefix}navbar-hover-color: #{$navbar-dark-hover-color};
--#{$prefix}navbar-disabled-color: #{$navbar-dark-disabled-color};
--#{$prefix}navbar-active-color: #{$navbar-dark-active-color};
--#{$prefix}navbar-brand-color: #{$navbar-dark-brand-color};
--#{$prefix}navbar-brand-hover-color: #{$navbar-dark-brand-hover-color};
--#{$prefix}navbar-toggler-border-color: #{$navbar-dark-toggler-border-color};
--#{$prefix}navbar-toggler-icon-bg: #{escape-svg($navbar-dark-toggler-icon-bg)};
```

### Example: Override via CSS

```css
.navbar {
  --bs-navbar-color: #fff;
  --bs-navbar-hover-color: rgba(255, 255, 255, 0.85);
  --bs-navbar-brand-color: #fff;
}
```

---

## Sass Variables

Defined in `scss/_variables.scss`:

```scss
/* General navbar */
$navbar-padding-y:                  $spacer * .5;
$navbar-padding-x:                  null;
$navbar-nav-link-padding-x:         .5rem;

/* Brand — padding is auto-calculated so brand height matches nav-link height */
$navbar-brand-font-size:            $font-size-lg;
$nav-link-height:                   $font-size-base * $line-height-base + $nav-link-padding-y * 2;
$navbar-brand-height:               $navbar-brand-font-size * $line-height-base;
$navbar-brand-padding-y:            ($nav-link-height - $navbar-brand-height) * .5;
$navbar-brand-margin-end:           1rem;

/* Toggler */
$navbar-toggler-padding-y:          .25rem;
$navbar-toggler-padding-x:          .75rem;
$navbar-toggler-font-size:          $font-size-lg;
$navbar-toggler-border-radius:      $btn-border-radius;
$navbar-toggler-focus-width:        $btn-focus-width;
$navbar-toggler-transition:         box-shadow .15s ease-in-out;

/* Light navbar link colors */
$navbar-light-color:                rgba(var(--#{$prefix}emphasis-color-rgb), .65);
$navbar-light-hover-color:          rgba(var(--#{$prefix}emphasis-color-rgb), .8);
$navbar-light-active-color:         rgba(var(--#{$prefix}emphasis-color-rgb), 1);
$navbar-light-disabled-color:       rgba(var(--#{$prefix}emphasis-color-rgb), .3);
$navbar-light-icon-color:           rgba($body-color, .75);
$navbar-light-toggler-icon-bg:      url("data:image/svg+xml,..."); // 3-line hamburger SVG
$navbar-light-toggler-border-color: rgba(var(--#{$prefix}emphasis-color-rgb), .15);
$navbar-light-brand-color:          $navbar-light-active-color;
$navbar-light-brand-hover-color:    $navbar-light-active-color;

/* Dark navbar link colors */
$navbar-dark-color:                 rgba($white, .55);
$navbar-dark-hover-color:           rgba($white, .75);
$navbar-dark-active-color:          $white;
$navbar-dark-disabled-color:        rgba($white, .25);
$navbar-dark-icon-color:            $navbar-dark-color;
$navbar-dark-toggler-icon-bg:       url("data:image/svg+xml,..."); // white 3-line hamburger SVG
$navbar-dark-toggler-border-color:  rgba($white, .1);
$navbar-dark-brand-color:           $navbar-dark-active-color;
$navbar-dark-brand-hover-color:     $navbar-dark-active-color;
```

---

## Sass Loops

`.navbar-expand-{breakpoint}` classes are generated by looping over `$grid-breakpoints` in `scss/_navbar.scss`. The loop applies styles at each breakpoint's `min-width` (when expanded) including switching `.navbar-nav` to `flex-direction: row`, hiding the toggler, and resetting offcanvas to behave as a static element.

```scss
.navbar-expand {
  @each $breakpoint in map-keys($grid-breakpoints) {
    $next: breakpoint-next($breakpoint, $grid-breakpoints);
    $infix: breakpoint-infix($next, $grid-breakpoints);

    &#{$infix} {
      @include media-breakpoint-up($next) {
        flex-wrap: nowrap;
        justify-content: flex-start;

        .navbar-nav {
          flex-direction: row;           // horizontal layout

          .dropdown-menu {
            position: absolute;          // proper dropdown positioning
          }

          .nav-link {
            padding-right: var(--#{$prefix}navbar-nav-link-padding-x);
            padding-left: var(--#{$prefix}navbar-nav-link-padding-x);
          }
        }

        .navbar-nav-scroll {
          overflow: visible;             // disable scroll when expanded
        }

        .navbar-collapse {
          display: flex !important;      // always visible when expanded
          flex-basis: auto;
        }

        .navbar-toggler {
          display: none;                 // hide hamburger when expanded
        }

        .offcanvas {
          /* Resets offcanvas to behave as normal navbar content when expanded */
          position: static;
          z-index: auto;
          flex-grow: 1;
          width: auto !important;
          height: auto !important;
          visibility: visible !important;
          background-color: transparent !important;
          border: 0 !important;
          transform: none !important;

          .offcanvas-header {
            display: none;               // hide offcanvas header when expanded
          }

          .offcanvas-body {
            display: flex;
            flex-grow: 0;
            padding: 0;
            overflow-y: visible;
          }
        }
      }
    }
  }
}
```

---

## Quick Reference

```html
<!-- Minimal responsive navbar -->
<nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Brand</a>
    <button class="navbar-toggler" type="button"
      data-bs-toggle="collapse" data-bs-target="#navContent"
      aria-controls="navContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Link</a>
        </li>
        <li class="nav-item">
          <a class="nav-link disabled" aria-disabled="true">Disabled</a>
        </li>
      </ul>
    </div>
  </div>
</nav>

<!-- Dark theme -->
<nav class="navbar bg-dark" data-bs-theme="dark">...</nav>

<!-- Placement variants -->
<nav class="navbar fixed-top">...</nav>
<nav class="navbar fixed-bottom">...</nav>
<nav class="navbar sticky-top">...</nav>
<nav class="navbar sticky-bottom">...</nav>

<!-- Never collapse -->
<nav class="navbar navbar-expand">...</nav>

<!-- Always collapse -->
<nav class="navbar">...</nav>

<!-- Scrollable collapsed nav -->
<ul class="navbar-nav navbar-nav-scroll" style="--bs-scroll-height: 100px;">...</ul>

<!-- Offcanvas navbar (always offcanvas) -->
<button data-bs-toggle="offcanvas" data-bs-target="#myOffcanvas">...</button>
<div class="offcanvas offcanvas-end" id="myOffcanvas">...</div>

<!-- Offcanvas on mobile, normal on lg+ -->
<nav class="navbar navbar-expand-lg">
  <button data-bs-toggle="offcanvas" data-bs-target="#myOffcanvas">...</button>
  <div class="offcanvas offcanvas-end" id="myOffcanvas">...</div>
</nav>
```

---