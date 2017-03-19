import React from 'react';
import Paper from 'material-ui/Paper';

import styles from './css/ShfhscContent.css'

import SearchForm from './SearchForm.jsx'
import Histogram from './Histogram.jsx'
import FanChart from './FanChart.jsx'
import ReportTable from './ReportTable.jsx'

/**
 * 商户返回时长页面除了顶上的breadhead下面的内容
 */
export default class ShfhscContent extends React.Component {

    render() {
        return (
            <Paper className={styles.root} zDepth={1}>
                <SearchForm/>
                <Histogram/>
                <FanChart/>
                <ReportTable/>
            </Paper>
        );
    }
}



