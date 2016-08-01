import React from 'react';
import {injectDeps} from 'react-simple-di';
import {FlowRouter} from 'meteor/kadira:flow-router';
import {mount} from 'react-mounter';


import MainLayout from '../components/layouts.main/index.jsx';
import Lista from '../containers/lista';
import Empleo from '../containers/empleo';
import NuevoEmpleo from '../containers/nuevoEmpleo';
import Categoria from '../containers/categorias';

export const initRoutes = (context, actions) => {
  const MainLayoutCtx = injectDeps(context, actions)(MainLayout);

  FlowRouter.route('/', {
    name: 'empleos.list',
    action() {
      mount(MainLayoutCtx, {
        content: () => (<Lista />)
      });
       setTitle('Empleos');
    }
  });

  FlowRouter.route('/empleo/:empleoId', {
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
FlowRouter.route('/categoria/:cat', {
  name: 'empleos.cat',
  action({cat}) {
    mount(MainLayoutCtx, {
      content: () => (<Categoria cat={cat}/>)
    });
    setTitle('Categorias');
  }
});

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

//  FlowRouter.route('/categoria/:cat', {
//   name: 'empleos.cat',
//   action({cat}) {
//     mount(MainLayoutCtx, {
//       content: () => (<Categoria categoria={cat}/>)
//     });
//     setTitle('Categorias');
//   }
// });

}