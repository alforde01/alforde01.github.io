import React from "react";
import "../styles/Extracurriculars.css";

const Extracurriculars = () => {
  return (
    <section className="extracurriculars">
      {/* Left Section */}
      <div className="left-section">
        <h2>Extracurriculars</h2>
        <div>
          <h3>The National Society of Black Engineers</h3>
          <p>Member of UCF Chapter since Fall 2022</p>
          <p>Advisor ll (2024-2025)</p>
          <p>Senator (2023-2024)</p>
          <p>Parlimentarian (2022-2023)</p>
          <p>Technical Help and Community Outreach Committee (2021-2022)</p>
        </div>
        <div>
          <h3>Central Florida Community Arts</h3>
          <p>Member since January 2020</p>
          <p>2nd Violinist</p>
        </div>
      </div>

      {/* Right Section */}
      <div className="right-section"></div>
    </section>
  );
};

export default Extracurriculars;
