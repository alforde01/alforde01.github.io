import React from "react";
import "../styles/Skills.css";

// In the future, add stars to indicate level of proficiency

const Skills = () => {
  return (
    <section className="skills">
      <div className="skill-image">
        <img src="/images/grayclouds.jpg" alt="Saguaro National Park" />
      </div>
      <h2>Skills</h2>
      <div className="skills-box">
        <div id="programming">
          <h3>Programming Languages and Tools</h3>
          <div>
            <p>TypeScript / JavaScript</p>
            <p>Node.js</p>
            <p>Java</p>
            <p>Python</p>
            <p>C-Base Programming</p>
            <p>Bash</p>
            <p>PHP</p>
            <p>XAML</p>
            <p>SQL</p>
          </div>
        </div>
        <div className="software">
          <h3>Software, Apps, and Frameworks</h3>
          <div>
            <p>Visual Studio Code</p>
            <p>Microsoft Office Suite</p>
            <p>MongoDB</p>
            <p>GraphWorx64</p>
            <p>AWS</p>
            <p>.NET</p>
            <p>Git</p>
            <p>Node.js</p>
            <p>React</p>
            <p>Jupyter Notebook</p>
          </div>
        </div>
        <div className="design">
          <h3>Design and Development</h3>
          <div>
            <p>Adobe Photoshop</p>
            <p>Adobe Lightroom</p>
            <p>Adobe Illustrator</p>
            <p>Figma</p>
            <p>AutoCAD</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
