import React, { useEffect, useState } from 'react';

export default function UserList() {
    const [users, setUsers] = useState([]);

    const fetchUsers = async () => {
        const url = 'https://jsonplaceholder.typicode.com/users';
        const response = await fetch(url);
        const data = await response.json();
        setUsers(data);
    };

    useEffect(() => {
        // avoid "Promise returned from fetchUsers is ignored" lint warning
        // using `void` ensures the returned promise is intentionally not awaited here
        void fetchUsers();
    }, []);

    return (
        <div>
            <h1>User List</h1>
            <ul>
                {users.map((user) => (
                    <li key={user.id}>{user.name}</li>
                ))}
            </ul>
        </div>
    );
}