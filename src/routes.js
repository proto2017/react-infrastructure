import React from 'react';
import {BrowserRouter, HashRouter, Switch, Route} from 'react-router-dom';
import {Provider} from 'react-redux';
import configureStore from './store';
import App from './views/app';
import Home from './views/Home';
const store = configureStore();
function configRouter() {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <App>
                    <Route path="/home" component={Home}/>
                </App>
            </BrowserRouter>
        </Provider>
    )
}

export default configRouter;