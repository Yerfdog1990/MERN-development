import { memo, useState } from "react";

// ✅ memo() tells React to remember this component.
// React only re-renders it if its props change.
const Child = memo(function Child() {
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
            <p>I have no state and no props.</p>
        </div>
    );
});

function Rendering2() {
    // Parent state.
    const [count, setCount] = useState(0);

    console.log("Parent component rendered");

    return (
        <div>

            <h3>Count: {count}</h3>

            <button onClick={() => setCount(count + 1)}>
                Increment Count
            </button>

            {/*
        React compares the child's props.

        Since Child has no props,
        React sees that nothing has changed
        and skips rendering the child.
      */}
            <Child />
        </div>
    );
}

export default Rendering2;