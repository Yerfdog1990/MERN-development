
import {useContext} from "react";
import {userContext} from "../UserContext.jsx";

export function Checkout(){
    // Step 3: Consume context
    const {user} = useContext(userContext);
    return (
        <div>
            <h1>Checkout as {user}</h1>
        </div>
    )
}