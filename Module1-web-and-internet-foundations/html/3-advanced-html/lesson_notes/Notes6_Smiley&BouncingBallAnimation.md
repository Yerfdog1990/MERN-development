# Smiley & Bouncing Ball Animation Using HTML Canvas

---

## Overview

HTML Canvas can be used for two main purposes:

| Purpose | Description |
|---|---|
| Static graphics | Draw fixed shapes like a smiley face using arcs and rectangles |
| Animations | Create moving objects using position updates and boundary detection |

Both are handled separately using **JavaScript**.

---

## What is HTML Canvas?

HTML Canvas is a powerful drawing surface that allows developers to create graphics and animations using JavaScript. It enables direct rendering of shapes, images, and motion within the browser.

- Supports dynamic drawing using JavaScript
- Ideal for creating lightweight animations and visual effects

---

## Part 1 — Creating a Smiley Face

### Concept

A smiley face is built by combining simple canvas shapes — **circles (arcs)** for the face, eyes, and mouth, and **rectangles** for the teeth.

---

### Full Code

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Smiley Face</title>
</head>

<style>
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    body {
        background-color: rgb(2, 28, 20);
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100vh;
    }
    canvas {
        background-color: white;
        border-radius: 5px;
    }
</style>

<body>
    <canvas id="canvas" width="350" height="350"></canvas>
</body>

<script>
    const canvas = document.getElementById("canvas");
    const ctx = canvas.getContext("2d");

    const scale = 0.6;
    ctx.scale(scale, scale);

    // Face
    ctx.beginPath();
    ctx.arc(300, 300, 200, 0, Math.PI * 2);
    ctx.fillStyle = "yellow";
    ctx.fill();
    ctx.strokeStyle = "black";
    ctx.stroke();

    // Eyes
    ctx.beginPath();
    ctx.arc(400, 250, 30, 0, Math.PI * 2);
    ctx.arc(200, 250, 30, 0, Math.PI * 2);
    ctx.fillStyle = "black";
    ctx.fill();

    // Mouth
    ctx.beginPath();
    ctx.arc(300, 350, 100, 0, Math.PI);
    ctx.fillStyle = "black";
    ctx.fill();

    // Teeth
    ctx.fillStyle = "white";

    ctx.fillRect(240, 350, 30, 20);
    ctx.strokeRect(240, 350, 30, 20);

    ctx.fillRect(280, 350, 30, 20);
    ctx.strokeRect(280, 350, 30, 20);

    ctx.fillRect(320, 350, 30, 20);
    ctx.strokeRect(320, 350, 30, 20);
</script>
</html>
```

---

### Step-by-Step Breakdown

#### 1. Page & Canvas Setup
```css
body {
    background-color: rgb(2, 28, 20); /* dark green background */
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
}
canvas {
    background-color: white;
    border-radius: 5px;
}
```
- The `*` reset removes all default margin and padding.
- Flexbox centres the canvas on the page.
- Canvas has a white background with rounded corners.

---

#### 2. Scaling the Context
```javascript
const scale = 0.6;
ctx.scale(scale, scale);
```
- `ctx.scale(x, y)` shrinks or enlarges all subsequent drawings.
- `0.6` reduces the drawing to 60% of its original size so it fits within the 350×350 canvas.

---

#### 3. Drawing the Face
```javascript
ctx.beginPath();
ctx.arc(300, 300, 200, 0, Math.PI * 2);
ctx.fillStyle = "yellow";
ctx.fill();
ctx.strokeStyle = "black";
ctx.stroke();
```

| Part | Value | Meaning |
|---|---|---|
| Centre | (300, 300) | Position of the circle's centre |
| Radius | 200 | Size of the face |
| Start angle | 0 | Start of the arc |
| End angle | `Math.PI * 2` | Full circle (360°) |
| Fill | yellow | Face colour |
| Stroke | black | Outline colour |

---

#### 4. Drawing the Eyes
```javascript
ctx.beginPath();
ctx.arc(400, 250, 30, 0, Math.PI * 2); // right eye
ctx.arc(200, 250, 30, 0, Math.PI * 2); // left eye
ctx.fillStyle = "black";
ctx.fill();
```
- Both eyes are drawn as full circles (radius 30) in the same path.
- Filled with black.

---

#### 5. Drawing the Mouth
```javascript
ctx.beginPath();
ctx.arc(300, 350, 100, 0, Math.PI);
ctx.fillStyle = "black";
ctx.fill();
```
- `Math.PI` = 180° — draws only the **bottom half** of a circle, creating a smile shape.

---

#### 6. Drawing the Teeth
```javascript
ctx.fillStyle = "white";

ctx.fillRect(240, 350, 30, 20);
ctx.strokeRect(240, 350, 30, 20);

ctx.fillRect(280, 350, 30, 20);
ctx.strokeRect(280, 350, 30, 20);

ctx.fillRect(320, 350, 30, 20);
ctx.strokeRect(320, 350, 30, 20);
```
- Three white rectangles drawn across the top of the mouth area.
- `fillRect()` fills each tooth, `strokeRect()` draws the outline/border.

---

## Part 2 — Creating a Bouncing Ball Animation

### Concept

A bouncing ball is animated by continuously updating the ball's position and **reversing its direction** when it reaches any edge of the canvas. `requestAnimationFrame` is used for smooth animation.

---

### Full Code

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Bouncing Ball</title>
</head>

<style>
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    body {
        background-color: rgb(2, 28, 20);
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100vh;
    }
    canvas {
        border-radius: 5px;
        background-color: rgb(255, 255, 255);
    }
</style>

<body>
    <canvas id="canvas" width="500" height="500"></canvas>
</body>

<script>
    const canvas = document.getElementById("canvas");
    const ctx = canvas.getContext("2d");

    // Ball object with position, radius, and velocity
    const circle = {
        x: 300,
        y: 300,
        radius: 40,
        dx: 5,   // horizontal speed
        dy: 4    // vertical speed
    };

    // Function to draw the circle
    function drawcircle() {
        ctx.beginPath();
        ctx.arc(circle.x, circle.y, circle.radius, 0, Math.PI * 2);
        ctx.fillStyle = "pink";
        ctx.fill();
    }

    // Animation loop
    function update() {
        drawcircle();

        // Move the ball
        circle.x += circle.dx;
        circle.y += circle.dy;

        // Reverse direction on horizontal boundaries
        if (circle.x + circle.radius > canvas.width || circle.x - circle.radius < 0) {
            circle.dx *= -1;
        }

        // Reverse direction on vertical boundaries
        if (circle.y + circle.radius > canvas.height || circle.y - circle.radius < 0) {
            circle.dy *= -1;
        }

        requestAnimationFrame(update);
    }

    update(); // Start animation
</script>
</html>
```

---

### Step-by-Step Breakdown

#### 1. The Circle Object
```javascript
const circle = {
    x: 300,      // starting x position
    y: 300,      // starting y position
    radius: 40,  // size of the ball
    dx: 5,       // horizontal velocity (pixels per frame)
    dy: 4        // vertical velocity (pixels per frame)
};
```

- `dx` and `dy` represent the ball's speed and direction on each axis.
- Positive `dx` moves right; negative `dx` moves left.
- Positive `dy` moves down; negative `dy` moves up.

---

#### 2. The `drawcircle()` Function
```javascript
function drawcircle() {
    ctx.beginPath();
    ctx.arc(circle.x, circle.y, circle.radius, 0, Math.PI * 2);
    ctx.fillStyle = "pink";
    ctx.fill();
}
```
- Draws a pink filled circle at the ball's current position every frame.

---

#### 3. Boundary Collision Detection
```javascript
// Hits right or left wall
if (circle.x + circle.radius > canvas.width || circle.x - circle.radius < 0) {
    circle.dx *= -1;
}

// Hits bottom or top wall
if (circle.y + circle.radius > canvas.height || circle.y - circle.radius < 0) {
    circle.dy *= -1;
}
```

| Condition | Meaning |
|---|---|
| `circle.x + circle.radius > canvas.width` | Ball touches the right edge |
| `circle.x - circle.radius < 0` | Ball touches the left edge |
| `circle.y + circle.radius > canvas.height` | Ball touches the bottom edge |
| `circle.y - circle.radius < 0` | Ball touches the top edge |

- Multiplying by `-1` flips the direction, creating the bounce effect.

---

#### 4. The Animation Loop with `requestAnimationFrame`
```javascript
function update() {
    drawcircle();
    circle.x += circle.dx;
    circle.y += circle.dy;
    // ... boundary checks ...
    requestAnimationFrame(update);
}
update();
```
- `requestAnimationFrame(update)` calls `update()` before the next browser repaint (~60 times per second).
- This creates smooth, efficient animation that syncs with the screen refresh rate.

> **Note:** In the code above, `ctx.clearRect()` is commented out. Without it, each frame leaves a trail of previous positions. To get a clean bouncing ball, uncomment:
> ```javascript
> ctx.clearRect(0, 0, canvas.width, canvas.height);
> ```

---

## Comparison — Smiley vs Bouncing Ball

| Aspect | Smiley Face | Bouncing Ball |
|---|---|---|
| Type | Static graphic | Animation |
| Drawn once? | Yes | No — redrawn every frame |
| Uses `requestAnimationFrame` | No | Yes |
| Uses `clearRect` | No | Yes (recommended) |
| Key shapes | `arc()`, `fillRect()` | `arc()` |
| Key concept | Shape composition | Position update + collision detection |

---

## Quick Reference — Key Methods Used

| Method / Property | Description |
|---|---|
| `getContext("2d")` | Gets the 2D drawing context |
| `ctx.scale(x, y)` | Scales all drawings by given factor |
| `ctx.beginPath()` | Starts a new drawing path |
| `ctx.arc(x, y, r, start, end)` | Draws a circle or arc |
| `ctx.fill()` | Fills the current path |
| `ctx.stroke()` | Outlines the current path |
| `ctx.fillStyle` | Sets fill colour |
| `ctx.strokeStyle` | Sets stroke/outline colour |
| `ctx.fillRect(x, y, w, h)` | Draws a filled rectangle |
| `ctx.strokeRect(x, y, w, h)` | Draws a rectangle outline |
| `ctx.clearRect(x, y, w, h)` | Clears a rectangular area |
| `requestAnimationFrame(fn)` | Schedules the next animation frame |

---

## Important Notes

- `Math.PI * 2` = 360° — used to draw complete circles.
- `Math.PI` = 180° — used to draw a half circle (smile shape).
- Always use `requestAnimationFrame` over `setInterval` for animations — it is more efficient and syncs with the browser's refresh rate.
- Without `clearRect()` in the animation loop, the ball will leave a visible trail across the canvas.
- The canvas coordinate system starts at **(0, 0)** in the **top-left corner** — `x` increases rightward, `y` increases downward.

---