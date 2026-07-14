import React, { useEffect, useRef, useState } from 'react'

const Myref = () => {
    //initilize ref 
    const inputRef=useRef(null);
    useEffect(()=>{
       inputRef.current.focus();
    },[])
    const sendData=()=>{
         let data=inputRef.current.value;
         console.log(data)
        
    }
  return (
    <div>
        <h2> useRef Example</h2>
        Enter Data : <input type='text' ref={inputRef}/> <br/>
        <button onClick={sendData}> Send</button>
    </div>
  )
}

export default Myref