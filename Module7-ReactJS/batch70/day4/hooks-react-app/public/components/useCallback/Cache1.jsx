import { memo, useState } from "react";

// Memoized child component.
// React will only skip rendering if ALL props
// are exactly the same as the previous render.
const Child = memo(function Child({ handleClick }) {
    console.log("Child component rendered");

    return (
        <div
            style={{
                border: "2px solid blue",
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

function Cache1() {
    // Count changes when the child button is clicked.
    const [count, setCount] = useState(0);

    // Text changes while typing.
    const [text, setText] = useState("");

    console.log("Parent component rendered");

    // ❌ A NEW function is created every render.
    //
    // Even though the code is identical,
    // JavaScript creates a completely new function object
    // with a different memory reference.
    //
    // Render 1:
    // handleButtonClick -> 0x123
    //
    // Render 2:
    // handleButtonClick -> 0x456
    //
    // React sees a different function reference,
    // so Child's props changed and it re-renders.
    const handleButtonClick = () => {
        setCount((previousCount) => previousCount + 1);
    };

    return (
        <div>

            <input
                type="text"
                placeholder="Type here..."
                value={text}
                onChange={(e) => setText(e.target.value)}
            />

            <h3>Count: {count}</h3>

            {/* Child re-renders every time text changes
          because handleButtonClick is recreated. */}
            <Child handleClick={handleButtonClick} />
        </div>
    );
}

export default Cache1;