
import React from 'react';

const Categoria = ({empleos}) => (


       <div className="container">
<div className="row ">
  <ul>
      {empleos.map(({_id, posicion, compania, tipo, categoria}) => (
        <li className="empleo" key={_id}>
          <a className="titulo" href={`/empleo/${_id}`}>{posicion}</a>
          <div className="row">
            <div className="three columns">
                <i className="fa fa-arrow"></i><span className="compania"><i>{categoria}</i> </span>
              </div>
              <div className="nine columns">
                <div className="u-pull-right"><i className="fa fa-building"></i><span className="compania">{compania}       </span><i className="fa fa-clock-o"></i><span className="compania">  {tipo}</span></div>
              </div>
          </div>
         
        </li>
      ))}
    </ul>
    </div>
</div>

);

export default Categoria;