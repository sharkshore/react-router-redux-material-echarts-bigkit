import React from 'react';
import MyEcharts from '../common/MyEcharts.jsx'


const option = {
    tooltip : {
        formatter: "{a} <br/>{b} : {c}%"
    },
    toolbox: {
        feature: {
            // restore: {},
            // saveAsImage: {}
        }
    },
    series: [
        {
            name: '业务指标',
            type: 'gauge',
            detail: {formatter:'{value}%'},
            data: [{value: 320, name: '今日峰值'}]
        }
    ]
};

/**
 * 左边仪表板
 */
export default class RightGauge extends React.Component {

    render() {
        return (
            <div style={{display:'inline-block',width:'33%'}}>
                <MyEcharts option={option} containerId={'RightGauge'} width="20rem" height="20rem"/>

            </div>
        );
    }
}

