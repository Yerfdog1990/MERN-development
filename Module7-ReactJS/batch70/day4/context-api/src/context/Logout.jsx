import {userContext} from "./UserContext.jsx";
import {useContext} from "react";

export default function Logout(){
    // Step 3: Consume context
    const {setUser} = useContext(userContext);
    return (
        <div>
            <h1>Logout</h1>
            <button onClick={() => setUser("Guest")}>Logout</button>
        </div>
    )
}