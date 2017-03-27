import {LevelToStr,ProductToStr} from '../../../../consts/Enums'
import {groupSum,selectFieldArray} from '../../../../utils/ArrayUtils'
import {refreshTableAction} from './IdCardTableRedux'
import {pageSize,countPageNum} from '../../../../consts/TablePageSet'

/**
 * 身份证统计数据的redux
 * 目前是柱状图和扇形图公用一个redux,以后有机会再拆分
 * @type {[*]}
 */

//IdCard 2个图表和一个表格公用这个数据仓库
const initIdCardData = [

    {
        date: new Date('2017-03-01'.replace(/-/g,'/')),
        member: '鹏元征信',
        product: 1,
        response_level: 1,
        count: 500
    },
    {
        date: new Date('2017-03-01'.replace(/-/g,'/')),
        member: '鹏元征信',
        product: 1,
        response_level: 2,
        count: 300
    },
    {
        date: new Date('2017-03-01'.replace(/-/g,'/')),
        member: '鹏元征信',
        product: 1,
        response_level: 3,
        count: 700
    },
    {
        date: new Date('2017-03-01'.replace(/-/g,'/')),
        member: '鹏元征信',
        product: 1,
        response_level: 4,
        count: 882
    },
    {
        date: new Date('2017-03-01'.replace(/-/g,'/')),
        member: '鹏元征信',
        product: 1,
        response_level: 5,
        count: 992
    },
    {
        date: new Date('2017-03-01'.replace(/-/g,'/')),
        member: '鹏元征信',
        product: 1,
        response_level: 6,
        count: 256
    },
    {
        date: new Date('2017-03-01'.replace(/-/g,'/')),
        member: '鹏元征信',
        product: 1,
        response_level: 7,
        count: 990
    },
    {
        date: new Date('2017-03-01'.replace(/-/g,'/')),
        member: '鹏元征信',
        product: 1,
        response_level: 8,
        count: 875
    },
    {
        date: new Date('2017-03-01'.replace(/-/g,'/')),
        member: '鹏元征信',
        product: 1,
        response_level: 9,
        count: 379
    },
    {
        date: new Date('2017-03-01'.replace(/-/g,'/')),
        member: '鹏元征信',
        product: 1,
        response_level: 10,
        count: 1973
    },
    {
        date: new Date('2017-03-01'.replace(/-/g,'/')),
        member: '鹏元征信',
        product: 1,
        response_level: 11,
        count: 973
    },
    {
        date: new Date('2017-03-01'.replace(/-/g,'/')),
        member: '鹏元征信',
        product: 2,
        response_level: 1,
        count: 500
    },
    {
        date: new Date('2017-03-01'.replace(/-/g,'/')),
        member: '鹏元征信',
        product: 2,
        response_level: 2,
        count: 300
    },
    {
        date: new Date('2017-03-01'.replace(/-/g,'/')),
        member: '鹏元征信',
        product: 2,
        response_level: 3,
        count: 700
    },
    {
        date: new Date('2017-03-01'.replace(/-/g,'/')),
        member: '鹏元征信',
        product: 2,
        response_level: 4,
        count: 882
    },
    {
        date: new Date('2017-03-01'.replace(/-/g,'/')),
        member: '鹏元征信',
        product: 2,
        response_level: 5,
        count: 992
    },
    {
        date: new Date('2017-03-01'.replace(/-/g,'/')),
        member: '鹏元征信',
        product: 2,
        response_level: 6,
        count: 256
    },
    {
        date: new Date('2017-03-01'.replace(/-/g,'/')),
        member: '鹏元征信',
        product: 2,
        response_level: 7,
        count: 990
    },
    {
        date: new Date('2017-03-01'.replace(/-/g,'/')),
        member: '鹏元征信',
        product: 2,
        response_level: 8,
        count: 875
    },
    {
        date: new Date('2017-03-01'.replace(/-/g,'/')),
        member: '鹏元征信',
        product: 2,
        response_level: 9,
        count: 379
    },
    {
        date: new Date('2017-03-01'.replace(/-/g,'/')),
        member: '鹏元征信',
        product: 2,
        response_level: 10,
        count: 973
    },
    {
        date: new Date('2017-03-01'.replace(/-/g,'/')),
        member: '鹏元征信',
        product: 2,
        response_level: 11,
        count: 973
    },
    {
        date: new Date('2017-03-01'.replace(/-/g,'/')),
        member: '腾讯征信',
        product: 1,
        response_level: 1,
        count: 1500
    },
    {
        date: new Date('2017-03-01'.replace(/-/g,'/')),
        member: '腾讯征信',
        product: 1,
        response_level: 2,
        count: 1300
    },
    {
        date: new Date('2017-03-01'.replace(/-/g,'/')),
        member: '腾讯征信',
        product: 1,
        response_level: 3,
        count: 1700
    },
    {
        date: new Date('2017-03-01'.replace(/-/g,'/')),
        member: '腾讯征信',
        product: 1,
        response_level: 4,
        count: 1882
    },
    {
        date: new Date('2017-03-01'.replace(/-/g,'/')),
        member: '腾讯征信',
        product: 1,
        response_level: 5,
        count: 1992
    },
    {
        date: new Date('2017-03-01'.replace(/-/g,'/')),
        member: '腾讯征信',
        product: 1,
        response_level: 6,
        count: 1256
    },
    {
        date: new Date('2017-03-01'.replace(/-/g,'/')),
        member: '腾讯征信',
        product: 1,
        response_level: 7,
        count: 1990
    },
    {
        date: new Date('2017-03-01'.replace(/-/g,'/')),
        member: '腾讯征信',
        product: 1,
        response_level: 8,
        count: 1875
    },
    {
        date: new Date('2017-03-01'.replace(/-/g,'/')),
        member: '腾讯征信',
        product: 1,
        response_level: 9,
        count: 1379
    },
    {
        date: new Date('2017-03-01'.replace(/-/g,'/')),
        member: '腾讯征信',
        product: 1,
        response_level: 10,
        count: 11973
    },
    {
        date: new Date('2017-03-01'.replace(/-/g,'/')),
        member: '腾讯征信',
        product: 1,
        response_level: 11,
        count: 1973
    },
    {
        date: new Date('2017-03-01'.replace(/-/g,'/')),
        member: '腾讯征信',
        product: 2,
        response_level: 1,
        count: 1500
    },
    {
        date: new Date('2017-03-01'.replace(/-/g,'/')),
        member: '腾讯征信',
        product: 2,
        response_level: 2,
        count: 1300
    },
    {
        date: new Date('2017-03-01'.replace(/-/g,'/')),
        member: '腾讯征信',
        product: 2,
        response_level: 3,
        count: 1700
    },
    {
        date: new Date('2017-03-01'.replace(/-/g,'/')),
        member: '腾讯征信',
        product: 2,
        response_level: 4,
        count: 1882
    },
    {
        date: new Date('2017-03-01'.replace(/-/g,'/')),
        member: '腾讯征信',
        product: 2,
        response_level: 5,
        count: 1992
    },
    {
        date: new Date('2017-03-01'.replace(/-/g,'/')),
        member: '腾讯征信',
        product: 2,
        response_level: 6,
        count: 1256
    },
    {
        date: new Date('2017-03-01'.replace(/-/g,'/')),
        member: '腾讯征信',
        product: 2,
        response_level: 7,
        count: 1990
    },
    {
        date: new Date('2017-03-01'.replace(/-/g,'/')),
        member: '腾讯征信',
        product: 2,
        response_level: 8,
        count: 1875
    },
    {
        date: new Date('2017-03-01'.replace(/-/g,'/')),
        member: '腾讯征信',
        product: 2,
        response_level: 9,
        count: 1379
    },
    {
        date: new Date('2017-03-01'.replace(/-/g,'/')),
        member: '腾讯征信',
        product: 2,
        response_level: 10,
        count: 1973
    },
    {
        date: new Date('2017-03-01'.replace(/-/g,'/')),
        member: '腾讯征信',
        product: 2,
        response_level: 11,
        count: 1973
    },
    {
        date: new Date('2017-03-01'.replace(/-/g,'/')),
        member: '宝付支付有限公司',
        product: 1,
        response_level: 1,
        count: 2500
    },
    {
        date: new Date('2017-03-01'.replace(/-/g,'/')),
        member: '宝付支付有限公司',
        product: 1,
        response_level: 2,
        count: 2300
    },
    {
        date: new Date('2017-03-01'.replace(/-/g,'/')),
        member: '宝付支付有限公司',
        product: 1,
        response_level: 3,
        count: 2700
    },
    {
        date: new Date('2017-03-01'.replace(/-/g,'/')),
        member: '宝付支付有限公司',
        product: 1,
        response_level: 4,
        count: 2882
    },
    {
        date: new Date('2017-03-01'.replace(/-/g,'/')),
        member: '宝付支付有限公司',
        product: 1,
        response_level: 5,
        count: 2992
    },
    {
        date: new Date('2017-03-01'.replace(/-/g,'/')),
        member: '宝付支付有限公司',
        product: 1,
        response_level: 6,
        count: 2256
    },
    {
        date: new Date('2017-03-01'.replace(/-/g,'/')),
        member: '宝付支付有限公司',
        product: 1,
        response_level: 7,
        count: 2990
    },
    {
        date: new Date('2017-03-01'.replace(/-/g,'/')),
        member: '宝付支付有限公司',
        product: 1,
        response_level: 8,
        count: 2875
    },
    {
        date: new Date('2017-03-01'.replace(/-/g,'/')),
        member: '宝付支付有限公司',
        product: 1,
        response_level: 9,
        count: 2379
    },
    {
        date: new Date('2017-03-01'.replace(/-/g,'/')),
        member: '宝付支付有限公司',
        product: 1,
        response_level: 10,
        count: 21973
    },
    {
        date: new Date('2017-03-01'.replace(/-/g,'/')),
        member: '宝付支付有限公司',
        product: 1,
        response_level: 11,
        count: 2973
    },
    {
        date: new Date('2017-03-01'.replace(/-/g,'/')),
        member: '宝付支付有限公司',
        product: 2,
        response_level: 1,
        count: 2500
    },
    {
        date: new Date('2017-03-01'.replace(/-/g,'/')),
        member: '宝付支付有限公司',
        product: 2,
        response_level: 2,
        count: 2300
    },
    {
        date: new Date('2017-03-01'.replace(/-/g,'/')),
        member: '宝付支付有限公司',
        product: 2,
        response_level: 3,
        count: 2700
    },
    {
        date: new Date('2017-03-01'.replace(/-/g,'/')),
        member: '宝付支付有限公司',
        product: 2,
        response_level: 4,
        count: 2882
    },
    {
        date: new Date('2017-03-01'.replace(/-/g,'/')),
        member: '宝付支付有限公司',
        product: 2,
        response_level: 5,
        count: 2992
    },
    {
        date: new Date('2017-03-01'.replace(/-/g,'/')),
        member: '宝付支付有限公司',
        product: 2,
        response_level: 6,
        count: 2256
    },
    {
        date: new Date('2017-03-01'.replace(/-/g,'/')),
        member: '宝付支付有限公司',
        product: 2,
        response_level: 7,
        count: 2990
    },
    {
        date: new Date('2017-03-01'.replace(/-/g,'/')),
        member: '宝付支付有限公司',
        product: 2,
        response_level: 8,
        count: 2875
    },
    {
        date: new Date('2017-03-01'.replace(/-/g,'/')),
        member: '宝付支付有限公司',
        product: 2,
        response_level: 9,
        count: 2379
    },
    {
        date: new Date('2017-03-01'.replace(/-/g,'/')),
        member: '宝付支付有限公司',
        product: 2,
        response_level: 10,
        count: 2973
    },
    {
        date: new Date('2017-03-01'.replace(/-/g,'/')),
        member: '宝付支付有限公司',
        product: 2,
        response_level: 11,
        count: 2973
    },
    {
        date: new Date('2017-03-02'.replace(/-/g,'/')),
        member: '鹏元征信',
        product: 1,
        response_level: 1,
        count: 500
    },
    {
        date: new Date('2017-03-02'.replace(/-/g,'/')),
        member: '鹏元征信',
        product: 1,
        response_level: 2,
        count: 300
    },
    {
        date: new Date('2017-03-02'.replace(/-/g,'/')),
        member: '鹏元征信',
        product: 1,
        response_level: 3,
        count: 700
    },
    {
        date: new Date('2017-03-02'.replace(/-/g,'/')),
        member: '鹏元征信',
        product: 1,
        response_level: 4,
        count: 882
    },
    {
        date: new Date('2017-03-02'.replace(/-/g,'/')),
        member: '鹏元征信',
        product: 1,
        response_level: 5,
        count: 992
    },
    {
        date: new Date('2017-03-02'.replace(/-/g,'/')),
        member: '鹏元征信',
        product: 1,
        response_level: 6,
        count: 256
    },
    {
        date: new Date('2017-03-02'.replace(/-/g,'/')),
        member: '鹏元征信',
        product: 1,
        response_level: 7,
        count: 990
    },
    {
        date: new Date('2017-03-02'.replace(/-/g,'/')),
        member: '鹏元征信',
        product: 1,
        response_level: 8,
        count: 875
    },
    {
        date: new Date('2017-03-02'.replace(/-/g,'/')),
        member: '鹏元征信',
        product: 1,
        response_level: 9,
        count: 379
    },
    {
        date: new Date('2017-03-02'.replace(/-/g,'/')),
        member: '鹏元征信',
        product: 1,
        response_level: 10,
        count: 1973
    },
    {
        date: new Date('2017-03-02'.replace(/-/g,'/')),
        member: '鹏元征信',
        product: 1,
        response_level: 11,
        count: 973
    },
    {
        date: new Date('2017-03-02'.replace(/-/g,'/')),
        member: '鹏元征信',
        product: 2,
        response_level: 1,
        count: 500
    },
    {
        date: new Date('2017-03-02'.replace(/-/g,'/')),
        member: '鹏元征信',
        product: 2,
        response_level: 2,
        count: 300
    },
    {
        date: new Date('2017-03-02'.replace(/-/g,'/')),
        member: '鹏元征信',
        product: 2,
        response_level: 3,
        count: 700
    },
    {
        date: new Date('2017-03-02'.replace(/-/g,'/')),
        member: '鹏元征信',
        product: 2,
        response_level: 4,
        count: 882
    },
    {
        date: new Date('2017-03-02'.replace(/-/g,'/')),
        member: '鹏元征信',
        product: 2,
        response_level: 5,
        count: 992
    },
    {
        date: new Date('2017-03-02'.replace(/-/g,'/')),
        member: '鹏元征信',
        product: 2,
        response_level: 6,
        count: 256
    },
    {
        date: new Date('2017-03-02'.replace(/-/g,'/')),
        member: '鹏元征信',
        product: 2,
        response_level: 7,
        count: 990
    },
    {
        date: new Date('2017-03-02'.replace(/-/g,'/')),
        member: '鹏元征信',
        product: 2,
        response_level: 8,
        count: 875
    },
    {
        date: new Date('2017-03-02'.replace(/-/g,'/')),
        member: '鹏元征信',
        product: 2,
        response_level: 9,
        count: 379
    },
    {
        date: new Date('2017-03-02'.replace(/-/g,'/')),
        member: '鹏元征信',
        product: 2,
        response_level: 10,
        count: 973
    },
    {
        date: new Date('2017-03-02'.replace(/-/g,'/')),
        member: '鹏元征信',
        product: 2,
        response_level: 11,
        count: 973
    },
    {
        date: new Date('2017-03-02'.replace(/-/g,'/')),
        member: '腾讯征信',
        product: 1,
        response_level: 1,
        count: 1500
    },
    {
        date: new Date('2017-03-02'.replace(/-/g,'/')),
        member: '腾讯征信',
        product: 1,
        response_level: 2,
        count: 1300
    },
    {
        date: new Date('2017-03-02'.replace(/-/g,'/')),
        member: '腾讯征信',
        product: 1,
        response_level: 3,
        count: 1700
    },
    {
        date: new Date('2017-03-02'.replace(/-/g,'/')),
        member: '腾讯征信',
        product: 1,
        response_level: 4,
        count: 1882
    },
    {
        date: new Date('2017-03-02'.replace(/-/g,'/')),
        member: '腾讯征信',
        product: 1,
        response_level: 5,
        count: 1992
    },
    {
        date: new Date('2017-03-02'.replace(/-/g,'/')),
        member: '腾讯征信',
        product: 1,
        response_level: 6,
        count: 1256
    },
    {
        date: new Date('2017-03-02'.replace(/-/g,'/')),
        member: '腾讯征信',
        product: 1,
        response_level: 7,
        count: 1990
    },
    {
        date: new Date('2017-03-02'.replace(/-/g,'/')),
        member: '腾讯征信',
        product: 1,
        response_level: 8,
        count: 1875
    },
    {
        date: new Date('2017-03-02'.replace(/-/g,'/')),
        member: '腾讯征信',
        product: 1,
        response_level: 9,
        count: 1379
    },
    {
        date: new Date('2017-03-02'.replace(/-/g,'/')),
        member: '腾讯征信',
        product: 1,
        response_level: 10,
        count: 11973
    },
    {
        date: new Date('2017-03-02'.replace(/-/g,'/')),
        member: '腾讯征信',
        product: 1,
        response_level: 11,
        count: 1973
    },
    {
        date: new Date('2017-03-02'.replace(/-/g,'/')),
        member: '腾讯征信',
        product: 2,
        response_level: 1,
        count: 1500
    },
    {
        date: new Date('2017-03-02'.replace(/-/g,'/')),
        member: '腾讯征信',
        product: 2,
        response_level: 2,
        count: 1300
    },
    {
        date: new Date('2017-03-02'.replace(/-/g,'/')),
        member: '腾讯征信',
        product: 2,
        response_level: 3,
        count: 1700
    },
    {
        date: new Date('2017-03-02'.replace(/-/g,'/')),
        member: '腾讯征信',
        product: 2,
        response_level: 4,
        count: 1882
    },
    {
        date: new Date('2017-03-02'.replace(/-/g,'/')),
        member: '腾讯征信',
        product: 2,
        response_level: 5,
        count: 1992
    },
    {
        date: new Date('2017-03-02'.replace(/-/g,'/')),
        member: '腾讯征信',
        product: 2,
        response_level: 6,
        count: 1256
    },
    {
        date: new Date('2017-03-02'.replace(/-/g,'/')),
        member: '腾讯征信',
        product: 2,
        response_level: 7,
        count: 1990
    },
    {
        date: new Date('2017-03-02'.replace(/-/g,'/')),
        member: '腾讯征信',
        product: 2,
        response_level: 8,
        count: 1875
    },
    {
        date: new Date('2017-03-02'.replace(/-/g,'/')),
        member: '腾讯征信',
        product: 2,
        response_level: 9,
        count: 1379
    },
    {
        date: new Date('2017-03-02'.replace(/-/g,'/')),
        member: '腾讯征信',
        product: 2,
        response_level: 10,
        count: 1973
    },
    {
        date: new Date('2017-03-02'.replace(/-/g,'/')),
        member: '腾讯征信',
        product: 2,
        response_level: 11,
        count: 1973
    },
    {
        date: new Date('2017-03-02'.replace(/-/g,'/')),
        member: '宝付支付有限公司',
        product: 1,
        response_level: 1,
        count: 2500
    },
    {
        date: new Date('2017-03-02'.replace(/-/g,'/')),
        member: '宝付支付有限公司',
        product: 1,
        response_level: 2,
        count: 2300
    },
    {
        date: new Date('2017-03-02'.replace(/-/g,'/')),
        member: '宝付支付有限公司',
        product: 1,
        response_level: 3,
        count: 2700
    },
    {
        date: new Date('2017-03-02'.replace(/-/g,'/')),
        member: '宝付支付有限公司',
        product: 1,
        response_level: 4,
        count: 2882
    },
    {
        date: new Date('2017-03-02'.replace(/-/g,'/')),
        member: '宝付支付有限公司',
        product: 1,
        response_level: 5,
        count: 2992
    },
    {
        date: new Date('2017-03-02'.replace(/-/g,'/')),
        member: '宝付支付有限公司',
        product: 1,
        response_level: 6,
        count: 2256
    },
    {
        date: new Date('2017-03-02'.replace(/-/g,'/')),
        member: '宝付支付有限公司',
        product: 1,
        response_level: 7,
        count: 2990
    },
    {
        date: new Date('2017-03-02'.replace(/-/g,'/')),
        member: '宝付支付有限公司',
        product: 1,
        response_level: 8,
        count: 2875
    },
    {
        date: new Date('2017-03-02'.replace(/-/g,'/')),
        member: '宝付支付有限公司',
        product: 1,
        response_level: 9,
        count: 2379
    },
    {
        date: new Date('2017-03-02'.replace(/-/g,'/')),
        member: '宝付支付有限公司',
        product: 1,
        response_level: 10,
        count: 21973
    },
    {
        date: new Date('2017-03-02'.replace(/-/g,'/')),
        member: '宝付支付有限公司',
        product: 1,
        response_level: 11,
        count: 2973
    },
    {
        date: new Date('2017-03-02'.replace(/-/g,'/')),
        member: '宝付支付有限公司',
        product: 2,
        response_level: 1,
        count: 2500
    },
    {
        date: new Date('2017-03-02'.replace(/-/g,'/')),
        member: '宝付支付有限公司',
        product: 2,
        response_level: 2,
        count: 2300
    },
    {
        date: new Date('2017-03-02'.replace(/-/g,'/')),
        member: '宝付支付有限公司',
        product: 2,
        response_level: 3,
        count: 2700
    },
    {
        date: new Date('2017-03-02'.replace(/-/g,'/')),
        member: '宝付支付有限公司',
        product: 2,
        response_level: 4,
        count: 2882
    },
    {
        date: new Date('2017-03-02'.replace(/-/g,'/')),
        member: '宝付支付有限公司',
        product: 2,
        response_level: 5,
        count: 2992
    },
    {
        date: new Date('2017-03-02'.replace(/-/g,'/')),
        member: '宝付支付有限公司',
        product: 2,
        response_level: 6,
        count: 2256
    },
    {
        date: new Date('2017-03-02'.replace(/-/g,'/')),
        member: '宝付支付有限公司',
        product: 2,
        response_level: 7,
        count: 2990
    },
    {
        date: new Date('2017-03-02'.replace(/-/g,'/')),
        member: '宝付支付有限公司',
        product: 2,
        response_level: 8,
        count: 2875
    },
    {
        date: new Date('2017-03-02'.replace(/-/g,'/')),
        member: '宝付支付有限公司',
        product: 2,
        response_level: 9,
        count: 2379
    },
    {
        date: new Date('2017-03-02'.replace(/-/g,'/')),
        member: '宝付支付有限公司',
        product: 2,
        response_level: 10,
        count: 2973
    },
    {
        date: new Date('2017-03-02'.replace(/-/g,'/')),
        member: '宝付支付有限公司',
        product: 2,
        response_level: 11,
        count: 2973
    },
    {
        date: new Date('2017-03-03'.replace(/-/g,'/')),
        member: '鹏元征信',
        product: 1,
        response_level: 1,
        count: 500
    },
    {
        date: new Date('2017-03-03'.replace(/-/g,'/')),
        member: '鹏元征信',
        product: 1,
        response_level: 2,
        count: 300
    },
    {
        date: new Date('2017-03-03'.replace(/-/g,'/')),
        member: '鹏元征信',
        product: 1,
        response_level: 3,
        count: 700
    },
    {
        date: new Date('2017-03-03'.replace(/-/g,'/')),
        member: '鹏元征信',
        product: 1,
        response_level: 4,
        count: 882
    },
    {
        date: new Date('2017-03-03'.replace(/-/g,'/')),
        member: '鹏元征信',
        product: 1,
        response_level: 5,
        count: 992
    },
    {
        date: new Date('2017-03-03'.replace(/-/g,'/')),
        member: '鹏元征信',
        product: 1,
        response_level: 6,
        count: 256
    },
    {
        date: new Date('2017-03-03'.replace(/-/g,'/')),
        member: '鹏元征信',
        product: 1,
        response_level: 7,
        count: 990
    },
    {
        date: new Date('2017-03-03'.replace(/-/g,'/')),
        member: '鹏元征信',
        product: 1,
        response_level: 8,
        count: 875
    },
    {
        date: new Date('2017-03-03'.replace(/-/g,'/')),
        member: '鹏元征信',
        product: 1,
        response_level: 9,
        count: 379
    },
    {
        date: new Date('2017-03-03'.replace(/-/g,'/')),
        member: '鹏元征信',
        product: 1,
        response_level: 10,
        count: 1973
    },
    {
        date: new Date('2017-03-03'.replace(/-/g,'/')),
        member: '鹏元征信',
        product: 1,
        response_level: 11,
        count: 973
    },
    {
        date: new Date('2017-03-03'.replace(/-/g,'/')),
        member: '鹏元征信',
        product: 2,
        response_level: 1,
        count: 500
    },
    {
        date: new Date('2017-03-03'.replace(/-/g,'/')),
        member: '鹏元征信',
        product: 2,
        response_level: 2,
        count: 300
    },
    {
        date: new Date('2017-03-03'.replace(/-/g,'/')),
        member: '鹏元征信',
        product: 2,
        response_level: 3,
        count: 700
    },
    {
        date: new Date('2017-03-03'.replace(/-/g,'/')),
        member: '鹏元征信',
        product: 2,
        response_level: 4,
        count: 882
    },
    {
        date: new Date('2017-03-03'.replace(/-/g,'/')),
        member: '鹏元征信',
        product: 2,
        response_level: 5,
        count: 992
    },
    {
        date: new Date('2017-03-03'.replace(/-/g,'/')),
        member: '鹏元征信',
        product: 2,
        response_level: 6,
        count: 256
    },
    {
        date: new Date('2017-03-03'.replace(/-/g,'/')),
        member: '鹏元征信',
        product: 2,
        response_level: 7,
        count: 990
    },
    {
        date: new Date('2017-03-03'.replace(/-/g,'/')),
        member: '鹏元征信',
        product: 2,
        response_level: 8,
        count: 875
    },
    {
        date: new Date('2017-03-03'.replace(/-/g,'/')),
        member: '鹏元征信',
        product: 2,
        response_level: 9,
        count: 379
    },
    {
        date: new Date('2017-03-03'.replace(/-/g,'/')),
        member: '鹏元征信',
        product: 2,
        response_level: 10,
        count: 973
    },
    {
        date: new Date('2017-03-03'.replace(/-/g,'/')),
        member: '鹏元征信',
        product: 2,
        response_level: 11,
        count: 973
    },
    {
        date: new Date('2017-03-03'.replace(/-/g,'/')),
        member: '腾讯征信',
        product: 1,
        response_level: 1,
        count: 1500
    },
    {
        date: new Date('2017-03-03'.replace(/-/g,'/')),
        member: '腾讯征信',
        product: 1,
        response_level: 2,
        count: 1300
    },
    {
        date: new Date('2017-03-03'.replace(/-/g,'/')),
        member: '腾讯征信',
        product: 1,
        response_level: 3,
        count: 1700
    },
    {
        date: new Date('2017-03-03'.replace(/-/g,'/')),
        member: '腾讯征信',
        product: 1,
        response_level: 4,
        count: 1882
    },
    {
        date: new Date('2017-03-03'.replace(/-/g,'/')),
        member: '腾讯征信',
        product: 1,
        response_level: 5,
        count: 1992
    },
    {
        date: new Date('2017-03-03'.replace(/-/g,'/')),
        member: '腾讯征信',
        product: 1,
        response_level: 6,
        count: 1256
    },
    {
        date: new Date('2017-03-03'.replace(/-/g,'/')),
        member: '腾讯征信',
        product: 1,
        response_level: 7,
        count: 1990
    },
    {
        date: new Date('2017-03-03'.replace(/-/g,'/')),
        member: '腾讯征信',
        product: 1,
        response_level: 8,
        count: 1875
    },
    {
        date: new Date('2017-03-03'.replace(/-/g,'/')),
        member: '腾讯征信',
        product: 1,
        response_level: 9,
        count: 1379
    },
    {
        date: new Date('2017-03-03'.replace(/-/g,'/')),
        member: '腾讯征信',
        product: 1,
        response_level: 10,
        count: 11973
    },
    {
        date: new Date('2017-03-03'.replace(/-/g,'/')),
        member: '腾讯征信',
        product: 1,
        response_level: 11,
        count: 1973
    },
    {
        date: new Date('2017-03-03'.replace(/-/g,'/')),
        member: '腾讯征信',
        product: 2,
        response_level: 1,
        count: 1500
    },
    {
        date: new Date('2017-03-03'.replace(/-/g,'/')),
        member: '腾讯征信',
        product: 2,
        response_level: 2,
        count: 1300
    },
    {
        date: new Date('2017-03-03'.replace(/-/g,'/')),
        member: '腾讯征信',
        product: 2,
        response_level: 3,
        count: 1700
    },
    {
        date: new Date('2017-03-03'.replace(/-/g,'/')),
        member: '腾讯征信',
        product: 2,
        response_level: 4,
        count: 1882
    },
    {
        date: new Date('2017-03-03'.replace(/-/g,'/')),
        member: '腾讯征信',
        product: 2,
        response_level: 5,
        count: 1992
    },
    {
        date: new Date('2017-03-03'.replace(/-/g,'/')),
        member: '腾讯征信',
        product: 2,
        response_level: 6,
        count: 1256
    },
    {
        date: new Date('2017-03-03'.replace(/-/g,'/')),
        member: '腾讯征信',
        product: 2,
        response_level: 7,
        count: 1990
    },
    {
        date: new Date('2017-03-03'.replace(/-/g,'/')),
        member: '腾讯征信',
        product: 2,
        response_level: 8,
        count: 1875
    },
    {
        date: new Date('2017-03-03'.replace(/-/g,'/')),
        member: '腾讯征信',
        product: 2,
        response_level: 9,
        count: 1379
    },
    {
        date: new Date('2017-03-03'.replace(/-/g,'/')),
        member: '腾讯征信',
        product: 2,
        response_level: 10,
        count: 1973
    },
    {
        date: new Date('2017-03-03'.replace(/-/g,'/')),
        member: '腾讯征信',
        product: 2,
        response_level: 11,
        count: 1973
    },
    {
        date: new Date('2017-03-03'.replace(/-/g,'/')),
        member: '宝付支付有限公司',
        product: 1,
        response_level: 1,
        count: 2500
    },
    {
        date: new Date('2017-03-03'.replace(/-/g,'/')),
        member: '宝付支付有限公司',
        product: 1,
        response_level: 2,
        count: 2300
    },
    {
        date: new Date('2017-03-03'.replace(/-/g,'/')),
        member: '宝付支付有限公司',
        product: 1,
        response_level: 3,
        count: 2700
    },
    {
        date: new Date('2017-03-03'.replace(/-/g,'/')),
        member: '宝付支付有限公司',
        product: 1,
        response_level: 4,
        count: 2882
    },
    {
        date: new Date('2017-03-03'.replace(/-/g,'/')),
        member: '宝付支付有限公司',
        product: 1,
        response_level: 5,
        count: 2992
    },
    {
        date: new Date('2017-03-03'.replace(/-/g,'/')),
        member: '宝付支付有限公司',
        product: 1,
        response_level: 6,
        count: 2256
    },
    {
        date: new Date('2017-03-03'.replace(/-/g,'/')),
        member: '宝付支付有限公司',
        product: 1,
        response_level: 7,
        count: 2990
    },
    {
        date: new Date('2017-03-03'.replace(/-/g,'/')),
        member: '宝付支付有限公司',
        product: 1,
        response_level: 8,
        count: 2875
    },
    {
        date: new Date('2017-03-03'.replace(/-/g,'/')),
        member: '宝付支付有限公司',
        product: 1,
        response_level: 9,
        count: 2379
    },
    {
        date: new Date('2017-03-03'.replace(/-/g,'/')),
        member: '宝付支付有限公司',
        product: 1,
        response_level: 10,
        count: 21973
    },
    {
        date: new Date('2017-03-03'.replace(/-/g,'/')),
        member: '宝付支付有限公司',
        product: 1,
        response_level: 11,
        count: 2973
    },
    {
        date: new Date('2017-03-03'.replace(/-/g,'/')),
        member: '宝付支付有限公司',
        product: 2,
        response_level: 1,
        count: 2500
    },
    {
        date: new Date('2017-03-03'.replace(/-/g,'/')),
        member: '宝付支付有限公司',
        product: 2,
        response_level: 2,
        count: 2300
    },
    {
        date: new Date('2017-03-03'.replace(/-/g,'/')),
        member: '宝付支付有限公司',
        product: 2,
        response_level: 3,
        count: 2700
    },
    {
        date: new Date('2017-03-03'.replace(/-/g,'/')),
        member: '宝付支付有限公司',
        product: 2,
        response_level: 4,
        count: 2882
    },
    {
        date: new Date('2017-03-03'.replace(/-/g,'/')),
        member: '宝付支付有限公司',
        product: 2,
        response_level: 5,
        count: 2992
    },
    {
        date: new Date('2017-03-03'.replace(/-/g,'/')),
        member: '宝付支付有限公司',
        product: 2,
        response_level: 6,
        count: 2256
    },
    {
        date: new Date('2017-03-03'.replace(/-/g,'/')),
        member: '宝付支付有限公司',
        product: 2,
        response_level: 7,
        count: 2990
    },
    {
        date: new Date('2017-03-03'.replace(/-/g,'/')),
        member: '宝付支付有限公司',
        product: 2,
        response_level: 8,
        count: 2875
    },
    {
        date: new Date('2017-03-03'.replace(/-/g,'/')),
        member: '宝付支付有限公司',
        product: 2,
        response_level: 9,
        count: 2379
    },
    {
        date: new Date('2017-03-03'.replace(/-/g,'/')),
        member: '宝付支付有限公司',
        product: 2,
        response_level: 10,
        count: 2973
    },
    {
        date: new Date('2017-03-03'.replace(/-/g,'/')),
        member: '宝付支付有限公司',
        product: 2,
        response_level: 11,
        count: 2973
    },
    {
        date: new Date('2017-04-04'.replace(/-/g,'/')),
        member: '鹏元征信',
        product: 1,
        response_level: 1,
        count: 500
    },
    {
        date: new Date('2017-04-04'.replace(/-/g,'/')),
        member: '鹏元征信',
        product: 1,
        response_level: 2,
        count: 300
    },
    {
        date: new Date('2017-04-04'.replace(/-/g,'/')),
        member: '鹏元征信',
        product: 1,
        response_level: 3,
        count: 700
    },
    {
        date: new Date('2017-04-04'.replace(/-/g,'/')),
        member: '鹏元征信',
        product: 1,
        response_level: 4,
        count: 882
    },
    {
        date: new Date('2017-04-04'.replace(/-/g,'/')),
        member: '鹏元征信',
        product: 1,
        response_level: 5,
        count: 992
    },
    {
        date: new Date('2017-04-04'.replace(/-/g,'/')),
        member: '鹏元征信',
        product: 1,
        response_level: 6,
        count: 256
    },
    {
        date: new Date('2017-04-04'.replace(/-/g,'/')),
        member: '鹏元征信',
        product: 1,
        response_level: 7,
        count: 990
    },
    {
        date: new Date('2017-04-04'.replace(/-/g,'/')),
        member: '鹏元征信',
        product: 1,
        response_level: 8,
        count: 875
    },
    {
        date: new Date('2017-04-04'.replace(/-/g,'/')),
        member: '鹏元征信',
        product: 1,
        response_level: 9,
        count: 379
    },
    {
        date: new Date('2017-04-04'.replace(/-/g,'/')),
        member: '鹏元征信',
        product: 1,
        response_level: 10,
        count: 1973
    },
    {
        date: new Date('2017-04-04'.replace(/-/g,'/')),
        member: '鹏元征信',
        product: 1,
        response_level: 11,
        count: 973
    },
    {
        date: new Date('2017-04-04'.replace(/-/g,'/')),
        member: '鹏元征信',
        product: 2,
        response_level: 1,
        count: 500
    },
    {
        date: new Date('2017-04-04'.replace(/-/g,'/')),
        member: '鹏元征信',
        product: 2,
        response_level: 2,
        count: 300
    },
    {
        date: new Date('2017-04-04'.replace(/-/g,'/')),
        member: '鹏元征信',
        product: 2,
        response_level: 3,
        count: 700
    },
    {
        date: new Date('2017-04-04'.replace(/-/g,'/')),
        member: '鹏元征信',
        product: 2,
        response_level: 4,
        count: 882
    },
    {
        date: new Date('2017-04-04'.replace(/-/g,'/')),
        member: '鹏元征信',
        product: 2,
        response_level: 5,
        count: 992
    },
    {
        date: new Date('2017-04-04'.replace(/-/g,'/')),
        member: '鹏元征信',
        product: 2,
        response_level: 6,
        count: 256
    },
    {
        date: new Date('2017-04-04'.replace(/-/g,'/')),
        member: '鹏元征信',
        product: 2,
        response_level: 7,
        count: 990
    },
    {
        date: new Date('2017-04-04'.replace(/-/g,'/')),
        member: '鹏元征信',
        product: 2,
        response_level: 8,
        count: 875
    },
    {
        date: new Date('2017-04-04'.replace(/-/g,'/')),
        member: '鹏元征信',
        product: 2,
        response_level: 9,
        count: 379
    },
    {
        date: new Date('2017-04-04'.replace(/-/g,'/')),
        member: '鹏元征信',
        product: 2,
        response_level: 10,
        count: 973
    },
    {
        date: new Date('2017-04-04'.replace(/-/g,'/')),
        member: '鹏元征信',
        product: 2,
        response_level: 11,
        count: 973
    },
    {
        date: new Date('2017-04-04'.replace(/-/g,'/')),
        member: '腾讯征信',
        product: 1,
        response_level: 1,
        count: 1500
    },
    {
        date: new Date('2017-04-04'.replace(/-/g,'/')),
        member: '腾讯征信',
        product: 1,
        response_level: 2,
        count: 1300
    },
    {
        date: new Date('2017-04-04'.replace(/-/g,'/')),
        member: '腾讯征信',
        product: 1,
        response_level: 3,
        count: 1700
    },
    {
        date: new Date('2017-04-04'.replace(/-/g,'/')),
        member: '腾讯征信',
        product: 1,
        response_level: 4,
        count: 1882
    },
    {
        date: new Date('2017-04-04'.replace(/-/g,'/')),
        member: '腾讯征信',
        product: 1,
        response_level: 5,
        count: 1992
    },
    {
        date: new Date('2017-04-04'.replace(/-/g,'/')),
        member: '腾讯征信',
        product: 1,
        response_level: 6,
        count: 1256
    },
    {
        date: new Date('2017-04-04'.replace(/-/g,'/')),
        member: '腾讯征信',
        product: 1,
        response_level: 7,
        count: 1990
    },
    {
        date: new Date('2017-04-04'.replace(/-/g,'/')),
        member: '腾讯征信',
        product: 1,
        response_level: 8,
        count: 1875
    },
    {
        date: new Date('2017-04-04'.replace(/-/g,'/')),
        member: '腾讯征信',
        product: 1,
        response_level: 9,
        count: 1379
    },
    {
        date: new Date('2017-04-04'.replace(/-/g,'/')),
        member: '腾讯征信',
        product: 1,
        response_level: 10,
        count: 11973
    },
    {
        date: new Date('2017-04-04'.replace(/-/g,'/')),
        member: '腾讯征信',
        product: 1,
        response_level: 11,
        count: 1973
    },
    {
        date: new Date('2017-04-04'.replace(/-/g,'/')),
        member: '腾讯征信',
        product: 2,
        response_level: 1,
        count: 1500
    },
    {
        date: new Date('2017-04-04'.replace(/-/g,'/')),
        member: '腾讯征信',
        product: 2,
        response_level: 2,
        count: 1300
    },
    {
        date: new Date('2017-04-04'.replace(/-/g,'/')),
        member: '腾讯征信',
        product: 2,
        response_level: 3,
        count: 1700
    },
    {
        date: new Date('2017-04-04'.replace(/-/g,'/')),
        member: '腾讯征信',
        product: 2,
        response_level: 4,
        count: 1882
    },
    {
        date: new Date('2017-04-04'.replace(/-/g,'/')),
        member: '腾讯征信',
        product: 2,
        response_level: 5,
        count: 1992
    },
    {
        date: new Date('2017-04-04'.replace(/-/g,'/')),
        member: '腾讯征信',
        product: 2,
        response_level: 6,
        count: 1256
    },
    {
        date: new Date('2017-04-04'.replace(/-/g,'/')),
        member: '腾讯征信',
        product: 2,
        response_level: 7,
        count: 1990
    },
    {
        date: new Date('2017-04-04'.replace(/-/g,'/')),
        member: '腾讯征信',
        product: 2,
        response_level: 8,
        count: 1875
    },
    {
        date: new Date('2017-04-04'.replace(/-/g,'/')),
        member: '腾讯征信',
        product: 2,
        response_level: 9,
        count: 1379
    },
    {
        date: new Date('2017-04-04'.replace(/-/g,'/')),
        member: '腾讯征信',
        product: 2,
        response_level: 10,
        count: 1973
    },
    {
        date: new Date('2017-04-04'.replace(/-/g,'/')),
        member: '腾讯征信',
        product: 2,
        response_level: 11,
        count: 1973
    },
    {
        date: new Date('2017-04-04'.replace(/-/g,'/')),
        member: '宝付支付有限公司',
        product: 1,
        response_level: 1,
        count: 2500
    },
    {
        date: new Date('2017-04-04'.replace(/-/g,'/')),
        member: '宝付支付有限公司',
        product: 1,
        response_level: 2,
        count: 2300
    },
    {
        date: new Date('2017-04-04'.replace(/-/g,'/')),
        member: '宝付支付有限公司',
        product: 1,
        response_level: 3,
        count: 2700
    },
    {
        date: new Date('2017-04-04'.replace(/-/g,'/')),
        member: '宝付支付有限公司',
        product: 1,
        response_level: 4,
        count: 2882
    },
    {
        date: new Date('2017-04-04'.replace(/-/g,'/')),
        member: '宝付支付有限公司',
        product: 1,
        response_level: 5,
        count: 2992
    },
    {
        date: new Date('2017-04-04'.replace(/-/g,'/')),
        member: '宝付支付有限公司',
        product: 1,
        response_level: 6,
        count: 2256
    },
    {
        date: new Date('2017-04-04'.replace(/-/g,'/')),
        member: '宝付支付有限公司',
        product: 1,
        response_level: 7,
        count: 2990
    },
    {
        date: new Date('2017-04-04'.replace(/-/g,'/')),
        member: '宝付支付有限公司',
        product: 1,
        response_level: 8,
        count: 2875
    },
    {
        date: new Date('2017-04-04'.replace(/-/g,'/')),
        member: '宝付支付有限公司',
        product: 1,
        response_level: 9,
        count: 2379
    },
    {
        date: new Date('2017-04-04'.replace(/-/g,'/')),
        member: '宝付支付有限公司',
        product: 1,
        response_level: 10,
        count: 21973
    },
    {
        date: new Date('2017-04-04'.replace(/-/g,'/')),
        member: '宝付支付有限公司',
        product: 1,
        response_level: 11,
        count: 2973
    },
    {
        date: new Date('2017-04-04'.replace(/-/g,'/')),
        member: '宝付支付有限公司',
        product: 2,
        response_level: 1,
        count: 2500
    },
    {
        date: new Date('2017-04-04'.replace(/-/g,'/')),
        member: '宝付支付有限公司',
        product: 2,
        response_level: 2,
        count: 2300
    },
    {
        date: new Date('2017-04-04'.replace(/-/g,'/')),
        member: '宝付支付有限公司',
        product: 2,
        response_level: 3,
        count: 2700
    },
    {
        date: new Date('2017-04-04'.replace(/-/g,'/')),
        member: '宝付支付有限公司',
        product: 2,
        response_level: 4,
        count: 2882
    },
    {
        date: new Date('2017-04-04'.replace(/-/g,'/')),
        member: '宝付支付有限公司',
        product: 2,
        response_level: 5,
        count: 2992
    },
    {
        date: new Date('2017-04-04'.replace(/-/g,'/')),
        member: '宝付支付有限公司',
        product: 2,
        response_level: 6,
        count: 2256
    },
    {
        date: new Date('2017-04-04'.replace(/-/g,'/')),
        member: '宝付支付有限公司',
        product: 2,
        response_level: 7,
        count: 2990
    },
    {
        date: new Date('2017-04-04'.replace(/-/g,'/')),
        member: '宝付支付有限公司',
        product: 2,
        response_level: 8,
        count: 2875
    },
    {
        date: new Date('2017-04-04'.replace(/-/g,'/')),
        member: '宝付支付有限公司',
        product: 2,
        response_level: 9,
        count: 2379
    },
    {
        date: new Date('2017-04-04'.replace(/-/g,'/')),
        member: '宝付支付有限公司',
        product: 2,
        response_level: 10,
        count: 2973
    },
    {
        date: new Date('2017-04-04'.replace(/-/g,'/')),
        member: '宝付支付有限公司',
        product: 2,
        response_level: 11,
        count: 2973
    },
    {
        date: new Date('2017-05-05'.replace(/-/g,'/')),
        member: '鹏元征信',
        product: 1,
        response_level: 1,
        count: 300
    },
    {
        date: new Date('2017-05-05'.replace(/-/g,'/')),
        member: '鹏元征信',
        product: 1,
        response_level: 2,
        count: 300
    },
    {
        date: new Date('2017-05-05'.replace(/-/g,'/')),
        member: '鹏元征信',
        product: 1,
        response_level: 3,
        count: 300
    },
    {
        date: new Date('2017-05-05'.replace(/-/g,'/')),
        member: '鹏元征信',
        product: 1,
        response_level: 4,
        count: 382
    },
    {
        date: new Date('2017-05-05'.replace(/-/g,'/')),
        member: '鹏元征信',
        product: 1,
        response_level: 5,
        count: 392
    },
    {
        date: new Date('2017-05-05'.replace(/-/g,'/')),
        member: '鹏元征信',
        product: 1,
        response_level: 6,
        count: 356
    },
    {
        date: new Date('2017-05-05'.replace(/-/g,'/')),
        member: '鹏元征信',
        product: 1,
        response_level: 7,
        count: 390
    },
    {
        date: new Date('2017-05-05'.replace(/-/g,'/')),
        member: '鹏元征信',
        product: 1,
        response_level: 8,
        count: 375
    },
    {
        date: new Date('2017-05-05'.replace(/-/g,'/')),
        member: '鹏元征信',
        product: 1,
        response_level: 9,
        count: 379
    },
    {
        date: new Date('2017-05-05'.replace(/-/g,'/')),
        member: '鹏元征信',
        product: 1,
        response_level: 10,
        count: 3973
    },
    {
        date: new Date('2017-05-05'.replace(/-/g,'/')),
        member: '鹏元征信',
        product: 1,
        response_level: 11,
        count: 373
    },
    {
        date: new Date('2017-05-05'.replace(/-/g,'/')),
        member: '鹏元征信',
        product: 2,
        response_level: 1,
        count: 300
    },
    {
        date: new Date('2017-05-05'.replace(/-/g,'/')),
        member: '鹏元征信',
        product: 2,
        response_level: 2,
        count: 300
    },
    {
        date: new Date('2017-05-05'.replace(/-/g,'/')),
        member: '鹏元征信',
        product: 2,
        response_level: 3,
        count: 300
    },
    {
        date: new Date('2017-05-05'.replace(/-/g,'/')),
        member: '鹏元征信',
        product: 2,
        response_level: 4,
        count: 382
    },
    {
        date: new Date('2017-05-05'.replace(/-/g,'/')),
        member: '鹏元征信',
        product: 2,
        response_level: 5,
        count: 392
    },
    {
        date: new Date('2017-05-05'.replace(/-/g,'/')),
        member: '鹏元征信',
        product: 2,
        response_level: 6,
        count: 356
    },
    {
        date: new Date('2017-05-05'.replace(/-/g,'/')),
        member: '鹏元征信',
        product: 2,
        response_level: 7,
        count: 390
    },
    {
        date: new Date('2017-05-05'.replace(/-/g,'/')),
        member: '鹏元征信',
        product: 2,
        response_level: 8,
        count: 375
    },
    {
        date: new Date('2017-05-05'.replace(/-/g,'/')),
        member: '鹏元征信',
        product: 2,
        response_level: 9,
        count: 379
    },
    {
        date: new Date('2017-05-05'.replace(/-/g,'/')),
        member: '鹏元征信',
        product: 2,
        response_level: 10,
        count: 373
    },
    {
        date: new Date('2017-05-05'.replace(/-/g,'/')),
        member: '鹏元征信',
        product: 2,
        response_level: 11,
        count: 373
    },
    {
        date: new Date('2017-05-05'.replace(/-/g,'/')),
        member: '腾讯征信',
        product: 1,
        response_level: 1,
        count: 3500
    },
    {
        date: new Date('2017-05-05'.replace(/-/g,'/')),
        member: '腾讯征信',
        product: 1,
        response_level: 2,
        count: 3300
    },
    {
        date: new Date('2017-05-05'.replace(/-/g,'/')),
        member: '腾讯征信',
        product: 1,
        response_level: 3,
        count: 3700
    },
    {
        date: new Date('2017-05-05'.replace(/-/g,'/')),
        member: '腾讯征信',
        product: 1,
        response_level: 4,
        count: 3882
    },
    {
        date: new Date('2017-05-05'.replace(/-/g,'/')),
        member: '腾讯征信',
        product: 1,
        response_level: 5,
        count: 3992
    },
    {
        date: new Date('2017-05-05'.replace(/-/g,'/')),
        member: '腾讯征信',
        product: 1,
        response_level: 6,
        count: 3256
    },
    {
        date: new Date('2017-05-05'.replace(/-/g,'/')),
        member: '腾讯征信',
        product: 1,
        response_level: 7,
        count: 3990
    },
    {
        date: new Date('2017-05-05'.replace(/-/g,'/')),
        member: '腾讯征信',
        product: 1,
        response_level: 8,
        count: 3875
    },
    {
        date: new Date('2017-05-05'.replace(/-/g,'/')),
        member: '腾讯征信',
        product: 1,
        response_level: 9,
        count: 3379
    },
    {
        date: new Date('2017-05-05'.replace(/-/g,'/')),
        member: '腾讯征信',
        product: 1,
        response_level: 10,
        count: 31973
    },
    {
        date: new Date('2017-05-05'.replace(/-/g,'/')),
        member: '腾讯征信',
        product: 1,
        response_level: 11,
        count: 3973
    },
    {
        date: new Date('2017-05-05'.replace(/-/g,'/')),
        member: '腾讯征信',
        product: 2,
        response_level: 1,
        count: 3500
    },
    {
        date: new Date('2017-05-05'.replace(/-/g,'/')),
        member: '腾讯征信',
        product: 2,
        response_level: 2,
        count: 3300
    },
    {
        date: new Date('2017-05-05'.replace(/-/g,'/')),
        member: '腾讯征信',
        product: 2,
        response_level: 3,
        count: 3700
    },
    {
        date: new Date('2017-05-05'.replace(/-/g,'/')),
        member: '腾讯征信',
        product: 2,
        response_level: 4,
        count: 3882
    },
    {
        date: new Date('2017-05-05'.replace(/-/g,'/')),
        member: '腾讯征信',
        product: 2,
        response_level: 5,
        count: 3992
    },
    {
        date: new Date('2017-05-05'.replace(/-/g,'/')),
        member: '腾讯征信',
        product: 2,
        response_level: 6,
        count: 3256
    },
    {
        date: new Date('2017-05-05'.replace(/-/g,'/')),
        member: '腾讯征信',
        product: 2,
        response_level: 7,
        count: 3990
    },
    {
        date: new Date('2017-05-05'.replace(/-/g,'/')),
        member: '腾讯征信',
        product: 2,
        response_level: 8,
        count: 3875
    },
    {
        date: new Date('2017-05-05'.replace(/-/g,'/')),
        member: '腾讯征信',
        product: 2,
        response_level: 9,
        count: 3379
    },
    {
        date: new Date('2017-05-05'.replace(/-/g,'/')),
        member: '腾讯征信',
        product: 2,
        response_level: 10,
        count: 3973
    },
    {
        date: new Date('2017-05-05'.replace(/-/g,'/')),
        member: '腾讯征信',
        product: 2,
        response_level: 11,
        count: 3973
    },
    {
        date: new Date('2017-05-05'.replace(/-/g,'/')),
        member: '宝付支付有限公司',
        product: 1,
        response_level: 1,
        count: 3500
    },
    {
        date: new Date('2017-05-05'.replace(/-/g,'/')),
        member: '宝付支付有限公司',
        product: 1,
        response_level: 2,
        count: 3300
    },
    {
        date: new Date('2017-05-05'.replace(/-/g,'/')),
        member: '宝付支付有限公司',
        product: 1,
        response_level: 3,
        count: 3700
    },
    {
        date: new Date('2017-05-05'.replace(/-/g,'/')),
        member: '宝付支付有限公司',
        product: 1,
        response_level: 4,
        count: 3882
    },
    {
        date: new Date('2017-05-05'.replace(/-/g,'/')),
        member: '宝付支付有限公司',
        product: 1,
        response_level: 5,
        count: 3992
    },
    {
        date: new Date('2017-05-05'.replace(/-/g,'/')),
        member: '宝付支付有限公司',
        product: 1,
        response_level: 6,
        count: 3256
    },
    {
        date: new Date('2017-05-05'.replace(/-/g,'/')),
        member: '宝付支付有限公司',
        product: 1,
        response_level: 7,
        count: 3990
    },
    {
        date: new Date('2017-05-05'.replace(/-/g,'/')),
        member: '宝付支付有限公司',
        product: 1,
        response_level: 8,
        count: 3875
    },
    {
        date: new Date('2017-05-05'.replace(/-/g,'/')),
        member: '宝付支付有限公司',
        product: 1,
        response_level: 9,
        count: 3379
    },
    {
        date: new Date('2017-05-05'.replace(/-/g,'/')),
        member: '宝付支付有限公司',
        product: 1,
        response_level: 10,
        count: 31973
    },
    {
        date: new Date('2017-05-05'.replace(/-/g,'/')),
        member: '宝付支付有限公司',
        product: 1,
        response_level: 11,
        count: 3973
    },
    {
        date: new Date('2017-05-05'.replace(/-/g,'/')),
        member: '宝付支付有限公司',
        product: 2,
        response_level: 1,
        count: 3500
    },
    {
        date: new Date('2017-05-05'.replace(/-/g,'/')),
        member: '宝付支付有限公司',
        product: 2,
        response_level: 2,
        count: 3300
    },
    {
        date: new Date('2017-05-05'.replace(/-/g,'/')),
        member: '宝付支付有限公司',
        product: 2,
        response_level: 3,
        count: 3700
    },
    {
        date: new Date('2017-05-05'.replace(/-/g,'/')),
        member: '宝付支付有限公司',
        product: 2,
        response_level: 4,
        count: 3882
    },
    {
        date: new Date('2017-05-05'.replace(/-/g,'/')),
        member: '宝付支付有限公司',
        product: 2,
        response_level: 5,
        count: 3992
    },
    {
        date: new Date('2017-05-05'.replace(/-/g,'/')),
        member: '宝付支付有限公司',
        product: 2,
        response_level: 6,
        count: 3256
    },
    {
        date: new Date('2017-05-05'.replace(/-/g,'/')),
        member: '宝付支付有限公司',
        product: 2,
        response_level: 7,
        count: 3990
    },
    {
        date: new Date('2017-05-05'.replace(/-/g,'/')),
        member: '宝付支付有限公司',
        product: 2,
        response_level: 8,
        count: 3875
    },
    {
        date: new Date('2017-05-05'.replace(/-/g,'/')),
        member: '宝付支付有限公司',
        product: 2,
        response_level: 9,
        count: 3379
    },
    {
        date: new Date('2017-05-05'.replace(/-/g,'/')),
        member: '宝付支付有限公司',
        product: 2,
        response_level: 10,
        count: 3973
    },
    {
        date: new Date('2017-05-05'.replace(/-/g,'/')),
        member: '宝付支付有限公司',
        product: 2,
        response_level: 11,
        count: 3973
    },
    {
        date: new Date('2017-06-06'.replace(/-/g,'/')),
        member: '鹏元征信',
        product: 1,
        response_level: 1,
        count: 600
    },
    {
        date: new Date('2017-06-06'.replace(/-/g,'/')),
        member: '鹏元征信',
        product: 1,
        response_level: 2,
        count: 600
    },
    {
        date: new Date('2017-06-06'.replace(/-/g,'/')),
        member: '鹏元征信',
        product: 1,
        response_level: 3,
        count: 600
    },
    {
        date: new Date('2017-06-06'.replace(/-/g,'/')),
        member: '鹏元征信',
        product: 1,
        response_level: 4,
        count: 682
    },
    {
        date: new Date('2017-06-06'.replace(/-/g,'/')),
        member: '鹏元征信',
        product: 1,
        response_level: 5,
        count: 692
    },
    {
        date: new Date('2017-06-06'.replace(/-/g,'/')),
        member: '鹏元征信',
        product: 1,
        response_level: 6,
        count: 656
    },
    {
        date: new Date('2017-06-06'.replace(/-/g,'/')),
        member: '鹏元征信',
        product: 1,
        response_level: 7,
        count: 690
    },
    {
        date: new Date('2017-06-06'.replace(/-/g,'/')),
        member: '鹏元征信',
        product: 1,
        response_level: 8,
        count: 675
    },
    {
        date: new Date('2017-06-06'.replace(/-/g,'/')),
        member: '鹏元征信',
        product: 1,
        response_level: 9,
        count: 679
    },
    {
        date: new Date('2017-06-06'.replace(/-/g,'/')),
        member: '鹏元征信',
        product: 1,
        response_level: 10,
        count: 6973
    },
    {
        date: new Date('2017-06-06'.replace(/-/g,'/')),
        member: '鹏元征信',
        product: 1,
        response_level: 11,
        count: 673
    },
    {
        date: new Date('2017-06-06'.replace(/-/g,'/')),
        member: '鹏元征信',
        product: 2,
        response_level: 1,
        count: 600
    },
    {
        date: new Date('2017-06-06'.replace(/-/g,'/')),
        member: '鹏元征信',
        product: 2,
        response_level: 2,
        count: 600
    },
    {
        date: new Date('2017-06-06'.replace(/-/g,'/')),
        member: '鹏元征信',
        product: 2,
        response_level: 3,
        count: 600
    },
    {
        date: new Date('2017-06-06'.replace(/-/g,'/')),
        member: '鹏元征信',
        product: 2,
        response_level: 4,
        count: 682
    },
    {
        date: new Date('2017-06-06'.replace(/-/g,'/')),
        member: '鹏元征信',
        product: 2,
        response_level: 5,
        count: 692
    },
    {
        date: new Date('2017-06-06'.replace(/-/g,'/')),
        member: '鹏元征信',
        product: 2,
        response_level: 6,
        count: 656
    },
    {
        date: new Date('2017-06-06'.replace(/-/g,'/')),
        member: '鹏元征信',
        product: 2,
        response_level: 7,
        count: 690
    },
    {
        date: new Date('2017-06-06'.replace(/-/g,'/')),
        member: '鹏元征信',
        product: 2,
        response_level: 8,
        count: 675
    },
    {
        date: new Date('2017-06-06'.replace(/-/g,'/')),
        member: '鹏元征信',
        product: 2,
        response_level: 9,
        count: 679
    },
    {
        date: new Date('2017-06-06'.replace(/-/g,'/')),
        member: '鹏元征信',
        product: 2,
        response_level: 10,
        count: 673
    },
    {
        date: new Date('2017-06-06'.replace(/-/g,'/')),
        member: '鹏元征信',
        product: 2,
        response_level: 11,
        count: 673
    },
    {
        date: new Date('2017-06-06'.replace(/-/g,'/')),
        member: '腾讯征信',
        product: 1,
        response_level: 1,
        count: 6500
    },
    {
        date: new Date('2017-06-06'.replace(/-/g,'/')),
        member: '腾讯征信',
        product: 1,
        response_level: 2,
        count: 6300
    },
    {
        date: new Date('2017-06-06'.replace(/-/g,'/')),
        member: '腾讯征信',
        product: 1,
        response_level: 3,
        count: 6700
    },
    {
        date: new Date('2017-06-06'.replace(/-/g,'/')),
        member: '腾讯征信',
        product: 1,
        response_level: 4,
        count: 6882
    },
    {
        date: new Date('2017-06-06'.replace(/-/g,'/')),
        member: '腾讯征信',
        product: 1,
        response_level: 5,
        count: 6992
    },
    {
        date: new Date('2017-06-06'.replace(/-/g,'/')),
        member: '腾讯征信',
        product: 1,
        response_level: 6,
        count: 6256
    },
    {
        date: new Date('2017-06-06'.replace(/-/g,'/')),
        member: '腾讯征信',
        product: 1,
        response_level: 7,
        count: 6990
    },
    {
        date: new Date('2017-06-06'.replace(/-/g,'/')),
        member: '腾讯征信',
        product: 1,
        response_level: 8,
        count: 6875
    },
    {
        date: new Date('2017-06-06'.replace(/-/g,'/')),
        member: '腾讯征信',
        product: 1,
        response_level: 9,
        count: 6379
    },
    {
        date: new Date('2017-06-06'.replace(/-/g,'/')),
        member: '腾讯征信',
        product: 1,
        response_level: 10,
        count: 61973
    },
    {
        date: new Date('2017-06-06'.replace(/-/g,'/')),
        member: '腾讯征信',
        product: 1,
        response_level: 11,
        count: 6973
    },
    {
        date: new Date('2017-06-06'.replace(/-/g,'/')),
        member: '腾讯征信',
        product: 2,
        response_level: 1,
        count: 6500
    },
    {
        date: new Date('2017-06-06'.replace(/-/g,'/')),
        member: '腾讯征信',
        product: 2,
        response_level: 2,
        count: 6300
    },
    {
        date: new Date('2017-06-06'.replace(/-/g,'/')),
        member: '腾讯征信',
        product: 2,
        response_level: 3,
        count: 6700
    },
    {
        date: new Date('2017-06-06'.replace(/-/g,'/')),
        member: '腾讯征信',
        product: 2,
        response_level: 4,
        count: 6882
    },
    {
        date: new Date('2017-06-06'.replace(/-/g,'/')),
        member: '腾讯征信',
        product: 2,
        response_level: 5,
        count: 6992
    },
    {
        date: new Date('2017-06-06'.replace(/-/g,'/')),
        member: '腾讯征信',
        product: 2,
        response_level: 6,
        count: 6256
    },
    {
        date: new Date('2017-06-06'.replace(/-/g,'/')),
        member: '腾讯征信',
        product: 2,
        response_level: 7,
        count: 6990
    },
    {
        date: new Date('2017-06-06'.replace(/-/g,'/')),
        member: '腾讯征信',
        product: 2,
        response_level: 8,
        count: 6875
    },
    {
        date: new Date('2017-06-06'.replace(/-/g,'/')),
        member: '腾讯征信',
        product: 2,
        response_level: 9,
        count: 6379
    },
    {
        date: new Date('2017-06-06'.replace(/-/g,'/')),
        member: '腾讯征信',
        product: 2,
        response_level: 10,
        count: 6973
    },
    {
        date: new Date('2017-06-06'.replace(/-/g,'/')),
        member: '腾讯征信',
        product: 2,
        response_level: 11,
        count: 6973
    },
    {
        date: new Date('2017-06-06'.replace(/-/g,'/')),
        member: '宝付支付有限公司',
        product: 1,
        response_level: 1,
        count: 6500
    },
    {
        date: new Date('2017-06-06'.replace(/-/g,'/')),
        member: '宝付支付有限公司',
        product: 1,
        response_level: 2,
        count: 6300
    },
    {
        date: new Date('2017-06-06'.replace(/-/g,'/')),
        member: '宝付支付有限公司',
        product: 1,
        response_level: 3,
        count: 6700
    },
    {
        date: new Date('2017-06-06'.replace(/-/g,'/')),
        member: '宝付支付有限公司',
        product: 1,
        response_level: 4,
        count: 6882
    },
    {
        date: new Date('2017-06-06'.replace(/-/g,'/')),
        member: '宝付支付有限公司',
        product: 1,
        response_level: 5,
        count: 6992
    },
    {
        date: new Date('2017-06-06'.replace(/-/g,'/')),
        member: '宝付支付有限公司',
        product: 1,
        response_level: 6,
        count: 6256
    },
    {
        date: new Date('2017-06-06'.replace(/-/g,'/')),
        member: '宝付支付有限公司',
        product: 1,
        response_level: 7,
        count: 6990
    },
    {
        date: new Date('2017-06-06'.replace(/-/g,'/')),
        member: '宝付支付有限公司',
        product: 1,
        response_level: 8,
        count: 6875
    },
    {
        date: new Date('2017-06-06'.replace(/-/g,'/')),
        member: '宝付支付有限公司',
        product: 1,
        response_level: 9,
        count: 6379
    },
    {
        date: new Date('2017-06-06'.replace(/-/g,'/')),
        member: '宝付支付有限公司',
        product: 1,
        response_level: 10,
        count: 61973
    },
    {
        date: new Date('2017-06-06'.replace(/-/g,'/')),
        member: '宝付支付有限公司',
        product: 1,
        response_level: 11,
        count: 6973
    },
    {
        date: new Date('2017-06-06'.replace(/-/g,'/')),
        member: '宝付支付有限公司',
        product: 2,
        response_level: 1,
        count: 6500
    },
    {
        date: new Date('2017-06-06'.replace(/-/g,'/')),
        member: '宝付支付有限公司',
        product: 2,
        response_level: 2,
        count: 6300
    },
    {
        date: new Date('2017-06-06'.replace(/-/g,'/')),
        member: '宝付支付有限公司',
        product: 2,
        response_level: 3,
        count: 6700
    },
    {
        date: new Date('2017-06-06'.replace(/-/g,'/')),
        member: '宝付支付有限公司',
        product: 2,
        response_level: 4,
        count: 6882
    },
    {
        date: new Date('2017-06-06'.replace(/-/g,'/')),
        member: '宝付支付有限公司',
        product: 2,
        response_level: 5,
        count: 6992
    },
    {
        date: new Date('2017-06-06'.replace(/-/g,'/')),
        member: '宝付支付有限公司',
        product: 2,
        response_level: 6,
        count: 6256
    },
    {
        date: new Date('2017-06-06'.replace(/-/g,'/')),
        member: '宝付支付有限公司',
        product: 2,
        response_level: 7,
        count: 6990
    },
    {
        date: new Date('2017-06-06'.replace(/-/g,'/')),
        member: '宝付支付有限公司',
        product: 2,
        response_level: 8,
        count: 6875
    },
    {
        date: new Date('2017-06-06'.replace(/-/g,'/')),
        member: '宝付支付有限公司',
        product: 2,
        response_level: 9,
        count: 6379
    },
    {
        date: new Date('2017-06-06'.replace(/-/g,'/')),
        member: '宝付支付有限公司',
        product: 2,
        response_level: 10,
        count: 6973
    },
    {
        date: new Date('2017-06-06'.replace(/-/g,'/')),
        member: '宝付支付有限公司',
        product: 2,
        response_level: 11,
        count: 6973
    },
    {
        date: new Date('2017-07-07'.replace(/-/g,'/')),
        member: '鹏元征信',
        product: 1,
        response_level: 1,
        count: 600
    },
    {
        date: new Date('2017-07-07'.replace(/-/g,'/')),
        member: '鹏元征信',
        product: 1,
        response_level: 2,
        count: 600
    },
    {
        date: new Date('2017-07-07'.replace(/-/g,'/')),
        member: '鹏元征信',
        product: 1,
        response_level: 3,
        count: 600
    },
    {
        date: new Date('2017-07-07'.replace(/-/g,'/')),
        member: '鹏元征信',
        product: 1,
        response_level: 4,
        count: 682
    },
    {
        date: new Date('2017-07-07'.replace(/-/g,'/')),
        member: '鹏元征信',
        product: 1,
        response_level: 5,
        count: 692
    },
    {
        date: new Date('2017-07-07'.replace(/-/g,'/')),
        member: '鹏元征信',
        product: 1,
        response_level: 6,
        count: 656
    },
    {
        date: new Date('2017-07-07'.replace(/-/g,'/')),
        member: '鹏元征信',
        product: 1,
        response_level: 7,
        count: 690
    },
    {
        date: new Date('2017-07-07'.replace(/-/g,'/')),
        member: '鹏元征信',
        product: 1,
        response_level: 8,
        count: 675
    },
    {
        date: new Date('2017-07-07'.replace(/-/g,'/')),
        member: '鹏元征信',
        product: 1,
        response_level: 9,
        count: 679
    },
    {
        date: new Date('2017-07-07'.replace(/-/g,'/')),
        member: '鹏元征信',
        product: 1,
        response_level: 10,
        count: 6973
    },
    {
        date: new Date('2017-07-07'.replace(/-/g,'/')),
        member: '鹏元征信',
        product: 1,
        response_level: 11,
        count: 673
    },
    {
        date: new Date('2017-07-07'.replace(/-/g,'/')),
        member: '鹏元征信',
        product: 2,
        response_level: 1,
        count: 600
    },
    {
        date: new Date('2017-07-07'.replace(/-/g,'/')),
        member: '鹏元征信',
        product: 2,
        response_level: 2,
        count: 600
    },
    {
        date: new Date('2017-07-07'.replace(/-/g,'/')),
        member: '鹏元征信',
        product: 2,
        response_level: 3,
        count: 600
    },
    {
        date: new Date('2017-07-07'.replace(/-/g,'/')),
        member: '鹏元征信',
        product: 2,
        response_level: 4,
        count: 682
    },
    {
        date: new Date('2017-07-07'.replace(/-/g,'/')),
        member: '鹏元征信',
        product: 2,
        response_level: 5,
        count: 692
    },
    {
        date: new Date('2017-07-07'.replace(/-/g,'/')),
        member: '鹏元征信',
        product: 2,
        response_level: 6,
        count: 656
    },
    {
        date: new Date('2017-07-07'.replace(/-/g,'/')),
        member: '鹏元征信',
        product: 2,
        response_level: 7,
        count: 690
    },
    {
        date: new Date('2017-07-07'.replace(/-/g,'/')),
        member: '鹏元征信',
        product: 2,
        response_level: 8,
        count: 675
    },
    {
        date: new Date('2017-07-07'.replace(/-/g,'/')),
        member: '鹏元征信',
        product: 2,
        response_level: 9,
        count: 679
    },
    {
        date: new Date('2017-07-07'.replace(/-/g,'/')),
        member: '鹏元征信',
        product: 2,
        response_level: 10,
        count: 673
    },
    {
        date: new Date('2017-07-07'.replace(/-/g,'/')),
        member: '鹏元征信',
        product: 2,
        response_level: 11,
        count: 673
    },
    {
        date: new Date('2017-07-07'.replace(/-/g,'/')),
        member: '腾讯征信',
        product: 1,
        response_level: 1,
        count: 6500
    },
    {
        date: new Date('2017-07-07'.replace(/-/g,'/')),
        member: '腾讯征信',
        product: 1,
        response_level: 2,
        count: 6300
    },
    {
        date: new Date('2017-07-07'.replace(/-/g,'/')),
        member: '腾讯征信',
        product: 1,
        response_level: 3,
        count: 6700
    },
    {
        date: new Date('2017-07-07'.replace(/-/g,'/')),
        member: '腾讯征信',
        product: 1,
        response_level: 4,
        count: 6882
    },
    {
        date: new Date('2017-07-07'.replace(/-/g,'/')),
        member: '腾讯征信',
        product: 1,
        response_level: 5,
        count: 6992
    },
    {
        date: new Date('2017-07-07'.replace(/-/g,'/')),
        member: '腾讯征信',
        product: 1,
        response_level: 6,
        count: 6256
    },
    {
        date: new Date('2017-07-07'.replace(/-/g,'/')),
        member: '腾讯征信',
        product: 1,
        response_level: 7,
        count: 6990
    },
    {
        date: new Date('2017-07-07'.replace(/-/g,'/')),
        member: '腾讯征信',
        product: 1,
        response_level: 8,
        count: 6875
    },
    {
        date: new Date('2017-07-07'.replace(/-/g,'/')),
        member: '腾讯征信',
        product: 1,
        response_level: 9,
        count: 6379
    },
    {
        date: new Date('2017-07-07'.replace(/-/g,'/')),
        member: '腾讯征信',
        product: 1,
        response_level: 10,
        count: 61973
    },
    {
        date: new Date('2017-07-07'.replace(/-/g,'/')),
        member: '腾讯征信',
        product: 1,
        response_level: 11,
        count: 6973
    },
    {
        date: new Date('2017-07-07'.replace(/-/g,'/')),
        member: '腾讯征信',
        product: 2,
        response_level: 1,
        count: 6500
    },
    {
        date: new Date('2017-07-07'.replace(/-/g,'/')),
        member: '腾讯征信',
        product: 2,
        response_level: 2,
        count: 6300
    },
    {
        date: new Date('2017-07-07'.replace(/-/g,'/')),
        member: '腾讯征信',
        product: 2,
        response_level: 3,
        count: 6700
    },
    {
        date: new Date('2017-07-07'.replace(/-/g,'/')),
        member: '腾讯征信',
        product: 2,
        response_level: 4,
        count: 6882
    },
    {
        date: new Date('2017-07-07'.replace(/-/g,'/')),
        member: '腾讯征信',
        product: 2,
        response_level: 5,
        count: 6992
    },
    {
        date: new Date('2017-07-07'.replace(/-/g,'/')),
        member: '腾讯征信',
        product: 2,
        response_level: 6,
        count: 6256
    },
    {
        date: new Date('2017-07-07'.replace(/-/g,'/')),
        member: '腾讯征信',
        product: 2,
        response_level: 7,
        count: 6990
    },
    {
        date: new Date('2017-07-07'.replace(/-/g,'/')),
        member: '腾讯征信',
        product: 2,
        response_level: 8,
        count: 6875
    },
    {
        date: new Date('2017-07-07'.replace(/-/g,'/')),
        member: '腾讯征信',
        product: 2,
        response_level: 9,
        count: 6379
    },
    {
        date: new Date('2017-07-07'.replace(/-/g,'/')),
        member: '腾讯征信',
        product: 2,
        response_level: 10,
        count: 6973
    },
    {
        date: new Date('2017-07-07'.replace(/-/g,'/')),
        member: '腾讯征信',
        product: 2,
        response_level: 11,
        count: 6973
    },
    {
        date: new Date('2017-07-07'.replace(/-/g,'/')),
        member: '宝付支付有限公司',
        product: 1,
        response_level: 1,
        count: 6500
    },
    {
        date: new Date('2017-07-07'.replace(/-/g,'/')),
        member: '宝付支付有限公司',
        product: 1,
        response_level: 2,
        count: 6300
    },
    {
        date: new Date('2017-07-07'.replace(/-/g,'/')),
        member: '宝付支付有限公司',
        product: 1,
        response_level: 3,
        count: 6700
    },
    {
        date: new Date('2017-07-07'.replace(/-/g,'/')),
        member: '宝付支付有限公司',
        product: 1,
        response_level: 4,
        count: 6882
    },
    {
        date: new Date('2017-07-07'.replace(/-/g,'/')),
        member: '宝付支付有限公司',
        product: 1,
        response_level: 5,
        count: 6992
    },
    {
        date: new Date('2017-07-07'.replace(/-/g,'/')),
        member: '宝付支付有限公司',
        product: 1,
        response_level: 6,
        count: 6256
    },
    {
        date: new Date('2017-07-07'.replace(/-/g,'/')),
        member: '宝付支付有限公司',
        product: 1,
        response_level: 7,
        count: 6990
    },
    {
        date: new Date('2017-07-07'.replace(/-/g,'/')),
        member: '宝付支付有限公司',
        product: 1,
        response_level: 8,
        count: 6875
    },
    {
        date: new Date('2017-07-07'.replace(/-/g,'/')),
        member: '宝付支付有限公司',
        product: 1,
        response_level: 9,
        count: 6379
    },
    {
        date: new Date('2017-07-07'.replace(/-/g,'/')),
        member: '宝付支付有限公司',
        product: 1,
        response_level: 10,
        count: 61973
    },
    {
        date: new Date('2017-07-07'.replace(/-/g,'/')),
        member: '宝付支付有限公司',
        product: 1,
        response_level: 11,
        count: 6973
    },
    {
        date: new Date('2017-07-07'.replace(/-/g,'/')),
        member: '宝付支付有限公司',
        product: 2,
        response_level: 1,
        count: 6500
    },
    {
        date: new Date('2017-07-07'.replace(/-/g,'/')),
        member: '宝付支付有限公司',
        product: 2,
        response_level: 2,
        count: 6300
    },
    {
        date: new Date('2017-07-07'.replace(/-/g,'/')),
        member: '宝付支付有限公司',
        product: 2,
        response_level: 3,
        count: 6700
    },
    {
        date: new Date('2017-07-07'.replace(/-/g,'/')),
        member: '宝付支付有限公司',
        product: 2,
        response_level: 4,
        count: 6882
    },
    {
        date: new Date('2017-07-07'.replace(/-/g,'/')),
        member: '宝付支付有限公司',
        product: 2,
        response_level: 5,
        count: 6992
    },
    {
        date: new Date('2017-07-07'.replace(/-/g,'/')),
        member: '宝付支付有限公司',
        product: 2,
        response_level: 6,
        count: 6256
    },
    {
        date: new Date('2017-07-07'.replace(/-/g,'/')),
        member: '宝付支付有限公司',
        product: 2,
        response_level: 7,
        count: 6990
    },
    {
        date: new Date('2017-07-07'.replace(/-/g,'/')),
        member: '宝付支付有限公司',
        product: 2,
        response_level: 8,
        count: 6875
    },
    {
        date: new Date('2017-07-07'.replace(/-/g,'/')),
        member: '宝付支付有限公司',
        product: 2,
        response_level: 9,
        count: 6379
    },
    {
        date: new Date('2017-07-07'.replace(/-/g,'/')),
        member: '宝付支付有限公司',
        product: 2,
        response_level: 10,
        count: 6973
    },
    {
        date: new Date('2017-07-07'.replace(/-/g,'/')),
        member: '宝付支付有限公司',
        product: 2,
        response_level: 11,
        count: 6973
    },
];

//2.刷新商户放回时长的统计数据
export const REFRESH_IDCARD_RES_TIME_DATA = 'REFRESH_IDCARD_RES_TIME_DATA';
export const REFRESH_IDCARD_RES_TIME_DATA_SUCCESS = 'REFRESH_IDCARD_RES_TIME_DATA_SUCCESS';
export const REFRESH_IDCARD_RES_TIME_DATA_ERROR = 'REFRESH_IDCARD_RES_TIME_DATA_ERROR';



//4.reducer,这里的state只是一个局部state,在redux的store中,相当于根root.goods
export default function IdCardRepository(state = initIdCardData, action) {
    switch (action.type) {
        case REFRESH_IDCARD_RES_TIME_DATA:
            // console.log('加载loading');
            console.log('REFRESH_IDCARD_RES_TIME_DATA');
            return state;
        case REFRESH_IDCARD_RES_TIME_DATA_SUCCESS:
            console.log('REFRESH_IDCARD_RES_TIME_DATA_SUCCESS');
            //MyEcharts组件会自动检测数据的变化,数据发生变化会自动setOption
            console.log(action.payload);
            return action.payload;
        case REFRESH_IDCARD_RES_TIME_DATA_ERROR:
            console.log('REFRESH_IDCARD_RES_TIME_DATA_ERROR');
            return state;
        default:
            return state
    }
}

//5.查询方法
//5.1查询指定member柱状图所有产品的数据
//结果需要name,value的结构
//member为'',product==0,查询所有
/**
 return[
 {
     name:'2017-03-01',
     value:3225
 },
 {
     name:'2017-03-02',
     value:225
 },
 {
     name:'2017-03-03',
     value:2125
 }
 ]
 */
export function getIdCardHistogramData(state, param, product) {

    let {beginDate,endDate,memberName:member}=param;

    if (state.length == 0) {
        return [];
    }

    let filterResult = [];//第一次过滤的结果变量
    let finalResult = [];//最终结果,只存放date,count

    //1.过滤条件
    //如果product=0,则聚合所有product数据
    //如果member='',则聚合所有member数据
    filterResult = state.filter((item) => {
        if (product == 0) {
            if (!member || member == '' || member=='所有商户') {
                return beginDate <= item.date && endDate >= item.date;
            } else {
                return item.member == member && beginDate <= item.date && endDate >= item.date;
            }
        } else {
            if (!member || member == '') {
                return beginDate <= item.date && endDate >= item.date && item.product == product;
            } else {
                return item.member == member && beginDate <= item.date && endDate >= item.date && item.product == product;
            }
        }
    });

    //2.聚合数据,以字段date聚合累加到count字段
    finalResult=groupSum(filterResult,'count','date');

    //3.构造成name,value的结构
    finalResult = finalResult.map((item) => {
        item.name = item.date;
        item.value = item.count;
        return item;
    });

    return finalResult;

}


//5.2查询扇形图产品的数据
//目前没有区分product
//结果需要name,value的结构
/**
 const DATA_TOTAL = [
 {value: 335, name: '0-200'},
 {value: 2310, name: '200-400'},
 {value: 1234, name: '400-600'},
 {value: 135, name: '600-800'},
 {value: 1548, name: '1000-1300'},
 {value: 848, name: '1300-1500'},
 {value: 98, name: '1500-2000'},
 {value: 548, name: '2000-4000'},
 {value: 548, name: '4000-6000'},
 {value: 0, name: '>6000'},
 ];

 */
export function getIdCardFanChartData(state, param) {
    let {beginDate,endDate,memberName:member}=param;

    if (state.length == 0) {
        return [];
    }

    let filterResult = [];//第一次过滤的结果变量
    let finalResult = [];//最终结果,只存放date,count

    //1.过滤条件
    //如果member='',则聚合所有member数据
    filterResult = state.filter((item) => {
        if (!member || member == '' || member=='所有商户') {
            return beginDate <= item.date && endDate >= item.date;
        } else {
            return item.member == member && beginDate <= item.date && endDate >= item.date;
        }
    });

    //2.聚合数据,以字段response_level聚合累加到count字段
    finalResult=groupSum(filterResult,'count','response_level');

    //3.构造成name,value的结构
    finalResult = finalResult.map((item) => {
        let newitem={};
        newitem.name = LevelToStr[item.response_level];
        newitem.value = item.count;
        return newitem;
    });


    return finalResult;


}

/**
 * 5.3表格所需要的所有数据
 *
 * @param state
 * @param beginDate
 * @param endDate
 * @param member
 */
export function getIdCardTableData(state, param) {

    let {beginDate,endDate,memberName:member}=param;

    if (state.length == 0) {
        return [];
    }

    let filterResult = [];//第一次过滤的结果变量
    let finalResult = [];//最终结果,只存放date,count

    //1.过滤条件
    //如果member='',则聚合所有member数据
    filterResult = state.filter((item) => {
        if (!member || member == '' || member=='所有商户') {
            return beginDate <= item.date && endDate >= item.date;
        } else {
            return item.member == member && beginDate <= item.date && endDate >= item.date;
        }
    });

    //2.聚合运算
    finalResult=groupSum(filterResult,'count','member','product','response_level');

    //3.构造成对应的格式
    finalResult = finalResult.map((item) => {
        item.productStr=ProductToStr[item.product];
        item.responseLevelStr=LevelToStr[item.response_level];
        return item;
    });

    return finalResult;

}


/**
 * 5.4表格所需要的分页数据
 *
 * @param idcardTable
 * @param idCardRepository
 */
export function getIdCardTableDataByPage(IdCardRepository,currentNum,param){
    //首先获取表格的总数
    let data=getIdCardTableData(IdCardRepository,param);
    console.log('表格数据');
    console.dir(data);
    let pageMaxNum=countPageNum(data.length,pageSize);

    //返回第一页数据
    if(currentNum<=1){
        return data.slice(0,pageSize*1);
    }

    //返回最后一页数据
    if(currentNum>=pageMaxNum){
        return data.slice(pageSize*(pageMaxNum-1),data.length);
    }
    return data.slice(pageSize*(currentNum-1),pageSize*currentNum);

}



/**
 * 5.1.1获取数据源中的date组成的x轴,供柱状图使用
 * @param sourceArray
 * @returns {*}
 */
export function getIdCardHistogramXAxisArray(sourceArray ) {
    return selectFieldArray(sourceArray,'date');

}

