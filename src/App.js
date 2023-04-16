import { Routes, Route } from "react-router-dom";
import { NavLink } from "react-router-dom";

import "./App.css";
import { Home } from "./pages/Home";

function App() {
  return (
    <div className="App">
      hello
      <nav>
        <NavLink to="/">Home</NavLink>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
