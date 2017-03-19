import React from 'react';
import styles from './css/HeaderBar.css'

import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import AppBar from 'material-ui/AppBar';


import ContentSend from 'material-ui/svg-icons/maps/person-pin';

export default class HeaderBar extends React.Component {
    render() {
        return (
            <div className={styles.root}>
                <AppBar title="监控平台"   />
            </div>
        );
    }
}


