import { useState } from "react";

function CounterRef1() {
    // State causes the component to re-render.
    const [count, setCount] = useState(0);

    // ❌ Normal variable
    // This variable is recreated every time the component renders.
    let clickCounter = 0;

    const handleClick = () => {
        // Updating state causes a re-render.
        setCount(count + 1);

        // Increment the normal variable.
        clickCounter++;

        console.log("Variable value:", clickCounter);
    };

    return (
        <div>
            {/* This value updates because it is stored in React state */}
            <h3>State Count: {count}</h3>

            {/* This always shows 0 because clickCounter is reset on every render */}
            <h3>Variable Count: {clickCounter}</h3>

            <button onClick={handleClick}>
                Increment
            </button>
        </div>
    );
}

export default CounterRef1;