import React from "react";
import "../css/projects.css";
import timara from "../css/images/timara.png";
import mysterium from "../css/images/mysterium.png";
import neurolab from "../css/images/neurolab.png"

function Projects() {
  return (
    <div className="projectspage">
      <h2>Projets</h2>
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
      <div className="global-container">
        <div class="container-timara">
          <a
            class="timara-box"
            href="https://wcs-project1.netlify.app/"
            target="blank"
          >
            <img
              class="picture-timara"
              src={timara}
              alt="Timara Photographie"
            ></img>
          </a>
          <div class="project-info">
            <h3 class="project-title">Timara Photographie</h3>
            <p>Projet d'équipe en méthode Scrum</p>
            <p>Production d'une nouvelle version du site d'un commerçant</p>
            <p>HTML5 CSS3 JAVASCRIPT GIT/GITHUB</p>
          </div>
        </div>
        <div class="container-mysterium">
          <a
            class="mysterium-box"
            href="https://mysterium-app.herokuapp.com/"
            target="blank"
          >
            <img
              class="picture-mysterium"
              src={mysterium}
              alt="Mysterium"
            ></img>
          </a>
          <div class="project-info">
            <h3 class="project-title">Mysterium</h3>
            <p>Projet d'équipe en méthode Scrum</p>
            <p>Production d'une application web du célèbre jeu de société</p>
            <p>REACT NODEJS GIT/GITHUB</p>
          </div>
        </div>
        <div class="container-neurolab">
          <a
            class="neurolab-box"
            // href=""
            // target="blank"
          >
            <img
              class="picture-neurolab"
              src={neurolab}
              alt="neurolab"
            ></img>
          </a>
          <div class="project-info">
            <h3 class="project-title">Neurolab</h3>
            <p>Projet d'équipe en méthode Scrum</p>
            <p>Production d'un Dashboard d'expérimentations pour professeurs et étudiants</p>
            <p>REACT NODEJS REDUX GIT/GITHUB</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
