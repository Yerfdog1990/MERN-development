import { memo, useCallback, useState } from "react";

// Memoized child component.
const Child = memo(function Child({ handleClick }) {
    console.log("Child component rendered");

    return (
        <div
            style={{
                border: "2px solid green",
                padding: "10px",
                marginTop: "20px",
            }}
        >
            <h3>Child Component</h3>

            <button onClick={handleClick}>
                Increase Count
            </button>
        </div>
    );
});

function Cache2() {
    // Count changes when the child button is clicked.
    const [count, setCount] = useState(0);

    // Text changes while typing.
    const [text, setText] = useState("");

    console.log("Parent component rendered");

    // ✅ useCallback remembers the function.
    //
    // React returns the SAME function reference
    // every render because the dependency array is empty.
    //
    // Render 1:
    // handleButtonClick -> 0x123
    //
    // Render 2:
    // handleButtonClick -> 0x123
    //
    // Since Child receives the same function reference,
    // React.memo skips rendering the Child.
    const handleButtonClick = useCallback(() => {
        setCount((previousCount) => previousCount + 1);
    }, []);

    return (
        <div>

            <input
                type="text"
                placeholder="Type here..."
                value={text}
                onChange={(e) => setText(e.target.value)}
            />

            <h3>Count: {count}</h3>

            {/* Child does NOT re-render when typing.
          It only re-renders if handleButtonClick changes,
          which it never does because useCallback caches it. */}
            <Child handleClick={handleButtonClick} />
        </div>
    );
}

export default Cache2;