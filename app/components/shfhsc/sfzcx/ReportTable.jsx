import React from 'react';
import {Table, TableBody,TableFooter, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';
import RaisedButton from 'material-ui/RaisedButton';
/**
 * 统计报表的表格
 */
export default class ReportTable extends React.Component {

    render() {
        return (
            <div>
                <Table >
                    <TableHeader adjustForCheckbox={false} displaySelectAll={false}>
                        <TableRow>
                            <TableHeaderColumn colSpan="4" style={{textAlign: 'center', fontSize: '18px'}}>
                                2017-03-19 -- 2017-03-22 身份证查询商户返回时长报表
                            </TableHeaderColumn>
                        </TableRow>
                        <TableRow selectable={false}>
                            <TableHeaderColumn>商户名称</TableHeaderColumn>
                            <TableHeaderColumn>产品名称</TableHeaderColumn>
                            <TableHeaderColumn>返回时长</TableHeaderColumn>
                            <TableHeaderColumn>数量</TableHeaderColumn>
                        </TableRow>
                    </TableHeader>
                    <TableBody displayRowCheckbox={false} showRowHover={true}>
                        <TableRow striped={true}>
                            <TableRowColumn>1</TableRowColumn>
                            <TableRowColumn>John Smith</TableRowColumn>
                            <TableRowColumn>Employed</TableRowColumn>
                            <TableRowColumn>Employed</TableRowColumn>
                        </TableRow>
                        <TableRow striped={true}>
                            <TableRowColumn>2</TableRowColumn>
                            <TableRowColumn>Randal White</TableRowColumn>
                            <TableRowColumn>Unemployed</TableRowColumn>
                            <TableRowColumn>Employed</TableRowColumn>
                        </TableRow>
                        <TableRow striped={true}>
                            <TableRowColumn>3</TableRowColumn>
                            <TableRowColumn>Stephanie Sanders</TableRowColumn>
                            <TableRowColumn>Employed</TableRowColumn>
                            <TableRowColumn>Employed</TableRowColumn>
                        </TableRow>
                        <TableRow>
                            <TableRowColumn>4</TableRowColumn>
                            <TableRowColumn>Steve Brown</TableRowColumn>
                            <TableRowColumn>Employed</TableRowColumn>
                            <TableRowColumn>Employed</TableRowColumn>
                        </TableRow>
                    </TableBody>
                    <TableFooter adjustForCheckbox={false} >
                        <TableRow>
                            <TableRowColumn>总计</TableRowColumn>
                            <TableRowColumn>5000</TableRowColumn>
                            <TableRowColumn>5000</TableRowColumn>
                        </TableRow>
                        <TableRow>
                            <TableRowColumn colSpan="4" style={{textAlign: 'center'}}>
                                <RaisedButton label="下载报表" primary={true} fullWidth={true} />
                            </TableRowColumn>
                        </TableRow>
                    </TableFooter>
                </Table>
            </div>
        );
    }
}

