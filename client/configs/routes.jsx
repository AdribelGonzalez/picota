import React from 'react';
import {injectDeps} from 'react-simple-di';
import {FlowRouter} from 'meteor/kadira:flow-router';
import {mount} from 'react-mounter';

import NuevoUsuario from '../containers/nuevoUsuario.js';
import Login from '../containers/login.js';
import MainLayout from '../components/layouts.main/index.jsx';
import Lista from '../containers/lista';
import Empleo from '../containers/empleo';
import NuevoEmpleo from '../containers/nuevoEmpleo';
import Categoria from '../containers/categorias';
import Configuracion from '../containers/configuracion';
import Oculto from '../containers/oculto';


export const initRoutes = (context, actions) => {
  const MainLayoutCtx = injectDeps(context, actions)(MainLayout);

const publicRoutes = FlowRouter.group( { name: 'public' } );

publicRoutes.route( '/login', {
  name: 'login',
  action() { 
    mount(MainLayoutCtx, {
        content: () => (<Login />)
      });
  }});
  FlowRouter.route( '/oculto', {
  name: 'oculto',
  action() { 
    mount(MainLayoutCtx, {
        content: () => (<Oculto />)
      });
  }});

  publicRoutes.route('/', {
    name: 'empleos.list',
    action() {
      mount(MainLayoutCtx, {
        content: () => (<Lista />)
      });
       setTitle('Empleos');
    }
  });

 FlowRouter.route('/categoria', {
  name: 'empleos.cat',
  action() {
    mount(MainLayoutCtx, {
      content: () => (<Categoria />)
    });
    setTitle('Diseño');
  }
});

 publicRoutes.route('/registrar', {
    name: 'users.nuevo',
    action() {
      mount(MainLayoutCtx, {
        content: () => (<NuevoUsuario />)
      });
    }
  });

   publicRoutes.route('/empleo/:empleoId', {
  name: 'empleos.single',
  action({empleoId}) {
    mount(MainLayoutCtx, {
      content: () => (<Empleo empleoId={empleoId}/>)
    });
    setTitle('Ver empleos');
  }
});

FlowRouter.route('/nuevo-empleo', {
  name: 'nuevoempleo',
  action() {
    mount(MainLayoutCtx, {
      content: () => (<NuevoEmpleo/>)
    });
    setTitle('Nuevo Empleo');
  }
});
// FlowRouter.route('/categoria/:cat', {
//   name: 'empleos.cat',
//   action({cat}) {
//     mount(MainLayoutCtx, {
//       content: () => (<Categoria cat={cat}/>)
//     });
//     setTitle('Categorias');
//   }
// });

const authenticatedRoutes = FlowRouter.group( { name: 'authenticated' } );

// authenticatedRoutes.route( '/hidden', {
//   name: 'hidden',
//   action() { 
//     ReactLayout.render( App, { yield: <Hidden /> } ); 
//   }
// });

authenticatedRoutes.route('/logout', {
    name: 'users.logout',
    action() {
      Meteor.logout();
      FlowRouter.go('/');
    }
  });  

authenticatedRoutes.route('/configuracion', {
    name: 'users.config',
    action() {
      mount(MainLayoutCtx, {
        content: () => (<Configuracion />)
      });
    }
  }); 

//  FlowRouter.route('/empleo/:empleoId', {
//   name: 'empleos.single',
//   action({empleoId}) {
//     mount(MainLayoutCtx, {
//       content: () => (<Empleo empleoId={empleoId}/>)
//     });
//     setTitle('Ver empleos');
//   }
// });

// FlowRouter.route('/nuevo-empleo', {
//   name: 'nuevoempleo',
//   action() {
//     mount(MainLayoutCtx, {
//       content: () => (<NuevoEmpleo/>)
//     });
//     setTitle('Nuevo Empleo');
//   }
// });
// FlowRouter.route('/categoria/:cat', {
//   name: 'empleos.cat',
//   action({cat}) {
//     mount(MainLayoutCtx, {
//       content: () => (<Categoria cat={cat}/>)
//     });
//     setTitle('Categorias');
//   }
// });

//   FlowRouter.route('/', {
//     name: 'empleos.list',
//     action() {
//       mount(MainLayoutCtx, {
//         content: () => (<Lista />)
//       });
//        setTitle('Empleos');
//     }
//   });

//  FlowRouter.route('/registrar', {
//     name: 'users.nuevo',
//     action() {
//       mount(MainLayoutCtx, {
//         content: () => (<NuevoUsuario />)
//       });
//     }
//   });  

  // FlowRouter.route('/login', {
  //   name: 'users.login',
  //   action() {
  //     mount(MainLayoutCtx, {
  //       content: () => (<Login />)
  //     });
  //   }
  // }); 

  
 

// FlowRouter.route('/categoria/programacion', {
//   name: 'empleos.programacion',
//   action({cat}) {
//     mount(MainLayoutCtx, {
//       content: () => (<Categoria cat={cat}/>)
//     });
//     setTitle('Categorias');
//   }
// });

// FlowRouter.route('/categoria/soporte', {
//   name: 'empleos.soporte',
//   action({cat}) {
//     mount(MainLayoutCtx, {
//       content: () => (<Categoria cat={cat}/>)
//     });
//     setTitle('Categorias');
//   }
// });


}