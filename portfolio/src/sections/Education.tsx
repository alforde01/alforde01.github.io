import React from "react";
import Navbar from "../components/Navbar";
import "../styles/Education.css";

const Education = () => {
  return (
    <section className="education">
      <Navbar />
      <h2>Education</h2>
      <div>
        <div className="education-text">
          <h3>M.S. in Computer Science</h3>
          <p>University of Central Florida</p>
          <p>Expected Graduation: May 2027</p>
          <h3>B.S. in Computer Science, Minor Studio Art</h3>
          <p>University of Central Florida</p>
          <p>May 2025</p>
          <p>
            Coursework Highlight: Object Oriented Programming, Computer Science
            l & ll, Computer Logic and Organization, Systems Software, Process
            for Object-Oriented Software Development, Algorithms for Machine
            Learning, Database Systems, Programming Languages, Artificial
            Intelligence, Operating Systems.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Education;
