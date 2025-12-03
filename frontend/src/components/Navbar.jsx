import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";

function Navbar({ isAuthenticated, user, onLogout }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLogout = () => {
    setMenuOpen(false);
    onLogout();
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-brand">
          <div className="brand-logo">
            <span className="logo-icon">📝</span>
            <h1>BlogApp</h1>
          </div>
        </Link>

        <button
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <ul className={`navbar-menu ${menuOpen ? "active" : ""}`}>
          <li>
            <Link to="/" onClick={() => setMenuOpen(false)}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/posts" onClick={() => setMenuOpen(false)}>
              All Posts
            </Link>
          </li>

          {isAuthenticated ? (
            <>
              <li>
                <Link to="/create" onClick={() => setMenuOpen(false)}>
                  ✍️ Create
                </Link>
              </li>
              <li>
                <Link to="/my-posts" onClick={() => setMenuOpen(false)}>
                  My Posts
                </Link>
              </li>
              <li className="user-section">
                <div className="user-info">
                  <span className="user-avatar">👤</span>
                  <span className="user-name">{user}</span>
                </div>
              </li>
              <li>
                <button className="logout-btn" onClick={handleLogout}>
                  Logout
                </button>
              </li>
            </>
          ) : (
            <>
              <li>
                <Link to="/login" onClick={() => setMenuOpen(false)}>
                  Login
                </Link>
              </li>
              <li>
                <Link to="/signup" onClick={() => setMenuOpen(false)}>
                  Sign Up
                </Link>
              </li>
            </>
          )}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
