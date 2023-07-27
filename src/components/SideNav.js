import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import Nav from 'react-bootstrap/Nav';
import "../index.css"
import linkedin from "../images/linkedin.jpg";

import "../../node_modules/bootstrap/dist/css/bootstrap.min.css"


import { Container } from 'react-bootstrap';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faLinkedin,faGithub,faGmail, faInstagram, } from "@fortawesome/free-brands-svg-icons";
import { faContactBook, faFile, faHome, faHouse, faList, faPerson, faProjectDiagram, faUser } from '@fortawesome/free-solid-svg-icons';
import { HashLink as Link } from 'react-router-hash-link';
import "./ContactInfo"


function SideNav() {
  return (
    <div className = "sidenavcontainer">
      <div>
        <img className = "profile" src ={linkedin} />
        <h1 class = "main-heading">Ramya Nalliboina</h1>
      </div>
    <Container>
      <a  href= "https://www.linkedin.com/in/ramya-nalliboina-4ba33b241/" >
      <FontAwesomeIcon class = "indvicon" icon = {faLinkedin}/>
      </a>

      <a href= "https://github.com/nalliboinaramya" >
      <FontAwesomeIcon class = "indvicon" icon={faGithub} />
      </a>

      <a href= "https://www.instagram.com/ramya._06_/" >
      <FontAwesomeIcon class = "indvicon" icon={faInstagram} />
      </a>

    </Container >

    <Nav defaultActiveKey="/home" className="flex-column">
      
      
      
      <Nav.Link href="./home">
        <FontAwesomeIcon class = "indvicon1 " icon = {faUser}/> 
          <Link class = "router-link" to ="#home"><span class ="menu-text">About</span></Link>
      </Nav.Link>

      <Nav.Link  href="/home">
        <FontAwesomeIcon class = "indvicon1" icon = {faList}/> <Link class = "router-link" to = "#skills"><span class ="menu-text">skills
          </span></Link>
      </Nav.Link>
      
      <Nav.Link href="/home">
        <FontAwesomeIcon class = "indvicon1" icon = {faFile}/> <Link class = "router-link" to = "#resume"><span class ="menu-text">Resume
          </span></Link>
      </Nav.Link>
      
      <Nav.Link href="/home">
        <FontAwesomeIcon class = "indvicon1" icon = {faProjectDiagram}/> <Link class = "router-link" to = "#projects"><span class ="menu-text">Projects
          </span></Link>
      </Nav.Link>
      
      <Nav.Link href="./ContactInfo">
        <FontAwesomeIcon class = "indvicon1" icon = {faContactBook}/> <Link class = "router-link" to = "#contactinfo"> <span class ="menu-text">Contact Info
          </span></Link>
      </Nav.Link>

     
     
      
    </Nav>
   

    </div>

  )
}

export default SideNav