import React from 'react';
import {
    Table,
    TableBody,
    TableFooter,
    TableHeader,
    TableHeaderColumn,
    TableRow,
    TableRowColumn
} from 'material-ui/Table';

/**
 * Material-ui风格的表格组件
 * 在Material-ui的表格组件基础上再度封装
 * data是一个对象数组
 *
 * 本插件可以组装分页插件
 *
 */
export default class MaterialTable extends React.Component {

    static propTypes = {
        topTitle: React.PropTypes.string.isRequired,//表格顶上的标题
        titleNames: React.PropTypes.array.isRequired,//中文菜单名
        data: React.PropTypes.array.isRequired,//表格内的数据
        fieldAttributes: React.PropTypes.array.isRequired,//字段的属性名
        pagerComponent: React.PropTypes.element,//字段的属性名
    };

    render() {
        const {topTitle, titleNames, data, fieldAttributes,pagerComponent} =this.props;
        return (
                <Table>
                    <TableHeader adjustForCheckbox={false} displaySelectAll={false}>
                        <TableRow>
                            <TableHeaderColumn colSpan="4" style={{textAlign: 'center', fontSize: '18px'}}>
                                {topTitle}
                            </TableHeaderColumn>
                        </TableRow>
                        <TableRow selectable={false}>
                            {
                                titleNames.map((t, i) => {
                                    return (
                                        <TableHeaderColumn key={i}>{t}</TableHeaderColumn>
                                    )
                                })
                            }
                        </TableRow>
                    </TableHeader>
                    <TableBody displayRowCheckbox={false} showRowHover={true}>
                        {
                            data.map((d, i) => {
                                return (
                                    <TableRow key={i} striped={true}>
                                        {
                                            fieldAttributes.map((a, j) => {
                                                return (
                                                    <TableRowColumn key={j}>{d[a]}</TableRowColumn>
                                                )
                                            })
                                        }
                                    </TableRow>
                                )
                            })
                        }
                    </TableBody>
                    {
                        pagerComponent?
                            <TableFooter adjustForCheckbox={false} >
                                <TableRow>
                                    <TableRowColumn colSpan={titleNames.length} style={{textAlign: 'right'}}>
                                        {pagerComponent}
                                    </TableRowColumn>
                                </TableRow>
                            </TableFooter>
                         :<div></div>
                            }
                </Table>
        );
    }
}


