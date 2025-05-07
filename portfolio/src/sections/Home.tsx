import React from "react";
import "../styles/Home.css";

// Add a link to the website source code on on the portfolio text --> "Click me"

const Header = () => {
  return (
    <section className="header">
      <div className="image-container">
        <img src="/images/desert.jpg" alt="Saguaro National Park" />
      </div>
      <div className="bottom-area">
        <h1 className="header-title">Alissa Forde's</h1>
        <h3 className="header-subtitle">
          . . . . . . . . . . . . . .{" "}
          <a
            href="https://github.com/alforde01/alforde01.github.io/tree/main/portfolio"
            className="portfolio-link"
          >
            Portfolio
          </a>
        </h3>
        <img
          src="/images/icons8-click.png"
          alt="Arrow pointing to Portfolio"
          className="click-image"
        />
      </div>
    </section>
  );
};

export default Header;
