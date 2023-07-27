import React from 'react';
import "../index.css"


function Resume() {
  return (
    <div className='mainnavcontainer4' id = "resume">
        <section id="resume" class="resume">
      <div class="container">

        <div class="section-title">
          <h2>Resume</h2>
          
        </div>

        <div class="row" id = "row3">
          <div class="col-lg-6" data-aos="fade-up">
            

            <h3 class="resume-title">Education</h3>
            <div class="resume-item">
              <h4>Bachelore Of Technology in Computer Science And Engineering</h4>
              <h5>2019 - 2023</h5>
              <p><em>Narayana Engineering College,Nellore Andhra Pradesh</em></p>
              <p>Relevant CourseWork: Algebra and Calculus, Problem Solving & Programming, Probability, Data Strucutres, Communicative English, Python, Java, Database Management Systems, Discrete Mathematics, Number Theory and Applications, Software Engineering, Computer Networks</p>
              <p>CGPA: 8.65</p>
              
            </div>
            
          </div>
          <div class="col-lg-6" data-aos="fade-up" data-aos-delay="100">
            <h3 class="resume-title">Internships</h3>
            <div class="resume-item">
              <h4>Machine Learning Trainee</h4>
              <h5>Aug 2022 &#8208; Oct 2022</h5>
              <p><em>Indian Servers </em></p>
              <ul>
                <li>Created a model for Chest X-Ray Diagnosis using Transfer Learning.</li>
                <li>Posted a short describing video of project on LinkedIn.</li>
                <li>Implemented Linear Regression on different Data Sets as part of Assignments.</li>
                
              </ul>
            </div>
            <div class="resume-item">
              <h4>Python Developer Intern</h4>
              <h5>Dec 2021 &#8208; Mar 2022</h5>
              <p><em>Disruptian Technologies Pvt Ltd</em></p>
              <ul>
                <li>Coordinated with team of five and worked on live projects..</li>
                <li>Developed employment website for job listings based on different filters 
and user login in Django.</li>
                <li>Exposed to Spring Boot on Eclipse.</li>
                
              </ul>
            </div>
          </div>
        </div>

      </div>
    </section>

    </div>
  )
}

export default Resume
