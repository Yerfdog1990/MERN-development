import {useContext} from "react";
import {StoreContext} from "./StoreContext.jsx";

function CartIcon() {

    const { cart } = useContext(StoreContext);

    return (
        <div>
            Cart ({cart.length})
        </div>
    );
}

export default CartIcon;