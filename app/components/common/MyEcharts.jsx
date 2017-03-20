import React from 'react';
import echarts from 'echarts';

/**
 * 封装Echarts公共使用方法
 */
export default class MyEcharts extends React.Component {

    static propTypes={
        option:React.PropTypes.object.isRequired,
        containerId:React.PropTypes.string.isRequired,
        width:React.PropTypes.string.isRequired,
        height:React.PropTypes.string.isRequired,
    };

    componentDidMount() {
        let mychart=echarts.init(document.getElementById(this.props.containerId));
        mychart.setOption(this.props.option);
    }

    render() {
        const {containerId,width,height}=this.props;
        return (
            <div id={containerId}  style={{width:this.props.width,height:this.props.height}} >
            </div>
        );
    }
}



