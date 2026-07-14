import { useState } from "react";

// ❌ Normal child component.
// Every time the parent component re-renders,
// this child component also re-renders.
function Child() {
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
            <p>I have no state and no props.</p>
        </div>
    );
}

function Rendering1() {
    // Parent state.
    // Every button click changes this state,
    // causing the parent component to re-render.
    const [count, setCount] = useState(0);

    console.log("Parent component rendered");

    return (
        <div>

            <h3>Count: {count}</h3>

            <button onClick={() => setCount(count + 1)}>
                Increment Count
            </button>

            {/*
        Although Child has no state and no props,
        React renders it again whenever the parent renders.
      */}
            <Child />
        </div>
    );
}

export default Rendering1;