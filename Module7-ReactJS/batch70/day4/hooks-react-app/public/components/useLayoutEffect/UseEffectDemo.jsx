import { useState, useEffect, useRef } from "react";

function UseEffectDemo() {
    const [count, setCount] = useState(0);
    const boxRef = useRef(null);

    useEffect(() => {
        console.log("Runs AFTER browser paints");

        // Move the box after it is already visible
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
                    background: "tomato",
                    transition: "transform 0.3s"
                }}
            />
        </>
    );
}

export default UseEffectDemo;