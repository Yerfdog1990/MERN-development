# Keyboard Events, Sequences & KeyboardEvent Properties

## Complete Guide with Full HTML Examples

### Table of Contents

* [Overview of Keyboard Events](https://www.google.com/search?q=%231-overview-of-keyboard-events)
* [Lifecycle Timelines & Event Execution Sequences](https://www.google.com/search?q=%232-lifecycle-timelines--event-execution-sequences)
* [Evaluating Event Properties: **_key_** vs. **_code_**](https://www.google.com/search?q=%233-evaluating-event-properties-key-vs-code)`
* [Modifiers & Defensive Event Interception](https://www.google.com/search?q=%234-modifiers--defensive-event-interception)
* [Full Integration Sandbox Demo](https://www.google.com/search?q=%235-full-integration-sandbox-demo)
* [Quick Reference Table](https://www.google.com/search?q=%23quick-reference-table)

---

### 1. Overview of Keyboard Events

Keyboard events fire when a user interacts with a physical keyboard or digital input panel. While these lifecycle hooks can be captured by almost any element on a webpage, they are most commonly attached to interactive focus elements like form inputs, textareas, or the global `window` object for keyboard shortcuts.

The DOM level 3 specification defines three core keyboard events:

* **`keydown`**: Fires the exact millisecond a key is pressed down. If the user holds the key down, this event fires repeatedly at system-defined intervals.
* **`keypress`**: *Legacy.* Fires when a key that produces a character value (letters, numbers, punctuation) is pressed. It does not fire for structural control keys like `ArrowLeft`, `Home`, `CapsLock`, or `Fn`. Like `keydown`, it repeats if a key is held down.
* **`keyup`**: Fires exactly once when the user releases the key.

---

### 2. Lifecycle Timelines & Event Execution Sequences

#### The Character Key Sequence

When a user presses a character-producing key (such as `'a'`, `'5'`, or `'Enter'`) exactly once, the browser dispatches three events in a strict sequential order:

1. **`keydown`** (Fired *before* the character is rendered in the input field)
2. **`keypress`** (Fired *before* the character is rendered in the input field)
3. **`keyup`** (Fired *after* the character has been fully rendered in the input field)

**Continuous Input:** If a user holds a character key down, the browser repeatedly loops through the input phase before finalizing the release:


$$\text{keydown} \longrightarrow \text{keypress} \longrightarrow \text{keydown} \longrightarrow \text{keypress} \dots \longrightarrow \text{keyup}$$

#### The Non-Character Key Sequence

When a user presses a structural or function key (such as `Shift`, `Escape`, `Backspace`, or page navigation keys), the browser skips the text generation phase entirely:

1. **`keydown`** (Executes immediately; repeats if held down)
2. **`keyup`** (Executes immediately upon release)

*Note:* Because `keydown` and `keypress` execute *before* the text box value changes, checking `input.value` inside these listeners will return the text *before* the new character was added. To inspect the final text string after a keystroke, use the `keyup` event or the modern `input` event.

---

### 3. Evaluating Event Properties: `key` vs. `code`

The `KeyboardEvent` object contains two critical string properties that describe the keystroke: `.key` and `.code`.

#### `event.key`

Returns the **printed character value** resulting from the keypress. It factor in modifier key states like `Shift` or `CapsLock`.

* *Example:* Pressing the `z` key returns `"z"`. Pressing `Shift + z` returns `"Z"`.

#### `event.code`

Returns the **physical key location** on the keyboard layout. It maps directly to the hardware key position and remains identical regardless of modifier keys, active language layouts (QWERTY vs. AZERTY), or capitalization.

* *Example:* Pressing `z` or `Shift + z` on a QWERTY layout always returns `"KeyZ"`.

[Image diagram showcasing mapping differences between event.key character resolution vs event.code physical key layout alignment]

---

### 4. Modifiers & Defensive Event Interception

#### Detecting Modifiers

Like mouse events, `KeyboardEvent` objects expose boolean flags to check if system modifier keys are being held down during a keystroke:

* `event.shiftKey`
* `event.ctrlKey`
* `event.altKey`
* `event.metaKey` (The Windows key on PC, Command key on Mac)

#### Intercepting and Canceling Inputs

You can intercept and block specific keystrokes by calling `event.preventDefault()` inside a **`keydown`** or **`keypress`** listener. This is commonly used to create custom hotkeys or restrict text fields to specific characters (e.g., numbers only).

```javascript
// Block users from typing numbers into an input field
inputElement.addEventListener('keydown', (event) => {
    if (event.key >= '0' && event.key <= '9') {
        event.preventDefault(); // The number will not be rendered in the text box
    }
});

```

---

### 5. Full Integration Sandbox Demo

This complete HTML file includes a real-time event sequencer log, a `key` vs. `code` matrix viewer, and a numeric input field that blocks any non-numeric keystrokes.

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Comprehensive Keyboard Events Lab</title>
    <style>
        body { font-family: Arial, sans-serif; padding: 25px; background-color: #f5f6fa; color: #2f3640; }
        .grid { display: grid; grid-template-columns: 1fr 1fr; gap: 20px; max-width: 1200px; }
        .card { border: 1px solid #dcdde1; padding: 20px; border-radius: 8px; background: #ffffff; box-shadow: 0 4px 6px rgba(0,0,0,0.05); }
        .input-field { width: 100%; padding: 12px; font-size: 16px; border: 2px solid #cbd5e1; border-radius: 6px; box-sizing: border-box; margin-bottom: 10px; }
        .input-field:focus { border-color: #3b82f6; outline: none; }
        pre { background: #2f3640; color: #f5f6fa; padding: 15px; border-radius: 6px; font-size: 14px; overflow-x: auto; font-family: monospace; line-height: 1.5; }
        .timeline-box { max-height: 250px; overflow-y: auto; background: #1e293b; color: #e2e8f0; padding: 12px; border-radius: 6px; }
        .badge { display: inline-block; padding: 4px 8px; background: #e2e8f0; margin: 2px; border-radius: 4px; font-size: 12px; font-weight: bold; }
        .badge-active { background: #22c55e; color: white; }
    </style>
</head>
<body>

    <h1>JavaScript Keyboard Events & Properties Laboratory</h1>
    
    <div class="grid">
        <div class="card">
            <h3>1. Interactive Property Inspector</h3>
            <p>Click inside the input field and press any key to inspect its properties:</p>
            <input type="text" id="inspector-input" class="input-field" placeholder="Type characters or control keys here...">
            
            <div>
                <span id="mod-shift" class="badge">SHIFT</span>
                <span id="mod-ctrl" class="badge">CTRL</span>
                <span id="mod-alt" class="badge">ALT</span>
                <span id="mod-meta" class="badge">META</span>
            </div>
            
            <pre id="property-output">event.key: Waiting...&#10;event.code: Waiting...</pre>
        </div>

        <div class="card">
            <h3>2. Sequence Timeline Logger</h3>
            <p>Watch how keyboard events execute in order:</p>
            <div id="timeline-terminal" class="timeline-box">Timeline logging initialized...</div>
            <button id="clear-log-btn" style="margin-top: 10px; padding: 6px 12px; cursor: pointer;">Clear Terminal Log</button>
        </div>

        <div class="card">
            <h3>3. Key Interception Filter (Numbers Only)</h3>
            <p>This input uses <code>event.preventDefault()</code> to block alphabetical characters, allowing <b>only numbers</b>:</p>
            <input type="text" id="numeric-input" class="input-field" placeholder="Try typing letters here...">
            <pre id="filter-status">Filter Status: Ready</pre>
        </div>
    </div>

    <script>
        // --- 1. Property Inspector Logic ---
        const inspectorInput = document.getElementById('inspector-input');
        const propertyOutput = document.getElementById('property-output');

        inspectorInput.addEventListener('keydown', (event) => {
            // Update modifier key badges
            document.getElementById('mod-shift').className = event.shiftKey ? 'badge badge-active' : 'badge';
            document.getElementById('mod-ctrl').className = event.ctrlKey ? 'badge badge-active' : 'badge';
            document.getElementById('mod-alt').className = event.altKey ? 'badge badge-active' : 'badge';
            document.getElementById('mod-meta').className = event.metaKey ? 'badge badge-active' : 'badge';

            // Print key and code metrics
            propertyOutput.textContent = `event.key:  "${event.key}"\nevent.code: "${event.code}"`;
        });

        // --- 2. Sequence Timeline Logger Logic ---
        const terminal = document.getElementById('timeline-terminal');
        const clearBtn = document.getElementById('clear-log-btn');
        let entryCounter = 1;

        function logSequence(eventName, eventObj) {
            const p = document.createElement('div');
            p.textContent = `${entryCounter++}. [${eventName}] fired -> key: "${eventObj.key}" | Value in field: "${eventObj.target.value}"`;
            terminal.appendChild(p);
            terminal.scrollTop = terminal.scrollHeight; // Auto-scrolls terminal down
        }

        inspectorInput.addEventListener('keydown', (e) => logSequence('keydown', e));
        inspectorInput.addEventListener('keypress', (e) => logSequence('keypress', e));
        inspectorInput.addEventListener('keyup', (e) => logSequence('keyup', e));

        clearBtn.addEventListener('click', () => {
            terminal.innerHTML = '';
            entryCounter = 1;
        });

        // --- 3. Input Interception Guard Logic ---
        const numericInput = document.getElementById('numeric-input');
        const filterStatus = document.getElementById('filter-status');

        numericInput.addEventListener('keydown', (event) => {
            // Allow control keys like Backspace, Delete, Arrow Left, Arrow Right, and Tab
            const controlKeys = ['Backspace', 'Delete', 'ArrowLeft', 'ArrowRight', 'Tab'];
            
            if (controlKeys.includes(event.key)) {
                filterStatus.textContent = `Filter Status: Allowed control key "${event.key}"`;
                return;
            }

            // If the key is not a number, block it
            if (event.key < '0' || event.key > '9') {
                event.preventDefault();
                filterStatus.textContent = `Filter Status: BLOCKED non-numeric key "${event.key}"`;
                filterStatus.style.color = '#ef4444';
            } else {
                filterStatus.textContent = `Filter Status: Allowed numeric key "${event.key}"`;
                filterStatus.style.color = '#22c55e';
            }
        });
    </script>
</body>
</html>

```

---

### Quick Reference Table

| Metric/Event | `keydown` | `keypress` (Legacy) | `keyup` |
| --- | --- | --- | --- |
| **Bubbles?** | **Yes** | **Yes** | **Yes** |
| **Fires On Repeatedly?** | **Yes** (If key is held down) | **Yes** (If key is held down) | No (Fires once on release) |
| **Trigger Timing** | The moment a key is pressed down. | When a character key is pressed. | The moment a key is released. |
| **Input Value Context** | Returns text *before* the key is added. | Returns text *before* the key is added. | Returns text *after* the key is added. |
| **Supports All Keys?** | **Yes** (Character & non-character keys) | No (Character keys only) | **Yes** (Character & non-character keys) |
| **Can be Canceled?** | **Yes** (Blocks text entry or shortcuts) | **Yes** (Blocks character entry) | No (Keystroke is already finished) |
| **Primary Use Case** | Building custom hotkeys, games, or character input filters. | Older text entry shortcuts (Avoid in modern code). | Reading final input values or processing search-as-you-type inputs. |
| **`.key` Property** | String representation of the character (e.g., `"A"`, `"Enter"`, `"ArrowUp"`). |  |  |
| **`.code` Property** | Hardware location code of the physical key (e.g., `"KeyA"`, `"Enter"`, `"ArrowUp"`). |  |  |

---