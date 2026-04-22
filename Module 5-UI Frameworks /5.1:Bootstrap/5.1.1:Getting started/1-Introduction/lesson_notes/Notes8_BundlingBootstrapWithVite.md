## Bundling Bootstrap with Vite

![img_2.png](img_2.png)

**Vite** is a modern frontend build tool favored for its extreme speed and simplicity. Unlike older bundlers, Vite leverages native browser ES modules to provide nearly instant hot-module replacement (HMR) during development.

---

## 1. Core Concepts
* **Speed:** Vite is significantly faster than Webpack because it doesn't bundle the entire project before starting the dev server.
* **Modern-First:** Designed specifically for modern JavaScript features and frameworks.
* **Simplified Config:** It requires minimal boilerplate to get a professional build running.

---

## 2. Project Setup

### Step 1: Initialize and Install Vite
```bash
mkdir my-project && cd my-project
npm init -y
npm i --save-dev vite
```

### Step 2: Install Bootstrap & Sass
Vite requires the `sass` package to process Bootstrap's source files.
* **Bootstrap:** `npm i --save bootstrap @popperjs/core`
* **Sass:** `npm i --save-dev sass`

---

## 3. Project Structure
The Vite setup keeps the source code contained within a `src` directory, with the final build output moving to a `dist` folder.

```text
my-project/
├── src/
│   ├── js/
│   │   └── main.js       # Imports Sass and Bootstrap JS
│   ├── scss/
│   │   └── styles.scss   # Bootstrap Sass imports
│   └── index.html        # Main entry point
├── vite.config.js        # Vite configuration
└── package.json
```

---

## 4. Configuration (`vite.config.js`)
The configuration tells Vite how to handle paths and how to deal with the CSS preprocessor.

```javascript
import { resolve } from 'path'

export default {
  root: resolve(__dirname, 'src'), // Look for source files here
  build: {
    outDir: '../dist'             // Output production files here
  },
  server: {
    port: 8080                    // Local dev server port
  },
  css: {
     preprocessorOptions: {
        scss: {
          // Silences common Sass deprecation warnings
          silenceDeprecations: ['import', 'mixed-decls', 'color-functions', 'global-builtin'],
        },
     },
  }
}
```

---

## 5. Implementation

### The Entry Point (`src/index.html`)
In Vite, the script tag is the entry point. You include your JavaScript, and that JavaScript handles the CSS imports.
```html
<script type="module" src="./js/main.js"></script>
```

### Importing Styles (`src/scss/styles.scss`)
```scss
// Import all of Bootstrap’s CSS
@import "bootstrap/scss/bootstrap";
```

### Importing Logic (`src/js/main.js`)
```javascript
// Load the CSS
import '../scss/styles.scss'

// Import all of Bootstrap’s JS
import * as bootstrap from 'bootstrap'
```

---

## 6. Execution & Performance

### Dev Server
Add the start script to `package.json`: `"start": "vite"`. Running `npm start` launches a server that uses **Native ESM** to serve files.

### Production Build
Running `vite build` creates a highly optimized, minified version of your project. Vite automatically handles:
* **Asset Hashing:** For cache busting.
* **CSS Minification:** Using lightning-fast internal tools.
* **Module Preloading:** To speed up page loads.

---

## Comparison: Vite vs. Webpack vs. Parcel

| Feature | Vite | Webpack | Parcel |
| :--- | :--- | :--- | :--- |
| **Dev Startup** | **Instant** | Slow (Builds whole bundle) | Moderate |
| **Configuration** | Minimal / Simple | Complex | **None** |
| **Best For** | Modern JS Projects | Enterprise / Legacy | Quick Prototypes |

---