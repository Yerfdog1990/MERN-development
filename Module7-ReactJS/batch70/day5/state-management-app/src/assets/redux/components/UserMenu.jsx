import { useSelector } from "react-redux";

function UserMenu() {

    const user = useSelector(state => state.shop.user);

    return <h2>{user.name}</h2>;
}

export default UserMenu;