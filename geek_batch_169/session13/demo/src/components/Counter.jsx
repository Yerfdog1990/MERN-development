import React,{useState} from 'react'
const Counter = () => {
    //define state 
    const [count,setCount]=useState(0)
  return (
    <div>
        <h3> useState Counter Example</h3>
        <p> The state count value is {count}</p>
        <button onClick={()=> setCount(val=> val+1)}> ++ </button>
         <button onClick={()=> setCount(val=> val-1)}> -- </button>
          <button onClick={()=> setCount(0)}> Reset </button>
    </div>
  )
}

export default Counter