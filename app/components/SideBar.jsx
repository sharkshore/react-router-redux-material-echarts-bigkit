import {Link} from 'react-router';
import React from 'react';
import styles from './css/SideBar.css'

export default class SideBar extends React.Component {
    render() {
        return (
            <div className={styles.root}>
                <ul>
                    <li className={styles.item}><Link to="/" onlyActiveOnIndex activeClassName={styles.active} >首页</Link></li>
                    <li className={styles.item}><Link to="/one" activeClassName={styles.active}>商品管理</Link></li>
                    <li className={styles.item}><Link to="/two" activeClassName={styles.active}>商品类型</Link></li>
                </ul>
            </div>
        );
    }
}

