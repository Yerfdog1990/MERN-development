## Bundling Bootstrap with Parcel

![img_1.png](img_1.png)

Parcel is a modern web application bundler designed for **zero-configuration**. Unlike Webpack, which requires a complex setup file, Parcel automatically detects your file types (like Sass) and installs the necessary transformers for you.

---

## 1. Core Concepts & Advantages
* **Zero-Config:** No `parcel.config.js` is needed. It works out of the box.
* **Automatic Installation:** When you import a `.scss` file, Parcel automatically installs the Sass transformer plugin.
* **Speed:** Focused on getting developers started quickly with minimal boilerplate.

---

## 2. Project Setup

### Step 1: Initialize Project
```bash
mkdir my-project && cd my-project
npm init -y
```

### Step 2: Install Dependencies
You only need to manually install the bundler and the Bootstrap libraries.
* **Bundler:** `npm i --save-dev parcel`
* **Bootstrap Core:** `npm i --save bootstrap @popperjs/core`
    * *Note:* Popper is required for dropdowns, popovers, and tooltips.

---

## 3. Project Structure
The structure is clean and mirrors standard web development practices:

```text
my-project/
├── src/
│   ├── js/
│   │   └── main.js       # JS entry point
│   ├── scss/
│   │   └── styles.scss   # Sass entry point
│   └── index.html        # The entry file for Parcel
├── package.json
└── package-lock.json
```

---

## 4. Configuration & Workflow

### The HTML Entry Point (`src/index.html`)
Unlike other bundlers where you might link to a compiled `dist` folder, Parcel looks at your **source** files directly in the HTML. Parcel will then process and replace these links in the final build.

```html
<head>
  <link rel="stylesheet" href="scss/styles.scss">
  <script type="module" src="js/main.js"></script>
</head>
```

### NPM Scripts (`package.json`)
You need to tell Parcel where to start and where to output the results.
```json
"scripts": {
  "start": "parcel serve src/index.html --public-url / --dist-dir dist"
}
```

---

## 5. Importing Bootstrap

### In Sass (`src/scss/styles.scss`)
Import the full Bootstrap suite. Parcel handles the compilation to CSS automatically.
```scss
@import "bootstrap/scss/bootstrap";
```

> **Note on Deprecations:** If you see Sass warnings (common with newer versions of Dart Sass), you can silence them by creating a `.sassrc.js` file in your root folder and adding:
> `module.exports = { silenceDeprecations: ['import', 'mixed-decls'] }`

### In JavaScript (`src/js/main.js`)
```javascript
import * as bootstrap from 'bootstrap';
```
To optimize your bundle size, you can import specific plugins individually:
`import { Tooltip, Toast } from 'bootstrap';`

---

## 6. Summary: Parcel vs. Webpack for Bootstrap

| Feature | Parcel | Webpack |
| :--- | :--- | :--- |
| **Config File** | **None required** | Mandatory `webpack.config.js` |
| **Loaders** | Auto-installed on demand | Must be manually installed/configured |
| **Learning Curve** | Very Low | Moderate to High |
| **Best For** | Fast prototyping, simple apps | Highly customized, enterprise builds |

---

