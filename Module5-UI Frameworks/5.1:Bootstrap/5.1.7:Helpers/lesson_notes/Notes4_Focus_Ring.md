# Bootstrap Focus Ring

## Overview

Utility classes that allow you to add and modify custom focus ring styles to elements and components. The `.focus-ring` helper removes the default `outline` on `:focus`, replacing it with a customizable `box-shadow` that can be more broadly styled.

## How It Works

The focus ring utility provides:
- **Custom Styling**: Replaces default browser outline with shadow-based ring
- **CSS Variables**: Uses CSS custom properties for runtime customization
- **Theme Integration**: Works with Bootstrap's color system
- **Flexible Configuration**: Multiple utility classes for different effects
- **Accessibility**: Maintains focus visibility while enhancing visual feedback

## Basic Usage

### Simple Focus Ring

Apply focus ring with default styling:

```html
<a href="#" class="d-inline-flex focus-ring py-1 px-2 text-decoration-none border rounded-2">
  Custom focus ring
</a>
```

## Customization Options

### CSS Variables

Modify the `--bs-focus-ring-*` CSS variables to change appearance:

```css
:root {
  --bs-focus-ring-width: 3px;
  --bs-focus-ring-opacity: 0.5;
  --bs-focus-ring-color: rgba(13, 110, 253, 0.5);
  --bs-focus-ring-x: 0;
  --bs-focus-ring-y: 0;
  --bs-focus-ring-blur: 0;
}
```

### Color Variants

Apply theme colors to focus rings:

```html
<a href="#" class="d-inline-flex focus-ring focus-ring-primary py-1 px-2 text-decoration-none border rounded-2">
  Primary focus ring
</a>
<a href="#" class="d-inline-flex focus-ring focus-ring-secondary py-1 px-2 text-decoration-none border rounded-2">
  Secondary focus ring
</a>
<a href="#" class="d-inline-flex focus-ring focus-ring-success py-1 px-2 text-decoration-none border rounded-2">
  Success focus ring
</a>
<a href="#" class="d-inline-flex focus-ring focus-ring-danger py-1 px-2 text-decoration-none border rounded-2">
  Danger focus ring
</a>
<a href="#" class="d-inline-flex focus-ring focus-ring-warning py-1 px-2 text-decoration-none border rounded-2">
  Warning focus ring
</a>
<a href="#" class="d-inline-flex focus-ring focus-ring-info py-1 px-2 text-decoration-none border rounded-2">
  Info focus ring
</a>
<a href="#" class="d-inline-flex focus-ring focus-ring-light py-1 px-2 text-decoration-none border rounded-2">
  Light focus ring
</a>
<a href="#" class="d-inline-flex focus-ring focus-ring-dark py-1 px-2 text-decoration-none border rounded-2">
  Dark focus ring
</a>
```

## Advanced Customization

### Offset Focus Ring

Create offset or blurry focus ring effects:

```html
<a href="#" class="d-inline-flex focus-ring py-1 px-2 text-decoration-none border rounded-2" style="--bs-focus-ring-x: 10px; --bs-focus-ring-y: 10px;">
  Offset focus ring
</a>

<a href="#" class="d-inline-flex focus-ring py-1 px-2 text-decoration-none border rounded-2" style="--bs-focus-ring-x: 10px; --bs-focus-ring-y: 10px; --bs-focus-ring-blur: 4px;">
  Blurry offset focus ring
</a>
```

### Custom Colors

Use any color with focus ring:

```html
<a href="#" class="d-inline-flex focus-ring py-1 px-2 text-decoration-none border rounded-2" style="--bs-focus-ring-color: #ff6b6b;">
  Custom color focus ring
</a>
```

## Component Integration

### Buttons with Focus Rings

```html
<button type="button" class="btn btn-primary focus-ring">
  Primary button with focus ring
</button>

<button type="button" class="btn btn-secondary focus-ring">
  Secondary button with focus ring
</button>

<button type="button" class="btn btn-success focus-ring">
  Success button with focus ring
</button>

<button type="button" class="btn btn-outline-primary focus-ring">
  Outline button with focus ring
</button>
```

### Form Controls

```html
<input type="text" class="form-control focus-ring" placeholder="Text input with focus ring">
<input type="email" class="form-control focus-ring" placeholder="Email with focus ring">
<select class="form-select focus-ring">
  <option>Select with focus ring</option>
</select>
<textarea class="form-control focus-ring" placeholder="Textarea with focus ring"></textarea>
```

### Cards and Containers

```html
<div class="card focus-ring">
  <div class="card-body">
    Card with focus ring on container
  </div>
</div>

<div class="card focus-ring focus-ring-primary">
  <div class="card-body">
    Card with primary focus ring
  </div>
</div>
```

## CSS Variables Reference

### Core Variables

| Variable | Default | Description |
|----------|----------|-------------|
| `--bs-focus-ring-width` | `3px` | Width of the focus ring |
| `--bs-focus-ring-opacity` | `0.5` | Opacity of the focus ring |
| `--bs-focus-ring-color` | `rgba(var(--bs-primary-rgb), 0.25)` | Color of the focus ring |
| `--bs-focus-ring-x` | `0` | Horizontal offset of the focus ring |
| `--bs-focus-ring-y` | `0` | Vertical offset of the focus ring |
| `--bs-focus-ring-blur` | `0` | Blur radius of the focus ring |

### Sass Variables

```scss
$focus-ring-width:      3px;
$focus-ring-opacity:    0.5;
$focus-ring-color:      rgba(var(--bs-primary-rgb), 0.25);
$focus-ring-blur:       0;
$focus-ring-box-shadow: 0 0 $focus-ring-blur $focus-ring-width $focus-ring-color;
```

## Utility Classes

### Base Class

| Class | Description |
|-------|-------------|
| `.focus-ring` | Adds focus ring to element |

### Color Modifiers

| Class | Description |
|-------|-------------|
| `.focus-ring-primary` | Primary colored focus ring |
| `.focus-ring-secondary` | Secondary colored focus ring |
| `.focus-ring-success` | Success colored focus ring |
| `.focus-ring-danger` | Danger colored focus ring |
| `.focus-ring-warning` | Warning colored focus ring |
| `.focus-ring-info` | Info colored focus ring |
| `.focus-ring-light` | Light colored focus ring |
| `.focus-ring-dark` | Dark colored focus ring |

### Offset Modifiers

| Class | Description |
|-------|-------------|
| `.focus-ring-offset-1` | 0.25rem offset |
| `.focus-ring-offset-2` | 0.5rem offset |
| `.focus-ring-offset-3` | 1rem offset |

## Best Practices

### 1. Accessibility
- **Maintain Contrast**: Ensure focus ring color contrasts with background
- **Keyboard Navigation**: Test focus ring behavior with keyboard navigation
- **Screen Readers**: Verify focus rings don't interfere with screen reader announcements
- **Touch Devices**: Ensure focus rings work on touch interfaces

### 2. Performance
- **CSS Only**: Focus rings use pure CSS for optimal performance
- **Minimal JavaScript**: No JavaScript required for basic functionality
- **Hardware Acceleration**: CSS transforms benefit from GPU acceleration

### 3. Design Consistency
- **Unified Theme**: Use consistent colors across focus rings
- **Proper Sizing**: Match focus ring size to element importance
- **Visual Hierarchy**: Use focus rings to establish clear focus order

### 4. Common Use Cases

#### Navigation Focus
```html
<nav class="navbar">
  <a href="#" class="nav-link focus-ring">Home</a>
  <a href="#" class="nav-link focus-ring focus-ring-primary">About</a>
  <a href="#" class="nav-link focus-ring">Contact</a>
</nav>
```

#### Form Validation States
```html
<div class="mb-3">
  <input type="text" class="form-control focus-ring" id="validInput">
  <div class="valid-feedback">Looks good!</div>
  
  <input type="text" class="form-control focus-ring is-invalid" id="invalidInput">
  <div class="invalid-feedback">Please enter a valid value</div>
</div>
```

#### Interactive Elements
```html
<div class="d-grid gap-3">
  <button class="btn focus-ring">Button 1</button>
  <button class="btn focus-ring focus-ring-success">Button 2</button>
  <button class="btn focus-ring focus-ring-danger">Button 3</button>
</div>
```

## Advanced Techniques

### Animated Focus Rings

```css
.focus-ring {
  transition: all 0.3s ease;
}

.focus-ring:focus {
  transform: scale(1.05);
}
```

### Responsive Focus Rings

```css
@media (prefers-reduced-motion: no-preference) {
  .focus-ring {
    --bs-focus-ring-width: 4px;
    --bs-focus-ring-opacity: 0.75;
  }
}

@media (max-width: 768px) {
  .focus-ring {
    --bs-focus-ring-width: 2px;
  }
}
```

### Multi-layer Focus Rings

```html
<div class="focus-ring" style="--bs-focus-ring-width: 2px; --bs-focus-ring-color: rgba(255, 0, 0, 0.5); --bs-focus-ring-blur: 2px;">
  <div class="focus-ring-inner" style="--bs-focus-ring-width: 4px; --bs-focus-ring-color: rgba(0, 123, 255, 0.3);">
    Inner content
  </div>
</div>
```

## Troubleshooting

### Common Issues

1. **Focus Ring Not Visible**
   - Check if `.focus-ring` class is applied
   - Verify element is focusable (has tabindex)
   - Ensure CSS variables are properly set

2. **Incorrect Colors**
   - Verify CSS variable values are correct
   - Check for CSS specificity conflicts
   - Test with different background colors

3. **Positioning Issues**
   - Check offset values (x, y coordinates)
   - Verify blur radius is appropriate
   - Test with different element sizes

4. **Performance Problems**
   - Avoid excessive blur values
   - Use efficient CSS selectors
   - Minimize complex animations

## Migration Notes

### From Custom Focus Styles

If you have custom focus styles, migrate to focus ring utilities:

```css
/* Before */
.custom-focus:focus {
  outline: 2px solid #007bff;
  box-shadow: 0 0 0 2px rgba(0, 123, 255, 0.5);
}

/* After */
.custom-focus.focus-ring {
  /* Focus ring styles automatically applied */
}
```

## Browser Compatibility

Focus rings work in all modern browsers:
- **Chrome**: Full support with CSS custom properties
- **Firefox**: Excellent support with CSS transforms
- **Safari**: Good support with some limitations
- **Edge**: Full support for CSS variables
- **Mobile**: Works consistently across mobile browsers

## Summary

Bootstrap's Focus Ring utility provides:

- **Custom Styling**: Replace default outlines with shadow-based rings
- **CSS Variables**: Runtime customization via CSS custom properties
- **Theme Integration**: Works with Bootstrap color system
- **Accessibility**: Maintains focus visibility while enhancing visual feedback
- **Performance**: Pure CSS implementation with minimal overhead
- **Flexibility**: Multiple customization options for different use cases
- **Component Support**: Works with buttons, forms, navigation, and more

Use focus rings to create visually appealing, accessible interfaces that provide clear focus indicators and enhance user experience across all interaction methods.
