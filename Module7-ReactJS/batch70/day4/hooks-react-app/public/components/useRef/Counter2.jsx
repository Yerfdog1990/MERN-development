import { useRef, useState } from "react";

function CounterRef2() {
    // State controls what appears on the screen.
    const [count, setCount] = useState(0);

    // ✅ useRef creates an object that survives every render.
    // The initial value is 0.
    const clickCounter = useRef(0);

    const handleClick = () => {
        // Update state.
        setCount(count + 1);

        // Update the ref.
        // This value is NOT reset after rendering.
        clickCounter.current++;

        console.log("Ref value:", clickCounter.current);
    };

    return (
        <div>
            {/* State updates the UI */}
            <h3>State Count: {count}</h3>

            {/* React does NOT re-render when a ref changes.
          This value only updates on the next render caused by state. */}
            <h3>Ref Count: {clickCounter.current}</h3>

            <button onClick={handleClick}>
                Increment
            </button>
        </div>
    );
}

export default CounterRef2;