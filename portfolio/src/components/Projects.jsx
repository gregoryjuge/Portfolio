import React from "react";
import "../css/projects.css";
import timara from "../css/images/timara.png";

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
      <div class="container-timara">
        <a class="timara-box" href="https://wcs-project1.netlify.app/" target="blank">
          
            <img class="picture-timara" src={timara} alt="Timara Photographie"></img></a>
            <div class="project-info">
            <h3 class="project-title">Timara Photographie</h3> 
            <p>Projet d'équipe en méthode Scrum</p>
            <p>Production d'une nouvelle version du site d'un commerçant</p>
            <p>HTML5 CSS3 JAVASCRIPT GIT/GITHUB</p></div> 
        
      </div>
    </div>
  )
  
}

export default Projects;
