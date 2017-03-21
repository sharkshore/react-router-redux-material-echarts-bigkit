import React from 'react';
import echarts from 'echarts';

/**
 * 自定义Echarts公共组件
 */
export default class MyEcharts extends React.Component {

    static propTypes={
        option:React.PropTypes.object.isRequired,//参数项
        containerId:React.PropTypes.string.isRequired,//容器的ID
        width:React.PropTypes.string.isRequired,//容器的宽度
        height:React.PropTypes.string.isRequired,//容器的高度
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



