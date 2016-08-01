import Configuracion from '../components/configuracion/index.jsx';
import {useDeps} from 'react-simple-di';
import {composeWithTracker, composeAll} from 'react-komposer';

export const composer = ({context, clearErrors}, onData) => {
  const {LocalState} = context();
  const error = LocalState.get('ERROR_GUARDAR');
  onData(null, {error});

  return clearErrors;
};

export const depsMapper = (context, actions) => ({
  crear: actions.empleos.crear,
  clearErrors: actions.empleos.clearErrors,
  context: () => context
});

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(Configuracion);