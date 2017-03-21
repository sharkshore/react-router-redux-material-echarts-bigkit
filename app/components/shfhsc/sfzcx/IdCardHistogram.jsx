import React from 'react';
import {connect} from 'react-redux'
import {push} from 'react-router-redux'

import Histogram from '../../common/Histogram.jsx'
import styles from './css/LeftHistogram.css'


import {TITLE, SUB_TITLE, X_AXIS_ARRAY, X_AXIS_TITLE, Y_AXIS_TITLE, LEGEND_DATA, TOOL_TIP_FORMATTER, DATA_TOTAL, DATA_ONE, DATA_TWO}  from './redux/IdCardHistogramConst'


/**
 *
 */
class IdCardHistogram extends React.Component {

    render() {
        const customOption={TITLE, SUB_TITLE, X_AXIS_ARRAY, X_AXIS_TITLE, Y_AXIS_TITLE, LEGEND_DATA, TOOL_TIP_FORMATTER, DATA_TOTAL, DATA_ONE, DATA_TWO} ;

        return (
            <div className={styles.root}>
                <Histogram customOption={customOption} containerId="LeftHistogram" width="100%" height="30rem"/>
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
)(LeftHistogram);


