import { Provider } from "react-redux";
import { store } from "./store";
import Navbar from "./components/Navbar.jsx";
import ProductPage from "./components/ProductPage.jsx";
import Checkout from "./components/Checkout.jsx";
import NotificationBell from "./components/NotificationBell.jsx";


export function ReduxApp() {

    return (

        <Provider store={store}>

            <Navbar />
            <ProductPage />
            <Checkout />
            <NotificationBell />

        </Provider>

    );

}