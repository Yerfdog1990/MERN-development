import { useSelector } from "react-redux";

export default function NotificationBell() {

    const notifications = useSelector(state => state.shop.notifications);

    return (
        <div>
            Notifications ({notifications.length})
        </div>
    );
}