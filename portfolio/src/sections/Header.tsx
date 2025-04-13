import React from "react";
import Navbar from "../components/Navbar";
import "../styles/Header.css";

const Header = () => {
  return (
    <section className="header">
      <div className="west-side">
        <h1 className="header-title">Alissa Forde</h1>
        <div className="header-subtitle marquee">
          <div className="marquee-content">
            Welcome! Feel free to look through my page and learn a little bit
            more about me. I built this website to showcase my skills and
            projects. First time using TypeScript and it was really fun! I hope
            you enjoy your stay! &nbsp;&nbsp;&nbsp;&nbsp;{" "}
            {/* Add spacing between duplicates */}
            Welcome! Feel free to look through my page and learn a little bit
            more about me. I built this website to showcase my skills and
            projects. First time using TypeScript and it was really fun! I hope
            you enjoy your stay!
          </div>
        </div>
      </div>
      <Navbar />
    </section>
  );
};

export default Header;
