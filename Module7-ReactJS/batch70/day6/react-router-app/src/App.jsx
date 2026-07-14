import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./components/Home.jsx";
import Contact from "./components/Contact.jsx";
import About from "./components/About.jsx";
import {Link} from "react-router-dom";
import NotFound from "./components/NotFound.jsx";
import "./App.css";


export default function App(){
  return (
      <BrowserRouter>
          {/* Navigation */}
          <nav className="bg-gray-200 p-4 flex gap-4">
              <Link to="/" className="hover:text-blue-300 mr-2">Home</Link>
              <Link to="/about" className="hover:text-blue-300 mr-2">About</Link>
              <Link to="/contact" className="hover:text-blue-300 mr-2">Contact</Link>
          </nav>

          {/* Routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
  );
}