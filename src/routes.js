import React from 'react';
import {BrowserRouter, HashRouter, Switch, Route} from 'react-router-dom';
import {Provider} from 'react-redux';
import App from './views/app';
import Home from './views/Home';

function configRouter({store}) {
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