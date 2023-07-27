import React from 'react';
import '../index.css';


function Home() {
  return (
    <div class="mainnavcontainer1" id = "home">
    
    <div class="section-title">
      <h2>About</h2>
      <p>Hello I am Ramya,with a strong educational background, relevant internship experience, and a diverse skill set, I am eager to contribute to challenging projects and constantly strive to enhance my skills.</p>
    </div>
    <div class = "aboutrow">
    <div class="row">
      <div class="col-lg-8 pt-4 pt-lg-0 content" data-aos="fade-left">
        
        <div class="row">
          <div class="col-lg-6">
            <ul>
              <li className = "list"><i class="bi bi-chevron-right"></i> <strong>Email:</strong> <span>nalliboinaramya@gmail.com</span></li>
              <li className = "list"><i class="bi bi-chevron-right"></i> <strong>Phone:</strong> <span>8790318920</span></li>
              <li className = "list"><i class="bi bi-chevron-right"></i> <strong>Birthday:</strong> <span>6 August 2001</span></li>
              
            </ul>
          </div>
          <div class="col-lg-6">
            <ul>
              <li className = "list"><i></i> <strong>Nationality:</strong> <span>Indian</span></li>
              <li className = "list"><i class="bi bi-chevron-right"></i> <strong>City:</strong> <span>Nellore, Andhra Pradesh</span></li>
              <li className = "list"><i class="bi bi-chevron-right"></i> <strong>Languages:</strong> <span>Telugu, English, Hindi</span></li>
            </ul>
          </div>
        </div>
        <div class="section-title1">
      <h2>Career Objective</h2>
      <p class = "cop" id = "special">To continue to develop practical experience and exposure in programming and software development
 while utilizing my knowledge and skills to contribute to meaningful projects and organization's success.</p>
        </div>
        
        
      </div>
    </div>
    </div>
    
    
  </div>
  );
}

export default Home