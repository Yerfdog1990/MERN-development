import {UserProvider} from "./UserContext.jsx";
import Logout from "./Logout.jsx";
import {Checkout} from "./pages/Checkout.jsx";
import Login from "./pages/Login.jsx";


export function ReducerApp() {
  return (
    <div>
       <UserProvider>
          <Login/>
           <Checkout/>
           <Logout/>
       </UserProvider>
    </div>
  )
}


