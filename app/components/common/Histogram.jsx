import React from 'react';

import MyEcharts from './MyEcharts.jsx'


/**
 * 自定义柱状图组件
 */
export default class Histogram extends React.Component {

    static propTypes = {
        customOption: React.PropTypes.object.isRequired,//定制的参数项
        containerId: React.PropTypes.string.isRequired,//容器的ID
        width: React.PropTypes.string.isRequired,//容器的宽度
        height: React.PropTypes.string.isRequired,//容器的高度
    };

    render() {
        const {customOption, containerId, width, height}=this.props;
        const {TITLE, SUB_TITLE, X_AXIS_ARRAY, X_AXIS_TITLE, Y_AXIS_TITLE, LEGEND_DATA, TOOL_TIP_FORMATTER, DATA_TOTAL, DATA_ONE, DATA_TWO} =customOption;

        // 指定图表的配置项和数据
        const option = {
            title: {
                text: TITLE,
                x: 'center',
                subtext: SUB_TITLE,
                subtextStyle: {
                    fontSize: 14
                }
            },
            tooltip: {
                trigger: 'item',
                formatter: TOOL_TIP_FORMATTER,
            },
            toolbox: {
                left: '10%',
                itemSize: 16,
                feature: {
                    saveAsImage: {
                        type: 'jpeg',
                        pixelRatio: 2
                    },
                    dataView: {
                        readOnly: true,
                    },
                    dataZoom: {},
                    magicType: {
                        type: ['line', 'bar'],
                    },
                }
            },
            dataZoom: [
                {
                    type: 'slider',
                    start: 0,
                    end: 50,
                }

            ],
            legend: {
                show: true,
                data: LEGEND_DATA,
                right: 0,
                selected: {},
                selectedMode: 'single'
            },
            grid: {
                left: '0%',
                right: '5%',
                bottom: '10%',
                borderColor: 'white',
                containLabel: true,
                show: true,
            },
            xAxis: {
                name: X_AXIS_TITLE,
                nameLocation: 'middle',
                nameGap: 25,
                nameTextStyle: {
                    color: 'black',
                    fontStyle: 'normal',
                    fontFamily: '微软雅黑',
                    fontSize: 18

                },
                type: 'category',
                data: X_AXIS_ARRAY,
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
                name: Y_AXIS_TITLE,
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
                    data: DATA_TOTAL,
                    barMinHeight: 2,
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
                    data: DATA_ONE,
                    itemStyle: {
                        normal: {
                            color: '#FF1493',
                            shadowColor: 'rgba(0, 0, 0, 0.1)',
                            shadowBlur: 10
                        }
                    }
                },
                {
                    name: '身份证不返照片',
                    type: 'bar',
                    data: DATA_TWO,
                    itemStyle: {
                        normal: {
                            color: '#800080',
                            shadowColor: 'rgba(0, 0, 0, 0.1)',
                            shadowBlur: 10
                        }
                    }
                },
            ],
        };

        return (
            <MyEcharts option={option} containerId={containerId} width={width} height={height}/>
        );
    }
}



