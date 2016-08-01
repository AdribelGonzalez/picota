import React from 'react';

const Lista = ({empleos}) => (
  <div className="container">
<div className="row ">
  <ul>
      {empleos.map(({_id, posicion, compania, tipo, categoria, createdAt}) => (
        <li className="empleo" key={_id}>
          <a className="titulo" href={`/empleo/${_id}`}>{posicion}</a>
          <div className="row">
            <div className="six columns">
                <i className="fa fa-arrow"></i><span className="compania"><i>{categoria}</i> | </span>   <i className="fa fa-calendar"></i><span className="created-at">{(() => {
    return moment({createdAt}).format('L');})()}  </span>
              </div>
              <div className="six columns">
                <div className="u-pull-right"><i className="fa fa-building"></i><span className="compania">{compania}       </span><i className="fa fa-clock-o"></i><span className="compania">  {tipo}</span></div>
              </div>
          </div>
         
        </li>
      ))}
    </ul>
    </div>
</div>
      // {empleos.map(({_id, posicion, createdAt, compania, tipo}) => (

      //   <div className="empleo" key={empleo._id}>
      //     <div className="row">
      //       <div className="twelve columns titulo">
      //         <a className="title" href={FlowRouter.path('empleo', {_id})}>{empleo.posicion}</a>
      //       </div>
      //     </div>
      //     <div className="row">
      //       <div className="three columns">
      //         <i className="fa fa-calendar"></i><span className="created-at">{empleo.createdAt.toString()}</span>
      //       </div>
            
      //         <div className="nine columns">
      //           <div className="u-pull-right"><i className="fa fa-building"></i><span className="compania">{empleo.compania}</span></div>
      //           <div className="u-pull-right"><i className="fa fa-clock-o"></i><span className="compania">{empleo.tipo}</span></div>

      
      //         </div>
      //     </div>
      //   </div>
        
      // ))}

);

export default Lista;
