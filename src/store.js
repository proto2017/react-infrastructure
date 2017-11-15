import {createStore, replaceReducer, applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './reducers';
import rootSaga from './sagas';
function configureStore() {
    const sagaMiddleware = createSagaMiddleware();
    let store = '';
    if (process.env.NODE_ENV !== 'production') {
        store = createStore(rootReducer, composeWithDevTools(applyMiddleware(sagaMiddleware)));
    } else {
        store = createStore(rootReducer, applyMiddleware(sagaMiddleware));
    }
    store.runSaga = sagaMiddleware.run;
    if (module.hot) {
        // Enable Webpack hot module replacement for reducers
        module.hot.accept('./reducers', () => {
            const nextRootReducer = require('./reducers/index').default;
            store.replaceReducer(nextRootReducer);
        });
    }
    store.runSaga(rootSaga);
    return store;
}

export default configureStore