import Search from "./component/Search";
import Navbar from "./component/Navbar";
import axios from "axios";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import "./index.css";
import Form from "./component/Form";

function App() {
  return (
    <div className="container">
      <Router>
        <div>
          <Navbar />
        </div>
        <Routes>
          <Route path="/" element={<Search />} />
          <Route path="/form" element={<Form />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
