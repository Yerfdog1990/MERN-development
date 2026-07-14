
import './App.css'
import {useState} from "react";
import './index.css'

function App() {
    const [open, setOpen] = useState(false);
    const [theme, setTheme] = useState("light");
  return (
      <div className={`${theme} min-h-screen text-slate-900 dark:bg-background dark:text-secondary`}>
          <div className="flex items-center justify-between p-4">
              <div className="font-bold">Log</div>
              {/*Desktop Nav*/}
              <div className="hidden sm:flex gap-2 items-center">
                  <span className="hover:text-blue-300 mr-2">Home</span>
                  <span className="hover:text-blue-300 mr-2">About</span>
                  <span className="hover:text-blue-300 mr-2">Contact</span>
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
                  <span className="hover:text-blue-300 mr-2">Home</span>
                  <span className="hover:text-blue-300 mr-2">About</span>
                  <span className="hover:text-blue-300 mr-2">Contact</span>
                  <button className="text-xl cursor-pointer" onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
                      {theme === "light" ? "🌙" : "☀️"}
                  </button>
              </div>
          )}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 text-white dark:bg-slate-900 dark:text-white p-6 gap-6 text-center font-semibold text-2xl sm:text-sm md:text-2xl lg:text-3xl">
              <div className="bg-slate-900 p-4 hover:bg-slate-600 hover:scale-105 transition-all duration-600 rounded">Feature One</div>
              <div className="bg-slate-900 p-4 hover:bg-slate-600 hover:scale-105 transition-all duration-600  rounded">Feature Two</div>
              <div className="bg-slate-900 p-4 hover:bg-slate-600 hover:scale-105 transition-all duration-600 rounded">Feature Three</div>
              <div className="bg-slate-900 p-4 hover:bg-slate-600 hover:scale-105 transition-all duration-600 rounded">Feature Four</div>
              <div className="bg-slate-900 p-4 hover:bg-slate-600 hover:scale-105 transition-all duration-600 rounded">Feature Five</div>
              <div className="bg-slate-900 p-4 hover:bg-slate-600 hover:scale-105 transition-all duration-600 rounded">Feature Six</div>
          </div>
      </div>

  );
}

export default App
