import React from 'react';
import {connect} from 'react-redux'


import {pageSize} from '../../../consts/TablePageSet'
import MaterialTable from '../../common/MaterialTable.jsx'
import  MaterialPager from '../../common/MaterialPager.jsx'

import {titleNames,  fieldAttributes} from './redux/IdCardTableConst'
import {getIdCardTableData, getIdCardTableDataByPage} from './redux/IdCardRepositoryRedux'
import {updatePagerAction} from './redux/IdCardTableRedux'


/**
 * 身份证查询的表格
 */
class IdCardTable extends React.Component {

    render() {
        const {dateAndMember, TABLE_PAGE_DATA, pageActive, totalCount, currentNumber} =this.props;

        let topTitle = `${dateAndMember.beginDateStr} -- ${dateAndMember.endDateStr} ${dateAndMember.memberName} 身份证查询商户返回时长报表`;

        const pager = <MaterialPager pageSize={pageSize} totalCount={totalCount} currentNumber={currentNumber} active={pageActive}/>
        return (
            <div>
                <MaterialTable topTitle={topTitle} titleNames={titleNames} data={TABLE_PAGE_DATA}
                               fieldAttributes={fieldAttributes} pagerComponent={pager}/>
            </div>
        );
    }
}

export default connect(
    (state, ownProps) => ({
        TABLE_PAGE_DATA: getIdCardTableDataByPage(state.IdCardRepository, state.IdcardTablePager.currentNum, '2017-03-01', '2017-07-08'),
        totalCount: getIdCardTableData(state.IdCardRepository, '2017-03-01', '2017-07-08', '').length,
        currentNumber: state.IdcardTablePager.currentNum,
        dateAndMember: state.IdcardFormParam
    }),
    {
        pageActive: (currNumber) => updatePagerAction(currNumber),
    }
)(IdCardTable);

