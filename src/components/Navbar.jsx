

import UlHorizontal from "./UlHorizontal"
import { withUlComponent } from "./withUlComponent"

function Navbar(){

  const rsList = [

    {id: 1, name: "GitHub" , icon : "FaGithub" ,title : "GitHub", href : "https://github.com/MaickYNG"},
    {id: 2, name: "Linkedin" , icon : "FaLinkedin", title : "Linkedin", href : "https://www.linkedin.com/in/maicol-humberto-ramirez-leal/"}
  ]

  const RsHOC = withUlComponent (UlHorizontal, rsList)


  return(<>
  

<nav className="navbar navbar-expand-lg  navbar navbar-light"  >
  <a className="navbar-brand" href="#">Mi Portafolio</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarText">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <a className="nav-link" href="#">Inicio </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Experiencia</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Tecnologias</a>
      </li>
    </ul>
    {/*<span className="navbar-text">
      Navbar text with an inline element
    </span>*/}
    
  </div>

  {/*<UlHorizontal list={rsList}></UlHorizontal>*/}
  <RsHOC></RsHOC>
  
</nav>

</>)

}
export default Navbar
