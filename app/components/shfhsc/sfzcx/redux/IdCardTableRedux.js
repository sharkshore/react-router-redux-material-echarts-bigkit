import {pageSize} from '../../../../consts/TablePageSet'

/**
 * 本reduce处理身份证的表格需要显示的数据
 * @type {string}
 */

//1.静态字段
export const UPDATE_IDCARD_RES_TIME_TABLE_PAGER_SUCCESS = 'UPDATE_IDCARD_RES_TIME_TABLE_PAGER_SUCCESS';

//2.action构造器

//点击跳转页码
export function updatePagerAction(currNumber){
    return {
        type: UPDATE_IDCARD_RES_TIME_TABLE_PAGER_SUCCESS,
        currNumber//页码
    }
}

/**
 * 表格的分页信息
 * @type {{data: Array, page: {pageSize, pageNum: number, currentNum: number, totalCount: number}}}
 */
const initData={
        pageMaxNum:1,          //最大页码
        currentNum:1,       //当前页码
        totalCount:1        //总数
};

//3.reducer
//这里的state只是一个局部state,在redux的store中,相当于根root.goods
export default function idcardTablePager(state = initData, action) {
    switch (action.type) {
        //修改当前访问的页码
        case UPDATE_IDCARD_RES_TIME_TABLE_PAGER_SUCCESS:
            console.log('选取第'+action.currNumber+'页数据');
            return{
                    pageNum:state.pageNum,
                    currentNum:action.currNumber,
                    totalCount:state.totalCount
            }
        default:
            return state
    }
}



