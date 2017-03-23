import React from 'react';
import {connect} from 'react-redux'
import {push} from 'react-router-redux'

import FanChart from '../../common/FanChart.jsx'
import {TITLE, SUB_TITLE, LEGEND_DATA, TOOL_TIP_FORMATTER, DATA_TOTAL,} from './redux/IdCardFanChartConst'
import styles from './css/RightFanChart.css'


/**
 * 简单react-redux组件
 */
class IdCardFanChart extends React.Component {

    render() {

        const baseOptionSet = {TITLE, SUB_TITLE, LEGEND_DATA, TOOL_TIP_FORMATTER,};
        const DATA_TOTAL = [
            {value: 335, name: '0-200'},
            {value: 2310, name: '200-400'},
            {value: 1234, name: '400-600'},
            {value: 135, name: '600-800'},
            {value: 1548, name: '1000-1300'},
            {value: 848, name: '1300-1500'},
            {value: 98, name: '1500-2000'},
            {value: 548, name: '2000-4000'},
            {value: 548, name: '4000-6000'},
            {value: 0, name: '>6000'},
        ];
        const dataOptionSet = {DATA_TOTAL};

        return (
            <div className={styles.root}>
                <FanChart baseOptionSet={baseOptionSet} dataOptionSet={dataOptionSet} containerId="RightFanChart"
                          width="100%" height="30rem"/>
            </div>
        )
    }
}

export default connect(
    (state, ownProps) => ({
        goods: state.goods
    }),
    {
        toform: () => push('/two'),
        handleDelete: (goods) => deleteGoods(goods),
    }
)(IdCardFanChart);


