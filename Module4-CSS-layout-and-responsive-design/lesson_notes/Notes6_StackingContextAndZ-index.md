
---

# 🧱 CSS Stacking Context and z-index 

## 🔹 Overview

The **stacking order** in CSS determines how elements are layered on top of each other along the **z-axis (depth)**.

👉 By default, elements are stacked based on:

1. The root element (`<html>`)
2. Non-positioned elements (`position: static`)
3. Positioned elements (`position: relative`, `absolute`, `fixed`, `sticky`)

---

## 🔹 Default Stacking Order

* Elements without positioning appear in the order they are written in HTML
* Positioned elements appear above non-positioned elements
* Later elements overlap earlier ones if they share the same level

---

## 🔹 Example 1: Default Stacking Order

```html
<!DOCTYPE html>
<html>

<head>
    <title>Default stacking order</title>

    <style>
        .box {
            box-sizing: border-box;
            font-family: Arial;
            color: #eee;
            width: 125px;
            height: 125px;
            text-align: center;
        }

        .blue,
        .green {
            position: absolute;
        }

        .red {
            background: red;
        }

        .green {
            background: green;
            top: 40px;
            left: 40px;
        }

        .blue {
            background: blue;
            top: 80px;
            left: 80px;
        }
    </style>
</head>

<body>
    <div class="box green">Positioned</div>
    <div class="box blue">Positioned</div>
    <div class="box red">Non-positioned</div>
</body>

</html>
```

### 📊 Explanation:

* Green and blue boxes are **positioned**
* Red box is **non-positioned**
* Positioned elements appear above non-positioned ones
* Overlapping depends on order in HTML

---

## 🔹 z-index Property

The **`z-index`** property controls the vertical stacking order.

### 👉 Key Rule:

* Higher `z-index` → appears **on top**
* Lower `z-index` → appears **behind**

### ⚠️ Important:

* `z-index` only works on **positioned elements**
* (`position` must NOT be `static`)

---

## 🔹 Example 2: Using z-index

```html
<!DOCTYPE html>
<html>

<head>
    <title>Stacking with z-index</title>

    <style>
        .box {
            box-sizing: border-box;
            font-family: Arial;
            color: #eee;
            width: 125px;
            height: 125px;
            text-align: center;
        }

        .blue,
        .green {
            position: absolute;
        }

        .red {
            background: red;
            z-index: 100;
            /* No effect since red is non-positioned */
        }

        .green {
            background: green;
            top: 40px;
            left: 40px;
            z-index: 3;
        }

        .blue {
            background: blue;
            top: 80px;
            left: 80px;
            z-index: 2;
        }
    </style>
</head>

<body>
    <div class="box green">Positioned</div>
    <div class="box blue">Positioned</div>
    <div class="box red">Non-positioned</div>
</body>

</html>
```

### 📊 Explanation:

* Green (`z-index: 3`) appears above blue (`z-index: 2`)
* Red has `z-index: 100` but:

    * ❌ It is not positioned → no effect

---

## 🔹 Stacking Context

A **stacking context** is a container that controls how its child elements are layered.

👉 Each stacking context:

* Is independent of others
* Manages its own stacking order

---

## 🔹 Example 3: Understanding Stacking Context

```html
<!DOCTYPE html>
<html>

<head>
    <title>Stacking context</title>

    <style>
        .box {
            box-sizing: border-box;
            font-family: Arial;
            color: #eee;
            width: 125px;
            height: 125px;
            text-align: center;
        }

        .blue,
        .green,
        .orange,
        .purple {
            position: absolute;
        }

        .red {
            background: red;
            z-index: 100;
        }

        .green {
            background: green;
            top: 60px;
            left: 50px;
            z-index: 1;
        }

        .orange {
            width: 85px;
            height: 85px;
            left: 20px;
            background-color: orange;
            z-index: 3;
        }

        .purple {
            background-color: purple;
            top: 30px;
            left: 30px;
            z-index: 0;
        }

        .blue {
            background: blue;
            top: 100px;
            left: 100px;
            z-index: 2;
        }
    </style>
</head>

<body>
    <div class="box green">Positioned
        <div class="orange">Positioned</div>
    </div>

    <div class="box purple">Positioned</div>
    <div class="box blue">Positioned</div>
    <div class="box red">Non-positioned</div>
</body>

</html>
```

### 📊 Explanation:

* Orange is inside green → part of green’s stacking context
* Blue is outside → separate stacking context
* Even with higher `z-index`, elements may not overlap as expected due to different contexts

---

## 🔹 Example 4: Fixing Stacking Context Issue

👉 Goal: Make blue appear above orange

### ✔️ Solution:

* Move blue inside green (same stacking context)

```html
<!DOCTYPE html>
<html>

<head>
    <title>Modified stacking context</title>

    <style>
        .box {
            box-sizing: border-box;
            font-family: Arial;
            color: #eee;
            width: 125px;
            height: 125px;
            text-align: center;
        }

        .blue,
        .green,
        .orange,
        .purple {
            position: absolute;
        }

        .red {
            background: red;
            z-index: 100;
        }

        .green {
            background: green;
            top: 60px;
            left: 50px;
            z-index: 1;
        }

        .orange {
            width: 85px;
            height: 85px;
            top: 40px;
            left: 25px;
            background-color: orange;
            z-index: 3;
        }

        .purple {
            background-color: purple;
            top: 30px;
            left: 30px;
            z-index: 0;
        }

        .blue {
            background: blue;
            width: 85px;
            height: 85px;
            top: 25px;
            left: 10px;
            z-index: 2;
        }
    </style>
</head>

<body>
    <div class="box green">Positioned
        <div class="orange">Positioned</div>
        <div class="blue">Positioned</div>
    </div>

    <div class="box purple">Positioned</div>
    <div class="box red">Non-positioned</div>
</body>

</html>
```

### 📊 Explanation:

* Blue and orange are now in the **same stacking context**
* Blue (`z-index: 2`) can now be compared directly with orange (`z-index: 3`)

---

## 🔹 Key Takeaways

* Stacking order determines how elements overlap
* `z-index` controls vertical layering
* Only works on **positioned elements**
* Higher `z-index` = higher priority
* Stacking contexts isolate elements
* Elements in different contexts cannot directly overlap using `z-index`

---

## 🧠 Final Summary

CSS stacking context and `z-index` are essential for:

* Overlapping elements
* Modals and popups
* Layered UI designs

👉 Best Practices:

* Always ensure elements are **positioned** when using `z-index`
* Be mindful of **stacking contexts**
* Keep `z-index` values simple and consistent

---

