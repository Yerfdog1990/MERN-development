
---

# 📘 CSS Animations

---

## 📌 Overview

**CSS Animations** allow you to animate HTML elements without using JavaScript by gradually changing styles over time.

### 🔹 Key Features

* Animate properties like position, color, size, opacity
* Use `@keyframes` to define animation steps
* Control animation behavior with multiple properties
* Enhance UI/UX with smooth visual effects

---

## 🔹 Basic Example

```html
<html>
<head>
    <style>
        .box {
            width: 100px;
            height: 100px;
            background-color: blue;
            animation: changeColor 3s infinite;
        }

        @keyframes changeColor {
            from {
                background-color: blue;
            }

            to {
                background-color: green;
            }
        }
    </style>
</head>
<body>
    <div class="box"></div>
</body>
</html>
```

### ✅ Explanation

* `.box` applies the animation
* `changeColor` is the animation name
* Runs for **3 seconds** and repeats **infinitely**
* Changes color from blue → green

---

# 🔹 CSS Animation Properties

---

## 1. @keyframes Rule

### 📌 Purpose

Defines how styles change during animation.

### 🔹 Syntax

```css
@keyframes animation-name {
    from { /* initial styles */ }
    to { /* final styles */ }
}
```

✔ You can also use percentages:

```css
@keyframes example {
    0% { }
    50% { }
    100% { }
}
```

---

## 2. animation-name

### 📌 Purpose

Specifies which animation to apply.

```css
animation-name: moveRight;
```

---

### 🔹 Example

```css
.box {
    animation-name: moveRight;
    animation-duration: 2s;
    animation-iteration-count: infinite;
}

@keyframes moveRight {
    from { transform: translateX(0); }
    to { transform: translateX(200px); }
}
```

✔ Moves element horizontally

---

## 3. animation-duration

### 📌 Purpose

Defines how long one animation cycle lasts.

```css
animation-duration: 2s;
```

✔ Accepts `s` (seconds) or `ms` (milliseconds)

---

## 4. animation-timing-function

### 📌 Purpose

Controls the speed curve of the animation.

```css
animation-timing-function: ease-in;
```

### 🔹 Values

* `linear` → constant speed
* `ease` → slow start, fast middle, slow end
* `ease-in` → slow start
* `ease-out` → slow end
* `ease-in-out` → slow start & end

---

### 🔹 Example

```css
animation-timing-function: ease-in;
```

✔ Starts slow, speeds up

---

## 5. animation-delay

### 📌 Purpose

Adds delay before animation starts.

```css
animation-delay: 1s;
```

---

### 🔹 Example

```css
.box {
    animation-delay: 1s;
}
```

✔ Waits 1 second before starting

---

## 6. animation-iteration-count

### 📌 Purpose

Defines how many times animation repeats.

```css
animation-iteration-count: infinite;
```

### 🔹 Values

* Number (e.g., `3`)
* `infinite`

---

### 🔹 Example (Bounce)

```css
@keyframes bounce {
    0% { transform: translateY(0); }
    50% { transform: translateY(-50px); }
    100% { transform: translateY(0); }
}
```

✔ Creates bouncing effect

---

## 7. animation-direction

### 📌 Purpose

Controls animation direction.

```css
animation-direction: alternate;
```

### 🔹 Values

* `normal`
* `reverse`
* `alternate`
* `alternate-reverse`

---

### 🔹 Example

```css
animation-direction: alternate;
```

✔ Moves forward then backward

---

## 8. animation-fill-mode

### 📌 Purpose

Defines styles before and after animation.

```css
animation-fill-mode: forwards;
```

### 🔹 Values

* `none`
* `forwards` → keeps final state
* `backwards`
* `both`

---

### 🔹 Example

```css
animation: move 3s forwards;
```

✔ Element stays in final position

---

## 9. animation-play-state

### 📌 Purpose

Controls whether animation is running or paused.

```css
animation-play-state: paused;
```

---

### 🔹 Example

```css
.box {
    animation-play-state: paused;
}

.box:hover {
    animation-play-state: running;
}
```

✔ Animation runs on hover

---

# 🔹 Animation Shorthand Property

## 📌 Overview

Combine all properties into one line.

### 🔹 Syntax

```css
animation: name duration timing-function delay iteration-count direction fill-mode play-state;
```

---

### 🔹 Example

```css
animation: move 2s ease-in 1s infinite alternate forwards;
```

### ✅ Explanation

* `move` → animation name
* `2s` → duration
* `ease-in` → speed curve
* `1s` → delay
* `infinite` → repeats forever
* `alternate` → forward/backward
* `forwards` → keep final state

---

# 🔥 Practical Example

```html
<html>
<head>
    <style>
        .box {
            width: 100px;
            height: 100px;
            background-color: blue;
            animation: move 2s ease-in 1s infinite alternate forwards;
        }

        @keyframes move {
            from {
                transform: translateX(0);
                background-color: blue;
            }
            to {
                transform: translateX(200px);
                background-color: green;
            }
        }
    </style>
</head>
<body>
    <div class="box"></div>
</body>
</html>
```

✔ Moves box + changes color
✔ Smooth animation

---

# ⚡ Best Practices

### ✅ 1. Use Animations Purposefully

* Avoid unnecessary animations
* Focus on user experience

---

### ✅ 2. Animate Efficient Properties

✔ Prefer:

* `transform`
* `opacity`

❌ Avoid heavy properties like:

* `width`
* `top/left` (can cause reflow)

---

### ✅ 3. Ensure Accessibility

* Allow users to reduce motion
* Avoid excessive flashing/movement

---

# 🔥 Final Summary

| Property                  | Purpose                 |
| ------------------------- | ----------------------- |
| @keyframes                | Defines animation steps |
| animation-name            | Links animation         |
| animation-duration        | Time of animation       |
| animation-delay           | Start delay             |
| animation-timing-function | Speed curve             |
| animation-iteration-count | Repetition              |
| animation-direction       | Direction               |
| animation-fill-mode       | Final state             |
| animation-play-state      | Pause/run               |

---
