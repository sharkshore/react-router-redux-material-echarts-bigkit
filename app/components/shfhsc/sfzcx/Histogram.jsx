import React from 'react';

import styles from './css/Histogram.css'
import MyEcharts from '../../common/MyEcharts.jsx'


const xAxis = ['2017-03-20', '2017-03-21', '2017-03-22', '2017-03-23', '2017-03-24', '2017-03-25', '2017-03-26', '2017-03-27', '2017-03-28', '2017-03-29', '2017-03-30', '2017-03-31'];
const legends = ['全部', '身份证返照片', '身份证不返照片'];


// 指定图表的配置项和数据
var option = {
    title: {
        text: '商户每日访问量',
        x:'center'
    },
    tooltip: {
        trigger: 'item',
        formatter: "在{b} 共 访问<span style='color:deeppink'>{c}</span>次"
    },
    toolbox:{
        left:'left',
        feature: {
            myTool1: {
                show: true,
                title: '自定义扩展方法1',
                icon: 'path://M432.45,595.444c0,2.177-4.661,6.82-11.305,6.82c-6.475,0-11.306-4.567-11.306-6.82s4.852-6.812,11.306-6.812C427.841,588.632,432.452,593.191,432.45,595.444L432.45,595.444z M421.155,589.876c-3.009,0-5.448,2.495-5.448,5.572s2.439,5.572,5.448,5.572c3.01,0,5.449-2.495,5.449-5.572C426.604,592.371,424.165,589.876,421.155,589.876L421.155,589.876z M421.146,591.891c-1.916,0-3.47,1.589-3.47,3.549c0,1.959,1.554,3.548,3.47,3.548s3.469-1.589,3.469-3.548C424.614,593.479,423.062,591.891,421.146,591.891L421.146,591.891zM421.146,591.891',
                onclick: function (){
                    alert('myToolHandler1')
                }
            },
            myTool2: {
                show: true,
                title: '自定义扩展方法',
                icon: 'image://http://echarts.baidu.com/images/favicon.png',
                onclick: function (){
                    alert('myToolHandler2')
                }
            }
        }
    },
    legend: {
        show: true,
        data: legends,
        right:0,
        selected:{
            '全部':true,
            '身份证返照片':false,
            '身份证不返照片':false
        },
        selectedMode:'single'
    },
    grid: {
        left: '0%',
        right: '0%',
        bottom: '10%',
        borderColor: 'white',
        containLabel: true,
        show: true,
    },
    xAxis: {
        name: '日期',
        nameLocation: 'middle',
        nameGap: 25,
        nameTextStyle: {
            color: 'black',
            fontStyle: 'normal',
            fontFamily: '微软雅黑',
            fontSize: 18

        },
        type: 'category',
        data: xAxis,
        axisTick: {
            alignWithLabel: true,
            interval: 0
        },
        axisLabel: {
            interval: 'auto'
        },
        splitLine: {
            show: false
        }
    },
    yAxis: {
        name: '访问量',
        nameLocation: 'end',
        nameGap: 5,
        nameTextStyle: {
            color: 'black',
            fontStyle: 'normal',
            fontFamily: '微软雅黑',
            fontSize: 18

        },

        axisTick: {
            alignWithLabel: true
        },
        splitLine: {
            show: false
        }
    },
    series: [
        {
            name: '全部',
            type: 'bar',
            data: [5, 20, 36, 10, 100, 20],
            itemStyle: {
                normal: {
                    color: 'rgba(17, 168,171, 1)',
                    shadowColor: 'rgba(0, 0, 0, 0.1)',
                    shadowBlur: 10
                }
            }
        },
        {
            name: '身份证返照片',
            type: 'bar',
            data: [5, 20, 36, 10, 100, 20],
        },
        {
            name: '身份证不返照片',
            type: 'bar',
            data: [5, 20, 36, 10, 100, 20],
        },
    ],

};


/**
 * 商户时长统计的柱状图
 */
export default class Histogram extends React.Component {

    render() {
        return (
            <div className={styles.root}>
                <MyEcharts option={option} containerId="Histogram" width="100%" height="30rem"/>
            </div>
        );
    }
}
