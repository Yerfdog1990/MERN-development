import {createContext, useState} from "react";

// Step 1: Create context
const userContext = createContext();

function UserProvider({children}) {
    {/*Step 4: Update user*/}
    const [user, setUser] = useState("Guest");
    return (
        //Step 2: Provide context
        <userContext.Provider value={{user, setUser}}>
            {children}
        </userContext.Provider>
    );
}

export {UserProvider, userContext}