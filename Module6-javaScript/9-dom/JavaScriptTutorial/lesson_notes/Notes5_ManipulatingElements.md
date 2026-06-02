# JavaScript DOM — Manipulating Elements
## Complete Guide with Full HTML Examples

---

## Table of Contents

1. [Create Elements](#1-create-elements)
2. [Append Child Nodes](#2-append-child-nodes)
3. [Get or Set Text of a Node](#3-get-or-set-text-of-a-node)
4. [Get or Set HTML of an Element](#4-get-or-set-html-of-an-element)
5. [innerHTML vs createElement](#5-innerhtml-vs-createelement)
6. [Use DocumentFragment](#6-use-documentfragment)
7. [Insert a Node Before Another — before()](#7-insert-a-node-before-another--before)
8. [Insert a Node After Another — after()](#8-insert-a-node-after-another--after)
9. [Insert a Node before the First Child — prepend()](#9-insert-a-node-before-the-first-child--prepend)
10. [Insert a Node after the Last Child — append()](#10-insert-a-node-after-the-last-child--append)
11. [insertAdjacentHTML](#11-insertadjacenthtml)
12. [Replace Child Elements — replaceChild()](#12-replace-child-elements--replacechild)
13. [Clone a Node — cloneNode()](#13-clone-a-node--clonenode)
14. [Remove Child Elements — removeChild()](#14-remove-child-elements--removechild)
15. [insertBefore — Insert a Node Before Another](#15-insertbefore--insert-a-node-before-another)
16. [insertAfter — Insert a Node After Another](#16-insertafter--insert-a-node-after-another)

---

## 1. Create Elements

### What is it?

`document.createElement()` creates a brand-new HTML element that exists only in memory — it is not visible in the browser until you explicitly attach it to the DOM tree. Think of it as building a new LEGO piece before snapping it onto your structure.

### How it works

1. You call `document.createElement()` and pass the HTML tag name as a string
2. JavaScript creates a new element node in memory
3. You set any properties you want (id, class, text, etc.)
4. You attach it to the document using `appendChild()` or another insertion method
5. The browser renders it

### Syntax

```javascript
let element = document.createElement(htmlTag);
```

`htmlTag` is a string like `'div'`, `'p'`, `'li'`, `'script'`, etc.

### Setting properties

After creating the element, you can configure it before inserting it into the DOM:

```javascript
element.id        = 'myId';          // Sets the id attribute
element.className = 'myClass';       // Sets the CSS class
element.textContent = 'Hello';       // Sets plain text content
element.innerHTML = '<b>Bold</b>';   // Sets inner HTML
element.src       = '/image.png';    // Any valid HTML attribute
element.async     = true;            // Boolean attribute
```

### Full HTML Example

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>createElement() Demo</title>
    <style>
        body { font-family: Arial, sans-serif; padding: 20px; }
        #content { border: 2px solid #3498db; padding: 15px; margin: 10px 0; border-radius: 6px; }
        .note { background: #eaf4fb; padding: 10px; }
        #output { background: #f0f0f0; padding: 10px; margin-top: 10px; border-left: 4px solid #2ecc71; }
    </style>
</head>
<body>

    <h1>createElement() Demo</h1>
    <div id="container"></div>
    <ul id="menu">
        <li>Home</li>
    </ul>

    <script>
        // --- Step 1: Create a div with id, class, and inner content ---
        let div = document.createElement('div');
        div.id        = 'content';
        div.className = 'note';
        div.innerHTML = '<p>This paragraph was created with createElement()</p>';

        // Attach to the container
        document.getElementById('container').appendChild(div);

        // --- Step 2: Create element and add text using createTextNode ---
        let textDiv = document.createElement('div');
        textDiv.id  = 'output';
        let textNode = document.createTextNode('This text was added using createTextNode()');
        textDiv.appendChild(textNode);
        document.getElementById('container').appendChild(textDiv);

        // --- Step 3: Create an h2 and nest it inside a div ---
        let wrapper = document.createElement('div');
        let h2      = document.createElement('h2');
        h2.textContent = 'Heading created with createElement()';
        wrapper.appendChild(h2);
        document.getElementById('container').appendChild(wrapper);

        // --- Step 4: Add list items to an existing ul ---
        const menu = document.getElementById('menu');

        let li1 = document.createElement('li');
        li1.textContent = 'Products';
        menu.appendChild(li1);

        let li2 = document.createElement('li');
        li2.textContent = 'About Us';
        menu.appendChild(li2);

        // --- Step 5: Dynamically load a script (async) ---
        function loadJSAsync(url) {
            let script  = document.createElement('script');
            script.src  = url;
            script.async = true;
            document.body.appendChild(script);
        }
        // loadJSAsync('/lib.js'); // Uncomment to use
    </script>

</body>
</html>
```

**What the browser renders:**
- A blue-bordered div with a paragraph inside it
- A green-left-bordered div with text content
- A div containing an h2 heading
- A `<ul>` with three items: Home, Products, About Us

---

## 2. Append Child Nodes

### What is it?

`appendChild()` is a method of the `Node` interface. It adds a node to the **very end** of the list of child nodes of a specified parent element. It is the most common way to attach newly created elements to the DOM.

### How it works

1. You have a parent element already in the DOM
2. You call `parentNode.appendChild(childNode)`
3. The child is inserted as the last child of the parent
4. If the child is already in the DOM elsewhere, it is **moved** (not duplicated) to the new position
5. The method returns the appended child

### Key behaviour — moving vs duplicating

If you pass an existing DOM node to `appendChild()`, it is **removed from its original position** and placed at the new location. This allows you to reorganize nodes without creating copies.

### Syntax

```javascript
parentNode.appendChild(childNode);
```

### Full HTML Example

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>appendChild() Demo</title>
    <style>
        body  { font-family: Arial, sans-serif; padding: 20px; }
        ul    { background: #f9f9f9; padding: 20px; border-radius: 6px; }
        li    { padding: 5px 0; }
        .box  { border: 1px solid #ccc; padding: 10px; margin: 10px 0; background: #fffbe6; }
        h3    { margin-top: 30px; color: #2c3e50; }
    </style>
</head>
<body>

    <h1>appendChild() Demo</h1>

    <!-- Demo 1: Build a menu -->
    <h3>1. Building a Menu</h3>
    <ul id="menu"></ul>

    <!-- Demo 2: Moving a node -->
    <h3>2. Moving a Node Between Lists</h3>
    <p><strong>First List (before move):</strong></p>
    <ul id="first-list">
        <li>Everest</li>
        <li>Fuji</li>
        <li>Kilimanjaro</li>
    </ul>
    <p><strong>Second List (Everest will be moved here):</strong></p>
    <ul id="second-list">
        <li>Karakoram Range</li>
        <li>Denali</li>
        <li>Mont Blanc</li>
    </ul>

    <script>

        // --- Demo 1: Build a menu using a helper function ---
        function createMenuItem(name) {
            let li = document.createElement('li');
            li.textContent = name;
            return li;
        }

        const menu = document.querySelector('#menu');
        menu.appendChild(createMenuItem('Home'));
        menu.appendChild(createMenuItem('Services'));
        menu.appendChild(createMenuItem('About Us'));
        // Result: Home, Services, About Us added to the list

        // --- Demo 2: Move a node from one list to another ---
        const firstList  = document.querySelector('#first-list');
        const secondList = document.querySelector('#second-list');

        // Select the first child element of the first list
        const everest = firstList.firstElementChild;  // <li>Everest</li>

        // Append it to the second list — this MOVES it (does not copy)
        secondList.appendChild(everest);
        // Everest is now gone from firstList and appears at end of secondList

    </script>

</body>
</html>
```

**What the browser renders:**
- A menu list with: Home, Services, About Us
- First list now has: Fuji, Kilimanjaro (Everest was moved)
- Second list now has: Karakoram Range, Denali, Mont Blanc, Everest

---

## 3. Get or Set Text of a Node

### What is it?

`textContent` is a property of any DOM node that gets or sets the raw text content of that node and all its descendants. It treats everything as plain text — no HTML tags are parsed.

### How it works

**Reading:** `textContent` walks through all child nodes and concatenates their text — including text inside hidden elements and ignoring HTML comments.

**Writing:** Setting `textContent` removes all existing child nodes and replaces them with a single new text node containing the given string.

### textContent vs innerText — key difference

| Property | Includes hidden elements | Respects CSS styles | Triggers reflow | Speed |
|---|---|---|---|---|
| `textContent` | Yes | No | No | Faster |
| `innerText` | No | Yes | Yes | Slower |

`innerText` behaves like what a user would see if they selected and copied text from the page. `textContent` returns everything regardless of visibility.

### Full HTML Example

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>textContent Demo</title>
    <style>
        body    { font-family: Arial, sans-serif; padding: 20px; }
        .box    { border: 1px solid #bdc3c7; padding: 15px; margin: 15px 0; border-radius: 6px; background: #f8f9fa; }
        .output { background: #eafaf1; border-left: 4px solid #27ae60; padding: 10px; margin-top: 10px; font-family: monospace; }
        h3      { color: #2c3e50; margin-top: 30px; }
    </style>
</head>
<body>

    <h1>textContent Demo</h1>

    <!-- Demo 1: Reading textContent -->
    <h3>1. Reading textContent</h3>
    <div class="box">
        <div id="note">
            JavaScript textContent Demo!
            <span style="display:none">Hidden Text!</span>
            <!-- this is a comment -->
        </div>
        <div class="output" id="out-text"></div>
        <div class="output" id="out-inner"></div>
    </div>

    <!-- Demo 2: Setting textContent -->
    <h3>2. Setting textContent (replaces all children)</h3>
    <div class="box">
        <div id="replace-demo">
            <strong>Bold text</strong> and <em>italic text</em> will be replaced.
        </div>
        <button onclick="replaceText()">Set textContent</button>
    </div>

    <!-- Demo 3: Setting textContent safely (no XSS) -->
    <h3>3. textContent is XSS-safe</h3>
    <div class="box">
        <div id="safe-demo"></div>
        <button onclick="insertSafe()">Insert HTML as Text (safe)</button>
    </div>

    <script>

        // --- Demo 1: Read textContent vs innerText ---
        const note     = document.getElementById('note');
        const outText  = document.getElementById('out-text');
        const outInner = document.getElementById('out-inner');

        // textContent includes "Hidden Text!" even though it is display:none
        outText.textContent  = 'textContent: "' + note.textContent.trim() + '"';

        // innerText excludes hidden elements — returns only visible text
        outInner.textContent = 'innerText:   "' + note.innerText.trim() + '"';

        // --- Demo 2: Setting textContent removes all child nodes ---
        function replaceText() {
            let demo = document.getElementById('replace-demo');
            // This removes the <strong> and <em> elements and replaces with plain text
            demo.textContent = 'All child nodes were removed and replaced with this text.';
        }

        // --- Demo 3: textContent is safe against XSS ---
        function insertSafe() {
            let safe = document.getElementById('safe-demo');
            // This renders the tags as literal text — not as HTML
            safe.textContent = '<img src=x onerror="alert(\'XSS\')">';
            // Output: shows the tag text literally — no script executes
        }

    </script>

</body>
</html>
```

---

## 4. Get or Set HTML of an Element

### What is it?

`innerHTML` is a property of any element that gets or sets the HTML markup contained within the element. Unlike `textContent`, it parses the assigned string as HTML and creates actual DOM nodes from it.

### How it works

**Reading:** The browser serializes all child nodes back into an HTML string and returns it. The string reflects the current live state of the DOM — including dynamically added content.

**Writing:** The browser parses the assigned string as HTML, destroys all existing child nodes, then inserts the new nodes. This is why it is slower than `createElement` — existing nodes are thrown away even if unchanged.

### ⚠️ Security warning

`innerHTML` does not execute `<script>` tags, but it does execute event attributes on elements like `<img onerror="...">`. Never set `innerHTML` with untrusted user-provided content.

### Full HTML Example

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>innerHTML Demo</title>
    <style>
        body  { font-family: Arial, sans-serif; padding: 20px; }
        .box  { border: 1px solid #bdc3c7; padding: 15px; margin: 15px 0; border-radius: 6px; background: #fdfefe; }
        pre   { background: #2c3e50; color: #ecf0f1; padding: 15px; border-radius: 4px; font-size: 14px; white-space: pre-wrap; }
        h3    { color: #2c3e50; margin-top: 25px; }
        .warn { background: #fdecea; border-left: 4px solid #e74c3c; padding: 10px; margin-top: 10px; }
    </style>
</head>
<body>

    <h1>innerHTML Demo</h1>

    <!-- Demo 1: Reading innerHTML -->
    <h3>1. Reading innerHTML</h3>
    <div class="box">
        <ul id="menu">
            <li>Home</li>
            <li>Services</li>
        </ul>
        <pre id="read-output"></pre>
    </div>

    <!-- Demo 2: Setting innerHTML -->
    <h3>2. Setting innerHTML (replaces existing content)</h3>
    <div class="box">
        <div id="target">Original content here.</div>
        <button onclick="setHTML()">Replace with innerHTML</button>
    </div>

    <!-- Demo 3: innerHTML reflects live DOM changes -->
    <h3>3. innerHTML reflects live DOM changes</h3>
    <div class="box">
        <ul id="live-menu">
            <li>Home</li>
            <li>Services</li>
        </ul>
        <button onclick="addAndShow()">Add item and read innerHTML</button>
        <pre id="live-output"></pre>
    </div>

    <!-- Demo 4: Security risk demonstration -->
    <h3>4. Security — Use textContent for user input</h3>
    <div class="box">
        <input type="text" id="user-input" placeholder="Type something..." value="&lt;img src=x onerror=alert('XSS')&gt;" style="width:100%; padding:6px; box-sizing:border-box;">
        <button onclick="insertUnsafe()">Insert via innerHTML (UNSAFE)</button>
        <button onclick="insertSafe()">Insert via textContent (SAFE)</button>
        <div id="result-area" class="warn" style="margin-top:10px;"></div>
    </div>

    <script>

        // --- Demo 1: Read innerHTML ---
        const menu   = document.getElementById('menu');
        const output = document.getElementById('read-output');
        output.textContent = menu.innerHTML;
        // Shows: <li>Home</li>\n            <li>Services</li>

        // --- Demo 2: Set innerHTML ---
        function setHTML() {
            document.getElementById('target').innerHTML =
                '<h4>New Heading</h4><p>This was inserted with <b>innerHTML</b>.</p>';
        }

        // --- Demo 3: innerHTML always reflects the current DOM ---
        function addAndShow() {
            const liveMenu = document.getElementById('live-menu');

            // Add a new item dynamically
            let li = document.createElement('li');
            li.textContent = 'About Us';
            liveMenu.appendChild(li);

            // innerHTML now includes the dynamically added item
            document.getElementById('live-output').textContent = liveMenu.innerHTML;
        }

        // --- Demo 4: Security comparison ---
        function insertUnsafe() {
            // DANGEROUS: if input contains <img onerror="...">, it will execute
            const val = document.getElementById('user-input').value;
            document.getElementById('result-area').innerHTML = val;
        }

        function insertSafe() {
            // SAFE: tags are treated as literal text — never parsed as HTML
            const val = document.getElementById('user-input').value;
            document.getElementById('result-area').textContent = val;
        }

    </script>

</body>
</html>
```

---

## 5. innerHTML vs createElement

### What is it?

This is not a single method but a design decision. Both `innerHTML` and `createElement()` can add content to the DOM, but they differ significantly in performance, security, and how the browser handles existing nodes.

### How each approach works internally

**`innerHTML` approach:**
1. Browser serializes existing children into a string (to compute `+=`)
2. Browser destroys all existing child nodes
3. Browser re-parses the entire new string as HTML
4. Browser creates all new nodes from scratch
5. All old references to child elements become stale/detached

**`createElement` approach:**
1. Browser creates only the new node in memory
2. Browser inserts it at the specified position
3. All existing child nodes remain untouched and valid

### Full HTML Example

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>innerHTML vs createElement</title>
    <style>
        body   { font-family: Arial, sans-serif; padding: 20px; }
        .box   { border: 1px dashed #aaa; padding: 15px; margin: 15px 0; border-radius: 6px; }
        .timer { font-weight: bold; color: #e74c3c; margin-top: 8px; }
        button { padding: 8px 16px; margin: 5px; cursor: pointer; }
        h3     { color: #2c3e50; margin-top: 25px; }
        .safe  { color: #27ae60; font-weight: bold; }
        .risky { color: #e74c3c; font-weight: bold; }
    </style>
</head>
<body>

    <h1>innerHTML vs createElement</h1>

    <!-- Demo 1: Performance comparison -->
    <h3>1. Performance — Adding 500 paragraphs</h3>
    <div class="box">
        <button onclick="runInnerHTML()">Use innerHTML</button>
        <button onclick="runCreateElement()">Use createElement</button>
        <div id="perf-result" class="timer"></div>
        <div id="perf-container" style="max-height:100px; overflow:auto;"></div>
    </div>

    <!-- Demo 2: Security comparison -->
    <h3>2. Security — Injecting untrusted content</h3>
    <div class="box">
        <p>Payload: <code>&lt;img src=x onerror="this.alt='XSS ran!'"&gt;</code></p>
        <button onclick="securityInnerHTML()">innerHTML (risky)</button>
        <button onclick="securityCreateElement()">createElement (safe)</button>
        <div id="sec-result" style="margin-top:10px;"></div>
    </div>

    <!-- Demo 3: Stale reference problem with innerHTML -->
    <h3>3. Stale References with innerHTML</h3>
    <div class="box">
        <ul id="ref-list">
            <li id="first-item">First Item</li>
        </ul>
        <button onclick="staleRefDemo()">Demonstrate stale reference</button>
        <p id="stale-output"></p>
    </div>

    <script>

        // --- Demo 1: Performance ---
        function runInnerHTML() {
            const container = document.getElementById('perf-container');
            container.innerHTML = '';
            const start = performance.now();

            for (let i = 0; i < 500; i++) {
                // Each += causes a full reparse of all existing content
                container.innerHTML += `<p>Paragraph ${i}</p>`;
            }

            const end = performance.now();
            document.getElementById('perf-result').textContent =
                `innerHTML: ${(end - start).toFixed(2)}ms`;
        }

        function runCreateElement() {
            const container = document.getElementById('perf-container');
            container.innerHTML = '';
            const start = performance.now();

            for (let i = 0; i < 500; i++) {
                // createElement only touches the new node
                const p = document.createElement('p');
                p.textContent = `Paragraph ${i}`;
                container.appendChild(p);
            }

            const end = performance.now();
            document.getElementById('perf-result').textContent =
                `createElement: ${(end - start).toFixed(2)}ms`;
        }

        // --- Demo 2: Security ---
        function securityInnerHTML() {
            const payload = `<img src=x onerror="this.alt='XSS ran!'" alt="checking...">`;
            document.getElementById('sec-result').innerHTML =
                '<span class="risky">innerHTML result: </span>' + payload;
            // The onerror fires because src=x fails to load
        }

        function securityCreateElement() {
            const payload = `<img src=x onerror="this.alt='XSS ran!'" alt="checking...">`;
            const p = document.createElement('p');
            p.textContent = payload; // treated as literal text — no parsing
            const result = document.getElementById('sec-result');
            result.innerHTML = '';
            const label = document.createElement('span');
            label.className = 'safe';
            label.textContent = 'createElement result: ';
            result.appendChild(label);
            result.appendChild(p);
        }

        // --- Demo 3: Stale reference ---
        function staleRefDemo() {
            const list      = document.getElementById('ref-list');
            const firstItem = document.getElementById('first-item');

            // Save a reference to the existing li
            const savedRef = firstItem;

            // innerHTML destroys and recreates ALL child nodes
            list.innerHTML += '<li>Second Item</li>';

            // savedRef is now a detached node — no longer in the DOM
            document.getElementById('stale-output').textContent =
                'savedRef still in DOM? ' + document.contains(savedRef) +
                ' — createElement would keep the reference valid.';
        }

    </script>

</body>
</html>
```

---

## 6. Use DocumentFragment

### What is it?

`DocumentFragment` is a minimal, lightweight document object that is not part of the active DOM tree. It acts as a temporary container for building a group of nodes before inserting them all at once into the live document.

### How it works

1. You create a fragment: `let fragment = new DocumentFragment()`
2. You append nodes to the fragment — no DOM updates happen (fragment is detached)
3. You append the fragment to the real DOM — **one single DOM update**
4. The fragment itself becomes empty after the insert; its children move into the target

This is critical for performance when inserting many elements. Without a fragment, each `appendChild()` call inside a loop forces the browser to recalculate layout — once per iteration. With a fragment, the browser updates the layout only once.

### Full HTML Example

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>DocumentFragment Demo</title>
    <style>
        body   { font-family: Arial, sans-serif; padding: 20px; }
        .box   { border: 1px solid #bdc3c7; padding: 15px; margin: 15px 0; border-radius: 6px; }
        .timer { font-weight: bold; color: #8e44ad; margin: 8px 0; }
        button { padding: 8px 16px; margin: 5px 5px 5px 0; cursor: pointer; }
        ul     { max-height: 120px; overflow: auto; background: #f8f9fa; padding: 10px 30px; }
        h3     { color: #2c3e50; margin-top: 25px; }
    </style>
</head>
<body>

    <h1>DocumentFragment Demo</h1>

    <!-- Demo 1: Basic fragment usage -->
    <h3>1. Basic Usage — Language List</h3>
    <div class="box">
        <ul id="language"></ul>
        <button onclick="buildWithFragment()">Build List with Fragment</button>
    </div>

    <!-- Demo 2: Performance comparison -->
    <h3>2. Performance — 1000 items</h3>
    <div class="box">
        <button onclick="withoutFragment()">Without Fragment</button>
        <button onclick="withFragment()">With Fragment</button>
        <div class="timer" id="frag-timer"></div>
        <ul id="frag-list" style="max-height:80px; overflow:auto;"></ul>
    </div>

    <!-- Demo 3: Fragment remains empty after insert -->
    <h3>3. Fragment is Empty After Insertion</h3>
    <div class="box">
        <button onclick="showFragmentBehaviour()">Show Fragment Behaviour</button>
        <p id="frag-status"></p>
    </div>

    <script>

        // --- Demo 1: Basic fragment usage ---
        function buildWithFragment() {
            const languages = ['JS', 'TypeScript', 'Elm', 'Dart', 'Scala'];
            const langEl    = document.querySelector('#language');
            const fragment  = new DocumentFragment();

            languages.forEach((language) => {
                let li = document.createElement('li');
                li.textContent = language;
                fragment.appendChild(li); // Append to fragment — no DOM update yet
            });

            langEl.appendChild(fragment); // Single DOM update — all items inserted at once
        }

        // --- Demo 2: Performance comparison ---
        function withoutFragment() {
            const list = document.getElementById('frag-list');
            list.innerHTML = '';
            const start = performance.now();

            for (let i = 0; i < 1000; i++) {
                const li = document.createElement('li');
                li.textContent = `Item ${i}`;
                list.appendChild(li); // 1000 separate DOM updates
            }

            const elapsed = (performance.now() - start).toFixed(2);
            document.getElementById('frag-timer').textContent =
                `Without Fragment: ${elapsed}ms (1000 DOM updates)`;
        }

        function withFragment() {
            const list = document.getElementById('frag-list');
            list.innerHTML = '';
            const start    = performance.now();
            const fragment = document.createDocumentFragment();

            for (let i = 0; i < 1000; i++) {
                const li = document.createElement('li');
                li.textContent = `Item ${i}`;
                fragment.appendChild(li); // No DOM update
            }

            list.appendChild(fragment); // 1 DOM update

            const elapsed = (performance.now() - start).toFixed(2);
            document.getElementById('frag-timer').textContent =
                `With Fragment: ${elapsed}ms (1 DOM update)`;
        }

        // --- Demo 3: Fragment becomes empty after insertion ---
        function showFragmentBehaviour() {
            const fragment = new DocumentFragment();
            const p1       = document.createElement('p');
            const p2       = document.createElement('p');
            p1.textContent = 'First paragraph';
            p2.textContent = 'Second paragraph';
            fragment.appendChild(p1);
            fragment.appendChild(p2);

            const beforeCount = fragment.childNodes.length;
            document.body.appendChild(fragment);
            const afterCount = fragment.childNodes.length;

            document.getElementById('frag-status').textContent =
                `Fragment children BEFORE insert: ${beforeCount} | AFTER insert: ${afterCount} — children moved to DOM.`;
        }

    </script>

</body>
</html>
```

---

## 7. Insert a Node Before Another — `before()`

### What is it?

The `element.before()` method inserts one or more nodes (or plain text strings) **immediately before** the element itself in the DOM — as a sibling, not a child.

### How it works

1. You select an existing element in the DOM
2. You call `.before()` on it and pass the nodes to insert
3. The new nodes are placed as siblings of the element, immediately before it in the parent's child list
4. Strings are automatically converted to `Text` nodes

### Full HTML Example

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>before() Demo</title>
    <style>
        body { font-family: Arial, sans-serif; padding: 20px; }
        .box { border: 1px solid #bdc3c7; padding: 15px; margin: 15px 0; border-radius: 6px; }
        h3   { color: #2c3e50; margin-top: 25px; }
        ul   { background: #f8f9fa; padding: 15px 35px; }
        button { padding: 8px 16px; margin: 5px 0; cursor: pointer; }
    </style>
</head>
<body>

    <h1>before() Demo</h1>

    <!-- Demo 1: Insert heading before a paragraph -->
    <h3>1. Insert a Heading Before a Paragraph</h3>
    <div class="box" id="demo1-container">
        <p id="target-p">This is the paragraph. A heading will be inserted before it.</p>
        <button onclick="insertHeading()">Insert Heading Before Paragraph</button>
    </div>

    <!-- Demo 2: Insert multiple nodes before first list item -->
    <h3>2. Insert Multiple Nodes Before First List Item</h3>
    <div class="box">
        <ul id="fw-list">
            <li>Angular</li>
            <li>Vue</li>
        </ul>
        <button onclick="insertMultiple()">Insert React, Meteor, Polymer Before Angular</button>
    </div>

    <!-- Demo 3: Insert a string as Text node -->
    <h3>3. Insert a String (Text Node) Before a Button</h3>
    <div class="box">
        <button id="donate-btn">Donate Here</button>
        <button onclick="insertEmoji()">Insert Emoji Before Button Text</button>
    </div>

    <script>

        // --- Demo 1: Insert a heading before a paragraph ---
        function insertHeading() {
            const p  = document.querySelector('#target-p');
            const h1 = document.createElement('h1');
            h1.innerText = 'JavaScript DOM — before() Demo';

            // h1 is inserted as a sibling BEFORE p, inside the same parent
            p.before(h1);
        }

        // --- Demo 2: Insert multiple nodes at once ---
        function insertMultiple() {
            const list = document.querySelector('#fw-list');

            const libs  = ['React', 'Meteor', 'Polymer'];
            const items = libs.map((lib) => {
                const item = document.createElement('li');
                item.innerText = lib;
                return item;
            });

            // Spread operator passes all items as separate arguments
            // Inserts all three BEFORE the first child (Angular)
            list.firstChild.before(...items);
        }

        // --- Demo 3: Insert a string as a Text node ---
        function insertEmoji() {
            const button = document.querySelector('#donate-btn');
            // Strings passed to before() become Text nodes automatically
            button.firstChild.before('🧡 ');
        }

    </script>

</body>
</html>
```

---

## 8. Insert a Node After Another — `after()`

### What is it?

The `element.after()` method inserts one or more nodes (or plain text strings) **immediately after** the element itself in the DOM — as a sibling, not a child.

### How it works

1. You select an existing element in the DOM
2. You call `.after()` on it and pass the nodes to insert
3. The new nodes are placed as siblings of the element, immediately after it in the parent's child list
4. Strings are automatically converted to `Text` nodes

### Full HTML Example

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>after() Demo</title>
    <style>
        body { font-family: Arial, sans-serif; padding: 20px; }
        .box { border: 1px solid #bdc3c7; padding: 15px; margin: 15px 0; border-radius: 6px; }
        h3   { color: #2c3e50; margin-top: 25px; }
        ul   { background: #f8f9fa; padding: 15px 35px; }
        button { padding: 8px 16px; margin: 5px 0; cursor: pointer; }
    </style>
</head>
<body>

    <h1>after() Demo</h1>

    <!-- Demo 1: Insert paragraph after heading -->
    <h3>1. Insert a Paragraph After a Heading</h3>
    <div class="box">
        <h2 id="target-h1">JavaScript DOM — after()</h2>
        <button onclick="insertParagraph()">Insert Paragraph After Heading</button>
    </div>

    <!-- Demo 2: Insert multiple nodes after last list item -->
    <h3>2. Insert Multiple Nodes After Last List Item</h3>
    <div class="box">
        <ul id="lib-list">
            <li>Angular</li>
            <li>Vue</li>
        </ul>
        <button onclick="insertMultipleAfter()">Insert React, Meteor, Polymer After Vue</button>
    </div>

    <!-- Demo 3: Insert string after button text -->
    <h3>3. Insert a String (Text Node) After Button Text</h3>
    <div class="box">
        <button id="donate-btn2">Donate Here</button>
        <br><br>
        <button onclick="insertEmojiAfter()">Insert Emoji After Button Text</button>
    </div>

    <script>

        // --- Demo 1: Insert a paragraph after a heading ---
        function insertParagraph() {
            const h1 = document.querySelector('#target-h1');
            const p  = document.createElement('p');
            p.innerText = 'This paragraph was inserted AFTER the heading using after().';
            h1.after(p);
        }

        // --- Demo 2: Insert multiple items after the last list item ---
        function insertMultipleAfter() {
            const list  = document.querySelector('#lib-list');
            const libs  = ['React', 'Meteor', 'Polymer'];

            const items = libs.map((lib) => {
                const item = document.createElement('li');
                item.innerText = lib;
                return item;
            });

            // Insert all three items AFTER the last child (Vue)
            list.lastChild.after(...items);
        }

        // --- Demo 3: Insert string as Text node after button text ---
        function insertEmojiAfter() {
            const button = document.querySelector('#donate-btn2');
            button.firstChild.after(' 🧡');
        }

    </script>

</body>
</html>
```

---

## 9. Insert a Node before the First Child — `prepend()`

### What is it?

`parentNode.prepend()` inserts one or more nodes or DOMString objects **before the first child** of the parent. It is the opposite of `append()`. Unlike `before()`, `prepend()` targets the inside of the parent element, not a sibling position.

### How it works

1. You select a parent element
2. You call `parent.prepend(node1, node2, ...)` with one or more nodes or strings
3. The nodes are inserted at the very beginning — before the current first child
4. Strings become Text nodes automatically

### Full HTML Example

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>prepend() Demo</title>
    <style>
        body { font-family: Arial, sans-serif; padding: 20px; }
        .box { border: 1px solid #bdc3c7; padding: 15px; margin: 15px 0; border-radius: 6px; }
        ul   { background: #fdf2f8; padding: 15px 35px; }
        li   { padding: 4px 0; }
        h3   { color: #2c3e50; margin-top: 25px; }
        button { padding: 8px 16px; margin: 5px 0; cursor: pointer; }
    </style>
</head>
<body>

    <h1>prepend() Demo</h1>

    <!-- Demo 1: Prepend list items -->
    <h3>1. Prepend Multiple List Items Before First Child</h3>
    <div class="box">
        <ul id="prepend-list">
            <li>HTML</li>  <!-- This was the original first child -->
        </ul>
        <button onclick="prependItems()">Prepend CSS, JavaScript, TypeScript</button>
    </div>

    <!-- Demo 2: Prepend a single element -->
    <h3>2. Prepend a Single Element</h3>
    <div class="box">
        <div id="article">
            <p>This is the article body paragraph.</p>
        </div>
        <button onclick="prependTitle()">Prepend Article Title</button>
    </div>

    <!-- Demo 3: Prepend a plain text string -->
    <h3>3. Prepend a Text String</h3>
    <div class="box">
        <div id="text-box"></div>
        <button onclick="prependText()">Prepend Text</button>
    </div>

    <script>

        // --- Demo 1: Prepend multiple list items ---
        function prependItems() {
            const app   = document.querySelector('#prepend-list');
            const langs = ['CSS', 'JavaScript', 'TypeScript'];

            const nodes = langs.map(lang => {
                const li = document.createElement('li');
                li.textContent = lang;
                return li;
            });

            // All three are inserted BEFORE the current first child (HTML)
            app.prepend(...nodes);
        }

        // --- Demo 2: Prepend a single element ---
        function prependTitle() {
            const article = document.getElementById('article');
            const h2      = document.createElement('h2');
            h2.textContent = 'Article Title (Prepended)';
            article.prepend(h2);
        }

        // --- Demo 3: Prepend a plain text string ---
        function prependText() {
            const box = document.getElementById('text-box');
            box.prepend('prepend() Text Demo — ');
            console.log(box.textContent); // "prepend() Text Demo — "
        }

    </script>

</body>
</html>
```

---

## 10. Insert a Node after the Last Child — `append()`

### What is it?

`parentNode.append()` inserts one or more nodes or DOMString objects **after the last child** of the parent. It is similar to `appendChild()` but more powerful — it accepts multiple nodes and strings in one call.

### How it works

1. You select a parent element
2. You call `parent.append(node1, node2, ...)` with one or more nodes or strings
3. The nodes are inserted at the very end — after the current last child
4. Strings become Text nodes automatically
5. Unlike `appendChild()`, `append()` returns `undefined` (not the appended node)

### Full HTML Example

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>append() Demo</title>
    <style>
        body  { font-family: Arial, sans-serif; padding: 20px; }
        .box  { border: 1px solid #bdc3c7; padding: 15px; margin: 15px 0; border-radius: 6px; }
        ul    { background: #eafaf1; padding: 15px 35px; }
        li    { padding: 4px 0; }
        table { border-collapse: collapse; width: 100%; margin-top: 10px; }
        th,td { border: 1px solid #bdc3c7; padding: 8px 12px; text-align: left; }
        th    { background: #2c3e50; color: #fff; }
        h3    { color: #2c3e50; margin-top: 25px; }
        button { padding: 8px 16px; margin: 5px 0; cursor: pointer; }
    </style>
</head>
<body>

    <h1>append() Demo</h1>

    <!-- Demo 1: Append multiple list items -->
    <h3>1. Append Multiple List Items</h3>
    <div class="box">
        <ul id="append-list">
            <li>JavaScript</li>  <!-- Original last child -->
        </ul>
        <button onclick="appendItems()">Append TypeScript, HTML, CSS</button>
    </div>

    <!-- Demo 2: Append plain text -->
    <h3>2. Append Plain Text</h3>
    <div class="box">
        <div id="text-container" style="border:1px solid #aaa; padding:10px; min-height:30px;"></div>
        <button onclick="appendText()">Append Text</button>
    </div>

    <!-- Demo 3: append() vs appendChild() comparison -->
    <h3>3. append() vs appendChild() Comparison</h3>
    <div class="box">
        <table>
            <tr><th>Feature</th><th>append()</th><th>appendChild()</th></tr>
            <tr><td>Return value</td><td>undefined</td><td>Appended Node object</td></tr>
            <tr><td>Multiple nodes</td><td>Yes</td><td>No — single node only</td></tr>
            <tr><td>Accepts strings</td><td>Yes (as Text nodes)</td><td>No — only Node objects</td></tr>
        </table>
        <button onclick="compareDemo()">Run Both — check console</button>
    </div>

    <script>

        // --- Demo 1: Append multiple items ---
        function appendItems() {
            const app   = document.querySelector('#append-list');
            const langs = ['TypeScript', 'HTML', 'CSS'];

            const nodes = langs.map(lang => {
                const li = document.createElement('li');
                li.textContent = lang;
                return li;
            });

            // All three appended after current last child (JavaScript)
            app.append(...nodes);
        }

        // --- Demo 2: Append a plain text string ---
        function appendText() {
            const container = document.getElementById('text-container');
            container.append('append() Text Demo — added as a Text node');
            console.log(container.textContent);
        }

        // --- Demo 3: Comparison demo ---
        function compareDemo() {
            const ul = document.createElement('ul');

            // appendChild returns the appended node
            const li1  = document.createElement('li');
            li1.textContent = 'appendChild item';
            const returned = ul.appendChild(li1);
            console.log('appendChild returns:', returned); // The <li> element

            // append returns undefined
            const li2 = document.createElement('li');
            li2.textContent = 'append item';
            const result = ul.append(li2);
            console.log('append returns:', result); // undefined

            // append can insert multiple nodes and strings at once
            ul.append('text node', document.createElement('li'));
            console.log('append() inserted multiple nodes + string in one call');
        }

    </script>

</body>
</html>
```

---

## 11. insertAdjacentHTML

### What is it?

`insertAdjacentHTML()` parses an HTML string and inserts the resulting nodes at a **precise position** relative to the target element — without destroying or reparsing existing child nodes. It is more efficient than `innerHTML +=` because it does not touch existing content.

### How it works

1. You select a target element
2. You call `element.insertAdjacentHTML(position, htmlString)`
3. The HTML string is parsed and inserted at the specified position
4. Existing child nodes remain intact

### The four positions

```
<!-- beforebegin -->  ← Before the element (as a sibling)
<ul id="list">
    <!-- afterbegin -->  ← Just inside, before first child
    <li>existing item</li>
    <!-- beforeend -->   ← Just inside, after last child
</ul>
<!-- afterend -->     ← After the element (as a sibling)
```

### Full HTML Example

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>insertAdjacentHTML Demo</title>
    <style>
        body   { font-family: Arial, sans-serif; padding: 20px; }
        .box   { border: 1px solid #bdc3c7; padding: 15px; margin: 15px 0; border-radius: 6px; }
        ul     { background: #eaf2ff; padding: 15px 35px; }
        .added { background: #fef9e7; font-style: italic; }
        h3     { color: #2c3e50; margin-top: 25px; }
        button { padding: 8px 16px; margin: 4px; cursor: pointer; }
        code   { background: #f0f0f0; padding: 2px 6px; border-radius: 3px; font-size: 13px; }
    </style>
</head>
<body>

    <h1>insertAdjacentHTML Demo</h1>

    <!-- Demo 1: All four positions -->
    <h3>1. All Four Positions Around a List</h3>
    <div class="box">
        <div id="adjacent-wrapper">
            <ul id="adj-list">
                <li>CSS</li>
            </ul>
        </div>
        <button onclick="insertBeforeBegin()">beforebegin — before &lt;ul&gt;</button>
        <button onclick="insertAfterBegin()">afterbegin — before first &lt;li&gt;</button>
        <button onclick="insertBeforeEnd()">beforeend — after last &lt;li&gt;</button>
        <button onclick="insertAfterEnd()">afterend — after &lt;ul&gt;</button>
        <button onclick="resetAdj()">Reset</button>
    </div>

    <!-- Demo 2: Practical use — adding notification banner -->
    <h3>2. Practical Use — Insert a Notification Banner</h3>
    <div class="box">
        <div id="main-content">
            <p>This is the main content area.</p>
        </div>
        <button onclick="addBanner()">Add Banner Before Content</button>
    </div>

    <script>

        const originalHTML = '<ul id="adj-list"><li>CSS</li></ul>';

        function resetAdj() {
            document.getElementById('adjacent-wrapper').innerHTML = originalHTML;
        }

        // --- Demo 1: All four positions ---
        function insertBeforeBegin() {
            const list = document.querySelector('#adj-list');
            // Inserts BEFORE the <ul> element itself (as a sibling)
            list.insertAdjacentHTML('beforebegin', '<h4 class="added">↑ beforebegin: Inserted before &lt;ul&gt;</h4>');
        }

        function insertAfterBegin() {
            const list = document.querySelector('#adj-list');
            // Inserts INSIDE the <ul>, before its first child
            list.insertAdjacentHTML('afterbegin', '<li class="added">↓ afterbegin: First child</li>');
        }

        function insertBeforeEnd() {
            const list = document.querySelector('#adj-list');
            // Inserts INSIDE the <ul>, after its last child
            list.insertAdjacentHTML('beforeend', '<li class="added">↑ beforeend: Last child</li>');
        }

        function insertAfterEnd() {
            const list = document.querySelector('#adj-list');
            // Inserts AFTER the <ul> element itself (as a sibling)
            list.insertAdjacentHTML('afterend', '<p class="added">↓ afterend: Inserted after &lt;ul&gt;</p>');
        }

        // --- Demo 2: Practical banner insertion ---
        function addBanner() {
            const main = document.getElementById('main-content');
            main.insertAdjacentHTML('beforebegin',
                '<div style="background:#fdecea; border:1px solid #e74c3c; padding:10px; border-radius:4px; margin-bottom:10px;">⚠️ This is a notification banner inserted with insertAdjacentHTML()</div>'
            );
        }

    </script>

</body>
</html>
```

---

## 12. Replace Child Elements — `replaceChild()`

### What is it?

`parentNode.replaceChild()` replaces one existing child node with a new node inside a parent element.

### How it works

1. You select the parent element that contains the child you want to replace
2. You create the new node that will take the old one's place
3. You call `parentNode.replaceChild(newChild, oldChild)`
4. The old child is removed and the new child takes its exact position
5. The removed (old) node is returned — still in memory if you need it

### Full HTML Example

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>replaceChild() Demo</title>
    <style>
        body   { font-family: Arial, sans-serif; padding: 20px; }
        .box   { border: 1px solid #bdc3c7; padding: 15px; margin: 15px 0; border-radius: 6px; }
        ul     { background: #fdf8f0; padding: 15px 35px; }
        .new   { color: #27ae60; font-weight: bold; }
        .old   { color: #e74c3c; text-decoration: line-through; }
        h3     { color: #2c3e50; margin-top: 25px; }
        button { padding: 8px 16px; margin: 4px; cursor: pointer; }
    </style>
</head>
<body>

    <h1>replaceChild() Demo</h1>

    <!-- Demo 1: Replace first list item -->
    <h3>1. Replace First List Item</h3>
    <div class="box">
        <ul id="menu">
            <li>Homepage</li>
            <li>Services</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
        <button onclick="replaceFirst()">Replace "Homepage" with "Home"</button>
        <button onclick="resetMenu()">Reset</button>
        <p id="replace-info"></p>
    </div>

    <!-- Demo 2: Replace middle element -->
    <h3>2. Replace a Middle Item by Index</h3>
    <div class="box">
        <ul id="menu2">
            <li>JavaScript</li>
            <li>Python</li>
            <li>Java</li>
            <li>C++</li>
        </ul>
        <button onclick="replaceSecond()">Replace "Python" (index 1) with "TypeScript"</button>
    </div>

    <!-- Demo 3: Use returned node -->
    <h3>3. Reuse the Removed Node</h3>
    <div class="box">
        <ul id="menu3">
            <li id="item-a">Item A</li>
            <li id="item-b">Item B</li>
        </ul>
        <div id="removed-container" style="margin-top:10px; border:1px dashed #aaa; padding:10px;">
            The removed node will appear here.
        </div>
        <button onclick="swapAndReuse()">Replace Item A with Item B, reuse Item A</button>
    </div>

    <script>

        // --- Demo 1: Replace the first child ---
        const originalMenuHTML = document.getElementById('menu').innerHTML;

        function replaceFirst() {
            const menu = document.getElementById('menu');
            const li   = document.createElement('li');
            li.textContent  = 'Home';
            li.className    = 'new';

            // replaceChild(newNode, oldNode) — replaces firstElementChild
            const removed = menu.replaceChild(li, menu.firstElementChild);
            document.getElementById('replace-info').textContent =
                `Removed node text was: "${removed.textContent}"`;
        }

        function resetMenu() {
            document.getElementById('menu').innerHTML = originalMenuHTML;
            document.getElementById('replace-info').textContent = '';
        }

        // --- Demo 2: Replace by index ---
        function replaceSecond() {
            const menu2  = document.getElementById('menu2');
            const newLi  = document.createElement('li');
            newLi.textContent = 'TypeScript';
            newLi.className   = 'new';

            // children[1] is the second child (index 1 = Python)
            menu2.replaceChild(newLi, menu2.children[1]);
        }

        // --- Demo 3: Reuse the removed node ---
        function swapAndReuse() {
            const menu3    = document.getElementById('menu3');
            const itemA    = document.getElementById('item-a');
            const itemB    = document.getElementById('item-b');

            const newLi    = document.createElement('li');
            newLi.textContent = 'New Item B (replacement)';
            newLi.className   = 'new';

            // Remove itemA, replace with newLi — itemA is returned
            const removedA = menu3.replaceChild(newLi, itemA);

            // The removed node is still alive in memory — we can place it elsewhere
            removedA.textContent = 'Item A (reused after removal)';
            removedA.className   = 'old';
            document.getElementById('removed-container').appendChild(removedA);
        }

    </script>

</body>
</html>
```

---

## 13. Clone a Node — `cloneNode()`

### What is it?

`cloneNode()` creates a copy of a DOM node. You can clone just the node itself (shallow) or the node together with all its descendants, attributes, and inline event handlers (deep).

### How it works

1. You call `originalNode.cloneNode(deep)` where `deep` is `true` or `false`
2. `true` — clones the node AND all its children recursively
3. `false` (default) — clones only the node itself with no children
4. The clone is returned in memory — not yet in the DOM
5. You must insert it into the document using any insertion method

### What is and is not cloned

| Copied | Not Copied |
|---|---|
| DOM structure and all attributes | Listeners added via `addEventListener()` |
| Inline event handlers (`onclick="..."`) | Listeners assigned via `element.onclick = fn` |
| `id` attribute (watch for duplicates!) | — |

### Full HTML Example

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>cloneNode() Demo</title>
    <style>
        body  { font-family: Arial, sans-serif; padding: 20px; }
        .box  { border: 1px solid #bdc3c7; padding: 15px; margin: 15px 0; border-radius: 6px; }
        ul    { background: #f4ecf7; padding: 15px 35px; margin: 10px 0; }
        h3    { color: #2c3e50; margin-top: 25px; }
        button { padding: 8px 16px; margin: 4px; cursor: pointer; }
        .clone-label { font-weight: bold; color: #8e44ad; font-size: 13px; }
    </style>
</head>
<body>

    <h1>cloneNode() Demo</h1>

    <!-- Demo 1: Deep clone -->
    <h3>1. Deep Clone (cloneNode(true)) — Clones All Children</h3>
    <div class="box">
        <p class="clone-label">Original Menu:</p>
        <ul id="menu">
            <li>Home</li>
            <li>Services</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
        <button onclick="deepClone()">Deep Clone the Menu</button>
        <p class="clone-label">Cloned Menu (appears below):</p>
    </div>

    <!-- Demo 2: Shallow clone -->
    <h3>2. Shallow Clone (cloneNode(false)) — Only the Element</h3>
    <div class="box">
        <ul id="shallow-menu">
            <li>Item 1</li>
            <li>Item 2</li>
            <li>Item 3</li>
        </ul>
        <button onclick="shallowClone()">Shallow Clone (no children)</button>
        <div id="shallow-result" style="border:1px dashed #aaa; min-height:30px; margin-top:10px; padding:10px;">
            Shallow clone output appears here.
        </div>
    </div>

    <!-- Demo 3: Duplicate id warning -->
    <h3>3. Fix Duplicate id After Cloning</h3>
    <div class="box">
        <nav id="main-nav">
            <ul>
                <li>Home</li>
                <li>About</li>
            </ul>
        </nav>
        <button onclick="cloneWithFixedId()">Clone nav and Fix the id</button>
        <p id="id-info"></p>
    </div>

    <script>

        // --- Demo 1: Deep clone ---
        function deepClone() {
            const menu       = document.querySelector('#menu');
            const clonedMenu = menu.cloneNode(true);  // Clone element + all <li> children
            clonedMenu.id    = 'menu-mobile';          // Avoid duplicate id

            // Add a label to the clone
            const label = document.createElement('li');
            label.textContent = '(Mobile Clone)';
            label.style.fontStyle = 'italic';
            label.style.color = '#8e44ad';
            clonedMenu.appendChild(label);

            // Insert after the original menu
            menu.after(clonedMenu);
        }

        // --- Demo 2: Shallow clone ---
        function shallowClone() {
            const menu         = document.querySelector('#shallow-menu');
            const shallowCopy  = menu.cloneNode(false); // Clone <ul> only — no children
            shallowCopy.id     = 'shallow-copy';
            shallowCopy.style.background = '#eafaf1';

            const result = document.getElementById('shallow-result');
            result.innerHTML  = '';
            result.appendChild(shallowCopy);

            // Confirm no children were cloned
            result.insertAdjacentHTML('beforeend',
                `<p>Cloned &lt;ul&gt; has ${shallowCopy.children.length} children (expected 0)</p>`);
        }

        // --- Demo 3: Clone and fix the id ---
        function cloneWithFixedId() {
            const nav   = document.getElementById('main-nav');
            const clone = nav.cloneNode(true);

            // WRONG — would create two elements with id="main-nav"
            // document.body.appendChild(clone); // Do NOT do this without changing the id

            // CORRECT — change the id first
            clone.id = 'mobile-nav';
            document.body.appendChild(clone);

            document.getElementById('id-info').textContent =
                `Original id: "${nav.id}" | Clone id: "${clone.id}" — no conflict.`;
        }

    </script>

</body>
</html>
```

---

## 14. Remove Child Elements — `removeChild()`

### What is it?

`removeChild()` removes a specified child node from its parent element. The removed node is returned and kept in memory — you can reinsert it elsewhere if needed. If you do not store the return value, the garbage collector will eventually clean it up.

### How it works

1. You reference the parent element
2. You call `parentNode.removeChild(childNode)` passing the child to remove
3. The child is detached from the DOM and returned
4. If the child is not actually a child of the parent, an exception is thrown

### Full HTML Example

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>removeChild() Demo</title>
    <style>
        body  { font-family: Arial, sans-serif; padding: 20px; }
        .box  { border: 1px solid #bdc3c7; padding: 15px; margin: 15px 0; border-radius: 6px; }
        ul    { background: #fdecea; padding: 15px 35px; }
        h3    { color: #2c3e50; margin-top: 25px; }
        button { padding: 8px 16px; margin: 4px; cursor: pointer; }
        #trash { background: #f8f9fa; border: 2px dashed #aaa; padding: 10px; min-height: 40px; margin-top: 10px; }
    </style>
</head>
<body>

    <h1>removeChild() Demo</h1>

    <!-- Demo 1: Remove last item -->
    <h3>1. Remove Last List Item</h3>
    <div class="box">
        <ul id="menu">
            <li>Home</li>
            <li>Products</li>
            <li>About Us</li>
        </ul>
        <button onclick="removeLast()">Remove Last Item</button>
    </div>

    <!-- Demo 2: Remove first item -->
    <h3>2. Remove First List Item</h3>
    <div class="box">
        <ul id="menu2">
            <li>Home</li>
            <li>Services</li>
            <li>Contact</li>
        </ul>
        <button onclick="removeFirst()">Remove First Item</button>
    </div>

    <!-- Demo 3: Remove all child nodes -->
    <h3>3. Remove All Child Nodes</h3>
    <div class="box">
        <ul id="menu3">
            <li>Alpha</li>
            <li>Beta</li>
            <li>Gamma</li>
            <li>Delta</li>
        </ul>
        <button onclick="removeAllLoop()">Remove All (loop)</button>
        <button onclick="removeAllInnerHTML()">Remove All (innerHTML = '')</button>
        <button onclick="resetMenu3()">Reset</button>
    </div>

    <!-- Demo 4: Reuse removed node -->
    <h3>4. Remove and Reuse a Node</h3>
    <div class="box">
        <ul id="source-list">
            <li id="promo">⭐ Featured Item</li>
            <li>Regular Item 1</li>
            <li>Regular Item 2</li>
        </ul>
        <button onclick="moveToTrash()">Remove Featured Item to Holding Area</button>
        <div id="trash">Holding area for removed nodes...</div>
    </div>

    <script>

        // --- Demo 1: Remove last item ---
        function removeLast() {
            const menu = document.getElementById('menu');
            if (menu.lastElementChild) {
                menu.removeChild(menu.lastElementChild);
            }
        }

        // --- Demo 2: Remove first item ---
        function removeFirst() {
            const menu2 = document.getElementById('menu2');
            if (menu2.firstElementChild) {
                menu2.removeChild(menu2.firstElementChild);
            }
        }

        // --- Demo 3: Remove all nodes ---
        function removeAllLoop() {
            const menu3 = document.getElementById('menu3');
            // Keep removing firstChild until none remain
            while (menu3.firstChild) {
                menu3.removeChild(menu3.firstChild);
            }
        }

        function removeAllInnerHTML() {
            // Simpler approach — clears all children at once
            document.getElementById('menu3').innerHTML = '';
        }

        const originalMenu3 = '<li>Alpha</li><li>Beta</li><li>Gamma</li><li>Delta</li>';
        function resetMenu3() {
            document.getElementById('menu3').innerHTML = originalMenu3;
        }

        // --- Demo 4: Remove and reuse ---
        function moveToTrash() {
            const sourceList = document.getElementById('source-list');
            const promo      = document.getElementById('promo');

            if (promo && sourceList.contains(promo)) {
                // Remove from source — returns the detached node
                const removed = sourceList.removeChild(promo);

                // Node is still in memory — reinsert in a different location
                const trash = document.getElementById('trash');
                trash.innerHTML = '';
                trash.appendChild(removed);
            }
        }

    </script>

</body>
</html>
```

---

## 15. insertBefore — Insert a Node Before Another

### What is it?

`parentNode.insertBefore()` inserts a new node **before** a specified existing child node, both as children of the same parent. This is the native DOM method for precise sibling insertion.

### How it works

1. You select the parent element
2. You create the new node
3. You select the reference node (the existing child you want to insert before)
4. You call `parentNode.insertBefore(newNode, referenceNode)`
5. The new node is placed as a sibling immediately before the reference node
6. If `referenceNode` is `null`, the node is inserted at the end (like `appendChild`)

### Full HTML Example

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>insertBefore() Demo</title>
    <style>
        body  { font-family: Arial, sans-serif; padding: 20px; }
        .box  { border: 1px solid #bdc3c7; padding: 15px; margin: 15px 0; border-radius: 6px; }
        ul    { background: #eaf4fb; padding: 15px 35px; }
        .new  { background: #d5f5e3; font-style: italic; }
        h3    { color: #2c3e50; margin-top: 25px; }
        button { padding: 8px 16px; margin: 4px; cursor: pointer; }
    </style>
</head>
<body>

    <h1>insertBefore() Demo</h1>

    <!-- Demo 1: Insert before first child -->
    <h3>1. Insert Before the First Child</h3>
    <div class="box">
        <ul id="menu1">
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
        <button onclick="insertBeforeFirst()">Insert "Services" Before "Home"</button>
    </div>

    <!-- Demo 2: Insert before a specific node -->
    <h3>2. Insert Before a Specific Node (middle)</h3>
    <div class="box">
        <ul id="menu2">
            <li>Apple</li>
            <li>Cherry</li>
            <li>Date</li>
        </ul>
        <button onclick="insertBeforeCherry()">Insert "Banana" Before "Cherry"</button>
    </div>

    <!-- Demo 3: Insert before null (acts like appendChild) -->
    <h3>3. insertBefore with null Reference (appends to end)</h3>
    <div class="box">
        <ul id="menu3">
            <li>One</li>
            <li>Two</li>
        </ul>
        <button onclick="insertAtEnd()">Insert "Three" at End (null reference)</button>
    </div>

    <script>

        // --- Demo 1: Insert before firstElementChild ---
        function insertBeforeFirst() {
            const menu1   = document.getElementById('menu1');
            const newItem = document.createElement('li');
            newItem.textContent = 'Services';
            newItem.className   = 'new';

            // Insert newItem before the current first element child
            menu1.insertBefore(newItem, menu1.firstElementChild);
        }

        // --- Demo 2: Insert before a specific node by reference ---
        function insertBeforeCherry() {
            const menu2   = document.getElementById('menu2');
            const cherry  = menu2.children[1]; // index 1 = Cherry

            const banana  = document.createElement('li');
            banana.textContent = 'Banana';
            banana.className   = 'new';

            // Inserts Banana immediately before Cherry
            menu2.insertBefore(banana, cherry);
        }

        // --- Demo 3: null reference acts like appendChild ---
        function insertAtEnd() {
            const menu3   = document.getElementById('menu3');
            const newItem = document.createElement('li');
            newItem.textContent = 'Three';
            newItem.className   = 'new';

            // Passing null as reference inserts at the end
            menu3.insertBefore(newItem, null);
        }

    </script>

</body>
</html>
```

---

## 16. insertAfter — Insert a Node After Another

### What is it?

JavaScript has no native `insertAfter()` method. However, you can implement it using `insertBefore()` combined with the `nextSibling` property. The modern alternative is to use the native `after()` method (covered in section 8).

### How it works

The logic uses the relationship between siblings:

- `existingNode.nextSibling` returns the node that comes directly after `existingNode` in the parent's child list
- Calling `parentNode.insertBefore(newNode, existingNode.nextSibling)` places `newNode` between `existingNode` and what was previously its next sibling

If `nextSibling` is `null` (meaning `existingNode` is the last child), then `insertBefore(newNode, null)` places it at the end — exactly what we want.

### Full HTML Example

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>insertAfter() Demo</title>
    <style>
        body  { font-family: Arial, sans-serif; padding: 20px; }
        .box  { border: 1px solid #bdc3c7; padding: 15px; margin: 15px 0; border-radius: 6px; }
        ul    { background: #fdf2f8; padding: 15px 35px; }
        .new  { background: #d5f5e3; font-style: italic; }
        h3    { color: #2c3e50; margin-top: 25px; }
        button { padding: 8px 16px; margin: 4px; cursor: pointer; }
        pre   { background: #2c3e50; color: #ecf0f1; padding: 15px; border-radius: 4px; font-size: 13px; }
    </style>
</head>
<body>

    <h1>insertAfter() Demo</h1>

    <!-- The reusable helper function -->
    <h3>The Custom insertAfter() Helper Function</h3>
    <pre>
function insertAfter(newNode, existingNode) {
    // existingNode.nextSibling is the node right after it
    // insertBefore places newNode before that sibling — effectively after existingNode
    existingNode.parentNode.insertBefore(newNode, existingNode.nextSibling);
}</pre>

    <!-- Demo 1: Insert after last item -->
    <h3>1. Insert After the Last List Item</h3>
    <div class="box">
        <ul id="menu1">
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
        <button onclick="insertAfterLast()">Insert "Services" After "Contact"</button>
    </div>

    <!-- Demo 2: Insert after a middle item -->
    <h3>2. Insert After a Middle Item</h3>
    <div class="box">
        <ul id="menu2">
            <li>Apple</li>
            <li id="banana-item">Banana</li>
            <li>Date</li>
        </ul>
        <button onclick="insertAfterBanana()">Insert "Cherry" After "Banana"</button>
    </div>

    <!-- Demo 3: Modern alternative using after() -->
    <h3>3. Modern Alternative — Using the Native after() Method</h3>
    <div class="box">
        <ul id="menu3">
            <li id="modern-first">Home</li>
            <li>Contact</li>
        </ul>
        <button onclick="modernInsertAfter()">Insert "About" After "Home" Using after()</button>
    </div>

    <script>

        // The reusable insertAfter helper
        function insertAfter(newNode, existingNode) {
            existingNode.parentNode.insertBefore(newNode, existingNode.nextSibling);
        }

        // --- Demo 1: Insert after last item ---
        function insertAfterLast() {
            const menu1   = document.getElementById('menu1');
            const newItem = document.createElement('li');
            newItem.textContent = 'Services';
            newItem.className   = 'new';

            // menu1.lastElementChild is "Contact"
            // nextSibling of "Contact" is null → inserts at end
            insertAfter(newItem, menu1.lastElementChild);
        }

        // --- Demo 2: Insert after a specific middle item ---
        function insertAfterBanana() {
            const banana  = document.getElementById('banana-item');
            const cherry  = document.createElement('li');
            cherry.textContent = 'Cherry';
            cherry.className   = 'new';

            // Places Cherry between Banana and Date
            insertAfter(cherry, banana);
        }

        // --- Demo 3: Modern native after() method ---
        function modernInsertAfter() {
            const firstItem = document.getElementById('modern-first');
            const about     = document.createElement('li');
            about.textContent = 'About (using after())';
            about.className   = 'new';

            // Native after() — inserts directly after firstItem
            firstItem.after(about);
        }

    </script>

</body>
</html>
```

---

## Quick Reference — All 16 Methods

| # | Method / Property | What it does | Returns |
|---|---|---|---|
| 1 | `document.createElement(tag)` | Creates a new element in memory | New `Element` node |
| 2 | `parentNode.appendChild(child)` | Appends child to end of parent | Appended child node |
| 3 | `node.textContent` | Gets/sets plain text of a node | String |
| 4 | `element.innerHTML` | Gets/sets HTML markup of element | HTML string |
| 5 | `createElement` vs `innerHTML` | Design decision — performance & security | — |
| 6 | `new DocumentFragment()` | Lightweight detached container for batch inserts | `DocumentFragment` |
| 7 | `element.before(...nodes)` | Inserts nodes as siblings before element | `undefined` |
| 8 | `element.after(...nodes)` | Inserts nodes as siblings after element | `undefined` |
| 9 | `parentNode.prepend(...nodes)` | Inserts before first child of parent | `undefined` |
| 10 | `parentNode.append(...nodes)` | Inserts after last child of parent | `undefined` |
| 11 | `element.insertAdjacentHTML(pos, html)` | Inserts HTML string at 1 of 4 precise positions | `undefined` |
| 12 | `parentNode.replaceChild(new, old)` | Replaces an existing child with a new node | Replaced old node |
| 13 | `node.cloneNode(deep)` | Clones a node deeply or shallowly | Cloned node |
| 14 | `parentNode.removeChild(child)` | Removes and returns a child node | Removed node |
| 15 | `parentNode.insertBefore(new, ref)` | Inserts new node before reference child | Inserted node |
| 16 | `insertAfter(new, existing)` | Custom helper using insertBefore + nextSibling | — |

---