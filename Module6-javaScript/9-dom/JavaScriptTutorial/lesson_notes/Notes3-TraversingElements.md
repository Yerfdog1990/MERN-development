# Traversing HTML Elements in JavaScript

## JavaScript Get the Parent Element (parentNode)

### Introduction to parentNode Attribute

To get the parent node of a specified node in the DOM tree, you use the `parentNode` property:

```javascript
let parent = node.parentNode;
```

**Important Notes:**
- The `parentNode` is read-only
- The `Document` and `DocumentFragment` nodes do not have a parent. Therefore, the `parentNode` will always be `null`
- If you create a new node but haven't attached it to the DOM tree, the `parentNode` of that node will also be `null`

### Example

See the following HTML document:

```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>JavaScript parentNode</title>
</head>
<body>
    <div id="main">
        <p class="note">This is a note!</p>
    </div>

    <script>
        let note = document.querySelector('.note');
        console.log(note.parentNode);
    </script>
</body>
</html>
```

**How it works:**
1. Select the element with the `.note` class using the `querySelector()` method
2. Find the parent node of the element

### Summary

- `node.parentNode` returns the read-only parent node of a specified node or `null` if it does not exist
- The `document` and `DocumentFragment` do not have a parent node

---

## JavaScript Siblings

### Introduction

Let's say you have the following list of items:

```html
<ul id="menu">
    <li>Home</li>
    <li>Products</li>
    <li class="current">Customer Support</li>
    <li>Careers</li>
    <li>Investors</li>
    <li>News</li>
    <li>About Us</li>
</ul>
```

### Get Next Siblings

To get the next sibling of an element, you use the `nextElementSibling` attribute:

```javascript
let nextSibling = currentNode.nextElementSibling;
```

The `nextElementSibling` returns `null` if the specified element is the last one in the list.

**Example:**

```javascript
let current = document.querySelector('.current');
let nextSibling = current.nextElementSibling;

console.log(nextSibling);
```

**Output:**
```html
<li>Careers</li>
```

**How it works:**
1. Select the list item whose class is `current` using the `querySelector()`
2. Get the next sibling of that list item using the `nextElementSibling` property

**Get All Next Siblings:**

To get all the next siblings of an element, you can use the following code:

```javascript
let current = document.querySelector('.current');
let nextSibling = current.nextElementSibling;

while(nextSibling) {
    console.log(nextSibling);
    nextSibling = nextSibling.nextElementSibling;
}
```

### Get Previous Siblings

To get the previous siblings of an element, you use the `previousElementSibling` attribute:

```javascript
let current = document.querySelector('.current');
let prevSibling = currentNode.previousElementSibling;
```

The `previousElementSibling` property returns `null` if the current element is the first one in the list.

**Example:**

```javascript
let current = document.querySelector('.current');
let prevSiblings = current.previousElementSibling;

console.log(prevSiblings);
```

**Get All Previous Siblings:**

```javascript
let current = document.querySelector('.current');
let prevSibling = current.previousElementSibling;
while(prevSibling) {
    console.log(prevSibling);
    prevSibling = current.previousElementSibling;
}
```

### Get All Siblings of an Element

To get all siblings of an element, use the following logic:

1. Select the element's parent whose siblings you want to find
2. Select the first child element of that parent element
3. Add the first element to an array of siblings
4. Select the next sibling of the first element
5. Repeat the 3rd and 4th steps until no siblings are left. In case the sibling is the original element, skip the 3rd step

**Helper Function:**

```javascript
let getSiblings = function (e) {
    // for collecting siblings
    let siblings = []; 
    // if no parent, return no sibling
    if(!e.parentNode) {
        return siblings;
    }
    // first child of the parent node
    let sibling  = e.parentNode.firstChild;
    
    // collecting siblings
    while (sibling) {
        if (sibling.nodeType === 1 && sibling !== e) {
            siblings.push(sibling);
        }
        sibling = sibling.nextSibling;
    }
    return siblings;
};
```

**Complete Example:**

```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>JavaScript Siblings</title>
</head>
<body>
    <ul id="menu">
        <li>Home</li>
        <li>Products</li>
        <li class="current">Customer Support</li>
        <li>Careers</li>
        <li>Investors</li>
        <li>News</li>
        <li>About Us</li>
    </ul>
    
    <script>
        let getSiblings = function (e) {
            // for collecting siblings
            let siblings = []; 
            // if no parent, return no sibling
            if(!e.parentNode) {
                return siblings;
            }
            // first child of the parent node
            let sibling  = e.parentNode.firstChild;
            // collecting siblings
            while (sibling) {
                if (sibling.nodeType === 1 && sibling !== e) {
                    siblings.push(sibling);
                }
                sibling = sibling.nextSibling;
            }
            return siblings;
        };

        let siblings = getSiblings(document.querySelector('.current'));
        let siblingText = siblings.map(e => e.innerHTML);
        console.log(siblingText);
    </script>
</body>
</html>
```

**Output:**
```json
["Home", "Products", "Careers", "Investors", "News", "About Us"]
```

### Summary

- `nextElementSibling` returns the next sibling of an element or `null` if the element is the last one in the list
- `previousElementSibling` returns the previous sibling of an element or `null` if the element is the first one in the list
- To get all siblings of an element, you can use a helper function that utilizes the `nextElementSibling` property

---

## Getting Child Elements of a Node in JavaScript

### Introduction

Suppose that you have the following HTML fragment:

```html
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>JS Get Child Elements</title>
</head>
<body>
  <ul id="menu">
    <li class="first">Home</li>
    <li>Products</li>
    <li class="current">Customer Support</li>
    <li>Careers</li>
    <li>Investors</li>
    <li>News</li>
    <li class="last">About Us</li>
  </ul>
</body>
</html>
```

### Get the First Child Element

To get the first child element of a specified element, you use the `firstChild` property of the element:

```javascript
let firstChild = parentElement.firstChild;
```

If the `parentElement` does not have any child element, the `firstChild` returns `null`.

The `firstChild` property returns a child node which can be any node type such as an element node, a text node, or a comment node.

**Example:**

```javascript
let content = document.getElementById('menu');
let firstChild = content.firstChild.nodeName;
console.log(firstChild);
```

**Output:**
```css
#text
```

The Console window shows `#text` because a text node is inserted to maintain the whitespace between the opening `<ul>` and `<li>` tags. This whitespace creates a `#text` node.

**Important Note:**
Any whitespace such as a single space, multiple spaces, returns, and tabs will create a `#text` node. To remove the `#text` node, you can remove the whitespaces as follows:

```html
<article id="content"><h2>Heading</h2><p>First paragraph</p></article>
```

Or to get the first child with the Element node only, you can use the `firstElementChild` property:

```javascript
let firstElementChild = parentElement.firstElementChild;
```

**Example:**

```javascript
let content = document.getElementById('menu');
console.log(content.firstElementChild);
```

**Output:**
```html
<li class="first">Home</li>
```

**How it works:**
1. Select the `#menu` element using the `getElementById()` method
2. Get the first child element using the `firstElementChild` property

### Get the Last Child Element

To get the last child element of a node, you use the `lastChild` property:

```javascript
let lastChild = parentElement.lastChild;
```

In case the `parentElement` does not have any child element, the `lastChild` returns `null`.

The `lastChild` property returns the last element node, text node, or comment node. If you want to select only the last child element with the element node type, you use the `lastElementChild` property:

```javascript
let lastChild = parentElement.lastElementChild;
```

**Example:**

```javascript
let menu = document.getElementById('menu');
console.log(menu.lastElementChild);
```

**Output:**
```html
<li class="last">About Us</li>
```

### Get All Child Elements

To get a live `NodeList` of child elements of a specified element, you use the `childNodes` property:

```javascript
let children = parentElement.childNodes;
```

The `childNodes` property returns all child elements with any node type. To get the child element with only the element node type, you use the `children` property:

```javascript
let children = parentElement.children;
```

**Example:**

```javascript
let menu = document.getElementById('menu');
let children = menu.children;
console.log(children);
```

### Summary

- `firstChild` and `lastChild` return the first and last child of a node, which can be any node type including text node, comment node, and element node
- `firstElementChild` and `lastElementChild` return the first and last child Element node
- `childNodes` returns a live `NodeList` of all child nodes of any node type of a specified node
- `children` returns all child `Element` nodes of a specified node
