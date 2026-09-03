import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import {
  ShieldCheck,
  LogIn,
  UserPlus,
  Menu,
  X,
  Home,
  FileText,
  BriefcaseBusiness,
} from "lucide-react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className="navbar">
      <div className="navbar-container">

        {/* ================= LOGO ================= */}
        <Link to="/" className="navbar-logo" onClick={closeMenu}>
          <div className="logo-icon">
            <ShieldCheck size={25} />
          </div>

          <div className="logo-text">
            <span className="logo-name">DocVault</span>
            <span className="logo-ai">AI</span>
          </div>
        </Link>

        {/* ================= DESKTOP NAV ================= */}
        <div className="navbar-links">

          <NavLink
            to="/"
            className={({ isActive }) =>
              `nav-link ${isActive ? "active" : ""}`
            }
          >
            <Home size={17} />
            Home
          </NavLink>

          <NavLink
            to="/documents"
            className={({ isActive }) =>
              `nav-link ${isActive ? "active" : ""}`
            }
          >
            <FileText size={17} />
            Documents
          </NavLink>

          <NavLink
            to="/opportunities"
            className={({ isActive }) =>
              `nav-link ${isActive ? "active" : ""}`
            }
          >
            <BriefcaseBusiness size={17} />
            Opportunities
          </NavLink>

        </div>

        {/* ================= AUTH BUTTONS ================= */}
        <div className="navbar-actions">

          <Link to="/login" className="login-btn">
            <LogIn size={17} />
            Login
          </Link>

          <Link to="/register" className="register-btn">
            <UserPlus size={17} />
            Get Started
          </Link>

        </div>

        {/* ================= MOBILE BUTTON ================= */}
        <button
          className="mobile-menu-btn"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={25} /> : <Menu size={25} />}
        </button>

      </div>

      {/* ================= MOBILE MENU ================= */}
      {menuOpen && (
        <div className="mobile-menu">

          <NavLink
            to="/"
            onClick={closeMenu}
            className={({ isActive }) =>
              `mobile-nav-link ${isActive ? "active" : ""}`
            }
          >
            <Home size={18} />
            Home
          </NavLink>

          <NavLink
            to="/documents"
            onClick={closeMenu}
            className={({ isActive }) =>
              `mobile-nav-link ${isActive ? "active" : ""}`
            }
          >
            <FileText size={18} />
            Documents
          </NavLink>

          <NavLink
            to="/opportunities"
            onClick={closeMenu}
            className={({ isActive }) =>
              `mobile-nav-link ${isActive ? "active" : ""}`
            }
          >
            <BriefcaseBusiness size={18} />
            Opportunities
          </NavLink>

          <div className="mobile-auth">

            <Link
              to="/login"
              className="mobile-login"
              onClick={closeMenu}
            >
              <LogIn size={18} />
              Login
            </Link>

            <Link
              to="/register"
              className="mobile-register"
              onClick={closeMenu}
            >
              <UserPlus size={18} />
              Get Started
            </Link>

          </div>

        </div>
      )}
    </nav>
  );
}

export default Navbar;