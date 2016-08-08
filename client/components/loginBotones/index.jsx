import React from 'react';


class Botones extends React.Component {
  
  notLoggedIn() {
    return <span><a className="button ver-empleos" href="/registrar">Registrarte   </a><a className="button ver-empleos" href="/login">Login</a></span>
  }
  isLoggedIn (){
      if(Roles.userIsInRole(Meteor.userId(), ['admin'])){
        console.log(true);
          return <span> <a className="button ver-empleos" href="/oculto">Config   </a>
           <a className="button ver-empleos" href="/logout">Logout</a></span>
      }
      else {
          return <a className="button ver-empleos" href="/logout">Logout</a>
      }
  }
  getContent() {
    const {currentUser} = this.props;
    return currentUser ? this.isLoggedIn() : this.notLoggedIn();
  }

  render() {
    const {loggingIn} = this.props;
    const hasUser = !!Meteor.user();
    return (
         
      <div className="require-login">
        {hasUser ? this.isLoggedIn() : this.getContent()}
      </div>
    );
  }
}


export default Botones;