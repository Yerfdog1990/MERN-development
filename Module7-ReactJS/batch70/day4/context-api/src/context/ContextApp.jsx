
import '../App.css'
import {Checkout} from "./pages/Checkout.jsx";
import Login from "./pages/Login.jsx";
import {UserProvider} from "./UserContext.jsx";
import Logout from "./Logout.jsx";

export function ContextApp() {
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

