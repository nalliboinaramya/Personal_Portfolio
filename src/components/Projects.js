import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import "../index.css"
import C3 from '../images/C3.png';
import C1 from '../images/C1.png';
import C2 from '../images/C2.png';



function Projects() {
  return (
    <div class = "mainnavcontainer3" id = "projects">
         <div class="section-title">
          <h2>Projects</h2>
        </div>
        <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src={C1} class="d-block w-100" alt="..."/>
      <div class="carousel-content">
      <a href='https://github.com/nalliboinaramya/Handwritten-Mathematical-Equation-Recognition-Using-CNN'><b>Project Link
        </b></a>
      </div>
    </div>
    <div class="carousel-item">
      <img src={C3} class="d-block w-100" alt="..."/>
      <div class="carousel-content">
      <a href='https://github.com/nalliboinaramya/Mind-Health-Blogging-Website'><b>Project Link
        </b></a>
      </div>
    </div>
    <div class="carousel-item">
      <img src={C2} class="d-block w-100" alt="..."/>
      <div class="carousel-content">
      <a href='https://github.com/nalliboinaramya/Epharmacy-Using-SpringBoot'><b>Project Link
        </b></a>
      </div>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
    </div>
  )
}

export default Projects