import React from 'react';
import Configuracion from '../configuracion/index.jsx';

class Oculto extends React.Component {
  // temporary solution
  notLoggedIn() {
    return <span>No esta autorizado</span>;
  }

  getContent() {
    const {currentUser} = this.props;
    return currentUser ? <Configuracion /> : this.notLoggedIn();
  }

  render() {
    const {loggingIn} = this.props;

    return (
         <div className="container">
<div className="row ">
      <div className="require-login">
        {loggingIn ? <p>Logging in</p> : this.getContent()}
      </div>

      </div></div>
    );
  }
}

export default Oculto;