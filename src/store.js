import {createStore, replaceReducer} from 'redux';
import rootReducer from './reducers';
// store must is immutable
const store = createStore(rootReducer);
function configureStore() {

    if (module.hot) {
        // Enable Webpack hot module replacement for reducers
        module.hot.accept('./reducers', () => {
            const nextRootReducer = require('./reducers/index').default;
            store.replaceReducer(nextRootReducer);
        });
    }
    return store;
}

export default configureStore