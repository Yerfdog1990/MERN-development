# HTML `<input>` Tag 

---

## What is the HTML `<input>` Tag?

The HTML `<input>` tag is used to create **interactive form controls** that allow users to enter data on a webpage. It is one of the most versatile and widely used elements in HTML, supporting a wide variety of input types for collecting different kinds of user information.

- Used inside the `<form>` element to take user input
- Supports various input types like text, radio, checkbox, email, and password
- Can include attributes such as `placeholder`, `required`, `readonly`, and `disabled`
- Plays a crucial role in form validation and user interaction
- Is a **void element** — it is self-closing and does not require a closing tag

---

## Syntax

```html
<input type="value" />
```

### Basic Example

```html
<html>
  <body>
    <form>
      <label for="username">Username:</label>
      <input type="text" id="username" name="username">
    </form>
  </body>
</html>
```

- The `<label>` element with the `for` attribute associates the label with the `<input>` field, enhancing accessibility
- The `<input>` of `type="text"` creates a single-line text field where users can enter their username

> **Note:** The `<input>` tag supports all Global Attributes and Event Attributes in HTML.

---

## Input Tag Types

The `type` attribute determines what kind of data a user can enter and how the input control is rendered in the browser.

| Input Type | Description |
|---|---|
| `type="text"` | Single-line text input |
| `type="password"` | Masked text input for passwords |
| `type="checkbox"` | Toggle for selecting multiple options |
| `type="radio"` | Single selection from a group of options |
| `type="submit"` | Button to submit form data |
| `type="button"` | General-purpose clickable button |
| `type="file"` | Input for uploading files |
| `type="number"` | Input for numerical values |
| `type="date"` | Input for selecting dates |
| `type="email"` | Input for email addresses with built-in format validation |
| `type="color"` | Input for selecting colours via a colour picker |
| `type="range"` | Slider for selecting a numeric value within a range |
| `type="hidden"` | Hidden input — stores data not visible to the user |
| `type="image"` | Uses an image as a form submission button |

---

## `<input>` Tag Attributes

Attributes provide additional information and control the behaviour of the `<input>` element.

### Core Attributes

| Attribute | Description |
|---|---|
| `type` | Specifies the type of input element — default value is `text` |
| `name` | Specifies the name of the input element — used when submitting form data |
| `value` | Specifies the initial or current value of the input element |
| `placeholder` | Provides hint text describing the expected value of the input field |
| `id` | Assigns a unique identifier — used to link with a `<label>` via `for` |

### Validation Attributes

| Attribute | Description |
|---|---|
| `required` | Specifies that the input field must be filled before submitting the form |
| `pattern` | Specifies a regular expression that the input's value is checked against |
| `maxlength` | Specifies the maximum number of characters allowed |
| `min` | Specifies the minimum value for number, date, or range inputs |
| `max` | Specifies the maximum value for number, date, or range inputs |
| `step` | Specifies the legal number intervals for a numeric input field |

### State & Behaviour Attributes

| Attribute | Description |
|---|---|
| `disabled` | Disables the input element — cannot be interacted with or submitted |
| `readonly` | Makes the input field read-only — value cannot be modified but is still submitted |
| `checked` | Pre-selects a checkbox or radio button when the page loads |
| `autofocus` | Automatically gives the input focus when the page loads |
| `autocomplete` | Specifies whether the browser should auto-complete the input |
| `multiple` | Allows the user to enter more than one value (e.g., multiple files or emails) |
| `accesskey` | Assigns a keyboard shortcut to activate or focus the input element |

### Form-Related Attributes

| Attribute | Description |
|---|---|
| `form` | Specifies one or more forms the input belongs to |
| `formaction` | Specifies the URL that processes the input when the form is submitted |
| `formenctype` | Specifies how form data should be encoded when submitted to the server |
| `formmethod` | Defines the HTTP method (GET or POST) for sending data to the action URL |
| `formnovalidate` | Specifies that form elements should not be validated on submission |
| `formtarget` | Specifies where to display the response after submitting the form |

### File & Image Attributes

| Attribute | Description |
|---|---|
| `accept` | Specifies the types of files the server accepts (used with `type="file"`) |
| `src` | Specifies the URL of the image used as a submit button (used with `type="image"`) |
| `alt` | Provides alternative text for image inputs |
| `width` | Specifies the width of the input element (used with `type="image"`) |
| `height` | Specifies the height of the input element (used with `type="image"`) |

### Other Attributes

| Attribute | Description |
|---|---|
| `size` | Specifies the visible width of the input in characters |
| `list` | Refers to a `<datalist>` element containing pre-defined options |
| `dirname` | Specifies that the text direction will be submitted with the form |

---

## Practical Examples

### 1. Styled Password Input Field

```html
<html>
  <head>
    <style>
      input[type="password"] {
        border: 2px solid #4CAF50;
        border-radius: 4px;
        padding: 10px;
        width: 200px;
      }
    </style>
  </head>
  <body>
    <form>
      <label for="password">Password:</label>
      <input type="password" id="password" name="password">
    </form>
  </body>
</html>
```

- `type="password"` masks the input characters for privacy
- CSS applies a green border, rounded corners, and padding to improve appearance

---

### 2. Email Input Field with Placeholder

```html
<html>
  <head>
    <style>
      input[type="email"] {
        border: 1px solid #ccc;
        padding: 8px;
        font-size: 14px;
        width: 250px;
      }
    </style>
  </head>
  <body>
    <form>
      <label for="email">Email:</label>
      <input type="email" id="email" name="email"
             placeholder="example@example.com">
    </form>
  </body>
</html>
```

- `type="email"` provides a field with **built-in email format validation**
- `placeholder` displays hint text inside the field before the user starts typing

---

### 3. Complete Form with Multiple Input Types

```html
<html>
  <body>
    <form>

      <!-- Text input -->
      <label for="username">Username:</label>
      <input type="text" id="username" name="username" placeholder="Enter username" required>
      <br><br>

      <!-- Password input -->
      <label for="password">Password:</label>
      <input type="password" id="password" name="password" required>
      <br><br>

      <!-- Email input -->
      <label for="email">Email:</label>
      <input type="email" id="email" name="email" placeholder="example@example.com">
      <br><br>

      <!-- Number input -->
      <label for="age">Age:</label>
      <input type="number" id="age" name="age" min="1" max="120">
      <br><br>

      <!-- Date input -->
      <label for="dob">Date of Birth:</label>
      <input type="date" id="dob" name="dob">
      <br><br>

      <!-- Radio buttons -->
      <label>Gender:</label>
      <input type="radio" name="gender" value="male"> Male
      <input type="radio" name="gender" value="female"> Female
      <br><br>

      <!-- Checkboxes -->
      <label>Interests:</label>
      <input type="checkbox" name="interest" value="html"> HTML
      <input type="checkbox" name="interest" value="css"> CSS
      <input type="checkbox" name="interest" value="js"> JavaScript
      <br><br>

      <!-- File upload -->
      <label for="resume">Upload Resume:</label>
      <input type="file" id="resume" name="resume" accept=".pdf,.doc">
      <br><br>

      <!-- Range slider -->
      <label for="skill">Skill Level:</label>
      <input type="range" id="skill" name="skill" min="1" max="10">
      <br><br>

      <!-- Colour picker -->
      <label for="favcolour">Favourite Colour:</label>
      <input type="color" id="favcolour" name="favcolour">
      <br><br>

      <!-- Hidden input -->
      <input type="hidden" name="formID" value="contact-form-01">

      <!-- Submit button -->
      <input type="submit" value="Submit">

    </form>
  </body>
</html>
```

---

## `readonly` vs `disabled`

| | `readonly` | `disabled` |
|---|---|---|
| **User can interact** | No — cannot edit | No — cannot interact at all |
| **Value submitted with form** | Yes | No |
| **Focusable** | Yes | No |
| **Visual appearance** | Slightly greyed | Fully greyed out |

---

## Best Practices

- **Use descriptive labels** — always link each input with a `<label>` using matching `for` and `id` attributes for better accessibility and screen reader support
- **Implement client-side validation** — use HTML5 attributes like `required`, `pattern`, and `maxlength` to validate data before it reaches the server
- **Choose appropriate input types** — match the `type` attribute to the expected data (e.g., `email` for email addresses, `number` for numeric values) to improve user experience and enable built-in browser validation
- **Always use `name` attributes** — form data is only submitted for inputs that have a `name` attribute
- **Use `placeholder` wisely** — placeholder text disappears when the user starts typing, so it should never replace a `<label>`

---

## Summary

| Attribute | Key Purpose |
|---|---|
| `type` | Defines the kind of input control rendered |
| `name` | Identifies the input when form data is submitted |
| `value` | Sets the initial value of the input |
| `placeholder` | Provides hint text inside the input field |
| `required` | Forces the user to fill in the field before submitting |
| `disabled` | Disables the field entirely |
| `readonly` | Prevents editing but still submits the value |
| `min` / `max` | Sets value boundaries for number, date, or range inputs |
| `pattern` | Validates input against a regular expression |
| `multiple` | Allows multiple values to be entered |

The `<input>` tag is the backbone of HTML forms. Understanding its types, attributes, and validation capabilities is essential for building accessible, user-friendly, and secure data collection interfaces.

---