
import './App.css'
import {useState} from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import BookPage from "../pages/BookPage";
import BookDetailsPage from "../pages/BookDetailsPage";
import './index.css'

function App() {
  const [open, setOpen] = useState(false);
  const [theme, setTheme] = useState("light");
  return (
      <Router>
        <div className={`${theme} min-h-screen text-slate-900 dark:bg-background dark:text-secondary`}>
          <div className="flex items-center justify-between p-4">
            <div className="font-bold">Bookstore</div>
            {/*Desktop Nav*/}
            <div className="hidden sm:flex gap-2 items-center">
              <a href="/" className="hover:text-blue-300 mr-2">Home</a>
              <button className="hover:text-blue-300 mr-2">Login</button>
              <button className="hover:text-blue-300 mr-2">Signup</button>
              <button className="text-xl cursor-pointer" onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
                {theme === "light" ? "🌙" : "☀️"}
              </button>
            </div>
            {/*Mobile Menu Toggle*/}
            <button className="flex sm:hidden text-xl cursor-pointer" onClick={() => setOpen(!open)}>
              {open ? "✕" : "☰"}
            </button>
          </div>
          {/*Mobile Nav*/}
          {open && (
              <div className="flex flex-col items-center gap-2 text-slate-900 dark:bg-slate-900 dark:text-white p-4 sm:hidden">
                <a href="/" className="hover:text-blue-300 mr-2">Home</a>
                <button className="hover:text-blue-300 mr-2">Login</button>
                <button className="hover:text-blue-300 mr-2">Signup</button>
                <button className="text-xl cursor-pointer" onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
                  {theme === "light" ? "🌙" : "☀️"}
                </button>
              </div>
          )}
          <Routes>
            <Route path="/" element={<BookPage />} />
            <Route path="/book/:id" element={<BookDetailsPage />} />
          </Routes>
        </div>
      </Router>

  );
}

export default App
