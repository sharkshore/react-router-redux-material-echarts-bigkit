import React from 'react';
import {connect} from 'react-redux'

import MaterialTable from '../../common/MaterialTable.jsx'
import  MaterialPager from '../../common/MaterialPager.jsx'
import {titleNames,topTitle,fieldAttributes} from './redux/IdCardTableConst'
import {getIdCardTableData} from './redux/IdCardRepositoryRedux'

/**
 * 身份证查询的表格
 */
class IdCardTable extends React.Component {

    render() {
        const {DATA_TOTAL} =this.props;
        const active=(i)=>alert(i);
        const pager=<MaterialPager pageMaxNumber={9} currentNumber={8} active={active}/>
        return (
            <div>
                <MaterialTable topTitle={topTitle} titleNames={titleNames} data={DATA_TOTAL} fieldAttributes={fieldAttributes} pagerComponent={pager}/>
            </div>
        );
    }
}

export default connect (
    (state,ownProps)=>({
        DATA_TOTAL:getIdCardTableData(state.IdCardRepository,'2017-03-01','2017-07-08',''),
    }),
    {
        // toform:()=> push('/two'),
        // handleDelete: (goods) =>  deleteGoods(goods)  ,
    }
)(IdCardTable);

