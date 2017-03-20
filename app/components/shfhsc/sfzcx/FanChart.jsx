import React from 'react';
import styles from './css/FanChart.css'

import MyEcharts from '../../common/MyEcharts.jsx'


const allLevels=['0-200','200-400','400-600','600-800','800-1000','1000-1300','1300-1500','1500-2000','2000-4000','4000-6000','>6000'];

const option = {
    title : {
        text: '商户返回时长总百分比',
        x:'center'
    },
    tooltip : {
        trigger: 'item',
        formatter: "{a} <br/>在{b}之间 共 {c}笔 <br/>占比: {d}%"
    },
    legend: {
        orient: 'vertical',
        left: 'right',
        data: allLevels,
        selectedMode:false
    },
    series : [
        {
            name: '商户访问返回时长',
            type: 'pie',
            radius : '60%',
            center: ['40%', '50%'],
            data:[
                {value:335, name:'0-200'},
                {value:2310, name:'200-400'},
                {value:1234, name:'400-600'},
                {value:135, name:'600-800'},
                {value:1548, name:'1000-1300'},
                {value:848, name:'1300-1500'},
                {value:98, name:'1500-2000'},
                {value:548, name:'2000-4000'},
                {value:548, name:'4000-6000'},
                {value:48, name:'>6000'},
            ],
            itemStyle: {
                emphasis: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            }
        }
    ]
};


/**
 * 商户时长统计的扇形图
 */
export default class FanChart extends React.Component {

    render() {
        return (
            <div className ={styles.root}>
                <MyEcharts option={option} containerId="FanChart" width="100%" height="30rem"/>
            </div>
        );
    }
}
