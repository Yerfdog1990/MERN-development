# CSS Links Style

---

## Overview

Styling links in CSS is a fundamental web design practice that enhances navigation and user interaction. It helps create a consistent and visually appealing experience that aligns with a website's design or brand.

- CSS allows customization of link colors, fonts, and decorations.
- Different link states (normal, hover, active, visited) improve usability.
- Well-styled links make navigation clearer and more intuitive.
- Consistent link styling strengthens overall website branding.

---

## Link States — The 4 Pseudo-Classes

Before styling links, it is important to understand the 4 states a link can be in:

| State | Pseudo-class | When it applies |
|---|---|---|
| Normal (unvisited) | `a` | Default state — link has not been clicked |
| Hovered | `a:hover` | User's mouse is over the link |
| Active | `a:active` | Link is being clicked (mouse held down) |
| Visited | `a:visited` | Link has been clicked/visited before |

> **Important:** For pseudo-classes to work correctly, always declare them in this order: `a` → `a:visited` → `a:hover` → `a:active` (remembered as **LoVe HAte**).

---

## 7 Approaches to Style Links in CSS

---

### Approach 1 — Basic Link Styling

Basic styling customizes links to match the website's visual theme.

**Key Points:**
- Changes default link color and font.
- Removes or modifies underlines.
- Maintains a clean and consistent look.

**Code Example:**
```css
a {
    color: royalblue;
    text-decoration: none;
    font-weight: bold;
}
```

**Full Example:**
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <style>
        a {
            color: royalblue;
            text-decoration: none;
            font-weight: bold;
        }
    </style>
</head>
<body>
    <a href="#">This is a styled link</a>
</body>
</html>
```

**What each property does:**
| Property | Effect |
|---|---|
| `color: royalblue` | Changes default blue link color to royal blue |
| `text-decoration: none` | Removes the default underline |
| `font-weight: bold` | Makes the link text bold |

---

### Approach 2 — Hover Effects

Hover effects provide visual feedback when users interact with links, improving usability.

**Key Points:**
- Changes color or background on hover.
- Adds underline or shadow effects.
- Use `transition` for smooth, animated color changes.

**Code Example:**
```css
a {
    color: royalblue;
    text-decoration: none;
    font-weight: bold;
    transition: color 0.3s ease-in-out, background-color 0.3s ease-in-out;
}

a:hover {
    color: crimson;
    text-decoration: underline;
    background-color: lightgray;
}
```

**What happens on hover:**
| Property | Default State | Hover State |
|---|---|---|
| `color` | royalblue | crimson |
| `text-decoration` | none | underline |
| `background-color` | none | lightgray |
| `transition` | — | 0.3s smooth change |

> **Tip:** Always add `transition` to the base `a` selector (not `a:hover`) so the animation plays both when entering and leaving the hover state.

---

### Approach 3 — Active Link Styling

Active styling visually indicates a link is being clicked, giving users instant feedback.

**Key Points:**
- Applies styles during the click action (mouse held down).
- Gives immediate visual feedback to the user.
- Uses `a:active` pseudo-class.

**Code Example:**
```css
a {
    color: royalblue;
    text-decoration: none;
    font-weight: bold;
    transition: color 0.2s ease-in-out, background-color 0.2s ease-in-out;
}

a:active {
    color: seagreen;
    text-decoration: underline;
    background-color: lightyellow;
}
```

**What happens on click:**
| Property | Default State | Active (clicked) State |
|---|---|---|
| `color` | royalblue | seagreen |
| `text-decoration` | none | underline |
| `background-color` | none | lightyellow |

---

### Approach 4 — Visited Link Styling

Visited styling helps users identify previously clicked links, improving navigation experience.

**Key Points:**
- Uses different colors for visited links.
- Helps users distinguish visited from unvisited links.
- Improves overall navigation experience.

**Code Example:**
```css
a {
    color: royalblue;
    text-decoration: none;
    font-weight: bold;
}

a:visited {
    color: purple;
    text-decoration: none;
}
```

**What changes after visiting:**
| Property | Unvisited | Visited |
|---|---|---|
| `color` | royalblue | purple |
| `text-decoration` | none | none |

> **Note:** Browsers restrict what properties can be changed with `a:visited` for privacy reasons. Mainly `color`, `background-color`, `border-color`, and `outline-color` are supported.

---

### Approach 5 — Custom Underline Styles

Custom underlines enhance link appearance beyond the browser's default underline, using CSS pseudo-elements.

**Key Points:**
- Uses `::after` pseudo-element instead of `text-decoration`.
- Allows control over underline color, thickness, and position.
- Creates a modern, polished visual effect.

**Code Example:**
```css
a {
    color: royalblue;
    text-decoration: none;
    position: relative;   /* required for ::after positioning */
}

a::after {
    content: '';
    display: block;
    width: 100%;
    height: 2px;
    background: royalblue;
    position: absolute;
    bottom: -2px;
    left: 0;
}
```

**How `::after` creates the underline:**
| Property | Purpose |
|---|---|
| `content: ''` | Required to make `::after` render (empty content) |
| `display: block` | Makes the pseudo-element a block to control width/height |
| `width: 100%` | Spans the full width of the link text |
| `height: 2px` | Sets the underline thickness |
| `position: absolute` | Positions relative to the parent `<a>` tag |
| `bottom: -2px` | Places the line just below the text |

---

### Approach 6 — Button-Like Links

Button-style links make links look like clickable buttons, making them more prominent.

**Key Points:**
- Adds padding and background color to the link.
- Uses `border-radius` to create a button shape.
- Adds hover state to change button color for interactivity.

**Code Example:**
```css
a {
    color: white;
    background-color: royalblue;
    padding: 10px 20px;
    text-decoration: none;
    border-radius: 5px;
    display: inline-block;
    transition: background-color 0.3s ease-in-out;
}

a:hover {
    background-color: green;
}
```

**Key properties explained:**
| Property | Purpose |
|---|---|
| `background-color` | Fills the link with a solid color like a button |
| `padding: 10px 20px` | Adds space inside the link (top/bottom, left/right) |
| `border-radius: 5px` | Rounds the corners for a button shape |
| `display: inline-block` | Allows padding and sizing to apply correctly |
| `transition` | Smoothly animates the hover color change |

---

### Approach 7 — Animated Link Styles

Animated styles add smooth, engaging transitions to link interactions using CSS `::after` and `transition`.

**Key Points:**
- Uses CSS `transition` to animate a growing underline on hover.
- Creates an engaging visual effect without JavaScript.
- Combines `::after` pseudo-element with `width` animation.

**Code Example:**
```css
a {
    color: royalblue;
    text-decoration: none;
    position: relative;
    transition: color 0.3s ease-in-out;
}

a::after {
    content: '';
    display: block;
    width: 0;              /* starts at 0 — hidden */
    height: 2px;
    background: crimson;
    transition: width 0.3s;
    position: absolute;
    bottom: -2px;
    left: 0;
}

a:hover {
    color: crimson;
}

a:hover::after {
    width: 100%;           /* expands to full width on hover */
}
```

**How the animation works:**
```
Default state:  underline width = 0  (invisible)
On hover:       underline width = 100% (grows left to right over 0.3s)
                link color changes from royalblue → crimson
```

---

## Comparison Table — All 7 Approaches

| Approach | Pseudo-class / Method | Key Effect | Best Used For |
|---|---|---|---|
| Basic Styling | `a` | Color + removes underline | All links (base style) |
| Hover Effects | `a:hover` | Color/bg change on mouse over | Interactive navigation links |
| Active Styling | `a:active` | Style change during click | Click feedback |
| Visited Styling | `a:visited` | Different color after visiting | Navigation, article links |
| Custom Underline | `a::after` | Styled custom underline | Modern, branded links |
| Button-Like | `a` + padding + bg | Looks like a button | CTAs, prominent actions |
| Animated | `a::after` + transition | Animated underline grows | Modern, engaging UI |

---

## Quick Reference — Link Styling Cheat Sheet

```css
/* Base link */
a {
    color: royalblue;
    text-decoration: none;
    font-weight: bold;
    transition: color 0.3s ease-in-out;
}

/* Visited */
a:visited {
    color: purple;
}

/* Hover */
a:hover {
    color: crimson;
    text-decoration: underline;
}

/* Active (being clicked) */
a:active {
    color: seagreen;
}

/* Button-style link */
a.button {
    background-color: royalblue;
    color: white;
    padding: 10px 20px;
    border-radius: 5px;
    display: inline-block;
}

/* Animated underline */
a::after {
    content: '';
    display: block;
    width: 0;
    height: 2px;
    background: crimson;
    transition: width 0.3s;
    position: absolute;
    bottom: -2px;
    left: 0;
}
a:hover::after { width: 100%; }
```

---

