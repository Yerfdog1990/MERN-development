import { useSelector } from "react-redux";

function CartIcon() {

    const cart = useSelector(state => state.shop.cart);

    return (
        <div>
            Cart ({cart.length})
        </div>
    );
}

export default CartIcon;