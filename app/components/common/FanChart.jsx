import React from 'react';
import MyEcharts from './MyEcharts.jsx'


/**
 * 自定义扇形图组件,默认有一个视图
 * 在MyEcharts基础上再度封装
 * 用户只需给定baseOptionSet和dataOptionSet
 */
export default class FanChart extends React.Component {

    static propTypes = {
        baseOptionSet: React.PropTypes.object.isRequired,//定制的参数项
        dataOptionSet: React.PropTypes.object.isRequired,//需要变化的数据
        containerId: React.PropTypes.string.isRequired,//容器的ID
        width: React.PropTypes.string.isRequired,//容器的宽度
        height: React.PropTypes.string.isRequired,//容器的高度
    };

    render() {
        const {baseOptionSet,dataOptionSet, containerId, width, height}=this.props;
        const {TITLE, SUB_TITLE, LEGEND_DATA, TOOL_TIP_FORMATTER, } =baseOptionSet;
        const {DATA_TOTAL}=dataOptionSet;

        const baseOption = {
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
                    data: [],
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

        const dataOption = {
            series: [{
                name: 'one',
                data: DATA_TOTAL
            },
            ]
        }

        return (
            <MyEcharts baseOption={baseOption} dataOption={dataOption} containerId={containerId} width={width} height={height}/>
        );
    }
}
