import { useContext } from "react";
import { StoreContext } from "./StoreContext.jsx";

function UserMenu() {

    // Reads directly from Context.

    const { user } = useContext(StoreContext);

    return (
        <h2>{user.name}</h2>
    );
}

export default UserMenu;
