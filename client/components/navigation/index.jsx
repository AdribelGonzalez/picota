import React from 'react';

const Navigation = () => (
  <div className="nav">
      <ul>
        <li class="home"><Link to="/" activeClassName="active">Inicio</Link></li>
        <li class="tutorials"><Link to="/categoria/diseno" activeClassName="active">Diseño</Link></li>
        <li class="about"><Link to="/categoria/programacion" activeClassName="active">Programacion</Link></li>
        <li class="news"><Link to="/categoria/soporte" activeClassName="active">Soporte</Link></li>
      </ul>
    </div>
);

export default Navigation;
