/** 
 * @param {int} timestamp 要格式化的时间 默认为当前时间 
 */
export function date(timestamp) {
    var date = new Date(parseInt(timestamp));
    var Year = date.getFullYear();
    var Moth = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1);
    var Day = (date.getDate() < 10 ? '0' + date.getDate() : date.getDate());
    var Hour = (date.getHours() < 10 ? '0' + date.getHours() : date.getHours());
    var Minute = (date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes());
    var Sechond = (date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds());
    var GMT = Year + '/' + Moth + '/' + Day + ' ' + Hour + ':' + Minute + ':' + Sechond;

    return GMT
}


/**
 * @description 深拷贝数据方法
 * @function deepClone
 * @param obj 需要深拷贝的数据
 * @return newObj 深拷贝出来的数据
 */
export function deepClone(obj) {
    if (obj === null) return null; //如果数据为null
    if (obj instanceof RegExp) return new RegExp(obj); //如果数据为正则表达式
    if (obj instanceof Date) return new Date(obj); //如果数据为日期对象
    if (typeof obj === 'function') return new function(obj) {}; //如果为函数
    if (typeof obj !== 'object') return obj; //非复杂类型直接返回，同时也是结束递归的条件

    //[].__proto__.constructor = Array()
    //{}.__proto__.constructor = object()
    let newObj = new obj.__proto__.constructor;
    for (let key in obj) {
        newObj[key] = deepClone(obj[key])
    }
    return newObj;
}