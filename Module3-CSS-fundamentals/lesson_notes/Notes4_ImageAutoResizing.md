# CSS Image Auto-Resizing to Fit a Div Container

---

## Overview

To resize an image or video to fit inside a div container, use the `object-fit` property for precise control over how the content fits within its container.

- `object-fit` maintains the aspect ratio or stretches the content to fill the container.
- Common values include `cover` (fills the container, may crop) and `contain` (fits within the container without cropping).
- Prevents image distortion across different screen sizes.

---

## 3 Ways to Auto-Resize an Image to Fit a Div Container

---

### 1. Using `object-fit: cover`

The `object-fit: cover` property ensures the image **covers the entire container**, potentially cropping parts of the image to maintain its aspect ratio.

**Key Points:**
- Fills the container completely without stretching the image.
- Maintains the original aspect ratio.
- Crops excess parts if the image dimensions don't match the container.

**Code Example:**
```html
<html>
<head>
    <style>
        .container {
            width: 300px;
            height: 200px;
            border: 1px solid #000;
        }
        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
    </style>
</head>
<body>
    <div class="container">
        <img src="image.png" alt="Sample Image">
    </div>
</body>
</html>
```

**How it works:**
```
Container: [  300px × 200px  ]
Image:     fills entire box → excess is cropped
Aspect ratio: preserved ✓   Cropping: possible ✓
```

---

### 2. Using `object-fit: contain`

The `object-fit: contain` property scales the image to **fit entirely within the container** without cropping, preserving the whole image but potentially leaving empty space if the aspect ratios differ.

**Key Points:**
- Scales the image to fit entirely inside the container.
- Preserves the original aspect ratio.
- May leave empty/blank space (letterboxing) around the image if ratios differ.
- No part of the image is ever cropped.

**Code Example:**
```html
<html>
<head>
    <style>
        .container {
            width: 300px;
            height: 200px;
            border: 1px solid #000;
        }
        img {
            width: 100%;
            height: 100%;
            object-fit: contain;
        }
    </style>
</head>
<body>
    <div class="container">
        <img src="image.png" alt="Sample Image">
    </div>
</body>
</html>
```

**How it works:**
```
Container: [  300px × 200px  ]
Image:     scaled to fit inside → no cropping
Aspect ratio: preserved ✓   Empty space: possible ✓
```

---

### 3. Using `max-width: 100%` and `height: auto`

Setting `max-width: 100%` and `height: auto` ensures the image **scales down responsively** to fit the container's width while maintaining its aspect ratio, preventing distortion.

**Key Points:**
- Scales the image responsively to fit the container width.
- Maintains the original aspect ratio automatically.
- Prevents image distortion on different screen sizes.
- Does not require a fixed height on the container — the container grows with the image.
- Image will never exceed its natural size (won't scale up, only down).

**Code Example:**
```html
<html>
<head>
    <style>
        .container {
            width: 300px;
            border: 1px solid #000;
        }
        img {
            max-width: 100%;
            height: auto;
        }
    </style>
</head>
<body>
    <div class="container">
        <img src="image.png" alt="Sample Image">
    </div>
</body>
</html>
```

**How it works:**
```
Container: [ 300px wide, height flexible ]
Image:     max-width caps at container width → height adjusts automatically
Aspect ratio: preserved ✓   Distortion: none ✓
```

---

## Comparison Table — All 3 Methods

| Feature | `object-fit: cover` | `object-fit: contain` | `max-width: 100%` + `height: auto` |
|---|---|---|---|
| Fills container fully | Yes | No | No |
| Preserves aspect ratio | Yes | Yes | Yes |
| Crops image | Yes (possible) | No | No |
| Leaves empty space | No | Yes (possible) | No |
| Requires fixed container height | Yes | Yes | No |
| Responsive behaviour | Yes | Yes | Yes |
| Best used for | Hero images, thumbnails, card images | Logos, product images, icons | General responsive images |

---

## When to Use Each Method

| Situation | Recommended Method |
|---|---|
| Profile pictures / thumbnails | `object-fit: cover` |
| Product images (show full image) | `object-fit: contain` |
| Logos (no cropping allowed) | `object-fit: contain` |
| General responsive layout images | `max-width: 100%; height: auto` |
| Full-width hero/banner images | `object-fit: cover` |
| Images that must never be cropped | `object-fit: contain` or `max-width: 100%` |

---

## Quick Reference — Syntax Cheat Sheet

```css
/* Method 1 — Cover (fills, may crop) */
img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

/* Method 2 — Contain (shows full image, may leave space) */
img {
    width: 100%;
    height: 100%;
    object-fit: contain;
}

/* Method 3 — Responsive scale-down (no fixed container height needed) */
img {
    max-width: 100%;
    height: auto;
}
```

---

## Key Takeaway

> Always use `object-fit: cover` or `object-fit: contain` when the container has a **fixed width and height**. Use `max-width: 100%; height: auto` for **flexible/responsive containers** where the height can adjust freely.

---

