Meteor.startup(() => {
  NProgress.configure({
    showSpinner: false
  });

  sAlert.config({
    effect: 'scale',
    position: 'left-bottom',
    timeout: 5000
  });
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