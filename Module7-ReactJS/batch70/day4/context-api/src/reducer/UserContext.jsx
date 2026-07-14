import {createContext, useReducer, useState} from "react";

// Step 1: Create context
const userContext = createContext();

function UserProvider({children}) {
    {/*Step 4: Update user*/}
    //const [user, setUser] = useState("Guest");
    function userReducer(state, action){
        if(action.type === "login"){
            return {user: action.payload};
        }
        if(action.type === "logout"){
            return {user: "guest"};
        }
        return state;
    }
    const [state, dispatch] = useReducer(userReducer, {user: null});
    return (
        //Step 2: Provide context
        <userContext.Provider value={{...state, dispatch}}>
            {children}
        </userContext.Provider>
    );
}

export {UserProvider, userContext}