import React from 'react';
import styles from './home.less';
import Content from '../components/home/Content';
const Home = () => {
    return (
        <div className={styles.root}>
            <Content />
        </div>
    )
}

export default Home;