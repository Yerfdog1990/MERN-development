# CSS Properties 

---

## Overview

CSS properties are the foundation of web design, used to style and control the behaviour of HTML elements. They define how elements look and interact on a webpage.

- Used to control layout, colors, fonts, spacing, and animations on web pages.
- Essential for making web pages responsive and accessible across devices.
- Help maintain consistency and efficiency in web design and development.

### Example — Background Properties Combined

```css
#myDIV {
    width: 400px;
    height: 299px;
    background-color: green;
    background-repeat: no-repeat;
    background-image: url("logo.png");
    background-blend-mode: normal;
    background-size: contain;
}
```

---

## CSS Properties — Grouped by Category

---

## 1. At-Rules (`@`)

| Property | Description |
|---|---|
| `@charset` | Specifies the character encoding used in the style sheet |
| `@keyframes` | Specifies the animation rule — defines keyframe steps |
| `@media` | Applies a set of styles for different media/devices using Media Queries |

---

## 2. Alignment & Flexbox Properties

These properties control how items are aligned and distributed within flex or grid containers.

| Property | Description |
|---|---|
| `align-content` | Changes the behavior of the `flex-wrap` property; aligns flex lines |
| `align-items` | Sets the alignment of items inside a flexible container |
| `align-self` | Aligns a specific selected item in the flexible container |
| `justify-content` | Aligns flex container items when there is available space |
| `order` | Sets the order of each flexible item relative to other items in the container |
| `flex` | Shorthand combining `flex-grow`, `flex-shrink`, and `flex-basis` |
| `flex-basis` | Sets the initial size of a flexible item |
| `flex-direction` | Sets the direction of flexible items inside a div |
| `flex-flow` | Makes flexible items reversible and wrappable if required |
| `flex-grow` | Specifies how much an item grows compared to other items in the container |
| `flex-shrink` | Specifies how much an item shrinks compared to other items in the container |
| `flex-wrap` | Specifies whether flex items are forced into a single line or wrapped onto multiple lines |

---

## 3. Animation Properties

These properties control CSS animations and their behaviour.

| Property | Description |
|---|---|
| `animation-delay` | Specifies the delay before an animation starts |
| `animation-direction` | Defines the direction of the animation (forward, reverse, alternate) |
| `animation-duration` | Defines how long one animation cycle takes to complete |
| `animation-fill-mode` | Defines how styles are applied before and after the animation |
| `animation-iteration-count` | Specifies how many times the animation will repeat |
| `animation-name` | Specifies the name of the `@keyframes` describing the animation |
| `animation-play-state` | Specifies whether the animation is running or paused |
| `animation-timing-function` | Specifies how the animation transitions through keyframes (e.g. ease, linear) |

---

## 4. Background Properties

These properties control the background appearance of elements.

| Property | Description |
|---|---|
| `background-attachment` | Sets whether a background image scrolls with the page or stays fixed |
| `background-blend-mode` | Defines the blending mode of each background layer |
| `background-clip` | Defines how far the background color or image should extend |
| `background-color` | Sets the background color of an element |
| `background-image` | Sets one or more background images for an element |
| `background-origin` | Adjusts the origin position of the background image |
| `background-position` | Sets the initial position of the background image |
| `background-repeat` | Controls whether and how the background image repeats |
| `background-size` | Sets the size of the background image |

---

## 5. Border Properties

These properties control the borders around elements.

| Property | Description |
|---|---|
| `border` | Shorthand to style all four sides of a border at once |
| `border-color` | Sets the color of the border |
| `border-style` | Sets the line style for all four sides of the border |
| `border-width` | Sets the width of all four sides of the border |
| `border-radius` | Rounds the corners of an element's outer border |
| `border-collapse` | Sets whether table cell borders are collapsed or separated |
| `border-spacing` | Sets the distance between neighboring cell borders in a table |
| `border-image` | Creates a border using an image instead of a normal border |
| `border-image-outset` | Specifies the distance the border image extends beyond the border box |
| `border-image-repeat` | Controls scaling and tiling of the border image |
| `border-image-slice` | Divides/slices the border image into regions |
| `border-image-source` | Specifies the image to be used as the border |
| `border-image-width` | Sets the width of the border image |

**Individual Side Properties:**

| Side | Color | Style | Width | Radius |
|---|---|---|---|---|
| Top | `border-top-color` | `border-top-style` | `border-top-width` | `border-top-left-radius` / `border-top-right-radius` |
| Bottom | `border-bottom-color` | `border-bottom-style` | `border-bottom-width` | `border-bottom-left-radius` / `border-bottom-right-radius` |
| Left | `border-left-color` | `border-left-style` | `border-left-width` | — |
| Right | `border-right-color` | `border-right-style` | `border-right-width` | — |

---

## 6. Box Model Properties

These properties control the sizing, spacing, and shadow of elements.

| Property | Description |
|---|---|
| `box-sizing` | Defines how total width and height of an element is calculated |
| `box-shadow` | Adds a shadow effect to the frame of an element |
| `box-decoration-break` | Controls box decoration after paragraph fragmentation |
| `height` | Sets the height of an element |
| `width` | Sets the width of an element |
| `max-height` | Sets the maximum height of an element |
| `max-width` | Defines the maximum width of an element |
| `min-height` | Sets the minimum height of an element |
| `min-width` | Defines the minimum width of an element |
| `margin-top` | Sets the top margin of an element |
| `margin-bottom` | Specifies the bottom margin of an element |
| `margin-left` | Sets the left margin of an element |
| `margin-right` | Sets the right margin of an element |
| `padding-top` | Sets the padding on the top of an element |
| `padding-bottom` | Sets the padding on the bottom of an element |
| `padding-left` | Sets the padding on the left side of an element |
| `padding-right` | Sets the padding on the right side of an element |
| `overflow-x` | Specifies whether to add a horizontal scroll bar |
| `overflow-y` | Specifies whether to add a vertical scroll bar |

---

## 7. Positioning Properties

These properties control the position and stacking of elements on the page.

| Property | Description |
|---|---|
| `display` | Defines how components are placed on the web page (block, inline, flex, grid, etc.) |
| `position` | Specifies the type of positioning for an element |
| `top` | Sets the top position of a positioned element |
| `bottom` | Sets the vertical position of a positioned element from the bottom |
| `left` | Specifies the horizontal position of a positioned element from the left |
| `right` | Affects the horizontal position of a positioned element from the right |
| `z-index` | Defines the stacking order of overlapping elements |
| `clear` | Specifies which sides of floating elements are not allowed to float |
| `clip` | Specifies a clipping rectangle for an absolutely positioned element |
| `visibility` | Specifies whether an element is visible or not |
| `isolation` | Defines whether an element must create a new stacking context |

---

## 8. Font & Text Properties

### Font Properties

| Property | Description |
|---|---|
| `font-family` | Sets the font of an element |
| `font-size` | Sets the font size of text |
| `font-weight` | Sets the weight/thickness of the font (bold, normal, etc.) |
| `font-style` | Styles text as normal, italic, or oblique |
| `font-variant` | Converts lowercase letters into uppercase (small-caps) |
| `font-stretch` | Makes text wider or narrower |
| `font-kerning` | Controls usage of kerning information stored in the font |
| `font-size-adjust` | Adjusts font size based on the height of lowercase letters |

### Text Properties

| Property | Description |
|---|---|
| `text-align` | Sets horizontal alignment of text in an element |
| `text-align-last` | Sets alignment of the last line before a line break |
| `text-decoration` | Decorates text content (underline, overline, line-through) |
| `text-decoration-color` | Sets the color of text decorations |
| `text-decoration-line` | Sets the type of text decoration line |
| `text-decoration-style` | Sets the style of the text decoration |
| `text-indent` | Sets indentation of the first line in a text block |
| `text-justify` | Controls spacing in justified text |
| `text-overflow` | Specifies how hidden overflow text is displayed |
| `text-transform` | Controls capitalization of text |
| `text-shadow` | Adds shadows to text |
| `letter-spacing` | Sets spacing between text characters |
| `word-spacing` | Increases or decreases white space between words |
| `word-break` | Specifies how words break at the end of a line |
| `word-wrap` | Breaks long words and wraps them onto the next line |
| `line-height` | Sets the amount of space used for lines of text |
| `white-space` | Controls text wrapping and white space handling |
| `direction` | Defines the direction of text/writing (ltr or rtl) |
| `unicode-bidi` | Determines how bidirectional text is handled in a document |
| `writing-mode` | Specifies whether lines of text are laid out horizontally or vertically |
| `hanging-punctuation` | Gives designers control over typography on the webpage |
| `hyphens` | Defines how words are hyphenated to create soft wrap opportunities |
| `tab-size` | Specifies the width of a tab character |
| `quotes` | Sets quotation marks for quotations used in sentences |
| `vertical-align` | Sets vertical alignment of a table box or inline element |

---

## 9. Grid Layout Properties

These properties define and control CSS Grid layouts.

| Property | Description |
|---|---|
| `grid` | Shorthand for all grid properties — offers grid-based layout with rows and columns |
| `grid-area` | Sets a grid item's size and location in a grid layout |
| `grid-template` | Defines grid columns, rows, and areas |
| `grid-template-areas` | Specifies named areas within the grid layout |
| `grid-template-columns` | Sets the number and size of grid columns |
| `grid-template-rows` | Sets the number and height of grid rows |
| `grid-column` | Specifies a grid item's size and location within a grid column |
| `grid-column-start` | Sets on which column line the item will start |
| `grid-column-end` | Sets on which column line the item will end |
| `grid-column-gap` | Sets the gap size between columns in a grid layout |
| `grid-row` | Specifies the size and location of an item in a grid row |
| `grid-row-start` | Defines the grid item's start position in a row |
| `grid-row-end` | Defines the grid item's end position in a row |
| `grid-row-gap` | Sets the gap size between grid row elements |
| `grid-gap` | Sets the gap size between both rows and columns in a grid layout |
| `grid-auto-columns` | Specifies the size of implicitly generated grid columns |
| `grid-auto-rows` | Specifies the size of implicitly generated grid rows |
| `grid-auto-flow` | Specifies how auto-placed items are flowed into the grid |

---

## 10. Column Layout Properties

| Property | Description |
|---|---|
| `column-count` | Divides content into a given number of columns |
| `column-fill` | Specifies whether columns are filled in a balanced manner |
| `column-gap` | Specifies the gap amount between columns |
| `columns` | Shorthand to set the number and width of columns |
| `column-rule` | Shorthand to define width, style, and color of the rule between columns |
| `column-rule-color` | Sets the color of the rule between columns |
| `column-rule-style` | Sets the style of the column rule |
| `column-rule-width` | Sets the width of the column rule |
| `column-span` | Sets how many columns an element spans across |
| `column-width` | Defines the width of the columns |

---

## 11. Transform & Transition Properties

| Property | Description |
|---|---|
| `transform` | Changes the coordinate space of the visual formatting model (rotate, scale, skew, translate) |
| `backface-visibility` | Decides whether the back face of an element is visible to the user |
| `perspective` | Gives perspective to 3D objects |
| `perspective-origin` | Defines the position at which the user is looking at a 3D object (vanishing point) |
| `transition` | Shorthand for all transition properties — creates transition effects |
| `transition-delay` | Defines the time to wait before starting the transition |
| `transition-duration` | Sets the time duration to complete the transition effect |
| `transition-property` | Displays the change in property of an element over a specified duration |

---

## 12. Visual Effects Properties

| Property | Description |
|---|---|
| `filter` | Sets the visual effect of an element (blur, brightness, contrast, etc.) |
| `mix-blend-mode` | Defines how an element's content blends with its background |
| `mask-image` | Sets a mask image for an element |
| `object-fit` | Specifies how image/video content fits inside its container |
| `object-position` | Specifies how an image or video is positioned (x/y) inside its content box |
| `opacity` | Sets the transparency level of an element |

---

## 13. List & Table Properties

| Property | Description |
|---|---|
| `list-style` | Shorthand to set list item styles |
| `list-style-image` | Sets an image as the list item marker |
| `list-style-position` | Specifies the position of the marker box relative to the list item |
| `list-style-type` | Specifies the appearance of the list item marker (disc, circle, square, etc.) |
| `table-layout` | Controls the layout algorithm used for a table |
| `border-collapse` | Sets whether table cell borders are collapsed into a single border |
| `border-spacing` | Sets the distance between neighboring cell borders |
| `caption-side` | Specifies the position of the table caption |
| `empty-cells` | Specifies whether to display borders in empty table cells |

---

## 14. Miscellaneous Properties

| Property | Description |
|---|---|
| `all` | Resets all element property values to their initial or inherited values |
| `content` | Generates content dynamically (used with `::before` / `::after`) |
| `cursor` | Specifies the mouse cursor to display when pointing to an element |
| `counter-increment` | Increments or decrements the value of a CSS counter |
| `counter-reset` | Creates or resets a CSS counter |
| `resize` | Allows the element to be resized by the user |
| `scroll-behavior` | Sets smooth animation of scroll position instead of a jump |
| `pointer-events` | Specifies whether an element responds to pointer events |
| `user-select` | Specifies whether the user can select text |
| `will-change` | Informs the browser how an element is expected to change (optimization) |
| `caret-color` | Sets the color of the cursor in text inputs and editable areas |
| `page-break-after` | Adds a page break after the specified element when printing |
| `page-break-before` | Adds a page break before the specified element when printing |
| `page-break-inside` | Adds page breaks inside the element when printing |
| `outline-color` | Sets the outline color of an element |
| `outline-offset` | Sets the space between the outline and the border of an element |
| `outline-style` | Sets the appearance of the outline |
| `outline-width` | Specifies the width of the outline |
| `cssText` | Sets or returns the value of an inline style declaration |
| `length` | Returns the number of style declarations for an element |
| `parentRule` | Returns the CSS Rule Object representing the rule-set |

---

## Best Practices for CSS Properties

1. **Use descriptive class and ID names** — improves readability and maintainability of the codebase.
2. **Group similar properties together** — keeps CSS organized and easier to scan.
3. **Use shorthand properties where possible** — reduces redundancy and keeps stylesheets concise.

### Common Shorthand Examples

```css
/* Instead of writing 4 separate margin properties: */
margin-top: 10px;
margin-right: 20px;
margin-bottom: 10px;
margin-left: 20px;

/* Use shorthand: */
margin: 10px 20px;

/* Border shorthand */
border: 2px solid black;   /* width | style | color */

/* Background shorthand */
background: #fff url("img.png") no-repeat center center / cover;

/* Font shorthand */
font: bold 16px/1.5 Arial, sans-serif;

/* Transition shorthand */
transition: color 0.3s ease-in-out;

/* Animation shorthand */
animation: slidein 1s ease-in-out infinite;
```

---

## Quick Category Summary

```
Layout:       display, position, top, bottom, left, right, z-index, float, clear
Box Model:    width, height, margin, padding, border, box-sizing, overflow
Flexbox:      flex, flex-direction, justify-content, align-items, flex-wrap
Grid:         grid-template-columns, grid-template-rows, grid-gap, grid-area
Typography:   font-family, font-size, font-weight, line-height, text-align
Text Deco:    text-decoration, text-transform, text-shadow, letter-spacing
Background:   background-color, background-image, background-size, background-position
Animation:    animation, @keyframes, transition, transform
Visual FX:    filter, opacity, mix-blend-mode, object-fit
Misc:         cursor, content, visibility, pointer-events, scroll-behavior
```

---

