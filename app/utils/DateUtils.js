

/**
 * 获取时间的年月日的格式,2017-03-08
 */
export const dateToString = (date) => {
    const year = date.getFullYear();
    let month = parseInt(date.getMonth()) + 1;
    let day = date.getDate();
    //将2017-3-27  ===> 2017-03-27
    if(month<10)month='0'+month;
    if(day<10)day='0'+day;
    return `${year}-${month}-${day}`;
};



/**
 * 获取时间戳的年月日的格式,2017-03-08
 */
export const timeStampToString = (timestamp) => {
    const date = new Date(parseInt(timestamp) * 1000);
    const year = date.getFullYear();
    let month = parseInt(date.getMonth()) + 1;
    let day = date.getDate();
    if(month<10)month='0'+month;
    if(day<10)day='0'+day;
    return `${year}-${month}-${day}`;
};

/**
 * 获取30天以前的时间
 * @param date
 * @returns {Date}
 */
export const getLastMonth=(date)=>{
    let day=new Date();
    day.setTime(day.getTime()-24*60*60*1000*30);
    return day;
}


/**
 * 生成时间字符串数组
 * @param beginDate
 * @param endDate
 */
export function generateDateArray(beginDate,endDate){


}