import {UserMenu} from "./UserMenu.jsx";
import {CartIcon} from "./CartIcon.jsx";

export function Navbar({ user, cart }) {

    // Navbar doesn't actually use user or cart.

    // It simply forwards them.

    return (
        <>
            <UserMenu user={user} />
            <CartIcon cart={cart} />
        </>
    );
}