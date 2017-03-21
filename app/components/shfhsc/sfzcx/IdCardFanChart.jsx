import React from 'react';
import {connect} from 'react-redux'
import {push} from 'react-router-redux'

import FanChart from '../../common/FanChart.jsx'
import {TITLE, SUB_TITLE, LEGEND_DATA, TOOL_TIP_FORMATTER, DATA_TOTAL, } from './redux/IdCardFanChartConst'
import styles from './css/RightFanChart.css'


/**
 * 简单react-redux组件
 */
class IdCardFanChart extends React.Component {

    render() {

        const customOption={TITLE, SUB_TITLE, LEGEND_DATA, TOOL_TIP_FORMATTER, DATA_TOTAL, } ;

        return (
            <div className={styles.root}>
                <FanChart customOption={customOption} containerId="RightFanChart" width="100%" height="30rem"/>
            </div>
        )
    }
}

export default connect (
    (state,ownProps)=>({
        goods:state.goods
    }),
    {
        toform:()=> push('/two'),
        handleDelete: (goods) =>  deleteGoods(goods)  ,
    }
)(RightFanChart);


