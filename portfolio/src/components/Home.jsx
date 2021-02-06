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
        <header class="header">
          <h1>Grégory JUGE</h1>

          <input class="menu-btn" type="checkbox" id="menu-btn" />
          <label class="menu-icon" for="menu-btn">
            <span class="navicon"></span>
          </label>
          <ul class="menu">
            <li>
              <a href="projects">Projets</a>
            </li>
            <li>
              <a href="about">Quel est mon parcours ?</a>
            </li>
            <li>
              <a href="contact">Contact</a>
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

          <a href="" target="_blank">
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
