import { useState } from "react";

function FetchData1() {
    const [count, setCount] = useState(0);
    const [users, setUsers] = useState([]);

    console.log("Fetching users...");

    // ❌ BAD: Runs on every render
    fetch("https://jsonplaceholder.typicode.com/users")
        .then((response) => response.json())
        .then((data) => {
            console.log("Users loaded");
            setUsers(data); // Causes another render
        });

    return (
        <>
            <h2>Without useEffect</h2>

            <h3>Count: {count}</h3>

            <button onClick={() => setCount(count + 1)}>
                Increase Count
            </button>

            <p>Users: {users.length}</p>
        </>
    );
}

export default FetchData1;