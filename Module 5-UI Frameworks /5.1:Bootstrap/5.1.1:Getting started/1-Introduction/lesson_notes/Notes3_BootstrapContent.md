## Understanding Bootstrap Contents

When you download Bootstrap, you are provided with different "flavors" of the toolkit depending on your project needs. This lesson covers the file structure of both the **Compiled** and **Source Code** versions.

---

### 1. The Compiled Flavor
The compiled version is designed for quick "drop-in" usage. It contains the pre-written CSS and JavaScript that your browser can read immediately.

#### File Structure Overview
Upon unzipping the compiled folder, you will find two main directories:
* **`css/`**: Contains all styling files.
* **`js/`**: Contains all functional scripts.

```aiignore
bootstrap/
├── css/
│   ├── bootstrap-grid.css
│   ├── bootstrap-grid.css.map
│   ├── bootstrap-grid.min.css
│   ├── bootstrap-grid.min.css.map
│   ├── bootstrap-grid.rtl.css
│   ├── bootstrap-grid.rtl.css.map
│   ├── bootstrap-grid.rtl.min.css
│   ├── bootstrap-grid.rtl.min.css.map
│   ├── bootstrap-reboot.css
│   ├── bootstrap-reboot.css.map
│   ├── bootstrap-reboot.min.css
│   ├── bootstrap-reboot.min.css.map
│   ├── bootstrap-reboot.rtl.css
│   ├── bootstrap-reboot.rtl.css.map
│   ├── bootstrap-reboot.rtl.min.css
│   ├── bootstrap-reboot.rtl.min.css.map
│   ├── bootstrap-utilities.css
│   ├── bootstrap-utilities.css.map
│   ├── bootstrap-utilities.min.css
│   ├── bootstrap-utilities.min.css.map
│   ├── bootstrap-utilities.rtl.css
│   ├── bootstrap-utilities.rtl.css.map
│   ├── bootstrap-utilities.rtl.min.css
│   ├── bootstrap-utilities.rtl.min.css.map
│   ├── bootstrap.css
│   ├── bootstrap.css.map
│   ├── bootstrap.min.css
│   ├── bootstrap.min.css.map
│   ├── bootstrap.rtl.css
│   ├── bootstrap.rtl.css.map
│   ├── bootstrap.rtl.min.css
│   └── bootstrap.rtl.min.css.map
└── js/
    ├── bootstrap.bundle.js
    ├── bootstrap.bundle.js.map
    ├── bootstrap.bundle.min.js
    ├── bootstrap.bundle.min.js.map
    ├── bootstrap.esm.js
    ├── bootstrap.esm.js.map
    ├── bootstrap.esm.min.js
    ├── bootstrap.esm.min.js.map
    ├── bootstrap.js
    ├── bootstrap.js.map
    ├── bootstrap.min.js
    └── bootstrap.min.js.map
```

#### Key File Types
* **Standard (`.css` / `.js`)**: Human-readable code, useful for debugging.
* **Minified (`.min.css` / `.min.js`)**: Compressed files with whitespace removed. Use these for production to improve site speed.
* **Source Maps (`.map`)**: Used by browser developer tools to help you debug minified code by mapping it back to the original source.
* **RTL (`.rtl.css`)**: Specifically designed for "Right-to-Left" languages like Arabic or Hebrew.

---

### 2. CSS Files Comparison
Bootstrap allows you to include the full library or just specific parts of it to keep your project lightweight.

| CSS File | Layout | Content | Components | Utilities |
| :--- | :---: | :---: | :---: | :---: |
| **`bootstrap.css`** | Yes | Yes | Yes | Yes |
| **`bootstrap-grid.css`** | Grid only | No | No | Flex only |
| **`bootstrap-utilities.css`** | No | No | No | Yes |
| **`bootstrap-reboot.css`** | No | Reboot only | No | No |

---

### 3. JavaScript Files Comparison
Bootstrap’s JavaScript requires a library called **Popper** for certain components (like dropdowns and tooltips) to work.

| JS File | Includes Popper? | Description |
| :--- | :---: | :--- |
| **`bootstrap.bundle.js`** | **Yes** | The easiest option. Everything you need is in one file. |
| **`bootstrap.js`** | **No** | Requires you to include Popper manually from another source. |
| **`bootstrap.esm.js`** | **No** | An EcmaScript Module version for modern JS workflows. |

---

### 4. The Source Code Flavor
If you download the **Source Code**, you get much more than just the final files. This is intended for developers who want to customize Bootstrap using Sass or contribute to the library.

```aiignore
bootstrap/
├── dist/
│   ├── css/
│   └── js/
├── site/
│   └──content/
│      └── docs/
│          └── 5.3/
│              └── examples/
├── js/
└── scss/
```

#### Key Directories in Source Code:
* **`scss/`**: The original Sass source files. This is where you modify variables (like colors or spacing) before compiling.
* **`js/`**: The original source JavaScript plugins.
* **`dist/`**: Short for "distribution." This folder contains everything found in the **Compiled** version mentioned above.
* **`site/content/docs/`**: The source code for Bootstrap’s official documentation and examples.

---

### Summary Checklist
* Use **Minified (`.min`)** files for live websites.
* Use the **Bundle (`.bundle`)** JS if you want dropdowns to work without extra setup.
* Choose **`bootstrap-grid`** if you only want the layout system and intend to write your own custom styles for components.

---