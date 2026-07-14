
import React, { useState } from 'react';

function StatesApp(){
    const [count, setCount] = useState(0);
    const [name, setName] = useState('');
    const [isOpen, setIsOpen] = useState(false);
    const [items, setItems] = useState([]);
    const [user, setUser] = useState({});

    return (
        <div>
            <h1><u>Learning React States</u></h1>
            <p>Count: {count}</p>
            <button onClick={() => setCount(count + 1)}>Increment</button>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
            <p>Name: {name}</p>
            <button onClick={() => setIsOpen(!isOpen)}>Toggle</button>
            {isOpen && <p>Open</p>}
            <button onClick={() => setItems([...items, "New Item"])}>Add Item</button>
            <ul>
                {items.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
            <button onClick={() => setUser({ name: "John Doe", age: 30 })}>Update User</button>
            <p>User: {user.name} - {user.age}</p>
        </div>
    )
}

export default StatesApp