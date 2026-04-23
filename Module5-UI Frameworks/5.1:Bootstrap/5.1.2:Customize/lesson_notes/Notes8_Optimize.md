# Bootstrap — Optimize

---

## Overview

Keeping your project lean, responsive, and maintainable ensures the best user experience and faster load times. Bootstrap provides several strategies to optimize what gets shipped to the browser — from selective Sass imports and JavaScript tree-shaking, to minification, compression, and HTTPS.

---

## Lean Sass Imports

When using Sass in your asset pipeline, only `@import` the components you actually need. The largest file size savings come from selectively importing from the **Layout & Components** section.

Here is Bootstrap's full import list — comment out or delete anything you're not using:

```scss
// scss/bootstrap.scss

// Configuration — required, do not remove
@import "functions";
@import "variables";
@import "variables-dark";
@import "maps";
@import "mixins";
@import "utilities";

// Layout & Components — comment out what you don't need
@import "root";
@import "reboot";
@import "type";
@import "images";
@import "containers";
@import "grid";
@import "tables";
@import "forms";
@import "buttons";
@import "transitions";
@import "dropdown";
@import "button-group";
@import "nav";
@import "navbar";
@import "card";
@import "accordion";
@import "breadcrumb";
@import "pagination";
@import "badge";
@import "alert";
@import "progress";
@import "list-group";
@import "close";
@import "toasts";
@import "modal";
@import "tooltip";
@import "popover";
@import "carousel";
@import "spinners";
@import "offcanvas";
@import "placeholders";

// Helpers
@import "helpers";

// Utilities
@import "utilities/api";
```

### How to optimize

- If you're **not using a component**, comment it out or delete it entirely
- For example, if you're not using the carousel, remove `@import "carousel"` to reduce compiled CSS size
- The configuration imports (functions, variables, maps, mixins) are **required** and should not be removed

> **Note:** There are some dependencies across Sass imports that may make it harder to omit certain files. Test after removing any imports to ensure nothing breaks.

---

## Lean JavaScript

Bootstrap's primary dist files bundle **every component's JavaScript** together:

| File | Contents |
|---|---|
| `bootstrap.js` / `bootstrap.min.js` | All Bootstrap JS components |
| `bootstrap.bundle.js` / `bootstrap.bundle.min.js` | All Bootstrap JS + Popper dependency |

If you're using a JavaScript bundler like **Webpack**, **Parcel**, or **Vite**, import only the JavaScript for the components you actually use.

### Example — Import only the modal

```javascript
// Import just what we need

// import 'bootstrap/js/dist/alert';
// import 'bootstrap/js/dist/button';
// import 'bootstrap/js/dist/carousel';
// import 'bootstrap/js/dist/collapse';
// import 'bootstrap/js/dist/dropdown';
import 'bootstrap/js/dist/modal';
// import 'bootstrap/js/dist/offcanvas';
// import 'bootstrap/js/dist/popover';
// import 'bootstrap/js/dist/scrollspy';
// import 'bootstrap/js/dist/tab';
// import 'bootstrap/js/dist/toast';
// import 'bootstrap/js/dist/tooltip';
```

This avoids shipping JavaScript for buttons, carousels, tooltips, and any other components you don't use.

### Using default exports

Files in `bootstrap/js/dist` use the **default export**. Use them like this:

```javascript
import Modal from 'bootstrap/js/dist/modal'

const modal = new Modal(document.getElementById('myModal'))
```

### Popper dependency

If you are importing **dropdowns**, **tooltips**, or **popovers**, make sure to include Popper as a dependency in your `package.json`:

```json
{
  "dependencies": {
    "@popperjs/core": "^2.x.x"
  }
}
```

---

## Autoprefixer & `.browserslistrc`

Bootstrap uses **Autoprefixer** to automatically add browser vendor prefixes to certain CSS properties. The list of target browsers is defined in the `.browserslistrc` file at the root of the Bootstrap repository.

### How it helps

- Customizing the `.browserslistrc` and recompiling Sass will **automatically remove** vendor prefixes that are no longer needed for the browsers you support
- Dropping support for older browsers = less CSS in your output

### Example `.browserslistrc`

```
# https://browsersl.ist
[defaults]
>= 0.5%
last 2 major versions
not dead
Chrome >= 60
Firefox >= 60
Firefox ESR
iOS >= 12
Safari >= 12
not Explorer <= 11
```

Recompile after editing this file and Autoprefixer will only include the prefixes that your browser list actually requires.

---

## Unused CSS

Bootstrap includes many components and utilities you may not use. Tools like **PurgeCSS** can scan your HTML templates and output files to identify and remove any CSS classes that aren't referenced.

### Recommended resources

- [Remove unused CSS from Bootstrap using PurgeCSS](https://medium.com/dwarves-foundation/remove-unused-css-styles-from-bootstrap-using-purgecss-88395a2c5772)
- [Automatically remove unused CSS from Bootstrap](https://lukelowrey.com/automatically-removeunused-css-from-bootstrap-or-other-frameworks/)
- [CSS Tricks — Unused CSS with PurgeCSS and similar tools](https://css-tricks.com)

### General approach

1. Install PurgeCSS (or a similar tool like UnCSS)
2. Configure it to scan your HTML, JS, and template files
3. Run it as part of your production build
4. Only CSS classes that are actually referenced in your content will be kept

---

## Minify and Gzip

Compressing the code you serve to visitors reduces file sizes significantly and speeds up page load times.

### Using Bootstrap dist files

Stick to the **minified versions** where possible:

| Unminified | Minified |
|---|---|
| `bootstrap.css` | `bootstrap.min.css` |
| `bootstrap.js` | `bootstrap.min.js` |
| `bootstrap.bundle.js` | `bootstrap.bundle.min.js` |

### Building from source

If building Bootstrap with your own build system, implement minifiers for:

- **HTML** — strip whitespace, comments
- **CSS** — use tools like CSSNano or CleanCSS
- **JS** — use tools like Terser or UglifyJS

### Gzip / Brotli compression

Enable server-side compression (Gzip or Brotli) on your web server or CDN. This is one of the highest-impact optimizations available and typically requires no code changes — just server configuration.

---

## Non-Blocking Files

Minification alone isn't enough. Making files **non-blocking** is a major step toward a faster, better-optimized site.

### First Contentful Paint (FCP)

The **First Contentful Paint** metric (measured by tools like Google Lighthouse) tracks the time from when the page starts loading to when any part of the page's content first appears on screen. Non-blocking files directly improve this score.

### How to make files non-blocking

JavaScript or stylesheets that **don't need to be present on the first paint** of your page should be marked with `async` or `defer`:

```html
<!-- Defer non-critical JavaScript -->
<script src="bootstrap.bundle.min.js" defer></script>

<!-- Async for scripts with no dependencies -->
<script src="analytics.js" async></script>
```

### Non-blocking CSS

Defer non-critical CSS using the `media` trick:

```html
<!-- Load non-critical CSS asynchronously -->
<link rel="stylesheet" href="non-critical.css" media="print" onload="this.media='all'">
<noscript><link rel="stylesheet" href="non-critical.css"></noscript>
```

### What remains blocking

**Critical resources** — styles and scripts essential for rendering the page — should remain as normal blocking resources or be **inlined** directly in the `<head>`:

```html
<style>
  /* Inline only the critical CSS needed for above-the-fold content */
  body { margin: 0; font-family: system-ui, sans-serif; }
</style>
```

### Key rules

- Non-critical JS/CSS → use `defer`, `async`, or load lazily
- Critical JS/CSS → keep blocking or inline it
- This ensures less important resources load later without delaying the first render

> **Further reading:**
> - [Lighthouse: Eliminate render-blocking resources](https://developer.chrome.com/docs/lighthouse/performance/render-blocking-resources/)
> - [web.dev: Defer non-critical CSS](https://web.dev/articles/defer-non-critical-css)

---

## Always Use HTTPS

Your website should **only be available over HTTPS** in production. There is no such thing as non-sensitive web traffic.

### Why HTTPS matters

- Improves **security**, **privacy**, and **availability**
- Protects against man-in-the-middle attacks
- Required for many modern browser features (service workers, geolocation, etc.)
- Avoids "Not Secure" browser warnings

### Mixed content warning

Sites served over HTTPS must also load **all assets over HTTPS** — stylesheets, scripts, fonts, images, everything. Loading any resource over HTTP on an HTTPS page creates **mixed active content**, which:

- Can compromise the page by allowing a dependency to be altered
- Triggers in-browser security warnings for users
- Can cause assets to be blocked entirely by the browser

### Bootstrap over CDN — use HTTPS

```html
<!-- ✓ Correct — HTTPS -->
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/css/bootstrap.min.css" rel="stylesheet">
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/js/bootstrap.bundle.min.js"></script>

<!-- ✗ Wrong — HTTP (insecure, may be blocked) -->
<link href="http://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/css/bootstrap.min.css" rel="stylesheet">
```

> Whether you're loading Bootstrap from a CDN or self-hosting it, always access it over HTTPS.

---

## Optimization Checklist

| Task | Method |
|---|---|
| Remove unused CSS components | Comment out Sass `@import` statements |
| Remove unused JavaScript | Import only needed modules via bundler |
| Strip unused CSS classes | PurgeCSS or similar tool |
| Target only needed browsers | Customize `.browserslistrc` + Autoprefixer |
| Reduce file sizes | Use `.min.css` and `.min.js` dist files |
| Compress served assets | Enable Gzip or Brotli on server/CDN |
| Improve First Contentful Paint | Use `defer`/`async` on non-critical scripts |
| Defer non-critical CSS | Use `media` + `onload` technique |
| Secure all connections | Serve everything over HTTPS |

---

