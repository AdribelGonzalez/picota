export default {
  crear({Meteor, LocalState, FlowRouter}, posicion, descripcion, correo, compania,  url, logo, categoria, tipo, ubicacion, comoaplicar) {
    if (!posicion || !descripcion || !correo || !compania || !url || !categoria || !tipo || !ubicacion || !comoaplicar) {
      return LocalState.set('ERROR_GUARDAR', 'Todos los campos son requeridos!');
    }
    if ( !logo ){
       logo = 'https://s-media-cache-ak0.pinimg.com/236x/9f/6e/37/9f6e373dbdb01a6f3e11aa71ade75dd7.jpg';
    }
    if(url.lenght > 30) {
       return LocalState.set('ERROR_GUARDAR', 'La URL es muy extensa.');
    }

    LocalState.set('ERROR_GUARDAR', null);

    const id = Meteor.uuid();

    Meteor.call('empleos.crear', id, posicion, descripcion, correo, compania,  url, logo, categoria, tipo, ubicacion, comoaplicar, (err) => {
      if (err) {
        return LocalState.set('ERROR_GUARDAR', err.message);
      }
    }); 
    FlowRouter.go(`/empleo/${id}`);
  },
   modificar({Meteor, LocalState, FlowRouter}, posicion, descripcion, correo, compania,  url, logo, categoria, tipo, ubicacion, comoaplicar) {
    if (!posicion || !descripcion || !correo || !compania || !url || !categoria || !tipo || !ubicacion || !comoaplicar) {
      return LocalState.set('ERROR_GUARDAR', 'Todos los campos son requeridos!');
    }
    if ( !logo ){
       logo = 'https://s-media-cache-ak0.pinimg.com/236x/9f/6e/37/9f6e373dbdb01a6f3e11aa71ade75dd7.jpg';
    }
    if(url.lenght > 30) {
       return LocalState.set('ERROR_GUARDAR', 'La URL es muy extensa.');
    }

    LocalState.set('ERROR_GUARDAR', null);

    Meteor.call('empleos.modificar', id, posicion, descripcion, correo, compania,  url, logo, categoria, tipo, ubicacion, comoaplicar, (err) => {
      if (err) {
        return LocalState.set('ERROR_GUARDAR', err.message);
      }
    }); 
    FlowRouter.go(`/empleo/${id}`);
  },

  clearErrors({LocalState}) {
    return LocalState.set('ERROR_GUARDAR', null);
  },

  cambiarCategoria() {
    var buttonName = event.target.name;
  }
};