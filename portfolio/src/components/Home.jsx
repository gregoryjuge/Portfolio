import React from "react";
import "../css/home.css";
import github from "../css/images/github.png";
import linkedin from "../css/images/linkedin.png";
import Menu from "./Menu";

import Projects from "./Projects";
import About from "./About";
import Contact from "./Contact";

function Home() {
  return (
    <div className="home-page">
      {/* <style>
        @import
        url('');
      </style> */}
      <div className="header">
        <div className="home-title">
          <h1>Gregory JUGE</h1>
        </div>
        <div className="navbar">
          <header class="header">
            <input class="menu-btn" type="checkbox" id="menu-btn" />
            <label class="menu-icon" for="menu-btn">
              <Menu />
              
              {/* <span class="navicon">
                
                
                
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
</svg>



              </span> */}
            </label>
            <ul class="menu">
              <li>
                <a href="projects">_ Projets</a>
              </li>
              <li>
                <a href="about">_ Parcours</a>
              </li>
              <li>
                <a href="contact">_ Contact</a>
              </li>
            </ul>
          </header>
        </div>
      </div>
      <div className="body-container">
        <h1>Développeur FullStack</h1>
        <h3>(React / Node.js)</h3>
        <h3>44° 50' 16.04"N 0°34'45.048"W</h3>
      </div>
      <div className="footer-container">
        <div class="icons-footer">
          <a href="https://github.com/gregoryjuge" target="_blank">
            <img
              class="logo-rs"
              src={github}
            />
          </a>

          <a
            href="https://fr.linkedin.com/public-profile/in/gr%C3%A9gory-juge-83104890?challengeId=AQGdZdufOxlgtwAAAXd9pKLQXvDpy6nU_Dl2GfHmngD804Nbe-x4MO4RbQn_3rmKFNnFED4v1Ir-mRoupLiFoW998Lke0YE8nQ&submissionId=e5036655-e988-6116-c109-171b127f593f"
            target="_blank"
          >
            <img
              class="logo-rs"
              src={linkedin}
            />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Home;
