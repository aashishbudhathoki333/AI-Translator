import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X, Languages } from "lucide-react";

function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const closeMenu = () => {
    setMobileOpen(false);
  };

  return (
    <header className="navbar">
      <div className="navbar-container">
        <Link to="/" className="brand" onClick={closeMenu}>
          <span className="brand-icon">
            <Languages size={22} />
          </span>

          <span>
            Lingua<span>AI</span>
          </span>
        </Link>

        <nav className="desktop-nav">
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Home
          </NavLink>

          <NavLink
            to="/translator"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Translator
          </NavLink>

          <NavLink
            to="/history"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            History
          </NavLink>

          <NavLink
            to="/saved"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Saved
          </NavLink>
        </nav>

        <div className="navbar-actions">
          <Link to="/translator" className="nav-cta">
            Try Translator
          </Link>

          <button
            className="mobile-menu-button"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <nav className="mobile-nav">
          <NavLink to="/" onClick={closeMenu}>
            Home
          </NavLink>

          <NavLink to="/translator" onClick={closeMenu}>
            Translator
          </NavLink>

          <NavLink to="/history" onClick={closeMenu}>
            History
          </NavLink>

          <NavLink to="/saved" onClick={closeMenu}>
            Saved
          </NavLink>

          <Link
            to="/translator"
            className="mobile-cta"
            onClick={closeMenu}
          >
            Try Translator
          </Link>
        </nav>
      )}
    </header>
  );
}

export default Navbar;