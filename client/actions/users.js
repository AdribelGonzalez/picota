export default {
  create({Meteor, LocalState, FlowRouter}, email, password) {
    if (!email) {
      return LocalState.set('CREATE_USER_ERROR', 'El Correo es Requerido.');
    }

    if (!password) {
      return LocalState.set('CREATE_USER_ERROR', 'La Contraseña es Requerida.');
    }

    LocalState.set('CREATE_USER_ERROR', null);

    Accounts.createUser({email, password});
    FlowRouter.go('/');
  },

  login({Meteor, LocalState, FlowRouter}, email, password) {
    if (!email) {
      return LocalState.set('LOGIN_ERROR', 'El Correo es Requerido.');
    }

    if (!password) {
      return LocalState.set('LOGIN_ERROR', 'La Contraseña es Requerida.');
    }

    LocalState.set('LOGIN_ERROR', null);

    Meteor.loginWithPassword(email, password);
    console.log('Usuario dentro.');
    console.log(Meteor.userId());
    FlowRouter.go('/');
  },

  clearErrors({LocalState}) {
    return LocalState.set('SAVING_ERROR', null);
  }
};