import { useContext } from "react";
import { StoreContext } from "./StoreContext.jsx";

export default function OrderSummary() {

    const { orders } = useContext(StoreContext);

    return (
        <h2>
            Orders: {orders.length}
        </h2>
    );
}