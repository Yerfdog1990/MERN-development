import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import PortalApp from "./components/PortalApp.jsx";

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <App />
        <PortalApp />
    </StrictMode>,
)
