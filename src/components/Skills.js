import React from 'react';
import "../index.css"


function Skills() {
  const skills1 = [
    {
      "skill": "Python",
      "percent": 80
    },
    {
      "skill": "Java",
      "percent": 60
    },
    {
      "skill": "SpringBoot",
      "percent": 40
    },]
  const skills2 = [
    {
      "skill": "MySql",
      "percent": 60
    },
    {
      "skill": "React",
      "percent": 40
    },
    {
      "skill": "C-Language",
      "percent": 80
    },]

  return (



    <div class="mainnavcontainer2" id="skills">
      <section id="skills" class="skills section-bg">


        <div class="section-title">
          <h2>Skills</h2>
        </div>

        <div class="row skills-content" id="row2">

          <div class="col-lg-6" data-aos="fade-up">
            {skills1.map((item, index) => (
              <div class="progress" key={index}>
                <span class="skill">{item.skill} <i class="val">{item.count}</i></span>
                <div class="progress-bar-wrap">
                  <div class="progress-bar" role="progressbar" style={{ width: `${item.percent}%` }} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
              </div>))}
          </div>

          <div class="col-lg-6" data-aos="fade-up" data-aos-delay="100">
            {skills2.map((item, index) => (
              <div class="progress" key={index}>
                <span class="skill">{item.skill}<i class="val">{item.count}</i></span>
                <div class="progress-bar-wrap">
                  <div class="progress-bar" role="progressbar" style={{ width: `${item.percent}%` }} aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
              </div>
            ))}
            </div>

            
          </div>




      </section>
      <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.4/jquery.min.js"></script>
      <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"></script>
    </div>
  )
}

export default Skills