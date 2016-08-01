import Empleo from '../components/empleo/index.jsx';
import {useDeps} from 'react-simple-di';
import {composeWithTracker, composeAll} from 'react-komposer';

export const composer = ({context, empleoId}, onData) => {
  const {Meteor, Collections, Tracker} = context();

  Meteor.subscribe('empleos.single', empleoId, () => {
    const empleo = Collections.Empleos.findOne(empleoId);
    onData(null, {empleo});
  });

  
  const jobFromCache = Tracker.nonreactive(() => {
    return Collections.Empleos.findOne(empleoId);
  });

  if (jobFromCache) {
    onData(null, {empleo: jobFromCache});
  } else {
    onData();
  }
};

export default composeAll(
  composeWithTracker(composer),
  useDeps()
)(Empleo);
