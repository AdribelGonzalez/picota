export default {
  nuevoUsuario({Meteor, LocalState, FlowRouter}, email, password) {
    if (!email) {
      return LocalState.set('CREATE_USER_ERROR', 'El Correo es Requerido.');
    }

    if (!password) {
      return LocalState.set('CREATE_USER_ERROR', 'La Contraseña es Requerida.');
    }

    LocalState.set('CREATE_USER_ERROR', null);

    Accounts.createUser({
    email: email,
    password: password
}, function(error){
    if(error){
        console.log(error.reason); 
    } else {
        FlowRouter.go('/');
    }
});
  },

  login({Meteor, LocalState, FlowRouter}, email, password) {
    if (!email) {
      return LocalState.set('LOGIN_ERROR', 'El Correo es Requerido.');
    }

    if (!password) {
      return LocalState.set('LOGIN_ERROR', 'La Contraseña es Requerida.');
    }

    LocalState.set('LOGIN_ERROR', null);
    

    if (Meteor.isClient) {
Meteor.loginWithPassword(email, password, function(error){
    if(error){
        console.log(error.reason);
    } else {
       FlowRouter.go('/');
    }
})
    }
    
    
  },

  clearErrors({LocalState}) {
    return LocalState.set('SAVING_ERROR', null);
  }
};