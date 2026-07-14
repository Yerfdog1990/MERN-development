import React from 'react'

function HandlingEvents() {
    const handleClick = (event) => {
        console.log(event.type);
        console.log(event.target);
        console.log(event.target.value);
    }
    return (
        <>
            <h1>Handling Events</h1>
            <button onClick={handleClick}>Click me</button>
        </>

    )
}

export default HandlingEvents
