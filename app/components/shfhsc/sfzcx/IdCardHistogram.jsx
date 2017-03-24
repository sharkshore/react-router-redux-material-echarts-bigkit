import React from 'react';

import Histogram from '../../common/Histogram.jsx'

import {connect} from 'react-redux'

import {getIdCardHistogramData} from './redux/IdCardRepositoryRedux'
import styles from './css/LeftHistogram.css'


import {TITLE, SUB_TITLE, X_AXIS_ARRAY, X_AXIS_TITLE, Y_AXIS_TITLE, SERIES_NAME, TOOL_TIP_FORMATTER, }  from './redux/IdCardHistogramConst'


/**
 * 身份证查询的柱状图
 */
class IdCardHistogram extends React.Component {

    render() {
        const {DATA_TOTAL,DATA_ONE,DATA_TWO}=this.props;
        const baseOptionSet={TITLE, SUB_TITLE, X_AXIS_ARRAY, X_AXIS_TITLE, Y_AXIS_TITLE, SERIES_NAME, TOOL_TIP_FORMATTER,   } ;
        const dataOptionSet={DATA_TOTAL,DATA_TWO,DATA_ONE};

        return (
            <div className={styles.root}>
                <Histogram baseOptionSet={baseOptionSet} dataOptionSet={dataOptionSet}  containerId="LeftHistogram" width="100%" height="30rem"/>
            </div>
        )
    }
}

export default connect (
    (state,ownProps)=>({
        DATA_TOTAL:getIdCardHistogramData(state.IdCardRepository,'2017-03-01','2017-07-08','',0),
        DATA_ONE:getIdCardHistogramData(state.IdCardRepository,'2017-03-01','2017-07-08','',1),
        DATA_TWO:getIdCardHistogramData(state.IdCardRepository,'2017-03-01','2017-07-08','',2),
    }),
    {

    }
)(IdCardHistogram);


