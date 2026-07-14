const EventApp = () => {
    // onClick — element is clicked
    const handleClick = () => {
        console.log('onClick: Button clicked');
        alert('Button clicked!');
    };

    // onChange — input value changes (text/select/checkbox)
    const handleTextChange = (event) => {
        console.log('onChange (text):', event.target.value);
    };

    const handleSelectChange = (event) => {
        console.log('onChange (select):', event.target.value);
    };

    const handleCheckboxChange = (event) => {
        console.log('onChange (checkbox):', event.target.checked);
    };

    // onSubmit — form submitted
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('onSubmit: Form submitted');
    };

    // onKeyDown / onKeyUp — keyboard events
    const handleKeyDown = (event) => {
        console.log('onKeyDown:', event.key);
    };

    const handleKeyUp = (event) => {
        console.log('onKeyUp:', event.key);
    };

    // onFocus / onBlur — focus changes
    const handleFocus = (event) => {
        console.log('onFocus: focused', event.target.name || event.target.placeholder);
    };

    const handleBlur = (event) => {
        console.log('onBlur: blurred', event.target.name || event.target.placeholder);
    };

    // onMouseEnter / onMouseLeave — hover effects
    const handleMouseEnter = () => {
        console.log('onMouseEnter: mouse entered');
    };

    const handleMouseLeave = () => {
        console.log('onMouseLeave: mouse left');
    };

    return (
        <div className="event-app-container">
            <h1><u>📌 Event Handling in React</u></h1>

            <div className="event-section">
                {/* onClick */}
                <button onClick={handleClick}>👆 Click me (onClick)</button>

                {/* onChange — text input */}
                <div className="form-group">
                    <label htmlFor="text-input">
                        📝 Text input (onChange, onKeyDown, onKeyUp, onFocus, onBlur):
                    </label>
                    <input
                        id="text-input"
                        type="text"
                        placeholder="Type something..."
                        onChange={handleTextChange}
                        onKeyDown={handleKeyDown}
                        onKeyUp={handleKeyUp}
                        onFocus={handleFocus}
                        onBlur={handleBlur}
                    />
                </div>

                {/* onChange — select */}
                <div className="form-group">
                    <label htmlFor="select-input">
                        🎯 Choose an option (onChange, onFocus, onBlur):
                    </label>
                    <select id="select-input" onChange={handleSelectChange} onFocus={handleFocus} onBlur={handleBlur}>
                        <option value="">--Select--</option>
                        <option value="one">One</option>
                        <option value="two">Two</option>
                    </select>
                </div>

                {/* onChange — checkbox */}
                <div className="form-group checkbox-group">
                    <label htmlFor="check-input">
                        <input id="check-input" type="checkbox" onChange={handleCheckboxChange} />
                        ✅ Check me (onChange)
                    </label>
                </div>

                {/* onSubmit */}
                <form onSubmit={handleSubmit} className="form-group">
                    <label htmlFor="email-input">📧 Email (onSubmit):</label>
                    <input id="email-input" type="email" name="email" placeholder="Enter your email..." />
                    <button type="submit">✉️ Submit</button>
                </form>

                {/* onMouseEnter / onMouseLeave */}
                <div
                    className="hover-box"
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                >
                    🖱️ Hover over me (onMouseEnter / onMouseLeave)
                </div>

                {/* Inline handler example for quick alert */}
                <div>
                    <button onClick={() => alert('Say Hello (inline onClick)')}>👋 Say Hello</button>
                </div>
            </div>
        </div>
    );
};

export default EventApp;