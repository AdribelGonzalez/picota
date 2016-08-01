import React from 'react';


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

Oculto.propTypes = {
  children: React.PropTypes.element.isRequired
};

export default Oculto;