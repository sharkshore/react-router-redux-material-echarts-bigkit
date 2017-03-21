import React from 'react';
import MyEcharts from './MyEcharts.jsx'





/**
 * 自定义扇形图组件
 */
export default class FanChart extends React.Component {

    static propTypes = {
        customOption: React.PropTypes.object.isRequired,//定制的参数项
        containerId: React.PropTypes.string.isRequired,//容器的ID
        width: React.PropTypes.string.isRequired,//容器的宽度
        height: React.PropTypes.string.isRequired,//容器的高度
    };

    render() {
        const {customOption, containerId, width, height}=this.props;
        const {TITLE, SUB_TITLE, LEGEND_DATA, TOOL_TIP_FORMATTER, DATA_TOTAL, } =customOption;

        const option = {
            title: {
                text: TITLE,
                x: 'center',
                subtext:SUB_TITLE,
                subtextStyle: {
                    fontSize: 14
                }
            },
            tooltip: {
                trigger: 'item',
                formatter: TOOL_TIP_FORMATTER,
            },
            legend: {
                orient: 'vertical',
                left: 'right',
                formatter: '{name}ms',
                data: LEGEND_DATA,
                selectedMode: true
            },
            series: [
                {
                    name: 'one',
                    type: 'pie',
                    radius: '58%',
                    center: ['40%', '50%'],
                    data:DATA_TOTAL,
                    label: {
                        normal: {
                            show: true,
                            position: 'outside',
                            formatter: '{b}ms\n{d}%',
                        }
                    },
                    labelLine: {
                        normal: {
                            show: true,
                        }

                    },
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

        return (
        <MyEcharts option={option} containerId={containerId} width={width} height={height}/>
        );
    }
}
