

import React from 'react';


class Navigation extends React.Component {
  setDiseno() {
    Session.set('cat', 'diseno')
  }
  setSoporte (){
      Session.set('cat', 'soporte')
  }
  setProgramacion() {
    Session.set('cat', 'programacion')
  }

  render() {
   
    return (
         <div className="nav">
      <ul>
        <li><a  href="/" >Inicio</a></li>
        <li><a onClick={this.setDiseno} href="/categoria" >Diseño</a></li>
        <li><a onClick={this.setProgramacion} href="/categoria" >Programacion</a></li>
        <li><a onClick={this.setSoporte} href="/categoria" >Soporte</a></li>
      </ul>
    </div>
      
    );
  }
}


export default Navigation;