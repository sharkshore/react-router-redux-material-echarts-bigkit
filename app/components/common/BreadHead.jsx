import React from 'react';
import {Link} from 'react-router';

import styles from './css/BreadHead.css'

/**
 *  面包屑导航
 */
export default class BreadHead extends React.Component {
    static propTypes={
        firstLevel:React.PropTypes.string.isRequired,
        firstUrl:React.PropTypes.string.isRequired,
        secondLevel:React.PropTypes.string,
        secondUrl:React.PropTypes.string,
    };

    render() {
        return (
            <div className={styles.root}>
                <span className={styles.content} >
                <span><Link to={this.props.firstUrl}>{this.props.firstLevel}</Link></span> / <span><Link to={this.props.secondUrl}>{this.props.secondLevel}</Link></span>
                </span>
            </div>
        );
    }
}



