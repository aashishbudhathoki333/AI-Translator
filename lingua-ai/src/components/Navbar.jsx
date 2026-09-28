import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  Languages,
  Menu,
  X,
  History,
  Bookmark,
  Settings,
} from "lucide-react";

function Navbar() {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    {
      name: "Translator",
      path: "/translator",
    },
    {
      name: "History",
      path: "/history",
      icon: History,
    },
    {
      name: "Saved",
      path: "/saved",
      icon: Bookmark,
    },
    {
      name: "Settings",
      path: "/settings",
      icon: Settings,
    },
  ];

  return (
    <header className="navbar">
      <div className="nav-inner">
        <Link
          to="/"
          className="brand"
          onClick={() => setMenuOpen(false)}
        >
          <span className="brand-icon">
            <Languages size={21} />
          </span>

          <span>
            Lingua<span className="brand-ai">AI</span>
          </span>
        </Link>

        <nav className={`nav-links ${menuOpen ? "open" : ""}`}>
          {links.map((link) => {
            const Icon = link.icon;

            return (
              <Link
                key={link.path}
                to={link.path}
                className={
                  location.pathname === link.path ? "active" : ""
                }
                onClick={() => setMenuOpen(false)}
              >
                {Icon && <Icon size={17} />}
                {link.name}
              </Link>
            );
          })}
        </nav>

        <div className="nav-actions">
          <Link to="/translator" className="nav-cta">
            Start translating
          </Link>

          <button
            className="mobile-menu"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={23} /> : <Menu size={23} />}
          </button>
        </div>
      </div>
    </header>
  );
}

export default Navbar;