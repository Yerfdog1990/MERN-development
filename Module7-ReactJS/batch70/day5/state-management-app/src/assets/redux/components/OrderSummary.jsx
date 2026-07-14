import { useSelector } from "react-redux";

function OrderSummary() {

    const orders = useSelector(state => state.shop.orders);

    return (
        <h2>
            Orders: {orders.length}
        </h2>
    );
}

export default OrderSummary;