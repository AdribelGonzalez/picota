import React from 'react';
class Configuracion extends React.Component {
  
  render() {
    let renderContent;
		if(Roles.userIsInRole( Meteor.userId(), 'admin')){
			renderContent = <span> User: {} </span>;
		}else{
			renderContent = <span> User was not defined </span>;
		}
		return  renderContent;
  }
};
export default Configuracion;
