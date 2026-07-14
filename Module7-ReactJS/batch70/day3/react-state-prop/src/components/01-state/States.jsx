import {useState} from "react";

function Counter(){
    const [count, setCount] = useState(0)
    
    return (
        <>
            <h1>{count}</h1>
            <p>{count}</p>  {/* auto-updates everywhere */}

            <button onClick={() => setCount(count + 1)}>Increment</button>
            <button onClick={() => setCount(count - 1)}>Decrement</button>
        </>
    )
}

export default Counter
