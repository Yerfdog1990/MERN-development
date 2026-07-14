import { useState, useEffect } from "react";

function FetchData2() {
    const [count, setCount] = useState(0);
    const [users, setUsers] = useState([]);

    console.log("Component rendered");

    useEffect(() => {
        console.log("Fetching users...");

        fetch("https://jsonplaceholder.typicode.com/users")
            .then((response) => response.json())
            .then((data) => {
                console.log("Users loaded");
                setUsers(data);
            });
    }, []); // Only once after the first render

    return (
        <>
            <h2>With useEffect</h2>

            <h3>Count: {count}</h3>

            <button onClick={() => setCount(count + 1)}>
                Increase Count
            </button>

            <p>Users: {users.length}</p>

            <ul>
                {users.map((user) => (
                    <li key={user.id}>{user.name}</li>
                ))}
            </ul>
        </>
    );
}

export default FetchData2;