## Browser and Device Support in Bootstrap

Bootstrap is designed to provide a consistent experience across a wide range of platforms, but it focuses primarily on modern, stable web standards.

---

### 1. Supported Browsers & Platforms
Bootstrap targets the **latest stable releases** of all major browsers. It uses **Autoprefixer** and a `.browserslistrc` configuration to manage CSS vendor prefixes automatically.

#### Desktop Support
| Browser | Mac | Windows |
| :--- | :---: | :---: |
| **Chrome** | Supported | Supported |
| **Firefox / Firefox ESR** | Supported | Supported |
| **Microsoft Edge** | Supported | Supported |
| **Safari** | Supported | Not Available |
| **Opera** | Supported | Supported |

#### Mobile Support
Bootstrap generally supports the default browsers of each major mobile platform.
* **iOS:** Supports Chrome, Firefox, and Safari (iOS 12+).
* **Android:** Supports Chrome, Firefox, and the Android Browser/WebView (v6.0+).

> **Note on Proxy Browsers:** Proxy browsers like **Opera Mini**, **UC Browser Mini**, and **Amazon Silk** are **not supported**.

---

### 2. The "Internet Explorer" Policy
**Internet Explorer is no longer supported.**
* If your project requires IE 11 (or older) support, you must use **Bootstrap v4**.
* The current version of Bootstrap is optimized for modern engines like Blink, WebKit, and Gecko.

---

### 3. Known Mobile Quirks & Bugs
Mobile browsers, particularly on iOS, have specific behaviors that can affect how Bootstrap components function.

#### Modals and Body Scrolling
* **The Issue:** Support for `overflow: hidden` on the `<body>` is limited in mobile Safari and older Android browsers.
* **Result:** When you reach the top or bottom of a modal, the background content (the body) may start to scroll instead of the modal locking the view.

#### iOS Input Focus Bug
* On iOS 9.2+, if you start a scroll gesture while touching a text `<input>` or `<textarea>` inside an open modal, the background content will scroll instead of the modal content.

#### Navbar Dropdowns (iOS)
* Because of z-index complexities on iOS, Bootstrap does not use a "backdrop" element for navbar dropdowns.
* **Action Required:** To close a navbar dropdown on iOS, the user must click the dropdown element itself or another element that triggers a click event.

---

### 4. Browser Zooming and Validators
#### Page Zooming
Zooming in on a browser can occasionally cause "rendering artifacts" (visual glitches) in certain components. Since these are browser-level rendering issues, Bootstrap typically does not implement "hacky" workarounds for them unless a clean fix is available.

#### CSS/HTML Validation
If you run Bootstrap through a validator, you may see warnings or errors. This is intentional:
* **Browser Hacks:** Bootstrap uses specific CSS hacks to target bugs in older or quirky browsers.
* **Bleeding-edge Features:** Some CSS features are used for "progressive enhancement" and may not be fully standardized yet.
* **Outcome:** These warnings are inconsequential and do not interfere with the functionality of the library.

---

### 5. Summary Table: Support Range
Based on the `.browserslistrc` configuration, Bootstrap's support footprint follows these rules:

| Rule | Definition |
| :--- | :--- |
| **>= 0.5%** | Supports browsers with at least 0.5% global market share. |
| **Last 2 versions** | Supports the last two major versions of every browser. |
| **Not dead** | Excludes browsers that no longer receive official updates. |
| **Chrome/Firefox >= 60** | Specific version floors for stability. |

---