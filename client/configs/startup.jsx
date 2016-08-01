
Meteor.startup(() => {
  NProgress.configure({
    showSpinner: false
  });

  sAlert.config({
    effect: 'scale',
    position: 'left-bottom',
    timeout: 5000
  });

// // user roles
//   var roles = ['afiliado', 'admin', 'usuario']

//   // this will fail if the roles package isn't installed
//   if(Meteor.roles.find().count() === 0) {
//     roles.map(function(role) {
//       Roles.createRole(role)
//     })
//   }

});

Session.set('limitePosts', 20);
Session.set('cat', 'diseno');

setTitle = (title) => {
  let titulo = 'Bolsa de Empleos';

  if (title) {
    return document.title = `${title} - ${titulo}`;
  }
  return document.title = titulo;
};
