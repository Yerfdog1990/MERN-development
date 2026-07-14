import { useState } from "react";
const Counter=()=>{
    const [count,setCount]=useState(0);
    const increment=()=>{
        setCount(val=> val+1)
    }
    return(
        <div>
            <h2> State Counter Example</h2>
            <p> The counter is {count}</p>
            <button onClick={increment}> ++ </button>
            <button onClick={()=> setCount(val=> val-1)}> -- </button>
            <button onClick={()=> setCount(0)}> Reset </button>
        </div>
    )
}
export default Counter;