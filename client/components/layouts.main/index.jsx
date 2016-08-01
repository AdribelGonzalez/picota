import Navigation from '../navigation/index.jsx';
import React from 'react';

const Layout = ({content = () => null }) => (
  <div>
     <header className="main-header">
        <div className="container">
          <div className="row">
            <div className="twelve columns">
              <div className="text-center">
                <h1>
                  <a href="/">Bolsa de Trabajos</a>
                </h1>
                <p>Encuentra tu trabajo ideal</p>
                <a className="button agregar-empleo" href="/nuevo-empleo">Agregar empleo</a>
                <a className="button ver-empleos" href="/">Registrarte/Loggearte</a>
              </div>
            </div>
          </div>
          
        </div>
      </header>
<div className="nav">
      <ul>
        <li ><a href="/" >Inicio</a></li>   
        <li ><a href="/categoria/diseno" id="diseno" >Diseño</a></li>
        <li ><a href="/categoria/programacion" id="programacion">Programacion</a></li>
        <li ><a href="/categoria/soporte" id="soporte" >Soporte</a></li>
       
      </ul>
    </div>
    <div>
    {content()}
    </div>

      <footer>
        <div className="container">
          <div className="row">
            <div className="twelve columns">
              <i className="fa fa-heart"></i><p>Adribel Gonzalez | Samil Jimenez | Ian Brito</p>
            </div>
          </div>
        </div>
      </footer>
  </div>
);


export default Layout;
