import React from 'react';
import styles from './home.less';
import {test} from '../utils';
const Home = () => {
    console.log(test())
    return (
        <div className={styles.root}>
            home66
        </div>
    )
}

export default Home;