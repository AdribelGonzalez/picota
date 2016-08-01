import {Empleos} from '/libs/empleos.js';
import {Meteor} from 'meteor/meteor';
import {check} from 'meteor/check';


Meteor.publish('empleos.list', function (limitePosts) {
  const selector = {};
  
  const options = {
    fields: {id: 1, posicion: 1, tipo: 1, categoria: 1, compania: 1, createdAt: 1},
    sort: {createdAt: -1},
    limit: limitePosts
  };
check(options, Object);
  return Empleos.find(selector, options);
});

Meteor.publish('empleos.single', function (empleoId) {
  check(empleoId, String);
  const selector = {_id: empleoId};
  return Empleos.find(selector);
});

Meteor.publish('empleos.cat', function (cat) {
  check(cat, String);
  const selector = {};
  const options = {
    fields: {id: 1, posicion: 1, tipo: 1, categoria: cat, compania: 1, createdAt: 1},
    sort: {createdAt: -1}
  };
  return Empleos.find(selector, options);
});


// Meteor.publish('empleos.diseno', function(){
//   const options = {
//     fields: {id: 1, posicion: 1, tipo: 1, categoria: 'diseno', compania: 1},
//     sort: {createdAt: -1}
//   };
//   return Empleos.find({}, options);
// })

// Meteor.publish('empleos.programacion', function(){
//   const options = {
//     fields: {id: 1, posicion: 1, tipo: 1, categoria: 'programacion', compania: 1},
//     sort: {createdAt: -1}
//   };
//   return Empleos.find({}, options);
// })


// Meteor.publish('empleos.soporte', function(){
//   const options = {
//     fields: {id: 1, posicion: 1, tipo: 1, categoria: 'soporte', compania: 1},
//     sort: {createdAt: -1}
//   };
//   return Empleos.find({}, options);
// })
