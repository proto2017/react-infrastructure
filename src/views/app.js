import React from 'react';
import {withRouter} from 'react-router';
const App = ({children}) => {
    return (
        <div>
            react
            {children}
        </div>
    )
}

export default withRouter(App);