// Parent → Child → GrandChild
// Child doesn't use count — just passes it
import {useState} from "react";

function ParentComponent() {
    const [count, setCount] = useState(0);
    return <ChildComponent count={count} setCount={setCount} />;
}

function ChildComponent({ count, setCount }) {
    return <GrandChildComponent count={count} setCount={setCount} />;
}

function GrandChildComponent({ count, setCount }) {
    return (
        <>
            <h3>Count: {count}</h3>
            <button onClick={() => setCount(count + 1)}>Increase</button>
        </>
    );
}

export default ParentComponent;

