# Page Load & Lifecycle Events

## Complete Guide with Full HTML Examples

### Table of Contents

* [Understanding the Page Lifecycle](https://www.google.com/search?q=%231-understanding-the-page-lifecycle)
* [The Loading Phase: DOMContentLoaded vs. load](https://www.google.com/search?q=%232-the-loading-phase-domcontentloaded-vs-load)
* [The Leaving Phase: beforeunload vs. unload](https://www.google.com/search?q=%233-the-leaving-phase-beforeunload-vs-unload)
* [Handling Page Lifecycle Events](https://www.google.com/search?q=%234-handling-page-lifecycle-events)
* [Full Integration Lifecycle Example](https://www.google.com/search?q=%235-full-integration-lifecycle-example)
* [Quick Reference Table](https://www.google.com/search?q=%23quick-reference-table)

---

### 1. Understanding the Page Lifecycle

When a user navigates to a webpage, a structured sequence of lifecycle events begins. This timeline is split into two distinct phases: the **Loading Phase**, where the structure and assets are compiled into the view, and the **Leaving Phase**, which triggers when a user closes the tab, refreshes, or navigates away.

---

### 2. The Loading Phase: DOMContentLoaded vs. load

#### DOMContentLoaded

The `DOMContentLoaded` event fires on the `document` object as soon as the browser has finished parsing the raw HTML markup and finished constructing the Document Object Model (DOM) tree.

* **Key Characteristic:** It **does not wait** for external resources like images, subframes, or asynchronous stylesheets to finish downloading.
* **Best Use Case:** This is the ideal time to safely query DOM elements, attach event listeners, and initialize your interface scripts without forcing the user to wait for large media items to load.

#### load

The `load` event fires on the global `window` object once the entire page has finished loading.

* **Key Characteristic:** It waits for **all infrastructure**, including the parsed DOM tree, images, stylesheets, scripts, and embedded iframes, to finish loading completely.
* **Best Use Case:** Use this event when your script relies on assets being fully rendered, such as measuring the actual visual dimensions of an image, initializing canvas graphics, or calculating layout dimensions.

[Image illustrating DOMContentLoaded triggering with partial asset layout versus load triggering with complete images and styles]

---

### 3. The Leaving Phase: beforeunload vs. unload

#### beforeunload

The `beforeunload` event fires on the `window` object just before the browser begins to unload the document and its resources.

* **Key Characteristic:** It gives you a final chance to intercept the navigation. You can use it to display a confirmation dialog asking the user if they really want to leave.
* **Best Use Case:** Preventing data loss. If a user accidentally clicks an external link or refreshes the page while filling out a long form, you can warn them before their unsaved changes are lost.

*Note: Modern browsers have strict security restrictions for this event. You cannot customize the text displayed in the confirmation dialog box; the browser will show its own standard warning message.*

#### unload

The `unload` event fires on the `window` object once the page has completely shut down and its resources are being cleared from memory.

* **Key Characteristic:** The page is completely hidden from view at this stage, and UI interactions are no longer available. Because the page is closing, the browser will ignore asynchronous network requests (`fetch` or `XMLHttpRequest`).
* **Best Use Case:** Performing final cleanups, such as removing global event references, closing open WebSocket connections, or sending small telemetry and analytics updates back to your server using `navigator.sendBeacon()`.

---

### 4. Handling Page Lifecycle Events

To handle page lifecycle events correctly, attach your event listeners to the proper global objects. While `DOMContentLoaded` is managed by the `document` object, execution events like `load`, `beforeunload`, and `unload` belong to the global `window` object.

#### Syntax Reference

```javascript
// Attaching to the document object
document.addEventListener('DOMContentLoaded', () => {
    // DOM structure is ready
});

// Attaching to the window object
window.addEventListener('load', () => {
    // Everything is fully loaded
});

```

---

### 5. Full Integration Lifecycle Example

The following code is a complete, self-contained HTML file that tracks and logs each lifecycle event as it fires, giving you a clear view of the execution sequence.

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>JS Page Load Events Demo</title>
    <style>
        body { font-family: Arial, sans-serif; padding: 20px; background-color: #fafafa; }
        .box { border: 1px solid #bdc3c7; padding: 20px; margin: 15px 0; border-radius: 6px; background-color: #ffffff; }
        .form-group { margin-bottom: 15px; }
        label { display: block; margin-bottom: 5px; font-weight: bold; }
        input[type="text"] { padding: 8px; width: 300px; border: 1px solid #ccc; border-radius: 4px; }
        pre { background: #2c3e50; color: #ecf0f1; padding: 15px; border-radius: 4px; font-size: 14px; overflow-x: auto; }
        .status-badge { inline-size: max-content; padding: 4px 8px; border-radius: 4px; font-size: 12px; font-weight: bold; margin-bottom: 10px; }
        .status-dom { background-color: #d4edda; color: #155724; }
        .status-window { background-color: #cce5ff; color: #004085; }
    </style>
</head>
<body>
    <h1>Page Load & Lifecycle Events</h1>
    
    <div class="box">
        <h3>1. Tracking Initialization Sequence</h3>
        <p>Open your browser's console tab to view the live execution tracking details.</p>
        <pre id="lifecycle-log">Tracking page lifecycle activity...</pre>
    </div>

    <div class="box">
        <h3>2. Simulating Unsaved Form Data Loss</h3>
        <p>Type some text into the field below and try refreshing the tab or navigating away to trigger the <b>beforeunload</b> confirmation prompt.</p>
        
        <div class="form-group">
            <label for="username">Form Field Input:</label>
            <input type="text" id="username" placeholder="Type here to lock navigation protection...">
        </div>
        
        <p><a href="https://www.google.com">Click here to test navigating to an external page</a></p>
    </div>

    <script>
        const logArea = document.getElementById('lifecycle-log');
        let logData = "--- Event Sequence Timeline Log ---\n";

        function appendLog(message) {
            logData += `${message}\n`;
            // If the DOM element is parsed and available, update it visually
            if (logArea) {
                logArea.textContent = logData;
            }
            console.log(message);
        }

        // --- PHASE 1: DOMContentLoaded ---
        // Attached to the document object
        document.addEventListener('DOMContentLoaded', (event) => {
            appendLog("1. [DOMContentLoaded Event] - The HTML structure is fully parsed and the DOM tree is built.");
            appendLog("   -> Elements can now be queried safely. (Images/styles might still be loading)");
        });

        // --- PHASE 2: load ---
        // Attached to the window object
        window.addEventListener('load', (event) => {
            appendLog("2. [load Event] - The page structure and all external assets are completely loaded.");
            appendLog("   -> Stylesheets, scripts, subframes, and images are fully rendered in the view.");
        });

        // --- PHASE 3: beforeunload ---
        // Attached to the window object
        window.addEventListener('beforeunload', (event) => {
            const inputField = document.getElementById('username');
            
            // Check if the user has typed anything into the input field
            if (inputField && inputField.value.trim() !== "") {
                // To display a confirmation dialog, cancel the event according to standard specs
                event.preventDefault();
                
                // Legacy support for Google Chrome and certain browser engines
                event.returnValue = '';
            }
            // Note: If the input field is empty, the page will close immediately without a prompt
        });

        // --- PHASE 4: unload ---
        // Attached to the window object
        window.addEventListener('unload', (event) => {
            // Note: Console logs or alerts will not be visible to the user at this point
            // This is typically used to send analytics using navigator.sendBeacon
            navigator.sendBeacon('/api/analytics', JSON.stringify({
                event: 'page_close',
                timestamp: Date.now()
            }));
        });
    </script>
</body>
</html>

```

---

### Quick Reference Table

| Lifecycle Event Name | Target Object | Propagation Model | Execution Phase | Primary Function & Intended Use Case |
| --- | --- | --- | --- | --- |
| **`DOMContentLoaded`** | `document` | Bubbles up | Loading Phase | Fires when the HTML is fully parsed into the DOM tree. Best for running initial interface setup scripts. |
| **`load`** | `window` | Does not bubble | Loading Phase | Fires when the DOM tree and all external assets (images, frames, styles) are loaded. Best for canvas or dimension calculations. |
| **`beforeunload`** | `window` | Does not bubble | Leaving Phase | Fires before the page begins to unload. Used to warn users about unsaved form data before they leave. |
| **`unload`** | `window` | Does not bubble | Leaving Phase | Fires when the page is completely closed. Best for final data cleanups or sending telemetry using `sendBeacon()`. |

---