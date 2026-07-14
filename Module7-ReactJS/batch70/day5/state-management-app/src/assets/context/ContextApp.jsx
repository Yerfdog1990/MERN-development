
import ProductPage from "./components/ProductPage.jsx";
import Navbar from "./components/Navbar.jsx";
import NotificationBell from "./components/NotificationBell.jsx";
import UserMenu from "./components/UserMenu.jsx";
import CartIcon from "./components/CartIcon.jsx";
import ProductList from "./components/ProductList.jsx";
import {StoreContext} from "./components/StoreContext.jsx";
import Checkout from "./components/Checkout.jsx";



function ContextApp() {

    const store = {

        user: { name: "John" },

        products: [
            { id: 1, name: "Laptop" }
        ],

        cart: [
            { id: 1, quantity: 2 }
        ],

        orders: [
            { id: 1001, total: 1200 }
        ],

        notifications: [
            "Order Delivered"
        ]
    };

    return (

        // Every component below can access the store.

        <StoreContext.Provider value={store}>

            <Navbar />
            <ProductPage />
            <Checkout />
            <NotificationBell />
            <CartIcon />
            <UserMenu />
            <ProductList />

        </StoreContext.Provider>

    );
}

export default ContextApp;
