import { createRoot } from 'react-dom/client'
import TailwindApp from "./assets/method1/App.jsx";
import {BrowserRouter} from "react-router";


createRoot(document.getElementById('root')).render(
 <BrowserRouter>
    <TailwindApp />
 </BrowserRouter>
)
