import React from 'react';


class Botones extends React.Component {
  // temporary solution
  getMeteorData() {
    return {
     users: Meteor.users.find({}).fetch(),
     usuario: Meteor.user().username
    }
   }
  notLoggedIn() {
    return <span><a className="button ver-empleos" href="/registrar">Registrarte   </a><a className="button ver-empleos" href="/login">Login</a></span>
  }
  isLoggedIn (){
      if(Roles.userIsInRole(this.data.loggedIn, 'admin')){
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

    return (
         
      <div className="require-login">
        {loggingIn ? <p>hola</p> : this.getContent()}
      </div>
    );
  }
}


export default Botones;