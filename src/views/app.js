import React from 'react';
import {withRouter} from 'react-router';
const App = ({children}) => {
    return (
        <div>
            app2233
            {children}
        </div>
    )
}

export default withRouter(App);