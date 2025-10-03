import React from "react";
import Navbar from "../components/Navbar";
import "../styles/About.css";

const About = () => {
  return (
    <section className="about">
      <Navbar />
      <h2>Who Am I?</h2>
      <div className="about-section">
        <div className="about-text">
          <h3>Software Engineer</h3>
          <p>
            I am an aspiring software engineer with a love for creating
            solutions and designs. My journey in technology began with an
            introduction to coding in 6th grade and an interest in the creative
            aspect behind it. Since then, it has evolved into a career where I
            can combine my creativity and technical skills.
          </p>
        </div>
        <div className="about-text">
          <h3>Designer</h3>
          <p>
            I am an aspiring designer with a passion for creating cool and
            user-friendly interfaces. I believe that design is not just about
            how something looks, but how it's experienced as well. I strive to
            create designs that are not only visually appealing but also easy
            and fun to use and I am always looking for ways to improve my
            skills.
          </p>
        </div>
        <div className="about-text">
          <h3>Student</h3>
          <p>
            I am a student who is always eager to learn and grow. As people say,
            education is a lifelong journey, and I am committed to expanding my
            knowledge and skills in the field of technology and design. I am
            currently pursuing a masters degree in computer science, will
            continue to expand upon my knowledge in fields like machine
            learning, software engineering, and hardware applications.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
