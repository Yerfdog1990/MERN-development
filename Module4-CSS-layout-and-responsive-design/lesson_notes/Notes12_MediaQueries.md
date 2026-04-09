
---

# 📘 CSS Media Queries

---

## 📌 Overview

**CSS Media Queries** are used to apply styles based on device characteristics such as screen size, resolution, and orientation.

### 🔹 Key Features

* Enable **responsive web design**
* Apply CSS conditionally
* Adapt layouts for **mobile, tablet, and desktop**
* Improve user experience across devices

---

## 🔹 Basic Example

```html
<html>
<head>
    <style>
        .gfg {
            color: black;
        }

        @media screen and (max-width: 500px) {
            .gfg {
                color: green;
            }
        }
    </style>
</head>
<body>
    <div class="gfg">Sample Example of Media Query</div>
</body>
</html>
```

### ✅ Explanation

* Default text color → **black**
* On screens ≤ 500px → **green**
* Styles change dynamically based on screen width

---

## 🔹 Syntax

```css
@media mediatype and (condition) {
    /* CSS rules */
}
```

### ✔ Example

```css
@media screen and (max-width: 600px) {
    body {
        background-color: lightblue;
    }
}
```

---

## ⚠️ Important Note

To ensure proper responsiveness on mobile devices, include the viewport meta tag:

```html
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```

---

# 🔹 Media Types

Media types define **which devices** the styles apply to.

| Media Type | Description                        |
| ---------- | ---------------------------------- |
| all        | Default, applies to all devices    |
| screen     | Screens (phones, tablets, laptops) |
| print      | Print preview / printers           |
| speech     | Screen readers                     |

---

# 🔹 Media Queries for Multiple Screen Sizes

## 📌 Example

```html
<style>
.gfg {
    color: black;
}

@media screen and (max-width: 800px) {
    .gfg {
        color: blue;
    }
}

@media screen and (max-width: 500px) {
    .gfg {
        color: green;
    }
}
</style>
```

### ✅ Behavior

* Default → black
* ≤ 800px → blue
* ≤ 500px → green

✔ Smaller screens override larger ones

---

# 🔹 Media Queries with Multiple Style Changes

## 📌 Example

```html
<style>
.gfg {
    color: black;
    font-size: 20px;
    padding: 10px;
}

@media screen and (max-width: 800px) {
    .gfg {
        color: blue;
        font-size: 18px;
    }
}

@media screen and (max-width: 500px) {
    .gfg {
        color: green;
        font-size: 16px;
        text-align: center;
    }
}
</style>
```

### ✅ Behavior

| Screen Size | Changes               |
| ----------- | --------------------- |
| Default     | Black, 20px           |
| ≤ 800px     | Blue, 18px            |
| ≤ 500px     | Green, 16px, centered |

---

# 🔹 Media Query Features

Media queries can target various **device characteristics**:

| Feature      | Description                  |
| ------------ | ---------------------------- |
| width        | Viewport width               |
| height       | Viewport height              |
| aspect-ratio | Width/height ratio           |
| orientation  | Portrait or landscape        |
| resolution   | Device resolution (dpi/dpcm) |
| color        | Bits per color               |
| color-index  | Number of colors             |
| monochrome   | Bits per pixel in grayscale  |
| grid         | Grid or bitmap device        |
| scan         | Scanning method              |
| update       | Screen refresh capability    |

---

# 🔹 Common Conditions

### Width-Based Queries

```css
@media (max-width: 600px) { }
@media (min-width: 768px) { }
```

---

### Orientation-Based Queries

```css
@media (orientation: portrait) { }
@media (orientation: landscape) { }
```

---

### Combined Conditions

```css
@media screen and (max-width: 600px) and (orientation: portrait) {
    /* styles */
}
```

---

# 🔹 How Media Queries Work

1. Browser checks device conditions
2. If condition matches → styles applied
3. If not → ignored

✔ CSS cascades normally (specificity + order still apply)

---

# 🔥 Best Practices

### ✅ 1. Mobile-First Design

```css
/* Default: mobile */
body { font-size: 16px; }

/* Larger screens */
@media (min-width: 768px) {
    body { font-size: 18px; }
}
```

---

### ✅ 2. Use Breakpoints Wisely

Common breakpoints:

* 480px → mobile
* 768px → tablet
* 1024px → desktop

---

### ✅ 3. Keep It Simple

* Avoid too many breakpoints
* Group related styles

---

### ✅ 4. Test Across Devices

* Mobile
* Tablet
* Desktop

---

# 🔥 Final Summary

| Concept           | Description                |
| ----------------- | -------------------------- |
| Media Queries     | Apply CSS conditionally    |
| @media            | Defines query rules        |
| Media Types       | Target device categories   |
| Conditions        | width, height, orientation |
| Responsive Design | Adapts layout to devices   |

---

## 🚀 Key Takeaway

👉 **Media Queries are the foundation of responsive web design**, allowing websites to adapt seamlessly across different screen sizes and devices.

---

