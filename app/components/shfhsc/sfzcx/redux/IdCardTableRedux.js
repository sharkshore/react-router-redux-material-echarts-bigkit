import {pageSize} from '../../../../consts/TablePageSet'

/**
 * 本reduce处理身份证的表格需要显示的数据
 * @type {string}
 */

//1.静态字段
export const REFRESH_IDCARD_RES_TIME_TABLE_DATA_SUCCESS = 'REFRESH_IDCARD_RES_TIME_TABLE_DATA_SUCCESS';
export const UPDATE_IDCARD_RES_TIME_TABLE_PAGER_SUCCESS = 'UPDATE_IDCARD_RES_TIME_TABLE_PAGER_SUCCESS';

//2.action构造器

/*//刷新表格数据
export function refreshTableAction(data) {
    return {
        type: REFRESH_IDCARD_RES_TIME_TABLE_DATA_SUCCESS,
        data//一个数组数据
    }
}*/

//点击跳转页码
export function updatePagerAction(currNumber){
    return {
        type: UPDATE_IDCARD_RES_TIME_TABLE_PAGER_SUCCESS,
        currNumber//页码
    }
}


/**
 * 表格的初始化数据,包含分页的实时信息
 * data放表格需要的所有数据
 *
 * @type {{data: Array, page: {pageSize, pageNum: number, currentNum: number}}}
 */
const initData={
    data:[],
    page:{
        pageSize:pageSize,  //每页数量
        pageNum:1,          //最大页码
        currentNum:1,       //当前页码
        totalCount:1        //总数
    }
}

//3.reducer
//这里的state只是一个局部state,在redux的store中,相当于根root.goods
export default function idcardTable(state = initData, action) {
    switch (action.type) {
        //刷新表格数据
        case REFRESH_IDCARD_RES_TIME_TABLE_DATA_SUCCESS:
            console.log('REFRESH_IDCARD_RES_TIME_TABLE_DATA_SUCCESS');
            console.log('更新表格的所有数据');
            //根据总数计算页数
            let length=action.data.length;
            let pageNum;
            if(length<=0)pageNum=1;
            if(length%pageSize==0)pageNum=Math.floor(length/pageSize);
            if(length%pageSize!=0)pageNum=Math.floor(length/pageSize)+1;
            return {
                data:action.data,
                page:{
                    pageSize:pageSize,
                    pageNum:pageNum,
                    currentNum:1,
                    totalCount:length
                }
            }
        //修改当前访问的页码
        case UPDATE_IDCARD_RES_TIME_TABLE_PAGER_SUCCESS:
            console.log('选取第'+action.currNumber+'页数据');
            return{
                page:{
                    pageSize:state.page.pageSize,
                    pageNum:state.page.pageNum,
                    currentNum:action.currNumber,
                    totalCount:state.page.totalCount
                }
            }
        default:
            return state
    }
}

//4.辅助方法,查询第几页的数据
export function getDataByPage(idcardTable,idCardRepository){

    let {currentNum,pageSize,pageNum,totalCount}=state.page;
    //返回第一页数据
    if(currentNum<=1){
        return state.data.slice(0,pageSize*1);
    }
    //返回最后一页数据
    if(currentNum>=pageNum){
        return state.data.slice(pageSize*(pageNum-1),totalCount);
    }
    return state.data.slice(pageSize*(currentNum-1),pageSize*currentNum);

}



