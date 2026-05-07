# Bootstrap Tooltips

## Overview

Documentation and examples for adding custom Bootstrap tooltips with CSS and JavaScript using CSS3 for animations and data-bs-attributes for local title storage.

### Key Considerations

- **Third-party Dependency**: Tooltips rely on Popper.js for positioning. You must include `popper.min.js` before `bootstrap.js`, or use `bootstrap.bundle.min.js` which contains Popper
- **Opt-in Component**: Tooltips are opt-in for performance reasons, so you must initialize them yourself
- **Title Requirement**: Tooltips with zero-length titles are never displayed
- **Container Specification**: Specify `container: 'body'` to avoid rendering problems in more complex components
- **Hidden Elements**: Triggering tooltips on hidden elements will not work
- **Disabled Elements**: Tooltips for `.disabled` or `disabled` elements must be triggered on a wrapper element
- **Multi-line Links**: When triggered from hyperlinks that span multiple lines, tooltips will be centered. Use `white-space: nowrap;` on your `<a>`s
- **Shadow DOM**: Tooltips can be triggered thanks to an element inside a shadow DOM
- **Cleanup**: Tooltips must be hidden before their corresponding elements have been removed from the DOM

### Content Sanitization

By default, this component uses the built-in content sanitizer, which strips out any HTML elements that are not explicitly allowed. The animation effect is dependent on `prefers-reduced-motion` media query.

## Examples

### Enable Tooltips

As mentioned above, you must initialize tooltips before they can be used. One way to initialize all tooltips on a page would be to select them by their `data-bs-toggle` attribute:

```javascript
const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))
```

### Tooltips on Links

Hover over the links below to see tooltips:

```html
<p class="muted">Placeholder text to demonstrate some <a href="#" data-bs-toggle="tooltip" data-bs-title="Default tooltip">inline links</a> with tooltips. This is now just filler, no killer. Content placed here just to mimic the presence of <a href="#" data-bs-toggle="tooltip" data-bs-title="Another tooltip">real text</a>. And all that just to give you an idea of how tooltips would look when used in real-world situations. So hopefully you've now seen how <a href="#" data-bs-toggle="tooltip" data-bs-title="Another one here too">these tooltips on links</a> can work in practice, once you use them on <a href="#" data-bs-toggle="tooltip" data-bs-title="The last tip!">your own</a> site or project.</p>
```

**Note**: Feel free to use either `title` or `data-bs-title` in your HTML. When `title` is used, Popper will replace it automatically with `data-bs-title` when the element is rendered.

### Custom Tooltips

Added in v5.2.0

You can customize the appearance of tooltips using CSS variables. We set a custom class with `data-bs-custom-class="custom-tooltip"` to scope our custom appearance and use it to override a local CSS variable.

```css
.custom-tooltip {
  --bs-tooltip-bg: var(--bd-violet-bg);
  --bs-tooltip-color: var(--bs-white);
}
```

```html
<button type="button" class="btn btn-secondary"
        data-bs-toggle="tooltip" 
        data-bs-placement="top"
        data-bs-custom-class="custom-tooltip"
        data-bs-title="This top tooltip is themed via CSS variables.">
  Custom tooltip
</button>
```

### Directions

Hover over the buttons below to see the four tooltips directions: top, right, bottom, and left. Directions are mirrored when using Bootstrap in RTL.

```html
<button type="button" class="btn btn-secondary" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Tooltip on top">
  Tooltip on top
</button>
<button type="button" class="btn btn-secondary" data-bs-toggle="tooltip" data-bs-placement="right" data-bs-title="Tooltip on right">
  Tooltip on right
</button>
<button type="button" class="btn btn-secondary" data-bs-toggle="tooltip" data-bs-placement="bottom" data-bs-title="Tooltip on bottom">
  Tooltip on bottom
</button>
<button type="button" class="btn btn-secondary" data-bs-toggle="tooltip" data-bs-placement="left" data-bs-title="Tooltip on left">
  Tooltip on left
</button>
```

### HTML Content in Tooltips

```html
<button type="button" class="btn btn-secondary" data-bs-toggle="tooltip" data-bs-html="true" data-bs-title="<em>Tooltip</em> <u>with</u> <b>HTML</b>">
  Tooltip with HTML
</button>
```

### SVG Elements

```html
<!-- SVG example -->
<svg data-bs-toggle="tooltip" data-bs-title="SVG tooltip">
  <!-- SVG content -->
</svg>
```

## CSS Customization

### CSS Variables (v5.2.0+)

As part of Bootstrap's evolving CSS variables approach, tooltips now use local CSS variables on `.tooltip` for enhanced real-time customization.

```css
.tooltip {
  --#{$prefix}tooltip-zindex: #{$zindex-tooltip};
  --#{$prefix}tooltip-max-width: #{$tooltip-max-width};
  --#{$prefix}tooltip-padding-x: #{$tooltip-padding-x};
  --#{$prefix}tooltip-padding-y: #{$tooltip-padding-y};
  --#{$prefix}tooltip-margin: #{$tooltip-margin};
  @include rfs($tooltip-font-size, --#{$prefix}tooltip-font-size);
  --#{$prefix}tooltip-color: #{$tooltip-color};
  --#{$prefix}tooltip-bg: #{$tooltip-bg};
  --#{$prefix}tooltip-border-radius: #{$tooltip-border-radius};
  --#{$prefix}tooltip-opacity: #{$tooltip-opacity};
  --#{$prefix}tooltip-arrow-width: #{$tooltip-arrow-width};
  --#{$prefix}tooltip-arrow-height: #{$tooltip-arrow-height};
}
```

### Sass Variables

```scss
$tooltip-font-size:                 $font-size-sm;
$tooltip-max-width:                 200px;
$tooltip-color:                     var(--#{$prefix}body-bg);
$tooltip-bg:                        var(--#{$prefix}emphasis-color);
$tooltip-border-radius:             var(--#{$prefix}border-radius);
$tooltip-opacity:                   .9;
$tooltip-padding-y:                 $spacer * .25;
$tooltip-padding-x:                 $spacer * .5;
$tooltip-margin:                    null; // TODO: remove this in v6

$tooltip-arrow-width:               .8rem;
$tooltip-arrow-height:              .4rem;
```

## Usage

### Basic Initialization

The tooltip plugin generates content and markup on demand, and by default places tooltips after their trigger element.

```javascript
const exampleEl = document.getElementById('example')
const tooltip = new bootstrap.Tooltip(exampleEl, options)
```

### Boundary Configuration

Tooltips automatically attempt to change positions when a parent container has `overflow: auto` or `overflow: scroll`, but still keeps the original placement's positioning. Set the `boundary` option (for the flip modifier using the `popperConfig` option) to any HTMLElement to override the default value, `'clippingParents'`, such as `document.body`:

```javascript
const tooltip = new bootstrap.Tooltip('#example', {
  boundary: document.body // or document.querySelector('#boundary')
})
```

## Markup

### Required Markup

The required markup for a tooltip is only a `data` attribute and `title` on the HTML element you wish to have a tooltip. The generated markup of a tooltip is rather simple, though it does require a position (by default, set to `top` by the plugin).

```html
<!-- HTML to write -->
<a href="#" data-bs-toggle="tooltip" data-bs-title="Some tooltip text!">Hover over me</a>

<!-- Generated markup by the plugin -->
<div class="tooltip bs-tooltip-auto" role="tooltip">
  <div class="tooltip-arrow"></div>
  <div class="tooltip-inner">
    Some tooltip text!
  </div>
</div>
```

### Accessibility Considerations

Keep tooltips accessible to keyboard and assistive technology users by only adding them to HTML elements that are traditionally keyboard-focusable and interactive (such as links or form controls). While other HTML elements can be made focusable by adding `tabindex="0"`, this can create annoying and confusing tab stops on non-interactive elements for keyboard users, and most assistive technologies currently do not announce tooltips in this situation.

Additionally, do not rely solely on `hover` as the trigger for your tooltips as this will make them impossible to trigger for keyboard users.

## Disabled Elements

Elements with the `disabled` attribute aren't interactive, meaning users cannot focus, hover, or click them to trigger a tooltip (or popover). As a workaround, you'll want to trigger the tooltip from a wrapper `<div>` or `<span>`, ideally made keyboard-focusable using `tabindex="0"`.

```html
<span class="d-inline-block" tabindex="0" data-bs-toggle="tooltip" data-bs-title="Disabled tooltip">
  <button class="btn btn-primary" type="button" disabled>Disabled button</button>
</span>
```

## Options

Options can be passed via data attributes or JavaScript. When using data attributes, append the option name to `data-bs-` and convert from camelCase to kebab-case.

### Configuration Priority (v5.2.0+)

As of Bootstrap 5.2.0, all components support an experimental reserved data attribute `data-bs-config` that can house simple component configuration as a JSON string. The final configuration object is the merged result of:
1. `data-bs-config`
2. Individual `data-bs-*` attributes
3. JavaScript object

The latest given key-value overrides the others.

### Available Options

| Name | Type | Default | Description |
|-------|------|----------|-------------|
| `allowList` | object | Default value | An object containing allowed tags and attributes. Those not explicitly allowed will be removed by the content sanitizer. Exercise caution when adding to this list. |
| `animation` | boolean | `true` | Apply a CSS fade transition to the tooltip |
| `boundary` | string, element | `'clippingParents'` | Overflow constraint boundary of the tooltip (applies only to Popper's preventOverflow modifier). By default, it's `'clippingParents'` and can accept an HTMLElement reference (via JavaScript only) |
| `container` | string, element, false | `false` | Appends the tooltip to a specific element. Example: `container: 'body'`. This option is particularly useful in that it allows you to position the tooltip in the flow of the document near the triggering element - which will prevent the tooltip from floating away from the triggering element during a window resize |
| `customClass` | string, function | `''` | Add classes to the tooltip when it is shown. Note that these classes will be added in addition to any classes specified in the template. To add multiple classes, separate them with spaces: `'class-1 class-2'`. You can also pass a function that should return a single string containing additional class names |
| `delay` | number, object | `0` | Delay showing and hiding the tooltip (ms)—doesn't apply to manual trigger type. If a number is supplied, delay is applied to both hide/show. Object structure is: `delay: { "show": 500, "hide": 100 }` |
| `fallbackPlacements` | array | `['top', 'right', 'bottom', 'left']` | Define fallback placements by providing a list of placements in array (in order of preference) |
| `html` | boolean | `false` | Allow HTML in the tooltip. If true, HTML tags in the tooltip's `title` will be rendered in the tooltip. If false, `innerText` property will be used to insert content into the DOM. Prefer text when dealing with user-generated input to prevent XSS attacks |
| `offset` | array, string, function | `[0, 6]` | Offset of the tooltip relative to its target. You can pass a string in data attributes with comma separated values like: `data-bs-offset="10,20"`. When a function is used to determine the offset, it is called with an object containing popper placement, reference, and popper rects as its first argument. The triggering element DOM node is passed as the second argument. The function must return an array with two numbers: `skidding`, `distance` |
| `placement` | string, function | `'top'` | How to position the tooltip: auto, top, bottom, left, right. When `auto` is specified, it will dynamically reorient the tooltip. When a function is used to determine placement, it is called with the tooltip DOM node as its first argument and the triggering element DOM node as its second. The `this` context is set to the tooltip instance |
| `popperConfig` | null, object, function | `null` | To change Bootstrap's default Popper config, see Popper's configuration. When a function is used to create Popper configuration, it's called with an object that contains Bootstrap's default Popper configuration. It helps you use and merge the default with your own configuration. The function must return a configuration object for Popper |
| `sanitize` | boolean | `true` | Enable content sanitization. If true, the `template`, `content` and `title` options will be sanitized |
| `sanitizeFn` | null, function | `null` | Provide an alternative content sanitization function. This can be useful if you prefer to use a dedicated library to perform sanitization |
| `selector` | string, false | `false` | If a selector is provided, tooltip objects will be delegated to the specified targets. In practice, this is used to also apply tooltips to dynamically added DOM elements (jQuery.on support) |
| `template` | string | `'<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>'` | Base HTML to use when creating the tooltip. The tooltip's `title` will be injected into the `.tooltip-inner`. `.tooltip-arrow` will become the tooltip's arrow. The outermost wrapper element should have the `.tooltip` class and `role="tooltip"` |
| `title` | string, element, function | `''` | The tooltip title. If a function is given, it will be called with its `this` reference set to the element that the popover is attached to |
| `trigger` | string | `'hover focus'` | How tooltip is triggered: click, hover, focus, manual. You may pass multiple triggers; separate them with a space. `'manual'` indicates that the tooltip will be triggered programmatically via the `.tooltip('show')`, `.tooltip('hide')` and `.tooltip('toggle')` methods; this value cannot be combined with any other trigger. `'hover'` on its own will result in tooltips that cannot be triggered via keyboard, and should only be used if alternative methods for conveying the same information for keyboard users is present |

### Data Attributes for Individual Tooltips

Options for individual tooltips can alternatively be specified through the use of data attributes, as explained above.

### Using Function with popperConfig

```javascript
const tooltip = new bootstrap.Tooltip(element, {
  popperConfig(defaultBsPopperConfig) {
    // const newPopperConfig = {...}
    // use defaultBsPopperConfig if needed...
    // return newPopperConfig
  }
})
```

## Methods

All API methods are asynchronous and start a transition. They return to the caller as soon as the transition is started, but before it ends. In addition, a method call on a transitioning component will be ignored.

### Method Descriptions

| Method | Description |
|---------|-------------|
| `disable` | Removes the ability for an element's tooltip to be shown. The tooltip will only be able to be shown if it is re-enabled |
| `dispose` | Hides and destroys an element's tooltip (Removes stored data on the DOM element). Tooltips that use delegation (which are created using the `selector` option) cannot be individually destroyed on descendant trigger elements |
| `enable` | Gives an element's tooltip the ability to be shown. Tooltips are enabled by default |
| `getInstance` | Static method which allows you to get the tooltip instance associated with a DOM element |
| `getOrCreateInstance` | Static method which allows you to get the tooltip instance associated with a DOM element, or create a new one in case it wasn't initialized |
| `hide` | Hides an element's tooltip. Returns to the caller before the tooltip has actually been hidden (i.e. before `hidden.bs.tooltip` event occurs). This is considered a "manual" triggering of the tooltip |
| `setContent` | Gives a way to change the tooltip's content after its initialization |
| `show` | Reveals an element's tooltip. Returns to the caller before the tooltip has actually been shown (i.e. before `shown.bs.tooltip` event occurs). This is considered a "manual" triggering of the tooltip. Tooltips with zero-length titles are never displayed |
| `toggle` | Toggles an element's tooltip. Returns to the caller before the tooltip has actually been shown or hidden (i.e. before `shown.bs.tooltip` or `hidden.bs.tooltip` event occurs). This is considered a "manual" triggering of the tooltip |
| `toggleEnabled` | Toggles the ability for an element's tooltip to be shown or hidden |
| `update` | Updates the position of an element's tooltip |

### Method Examples

```javascript
// Get instance
const tooltip = bootstrap.Tooltip.getInstance('#example') // Returns a Bootstrap tooltip instance

// Get or create instance
const tooltip = bootstrap.Tooltip.getOrCreateInstance('#example')

// Show tooltip (manually)
tooltip.show()

// Hide tooltip
tooltip.hide()

// Toggle tooltip
tooltip.toggle()

// Enable/disable
tooltip.enable()
tooltip.disable()

// Update content
tooltip.setContent({ '.tooltip-inner': 'another title' })

// Update position
tooltip.update()

// Dispose
tooltip.dispose()
```

## Events

| Event | Description |
|-------|-------------|
| `hide.bs.tooltip` | This event is fired immediately when the `hide` instance method has been called |
| `hidden.bs.tooltip` | This event is fired when the tooltip has finished being hidden from the user (will wait for CSS transitions to complete) |
| `inserted.bs.tooltip` | This event is fired after the `show.bs.tooltip` event when the tooltip template has been added to the DOM |
| `show.bs.tooltip` | This event fires immediately when the `show` instance method is called |
| `shown.bs.tooltip` | This event is fired when the tooltip has been made visible to the user (will wait for CSS transitions to complete) |

### Event Usage Example

```javascript
const myTooltipEl = document.getElementById('myTooltip')
const tooltip = bootstrap.Tooltip.getOrCreateInstance(myTooltipEl)

myTooltipEl.addEventListener('hidden.bs.tooltip', () => {
  // do something...
  console.log('Tooltip has been hidden');
})

myTooltipEl.addEventListener('shown.bs.tooltip', () => {
  // do something...
  console.log('Tooltip is now visible');
})

// Show tooltip and listen for events
tooltip.show()
```

## Best Practices

### 1. Initialization
- Initialize tooltips after DOM is ready
- Use delegation for dynamic content with `selector` option
- Include Popper.js before Bootstrap.js or use bundle

### 2. Accessibility
- Use on keyboard-focusable elements when possible
- Provide alternative methods for keyboard users
- Don't rely solely on hover triggers
- Use descriptive titles for screen readers

### 3. Performance
- Tooltips are opt-in for performance reasons
- Dispose when no longer needed
- Use appropriate container to avoid layout issues

### 4. Common Implementation Patterns

#### Form Field Tooltips
```javascript
// Initialize all tooltips in a form
const formTooltips = document.querySelectorAll('[data-bs-toggle="tooltip"]')
formTooltips.forEach(el => new bootstrap.Tooltip(el))

// Update tooltip content dynamically
function updateTooltip(elementId, newTitle) {
  const tooltip = bootstrap.Tooltip.getInstance(document.getElementById(elementId))
  if (tooltip) {
    tooltip.setContent({ '.tooltip-inner': newTitle })
  }
}
```

#### Dynamic Content Tooltips
```javascript
// For dynamically added elements
document.addEventListener('DOMNodeInserted', function(e) {
  if (e.target.matches('[data-bs-toggle="tooltip"]')) {
    new bootstrap.Tooltip(e.target)
  }
})

// Or using delegation
const tooltip = new bootstrap.Tooltip(document.body, {
  selector: '[data-bs-toggle="tooltip"]'
})
```

#### Custom Styling
```css
/* Custom tooltip theme */
.tooltip.custom-tooltip {
  --bs-tooltip-bg: #6366f1;
  --bs-tooltip-color: #ffffff;
  --bs-tooltip-border-radius: 0.5rem;
}

/* Larger tooltips */
.tooltip.large-tooltip {
  --bs-tooltip-max-width: 300px;
  --bs-tooltip-font-size: 1rem;
}
```

## Security Considerations

### Content Sanitization
- Exercise caution when disabling content sanitization
- Refer to OWASP's Cross Site Scripting Prevention Cheat Sheet
- Use `sanitizeFn` option for custom sanitization needs
- Prefer text content for user-generated input

### XSS Prevention
```javascript
// Safe: Text content
element.setAttribute('data-bs-title', userInput)

// Unsafe: HTML content without sanitization
element.setAttribute('data-bs-html', 'true')
element.setAttribute('data-bs-title', userInput) // Potentially dangerous
```

## Browser Compatibility

Tooltips work in all modern browsers that support:
- CSS3 animations
- Popper.js positioning
- ES6 JavaScript features
- CSS custom properties

For older browsers, consider:
- Providing fallback title attributes
- Using progressive enhancement
- Testing tooltip positioning

## Summary

Bootstrap Tooltips provide a flexible, accessible way to display contextual information:

- **Dependency**: Requires Popper.js for positioning
- **Opt-in**: Must be initialized manually
- **Customizable**: Extensive styling and positioning options
- **Accessible**: Built with keyboard and screen reader support
- **Secure**: Built-in content sanitization
- **Flexible**: Multiple triggers and content types
- **Responsive**: Adapts to different screen sizes and orientations

Use them to provide helpful context, additional information, or guidance for user interactions without cluttering the interface.
