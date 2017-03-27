/**
 * 存放本项目用到的表格属性
 */

/**
 * 分页常数
 * 每页显示10条
 */
export const pageSize=2;

/**
 * 根据总数计算页数
 * @param length
 * @param pageSize
 */
export function countPageNum(length,pageSize){

    //根据总数计算页数
    let pageNum;
    if(length<=0)pageNum=1;
    if(length%pageSize==0)pageNum=Math.floor(length/pageSize);
    if(length%pageSize!=0)pageNum=Math.floor(length/pageSize)+1;
    return pageNum;

}