import logo from './logo.svg';
import './App.css';
import {useState} from "react";

function App() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");
  return (
    <div className="App">
      <div>
        <input onChange={(e) => setText(e.target.value)} placeholder="Enter text"/>
      </div>
      <p>Hello - {text}</p>
      <span>{count}</span>
      <button onClick={() => setCount(count + 1)}>Click</button>
    </div>
  );
}

export default App;
