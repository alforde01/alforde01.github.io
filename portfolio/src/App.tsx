import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import "./styles/App.css";
import Header from "./sections/Home";
import Skills from "./sections/Skills";
import About from "./sections/About";
import Education from "./sections/Education";
import Extracurriculars from "./sections/Extracurriculars";
import Work from "./sections/Work";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <div className="route-container">
          <Routes>
            <Route path="/" element={<Header />} />
            <Route path="/about" element={<About />} />
            <Route path="/education" element={<Education />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/work" element={<Work />} />
            <Route path="/extracurriculars" element={<Extracurriculars />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
