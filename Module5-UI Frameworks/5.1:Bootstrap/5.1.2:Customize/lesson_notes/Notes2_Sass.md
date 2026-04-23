# Sass 
---

## What is Sass?

- **Sass** stands for **Syntactically Awesome Stylesheet**
- It is an **extension to CSS** and a **CSS pre-processor**
- Completely compatible with all versions of CSS
- Reduces repetition of CSS, saving time and effort
- Designed by **Hampton Catlin** and developed by **Natalie Weizenbaum** in **2006**
- Free to download and use

---

## Why Use Sass?

Stylesheets are getting larger, more complex, and harder to maintain. Sass lets you use features that do not exist in CSS, such as:

- Variables
- Nested rules
- Mixins
- Imports
- Inheritance
- Built-in functions

### Simple Example

Instead of repeating HEX color values throughout your CSS, define them once as variables:

```scss
/* define variables for the primary colors */
$primary_1: #a2b9bc;
$primary_2: #b2ad7f;
$primary_3: #878f99;

/* use the variables */
.main-header {
  background-color: $primary_1;
}
.menu-left {
  background-color: $primary_2;
}
.menu-right {
  background-color: $primary_3;
}
```

Now if a color changes, you only update it in **one place**.

---

## How Does Sass Work?

Browsers cannot understand Sass code directly. Sass must be **transpiled** into standard CSS first.

> **Transpiling** = taking source code written in one language and transforming it into another language.

- Sass files use the **`.scss`** file extension
- A Sass pre-processor (transpiler) converts `.scss` → `.css`

---

## Sass Comments

Sass supports both standard CSS comments and inline comments:

```scss
/* This is a standard CSS comment */

// This is an inline Sass-only comment

/* define primary colors */
$primary_1: #a2b9bc;
$primary_2: #b2ad7f;

/* use the variables */
.main-header {
  background-color: $primary_1; // inline comment here
}
```

> Note: Inline `//` comments are stripped out during compilation and won't appear in the output CSS.

---

## File Structure

Avoid modifying Bootstrap's core files. Instead, create your own stylesheet that imports Bootstrap:

```
your-project/
├── scss/
│   └── custom.scss
└── node_modules/
│   └── bootstrap/
│       ├── js/
│       └── scss/
└── index.html
```

If not using a package manager, manually separate Bootstrap's source files from your own:

```
your-project/
├── scss/
│   └── custom.scss
├── bootstrap/
│   ├── js/
│   └── scss/
└── index.html
```

---

## Importing

In `custom.scss`, import Bootstrap's source Sass files. Two options:

### Option A — Include all of Bootstrap

```scss
// Custom.scss
// Option A: Include all of Bootstrap

@import "../node_modules/bootstrap/scss/bootstrap";

// Add additional custom code here
```

### Option B — Include only the parts you need (recommended)

```scss
// 1. Include functions first
@import "../node_modules/bootstrap/scss/functions";

// 2. Include any default variable overrides here

// 3. Include required Bootstrap stylesheets
@import "../node_modules/bootstrap/scss/variables";
@import "../node_modules/bootstrap/scss/variables-dark";

// 4. Include any default map overrides here

// 5. Include remainder of required parts
@import "../node_modules/bootstrap/scss/maps";
@import "../node_modules/bootstrap/scss/mixins";
@import "../node_modules/bootstrap/scss/root";

// 6. Include optional partials as needed
@import "../node_modules/bootstrap/scss/utilities";
@import "../node_modules/bootstrap/scss/reboot";
@import "../node_modules/bootstrap/scss/type";
@import "../node_modules/bootstrap/scss/images";
@import "../node_modules/bootstrap/scss/containers";
@import "../node_modules/bootstrap/scss/grid";
@import "../node_modules/bootstrap/scss/helpers";

// 7. Optionally include utilities API last
@import "../node_modules/bootstrap/scss/utilities/api";

// 8. Add additional custom code here
```

---

## Compiling

Sass code must be compiled into CSS before the browser can use it. Options include:

- **CLI** (command line)
- Build tools like **Gulp** or **Webpack**
- GUI applications
- IDE extensions

### CLI Example

```bash
# Install Sass globally
npm install -g sass

# Watch your custom Sass for changes and compile it to CSS
sass --watch ./scss/custom.scss ./css/custom.scss
```

---

## Including Compiled CSS in HTML

Once compiled, link your CSS file in your HTML:

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Custom Bootstrap</title>
    <link href="/css/custom.css" rel="stylesheet">
  </head>
  <body>
    <h1>Hello, world!</h1>
  </body>
</html>
```

---

## Variable Defaults

Every Bootstrap Sass variable includes the `!default` flag, meaning you can override it without touching Bootstrap's source files.

- Override variables **after** importing functions, but **before** the rest of the imports
- Full variable list found in `scss/_variables.scss`
- Variables set to `null` won't output a property unless overridden

### Example — Override body background and text color

```scss
// Required
@import "../node_modules/bootstrap/scss/functions";

// Default variable overrides
$body-bg: #000;
$body-color: #111;

// Required
@import "../node_modules/bootstrap/scss/variables";
@import "../node_modules/bootstrap/scss/variables-dark";
@import "../node_modules/bootstrap/scss/maps";
@import "../node_modules/bootstrap/scss/mixins";
@import "../node_modules/bootstrap/scss/root";

// Optional Bootstrap components
@import "../node_modules/bootstrap/scss/reboot";
@import "../node_modules/bootstrap/scss/type";
```

---

## Maps and Loops

Bootstrap uses **Sass maps** (key-value pairs) to manage colors, breakpoints, and more. All maps include `!default` and can be overridden or extended.

### Modify a map

```scss
$primary: #0074d9;
$danger:  #ff4136;
```

These feed into Bootstrap's `$theme-colors` map:

```scss
$theme-colors: (
  "primary": $primary,
  "danger":  $danger
);
```

### Add to a map

```scss
// Create your own map
$custom-colors: (
  "custom-color": #900
);

// Merge with the existing map
$theme-colors: map-merge($theme-colors, $custom-colors);
```

### Remove from a map

```scss
// Required
@import "../node_modules/bootstrap/scss/functions";
@import "../node_modules/bootstrap/scss/variables";
@import "../node_modules/bootstrap/scss/variables-dark";

$theme-colors: map-remove($theme-colors, "info", "light", "dark");

@import "../node_modules/bootstrap/scss/maps";
@import "../node_modules/bootstrap/scss/mixins";
@import "../node_modules/bootstrap/scss/root";

// Optional
@import "../node_modules/bootstrap/scss/reboot";
@import "../node_modules/bootstrap/scss/type";
```

### Required keys

Bootstrap relies on specific keys in `$theme-colors` (e.g. `primary`, `success`, `danger`). You can change their values but **removing** them will cause Sass compilation errors.

---

## Functions

### Colors

Use standalone color variables or Bootstrap's color functions:

```scss
.custom-element {
  color: $gray-100;
  background-color: $dark;
}
```

#### `tint-color()` — mix with white

```scss
.custom-element {
  color: tint-color($primary, 10%);
}
```

#### `shade-color()` — mix with black

```scss
.custom-element-2 {
  color: shade-color($danger, 30%);
}
```

#### `shift-color()` — shade if positive weight, tint if negative

```scss
.custom-element-3 {
  color: shift-color($success, 40%);
  background-color: shift-color($success, -60%);
}
```

Underlying function definitions:

```scss
// scss/_functions.scss

@function tint-color($color, $weight) {
  @return mix(white, $color, $weight);
}

@function shade-color($color, $weight) {
  @return mix(black, $color, $weight);
}

@function shift-color($color, $weight) {
  @return if($weight > 0, shade-color($color, $weight), tint-color($color, -$weight));
}
```

### Color Contrast

Bootstrap includes a `color-contrast()` function to meet **WCAG** contrast requirements (min 4.5:1 for text, 3:1 for non-text). It automatically returns `#fff`, `#212529`, or `#000` based on the base color's luminance.

```scss
// Generate contrast colors from theme map
@each $color, $value in $theme-colors {
  .swatch-#{$color} {
    color: color-contrast($value);
  }
}

// One-off use
.custom-element {
  color: color-contrast(#000); // returns #fff
}

// Using a color map variable
.custom-element {
  color: color-contrast($dark); // returns #fff
}
```

### Escape SVG

The `escape-svg()` function escapes `<`, `>`, and `#` characters for use in SVG background images. Data URIs must be quoted when using this function.

### Add and Subtract Functions

These wrap the CSS `calc()` function to avoid errors when a unitless `0` is passed:

```scss
$border-radius: .25rem;
$border-width: 1px;

// Valid calc output
.element {
  border-radius: calc($border-radius - $border-width); // calc(.25rem - 1px)
}

.element {
  border-radius: subtract($border-radius, $border-width); // same result
}
```

```scss
$border-radius: .25rem;
$border-width: 0;

// Invalid calc — browser will error
.element {
  border-radius: calc($border-radius - $border-width); // calc(.25rem - 0) ❌
}

// subtract() handles it safely
.element {
  border-radius: subtract($border-radius, $border-width); // outputs .25rem ✓
}
```

---

## Mixins

Bootstrap's mixins live in `scss/mixins/` and can be used in your own project too.

### Color Scheme Mixin

A shorthand for the `prefers-color-scheme` media query:

```scss
// scss/mixins/_color-scheme.scss

@mixin color-scheme($name) {
  @media (prefers-color-scheme: #{$name}) {
    @content;
  }
}

.custom-element {
  @include color-scheme(light) {
    // Insert light mode styles here
  }

  @include color-scheme(dark) {
    // Insert dark mode styles here
  }
}
```

---

## Native CSS Variables vs. SCSS Variables

Both CSS variables and SCSS variables have their place — the key is knowing when to use each.

### Key Differences

| Feature | CSS Variables (`--var`) | SCSS Variables (`$var`) |
|---|---|---|
| Runs in | Browser (runtime) | Compiler (build time) |
| Can be overridden dynamically | ✓ Yes | ✗ No |
| Works in `@mixin` / `@function` | ✗ Limited | ✓ Yes |
| Works with `darken()` / `lighten()` | ✗ No | ✓ Yes |
| Dark mode theming | ✓ Ideal | ✗ Not suited |

### When to Use CSS Variables

Use CSS variables **whenever you can**. Their main advantages:

- Can be overridden and transformed at runtime
- Ideal for **color theme switching** (e.g. dark mode toggle)
- No recompile needed to change a value

### When SCSS Variables Are Still Needed

CSS variables cannot be used inside:

- `@mixin` arguments that expect a color type
- `@function` calls like `darken()`, `lighten()`, `rgba()`, or `color-contrast()`
- Built-in SCSS modules that process color values

```scss
// ✗ This will fail — "Argument $color must be a color"
.skip-link:focus {
  color: choose-contrast-color(var(--color-wow-css-color));
}
```

```scss
// ✓ SCSS variables work fine with functions
$color-brand-grey: #ccc;
$color-grey-80: darken($color-brand-grey, 20%);

.button {
  @include my-button($color: $color-grey-80);
}
```

### Mixing Both Together

You can use CSS and SCSS variables in the same codebase. A mixin can accept a CSS variable as a default:

```scss
:root {
  --color-wow-css-color: #f02c93;
}

@mixin my-awesome-button($color: var(--color-wow-css-color)) {
  color: $color;
}
```

You can even assign a CSS variable to a SCSS variable:

```scss
:root {
  --color-east-bay: #545773;
}

$color-buttons: var(--color-east-bay);
```

### Handling `rgba()` with CSS Variables

Native CSS `rgba()` only accepts RGB format — it cannot read a hex value from a CSS variable directly. The solution is a helper function that converts hex to RGB:

```scss
// Helper: convert hex to RGB channels
@function hextorgb($hex) {
  @return red($hex), green($hex), blue($hex);
}
```

Then structure your color variables like this, defining both the hex and an RGB version:

```scss
// SCSS variables (needed for functions/mixins)
$color-black: #222;
$color-pattens-blue: #eaf1f8;
$color-valhalla: #2a2d3e;

// CSS variables (used at runtime)
:root {
  --color-black: #{$color-black};
  --color-black-rgb: #{hextorgb($color-black)};
  --color-pattens-blue: #{$color-pattens-blue};
  --color-pattens-blue-rgb: #{hextorgb($color-pattens-blue)};
  --color-pattens-blue-20: darken($color-pattens-blue, 20%);
  --color-white: #fff;
  --color-valhalla: #{$color-valhalla};

  // Semantic aliases
  --color-links: var(--color-valhalla);
  --color-main: var(--color-valhalla);
}
```

Define colors **once** — the rest is automatic. Now `rgba()` works with CSS variables:

```scss
// Use the RGB version of the CSS variable with rgba()
kbd {
  box-shadow: 0 1px 0 rgba(var(--color-black-rgb), .2),
              0 0 0 2px var(--color-white) inset;
}
```

And pre-darkened colors can be applied directly:

```scss
.edit-link a:hover,
.edit-link a:focus {
  color: var(--color-pattens-blue-20);
}
```

### Best Practice Summary

- Use **CSS variables** for all colors that may change between themes or modes
- Use **SCSS variables** as the source of truth when you need to pass colors into functions or mixins
- Define colors **once** as SCSS variables, then expose them as CSS variables (with RGB variants where needed) using `#{$scss-var}` interpolation

---

