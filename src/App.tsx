import { PhotoAlbum } from "./components/PhotoAlbum";
import {
  BrowserRouter,
  Link,
  NavLink,
  Route,
  Router,
  Routes,
} from "react-router-dom";
import { Homepage } from "./components/Homepage";
import "./styles/app.scss";

function App() {
  return (
    <div className="app-container">
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
              Album
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
