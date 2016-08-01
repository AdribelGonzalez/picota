import Navigation from '../navigation/index.jsx';
import Botones from '../loginBotones/index.jsx';
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
              
                <Botones />
              </div>
            </div>
          </div>
          
        </div>
      </header>
<Navigation />
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
