// UserCard.jsx
import { Link } from "react-router-dom";

const UserCard = ({ user }) => {
    return (
        <Link
            to={`/user/${user.id}`}
            className="bg-gray-700 w-full max-w-md p-4 rounded-lg shadow-md mb-4 flex items-center space-x-4 hover:bg-gray-700 transition"
        >
            <div className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold text-lg">
                {user.name.charAt(0)}
            </div>
            <div>
                <h2 className="text-lg font-semibold text-white">{user.name}</h2>
                <p className="text-gray-300">{user.email}</p>
                <p className="text-gray-400 text-sm">{user.address.city}</p>
            </div>
        </Link>
    );
};

export default UserCard;