import React from "react";
import logo from "./logo.svg";
import "./styles/App.css";
import Header from "./sections/Header";
import Skills from "./sections/Skills";
import About from "./sections/About";
import Education from "./sections/Education";
import Extracurriculars from "./sections/Extracurriculars";
import Work from "./sections/Work";

function App() {
  return (
    <div className="App">
      <Header />
      <About />
      <Skills />
      <Work />
      <Education />
      <Extracurriculars />
    </div>
  );
}

export default App;
