# Bootstrap Icon Link

## Overview

Quickly create stylized hyperlinks with Bootstrap Icons or other icons. The icon link helper component modifies default link styles to enhance appearance and quickly align any pairing of icon and text.

## How It Works

Icon links provide:
- **Automatic Alignment**: Uses inline flexbox styling with default gap value
- **Icon Sizing**: Icons automatically sized to 1em to match text font-size
- **Stylized Underlines**: Custom offset and color for underlines
- **Icon Compatibility**: Works with Bootstrap Icons or any icon/image
- **Accessibility**: Built-in support for decorative and meaningful icons

## Basic Usage

### Simple Icon Link

Add `.icon-link` class to any `<a>` element and insert an icon:

```html
<a class="icon-link" href="#">
  <svg xmlns="http://www.w3.org/2000/svg" class="bi" viewBox="0 0 16 16" aria-hidden="true">
    <path d="M8.186 1.113a.5.5 0 0 0-.372 0L1.846 3.5l2.404.961L10.404 2l-2.218-.887zm3.564 1.426L5.596 5 8 5.961 14.154 3.5l-2.404-.961zm3.25 1.7-6.5 2.6v7.922l6.5-2.6V4.24zM7.5 14.762V6.838L1 4.239v7.923l6.5 2.6zM7.443.184a1.5 1.5 0 0 1 1.114 0l7.129 2.852A.5.5 0 0 1 16 3.5v8.662a1 1 0 0 1-.629.928l-7.185 2.874a.5.5 0 0 1-.372 0L.63 13.09a1 1 0 0 1-.63-.928V3.5a.5.5 0 0 1 .314-.464L7.443.184z"/>
  </svg>
  Icon link
</a>
```

### Icon on the Right

Place the icon after the text:

```html
<a class="icon-link" href="#">
  Icon link
  <svg xmlns="http://www.w3.org/2000/svg" class="bi" viewBox="0 0 16 16" aria-hidden="true">
    <path d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
  </svg>
</a>
```

## Interactive States

### Hover Effects

Add `.icon-link-hover` to move the icon to the right on hover:

```html
<a class="icon-link icon-link-hover" href="#">
  Icon link
  <svg xmlns="http://www.w3.org/2000/svg" class="bi" viewBox="0 0 16 16" aria-hidden="true">
    <path d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
  </svg>
</a>
```

## Customization Options

### CSS Variables

Modify CSS variables to change default appearance:

#### Transform Customization

```html
<a class="icon-link icon-link-hover" style="--bs-icon-link-transform: translate3d(0, -.125rem, 0);" href="#">
  <svg xmlns="http://www.w3.org/2000/svg" class="bi" viewBox="0 0 16 16" aria-hidden="true">
    <path d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1v-1z"/>
    <path d="M9.5 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5h3zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3z"/>
  </svg>
  Icon link
</a>
```

#### Color Customization

```html
<a class="icon-link icon-link-hover" style="--bs-link-hover-color-rgb: 25, 135, 84;" href="#">
  Icon link
  <svg xmlns="http://www.w3.org/2000/svg" class="bi" viewBox="0 0 16 16" aria-hidden="true">
    <path d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
  </svg>
</a>
```

### Available CSS Variables

| Variable | Default | Description |
|----------|----------|-------------|
| `--bs-link-color` | Inherited | Link color |
| `--bs-link-hover-color` | Inherited | Link hover color |
| `--bs-link-hover-color-rgb` | Inherited | Link hover color in RGB |
| `--bs-icon-link-gap` | `.375rem` | Gap between icon and text |
| `--bs-icon-link-underline-offset` | `.25em` | Underline offset |
| `--bs-icon-link-icon-size` | `1em` | Icon size relative to text |
| `--bs-icon-link-icon-transition` | `.2s ease-in-out transform` | Icon transition effect |
| `--bs-icon-link-icon-transform` | `translate3d(.25em, 0, 0)` | Icon transform on hover |

## Component Integration

### Navigation Links

```html
<nav class="navbar">
  <div class="container-fluid">
    <a class="navbar-brand icon-link" href="#">
      <svg xmlns="http://www.w3.org/2000/svg" class="bi" viewBox="0 0 16 16" aria-hidden="true">
        <path d="M8.186 1.113a.5.5 0 0 0-.372 0L1.846 3.5l2.404.961L10.404 2l-2.218-.887zm3.564 1.426L5.596 5 8 5.961 14.154 3.5l-2.404-.961zm3.25 1.7-6.5 2.6v7.922l6.5-2.6V4.24zM7.5 14.762V6.838L1 4.239v7.923l6.5 2.6zM7.443.184a1.5 1.5 0 0 1 1.114 0l7.129 2.852A.5.5 0 0 1 16 3.5v8.662a1 1 0 0 1-.629.928l-7.185 2.874a.5.5 0 0 1-.372 0L.63 13.09a1 1 0 0 1-.63-.928V3.5a.5.5 0 0 1 .314-.464L7.443.184z"/>
      </svg>
      Brand
    </a>
    <div class="navbar-nav">
      <a class="nav-link icon-link" href="#">
        <svg xmlns="http://www.w3.org/2000/svg" class="bi" viewBox="0 0 16 16" aria-hidden="true">
          <path d="M6.5 6.5A.5.5 0 0 1 7 7v1a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5V7a.5.5 0 0 1 .5-.5h2zm3 0a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5V7a.5.5 0 0 1 .5-.5h2z"/>
          <path d="M5.5 2a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h2a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-2zm2-1A1.5 1.5 0 0 1 9 2.5v1A1.5 1.5 0 0 1 7.5 5h-2A1.5 1.5 0 0 1 4 3.5v-1A1.5 1.5 0 0 1 5.5 1h2z"/>
        </svg>
        Dashboard
      </a>
      <a class="nav-link icon-link" href="#">
        Settings
        <svg xmlns="http://www.w3.org/2000/svg" class="bi" viewBox="0 0 16 16" aria-hidden="true">
          <path d="M8.416.223a.5.5 0 0 0-.832 0l-3 4.5A.5.5 0 0 0 5 5.5h.598l-2.5 3.75a.5.5 0 0 0 .416.75H6v3.5a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5V10h.486a.5.5 0 0 0 .416-.75L8.402 5.5H9a.5.5 0 0 0 .416-.777l-3-4.5z"/>
        </svg>
      </a>
    </div>
  </div>
</nav>
```

### Card Links

```html
<div class="card">
  <div class="card-body">
    <h5 class="card-title">Card with Icon Links</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a class="icon-link" href="#">
      <svg xmlns="http://www.w3.org/2000/svg" class="bi" viewBox="0 0 16 16" aria-hidden="true">
        <path d="M8.416.223a.5.5 0 0 0-.832 0l-3 4.5A.5.5 0 0 0 5 5.5h.598l-2.5 3.75a.5.5 0 0 0 .416.75H6v3.5a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5V10h.486a.5.5 0 0 0 .416-.75L8.402 5.5H9a.5.5 0 0 0 .416-.777l-3-4.5z"/>
      </svg>
      View Details
    </a>
    <a class="icon-link icon-link-hover" href="#">
      Learn More
      <svg xmlns="http://www.w3.org/2000/svg" class="bi" viewBox="0 0 16 16" aria-hidden="true">
        <path d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
      </svg>
    </a>
  </div>
</div>
```

### Button Groups

```html
<div class="btn-group" role="group">
  <a class="btn btn-outline-primary icon-link" href="#">
    <svg xmlns="http://www.w3.org/2000/svg" class="bi" viewBox="0 0 16 16" aria-hidden="true">
      <path d="M8.416.223a.5.5 0 0 0-.832 0l-3 4.5A.5.5 0 0 0 5 5.5h.598l-2.5 3.75a.5.5 0 0 0 .416.75H6v3.5a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5V10h.486a.5.5 0 0 0 .416-.75L8.402 5.5H9a.5.5 0 0 0 .416-.777l-3-4.5z"/>
    </svg>
    Upload
  </a>
  <a class="btn btn-outline-secondary icon-link" href="#">
    <svg xmlns="http://www.w3.org/2000/svg" class="bi" viewBox="0 0 16 16" aria-hidden="true">
      <path d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1v-1z"/>
      <path d="M9.5 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5h3zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3z"/>
    </svg>
    Copy
  </a>
  <a class="btn btn-outline-danger icon-link" href="#">
    Delete
    <svg xmlns="http://www.w3.org/2000/svg" class="bi" viewBox="0 0 16 16" aria-hidden="true">
      <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
      <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1z"/>
    </svg>
  </a>
</div>
```

## Advanced Styling

### Link Utilities Integration

Combine with link utilities for enhanced styling:

```html
<a class="icon-link icon-link-hover link-success link-underline-success link-underline-opacity-25" href="#">
  Icon link
  <svg xmlns="http://www.w3.org/2000/svg" class="bi" viewBox="0 0 16 16" aria-hidden="true">
    <path d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
  </svg>
</a>
```

### Custom Icon Sources

Use any icon library or custom SVGs:

```html
<!-- Font Awesome icons -->
<a class="icon-link" href="#">
  <i class="fas fa-home" aria-hidden="true"></i>
  Home
</a>

<!-- Custom SVG -->
<a class="icon-link" href="#">
  <svg width="16" height="16" viewBox="0 0 16 16" aria-hidden="true">
    <path fill="currentColor" d="M8 0L0 8l2 2v6h12v-6l2-2L8 0z"/>
  </svg>
  Custom Icon
</a>

<!-- Image as icon -->
<a class="icon-link" href="#">
  <img src="icon.png" alt="" width="16" height="16" aria-hidden="true">
  Image Icon
</a>
```

## Accessibility

### Decorative Icons

For purely decorative icons, hide them from assistive technologies:

```html
<a class="icon-link" href="#">
  <svg xmlns="http://www.w3.org/2000/svg" class="bi" viewBox="0 0 16 16" aria-hidden="true">
    <path d="M8.186 1.113a.5.5 0 0 0-.372 0L1.846 3.5l2.404.961L10.404 2l-2.218-.887z"/>
  </svg>
  Link text (describes the action)
</a>
```

### Meaningful Icons

For icons that convey meaning, provide appropriate text alternative:

```html
<a class="icon-link" href="#">
  <svg xmlns="http://www.w3.org/2000/svg" class="bi" viewBox="0 0 16 16" role="img" aria-label="Download file">
    <path d="M8.416.223a.5.5 0 0 0-.832 0l-3 4.5A.5.5 0 0 0 5 5.5h.598l-2.5 3.75a.5.5 0 0 0 .416.75H6v3.5a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5V10h.486a.5.5 0 0 0 .416-.75L8.402 5.5H9a.5.5 0 0 0 .416-.777l-3-4.5z"/>
  </svg>
  Download
</a>
```

## Sass Variables

Customize icon link Sass variables to modify all styles across your project:

```scss
$icon-link-gap:               .375rem;
$icon-link-underline-offset:  .25em;
$icon-link-icon-size:         1em;
$icon-link-icon-transition:   .2s ease-in-out transform;
$icon-link-icon-transform:    translate3d(.25em, 0, 0);
```

## Best Practices

### 1. Icon Selection
- **Consistent Style**: Use icons from the same set for visual consistency
- **Appropriate Size**: Icons should be proportional to text size
- **Clear Meaning**: Choose icons that clearly represent the link action
- **Contrast**: Ensure icons have sufficient contrast with background

### 2. Text and Icon Balance
- **Descriptive Text**: Link text should be descriptive even without icons
- **Icon Position**: Place icons consistently (left or right) throughout your site
- **Spacing**: Use appropriate gap between text and icons
- **Hierarchy**: Icons should enhance, not overwhelm, the text

### 3. Interactive Design
- **Hover Effects**: Provide clear visual feedback on hover
- **Focus States**: Ensure keyboard navigation is clearly indicated
- **Transitions**: Use smooth transitions for better user experience
- **Mobile Touch**: Consider touch-friendly sizing for mobile devices

### 4. Common Patterns

#### Action Links
```html
<div class="d-flex gap-3">
  <a class="icon-link" href="#">
    <svg xmlns="http://www.w3.org/2000/svg" class="bi" viewBox="0 0 16 16" aria-hidden="true">
      <path d="M8.416.223a.5.5 0 0 0-.832 0l-3 4.5A.5.5 0 0 0 5 5.5h.598l-2.5 3.75a.5.5 0 0 0 .416.75H6v3.5a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5V10h.486a.5.5 0 0 0 .416-.75L8.402 5.5H9a.5.5 0 0 0 .416-.777l-3-4.5z"/>
    </svg>
    Download
  </a>
  <a class="icon-link" href="#">
    <svg xmlns="http://www.w3.org/2000/svg" class="bi" viewBox="0 0 16 16" aria-hidden="true">
      <path d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1v-1z"/>
      <path d="M9.5 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5h3zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3z"/>
    </svg>
    Copy
  </a>
  <a class="icon-link" href="#">
    <svg xmlns="http://www.w3.org/2000/svg" class="bi" viewBox="0 0 16 16" aria-hidden="true">
      <path d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
    </svg>
    Share
  </a>
</div>
```

#### Navigation Breadcrumbs
```html
<nav aria-label="breadcrumb">
  <ol class="breadcrumb">
    <li class="breadcrumb-item">
      <a class="icon-link" href="#">
        <svg xmlns="http://www.w3.org/2000/svg" class="bi" viewBox="0 0 16 16" aria-hidden="true">
          <path d="M6.5 14.5v-3.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5v3.5a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-10a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5v3a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-3a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5v10a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5z"/>
        </svg>
        Home
      </a>
    </li>
    <li class="breadcrumb-item">
      <a class="icon-link" href="#">
        Products
        <svg xmlns="http://www.w3.org/2000/svg" class="bi" viewBox="0 0 16 16" aria-hidden="true">
          <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
        </svg>
      </a>
    </li>
    <li class="breadcrumb-item active" aria-current="page">Details</li>
  </ol>
</nav>
```

## Troubleshooting

### Common Issues

1. **Icons Not Aligning**
   - Ensure `.icon-link` class is applied
   - Check for conflicting CSS rules
   - Verify icon size is appropriate

2. **Hover Effects Not Working**
   - Ensure `.icon-link-hover` class is applied
   - Check CSS variable values
   - Test with different browsers

3. **Icons Too Large/Small**
   - Adjust `--bs-icon-link-icon-size` variable
   - Check icon viewBox and dimensions
   - Consider custom icon sizing

4. **Accessibility Issues**
   - Ensure decorative icons have `aria-hidden="true"`
   - Provide proper labels for meaningful icons
   - Test with screen readers

## Summary

Bootstrap's Icon Link utility provides:

- **Automatic Alignment**: Inline flexbox with proper spacing
- **Icon Sizing**: Icons automatically sized to match text
- **Interactive States**: Built-in hover and focus effects
- **Customization**: CSS variables and Sass customization
- **Accessibility**: Support for decorative and meaningful icons
- **Integration**: Works with all Bootstrap components
- **Performance**: Lightweight CSS-only implementation
- **Flexibility**: Compatible with any icon library or custom SVGs

Use icon links to create visually appealing, accessible navigation and action elements that enhance user experience and provide clear visual feedback.
