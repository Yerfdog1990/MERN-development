import Home from "./components/Home"
import About from "./components/About"
import Counter from "./components/Counter"
function App() {
   const obj={name:'sumit',age:38}
  return (
    <>
       <h2> Welcome to React Training</h2>
       <Counter />
       <hr/>
       <Home />
       <hr/>
       <About myobj={obj}/>
    </>
  )
}
export default App
