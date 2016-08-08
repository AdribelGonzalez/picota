import React from 'react';
class Configuracion extends React.Component {
  
  render() {
    let renderContent;
		if(Roles.userIsInRole( Meteor.userId(), ['admin'])){
			renderContent = <div id="contenido">  
				<form>
					<label>Limite de Empleo</label><input ref="limite" type="number"  /><br />
					<label>Expiracion de Empleo</label><input ref="expiracion" type="number"  /><i>en días</i>
					<button onClick={this.configurar.bind(this) } type="submit">Modificar</button>
				</form>
			
			
			</div>;
		}else{
			renderContent = <span> No tiene acceso a esta página. Si eres el administrador, <a href="/login">Loggeate</a> </span>;
		}
		return  renderContent;
  }
	configurar(e) {
		e.preventDefault();
		const {configuracion} = this.props;
		const {limite, expiracion} = this.refs;
		let lim = limite.value;
		let expValue = expiracion.value;

		let exp = expValue * 86400;
		// Session.set('limitePosts', lim);
		// Session.set('expiracion', exp);

		Config.update({tipo: 'limitePosts'}, { $set: {tiempo: lim}});
		Config.update({tipo: 'expiracion'}, { $set: {tiempo: exp}});
		$('#contenido').html("<p> Modificacion exitosa</p>");
		let refresh = function(){
 location.reload();
  FlowRouter.go('/');
};
setTimeout(refresh, 2000);
	}
};
export default Configuracion;
