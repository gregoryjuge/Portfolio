import React from "react";
import "../css/home.css";
import Projects from "./Projects";
import About from "./About";
import Contact from "./Contact";

function Home() {
  return (
    <div className="home-page">
      <style>
        @import
        url('https://fonts.googleapis.com/css2?family=Rock+Salt&display=swap');
      </style>

      <div className="navbar">
        <h1>Grégory JUGE</h1>
        <a href="#wrap" id="open">
          <a>
            <Projects />
          </a>
          <a>
            <About />
          </a>
          <a>
            <Contact />
          </a>
        </a>
      </div>
      <div className="body-container">
          <h2>Développeur FullStack</h2>
          <h3>React / Node.js </h3>
          <div className="localisation-icon"> <h4> 44° 50' 16.04"N 0°34'45.048"W</h4></div>
      </div>
    </div>
  );
}

export default Home;
