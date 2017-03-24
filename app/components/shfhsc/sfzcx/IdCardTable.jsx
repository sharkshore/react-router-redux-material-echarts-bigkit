import React from 'react';
import {connect} from 'react-redux'

import MaterialTable from '../../common/MaterialTable.jsx'
import  MaterialPager from '../../common/MaterialPager.jsx'

import {titleNames,topTitle,fieldAttributes} from './redux/IdCardTableConst'
import {getIdCardTableDataByPage} from './redux/IdCardRepositoryRedux'



/**
 * 身份证查询的表格
 */
class IdCardTable extends React.Component {



/*    //初次渲染成功,生命周期内只运行一次
    componentDidMount() {
        //模拟刷新,应该点击查询按钮的时候调用
        console.log('加载表格数据');
        this.props.refreshData(this.props.DATA_TABLE_TOTAL_FROM_OUT);
    }*/

    render() {
        const {TABLE_PAGE_DATA,pageActive,pageParam} =this.props;
        const pager=<MaterialPager pageMaxNumber={pageParam.pageNum} currentNumber={pageParam.currentNum} active={pageActive}/>
        return (
            <div>
                <MaterialTable topTitle={topTitle} titleNames={titleNames} data={TABLE_PAGE_DATA} fieldAttributes={fieldAttributes} pagerComponent={pager}/>
            </div>
        );
    }
}

export default connect (
    (state,ownProps)=>({
         // DATA_TABLE_TOTAL_FROM_OUT:getIdCardTableData(state.IdCardRepository,'2017-03-01','2017-07-08',''),
         // TABLE_PAGE_DATA:getDataByPage(state.IdcardTable,state.IdCardRepository,'2017-03-01','2017-07-08'),
         TABLE_PAGE_DATA: getIdCardTableDataByPage(state.IdCardRepository,1,'2017-03-01','2017-07-08'),
         pageParam:state.IdcardTable.page
    }),
    {
        pageActive:(currNumber)=>updatePagerAction(currNumber),
        refreshData:(data) =>refreshTableAction(data)
    }
)(IdCardTable);

