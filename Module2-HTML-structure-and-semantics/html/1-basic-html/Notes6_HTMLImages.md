# HTML Images 
---

## What is the HTML `<img>` Tag?

The HTML `<img>` tag is used to **embed images into web pages** by linking to an image file. It creates a placeholder for the image on the page and is controlled through attributes like `src`, `alt`, `width`, and `height`.

- Does **not** require a closing tag — it is a void (self-closing) element
- Does not store the image itself — it links to an external or local image file
- Supported by all modern browsers

### Two Ways to Insert Images

- **Full path / URL** — links directly to an image hosted on the internet
- **Relative file path** — links to an image relative to the location of the current HTML file

---

## Basic Syntax & Example

```html
<img src="image-path-or-url" alt="description" />
```

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <title></title>
  </head>
  <body>
    <img src="https://media.geeksforgeeks.org/wp-content/uploads/20210915115837/gfg3-300x300.png"
         alt="GFG image" />
  </body>
</html>
```

---

## `<img>` Tag Attributes

| Attribute | Description |
|---|---|
| `src` | Specifies the path or URL to the image file |
| `alt` | Provides alternative text if the image cannot be displayed |
| `width` | Specifies the width of the image in pixels |
| `height` | Specifies the height of the image in pixels |
| `title` | Adds a tooltip that appears when the user hovers over the image |
| `border` | Controls the thickness of the image border |
| `align` | Controls image alignment (left, right, center) — legacy, use CSS instead |
| `loading` | Specifies whether to defer or immediately load the image |
| `srcset` | Specifies a list of image files for different devices/resolutions (responsive images) |
| `sizes` | Specifies image sizes for different page layouts |
| `crossorigin` | Allows importing images from third-party sites with cross-origin access |
| `ismap` | Specifies the image as a server-side image map |
| `usemap` | Specifies the image as a client-side image map |
| `longdesc` | Specifies a URL to a detailed description of the image |
| `referrerpolicy` | Specifies which referrer information to use when fetching the image |

---

## Core Image Features

---

### 1. The `alt` Attribute

The `alt` attribute provides **alternative text** when an image cannot be displayed. It is one of the most important attributes for accessibility and SEO.

- Displays descriptive text if the image fails to load
- Helps users with slow connections or broken image links
- Essential for screen readers and accessibility support
- Improves SEO by giving search engines context about the image

```html
<img src="https://media.geeksforgeeks.org/wp-content/cdn-uploads/201907101022/download3.png"
     alt="This is GeeksforGeeks logo" />
```

> **Best Practice:** Always include a meaningful `alt` description. Never leave it empty unless the image is purely decorative.

---

### 2. Setting Image Size — `width` and `height`

The `width` and `height` attributes define the displayed dimensions of an image in **pixels**.

- Control the displayed width and height of an image
- Values are specified in pixels by default
- Help maintain consistent layout and prevent page shifting during load

```html
<img src="https://media.geeksforgeeks.org/wp-content/cdn-uploads/20190710102234/download3.png"
     alt="GeeksforGeeks logo"
     width="300"
     height="300" />
```

> **Best Practice:** Always specify `width` and `height` to prevent layout shifts while the page loads. Use CSS for more flexible, responsive sizing.

---

### 3. Adding a Title (Tooltip)

The `title` attribute adds a **tooltip** that appears when a user hovers over the image with their mouse.

```html
<img src="https://media.geeksforgeeks.org/wp-content/cdn-uploads/20190710102234/download3.png"
     alt="GeeksforGeeks logo"
     width="200"
     height="200"
     title="Logo of GeeksforGeeks" />
```

---

### 4. Setting Image Style — Border

The `border` attribute controls the visible outline around an image by specifying its thickness in pixels. Setting `border="0"` removes the border entirely.

```html
<img src="https://media.geeksforgeeks.org/wp-content/cdn-uploads/20190710102234/download3.png"
     alt="GeeksforGeeks logo"
     width="200"
     height="200"
     border="5" />
```

> **Note:** The `border` attribute is a legacy approach. Modern styling should be done using CSS — for example: `style="border: 5px solid black;"`.

---

### 5. Image Alignment

The `align` attribute controls how the image is positioned within the page layout. Common values are `left`, `right`, and `center`.

```html
<img src="https://media.geeksforgeeks.org/wp-content/cdn-uploads/20190710102234/download3.png"
     alt="GeeksforGeeks logo"
     align="right" />
```

> **Note:** The `align` attribute is a legacy HTML approach. CSS (`text-align`, `float`, `flexbox`, `grid`) is the modern and recommended method for image alignment.

---

### 6. Image as a Link

Wrapping the `<img>` tag inside an `<a>` tag makes the image **clickable**, linking it to another page or resource.

```html
<a href="https://www.geeksforgeeks.org/">
  <img src="https://media.geeksforgeeks.org/wp-content/cdn-uploads/20190710102234/download3.png"
       alt="GeeksforGeeks logo" />
</a>
```

### File Path Types

| Type | Description | Example |
|---|---|---|
| **Absolute** | Contains the full URL including root element and complete directory path | `https://example.com/images/logo.png` |
| **Relative** | Specifies the location of a file relative to the current HTML file | `images/logo.png` or `../images/logo.png` |

---

### 7. Animated Images (GIF)

Animated images are added using **GIF files**. The `<img>` tag handles GIFs the same way as static images — the animation plays automatically in all supported browsers.

```html
<img src="smiley.gif"
     alt="smiley"
     style="width: 200px; height: 200px" />
```

- Animation plays automatically without any JavaScript
- Enhances visual appeal and user engagement
- Use sparingly to avoid distracting or slowing down the page

---

## Supported Image Formats

| Abbreviation | File Type | Extension |
|---|---|---|
| **PNG** | Portable Network Graphics | `.png` |
| **JPEG** | Joint Photographic Expert Group image | `.jpg`, `.jpeg`, `.jfif`, `.pjpeg`, `.pjp` |
| **SVG** | Scalable Vector Graphics | `.svg` |
| **GIF** | Graphics Interchange Format | `.gif` |
| **ICO** | Microsoft Icon | `.ico`, `.cur` |
| **APNG** | Animated Portable Network Graphics | `.apng` |

---

## Tips for Using HTML Images Effectively

- **Optimise sizes** — compress images and choose the right format: JPEG for photos, PNG for graphics with limited colours, SVG for icons and vectors
- **Use clear alt text** — always describe the image's purpose to improve accessibility and support screen readers
- **Make images responsive** — use `srcset` to serve different image sizes for different devices and screen resolutions
- **Keep aspect ratios** — avoid stretching or distorting images by maintaining their original proportions
- **Respect copyrights** — only use images you own or have explicit permission to use

---

## Complete Example — All Key Attributes Together

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <title>HTML Images</title>
  </head>
  <body>

    <!-- Basic image with alt, width, height, title, and border -->
    <img src="logo.png"
         alt="GeeksforGeeks Logo"
         width="200"
         height="200"
         title="GeeksforGeeks"
         border="2" />

    <!-- Image used as a clickable link -->
    <a href="https://www.geeksforgeeks.org/">
      <img src="logo.png" alt="Visit GeeksforGeeks" />
    </a>

    <!-- Animated GIF -->
    <img src="animation.gif"
         alt="Loading animation"
         style="width: 100px; height: 100px;" />

  </body>
</html>
```

---

## Summary

| Feature | Attribute / Method |
|---|---|
| Image source | `src` |
| Accessibility text | `alt` |
| Image dimensions | `width`, `height` |
| Hover tooltip | `title` |
| Image border | `border` (legacy) / CSS |
| Alignment | `align` (legacy) / CSS |
| Clickable image | Wrap with `<a>` tag |
| Animated image | Use `.gif` as `src` |
| Responsive images | `srcset` and `sizes` |

The `<img>` tag is one of the most frequently used elements in HTML. Mastering its attributes — especially `src`, `alt`, `width`, and `height` — is fundamental to building well-structured, accessible, and visually consistent web pages.

---