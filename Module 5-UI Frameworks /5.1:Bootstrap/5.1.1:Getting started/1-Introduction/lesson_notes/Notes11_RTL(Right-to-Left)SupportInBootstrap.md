## RTL (Right-to-Left) Support in Bootstrap

Enabling RTL support allows your Bootstrap projects to cater to languages like Arabic, Hebrew, and Persian. Bootstrap uses the **RTLCSS** project to mirror layouts and has transitioned to **logical properties** to make this seamless.

---

### 1. Core Requirements (HTML)
To enable RTL, you must modify the `<html>` element. There are two strict requirements:
1.  **Direction:** Set `dir="rtl"`.
2.  **Language:** Set an appropriate language attribute (e.g., `lang="ar"`).

#### RTL Starter Template
You must also link the RTL-specific version of the Bootstrap CSS.

```html
<!doctype html>
<html lang="ar" dir="rtl">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/css/bootstrap.rtl.min.css">

    <title>مرحبًا بالعالم!</title>
  </head>
  <body>
    <h1>مرحبًا بالعالم!</h1>
    
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/js/bootstrap.bundle.min.js"></script>
  </body>
</html>
```

---

### 2. The Logical Properties Approach
Bootstrap has moved away from directional names (left/right) in favor of **logical names** (start/end). This ensures that your classes work automatically in both directions without manual overrides.

* **L-to-R:** Start = Left, End = Right.
* **R-to-L:** Start = Right, End = Left.

**Example: Margins and Padding**
Instead of using `ml-3` (margin-left), use **`ms-3`** (margin-start). Instead of `pr-2` (padding-right), use **`pe-2`** (padding-end).

---

### 3. Customizing RTL from Source (Sass)
If you are compiling your own CSS, you can use **RTLCSS directives** to change specific values only for the RTL version.

#### Custom Values
Use the `/*rtl: {value}*/` syntax to change a variable's output for RTL.
```scss
// Default is 700, but in RTL it becomes 600
$font-weight-bold: 700 #{/* rtl:600 */} !default;
```

#### Alternative Font Stacks
If your default font doesn't support Arabic or Hebrew characters, use the `/*rtl:insert: {value}*/` directive.
```scss
$font-family-sans-serif:
  Helvetica Neue #{"/* rtl:insert:Arabic */"},
  system-ui,
  sans-serif !default;
```

---

### 4. Advanced: LTR and RTL Together
If your application needs to display both directions on the same page (e.g., a multi-language dashboard), you can wrap your imports in a specific class.

#### The Combined Stylesheet Method
You can use RTLCSS String Maps to prepend `.ltr` or `.rtl` to every selector.

```scss
/* rtl:begin:options: {
  "autoRename": true,
  "stringMap":[ {
    "name": "ltr-rtl",
    "search": ["ltr"],
    "replace": ["rtl"]
  } ]
} */
.ltr {
  @import "../node_modules/bootstrap/scss/bootstrap";
}
/*rtl:end:options*/
```

**Known Limitations for Combined Layouts:**
* **Performance:** Loading both LTR and RTL CSS doubles the file size. Consider asynchronous loading.
* **Forms:** The `form-validation-state()` mixin may require manual tweaks when nested.
* **Breadcrumbs:** This is a unique case that requires a specific variable for the divider: `$breadcrumb-divider-flipped`.

---

### 5. Automation with PostCSS
For professional projects, it is recommended to use **PostCSS RTLCSS**.
* It automates the flipping process.
* It separates flipped declarations into rules with different prefixes based on the `dir` attribute of the `html` tag.
* **Tip:** Replace `/* rtl:remove */` with `/* rtl:freeze */` when using the PostCSS plugin, as it prevents the plugin from creating an RTL counterpart for that specific rule.

### Summary Checklist for RTL Implementation:
1. [ ] **Update `<html>` tag:** Add `dir="rtl"` and the correct `lang`.
2. [ ] **Swap CSS File:** Ensure you are loading `bootstrap.rtl.min.css`.
3. [ ] **Audit Classes:** Convert all `*-left` and `*-right` utilities to `*-start` and `*-end`.
4. [ ] **Check Fonts:** Ensure your font stack includes a font that supports the RTL alphabet.

---

When working with RTL (Right-to-Left) layouts, icons can be tricky. Some icons are "directional" and need to be mirrored to make sense, while others are "universal" and should stay exactly as they are.

Here is how to handle icons in an RTL Bootstrap project.

---

### 1. Directional vs. Universal Icons
Before coding, you must categorize your icons based on their meaning:

* **Directional Icons (Flip These):** Icons that imply movement or progress along a timeline.
    * *Examples:* Arrows (Back/Forward), Chevrons, fast-forward symbols, and icons with a clear "start" and "end" (like a bicycle or a car).
* **Universal Icons (Don't Flip):** Icons that represent physical objects or symbols that look the same regardless of language direction.
    * *Examples:* Checkmarks, Search magnifying glasses, Trash cans, Envelopes, and Brand logos.

---

### 2. Manual Mirroring with CSS
If you are using an icon library like **Bootstrap Icons** or **Font Awesome**, you can create a simple utility class to flip directional icons when the parent container is RTL.

**The CSS:**
```css
/* Only flip the icon when it is inside an element with dir="rtl" */
[dir="rtl"] .rtl-flip {
  transform: scaleX(-1);
}
```

**The HTML:**
```html
<i class="bi bi-arrow-right rtl-flip"></i>
```

---

### 3. Using Logical CSS Classes
Since Bootstrap uses a "logical" approach, you can use the `scaleX(-1)` logic within your Sass build.

If you are using the **PostCSS RTLCSS** plugin mentioned earlier, you can use a "freeze" directive to ensure certain icons *never* flip, even if the plugin tries to mirror your entire CSS file.

```scss
.search-icon {
  /* rtl:freeze */
  background-image: url('search.svg');
}
```

---

### 4. Special Case: The Breadcrumb Separator
As noted in the official guide, breadcrumbs are the most common RTL headache. In LTR, the slash or arrow points right; in RTL, it must point left.

Bootstrap handles this with a specific variable in your `_variables.scss`:

```scss
// LTR Divider
$breadcrumb-divider: quote("/");

// RTL Divider (Flipped)
$breadcrumb-divider-flipped: quote("\");
```

---

### 5. Quick Reference: To Flip or Not to Flip?

| Icon Category | Action in RTL | Example |
| :--- | :--- | :--- |
| **Progress/Arrows** | **Flip** | `bi-chevron-right` → `bi-chevron-left` |
| **Media Controls** | **Flip** | Play/Fast-Forward buttons |
| **Search/Tools** | **Stay** | `bi-search`, `bi-gear` |
| **Check/Success** | **Stay** | `bi-check-circle` |
| **Logos** | **Stay** | Company Branding |

---

### Final Summary of your Dashboard Journey
You have now covered the entire "Modern Bootstrap Professional" stack:
1.  **Bundling:** Vite, Webpack, and Parcel.
2.  **Architecture:** React vs. Vanilla JS.
3.  **A11y:** ARIA roles and screen reader support.
4.  **Responsive Engine:** RFS for fluid typography.
5.  **Internationalization:** RTL layouts and icon mirroring.

---