import Lista from '../components/empleosLista/index.jsx';
import {useDeps} from 'react-simple-di';
import {composeWithTracker, composeAll} from 'react-komposer';


export const composer = ({context}, onData) => {
  const {Meteor, Collections} = context();
  if (Meteor.subscribe('empleos.list', Session.get('limitePosts')).ready()) {
    const empleos = Collections.Empleos.find().fetch();
    onData(null, {empleos});
  }
};

export default composeAll(
  composeWithTracker(composer),
  useDeps()
)(Lista);


