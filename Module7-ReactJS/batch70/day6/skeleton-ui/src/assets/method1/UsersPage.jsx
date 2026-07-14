import { useEffect, useState } from "react";
import UserCard from "../../components/UserCard.jsx";
import SkeletonCard from "./SkeletonCard.jsx";


const UsersPage = () => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const getUsers = async () => {
            try {
                const response = await fetch("https://jsonplaceholder.typicode.com/users");
                const data = await response.json();
                setUsers(data);
            } catch (error) {
                console.error("Error fetching users:", error);
            } finally {
                setLoading(false);
            }
        };
        getUsers();
    }, []);

    return (
        <div className="min-h-screen bg-gray-900 p-6 text-gray-100">
            <h1 className="text-2xl font-bold mb-6 text-center text-white">Users List</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
                {loading
                    ? Array.from({ length: 10 }).map((_, index) => <SkeletonCard key={index} />)
                    : users.map((user) => <UserCard key={user.id} user={user} />)}
            </div>
        </div>
    );
};

export default UsersPage;