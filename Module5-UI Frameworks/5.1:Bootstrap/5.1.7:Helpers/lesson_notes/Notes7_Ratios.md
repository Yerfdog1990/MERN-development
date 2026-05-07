# Bootstrap Ratios

## Overview

Use generated pseudo elements to make an element maintain the aspect ratio of your choosing. Perfect for responsively handling video or slideshow embeds based on the width of the parent.

## How It Works

The ratio helper manages the aspect ratios of external content like `<iframe>`s, `<embed>`s, `<video>`s, and `<object>`s. These helpers can also be used on any standard HTML child element (e.g., a `<div>` or `<img>`). Styles are applied from the parent `.ratio` class directly to the child.

**Key Features:**
- **Universal Selector**: Works with `.ratio > *` to automatically size immediate children
- **CSS Variables**: Uses CSS custom properties for flexible customization
- **Responsive Design**: Maintains aspect ratios across different viewport sizes
- **No Frameborder Needed**: Automatically handles `frameborder="0"` for iframes in Reboot

## Basic Usage

### Simple Ratio Example

Wrap any embed in a parent element with `.ratio` and an aspect ratio class:

```html
<div class="ratio ratio-16x9">
  <iframe src="https://www.youtube.com/embed/zpOULjyy-n8?rel=0" title="YouTube video" allowfullscreen></iframe>
</div>
```

### Standard HTML Elements

Works with any standard HTML child elements:

```html
<div class="ratio ratio-16x9">
  <div>16:9 Aspect Ratio</div>
</div>

<div class="ratio ratio-4x3">
  <img src="image.jpg" alt="Responsive image with 4:3 ratio">
</div>

<div class="ratio ratio-1x1">
  <video controls>
    <source src="video.mp4" type="video/mp4">
  </video>
</div>
```

## Available Aspect Ratios

### Standard Ratios

| Class | Aspect Ratio | Use Case |
|-------|--------------|----------|
| `.ratio-1x1` | 1:1 (100%) | Square content, profile images |
| `.ratio-4x3` | 4:3 (75%) | Traditional TV, older content |
| `.ratio-16x9` | 16:9 (56.25%) | HD video, YouTube, modern displays |
| `.ratio-21x9` | 21:9 (42.86%) | Ultra-wide content, cinema |

### Visual Examples

```html
<!-- 1x1 Square -->
<div class="ratio ratio-1x1">
  <div>1x1</div>
</div>

<!-- 4x3 Traditional -->
<div class="ratio ratio-4x3">
  <div>4x3</div>
</div>

<!-- 16x9 HD -->
<div class="ratio ratio-16x9">
  <div>16x9</div>
</div>

<!-- 21x9 Ultra-wide -->
<div class="ratio ratio-21x9">
  <div>21x9</div>
</div>
```

## Common Use Cases

### Video Embeds

```html
<!-- YouTube Video -->
<div class="ratio ratio-16x9">
  <iframe src="https://www.youtube.com/embed/dQw4w9WgXcQ" title="YouTube video player" allowfullscreen></iframe>
</div>

<!-- Vimeo Video -->
<div class="ratio ratio-16x9">
  <iframe src="https://player.vimeo.com/video/76979871" title="Vimeo video player" allowfullscreen></iframe>
</div>

<!-- Self-hosted Video -->
<div class="ratio ratio-16x9">
  <video controls poster="poster.jpg">
    <source src="video.mp4" type="video/mp4">
    <source src="video.webm" type="video/webm">
  </video>
</div>
```

### Image Galleries

```html
<!-- Square Image Gallery -->
<div class="row">
  <div class="col-4">
    <div class="ratio ratio-1x1">
      <img src="thumb1.jpg" class="img-fluid" alt="Gallery image 1">
    </div>
  </div>
  <div class="col-4">
    <div class="ratio ratio-1x1">
      <img src="thumb2.jpg" class="img-fluid" alt="Gallery image 2">
    </div>
  </div>
  <div class="col-4">
    <div class="ratio ratio-1x1">
      <img src="thumb3.jpg" class="img-fluid" alt="Gallery image 3">
    </div>
  </div>
</div>
```

### Maps and Embeds

```html
<!-- Google Maps -->
<div class="ratio ratio-4x3">
  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3024!2d..." 
          title="Google Maps" allowfullscreen></iframe>
</div>

<!-- SoundCloud Embed -->
<div class="ratio ratio-16x9">
  <iframe src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/293" 
          title="SoundCloud player"></iframe>
</div>

<!-- Twitter Embed -->
<div class="ratio ratio-1x1">
  <blockquote class="twitter-tweet" data-width="500">
    <p lang="en" dir="ltr">Tweet content here</p>
  </blockquote>
</div>
```

## Custom Ratios

### CSS Variable Method

Each `.ratio-*` class includes a CSS custom property. Override this to create custom aspect ratios:

```html
<!-- Custom 2x1 Aspect Ratio -->
<div class="ratio" style="--bs-aspect-ratio: 50%;">
  <div>2x1</div>
</div>

<!-- Custom 3x2 Aspect Ratio -->
<div class="ratio" style="--bs-aspect-ratio: 66.67%;">
  <div>3x2</div>
</div>

<!-- Custom 1x2 Aspect Ratio -->
<div class="ratio" style="--bs-aspect-ratio: 200%;">
  <div>1x2</div>
</div>
```

### Aspect Ratio Calculation Formula

Calculate aspect ratios using this formula:
```
aspect-ratio percentage = (height / width) × 100%
```

**Examples:**
- 16:9 = (9 ÷ 16) × 100% = 56.25%
- 4:3 = (3 ÷ 4) × 100% = 75%
- 2:1 = (1 ÷ 2) × 100% = 50%
- 1:2 = (2 ÷ 1) × 100% = 200%

### Responsive Custom Ratios

Change aspect ratios at different breakpoints:

```css
/* SCSS Example */
.ratio-4x3 {
  @include media-breakpoint-up(md) {
    --bs-aspect-ratio: 50%; // 2x1 at medium and up
  }
}
```

```html
<!-- Starts as 4x3, becomes 2x1 on medium screens -->
<div class="ratio ratio-4x3">
  <div>4x3, then 2x1</div>
</div>
```

## Advanced Implementation

### Multiple Ratios in Grid

```html
<div class="row g-3">
  <!-- Feature item with 16x9 ratio -->
  <div class="col-md-8">
    <div class="ratio ratio-16x9">
      <img src="feature.jpg" class="img-fluid" alt="Feature image">
    </div>
  </div>
  
  <!-- Sidebar items with 1x1 ratio -->
  <div class="col-md-4">
    <div class="ratio ratio-1x1 mb-3">
      <img src="thumb1.jpg" class="img-fluid" alt="Thumbnail 1">
    </div>
    <div class="ratio ratio-1x1">
      <img src="thumb2.jpg" class="img-fluid" alt="Thumbnail 2">
    </div>
  </div>
</div>
```

### Card with Ratio Media

```html
<div class="card">
  <div class="ratio ratio-16x9">
    <img src="card-image.jpg" class="card-img-top" alt="Card image">
  </div>
  <div class="card-body">
    <h5 class="card-title">Card with Ratio Image</h5>
    <p class="card-text">The image maintains perfect aspect ratio regardless of card width.</p>
  </div>
</div>
```

### Carousel with Ratios

```html
<div id="carouselExample" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <div class="ratio ratio-16x9">
        <img src="slide1.jpg" class="d-block w-100" alt="Slide 1">
      </div>
    </div>
    <div class="carousel-item">
      <div class="ratio ratio-16x9">
        <img src="slide2.jpg" class="d-block w-100" alt="Slide 2">
      </div>
    </div>
  </div>
</div>
```

## Sass Customization

### Aspect Ratio Map

Modify the default aspect ratios in `_variables.scss`:

```scss
$aspect-ratios: (
  "1x1": 100%,
  "4x3": calc(3 / 4 * 100%),
  "16x9": calc(9 / 16 * 100%),
  "21x9": calc(9 / 21 * 100%)
);
```

### Adding Custom Ratios

Add new aspect ratios to the map:

```scss
$aspect-ratios: (
  "1x1": 100%,
  "4x3": calc(3 / 4 * 100%),
  "16x9": calc(9 / 16 * 100%),
  "21x9": calc(9 / 21 * 100%),
  "2x1": calc(1 / 2 * 100%),
  "3x2": calc(2 / 3 * 100%),
  "9x16": calc(16 / 9 * 100%) // Portrait video
);
```

### Custom Mixins

Create custom ratio mixins:

```scss
@mixin ratio-custom($width, $height) {
  --bs-aspect-ratio: calc(#{$height} / #{$width} * 100%);
}

// Usage
.custom-ratio {
  @include ratio-custom(16, 10); // 16:10 ratio
}
```

## Best Practices

### 1. Performance Optimization
- **Lazy Loading**: Use `loading="lazy"` for images and iframes
- **Proper Sizing**: Choose appropriate aspect ratios for content type
- **Mobile Considerations**: Test ratios on mobile devices

```html
<!-- Optimized image with lazy loading -->
<div class="ratio ratio-16x9">
  <img src="image.jpg" loading="lazy" alt="Responsive image" class="img-fluid">
</div>
```

### 2. Accessibility
- **Alt Text**: Always provide descriptive alt text for images
- **Titles**: Add titles to iframes for screen readers
- **Keyboard Navigation**: Ensure embedded content is keyboard accessible

```html
<div class="ratio ratio-16x9">
  <iframe src="video.html" 
          title="Product demonstration video" 
          allowfullscreen
          tabindex="0"></iframe>
</div>
```

### 3. Content Strategy
- **Consistent Ratios**: Use consistent ratios within the same content type
- **Responsive Design**: Consider how ratios work across breakpoints
- **Content Fit**: Choose ratios that best fit your content

### 4. Common Patterns

#### Video Portfolio
```html
<div class="row">
  <div class="col-lg-8">
    <div class="ratio ratio-16x9 mb-4">
      <iframe src="featured-video.html" title="Featured video" allowfullscreen></iframe>
    </div>
  </div>
  <div class="col-lg-4">
    <div class="ratio ratio-16x9 mb-3">
      <iframe src="video1.html" title="Video 1" allowfullscreen></iframe>
    </div>
    <div class="ratio ratio-16x9">
      <iframe src="video2.html" title="Video 2" allowfullscreen></iframe>
    </div>
  </div>
</div>
```

#### Image Gallery with Mixed Ratios
```html
<div class="container">
  <div class="row g-3">
    <!-- Featured image (landscape) -->
    <div class="col-md-8">
      <div class="ratio ratio-16x9">
        <img src="featured.jpg" class="img-fluid" alt="Featured image">
      </div>
    </div>
    
    <!-- Portrait images -->
    <div class="col-md-4">
      <div class="ratio ratio-3x4 mb-3" style="--bs-aspect-ratio: 133.33%;">
        <img src="portrait1.jpg" class="img-fluid" alt="Portrait 1">
      </div>
      <div class="ratio ratio-3x4">
        <img src="portrait2.jpg" class="img-fluid" alt="Portrait 2">
      </div>
    </div>
  </div>
</div>
```

## Troubleshooting

### Common Issues

1. **Content Not Filling Container**
   - Ensure child element has proper sizing (width: 100%, height: 100%)
   - Check for conflicting CSS rules
   - Verify immediate child structure

2. **Iframe Border Issues**
   - Bootstrap handles `frameborder="0"` automatically
   - Add `style="border: none;"` if needed
   - Check for iframe provider CSS overrides

3. **Responsive Problems**
   - Test across different viewport sizes
   - Check for parent container width constraints
   - Verify CSS variable inheritance

4. **Performance Issues**
   - Limit number of iframes on page
   - Use lazy loading for images
   - Consider lazy loading for iframes

### Debugging Tips

```html
<!-- Add border to see container boundaries -->
<div class="ratio ratio-16x9 border border-primary">
  <iframe src="content.html" style="border: 2px solid red;"></iframe>
</div>

<!-- Test with simple content first -->
<div class="ratio ratio-16x9">
  <div style="background: lightblue; width: 100%; height: 100%;">Test Content</div>
</div>
```

## Browser Compatibility

### Modern Browser Support
- **Chrome**: Full support
- **Firefox**: Full support  
- **Safari**: Full support
- **Edge**: Full support

### Legacy Browser Considerations
- **IE11**: Limited support for CSS variables
- **Older Mobile**: May have performance issues with complex embeds
- **Fallback Options**: Use traditional aspect ratio techniques for older browsers

## Summary

Bootstrap's Ratio utilities provide:

- **Universal Application**: Works with any HTML element
- **Standard Ratios**: Pre-defined common aspect ratios (1:1, 4:3, 16:9, 21:9)
- **Custom Ratios**: CSS variables for unlimited custom aspect ratios
- **Responsive Design**: Maintains ratios across all viewport sizes
- **Performance**: CSS-only implementation with minimal overhead
- **Accessibility**: Built-in support for screen readers and keyboard navigation
- **Flexibility**: Sass customization and CSS variable overrides

Use ratio utilities to create perfectly proportioned media containers, video embeds, image galleries, and any content that needs to maintain specific aspect ratios across different screen sizes.
