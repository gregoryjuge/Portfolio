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
      <div className="home-title">
        <h1>Grégory JUGE</h1>
      </div>
      <div className="navbar">
        <header class="header">
          <input class="menu-btn" type="checkbox" id="menu-btn" />
          <label class="menu-icon" for="menu-btn">
            <span class="navicon"></span>
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
      <div className="body-container">
        <h3>Développeur FullStack</h3>
        <h3>React / Node.js </h3>
        <h4> 44° 50' 16.04"N 0°34'45.048"W</h4>
      </div>
      <div className="footer-container">
        <div class="icons-footer">
          <a href="https://github.com/gregoryjuge" target="_blank">
            <img
              class="logo-rs"
              src="https://www.flaticon.com/svg/vstatic/svg/1051/1051377.svg?token=exp=1612561896~hmac=82cf0eb240dad4ecec53709c76565467"
            />
          </a>

          <a
            href="https://fr.linkedin.com/public-profile/in/gr%C3%A9gory-juge-83104890?challengeId=AQGdZdufOxlgtwAAAXd9pKLQXvDpy6nU_Dl2GfHmngD804Nbe-x4MO4RbQn_3rmKFNnFED4v1Ir-mRoupLiFoW998Lke0YE8nQ&submissionId=e5036655-e988-6116-c109-171b127f593f"
            target="_blank"
          >
            <img
              class="logo-rs"
              src="https://www.flaticon.com/premium-icon/icons/svg/665/665212.svg"
            />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Home;
