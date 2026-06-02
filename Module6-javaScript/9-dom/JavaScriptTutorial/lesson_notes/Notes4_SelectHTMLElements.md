# Selecting HTML Elements in JavaScript

## JavaScript getElementById() Method

### Introduction

The `getElementById()` method of the `document` object returns an HTML element with the specified id.

**Syntax:**
```javascript
const element = document.getElementById(id);
```

**Parameters:**
- `id` is a string that represents the id of the element to select

**Important Notes:**
- The method matches ID case-sensitively. For example, `'root'` and `'Root'` are different
- If the document has no element with the specified id, the method returns `null`
- Unlike the `querySelector()` method, `getElementById()` is only available on the `document` object, not on other DOM elements
- Typically, the `id` is unique within an HTML document. However, if multiple elements have the same id (invalid HTML), the method returns the first element it encounters

### Example

Suppose you have a document with two `p` elements:

```html
<p id="first">Hi, There!</p>
<p>JavaScript is fun.</p>
```

The following code shows how to get the element with the id `first`:

```javascript
const elem = document.getElementById("first");
```

After selecting the element, you can apply styles, manipulate its attributes, and traverse to parent and child elements.

### Summary

- `document.getElementById()` returns a DOM element specified by an `id` or `null` if no matching element is found
- If multiple elements have the same `id` (invalid), it returns the first element it encounters

---

## JavaScript getElementsByName() Method

### Introduction

Every element on an HTML document may have a `name` attribute:

```html
<input type="radio" name="language" value="JavaScript">
```

Unlike the `id` attribute, multiple HTML elements can share the same value of the `name` attribute:

```html
<input type="radio" name="language" value="JavaScript">
<input type="radio" name="language" value="TypeScript">
```

To get all elements with a specified name, you use the `getElementsByName()` method of the `document` object:

```javascript
let elements = document.getElementsByName(name);
```

**Parameters:**
- `name` is the value of the `name` attribute of elements

**Returns:**
- A live `NodeList` of elements

**Important Note:**
The return collection of elements is live, meaning the return elements are automatically updated when elements with the same name are inserted and/or removed from the document.

### Example

The following example shows a radio group with radio buttons that have the same name (`rate`):

```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>JavaScript getElementsByName Demo</title>
</head>
<body>
    <p>Please rate the service:</p>
    <p>
        <label for="very-poor">
            <input type="radio" name="rate" value="Very poor" id="very-poor"> Very poor
        </label>
        <label for="poor">
            <input type="radio" name="rate" value="Poor" id="poor"> Poor
        </label>
        <label for="ok">
            <input type="radio" name="rate" value="OK" id="ok"> OK
        </label>
        <label for="good">
            <input type="radio" name="rate" value="Good"> Good
        </label>
        <label for="very-good">
            <input type="radio" name="rate" value="Very Good" id="very-good"> Very Good
        </label>
    </p>
    <p>
        <button id="btnRate">Submit</button>
    </p>
    <p id="output"></p>
    <script>
        let btn = document.getElementById('btnRate');
        let output = document.getElementById('output');

        btn.addEventListener('click', () => {
            let rates = document.getElementsByName('rate');
            rates.forEach((rate) => {
                if (rate.checked) {
                    output.innerText = `You selected: ${rate.value}`;
                }
            });
        });
    </script>
</body>
</html>
```

**How it works:**
1. Select the submit button by its id `btnRate` using the `getElementById()` method
2. Listen to the `click` event of the submit button
3. Get all the radio buttons using the `getElementsByName()` and show the selected value in the output element

### Summary

- `getElementsByName()` returns a live `NodeList` of elements with a specified name
- The `NodeList` is an array-like object, not an array object

---

## JavaScript getElementsByTagName() Method

### Introduction

The `getElementsByTagName()` is a method of the `document` object or a specific DOM element.

**Syntax:**
```javascript
let elements = document.getElementsByTagName(tagName);
```

**Parameters:**
- `tagName` is a tag name such as `h1`, `a`, and `img`

**Returns:**
- A live `HTMLCollection` of elements with the matching tag name

**Important Notes:**
- The `HTMLCollection` is live, meaning it is automatically updated when the DOM tree in the document changes
- The `HTMLCollection` is an array-like object
- To create an array of elements from an `HTMLCollection`, use the `Array.of()` method:

```javascript
const items = Array.of(...htmlCollection);
```

### Example

The following example shows how to use the `getElementsByTagName()` method to get the number of `h2` tags in the document:

```html
<!DOCTYPE html>
<html>
<head>
    <title>JavaScript getElementsByTagName() Demo</title>
</head>
<body>
    <h1>JavaScript getElementsByTagName() Demo</h1>
    <h2>First heading</h2>
    <p>This is the first paragraph.</p>
    <h2>Second heading</h2>
    <p>This is the second paragraph.</p>
    <h2>Third heading</h2>
    <p>This is the third paragraph.</p>

    <button id="btnCount">Count h2</button>

    <script>
        let btn = document.getElementById('btnCount');
        btn.addEventListener('click', () => {
            let headings = document.getElementsByTagName('h2');
            alert(`The number of H2 tags: ${headings.length}`);
        });
    </script>
</body>
</html>
```

**How it works:**
1. Select the button `Count H2` using the `getElementById()` method
2. Register a click event handler
3. Select a list of h2 tags using `document.getElementsByTagName()` inside the event handler
4. Display the number of `H2` tags using the `alert()` function

### Summary

- `getElementsByTagName()` is a method of the document or element object
- It accepts a tag name and returns a live `HTMLCollection` of elements with the matching tag name

---

## JavaScript getElementsByClassName() Method

### Introduction

The `getElementsByClassName()` method returns an `HTMLCollection` of elements whose class names match one or more specified class names.

**Syntax:**
```javascript
getElementsByClassName(names)
```

**Parameters:**
- `names` represents one or more class names to match. If you use multiple class names, separate them by a space

**Returns:**
- A live `HTMLCollection` of the matched elements

**Important Notes:**
- The method returns a live `HTMLCollection`, meaning it will automatically update when the document changes
- If no element matches the class names, it returns an empty `HTMLCollection` `[]`
- The method is available on both the `document` element and any other DOM elements

**Calling on document:**
```javascript
let elements = document.getElementsByClassName(names);
```

**Calling on a specific element:**
```javascript
let elements = element.getElementsByClassName(names);
```

### Examples

#### Example HTML Document

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>JavaScript getElementsByClassName</title>
</head>
<body>
    <header>
        <nav>
            <ul id="menu">
                <li class="item">HTML</li>
                <li class="item">CSS</li>
                <li class="item highlight">JavaScript</li>
                <li class="item">TypeScript</li>
            </ul>
        </nav>
        <h1>getElementsByClassName Demo</h1>
    </header>
    <section>
        <article>
            <h2 class="secondary">Example 1</h2>
        </article>
        <article>
            <h2 class="secondary">Example 2</h2>
        </article>
    </section>
</body>
</html>
```

#### 1) Calling on an Element

The following example illustrates how to use the `getElementsByClassName()` method to select the `<li>` items which are the descendants of the `<ul>` element:

```javascript
let menu = document.getElementById('menu');
let items = menu.getElementsByClassName('item');
console.log(items);

let data = [].map.call(items, (item) => item.textContent);
console.log(data);
```

**Output:**
```
HTMLCollection(4) [li.item, li.item, li.item.highlight, li.item]
['HTML', 'CSS', 'JavaScript', 'TypeScript']
```

**How it works:**
1. Select the `<ul>` element with the class name `menu` using the `getElementById()` method
2. Select descendant elements of the ul element with the class name `item` using the `getElementsByClassName()` method
3. Display the items in the console (an HTMLCollection with four items)
4. Create an array of items from the `HTMLCollection` using `Array.of()` method and return an array of `textContent` of the items using the `map()` method

#### 2) Calling on the Document

To select elements with the class `secondary`, you use the following code:

```javascript
const items = document.getElementsByClassName('secondary');
const data = Array.of(...items).map((item) => item.textContent);

console.log(data);
```

**Output:**
```
['Example 1', 'Example 2']
```

**How it works:**
1. Select elements with the class `secondary` in the entire document
2. Create an array of `textContent` from the items in the `HTMLCollection`
3. Display the `data` to the console

### Summary

- Use the JavaScript `getElementsByClassName()` method to select elements with one or more class names

---

## JavaScript querySelector() and querySelectorAll() Methods

### Introduction

The `querySelector()` is a method of the `Element` interface. The `querySelector()` method allows you to select the first element that matches one or more CSS selectors.

**Syntax for querySelector():**
```javascript
let element = parentNode.querySelector(selector);
```

**Syntax for querySelectorAll():**
```javascript
let elementList = parentNode.querySelectorAll(selector);
```

**Parameters:**
- `selector` is a CSS selector or a group of CSS selectors to match the descendant elements of the `parentNode`

**Important Notes:**
- If the `selector` is not valid CSS syntax, the method will raise a `SyntaxError` exception
- If no element matches the CSS selectors, `querySelector()` returns `null`
- `querySelectorAll()` returns a static `NodeList` of elements. If no element matches, it returns an empty `NodeList`
- Both methods are available on the `document` object or any `Element` object
- The `NodeList` is an array-like object, not an array object. However, in modern web browsers, you can use the `forEach()` method or the `for...of` loop
- To convert the `NodeList` to an array, use the `Array.from()` method:

```javascript
let nodeList = document.querySelectorAll(selector);
let elements = Array.from(nodeList);
```

### Basic Selectors

Suppose you have the following HTML document:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <title>querySelector() Demo</title>
</head>
<body>
    <header>
        <div id="logo">
            <img src="img/logo.jpg" alt="Logo" id="logo">
        </div>
        <nav class="primary-nav">
            <ul>
                <li class="menu-item current"><a href="#home">Home</a></li>
                <li class="menu-item"><a href="#services">Services</a></li>
                <li class="menu-item"><a href="#about">About</a></li>
                <li class="menu-item"><a href="#contact">Contact</a></li>
            </ul>
        </nav>
    </header>
    <main>
        <h1>Welcome to the JS Dev Agency</h1>

        <div class="container">
            <section class="section-a">
                <h2>UI/UX</h2>
                <p>Lorem ipsum dolor sit amet.</p>
                <button>Read More</button>
            </section>
            <section class="section-b">
                <h2>PWA Development</h2>
                <p>Lorem ipsum dolor sit.</p>
                <button>Read More</button>
            </section>
            <section class="section-c">
                <h2>Mobile App Dev</h2>
                <p>Lorem ipsum dolor sit.</p>
                <button>Read More</button>
            </section>
        </div>
    </main>
</body>
</html>
```

#### 1) Universal Selector

The universal selector is denoted by `*` that matches all elements of any type:

```css
*
```

**Select first element:**
```javascript
let element = document.querySelector('*');
```

**Select all elements:**
```javascript
let elements = document.querySelectorAll('*');
```

#### 2) Type Selector

To select elements by node name, use the type selector (e.g., `a` selects all `<a>` elements):

```css
elementName
```

**Find first h1 element:**
```javascript
let firstHeading = document.querySelector('h1');
```

**Find all h2 elements:**
```javascript
let heading2 = document.querySelectorAll('h2');
```

#### 3) Class Selector

To find the element with a given CSS class, use the class selector syntax:

```css
.className
```

**Find first element with menu-item class:**
```javascript
let note = document.querySelector('.menu-item');
```

**Find all elements with menu-item class:**
```javascript
let notes = document.querySelectorAll('.menu-item');
```

#### 4) ID Selector

To select an element based on the value of its id, use the id selector syntax:

```css
#id
```

**Find first element with id #logo:**
```javascript
let logo = document.querySelector('#logo');
```

Since the `id` should be unique in the document, `querySelectorAll()` is not relevant for IDs.

#### 5) Attribute Selector

To select all elements that have a given attribute, use one of the following attribute selector syntaxes:

```css
[attribute]
[attribute=value]
[attribute~=value]
[attribute|=value]
[attribute^=value]
[attribute$=value]
[attribute*=value]
```

**Find first element with [autoplay] attribute:**
```javascript
let autoplay = document.querySelector('[autoplay]');
```

**Find all elements with [autoplay] attribute:**
```javascript
let autoplays = document.querySelectorAll('[autoplay]');
```

### Grouping Selectors

To group multiple selectors, use the following syntax:

```css
selector, selector, ...
```

The selector list will match any element with one of the selectors in the group.

**Find all div and p elements:**
```javascript
let elements = document.querySelectorAll('div, p');
```

### Combinators

#### 1) Descendant Combinator

To find descendants of a node, use the space (` `) descendant combinator syntax:

```css
selector selector
```

For example, `p a` will match all `<a>` elements inside the `p` element:

```javascript
let links = document.querySelector('p a');
```

#### 2) Child Combinator

The `>` child combinator finds all elements that are direct children of the first element:

```css
selector > selector
```

**Find all li elements directly inside a ul element:**
```javascript
let listItems = document.querySelectorAll('ul > li');
```

**Find all li elements directly inside a ul element with class nav:**
```javascript
let listItems = document.querySelectorAll('ul.nav > li');
```

#### 3) General Sibling Combinator

The `~` combinator selects siblings that share the same parent:

```css
selector ~ selector
```

For example, `p ~ a` will match all `<a>` elements that follow the `p` element, immediately or not:

```javascript
let links = document.querySelectorAll('p ~ a');
```

#### 4) Adjacent Sibling Combinator

The `+` adjacent sibling combinator selects adjacent siblings:

```css
selector + selector
```

For example, `h1 + a` matches all elements that directly follow an `h1`:

```javascript
let links = document.querySelectorAll('h1 + a');
```

**Select the first a that directly follows an h1:**
```javascript
let links = document.querySelector('h1 + a');
```

### Pseudo-classes

The `:` pseudo matches elements based on their states:

```css
element:state
```

For example, `li:nth-child(2)` selects the second `<li>` element in a list:

```javascript
let listItem = document.querySelectorAll('li:nth-child(2)');
```

### Pseudo-elements

The `::` represents entities that are not included in the document therefore the `querySelector()` method cannot select pseudo-elements.

### Summary

- `querySelector()` finds the first element that matches a CSS selector or a group of CSS selectors
- `querySelectorAll()` finds all elements that match a CSS selector or a group of CSS selectors
- A CSS selector defines elements to which a CSS rule applies
