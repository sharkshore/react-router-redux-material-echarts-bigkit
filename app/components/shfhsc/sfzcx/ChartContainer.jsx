import React from 'react';

import FanChart from './FanChart.jsx'
import Histogram from './Histogram.jsx'

/**
 * 图表的容器
 */
export default class ChartContainer extends React.Component {

    render() {
        const clearfloat={
            clear:'both'
        }
        return (
            <div style={{marginTop:'2rem'}}>
                <Histogram/>
                <FanChart/>
                <div style={clearfloat}></div>
            </div>
        );
    }
}



