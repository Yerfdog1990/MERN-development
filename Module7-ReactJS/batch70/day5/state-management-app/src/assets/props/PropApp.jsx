// PropApp.jsx

import {ProductPage} from "./components/ProductPage.jsx";
import {Navbar} from "./components/Navbar.jsx";
import {Checkout} from "./components/Checkout.jsx";
import {NotificationBell} from "./components/NotificationBell.jsx";

function PropApp() {
    const user = { name: "John" };

    const products = [
        { id: 1, name: "Laptop" },
        { id: 2, name: "Phone" }
    ];

    const cart = [
        { id: 1, quantity: 2 }
    ];

    const orders = [
        { id: 1001, total: 1200 }
    ];

    const notifications = [
        "Your order has shipped"
    ];

    return (
        <>
            <Navbar
                user={user}
                cart={cart}
            />

            <ProductPage
                products={products}
            />

            <Checkout
                orders={orders}
            />

            <NotificationBell
                notifications={notifications}
            />
        </>
    );
}

export default PropApp;
