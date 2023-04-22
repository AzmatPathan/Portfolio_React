import React from 'react'
import './Header.css'
function Header() {
  return (
    <div className="Header">
      <a href="/home">Azmat Pathan</a>
      <nav className="Nav">

        <a href="/experience">Experience</a>
        <a href="/project">Project</a>
        <a href="/skills">Skills</a>
      </nav>


    </div> 

  )
}

export default Header