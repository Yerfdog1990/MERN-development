import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { ContextApp } from './context/ContextApp.jsx'
import {ReducerApp} from "./reducer/ReducerApp.jsx";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ContextApp />
      <ReducerApp/>
  </StrictMode>,
)
