import Search from "./component/Search.jsx";
import Navbar from "./component/Navbar.jsx";
import axios from "axios";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import "./index.css";
import Auth from "./component/Auth.jsx";

function App() {
  return (
    <div className="container">
      <p>abc</p>
      <Router>
        <div>
          <Navbar />
        </div>
        <Routes>
          <Route path="/" element={<Search />} />
          <Route path="/form" element={<Auth />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
