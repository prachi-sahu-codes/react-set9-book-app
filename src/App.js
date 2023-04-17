import { Routes, Route } from "react-router-dom";
import { NavLink } from "react-router-dom";

import "./App.css";
import { Home } from "./pages/Home";
import { Read } from "./pages/Read";
import { Profile } from "./pages/Profile";
import { Favourite } from "./pages/Favourite";
import { NotFound } from "./pages/NotFound";
import { useData } from "./api/DataContext";

const getActiveStyle = ({ isActive }) => ({
  color: isActive ? "#240046" : "#7b2cbf",
  textDecoration: isActive ? "underline" : "",
});

function App() {
  const { readCount, favList } = useData();
  return (
    <div className="App">
      <nav className="navigation">
        <NavLink to="/" style={getActiveStyle} className="navLink">
          Home
        </NavLink>
        <NavLink to="/fav" style={getActiveStyle} className="navLink">
          Favourites ({favList.length ?? 0})
        </NavLink>
        <NavLink to="/read" style={getActiveStyle} className="navLink">
          Read ({readCount})
        </NavLink>
        <NavLink to="/profile" style={getActiveStyle} className="navLink">
          Profile
        </NavLink>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/fav" element={<Favourite />} />
        <Route path="/read" element={<Read />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
