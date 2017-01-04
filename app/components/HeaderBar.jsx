import React from 'react';
import styles from './css/HeaderBar.css'

export default class HeaderBar extends React.Component {
    render() {
        return (
            <div className={styles.root}>
                <h2>React+Router+Redux示例</h2>
            </div>
        );
    }
}


