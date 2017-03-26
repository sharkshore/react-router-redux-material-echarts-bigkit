import React from 'react';
import DatePicker from 'material-ui/DatePicker';
import AutoComplete from 'material-ui/AutoComplete';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';

import styles from './css/SearchForm .css'
import {connect} from 'react-redux'

import {REFRESH_IDCARD_RES_TIME_DATA,REFRESH_IDCARD_RES_TIME_DATA_ERROR,REFRESH_IDCARD_RES_TIME_DATA_SUCCESS} from './redux/IdCardRepositoryRedux'

import {updatePagerAction} from './redux/IdCardTableRedux'
import Intl from 'intl'

/**
 * 查询表单
 */
class SearchForm extends React.Component {
    handleChangeMinDate = (event, date) => {
        this.setState({
          minDate: date,
        });
      };
    handleChangeMaxDate = (event, date) => {
    this.setState({
      maxDate: date,
    });
  };


    handleSelectButton(){
        this.props.refreshData();
        this.props.pageActive(1);
    }


    render() {
        //设置时间控件
        const minDate = new Date();
        minDate.setHours(0, 0, 0, 0);
        const maxDate = new Date();
        maxDate.setHours(0, 0, 0, 0);

        //设置AutoComplete的数据源
        const dataSource2 = ['鹏元征信', '前海征信', '新颜征信','宝付支付','abc','cse','sgga','hello','world','safe','douck','double'];
        //设置AutoComplete的过滤器,保证刚开始点击AutoComplete时弹出所有信息,后面写一个字也能匹配
        const filter=(searchText, key) => searchText == '' || key.indexOf(searchText) !== -1;

        //也可以配置AutoComplete的key,value类型的数据
/*        const dataSource3 = [
          {textKey: 'Some Text', valueKey: 'someFirstValue'},
          {textKey: 'Some Text', valueKey: 'someSecondValue'},
        ];
        const dataSourceConfig = {
          text: 'textKey',
          value: 'valueKey',
        };*/

        const {refreshData,pageActive} =this.props;
        return (
            <div >
                <div  className={styles.inlineField}>
                <DatePicker  onChange={this.handleChangeMinDate} autoOk={true} floatingLabelText="起始时间"
                            defaultDate={minDate} disableYearSelection={false} container={'inline'} />
                </div>
                <div  className={styles.inlineField}>
                <DatePicker   onChange={this.handleChangeMaxDate} autoOk={true} floatingLabelText="结束时间"
                            defaultDate={maxDate} disableYearSelection={false} container={'inline'} />
                </div>
                <AutoComplete floatingLabelText="商户名称" filter={filter}    openOnFocus={true} dataSource={dataSource2} />
                <RaisedButton label="查询" primary={true} style={{margin:12}} onClick={this.handleSelectButton.bind(this)}/>
            </div>
        );
    }
}

export default connect (
    (state,ownProps)=>({
    }),
    {
        refreshData: (url, params, id) => (
            {
                url: '/json',
                params: {
                    city: 2
                },
                types: [REFRESH_IDCARD_RES_TIME_DATA,REFRESH_IDCARD_RES_TIME_DATA_SUCCESS,REFRESH_IDCARD_RES_TIME_DATA_ERROR]
            }
        ),
        pageActive:(currNumber)=>updatePagerAction(currNumber),
    }
)(SearchForm);




