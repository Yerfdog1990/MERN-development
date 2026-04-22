## Accessibility in Bootstrap

Bootstrap is designed to be accessible out of the box, but high-quality accessibility (A11y) is a shared responsibility. While the framework provides the tools, the final level of compliance (**WCAG 2.2, Section 508**) depends on how a developer implements markup, styling, and scripts.

---

### 1. Structural Markup & Semantics
Bootstrap’s layout tools (Grid, Flexbox) are agnostic, meaning they can be applied to almost any HTML.
* **Best Practice:** Use **semantic HTML5** elements (like `<nav>`, `<main>`, `<header>`, `<footer>`) rather than generic `<div>` tags.
* **Goal:** Proper structure ensures that assistive technologies, like screen readers, can navigate the page logic correctly.

---

### 2. Interactive Components & WAI-ARIA
Interactive elements such as Modals, Dropdowns, and Tooltips are engineered for touch, mouse, and keyboard users.

* **Keyboard Navigation:** Components are built to handle "Tab" and "Arrow" key focus out of the box.
* **Assistive Technology:** Bootstrap uses **WAI-ARIA** (Accessible Rich Internet Applications) roles and attributes (e.g., `aria-expanded="true"`, `role="dialog"`) to communicate states to screen readers.
* **Developer Customization:** Because Bootstrap components are generic, you may need to add specific ARIA attributes or JavaScript behaviors to describe the *exact* purpose of your specific implementation.

---

### 3. Color Contrast Ratios
A significant limitation of Bootstrap’s **default** palette is that some color combinations may fall below the required contrast ratios on light backgrounds.

| Standard | Element Type | Required Ratio |
| :--- | :--- | :--- |
| **WCAG 2.2** | Regular Text | **4.5:1** |
| **WCAG 2.2** | Non-text (icons, borders) | **3:1** |

**Recommendation:** Do not rely solely on default classes like `.btn-primary` or `.alert-info`. Manually test and modify your color palette using Sass variables to ensure every user can read your content.

---

### 4. Managing Visibility
Sometimes content needs to be hidden from sighted users but remain available to screen readers, or vice versa.

#### The `.visually-hidden` Class
Use this to provide context that is otherwise conveyed only through visual cues (like color).
```html
<p class="text-danger">
  <span class="visually-hidden">Danger: </span>
  This action is not reversible
</p>
```

#### The `.visually-hidden-focusable` Class
Specifically for interactive controls like **"Skip to main content"** links.
* **Behavior:** Stays hidden until a keyboard user "Tabs" onto it, at which point it becomes visible.
* **Important Note:** In Bootstrap 5, this is a **standalone** class. Do *not* combine it with `.visually-hidden`.

---

### 5. Reduced Motion Support
Bootstrap respects user system preferences regarding motion to assist users with vestibular disorders or motion sickness.

* **`prefers-reduced-motion`:** If a user has enabled this in their OS, Bootstrap automatically:
    * Disables CSS transitions (e.g., Modals sliding in, Carousels sliding).
    * Slows down meaningful animations (e.g., Spinners).
* **Smooth Scrolling:** Bootstrap enables the `scroll-behavior: smooth` property only if the user has **no preference** signaled for reduced motion.

---

### Summary Checklist for Accessible Bootstrap Sites
1. [ ] **Test Color Contrast:** Ensure text is readable against its background.
2. [ ] **Verify ARIA Attributes:** Check that modals and dropdowns have correct IDs and labels.
3. [ ] **Keyboard Test:** Ensure you can navigate the entire site using only the "Tab" key.
4. [ ] **Use Visually Hidden Text:** Add descriptive labels for icons or color-coded warnings.
5. [ ] **Check Focus States:** Ensure focused elements have a visible "ring" or outline for sighted keyboard users.

---

Building a navigation bar is one of the most common tasks in Bootstrap, but making it **truly accessible** requires more than just the standard classes. A screen reader needs to know what the menu is, whether it’s open, and which link is currently active.

Here is a breakdown of a fully accessible, WCAG-compliant Bootstrap Navbar.

---

### 1. The Accessible Navbar Structure

To make a Navbar accessible, we use a combination of semantic HTML5 and specific ARIA attributes.



```html
<nav class="navbar navbar-expand-lg navbar-light bg-light" aria-label="Main navigation">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">BrandName</a>

    <button class="navbar-toggler" type="button" 
            data-bs-toggle="collapse" 
            data-bs-target="#navbarsExample05" 
            aria-controls="navbarsExample05" 
            aria-expanded="false" 
            aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarsExample05">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Reports</a>
        </li>
        
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="dropdown05" 
             data-bs-toggle="dropdown" 
             aria-expanded="false">Settings</a>
          <ul class="dropdown-menu" aria-labelledby="dropdown05">
            <li><a class="dropdown-item" href="#">Profile</a></li>
            <li><a class="dropdown-item" href="#">Security</a></li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</nav>
```

---

### 2. Deep Dive into the Accessibility Features

#### A. Identifying the Region (`aria-label`)
If you have multiple navigation blocks on a page (e.g., a header and a footer), the screen reader will announce them all as "navigation." Adding `aria-label="Main navigation"` allows the user to distinguish between them immediately.

#### B. The Interactive Toggle (`aria-expanded`)
When a user clicks the "hamburger" menu on mobile, Bootstrap’s JavaScript automatically toggles `aria-expanded` between `true` and `false`. This tells non-visual users whether the menu is currently visible or hidden.

#### C. Indicating Location (`aria-current`)
Sighted users see an active state via a color change. Assistive technology needs `aria-current="page"` to tell the user, "You are currently on the Home link."

#### D. Focus Management
When a user "Tabs" through your dashboard, Bootstrap ensures that the focus ring stays visible.
> **Note:** Never use CSS like `outline: none;` on focusable elements unless you are replacing it with a custom, high-contrast focus style.



---

### 3. Verification Checklist

* **Keyboard Navigation:** Can you open the dropdown using the "Enter" or "Space" key? Can you navigate the items with "Tab"?
* **Contrast:** Is the text color of the links at least **4.5:1** against the navbar background?
* **Focus Visibility:** Is there a clear visual indicator (outline) when a link is focused?
* **Labeling:** Does the mobile toggle button have an `aria-label="Toggle navigation"` so it doesn't just sound like "button" to a screen reader?

By following these patterns, you ensure that your high-interaction dashboard is usable by everyone, regardless of how they navigate the web.

---