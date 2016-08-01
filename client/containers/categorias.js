import Categoria from '../components/categoria/index.jsx';
import {useDeps} from 'react-simple-di';
import {composeWithTracker, composeAll} from 'react-komposer';

export const composer = ({context}, onData) => {
  const {Meteor, Collections, Tracker} = context();

  Meteor.subscribe('empleos.cat', Session.get('cat'));

};

export default composeAll(
  composeWithTracker(composer),
  useDeps()
)(Categoria);
