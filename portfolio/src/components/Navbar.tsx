import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "../styles/Navbar.css";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="navbar">
      {/* Hamburger menu for mobile */}
      <button
        className={`hamburger${open ? " open" : ""}`}
        onClick={() => setOpen((prev) => !prev)}
        aria-label="Toggle navigation"
      >
        <span />
        <span />
        <span />
      </button>

      {/* Navigation links */}
      <div className={`nav-links${open ? " open" : ""}`}>
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          Home
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          About
        </NavLink>
        <NavLink
          to="/education"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          Education
        </NavLink>
        <NavLink
          to="/skills"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          Skills
        </NavLink>
        <NavLink
          to="/work"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          Work
        </NavLink>
        <NavLink
          to="/extracurriculars"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          Extracurriculars
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
