# HTML Canvas Basics 

---

## What is HTML Canvas?

**HTML Canvas** is an element used to draw graphics dynamically on a web page using JavaScript. It acts as a container for rendering shapes, text, images, and animations.

---

## Key Features

| Feature | Description |
|---|---|
| JavaScript required | Cannot draw graphics without JavaScript |
| Shape support | Supports paths, rectangles, circles, text, and images |
| Rectangular area | Represents a rectangular drawing area on a webpage |
| No default styling | Has no border or content by default unless styled or scripted |

---

## Basic Syntax

```html
<canvas>
    Content...
</canvas>
```

> **Note:** It is recommended to always include:
> - An `id` attribute — to reference the canvas in a script
> - `width` and `height` attributes — to define the size
> - A `style` attribute — to add a border or other visual styling

### Minimal Canvas Setup

```html
<canvas id="myCanvas"
        width="400"
        height="200"
        style="border:2px solid #000000;">
</canvas>
```

---

## How to Access the Canvas in JavaScript

Every canvas drawing is done through a **rendering context**, accessed with `.getContext("2d")`.

```javascript
let canvas = document.getElementById("myCanvas");
let ctx = canvas.getContext("2d");
```

- `document.getElementById()` — selects the canvas element by its `id`
- `.getContext("2d")` — returns the 2D drawing context object used for all drawing methods

---

## Supported Properties of HTML Canvas

| Property | Description |
|---|---|
| Colors and Styles | Sets fill colour, stroke colour, and styling for shapes and text |
| Shadows | Adds shadow effects to shapes and text |
| Line Styles | Controls line width, line caps, and line joins for strokes |
| Rectangles | Draws and manipulates rectangular shapes |
| Paths | Draws custom shapes using lines and curves |
| Transformations | Enables scaling, rotating, translating, and skewing canvas objects |
| Text | Draws and styles text on the canvas area |
| Pixel Manipulation | Allows direct access and modification of pixel data |
| Compositing | Controls how new drawings combine with existing content |
| Image Drawing | Draws images onto the canvas from external sources |

---

## Drawing Shapes and Graphics — Examples

### Example 1 — Empty Canvas

```html
<canvas id="myCanvas"
        width="400"
        height="200"
        style="border:2px solid #000000;">
</canvas>
```

Displays a blank rectangular canvas with a black border.

---

### Example 2 — Drawing a Circle

```html
<canvas id="GFG" width="400" height="200" style="border:2px solid #d3d3d3;"></canvas>
<script>
    let g = document.getElementById("GFG");
    let geeks = g.getContext("2d");

    geeks.beginPath();
    geeks.arc(200, 100, 50, 0, 2 * Math.PI);
    geeks.stroke();
</script>
```

**Key methods:**
- `beginPath()` — starts a new drawing path
- `arc(x, y, radius, startAngle, endAngle)` — draws a circular arc
- `stroke()` — renders the path outline

---

### Example 3 — Writing Text

```html
<canvas id="GFG" width="600" height="200" style="border:1px solid #d3d3d3;"></canvas>
<script>
    let g = document.getElementById("GFG");
    let geeks = g.getContext("2d");

    geeks.font = "30px Arial";
    geeks.fillText("GeeksForGeeks", 170, 50);
</script>
```

**Key properties/methods:**
- `font` — sets font size and family (e.g. `"30px Arial"`)
- `fillText(text, x, y)` — draws filled text at the given position
- `strokeText(text, x, y)` — draws outlined text (no fill)

---

### Example 4 — Linear Gradient

```html
<canvas id="GFG" width="400" height="200" style="border:2px solid #d3d3d3;"></canvas>
<script>
    let G = document.getElementById("GFG");
    let geeks = G.getContext("2d");

    let grd = geeks.createLinearGradient(0, 0, 200, 0);
    grd.addColorStop(0, "yellow");
    grd.addColorStop(1, "grey");

    geeks.fillStyle = grd;
    geeks.fillRect(50, 50, 300, 80);
</script>
```

**Key methods:**
- `createLinearGradient(x1, y1, x2, y2)` — creates a gradient along a line
- `addColorStop(position, color)` — defines colour at a point (0 = start, 1 = end)
- `fillRect(x, y, width, height)` — draws a filled rectangle

---

### Example 5 — Drawing an Image

```html
<img id="image" src="logo.png" alt="Logo" width="250" height="200">
<canvas id="gfg" width="300" height="300" style="border:1px solid #d3d3d3;"></canvas>
<button onclick="gfg()">Click to Try</button>

<script>
    function gfg() {
        let g = document.getElementById("gfg");
        let geeks = g.getContext("2d");
        let img = document.getElementById("image");
        geeks.drawImage(img, 0, 0);
    }
</script>
```

**Key method:**
- `drawImage(image, x, y)` — draws an image element onto the canvas at position (x, y)

---

### Example 6 — Shadow Blur

```html
<canvas id="GFG" width="500" height="250"></canvas>
<script>
    let g = document.getElementById("GFG");
    let geeks = g.getContext("2d");

    geeks.shadowBlur = 20;
    geeks.shadowColor = "yellow";
    geeks.fillStyle = "red";
    geeks.fillRect(30, 20, 100, 80);
</script>
```

**Key properties:**
- `shadowBlur` — sets the blur level of the shadow (higher = more blur)
- `shadowColor` — sets the colour of the shadow

---

### Example 7 — Rotate with `rotate()`

```html
<canvas id="GFG" width="300" height="150;"></canvas>
<script>
    let g = document.getElementById("GFG");
    let geeks = g.getContext("2d");

    geeks.rotate(20 * Math.PI / 180);
    geeks.fillRect(100, 20, 100, 50);
</script>
```

**Key method:**
- `rotate(angle)` — rotates the canvas context by the given angle in **radians**
- Convert degrees to radians: `degrees × (Math.PI / 180)`

---

### Example 8 — Translate with `translate()`

```html
<canvas id="GFG" width="300" height="150;"></canvas>
<script>
    let g = document.getElementById("GFG");
    let geeks = g.getContext("2d");

    geeks.fillRect(10, 10, 100, 50);     // original position
    geeks.translate(80, 90);              // move origin
    geeks.fillRect(10, 10, 100, 50);     // new position
</script>
```

**Key method:**
- `translate(x, y)` — remaps the canvas (0, 0) origin to a new position
- All subsequent drawings are offset by the translated amount

---

### Example 9 — Transform with `transform()`

```html
<canvas id="GFG" width="300" height="150;"></canvas>
<script>
    let g = document.getElementById("GFG");
    let geeks = g.getContext("2d");

    geeks.fillStyle = "yellow";
    geeks.fillRect(0, 0, 250, 100);

    geeks.transform(1, 0.5, -0.5, 1, 30, 10);
    geeks.fillStyle = "grey";
    geeks.fillRect(0, 0, 250, 100);

    geeks.transform(1, 0.5, -0.5, 1, 30, 10);
    geeks.fillStyle = "black";
    geeks.fillRect(0, 0, 250, 100);
</script>
```

**Key method:**
- `transform(a, b, c, d, e, f)` — applies a transformation matrix to the canvas
- Each call stacks on top of the previous transformation

---

## Creating Animations in HTML Canvas

Animation on HTML Canvas is created using JavaScript to **draw and update graphics repeatedly over time**. By controlling the timing of redraws, objects appear to move or change.

### Timing Methods

| Method | Behaviour | Best for |
|---|---|---|
| `setInterval(callback, time)` | Runs a function continuously after every fixed delay | Simple looping animations |
| `setTimeout(callback, time)` | Runs a function once after a delay | Controlled or recursive animations |

### Basic Animation Pattern

```javascript
let canvas = document.getElementById("myCanvas");
let ctx = canvas.getContext("2d");
let x = 0;

setInterval(function() {
    ctx.clearRect(0, 0, canvas.width, canvas.height); // clear previous frame
    ctx.fillRect(x, 50, 50, 50);                      // draw updated shape
    x += 2;                                            // update position
}, 16); // ~60 frames per second
```

**Key steps in any animation:**
1. **Clear** the canvas with `clearRect()` before each frame
2. **Update** the position or state of objects
3. **Redraw** the objects at their new position

---

## Quick Reference — Common Canvas Methods

| Method / Property | Description |
|---|---|
| `getContext("2d")` | Gets the 2D drawing context |
| `fillRect(x, y, w, h)` | Draws a filled rectangle |
| `strokeRect(x, y, w, h)` | Draws a rectangle outline |
| `clearRect(x, y, w, h)` | Clears a rectangular area |
| `beginPath()` | Starts a new path |
| `arc(x, y, r, start, end)` | Draws a circle or arc |
| `stroke()` | Renders the path as an outline |
| `fill()` | Fills the current path |
| `fillText(text, x, y)` | Draws filled text |
| `strokeText(text, x, y)` | Draws outlined text |
| `drawImage(img, x, y)` | Draws an image on the canvas |
| `rotate(angle)` | Rotates the canvas context |
| `translate(x, y)` | Moves the canvas origin |
| `transform(...)` | Applies a transformation matrix |
| `createLinearGradient(...)` | Creates a linear gradient |
| `addColorStop(pos, color)` | Adds a colour stop to a gradient |
| `shadowBlur` | Sets shadow blur level |
| `shadowColor` | Sets shadow colour |

---

## Important Notes

- The `<canvas>` element is just a container — **all drawing is done via JavaScript**.
- Canvas uses a **coordinate system** starting at (0, 0) in the **top-left** corner.
- Canvas graphics are **raster-based** (pixel-based) — they do not scale cleanly like SVG.
- Always use `id`, `width`, and `height` attributes on the `<canvas>` tag.
- For animations, `requestAnimationFrame()` is preferred over `setInterval()` in modern development as it is more efficient and syncs with the browser's refresh rate.

---