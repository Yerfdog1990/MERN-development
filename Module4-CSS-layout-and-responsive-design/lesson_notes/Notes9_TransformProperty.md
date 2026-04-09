
---

# 🎨 CSS Transform Property 

## 🔹 Overview

The **CSS `transform` property** is used to modify the visual appearance of an element without affecting the document layout.

👉 It allows transformations such as:

* Rotation
* Scaling
* Skewing
* Translation

---

## 🔹 Key Features

* Supports **2D and 3D transformations**
* Does **not affect surrounding elements**
* Keeps original layout intact
* Commonly used for:

    * Animations
    * Hover effects
    * UI enhancements

---

## 🔹 Syntax

```css
transform: none | transform-functions | initial | inherit;
```

---

## 🔹 Basic Example (Matrix Transformation)

```html
<html>
<head>
    <style>
        .main {
            display: grid;
            padding: 30px;
            background-color: green;
        }

        .GFG {
            text-align: center;
            font-size: 35px;
            background-color: white;
            color: green;
            transform: matrix(1, 0, -1, 1, 1, 0);
        }
    </style>
</head>
<body>
    <div class="main">
        <div class="GFG">GeeksforGeeks</div>
    </div>
</body>
</html>
```

### 📊 Explanation:

* `matrix()` → applies a combined transformation
* Takes **6 values** for 2D transformations

---

## 🔹 Without Transform Property

```html
<html>
<head>
    <style>
        .main {
            display: grid;
            padding: 30px;
            background-color: green;
        }

        .GFG {
            text-align: center;
            font-size: 35px;
            background-color: white;
            color: green;
        }
    </style>
</head>
<body>
    <div class="main">
        <div class="GFG">GeeksforGeeks</div>
    </div>
</body>
</html>
```

👉 No transformation is applied.

---

## 🔹 Transform Function Values

### 📌 General Values

* `none` → no transformation
* `initial` → default value
* `inherit` → inherits from parent

---

## 🔹 Translation Functions (Movement)

### 1. `translate(x, y)`

```css
transform: translate(150px, 65%);
```

---

### 2. `translate3d(x, y, z)`

```css
transform: translate(150px, 65%, 5em);
```

---

### 3. `translateX(x)`

```css
transform: translateX(150px);
```

---

### 4. `translateY(y)`

```css
transform: translateY(150px);
```

---

### 5. `translateZ(z)`

```css
transform: translateZ(150px);
```

---

## 🔹 Rotation Functions

### 1. `rotate(angle)`

```css
transform: rotate(45deg);
```

---

### 2. `rotateX(angle)`

```css
transform: rotateX(75deg);
```

---

### 3. `rotateY(angle)`

```css
transform: rotateY(75deg);
```

---

### 4. `rotateZ(angle)`

```css
transform: rotateZ(75deg);
```

---

## 🔹 Scaling Functions (Resize)

### 1. `scale(x, y)`

```css
transform: scale(1, 2);
```

---

### 2. `scale3d(x, y, z)`

```css
transform: scale3d(2, 1, 5);
```

---

### 3. `scaleX(x)`

```css
transform: scaleX(2);
```

---

### 4. `scaleY(y)`

```css
transform: scaleY(2);
```

---

### 5. `scaleZ(z)`

```css
transform: scaleZ(2);
```

---

## 🔹 Skew Functions

### 1. `skew(x-angle, y-angle)`

```css
transform: skew(30deg, 30deg);
```

---

### 2. `skewX(angle)`

```css
transform: skewX(30deg);
```

---

### 3. `skewY(angle)`

```css
transform: skewY(30deg);
```

---

## 🔹 Perspective (3D Depth)

```css
transform: perspective(30px);
```

👉 Adds depth to 3D transformations

---

## 🔹 Matrix Functions

### 1. `matrix()`

* 2D transformation
* Takes **6 values**

```css
transform: matrix(1, 0, -1, 1, 1, 0);
```

---

### 2. `matrix3d()`

* 3D transformation
* Takes **9 values**

---

## 🔹 Example: Matrix3D

```html
<html>
<head>
    <style>
        .main {
            display: grid;
            padding: 30px;
            background-color: green;
            transform-style: preserve-3d;
        }

        .GFG {
            text-align: center;
            font-size: 35px;
            background-color: white;
            color: green;
            transform-style: preserve-3d;
            position: absolute;
            transform: translate(150px, 75%, 5em);
        }
    </style>
</head>
<body>
    <div class="main">
        <div class="GFG">GeeksforGeeks</div>
    </div>
</body>
</html>
```

---

## 🔹 Example: Translate

```html
<html>
<head>
    <style>
        .main {
            display: grid;
            padding: 30px;
            background-color: green;
        }

        .GFG {
            text-align: center;
            font-size: 35px;
            background-color: white;
            color: green;
            transform: translate(150px, 65%);
        }
    </style>
</head>
<body>
    <div class="main">
        <div class="GFG">GeeksforGeeks</div>
    </div>
</body>
</html>
```

---

## 🔹 Example: Rotate

```html
<html>
<head>
    <style>
        .main {
            display: grid;
            padding: 30px;
            background-color: green;
        }

        .GFG {
            text-align: center;
            font-size: 35px;
            background-color: white;
            color: green;
            transform: rotate(45deg);
        }
    </style>
</head>
<body>
    <div class="main">
        <div class="GFG">GeeksforGeeks</div>
    </div>
</body>
</html>
```

---

## 🔹 Example: Scale

```html
<html>
<head>
    <style>
        .main {
            display: grid;
            padding: 30px;
            background-color: green;
        }

        .GFG {
            text-align: center;
            font-size: 35px;
            background-color: white;
            color: green;
            transform: scale(1, 2);
        }
    </style>
</head>
<body>
    <div class="main">
        <div class="GFG">GeeksforGeeks</div>
    </div>
</body>
</html>
```

---

## 🔹 Example: Skew

```html
<html>
<head>
    <style>
        .main {
            display: grid;
            padding: 30px;
            background-color: green;
        }

        .GFG {
            text-align: center;
            font-size: 35px;
            background-color: white;
            color: green;
            transform: skew(30deg, 30deg);
        }
    </style>
</head>
<body>
    <div class="main">
        <div class="GFG">GeeksforGeeks</div>
    </div>
</body>
</html>
```

---

## 🔹 Example: Initial Value

```html
<html>
<head>
    <style>
        .main {
            display: grid;
            padding: 30px;
            background-color: green;
        }

        .GFG {
            text-align: center;
            font-size: 35px;
            background-color: white;
            color: green;
            transform: initial;
        }
    </style>
</head>
<body>
    <div class="main">
        <div class="GFG">GeeksforGeeks</div>
    </div>
</body>
</html>
```

---

## 🔹 Example: Inherit Value

```html
<html>
<head>
    <style>
        .main {
            display: grid;
            padding: 30px;
            background-color: green;
            transform: rotateX(45deg);
        }

        .GFG {
            text-align: center;
            font-size: 35px;
            background-color: white;
            color: green;
            transform: inherit;
        }
    </style>
</head>
<body>
    <div class="main">
        <div class="GFG">GeeksforGeeks</div>
    </div>
</body>
</html>
```

---

## ⚠️ Important Notes

* 3D transforms may not behave correctly on 2D elements
* Avoid unnecessary 3D transforms when working in 2D layouts

---

## 🌐 Browser Support

### ✅ 2D Transform Support

* Chrome, Edge, Firefox, Safari, Opera
* Vendor prefixes may be used (`-webkit-`, `-ms-`, `-moz-`)

---

### ✅ 3D Transform Support

* Supported in modern browsers:

    * Chrome
    * Edge
    * Firefox
    * Safari
    * Opera

---

## 🔹 Key Takeaways

* `transform` modifies visual appearance only
* Does not affect layout or document flow
* Supports:

    * Translation
    * Rotation
    * Scaling
    * Skewing
    * 3D transformations

---

## 🧠 Final Summary

The CSS `transform` property is essential for:

* Animations
* Interactive UI effects
* Modern web design

👉 It allows you to:

* Move elements
* Resize them
* Rotate or distort them
* Create 3D effects

---

