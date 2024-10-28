import { PhotoAlbum } from "./components/PhotoAlbum";
import { BrowserRouter, NavLink, Route, Routes } from "react-router-dom";
import { Homepage } from "./components/Homepage";
import "./styles/app.scss";

/**
 * Base component that host all application
 * @returns
 */
function App() {
  return (
    <div className="app-container">
      {/** Simply router */}
      <BrowserRouter>
        <div className="menu-list">
          <div className="menu-item">
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Home
            </NavLink>
          </div>
          <div className="menu-item">
            <NavLink
              to="/PhotoAlbum"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Photo albums
            </NavLink>
          </div>
        </div>

        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/PhotoAlbum" element={<PhotoAlbum />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
