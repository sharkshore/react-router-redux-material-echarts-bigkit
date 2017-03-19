import React from 'react';
import DatePicker from 'material-ui/DatePicker';
import AutoComplete from 'material-ui/AutoComplete';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';

import styles from './css/SearchForm .css'

/**
 * 查询表单
 */
export default class SearchForm extends React.Component {
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

    render() {
        const minDate = new Date();
        minDate.setHours(0, 0, 0, 0);
        const maxDate = new Date();
        maxDate.setHours(0, 0, 0, 0);
        const dataSource2 = ['鹏元征信', '前海征信', '新颜征信','宝付支付','abc','cse','sgga','hello','world','safe','douck','double'];

        //设置过滤器,保证刚开始点击AutoComplete时弹出所有信息,后面写一个字也能匹配
        const filter=(searchText, key) => searchText == '' || key.indexOf(searchText) !== -1;

        //配置key,value类型的数据
/*        const dataSource3 = [
          {textKey: 'Some Text', valueKey: 'someFirstValue'},
          {textKey: 'Some Text', valueKey: 'someSecondValue'},
        ];
        const dataSourceConfig = {
          text: 'textKey',
          value: 'valueKey',
        };*/

        return (
            <div id="111">
                <div id="222" className={styles.inlineField}>
                <DatePicker  onChange={this.handleChangeMinDate} autoOk={true} floatingLabelText="起始时间"
                            defaultDate={minDate} disableYearSelection={false} />
                </div>
                <div id="333" className={styles.inlineField}>
                <DatePicker   onChange={this.handleChangeMaxDate} autoOk={true} floatingLabelText="结束时间"
                            defaultDate={minDate} disableYearSelection={false} />
                </div>
                 <AutoComplete floatingLabelText="商户名称" filter={filter}    openOnFocus={true} dataSource={dataSource2} />
                <RaisedButton label="查询" primary={true} style={{margin:12}} />
            </div>
        );
    }
}


