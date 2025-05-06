import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <NavLink to="/" className={({ isActive }) => (isActive ? "active" : "")}>
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
    </nav>
  );
};

export default Navbar;
