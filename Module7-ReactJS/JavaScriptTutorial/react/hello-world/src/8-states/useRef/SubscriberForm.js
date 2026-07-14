import { useRef } from 'react';

const SubscriberForm = () => {
    const inputRef = useRef(null);

    const handleClick = () => {
        inputRef.current.focus(); // directly calls focus() on the input DOM node
    };

    return (
        <div>
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" ref={inputRef} />
            <button type="submit" onClick={handleClick}>
                Submit
            </button>
        </div>
    );
};

export default SubscriberForm;