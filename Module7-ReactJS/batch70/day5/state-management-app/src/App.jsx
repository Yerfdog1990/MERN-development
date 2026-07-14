import PropApp from "./assets/props/PropApp.jsx";
import ContextApp from "./assets/context/ContextApp.jsx";
import {ReduxApp} from "./assets/redux/ReduxApp.jsx";
import './App.css'

function App() {
  return (
    <div>
      <h1>State Management App</h1>
      <section>
        <div className="prop">
            <h2>Prop drilling</h2>
            <PropApp />
        </div>
      </section>
      <section>
        <div className="context">
            <h2>Context API</h2>
            <ContextApp />
        </div>
      </section>
      <section>
        <div className="redux">
            <h2>Redux</h2>
            <ReduxApp />
        </div>
      </section>
    </div>
  )
}

export default App
