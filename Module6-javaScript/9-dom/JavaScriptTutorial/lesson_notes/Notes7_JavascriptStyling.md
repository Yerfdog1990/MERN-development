# JavaScript DOM — Style & Dimensions

## Complete Guide with Full HTML Examples

### Table of Contents

* [The `style` Property & Setting Inline Styles](https://www.google.com/search?q=%231-the-style-property--setting-inline-styles)
* [getComputedStyle() — Read All Applied Styles](https://www.google.com/search?q=%232-getcomputedstyle--read-all-applied-styles)
* [className — Manipulating Class Strings](https://www.google.com/search?q=%233-classname--manipulating-class-strings)
* [classList — Modern Class Manipulation Interfacing](https://www.google.com/search?q=%234-classlist--modern-class-manipulation-interfacing)
* [Element Dimensions & The Box Model](https://www.google.com/search?q=%235-element-dimensions--the-box-model)
* [Quick Reference Table](https://www.google.com/search?q=%23quick-reference-table)

---

### 1. The `style` Property & Setting Inline Styles

#### What is it?

The `style` property allows you to read or write the inline styles of an HTML element. It returns a live `CSSStyleDeclaration` object containing a list of all CSS properties. Changing properties on this object updates the element's `style` attribute directly in the HTML markup.

#### How it works

1. Target and select your required DOM element.
2. Access `element.style.propertyName` to assign a value as a string.
3. For CSS properties that contain hyphens (e.g., `background-color`), JavaScript uses **camelCase** naming conventions (`backgroundColor`).
4. For vendor-prefixed properties that begin with a hyphen (e.g., `-webkit-text-stroke`), use array-like bracket notation (`[]`).

#### Syntax

```javascript
element.style.propertyName = "value";
element.style['hyphenated-property-name'] = "value";

```

#### Complete Inline Style Configuration Overrides

If you want to clear out or rewrite all inline styles in one operation rather than modifying properties individually, you have two options:

##### 1. The `cssText` Property

The `cssText` property lets you read or write the full inline style declaration as a raw string text block:

```javascript
// Completely overrides any previous inline values:
element.style.cssText = "color: red; background-color: yellow; font-weight: bold;";

// Append new rules without erasing existing inline configurations:
element.style.cssText += " display: block; margin-top: 10px;";

```

##### 2. The `setAttribute()` Method

Since styles are stored in a raw `style="..."` attribute string inside the HTML tag markup, you can use `setAttribute()` to overwrite it:

```javascript
element.setAttribute('style', 'color: red; background-color: yellow;');

```

#### Full HTML Example — Inline Style Manipulations

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>JS Inline Style Demo</title>
    <style>
        body { font-family: Arial, sans-serif; padding: 20px; }
        .box { border: 1px solid #bdc3c7; padding: 15px; margin: 15px 0; border-radius: 6px; }
        pre  { background: #2c3e50; color: #ecf0f1; padding: 15px; border-radius: 4px; font-size: 13px; }
        button { padding: 8px 16px; margin: 5px; cursor: pointer; }
    </style>
</head>
<body>
    <h1>Manipulating Styles Programmatically</h1>

    <div class="box">
        <p id="target-para">JavaScript Setting Style Demo!</p>
        
        <button onclick="applyCamelCase()">Apply CamelCase Properties</button>
        <button onclick="applyBracketNotation()">Apply Bracket Notation</button>
        <button onclick="overrideWithCssText()">Override via cssText</button>
        <button onclick="useCssHelper()">Apply via Helper Function</button>
        
        <pre id="style-inspector">Inspect inline markup attribute status...</pre>
    </div>

    <script>
        // Helper function to update multiple styles at once via a key-value object
        function css(element, styles) {
            for (const property in styles) {
                element.style[property] = styles[property];
            }
        }

        function inspectMarkup() {
            const p = document.getElementById('target-para');
            const inspector = document.getElementById('style-inspector');
            inspector.textContent = `Current HTML style attribute value:\n"${p.getAttribute('style') || 'None'}"`;
        }

        function applyCamelCase() {
            const p = document.getElementById('target-para');
            p.style.color = 'blue';
            p.style.fontWeight = 'bold';
            p.style.backgroundColor = '#eaf4fb';
            inspectMarkup();
        }

        function applyBracketNotation() {
            const p = document.getElementById('target-para');
            // Useful for non-standard, experimental, or vendor-prefixed rules
            p.style['-webkit-text-stroke'] = '1px darkblue';
            inspectMarkup();
        }

        function overrideWithCssText() {
            const p = document.getElementById('target-para');
            p.style.cssText = 'color: purple; background-color: #fce4ec; border: 2px dashed magenta;';
            inspectMarkup();
        }

        function useCssHelper() {
            const p = document.getElementById('target-para');
            css(p, {
                color: '#27ae60',
                background: '#e8f8f5',
                border: '1px solid #2ecc71',
                borderRadius: '4px',
                padding: '10px'
            });
            inspectMarkup();
        }
    </script>
</body>
</html>

```

---

### 2. getComputedStyle() — Read All Applied Styles

#### What is it?

The `element.style` property is restricted to reading styles declared **inline** via the HTML `style` attribute. It cannot read styles defined in internal `<style>` tags or external stylesheets. To get the actual, active styling values applied to an element by the browser, you use `window.getComputedStyle()`.

#### How it works

1. Call `window.getComputedStyle(element [, pseudoElement])`. You can omit the `window.` prefix because it is a global object.
2. It returns a **live, read-only** `CSSStyleDeclaration` object. When an element's styles change, this object updates automatically.
3. Values returned for dimensions are always absolute conversions (e.g., colors are returned as `rgb()` or `rgba()`, lengths are returned in pixels `px`).
4. To target a CSS pseudo-element (like `::before`, `::after`, or `::first-letter`), pass it as a string string in the second argument position.

#### Syntax

```javascript
let style = window.getComputedStyle(element, pseudoElement);

```

| Parameter | Description |
| --- | --- |
| **`element`** | The target DOM node whose styles you want to compute. Passing non-element nodes (like a text node) throws an error. |
| **`pseudoElement`** | *Optional.* A string specifying the pseudo-element to match (e.g., `'::first-letter'`). Defaults to `null`. |

* **Return Value:** A read-only `CSSStyleDeclaration` object containing absolute resolved values.

#### Full HTML Example — Reading Computed Styles

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>JS getComputedStyle Demo</title>
    <style>
        body { font-family: Arial, sans-serif; padding: 20px; }
        .box { border: 1px solid #bdc3c7; padding: 15px; margin: 15px 0; border-radius: 6px; }
        
        /* Defined in an internal stylesheet */
        .alert-message {
            background-color: #fff3d4;
            border: 1px solid #f6b73c;
            padding: 15px;
            color: #795548;
        }
        
        /* Styled pseudo-element */
        .alert-message::first-letter {
            font-size: 1.8em;
            font-weight: bold;
            color: #e67e22;
        }
        
        pre { background: #2c3e50; color: #ecf0f1; padding: 15px; border-radius: 4px; }
        button { padding: 8px 16px; margin: 5px 0; cursor: pointer; }
    </style>
</head>
<body>
    <h1>Reading Active Computed Styles</h1>

    <div class="box">
        <p id="alert-box" class="alert-message" style="color: red;">
            This is an alert box with dynamic styling layers.
        </p>
        
        <button onclick="readStyles()">Get Computed Styles</button>
        <pre id="output-log">Computed details will print here...</pre>
    </div>

    <script>
        function readStyles() {
            const alertBox = document.getElementById('alert-box');
            const log = document.getElementById('output-log');
            
            // 1. Attempting to use element.style reads ONLY inline items
            let inlineColor = alertBox.style.color;
            let inlineBg = alertBox.style.backgroundColor; // Blank because it's in the stylesheet
            
            // 2. Using getComputedStyle parses final active rules
            let computedStyle = window.getComputedStyle(alertBox);
            let computedColor = computedStyle.color;
            let computedBg = computedStyle.backgroundColor;
            let computedPadding = computedStyle.padding;
            
            // 3. Target pseudo-elements by passing the selector string
            let pseudoStyle = window.getComputedStyle(alertBox, '::first-letter');
            let pseudoFontSize = pseudoStyle.fontSize;
            let pseudoColor = pseudoStyle.color;

            let result = `--- Element Style Property (Inline Only) ---\n`;
            result += `style.color           : "${inlineColor}"\n`;
            result += `style.backgroundColor : "${inlineBg}"\n\n`;
            
            result += `--- getComputedStyle() Results ---\n`;
            result += `color                 : ${computedColor}\n`;
            result += `backgroundColor       : ${computedBg}\n`;
            result += `padding               : ${computedPadding}\n\n`;
            
            result += `--- getComputedStyle(element, '::first-letter') ---\n`;
            result += `::first-letter size   : ${pseudoFontSize}\n`;
            result += `::first-letter color  : ${pseudoColor}\n`;
            
            log.textContent = result;
        }
    </script>
</body>
</html>

```

---

### 3. className — Manipulating Class Strings

#### What is it?

The `className` property gets or sets the values assigned to an element's `class` attribute. It handles this class list as a single space-separated string. Because `class` is a reserved keyword in JavaScript, the DOM API uses `className` to avoid naming conflicts.

#### How it works

* Reading `element.className` returns the full class list exactly as it is formatted inside the HTML attribute.
* Assigning a string to `element.className` completely overwrites any existing classes on that element.
* To add a new class name without discarding existing classes, concatenate a new substring by formatting a leading space prefix with the `+=` assignment operator.

#### Syntax

```javascript
// Overwrite all classes
element.className = "class-one class-two";

// Append a single class safely using space concatenation
element.className += " class-three";

```

#### Full HTML Example — Class Name Overrides

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>className Manipulation</title>
    <style>
        body { font-family: Arial, sans-serif; padding: 20px; }
        .box { border: 1px solid #bdc3c7; padding: 15px; margin: 15px 0; border-radius: 6px; }
        
        /* Functional design utility styles */
        .card { background: #f8f9fa; border: 1px solid #dcdde1; padding: 15px; transition: 0.3s; }
        .highlight { border-left: 5px solid #3498db; background: #eaf4fb; }
        .rounded { border-radius: 12px; }
        .sharded { box-shadow: 0 4px 10px rgba(0,0,0,0.15); }
        
        pre { background: #2c3e50; color: #ecf0f1; padding: 10px; font-family: monospace; }
        button { padding: 8px 14px; margin: 5px; cursor: pointer; }
    </style>
</head>
<body>
    <h1>Class Control with className</h1>

    <div class="box">
        <div id="badge-element" class="card rounded">
            Interactive Dynamic Card Component
        </div>
        
        <br>
        <button onclick="readClassString()">Read Class String</button>
        <button onclick="appendWithSpace()">Append '.highlight' Class</button>
        <button onclick="completeReset()">Overwrite entirely with '.card .sharded'</button>
        
        <pre id="class-viewer">Inspect current class attribute status...</pre>
    </div>

    <script>
        function updateViewer() {
            const el = document.getElementById('badge-element');
            const viewer = document.getElementById('class-viewer');
            viewer.textContent = `Raw class attribute string: "${el.className}"`;
        }

        function readClassString() {
            updateViewer();
        }

        function appendWithSpace() {
            const el = document.getElementById('badge-element');
            // Crucial: A space prefix is added to prevent accidental string merging like "cardroundedhighlight"
            el.className += " highlight";
            updateViewer();
        }

        function completeReset() {
            const el = document.getElementById('badge-element');
            // Overwrites all prior entries
            el.className = "card sharded";
            updateViewer();
        }
        
        // Render current attribute values on load
        updateViewer();
    </script>
</body>
</html>

```

---

### 4. classList — Modern Class Manipulation Interfacing

#### What is it?

The `classList` property provides a more flexible way to manage an element's CSS classes compared to `className`. It returns a live `DOMTokenList` collection of the element's classes, exposing built-in helper methods to add, remove, toggle, and check classes without having to manually parse class strings.

#### How it works

* `classList` is a read-only reference collection, but you can alter its contents using its built-in methods.
* It automatically handles spacing and duplication checks behind the scenes. For example, adding a class that already exists on the element is automatically ignored.

#### Available Prototype Methods

* **`add(className1, className2, ...)`**: Adds one or more classes to the element.
* **`remove(className1, className2, ...)`**: Strips one or more classes from the element.
* **`replace(oldClass, newClass)`**: Replaces an existing class with a new one. Returns `true` if successful, otherwise `false`.
* **`contains(className)`**: Returns a boolean indicating whether the element has the specified class.
* **`toggle(className [, force])`**: Adds the class if it's missing, or removes it if it's already present. The optional boolean `force` argument locks the behavior to add (if `true`) or remove (if `false`).

#### Full HTML Example — Class List Operations

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>classList Operations</title>
    <style>
        body { font-family: Arial, sans-serif; padding: 20px; }
        .box { border: 1px solid #bdc3c7; padding: 15px; margin: 15px 0; border-radius: 6px; }
        
        .panel { padding: 15px; border: 1px solid #ccc; background: #fafafa; margin-bottom: 10px; }
        .active { background: #d4edda; border-color: #c3e6cb; color: #155724; }
        .important { border-left: 6px solid #dc3545; font-weight: bold; }
        .hidden { display: none; }
        
        pre { background: #2c3e50; color: #ecf0f1; padding: 12px; }
        button { padding: 6px 12px; margin: 4px; cursor: pointer; }
    </style>
</head>
<body>
    <h1>Advanced Class Management with classList</h1>

    <div class="box">
        <div id="info-panel" class="panel active">
            Dynamic Notification Message Box Component
        </div>
        
        <button onclick="addClasses()">Add Multiple (.important)</button>
        <button onclick="removeClasses()">Remove (.active)</button>
        <button onclick="replaceClass()">Replace (.active with .important)</button>
        <button onclick="checkClassExistence()">Check if Contains (.important)</button>
        <button onclick="toggleClassVisibility()">Toggle (.active)</button>
        
        <pre id="output-console">Collection contents log...</pre>
    </div>

    <script>
        function printCollection() {
            const panel = document.getElementById('info-panel');
            const consoleLog = document.getElementById('output-console');
            
            let listItems = [];
            // Iterate directly over DOMTokenList tokens
            for (let item of panel.classList) {
                listItems.push(item);
            }
            
            consoleLog.textContent = `Live tokens inside classList: [${listItems.join(', ')}]\n`;
            consoleLog.textContent += `Equivalent attribute string : "${panel.className}"`;
        }

        function addClasses() {
            const panel = document.getElementById('info-panel');
            panel.classList.add('important');
            printCollection();
        }

        function removeClasses() {
            const panel = document.getElementById('info-panel');
            panel.classList.remove('active');
            printCollection();
        }

        function replaceClass() {
            const panel = document.getElementById('info-panel');
            // Replaces 'active' with 'important' if found
            panel.classList.replace('active', 'important');
            printCollection();
        }

        function checkClassExistence() {
            const panel = document.getElementById('info-panel');
            const consoleLog = document.getElementById('output-console');
            const hasImportant = panel.classList.contains('important');
            
            printCollection();
            consoleLog.textContent += `\n\n>> Evaluation: classList.contains('important') = ${hasImportant}`;
        }

        function toggleClassVisibility() {
            const panel = document.getElementById('info-panel');
            panel.classList.toggle('active');
            printCollection();
        }

        // Initialize output view
        printCollection();
    </script>
</body>
</html>

```

---

### 5. Element Dimensions & The Box Model

To accurately find an element's sizing and placement, you need to understand how JavaScript maps properties to the **CSS Box Model Layout**.

#### Layout Properties Quick Reference

* **`offsetWidth` & `offsetHeight**`: Total space the element occupies visually. This includes the core **content width/height, padding, and borders**. It excludes margins.
* **`clientWidth` & `clientHeight**`: Visual space inside the element's border shell. This includes **content width/height and padding**, but excludes borders and margins.
* **`getBoundingClientRect()`**: Returns a `DOMRect` object describing the element's sizing and floating-point position relative to the viewport. It accounts for CSS transforms (like `transform: scale(0.5)`), which raw layout properties like `offsetWidth` do not.

#### Visual Comparison of Dimension APIs

[Image illustrating offsetWidth versus clientWidth dimensions relative to padding and borders]

#### Reading Margins and Borders

Margins and borders are not included in `clientWidth` or `offsetWidth`. To read them, compute the element's stylesheet configuration with `getComputedStyle()`, and convert the returned string values into numbers using `parseInt()`:

```javascript
let style = window.getComputedStyle(element);

let marginLeft = parseInt(style.marginLeft) || 0;
let borderLeftWidth = parseInt(style.borderLeftWidth) || 0;

```

#### Full HTML Example — Calculating Dimensions

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Element Dimensions Inspection</title>
    <style>
        body { font-family: Arial, sans-serif; padding: 20px; }
        .box { border: 1px solid #bdc3c7; padding: 15px; margin: 15px 0; border-radius: 6px; }
        
        /* Metric configuration container */
        #metric-box {
            width: 200px;
            height: 120px;
            padding: 20px;
            border: 10px solid #2c3e50;
            margin: 30px;
            background-color: #3498db;
            color: white;
        }
        
        pre { background: #2c3e50; color: #ecf0f1; padding: 15px; border-radius: 4px; }
        button { padding: 8px 16px; cursor: pointer; }
    </style>
</head>
<body>
    <h1>Inspecting Layout Metrics & Dimensions</h1>

    <div class="box">
        <div id="metric-box">
            Dimension Target Box
        </div>
        
        <button onclick="calculateMetrics()">Calculate Box Metrics</button>
        <pre id="metrics-output">Click calculate to review box data...</pre>
    </div>

    <script>
        function calculateMetrics() {
            const target = document.getElementById('metric-box');
            const output = document.getElementById('metrics-output');
            
            // 1. Reading basic offset layouts (Content + Padding + Border)
            let offsetW = target.offsetWidth;
            let offsetH = target.offsetHeight;
            
            // 2. Reading client layouts (Content + Padding only)
            let clientW = target.clientWidth;
            let clientH = target.clientHeight;
            
            // 3. Extracting margins via computed styles
            let computedStyle = window.getComputedStyle(target);
            let mt = parseInt(computedStyle.marginTop) || 0;
            let mb = parseInt(computedStyle.marginBottom) || 0;
            let ml = parseInt(computedStyle.marginLeft) || 0;
            let mr = parseInt(computedStyle.marginRight) || 0;
            
            // 4. Checking bounding client rectangle properties
            let rect = target.getBoundingClientRect();
            
            // 5. Fetch Window Viewport Size parameters
            let viewportW = window.innerWidth || document.documentElement.clientWidth;
            let viewportH = window.innerHeight || document.documentElement.clientHeight;

            let log = `--- Target Dimensions Spec Sheet ---\n`;
            log += `offsetWidth/Height   : ${offsetW}px width by ${offsetH}px height (Includes border)\n`;
            log += `clientWidth/Height   : ${clientW}px width by ${clientH}px height (Excludes border)\n\n`;
            
            log += `--- Parsed Margin Data ---\n`;
            log += `Margins (Top/Right/Bottom/Left) : ${mt}px / ${mr}px / ${mb}px / ${ml}px\n\n`;
            
            log += `--- getBoundingClientRect() Output ---\n`;
            log += `rect.width  : ${rect.width.toFixed(2)}px\n`;
            log += `rect.height : ${rect.height.toFixed(2)}px\n`;
            log += `rect.top    : ${rect.top.toFixed(2)}px relative to viewport bounding limits\n\n`;
            
            log += `--- Global Viewport Environment ---\n`;
            log += `Window Client Viewport Size : ${viewportW}px width by ${viewportH}px height`;
            
            output.textContent = log;
        }
    </script>
</body>
</html>

```

---

### Quick Reference Table

| Property / Method | Target Concept Layer | Modifiable | Expected Value Type | Core Description |
| --- | --- | --- | --- | --- |
| **`element.style`** | Inline Attribute Styles | Yes | `CSSStyleDeclaration` Object | Used to read or update styles written directly in the element's `style` attribute. |
| **`window.getComputedStyle()`** | Total Cascaded Active Styles | **No** (Read-Only) | `CSSStyleDeclaration` Object | Returns the final, active styles applied to an element from all stylesheets. |
| **`element.className`** | Raw Class Attribute String | Yes | `String` Primitive | Reads or overwrites the element's entire `class` list as a single space-separated string. |
| **`element.classList`** | DOM Token Utility List | **No** (Tokens Are Mutatable) | `DOMTokenList` Collection | Provides helper methods (`add()`, `remove()`, `toggle()`) to safely manage individual classes. |
| **`element.offsetWidth`** | Content + Padding + Border | **No** (Read-Only) | `Number` (Pixels) | Returns the total layout width of the element, including padding and borders. |
| **`element.clientWidth`** | Content + Padding Only | **No** (Read-Only) | `Number` (Pixels) | Returns the layout width of the element including padding, but excluding borders. |
| **`element.getBoundingClientRect()`** | Context Viewport Transforms | **No** (Read-Only) | `DOMRect` Object | Returns the precise floating-point size and position of an element relative to the viewport. |

---