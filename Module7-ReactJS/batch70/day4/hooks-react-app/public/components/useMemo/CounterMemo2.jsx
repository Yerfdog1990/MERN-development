import { useMemo, useState } from "react";

function CounterMemo2() {
    // Count is used by the expensive calculation.
    const [count, setCount] = useState(10_000_000);

    // Theme only changes the appearance.
    const [darkMode, setDarkMode] = useState(false);

    // ✅ React remembers the result of this expensive calculation.
    // It only recalculates when 'count' changes.
    const result = useMemo(() => {
        console.log("Calculating sum...");

        let total = 0;

        for (let i = 1; i <= count; i++) {
            total += i;
        }

        return total;
    }, [count]); // Only recalculate when count changes

    return (
        <div
            style={{
                backgroundColor: darkMode ? "#333" : "#fff",
                color: darkMode ? "#fff" : "#000",
                padding: "20px",
            }}
        >
            <h2>With useMemo</h2>

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

export default CounterMemo2;