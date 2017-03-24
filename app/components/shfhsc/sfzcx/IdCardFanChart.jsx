import React from 'react';
import {connect} from 'react-redux'

import FanChart from '../../common/FanChart.jsx'
import {TITLE, SUB_TITLE, LEGEND_DATA, TOOL_TIP_FORMATTER, DATA_TOTAL,} from './redux/IdCardFanChartConst'
import {getIdCardFanChartData}from './redux/IdCardRepositoryRedux'
import styles from './css/RightFanChart.css'


/**
 * 身份证查询的扇形图
 */
class IdCardFanChart extends React.Component {

    render() {

        const {DATA_TOTAL,}=this.props;
        const baseOptionSet = {TITLE, SUB_TITLE, LEGEND_DATA, TOOL_TIP_FORMATTER,};
        const dataOptionSet = {DATA_TOTAL};

        return (
            <div className={styles.root}>
                <FanChart baseOptionSet={baseOptionSet} dataOptionSet={dataOptionSet} containerId="RightFanChart" width="100%" height="30rem"/>
            </div>
        )
    }
}

export default connect(
    (state, ownProps) => ({
        DATA_TOTAL: getIdCardFanChartData(state.IdCardRepository,'2017-03-01','2017-07-08',''),
    }),
    {
    }
)(IdCardFanChart);


