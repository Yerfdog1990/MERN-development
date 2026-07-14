import { useState } from 'react';

function JSXFile() {
    const name = "JSXFile"
    const [count, setCount] = useState(0);
    const Increment = () => {
        setCount(count + 1);
    }
    return (
        <>
            <h1>{name}</h1>
            <p>{name}  file is a JavaScript file that uses JSX (JavaScript XML) syntax to combine JavaScript logic with HTML-like markup in the same file. It is primarily used in React to build reusable user interface components safely and visually.</p>
            <button onClick={Increment}>Increment</button>
            <p>Count: {count}</p>
        </>
    )
}

export default JSXFile