import {OrderSummary} from "./OrderSummary.jsx";

export function Checkout({ orders }) {

    // Doesn't use orders.

    return (
        <OrderSummary orders={orders} />
    );
}