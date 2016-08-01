import {Empleos} from '/libs/empleos';
import {Meteor} from 'meteor/meteor';
import {check} from 'meteor/check';

Meteor.methods({
  'empleos.crear'(_id, posicion, descripcion, correo, compania,  url, logo, categoria, tipo, ubicacion, comoaplicar) {

    const createdAt = new Date();
    const empleo = {_id, posicion, descripcion, correo, compania,  url, logo, categoria, tipo, ubicacion, comoaplicar, createdAt};

    Empleos.insert(empleo);
  }
});