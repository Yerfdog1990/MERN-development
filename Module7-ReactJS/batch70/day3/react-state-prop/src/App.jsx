
import './App.css'
import Counter from "./components/01-state/States.jsx";
import Parent from "./components/02-props/Parent.jsx";
import SharedState from "./components/03-prop-lifting/SharedState.jsx";
import PropDrilling from "./components/04-prop-drilling/PropDrilling.jsx";
import ComponentComposition from "./components/04-prop-drilling/ComponentComposition.jsx";
import WithoutContextAPI from "./components/05-context-api/WithoutContextAPI.jsx";
import WithContextAPI from "./components/05-context-api/WithContextAPI.jsx";
import ThemeApp from "./components/05-context-api/ThemeApp.jsx";

function App() {
    return (
        <>
            <Counter/>
            <Parent/>
            <SharedState/>
            <PropDrilling/>
            <ComponentComposition/>
            <WithoutContextAPI/>
            <WithContextAPI/>
            <ThemeApp/>
        </>
    )
}

export default App
