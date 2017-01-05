import React from 'react';
import {connect} from 'react-redux'

import {updateGoodsType, addGoodsType}from './redux/TwoRedux'
import {Link, browserHistory} from 'react-router';

class TwoDetail extends React.Component {

    handleSubmit(e) {
        e.preventDefault();
        var g = {id: this.refs.id.value, name: this.refs.name.value};
        if (this.props.params.id == 0) {
            this.props.handleAdd(g);
            browserHistory.push('/two');
        } else {
            this.props.handleUpdate(g);
            browserHistory.push('/two');
        }
    }

    render() {
        var {onegoodstype}=this.props;
        var button, id, name;
        if (this.props.params.id == 0) {
            ; button = <input type="submit" value={'添加'}/>;
        } else {
            ; id=onegoodstype.id;
            ; name=onegoodstype.name;
            ; button = <input type="submit" value={'修改'}/>;
        }

        return (
            <div>
                <form onSubmit={this.handleSubmit.bind(this)}>
                    <div>
                        <label >商品类型ID</label>
                        <input type="text" ref="id" defaultValue={id}  />
                    </div>
                    <div>
                        <label >商品类型名称</label>
                        <input type="text" ref="name" defaultValue={name}/>
                    </div>
                    <div>
                        <input type="reset" value={'取消'}/>
                        {button}
                    </div>
                </form>
            </div>
        );
    }
}

TwoDetail.propTypes = {
    handleAdd: React.PropTypes.func.isRequired,
    handleUpdate: React.PropTypes.func.isRequired,
    onegoodstype: React.PropTypes.object
}


//1.mapStateToProps
const mapStateToProps = (state, ownProps) => {
    var one = getOne(state.goodstype, ownProps.params.id);
    return {
        onegoodstype: one
    }
}
//mapStateToProps用到的辅助方法
function getOne(goodstype, id) {
    for (var i = 0; i < goodstype.length; i++) {
        if (goodstype[i].id == id) {
            return goodstype[i];
        }
    }
}

//2.mapDispatchToProps
//采用对象写法,默认省略了dispatch,等同于以下写法
const mapDispatchToProps = {
    handleAdd: (goodsType) => addGoodsType(goodsType),
    handleUpdate: (goodsType) => updateGoodsType(goodsType)
}


export default connect(mapStateToProps, mapDispatchToProps)(TwoDetail)

