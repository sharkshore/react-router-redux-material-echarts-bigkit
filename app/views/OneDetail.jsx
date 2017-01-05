import React from 'react';
import {connect} from 'react-redux'

import {updateGoods, addGoods}from './redux/OneRedux'
import {Link, browserHistory} from 'react-router';

class OneDetail extends React.Component {

    handleSubmit(e) {
        e.preventDefault();
        var g = {
            id: this.refs.id.value,
            name: this.refs.name.value,
            type: this.refs.type.value,
            price: this.refs.price.value
        };
        if (this.props.params.id == 0) {
            this.props.handleAdd(g);
            browserHistory.push('/one');
        } else {
            this.props.handleUpdate(g);
            browserHistory.push('/one');
        }
    }

    render() {
        var {onegoods,goodstype}=this.props;
        var button, id, name, type, price;
        if (this.props.params.id == 0) {
            ; button = <input type="submit" value={'添加'}/>;
        } else {
            ; id = onegoods.id;
            ; name = onegoods.name;
            ; type = onegoods.type;
            ; price = onegoods.price;
            ; button = <input type="submit" value={'修改'}/>;
        }

        return (
            <div>
                <form onSubmit={this.handleSubmit.bind(this)}>
                    <div>
                        <label >商品ID</label>
                        <input type="text" ref="id" defaultValue={id}/>
                    </div>
                    <div>
                        <label >商品名称</label>
                        <input type="text" ref="name" defaultValue={name}/>
                    </div>
                    <div>
                        <label >商品类型</label>
                        <select ref="type" defaultValue={type} >
                            {
                                goodstype.map((gt,i)=>{
                                    return (
                                        <option key={i} value={gt.id} >{gt.name}</option>
                                    )
                                })
                            }
                        </select>
                    </div>
                    <div>
                        <label >商品价格</label>
                        <input type="text" ref="price" defaultValue={price}/>
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

OneDetail.propTypes = {
    handleAdd: React.PropTypes.func.isRequired,
    handleUpdate: React.PropTypes.func.isRequired,
    onegoods: React.PropTypes.object
}


//1.mapStateToProps
const mapStateToProps = (state, ownProps) => {
    var one = getOne(state.goods, ownProps.params.id);
    return {
        onegoods: one,
        goodstype:state.goodstype
    }
}
//mapStateToProps用到的辅助方法
function getOne(goods, id) {
    for (var i = 0; i < goods.length; i++) {
        if (goods[i].id == id) {
            return goods[i];
        }
    }
}

//2.mapDispatchToProps
//采用对象写法,默认省略了dispatch,等同于以下写法
const mapDispatchToProps = {
    handleAdd: (goods) => addGoods(goods),
    handleUpdate: (goods) => updateGoods(goods)
}


export default connect(mapStateToProps, mapDispatchToProps)(OneDetail)

