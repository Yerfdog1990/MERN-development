# Bootstrap Carousel 

## Table of Contents
- [How It Works](#how-it-works)
- [Basic Example](#basic-example)
- [Indicators](#indicators)
- [Captions](#captions)
- [Crossfade](#crossfade)
- [Autoplaying Carousels](#autoplaying-carousels)
- [Per-Item Interval](#per-item-interval)
- [Autoplay Without Controls](#autoplay-without-controls)
- [Disable Touch Swiping](#disable-touch-swiping)
- [Dark Variant](#dark-variant)
- [Custom Transition](#custom-transition)
- [Sass Variables](#sass-variables)
- [Usage: Data Attributes & JavaScript](#usage-data-attributes--javascript)
- [Options Reference](#options-reference)
- [Methods Reference](#methods-reference)
- [Events Reference](#events-reference)

---

## How It Works

The carousel is a **slideshow component** for cycling through a series of content — images, text, or custom markup — built with **CSS 3D transforms** and JavaScript.

Key points to remember:

- Carousels **must be manually initialized** using the carousel constructor method. Without initialization, event listeners (especially touch/swipe support) won't be registered until the user explicitly activates a control.
- **Exception:** Carousels with `data-bs-ride="carousel"` are auto-initialized on page load. Do **not** also initialize these with the constructor method.
- **Nested carousels are not supported.**
- The animation effect respects the `prefers-reduced-motion` media query.
- For accessibility, **autoplaying carousels are discouraged**. If used, provide a pause/stop control (see WCAG 2.2 SC 2.2.2).

---

## Basic Example

A minimal carousel with three slides and previous/next controls.

> Use `<button>` elements for controls (preferred), or `<a>` elements with `role="button"`.

```html
<div id="carouselExample" class="carousel slide">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="..." class="d-block w-100" alt="...">
    </div>
    <div class="carousel-item">
      <img src="..." class="d-block w-100" alt="...">
    </div>
    <div class="carousel-item">
      <img src="..." class="d-block w-100" alt="...">
    </div>
  </div>
  <button class="carousel-control-prev" type="button"
    data-bs-target="#carouselExample" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button"
    data-bs-target="#carouselExample" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
```

**Important rules:**
- Always add the `.active` class to one `.carousel-item`, otherwise the carousel won't be visible.
- Set a **unique `id`** on each `.carousel` element — controls use `data-bs-target` to match it.
- Carousels do **not** auto-normalize slide dimensions; use utilities or custom CSS to size content.

---

## Indicators

Indicators let users **jump directly to a specific slide**. Add a `.carousel-indicators` container with buttons that use `data-bs-slide-to` (0-indexed).

```html
<div id="carouselExampleIndicators" class="carousel slide">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators"
      data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators"
      data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators"
      data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="..." class="d-block w-100" alt="...">
    </div>
    <div class="carousel-item">
      <img src="..." class="d-block w-100" alt="...">
    </div>
    <div class="carousel-item">
      <img src="..." class="d-block w-100" alt="...">
    </div>
  </div>
  <button class="carousel-control-prev" type="button"
    data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button"
    data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
```

---

## Captions

Add `.carousel-caption` inside any `.carousel-item` to overlay text on a slide.

- Use `.d-none .d-md-block` to hide captions on small screens and show on medium+ screens.

```html
<div id="carouselExampleCaptions" class="carousel slide">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions"
      data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions"
      data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions"
      data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="..." class="d-block w-100" alt="...">
      <div class="carousel-caption d-none d-md-block">
        <h5>First slide label</h5>
        <p>Some representative placeholder content for the first slide.</p>
      </div>
    </div>
    <div class="carousel-item">
      <img src="..." class="d-block w-100" alt="...">
      <div class="carousel-caption d-none d-md-block">
        <h5>Second slide label</h5>
        <p>Some representative placeholder content for the second slide.</p>
      </div>
    </div>
    <div class="carousel-item">
      <img src="..." class="d-block w-100" alt="...">
      <div class="carousel-caption d-none d-md-block">
        <h5>Third slide label</h5>
        <p>Some representative placeholder content for the third slide.</p>
      </div>
    </div>
  </div>
  <button class="carousel-control-prev" type="button"
    data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button"
    data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
```

---

## Crossfade

Replace the default slide animation with a **fade transition** by adding `.carousel-fade` to the `.carousel` element.

> For text-only slides, consider adding `.bg-body` or custom CSS to `.carousel-item` for proper crossfading.

```html
<div id="carouselExampleFade" class="carousel slide carousel-fade">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="..." class="d-block w-100" alt="...">
    </div>
    <div class="carousel-item">
      <img src="..." class="d-block w-100" alt="...">
    </div>
    <div class="carousel-item">
      <img src="..." class="d-block w-100" alt="...">
    </div>
  </div>
  <button class="carousel-control-prev" type="button"
    data-bs-target="#carouselExampleFade" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button"
    data-bs-target="#carouselExampleFade" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
```

---

## Autoplaying Carousels

### Autoplay on Page Load (`ride="carousel"`)

Set `data-bs-ride="carousel"` to start cycling automatically when the page loads. Hovering pauses it by default.

```html
<div id="carouselExampleAutoplaying" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="..." class="d-block w-100" alt="...">
    </div>
    <div class="carousel-item">
      <img src="..." class="d-block w-100" alt="...">
    </div>
    <div class="carousel-item">
      <img src="..." class="d-block w-100" alt="...">
    </div>
  </div>
  <button class="carousel-control-prev" type="button"
    data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button"
    data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
```

### Autoplay After First Interaction (`ride="true"`)

Setting `data-bs-ride="true"` means the carousel **won't autoplay on load** — it waits for the user to manually cycle the first item, then starts autoplaying.

```html
<div id="carouselExampleRide" class="carousel slide" data-bs-ride="true">
  <!-- carousel-inner and controls same as above -->
</div>
```

| `ride` value | Behavior |
|---|---|
| `"carousel"` | Autoplays immediately on page load |
| `true` | Autoplays only after first user interaction |
| `false` (default) | Never autoplays |

> **Accessibility note:** Autoplaying carousels can cause usability and accessibility issues. Always provide a pause/stop control if you use them. See WCAG 2.2 SC 2.2.2.

---

## Per-Item Interval

Override the global interval for individual slides using `data-bs-interval=""` on a `.carousel-item`.

```html
<div id="carouselExampleInterval" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active" data-bs-interval="10000">
      <!-- stays for 10 seconds -->
      <img src="..." class="d-block w-100" alt="...">
    </div>
    <div class="carousel-item" data-bs-interval="2000">
      <!-- stays for 2 seconds -->
      <img src="..." class="d-block w-100" alt="...">
    </div>
    <div class="carousel-item">
      <!-- uses the global default (5000ms) -->
      <img src="..." class="d-block w-100" alt="...">
    </div>
  </div>
  <!-- controls... -->
</div>
```

---

## Autoplay Without Controls

A purely automatic carousel — no previous/next buttons. Use `.d-block` and `.w-100` on images to avoid default browser image alignment issues.

```html
<div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="..." class="d-block w-100" alt="...">
    </div>
    <div class="carousel-item">
      <img src="..." class="d-block w-100" alt="...">
    </div>
    <div class="carousel-item">
      <img src="..." class="d-block w-100" alt="...">
    </div>
  </div>
</div>
```

---

## Disable Touch Swiping

By default, carousels support left/right swipe on touchscreen devices. Disable this with `data-bs-touch="false"`.

```html
<div id="carouselExampleControlsNoTouching" class="carousel slide" data-bs-touch="false">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="..." class="d-block w-100" alt="...">
    </div>
    <div class="carousel-item">
      <img src="..." class="d-block w-100" alt="...">
    </div>
    <div class="carousel-item">
      <img src="..." class="d-block w-100" alt="...">
    </div>
  </div>
  <!-- controls... -->
</div>
```

---

## Dark Variant

> ⚠️ **Deprecated in Bootstrap v5.3.0.** Use `data-bs-theme="dark"` instead.

**Old approach (deprecated):** Add `.carousel-dark` to the `.carousel` element.

```html
<div id="carouselExampleDark" class="carousel carousel-dark slide">
  <!-- ... -->
</div>
```

**New approach (recommended):** Set `data-bs-theme="dark"` on the carousel, a parent, or the root element.

```html
<div id="carouselExampleDark" class="carousel slide" data-bs-theme="dark">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleDark"
      data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleDark"
      data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleDark"
      data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active" data-bs-interval="10000">
      <img src="..." class="d-block w-100" alt="...">
      <div class="carousel-caption d-none d-md-block">
        <h5>First slide label</h5>
        <p>Some representative placeholder content for the first slide.</p>
      </div>
    </div>
    <!-- more items... -->
  </div>
  <!-- controls... -->
</div>
```

---

## Custom Transition

Change the transition duration using the Sass variable `$carousel-transition-duration` before compiling, or override via custom CSS.

> If applying multiple transitions, **always define `transform` first**.

```css
/* Custom CSS override */
.carousel-item {
  transition: transform 2s ease, opacity 0.5s ease-out;
}
```

---

## Sass Variables

These variables control the carousel's appearance and can be customized before compiling Bootstrap's Sass.

```scss
// scss/_variables.scss

// Controls
$carousel-control-color:             $white;
$carousel-control-width:             15%;
$carousel-control-opacity:           .5;
$carousel-control-hover-opacity:     .9;
$carousel-control-transition:        opacity .15s ease;
$carousel-control-icon-filter:       null;

// Indicators
$carousel-indicator-width:           30px;
$carousel-indicator-height:          3px;
$carousel-indicator-hit-area-height: 10px;
$carousel-indicator-spacer:          3px;
$carousel-indicator-opacity:         .5;
$carousel-indicator-active-bg:       $white;
$carousel-indicator-active-opacity:  1;
$carousel-indicator-transition:      opacity .6s ease;

// Captions
$carousel-caption-width:             70%;
$carousel-caption-color:             $white;
$carousel-caption-padding-y:         1.25rem;
$carousel-caption-spacer:            1.25rem;

// Icon sizes
$carousel-control-icon-width:        2rem;

// Icon SVGs
$carousel-control-prev-icon-bg: url("data:image/svg+xml,...");
$carousel-control-next-icon-bg: url("data:image/svg+xml,...");

// Transition
$carousel-transition-duration:       .6s;
$carousel-transition:                transform $carousel-transition-duration ease-in-out;

// Dark variant (deprecated in v5.3.4)
$carousel-dark-indicator-active-bg:  $black;
$carousel-dark-caption-color:        $black;
$carousel-dark-control-icon-filter:  invert(1) grayscale(100);
```

---

## Usage: Data Attributes & JavaScript

### Via Data Attributes

Control carousel behavior declaratively in HTML:

| Attribute | Values | Description |
|---|---|---|
| `data-bs-slide` | `prev` / `next` | Move to previous or next slide |
| `data-bs-slide-to` | `0`, `1`, `2`... | Jump to a specific slide index |
| `data-bs-ride` | `"carousel"` / `true` | Enable autoplay |
| `data-bs-touch` | `true` / `false` | Enable/disable swipe |
| `data-bs-interval` | number (ms) | Per-item delay override |

### Via JavaScript

Initialize a carousel manually:

```javascript
const carousel = new bootstrap.Carousel('#myCarousel')
```

Initialize with custom options:

```javascript
const myCarouselElement = document.querySelector('#myCarousel')

const carousel = new bootstrap.Carousel(myCarouselElement, {
  interval: 2000,
  touch: false
})
```

> **Note:** As of Bootstrap 5.2.0, you can also pass config as a JSON string via `data-bs-config`:
> ```html
> <div class="carousel" data-bs-config='{"interval": 3000, "wrap": false}'>
> ```
> Individual `data-bs-*` attributes override `data-bs-config` values.

---

## Options Reference

| Name | Type | Default | Description |
|---|---|---|---|
| `interval` | number | `5000` | Delay (ms) between auto-cycling slides |
| `keyboard` | boolean | `true` | React to keyboard events |
| `pause` | string / boolean | `"hover"` | Pause on `mouseenter`; resume on `mouseleave`. Set `false` to never pause. On touch devices with `"hover"`, pauses for two intervals after `touchend`. |
| `ride` | string / boolean | `false` | `"carousel"` = autoplay on load; `true` = autoplay after first user interaction; `false` = never autoplay |
| `touch` | boolean | `true` | Support left/right swipe on touchscreens |
| `wrap` | boolean | `true` | Cycle continuously (`true`) or stop at ends (`false`) |

---

## Methods Reference

> All API methods are **asynchronous** — they return to the caller as soon as the transition starts, not when it ends. Method calls on a transitioning component are ignored.

| Method | Description |
|---|---|
| `cycle` | Starts cycling slides left to right |
| `pause` | Stops the carousel from cycling |
| `prev` | Cycles to the previous slide |
| `next` | Cycles to the next slide |
| `nextWhenVisible` | Like `next`, but skips cycling if the carousel or its parent isn't visible |
| `to(index)` | Cycles to a specific slide (0-based index) |
| `dispose` | Destroys the carousel instance and removes stored DOM data |
| `getInstance(element)` | Static — returns the carousel instance for a DOM element |
| `getOrCreateInstance(element)` | Static — returns existing instance or creates a new one |

```javascript
const myCarousel = bootstrap.Carousel.getInstance('#myCarousel')

myCarousel.next()      // go to next slide
myCarousel.prev()      // go to previous slide
myCarousel.to(2)       // jump to slide index 2
myCarousel.pause()     // stop cycling
myCarousel.cycle()     // start cycling
myCarousel.dispose()   // destroy instance
```

---

## Events Reference

All carousel events fire on the `.carousel` element itself. Each event includes these additional properties:

| Property | Description |
|---|---|
| `direction` | Direction of slide — `"left"` or `"right"` |
| `relatedTarget` | The DOM element being slid into the active position |
| `from` | Index of the current (outgoing) item |
| `to` | Index of the next (incoming) item |

| Event type | Fires when... |
|---|---|
| `slide.bs.carousel` | Immediately when `slide` is called (before transition) |
| `slid.bs.carousel` | After the slide transition has fully completed |

```javascript
const myCarousel = document.getElementById('myCarousel')

// Fires before the transition
myCarousel.addEventListener('slide.bs.carousel', event => {
  console.log('Sliding from:', event.from, '→ to:', event.to)
  console.log('Direction:', event.direction)
})

// Fires after the transition completes
myCarousel.addEventListener('slid.bs.carousel', event => {
  console.log('Slide complete!')
})
```

---