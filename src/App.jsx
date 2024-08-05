

import './App.css'
import { Route, BrowserRouter as Router , Routes, Link } from 'react-router-dom'

import Saludo from './components/Saludo'
import Eventos from './components/Eventos'
import Iteracion from './components/Iteracion'
import Fetching from './components/Fetching'
import Usuarios from './components/Usuarios'
import Navbar from './components/Navbar'
import UlVertical from './components/UlVertical'
import { withUlComponent } from './components/withUlComponent'
import UlHorizontal from './components/UlHorizontal'

function App() {
  
  const rsList = [

    {id: 1, name: "GitHub" , icon : "FaGithub" },
    {id: 2, name: "Twiter" , icon : "FaTwitter" },
    {id: 2, name: "Linkedin" , icon : "FaLinkedin"},
    {id: 2, name: "Naomi" , icon : "FaShieldDog"},
    {id: 2, name: "WhatsApp" , icon : "FaSquareWhatsapp"}

  ]
  const RsHoc = withUlComponent(UlVertical,rsList)

  //const RsHOC = withUlComponent (UlHorizontal, rsList)



  return (
    <>
    
      <Router>
        <Navbar></Navbar>
        <div className='container'>
          <div className='row'>

            <div className='col-4'><Link to={"/"}>Principal</Link></div>
            <div className='col-4'><Link to={"/Saludo/"}>Experiencia</Link></div>
            <div className='col-4'><Link to={"/Contacto/"}>Contacto</Link></div>
            <div className='col-4'><Link to={"/Searching/"}>Searching</Link></div>

          </div>
        </div>

        <div className='container'>
          <Routes>
            <Route path='/'element={<Fetching ></Fetching>}></Route>
            <Route path='/saludo/' element={ <Eventos></Eventos>}></Route>
            <Route path='/contacto' element={<Iteracion></Iteracion>}></Route>
            <Route path='/Searching' element={<Usuarios></Usuarios>}></Route>


          </Routes>
        </div>

      <footer>
        <div className='row'>
          <div className='col-4'></div>
          <div className='col-4'></div>
          <div className='col-4'>
            <UlVertical  list ={rsList}></UlVertical>
            {/*<RsHoc></RsHoc>*/}

          </div>

        </div>


      </footer>

      </Router>
    
    </>
  )
}

export default App
