import {Empleos} from '/libs/empleos';
import {Meteor} from 'meteor/meteor';
import {check} from 'meteor/check';

Meteor.methods({
  'empleos.crear'(_id, posicion, descripcion, correo, compania,  url, logo, categoria, tipo, ubicacion, comoaplicar, expiracion) {

    const createdAt = new Date();
    const empleo = {_id, posicion, descripcion, correo, compania,  url, logo, categoria, tipo, ubicacion, comoaplicar, createdAt};

    Empleos.insert(empleo);
    Empleos.createIndex( { _id: _id }, { expireAfterSeconds: expiracion } )
  },
    'empleos.modificar'(_id, posicion, descripcion, correo, compania,  url, logo, categoria, tipo, ubicacion, comoaplicar) {

    Empleos.update({_id : _id},{$set:{posicion: posicion, descripcion: descripcion, correo: correo, compania: compania,  url:url, logo:logo, categoria:categoria, tipo:tipo, ubicacion:ubicacion, comoaplicar:comoaplicar}});
  }
});