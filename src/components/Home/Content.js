import React from 'react';
import {connect} from 'react-redux';
class Content extends React.Component {
    render() {
        const {home, dispatch} = this.props;
        return (
            <div>
                <button onClick={() => {dispatch({type:'add'})}}>增加</button>
                {home.count}
                <button onClick={() => {dispatch({type:'reduce'})}}>减少</button>
            </div>
        )
    }
}

export default connect((state) => {
    const {home} = state;
    return {
        home
    };
})(Content);