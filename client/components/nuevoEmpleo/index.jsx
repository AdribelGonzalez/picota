import React from 'react';
class NuevoEmpleo extends React.Component {
  render() {
    const {error} = this.props;
    return (
      <div className="container">
        <div className="row">
          <div className="twelve columns show-job">
            <div className="row">
              
                <div className="nuevo-empleo">
                  <h2>Agregar un Empleo</h2>
                  {error ? <p style={{ color: 'red' }}>{error}</p> : null}

                  <form className="agregar-empleo">
                  <div className="six columns">
                    <label htmlFor="posicion">Posicion</label>
                    <input type="text" ref="posicionRef" placeholder="Introduzca la posicion deseada." />

                    <label htmlFor="descripcion">Descripcion</label>
                    <textarea ref="descripcionRef" placeholder="Describa la posicion." ></textarea>


                    <label htmlFor="correo">E-Mail</label>
                    <input type="email" ref="correoRef" placeholder="ejemplo@ejemplo.com" />


                    <label htmlFor="compania">Compañia</label>
                    <input type="text" ref="companiaRef" placeholder="Nombre de su empresa."/>


                    <label htmlFor="url">Pagina Web</label>
                    <input type="text" ref="urlRef" placeholder="www.ejemplo.com" />

                    <label htmlFor="logo">Logo</label>
                    <input type="text" ref="logoRef" placeholder="http://ejemplo.com/imagen.jpg" />
</div> <div className="six columns">
                    <label htmlFor="categoria">Categoria</label>
                    <select name="categorias" ref="categoriaRef" id="categorias">
                      <option title='diseno' value="diseno">Diseño</option>
                      <option title='programacion' value="programacion" >Programacion</option>
                      <option title='soporte' value="soporte">Soporte</option>
                    </select>

                    <label htmlFor="tipo">Tipo de Trabajo</label>
                    <select name="tipo" ref="tipoRef" id="tipo">
                      <option title='full-time' value="full-time">Full-time</option>
                      <option title='part-time' value="part-time">Part-time</option>
                      <option title='Freelance' value="Freelance">Freelance</option>
                    </select>

                    <label htmlFor="ubicacion">Ubicacion</label>
                    <input type="text" ref="ubicacionRef" placeholder="Ubicacion del trabajo." />

                    <label htmlFor="comoaplicar">Como Aplicar</label>
                    <textarea ref="comoaplicarRef" placeholder="Instrucciones sobre como aplicar." ></textarea>
<br /><br /><br />
                    <button onClick={this.crearEmpleo.bind(this) }>Agregar Nuevo</button></div>
                  </form>
                
              </div></div></div></div></div>

    );
  }

  crearEmpleo() {
    const {crear} = this.props;
    const {posicionRef, descripcionRef, correoRef, companiaRef, urlRef, logoRef, categoriaRef, tipoRef, ubicacionRef, comoaplicarRef} = this.refs;


    crear(posicionRef.value, descripcionRef.value, correoRef.value, companiaRef.value, urlRef.value, logoRef.value, categoriaRef.value, tipoRef.value, ubicacionRef.value, comoaplicarRef.value);
  }
}

export default NuevoEmpleo;