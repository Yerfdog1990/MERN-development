import { useRef, useEffect } from 'react';

function InputFocus() {
    const inputRef = useRef(null);
    const headingRef = useRef(null);

    useEffect(() => {
        inputRef.current.focus();
        headingRef.current.style.color = "red";
        // Must be inside useEffect — DOM not available during render phase
    }, []);

    return (
        <>
            <h1 ref={headingRef}>Hello World</h1>
            <input ref={inputRef} type="text" />
        </>
    );
}

export default InputFocus;