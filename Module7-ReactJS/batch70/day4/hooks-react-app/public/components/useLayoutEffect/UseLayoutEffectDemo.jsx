import { useState, useLayoutEffect, useRef } from "react";

function UseLayoutEffectDemo() {
    const [count, setCount] = useState(0);
    const boxRef = useRef(null);

    useLayoutEffect(() => {
        console.log("Runs BEFORE browser paints");

        // Move the box before it becomes visible
        boxRef.current.style.transform = `translateX(${count * 50}px)`;
    }, [count]);

    return (
        <>
            <button onClick={() => setCount(count + 1)}>
                Move Box
            </button>

            <div
                ref={boxRef}
                style={{
                    width: "80px",
                    height: "80px",
                    background: "royalblue",
                    transition: "transform 0.3s"
                }}
            />
        </>
    );
}

export default UseLayoutEffectDemo;