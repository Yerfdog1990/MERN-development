# Node Instance Properties in JavaScript

## Introduction to Node Interface

The DOM `Node` interface is an abstract base class upon which many other DOM API objects are based, thus letting those object types be used similarly and often interchangeably. As an abstract class, there is no such thing as a plain `Node` object. All objects that implement `Node` functionality are based on one of its subclasses. Most notable are `Document`, `Element`, and `DocumentFragment`.

In addition, every kind of DOM node is represented by an interface based on `Node`. These include `Attr`, `CharacterData` (which `Text`, `Comment`, `CDATASection` and `ProcessingInstruction` are all based on), and `DocumentType`.

In some cases, a particular feature of the base `Node` interface may not apply to one of its child interfaces; in that case, the inheriting node may return `null` or throw an exception, depending on circumstances.

---

## Node: baseURI Property

The read-only `baseURI` property of the `Node` interface returns the absolute base URL of the document containing the node.

### How Base URL is Determined

The base URL is used to resolve relative URLs when the browser needs to obtain an absolute URL, for example when processing the HTML `<img>` element's `src` attribute or the `xlink:href` or `href` attributes in SVG.

The base URL is determined as follows:
- By default, the base URL is the location of the document (as determined by `window.location`)
- If it is an HTML Document and there is a `<base>` element in the document, the `href` value of the first `<base>` element with such an attribute is used instead

### Value

A string representing the base URL of the `Node`.

### Examples

**Without `<base>`:**

```html
<output>Not calculated</output>

<script>
const output = document.querySelector("output");
output.value = output.baseURI;
</script>
```

**With `<base>`:**

```html
<base href="https://developer.mozilla.org/modified_base_uri/" />
<output>Not calculated</output>

<script>
const output = document.querySelector("output");
output.value = output.baseURI;
</script>
```

---

## Node: childNodes Property

The read-only `childNodes` property of the `Node` interface returns a live `NodeList` of child nodes of the given element where the first child node is assigned index 0. Child nodes include elements, text and comments.

### Important Notes

- The `NodeList` being live means that its content is changed each time new children are added or removed
- Browsers insert text nodes into a document to represent whitespace in the source markup. Therefore a node obtained, for example, using `Node.childNodes[0]` may refer to a whitespace text node rather than the actual element the author intended to get
- The items in the collection of nodes are objects, not strings. To get data from node objects, use their properties
- The `document` object itself has two children: the Doctype declaration and the root element, typically referred to as `documentElement`
- `childNodes` includes all child nodes, including non-element nodes like text and comment. To get a collection containing only elements, use `Element.children` instead

### Value

A live `NodeList` containing the children of the node. Several calls to `childNodes` return the same `NodeList`.

### Examples

**Simple usage:**

```javascript
// Note that para is an object reference to a <p> element

// First check that the element has child nodes
if (para.hasChildNodes()) {
  let children = para.childNodes;

  for (const node of children) {
    // Do something with each child as children[i]
    // NOTE: List is live! Adding or removing children will change the list's `length` 
  }
}
```

**Remove all children from a node:**

```javascript
// This is one way to remove all children from a node
// box is an object reference to an element
while (box.firstChild) {
  // The list is LIVE so it will re-index each call
  box.removeChild(box.firstChild);
}
```

---

## Node: firstChild Property

The read-only `firstChild` property of the `Node` interface returns the node's first child in the tree, or `null` if the node has no children.

### Important Notes

- If the node is a `Document`, this property returns the first node in the list of its direct children
- This property returns any type of node that is the first child of this one. It may be a `Text` or a `Comment` node
- If you want to get the first `Element` that is a child of another element, consider using `Element.firstElementChild`

### Value

A `Node`, or `null` if there are none.

### Example

This example demonstrates the use of `firstChild` and how whitespace nodes might interfere with using this property.

**HTML with whitespace:**

```html
<p id="para-01">
  <span>First span</span>
</p>
```

```javascript
const p01 = document.getElementById("para-01");
console.log(p01.firstChild.nodeName);
```

The console will show `#text` because a text node is inserted to maintain the whitespace between the end of the opening `<p>` and `<span>` tags. Any whitespace will create a `#text` node, from a single space to multiple spaces, returns, tabs, and so on.

**HTML without whitespace:**

```html
<p id="para-01"><span>First span</span></p>
```

```javascript
const p01 = document.getElementById("para-01");
console.log(p01.firstChild.nodeName);
```

Now the console will show `SPAN`.

To avoid the issue with `node.firstChild` returning `#text` or `#comment` nodes, `Element.firstElementChild` can be used to return only the first element node.

---

## Node: isConnected Property

The read-only `isConnected` property of the `Node` interface returns a boolean indicating whether the node is connected (directly or indirectly) to a `Document` object.

### Value

A boolean value that is `true` if the node is connected to its relevant context object, and `false` if not.

### Examples

**Standard DOM:**

```javascript
let test = document.createElement("p");
console.log(test.isConnected); // Returns false
document.body.appendChild(test);
console.log(test.isConnected); // Returns true
```

**Shadow DOM:**

```javascript
// Create a shadow root
const shadow = this.attachShadow({ mode: "open" });

// Create some CSS to apply to the shadow DOM
const style = document.createElement("style");
console.log(style.isConnected); // returns false

style.textContent = `
.wrapper {
  position: relative;
}
`;

// Attach the created style element to the shadow DOM
shadow.appendChild(style);
console.log(style.isConnected); // Returns true
```

---

## Node: lastChild Property

The read-only `lastChild` property of the `Node` interface returns the last child of the node, or `null` if there are no child nodes.

### Important Notes

- This property returns any type of node that is the last child of this one. It may be a `Text` or a `Comment` node
- If you want to get the last `Element` that is a child of another element, consider using `Element.lastElementChild`

### Value

A `Node` that is the last child of the node, or `null` if there are no child nodes.

### Example

```javascript
const tr = document.getElementById("row1");
const cornerTd = tr.lastChild;
```

---

## Node: nextSibling Property

The read-only `nextSibling` property of the `Node` interface returns the node immediately following the specified one in their parent's `childNodes`, or returns `null` if the specified node is the last child in the parent element.

### Important Notes

- Browsers insert `Text` nodes into a document to represent whitespace in the source markup. Therefore a node obtained, for example, using `Node.firstChild` or `Node.previousSibling` may refer to a whitespace text node rather than the actual element the author intended to get
- You can use `Element.nextElementSibling` to obtain the next element skipping any whitespace nodes, other between-element text, or comments
- To navigate the opposite way through the child nodes list use `Node.previousSibling`

### Value

A `Node` representing the next sibling of the current node, or `null` if there are none.

### Example

```html
<div id="div-1">Here is div-1</div>
<div id="div-2">Here is div-2</div>
<br />
<output><em>Not calculated.</em></output>
```

```javascript
let el = document.getElementById("div-1").nextSibling;
let i = 1;

let result = "Siblings of div-1:\n";

while (el) {
  result += `${i}. ${el.nodeName}\n`;
  el = el.nextSibling;
  i++;
}

const output = document.querySelector("output");
output.innerText = result;
```

---

## Node: nodeName Property

The read-only `nodeName` property of `Node` returns the name of the current node as a string.

### Value

A string. Values for the different types of nodes are:

| Node Type | Value |
|-----------|-------|
| `Attr` | The value of `Attr.name`, that is the qualified name of the attribute |
| `CDATASection` | The string `"#cdata-section"` |
| `Comment` | The string `"#comment"` |
| `Document` | The string `"#document"` |
| `DocumentFragment` | The string `"#document-fragment"` |
| `DocumentType` | The value of `DocumentType.name` |
| `Element` | The value of `Element.tagName`, that is the uppercase name of the element tag if an HTML element, or the lowercase element tag if an XML element (like a SVG or MathML element) |
| `ProcessingInstruction` | The value of `ProcessingInstruction.target` |
| `Text` | The string `"#text"` |

### Example

This example displays the node names of several nodes:

```html
<div id="d1">Hello world</div>
<!-- Example of comment -->
Text <span>Text</span> Text<br />
<svg height="20" width="20">
  <circle cx="10" cy="10" r="5" stroke="black" stroke-width="1" fill="red" />
</svg>
<hr />
<output id="result">Not calculated yet.</output>
```

```javascript
let node = document.querySelector("body").firstChild;
let result = "Node names are:\n";
while (node) {
  result += `${node.nodeName}\n`;
  node = node.nextSibling;
}

const output = document.getElementById("result");
output.innerText = result;
```

---

## Node: nodeType Property

The read-only `nodeType` property of a `Node` interface is an integer that identifies what the node is. It distinguishes different kinds of nodes from each other, such as elements, text, and comments.

### Value

An integer which specifies the type of the node. Possible values are:

| Constant | Value | Description |
|----------|-------|-------------|
| `Node.ELEMENT_NODE` | 1 | An `Element` node like `<p>` or `<div>` |
| `Node.ATTRIBUTE_NODE` | 2 | An `Attribute` of an `Element` |
| `Node.TEXT_NODE` | 3 | The actual `Text` inside an `Element` or `Attr` |
| `Node.CDATA_SECTION_NODE` | 4 | A `CDATASection`, such as `<!CDATA[[ … ]]>` |
| `Node.PROCESSING_INSTRUCTION_NODE` | 7 | A `ProcessingInstruction` of an XML document, such as `<?xml-stylesheet … ?>` |
| `Node.COMMENT_NODE` | 8 | A `Comment` node, such as `<!-- … -->` |
| `Node.DOCUMENT_NODE` | 9 | A `Document` node |
| `Node.DOCUMENT_TYPE_NODE` | 10 | A `DocumentType` node, such as `<!doctype html>` |
| `Node.DOCUMENT_FRAGMENT_NODE` | 11 | A `DocumentFragment` node |

The following constants have been deprecated and are not in use anymore: `Node.ENTITY_REFERENCE_NODE` (5), `Node.ENTITY_NODE` (6), and `Node.NOTATION_NODE` (12).

### Examples

**Different types of nodes:**

```javascript
document.nodeType === Node.DOCUMENT_NODE; // true
document.doctype.nodeType === Node.DOCUMENT_TYPE_NODE; // true

document.createDocumentFragment().nodeType === Node.DOCUMENT_FRAGMENT_NODE; // true

const p = document.createElement("p");
p.textContent = "Once upon a time…";

p.nodeType === Node.ELEMENT_NODE; // true
p.firstChild.nodeType === Node.TEXT_NODE; // true
```

**Comments:**

This example checks if the first node inside the document element is a comment, and displays a message if not.

```javascript
const node = document.documentElement.firstChild;
if (node.nodeType !== Node.COMMENT_NODE) {
  console.warn("You should comment your code!");
}
```

---

## Node: nodeValue Property

The `nodeValue` property of the `Node` interface returns or sets the value of the current node.

### Value

A string containing the value of the current node, if any. For the document itself, `nodeValue` returns `null`. For text, comment, and CDATA nodes, `nodeValue` returns the content of the node. For attribute nodes, the value of the attribute is returned.

The following table shows the return values for different types of nodes:

| Node | Value of nodeValue |
|------|-------------------|
| `CDATASection` | Content of the CDATA section |
| `Comment` | Content of the comment |
| `Document` | `null` |
| `DocumentFragment` | `null` |
| `DocumentType` | `null` |
| `Element` | `null` |
| `NamedNodeMap` | `null` |
| `ProcessingInstruction` | Entire content excluding the target |
| `Text` | Content of the text node |

**Note:** When `nodeValue` is defined to be `null`, setting it has no effect.

### Example

```html
<div id="d1">Hello world</div>
<!-- Example of comment -->
<output id="result">Not calculated yet.</output>
```

```javascript
let node = document.querySelector("body").firstChild;
let result = "Node names are:\n";
while (node) {
  result += `Value of ${node.nodeName}: ${node.nodeValue}\n`;
  node = node.nextSibling;
}

const output = document.getElementById("result");
output.innerText = result;
```

---

## Node: ownerDocument Property

The read-only `ownerDocument` property of the `Node` interface returns the top-level document object of the node.

### Value

A `Document` that is the top-level object in which all the child nodes are created.

If this property is used on a node that is itself a document, the value is `null`.

### Example

```javascript
// Given a node "p", js the top-level HTML
// child of the document object

const d = p.ownerDocument;
const html = d.documentElement;
```

---

## Node: parentElement Property

The read-only `parentElement` property of `Node` interface returns the DOM node's parent `Element`, or `null` if the node either has no parent, or its parent isn't a DOM `Element`. `Node.parentNode` on the other hand returns any kind of parent, regardless of its type.

### Value

An `Element` that is the parent element of the current node, or `null` if there isn't one.

### Examples

**Using parentElement:**

This example sets the parent of node to have a red text color.

```javascript
if (node.parentElement) {
  node.parentElement.style.color = "red";
}
```

**parentElement being null:**

`parentElement` can be `null` if the node has no parent (for example, because it isn't attached to a tree) or its parent is not an `Element`. On the other hand, `Node.parentNode` always returns the parent node, which may be a `Document` or other node types.

```html
<!doctype html>
<html lang="en-US">
  <body>
    <script>
      const html = document.querySelector("html");
      console.log(html.parentElement); // null
      console.log(html.parentNode); // document
    </script>
  </body>
</html>
```

---

## Node: parentNode Property

The read-only `parentNode` property of the `Node` interface returns the parent of the specified node in the DOM tree.

### Important Notes

- `Document` and `DocumentFragment` nodes can never have a parent, so `parentNode` will always return `null`
- It also returns `null` if the node has just been created and is not yet attached to the tree
- `Node.parentElement` on the other hand only returns `Element` nodes

### Value

A `Node` that is the parent of the current node. The parent of an element is an `Element` node, a `Document` node, or a `DocumentFragment` node.

### Example

**Using parentNode:**

This example removes a node from the tree, unless it's not in the tree already.

```javascript
if (node.parentNode) {
  node.parentNode.removeChild(node);
}
```

---

## Node: previousSibling Property

The read-only `previousSibling` property of the `Node` interface returns the node immediately preceding the specified one in its parent's `childNodes` list, or `null` if the specified node is the first in that list.

### Important Notes

- Browsers insert text nodes into a document to represent whitespace in the source markup. Therefore a node obtained, for example, using `Node.firstChild` or `Node.previousSibling` may refer to a whitespace text node rather than the actual element the author intended to get
- You can use `previousElementSibling` to get the previous element node (skipping text nodes and any other non-element nodes)
- To navigate the opposite way through the child nodes list use `Node.nextSibling`

### Value

A `Node` representing the previous sibling of the current node, or `null` if there are none.

### Examples

**First example (no whitespace):**

In this example, we have a series of `<span>` elements directly adjacent to each other, with no whitespace between them.

```html
<span id="b0"></span><span id="b1"></span><span id="b2"></span>
```

```javascript
document.getElementById("b1").previousSibling; // <span id="b0">
document.getElementById("b2").previousSibling.id; // "b1"
```

**Second example (with whitespace):**

In this example, there are whitespace text nodes (line breaks) between the `<span>` elements.

```html
<span id="b0"></span>
<span id="b1"></span>
<span id="b2"></span>
```

```javascript
document.getElementById("b1").previousSibling; // #text
document.getElementById("b1").previousSibling.previousSibling; // <span id="b0">
document.getElementById("b2").previousSibling.previousSibling; // <span id="b1">
document.getElementById("b2").previousSibling; // #text
document.getElementById("b2").previousSibling.id; // undefined
```

---

## Node: textContent Property

The `textContent` property of the `Node` interface represents the text content of the node and its descendants.

### Value

A string, or `null`. Its value depends on the situation:

- If the node is a document or a doctype, `textContent` returns `null`
  - **Note:** To get all of the text and CDATA data for the whole document, use `document.documentElement.textContent`
- If the node is a CDATA section, a comment, a processing instruction, or a text node, `textContent` returns, or sets, the text inside the node, i.e., the `Node.nodeValue`
- For other node types, `textContent` returns the concatenation of the `textContent` of every child node, excluding comments and processing instructions. (This is an empty string if the node has no children)

**Warning:** Setting `textContent` on a node removes all of the node's children and replaces them with a single text node with the given string value.

### Differences from innerText

Don't get confused by the differences between `Node.textContent` and `HTMLElement.innerText`. Although the names seem similar, there are important differences:

- `textContent` gets the content of all elements, including `<script>` and `<style>` elements. In contrast, `innerText` only shows "human-readable" elements
- `textContent` returns every element in the node. In contrast, `innerText` is aware of styling and won't return the text of "hidden" elements
- Moreover, since `innerText` takes CSS styles into account, reading the value of `innerText` triggers a reflow to ensure up-to-date computed styles. (Reflows can be computationally expensive, and thus should be avoided when possible)

### Differences from innerHTML

`Element.innerHTML` gets or sets HTML, as its name indicates. We advise against using `innerHTML` to get or set text inside an element because it deals with raw HTML rather than plain text and can be susceptible to XSS attacks. Even if you are sure that the text never contains HTML syntax, it is still less semantic and slower because it needs to invoke the HTML parser.

### Examples

**Getting text content:**

```html
<div id="divA">This is <span>some</span> text!</div>
```

```javascript
let text = document.getElementById("divA").textContent;
// The text variable is now: 'This is some text!'
```

**Setting text content:**

```javascript
document.getElementById("divA").textContent = "This text is different!";
// The HTML for divA is now:
// <div id="divA">This text is different!</div>
```
