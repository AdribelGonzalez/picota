// import React from 'react';
// class ModificarEmpleo extends React.Component {

//     getMeteorData() {
//     var myForm = ProjectForm.findOne({_id:this.props.router.params._id});
//     var projects = ProjectForm.find({});
//     return {myForm:myForm,projects:projects};
//   }
//   clickLoadForm(appId)
//   {
//     var currentApp = Projects.findOne({appId}, {sort: {createdAt: -1}});
//     var state = new Object();
//     var refs = this.refs;
//     Object.keys(refs).map(function(prop,index){
//       state[prop] = typeof currentApp[prop] == 'undefined' ? "" : currentApp[prop];
//     });
//     this.setState(state);
//   }
//   renderListProjects() {

//     return this.data.projects.map(function(projectform,i) {
//       return <li key={"li"+i}><a onClick={_this.clickLoadForm.bind(_this,projectform._id)} href={Meteor.absoluteUrl()+'project/' +projectform._id} key={"a"+i}>Project {projectform._id}</a></li>;
//     });
//   }
//   getInitialState() {
//      return Projects.findOne({this.props.router.params._id}, {sort: {createdAt: -1}});
//   }
  
//   render() {
//     const {error} = this.props;
//     return (
//       <div className="container">
//         <div className="row">
//           <div className="twelve columns show-job">
//             <div className="row">
              
//                 <div className="nuevo-empleo">
//                   <h2>Agregar un Empleo</h2>
//                   {error ? <p style={{ color: 'red' }}>{error}</p> : null}

//                   <form className="agregar-empleo">
//                   <div className="six columns">
//                     <label htmlFor="posicion">Posicion</label>
//                     <input type="text" ref="posicionRef" placeholder="Introduzca la posicion deseada." />

//                     <label htmlFor="descripcion">Descripcion</label>
//                     <textarea ref="descripcionRef" placeholder="Describa la posicion." ></textarea>


//                     <label htmlFor="correo">E-Mail</label>
//                     <input type="email" ref="correoRef" placeholder="ejemplo@ejemplo.com" />


//                     <label htmlFor="compania">Compañia</label>
//                     <input type="text" ref="companiaRef" placeholder="Nombre de su empresa."/>


//                     <label htmlFor="url">Pagina Web</label>
//                     <input type="text" ref="urlRef" placeholder="www.ejemplo.com" />

//                     <label htmlFor="logo">Logo</label>
//                     <input type="text" ref="logoRef" placeholder="http://ejemplo.com/imagen.jpg" />
// </div> <div className="six columns">
//                     <label htmlFor="categoria">Categoria</label>
//                     <select name="categorias" ref="categoriaRef" id="categorias">
//                       <option title='diseno' value="diseno">Diseño</option>
//                       <option title='programacion' value="programacion" >Programacion</option>
//                       <option title='soporte' value="soporte">Soporte</option>
//                     </select>

//                     <label htmlFor="tipo">Tipo de Trabajo</label>
//                     <select name="tipo" ref="tipoRef" id="tipo">
//                       <option title='full-time' value="full-time">Full-time</option>
//                       <option title='part-time' value="part-time">Part-time</option>
//                       <option title='Freelance' value="Freelance">Freelance</option>
//                     </select>

//                     <label htmlFor="ubicacion">Ubicacion</label>
//                     <input type="text" ref="ubicacionRef" placeholder="Ubicacion del trabajo." />

//                     <label htmlFor="comoaplicar">Como Aplicar</label>
//                     <textarea ref="comoaplicarRef" placeholder="Instrucciones sobre como aplicar." ></textarea>
// <br /><br /><br />
//                     <button onClick={this.crearEmpleo.bind(this) }>Modificar Empleo</button></div>
//                   </form>
                
//               </div></div></div></div></div>

//     );
//   }

//   modificarEmpleo() {
//     const {modificar} = this.props;
//     const {posicionRef, descripcionRef, correoRef, companiaRef, urlRef, logoRef, categoriaRef, tipoRef, ubicacionRef, comoaplicarRef} = this.refs;


//     modificar(posicionRef.value, descripcionRef.value, correoRef.value, companiaRef.value, urlRef.value, logoRef.value, categoriaRef.value, tipoRef.value, ubicacionRef.value, comoaplicarRef.value);
//   }
// }

// export default NuevoEmpleo;