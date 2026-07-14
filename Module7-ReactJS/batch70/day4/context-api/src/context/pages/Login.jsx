import {useContext, useState} from "react";
import {userContext} from "../UserContext.jsx";

export default function Login(){
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    // Step 3: Consume context
    const {setUser} = useContext(userContext);
    function handleSubmit(e) {
        e.preventDefault();
        setUser(username);
    }
    return (
        <div>
            <h3>Login form</h3>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)}/>
                <br/>
                <br/>
                <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                <br/>
                <br/>
                <button type="submit">Login</button>
            </form>
        </div>
    )
}