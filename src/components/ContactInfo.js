import React from 'react';
import "../index.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faLocation, faMobile } from '@fortawesome/free-solid-svg-icons';

function ContactInfo() {
  return (
    <div class = "mainnavcontainer5" id = "contactinfo">
        <section id="contact" class="contact">
      <div class="container">

        <div class="section-title">
          <h2>Contact</h2>
          
        </div>

        <div class="row" data-aos="fade-in" id = "row4">

          <div class="col-lg-5 d-flex align-items-stretch">
            <div class="info">
              <div class="address">
              
                <i class="bi bi-geo-alt"><FontAwesomeIcon icon = {faLocation}/></i>
                
                <h4>Location:</h4>
                <p>Tipparaju Vari Street, Nellore-524001, Andhra Pradesh</p>
              </div>

              <div class="email">
                <i class="bi bi-envelope"><FontAwesomeIcon icon = {faEnvelope}/></i>
                <h4>Email:</h4>
                <p>nalliboinaramya@gmail.com</p>
              </div>

              <div class="phone">
                <i class="bi bi-phone"><FontAwesomeIcon icon = {faMobile}/></i>
                <h4>Call:</h4>
                <p>8790318920</p>
              </div>
            </div>
        </div>
    </div>
</div>
</section>
</div>
  )
}

export default ContactInfo