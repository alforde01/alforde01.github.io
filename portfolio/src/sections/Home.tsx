import React from "react";
import "../styles/Home.css";

// Add a link to the website source code on on the portfolio text --> "Click me"

const Header = () => {
  return (
    <section className="header">
      <div className="image-container">
        <img src="/images/desert.JPG" alt="Saguaro National Park" />
      </div>
      <div className="bottom-area">
        <h1 className="header-title">Alissa Forde's</h1>
        <h3 className="header-subtitle">
          {" "}
          . . . . . . . . . . . . . . Portfolio
        </h3>
      </div>
    </section>
  );
};

export default Header;
