import {StoreContext} from "./StoreContext.jsx";
import {useContext} from "react";

function NotificationBell() {

    const { notifications } = useContext(StoreContext);

    return (
        <div>
            Notifications ({notifications.length})
        </div>
    );
}

export default NotificationBell;
