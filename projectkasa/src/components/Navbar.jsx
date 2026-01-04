import { NavLink } from "react-router-dom";
import "./Navbar.scss";
import logo from "../assets/Kasaheader.png";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src={logo} alt="Kasa logo" />
      </div>
      <div className="navbar-links">
        <NavLink
          to="/"
          end
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          Accueil
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          À propos
        </NavLink>
      </div>
    </nav>
  );
}

export default Navbar;
