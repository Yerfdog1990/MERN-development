import {useContext} from "react";
import {userContext} from "./UserContext.jsx";


export default function Logout(){
    // Step 3: Consume context
    const {dispatch} = useContext(userContext);
    return (
        <div>
            <h1>Logout</h1>
            <button onClick={() => dispatch({type: "logout"})}>Logout</button>
        </div>
    )
}