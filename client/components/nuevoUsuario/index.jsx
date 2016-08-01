import React from 'react';

class NuevoUsuario extends React.Component {
	render() {
		const {error} = this.props;
		return (
			<div>
				<h1>Registrarse como Afiliado</h1>
				{error ? <p style={{color: 'red'}}>{error}</p> : null}
				<form>
					<input ref="email" type="email" placeholder="Email" />
					<input ref="password" type="password" placeholder="Contrasena" />
					<button onClick={this.createUser.bind(this)} type="submit">Sign Up</button>
				</form>
			</div>
		)
	}

	createUser(e) {
		e.preventDefault();
		const {create} = this.props;
		const {email, password} = this.refs;
		create(email.value, password.value);
		email.value = '';
		password.value = '';
	}
}

export default NuevoUsuario;