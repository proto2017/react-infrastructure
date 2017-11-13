import React from 'react';
import {BrowserRouter,HashRouter, Switch, Route} from 'react-router-dom';
import App from './views/app';
import Home from './views/Home';
function configRouter() {
    return (
        <BrowserRouter>
            <App>
                <Route path="/home" component={Home} />
            </App>
        </BrowserRouter>
    )
}

export default configRouter;