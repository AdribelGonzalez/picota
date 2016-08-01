import Categoria from '../components/categoria/index.jsx';
import {useDeps} from 'react-simple-di';
import {composeWithTracker, composeAll} from 'react-komposer';

export const composer = ({context}, onData) => {
  const {Meteor, Collections} = context();
  let cat = Session.get('cat');
  if (Meteor.subscribe('empleos.cat', Session.get('cat')).ready()) {
    const empleos = Collections.Empleos.find({categoria: cat}).fetch();
    onData(null, {empleos});
  }
};

export default composeAll(
  composeWithTracker(composer),
  useDeps()
)(Categoria);
