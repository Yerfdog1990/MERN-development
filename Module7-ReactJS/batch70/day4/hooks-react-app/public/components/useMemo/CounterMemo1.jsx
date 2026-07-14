import { useState } from "react";

function CounterMemo1() {
    // Count is used by the expensive calculation.
    const [count, setCount] = useState(10_000_000);

    // Theme only changes the appearance of the page.
    const [darkMode, setDarkMode] = useState(false);

    // ❌ Expensive function
    // This function runs EVERY time the component renders,
    // regardless of what caused the render.
    function calculateSum() {
        console.log("Calculating sum...");

        let total = 0;

        for (let i = 1; i <= count; i++) {
            total += i;
        }

        return total;
    }

    // Because there is NO useMemo,
    // calculateSum() executes on every render.
    const result = calculateSum();

    return (
        <div
            style={{
                backgroundColor: darkMode ? "#333" : "#fff",
                color: darkMode ? "#fff" : "#000",
                padding: "20px",
            }}
        >
            <h2>Without useMemo</h2>

            <h3>Count: {count.toLocaleString()}</h3>

            <h3>Sum: {result.toLocaleString()}</h3>

            <button onClick={() => setCount(count + 1_000_000)}>
                Increase Count
            </button>

            <button
                onClick={() => setDarkMode(!darkMode)}
                style={{ marginLeft: "10px" }}
            >
                Toggle Theme
            </button>
        </div>
    );
}

export default CounterMemo1;