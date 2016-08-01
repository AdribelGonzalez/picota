import React from 'react';

const Empleo = ({empleo}) => (


  <div>
    <div className="row tituloP">
      <div className="twelve columns"><center>
        <h2>{empleo.posicion}</h2>
        <h5><i className="fa fa-flask"></i> {empleo.categoria}  | <i className="fa fa-clock-o"></i> {empleo.tipo}</h5></center>
      </div>
    </div>
    <div className="container">
      <div className="row mostrar-empleo">
        <div className="twelve columns show-job">

          <div className="row">
            <div className="three columns">
              <img className="logo" src={empleo.logo} /><br /> <br />
              <div><i className="fa fa-building"></i><span className="company"> {empleo.compania}</span></div>
              <div><i className="fa fa-map-pin"></i><span className="company"> {empleo.ubicacion}</span></div>
              <div><i className="fa fa-desktop"></i><a className="homepage" href={`${empleo.url}`} target="_blank"> {empleo.url}</a></div>

              <i className="fa fa-envelope"></i><span> {empleo.correo}</span>
              <hr />
             
              <i className="fa fa-calendar"></i><span className="created-at">Publicado  {(() => {
    return moment(empleo.createdAt).format('L');

      })()}</span>
            </div>
            <div className="nine columns">
              <h4>Descripción del Puesto</h4>
              <p>{empleo.descripcion}</p>
              <hr />
              <h4>Como Aplicar</h4>
              <p>{empleo.comoaplicar}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

);

export default Empleo;