// import {Empleos} from '/libs/empleos';
// import {Meteor} from 'meteor/meteor';
// import {check} from 'meteor/check';

// export default function () {
//   Meteor.methods({
//     'empleos.crear'(_id, posicion, descripcion, correo, compania, logo, url, categoria, tipo, ubicacion, comoaplicar) {
//     check([_id, posicion, descripcion, correo, compania, url, categoria, tipo, ubicacion, comoaplicar],  [Match.Any]);
//     check(logo, Match.Optional([String]));

//       const createdAt = new Date();
//       const empleo = {
//         _id, posicion, descripcion, correo, compania, logo, url, categoria, tipo, ubicacion, comoaplicar, createdAt,
//         guardando: true
//       };
//       Empleos.insert(empleo);
//     }
//   });
// }
