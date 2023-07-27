import React from 'react'
import Home from './Home'
import Skills from './Skills'
import Projects from './Projects'
import Resume from './Resume'
import ContactInfo from './ContactInfo'

function MainNav() {
  return (
    <div>
        <Home />
        <Skills />
        <Resume />
        <Projects />
        <ContactInfo/>
    </div>
  )
}

export default MainNav