import React from "react";

import "./navigation-bar.css";

import { useState } from "react";
import { NavLink } from "react-router-dom";

const NavigationBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="navigation-bar">
      <div className="navigation-inner">
        <NavLink className="brand" to="/" aria-label="Tom Tam home" onClick={closeMenu}>
          <span className="brand-mark">TT</span>
          <span>
            <strong>Tom Tam</strong>
            <small>Inner character. Outer prosperity.</small>
          </span>
        </NavLink>
        <button
          className="menu-toggle"
          type="button"
          aria-expanded={menuOpen}
          aria-controls="primary-navigation"
          aria-label="Toggle navigation"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span></span><span></span>
        </button>
        <nav id="primary-navigation" className={`primary-navigation${menuOpen ? " is-open" : ""}`}>
          <NavLink className="nav-link" to="/" end onClick={closeMenu}>About</NavLink>
          <NavLink className="nav-link" to="/coaching" onClick={closeMenu}>Coaching</NavLink>
          <NavLink className="nav-link" to="/character-development" onClick={closeMenu}>Character Development</NavLink>
          <NavLink className="nav-link" to="/insights" onClick={closeMenu}>Insights</NavLink>
        </nav>
      </div>
    </header>
  );
};

NavigationBar.propTypes = {};

NavigationBar.defaultProps = {};

export default NavigationBar;
