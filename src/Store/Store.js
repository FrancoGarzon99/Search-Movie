import { createStore, applyMiddleware, compose } from 'redux'; // ApplyMiddleware es el metodo que nos ayuda a activar el middleware al realizar nuestras acciones!
import thunk from 'redux-thunk'; // Thunk sirve para realizar acciones asincronicas! en nuestras actions creators
import Reducers from '../Reducers/Reducers';

// Creamos nuestro store pasandole nuestros reducers y lo exportamos para poder usarlo!
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(Reducers, composeEnhancers(applyMiddleware(thunk)));
export default store;
