# Bootstrap — Customize

---

## Overview

There are **two preferred methods** for customizing Bootstrap:

1. **Via package manager** — use and extend Bootstrap's source files directly
2. **Via compiled dist files or jsDelivr** — add onto or override Bootstrap's styles

The right path depends on your project complexity, build tools, Bootstrap version, and browser support requirements.

---

## Sass — Variables, Maps, Mixins, Functions

Use Bootstrap's **source Sass files** to take full advantage of its design system.

- Key tools: `variables`, `maps`, `mixins`, and `functions`
- Requires your own Sass compiler — Bootstrap provides guidance for this setup
- Enables deep, structural customization before CSS is generated

**Key concepts:** `$variable` overrides, `@mixin` usage, `map-merge()`, own Sass compiler

---

## Options — Global CSS Preferences

Bootstrap ships with built-in Sass variables that toggle global CSS behaviors.

- No need to rewrite styles — just change the variable before compiling
- Examples: enabling/disabling rounded corners, shadows, gradients, transitions
- Works as a simple on/off switch for many design decisions

**Key concepts:** `$enable-*` variables, global toggles, before-compile overrides

---

## Color — Palette & Semantic Tokens

Bootstrap's color system supports the entire toolkit — components, utilities, and themes.

- Includes a broad base palette and semantic color roles (`primary`, `danger`, `success`, etc.)
- Colors can be customized via Sass maps and variables
- Supports a **light mode** (default) and a **dark mode** (introduced in Bootstrap 5.3)
- You can create your own **custom color modes** beyond light/dark

**Key concepts:** `$theme-colors` map, light mode, dark mode, custom color modes

---

## Color Modes — Light, Dark & Custom

- Default is **light mode**
- Bootstrap 5.3+ includes a built-in **dark mode**
- Developers can define entirely **custom color modes** beyond the defaults
- Color modes are powered by CSS custom properties at runtime

---

## Components — Base + Modifier Class Architecture

Nearly all Bootstrap components are built responsively using a consistent pattern.

- **Base class** sets the foundation (e.g. `.btn`)
- **Modifier classes** apply variants (e.g. `.btn-primary`, `.btn-lg`)
- Understanding this pattern helps you extend or override components predictably
- Components are designed to be composable and work across all breakpoints

**Key concepts:** `.component` base, `.component-modifier`, responsive by default

---

## CSS Variables — Runtime Theming

Bootstrap exposes many values as **CSS custom properties** (CSS variables).

- Unlike Sass variables, CSS variables work **at runtime** in the browser
- Allows overrides without recompiling Sass — just reassign the variable in your CSS
- Scoped at `:root` or component level for granular control
- Powers the dark mode implementation and broader theming flexibility

**Key concepts:** `--bs-*` properties, runtime theming, no recompile needed, `:root` scope

---

## Optimize — Keep Projects Lean

Bootstrap is large — optimization keeps your build small and performant.

- Import only the Sass partials and JS modules you actually need
- Use **PurgeCSS** or tree-shaking to strip unused styles in production
- Avoid importing the full compiled CSS if using a Sass workflow
- Goal: lean, responsive, maintainable output for the best possible user experience

**Key concepts:** selective imports, PurgeCSS, tree-shaking JS, production builds

---


