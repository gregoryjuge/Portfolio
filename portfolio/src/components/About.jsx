import React from "react";
import "../css/about.css";
import way from "../css/images/way.png";
import languagespics from "../css/images/languagespics.png";
import frameworkspics from "../css/images/frameworkspics.png";

function About() {
  return (
    <div className="about" alt="about">
      <div className="about-title">
        <h2>_ parcours</h2>
        <div class="button_cont" align="center">
          <a
            class="button-home"
            href="/"
            // target="_blank"
            // rel="nofollow noopener"
          >
            HOME
          </a>
        </div>
      </div>
      <div className="about-container">
        
          <img class="picture-way" src={way} alt="picture way"></img>
        
      </div>

      <div class="languages-container">
        <a class="language-title">
          <h3>Langages</h3>
        </a>

        <img class="picture-language" src={languagespics} alt="languages"></img>
      </div>

      <div class="frameworks-container">
        <a class="frameworks-title">
          <h3>Frameworks</h3>
        </a>
        <img
          class="picture-frameworks"
          src={frameworkspics}
          alt="frameworks"
        ></img>
      </div>
    </div>
  );
}

export default About;
