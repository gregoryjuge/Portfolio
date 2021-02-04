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
              <a href="about">A Propos</a>
            </li>
            <li>
              <a href="contact">Contact</a>
            </li>
          </ul>
        </header>

      </div>
      <div className="body-container">
        <h2>Développeur FullStack</h2>
        <h3>React / Node.js </h3>
        <h4> 44° 50' 16.04"N 0°34'45.048"W</h4>
      </div>
    </div>
  );
}

export default Home;
