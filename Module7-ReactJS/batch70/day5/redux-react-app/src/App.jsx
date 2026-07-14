import ViewTodo from "./components/ViewTodo.jsx";
import AddTodo from "./components/AddTodo.jsx";
import "./App.css";


function App() {

  return (
    <div className="app-container">
      <h1>Todo App</h1>
      <AddTodo />
      <ViewTodo />
    </div>
  )
}

export default App
