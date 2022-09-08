/** 
 * @param timestamp 要格式化的时间 默认为当前时间 
 */
export function date(timestamp: string) {
    const date = new Date(parseInt(timestamp));
    const Year = date.getFullYear();
    const Moth = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1);
    const Day = (date.getDate() < 10 ? '0' + date.getDate() : date.getDate());
    const Hour = (date.getHours() < 10 ? '0' + date.getHours() : date.getHours());
    const Minute = (date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes());
    const Sechond = (date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds());
    const GMT = Year + '/' + Moth + '/' + Day + ' ' + Hour + ':' + Minute + ':' + Sechond;

    return GMT
}


/**
 * @description 深拷贝数据方法
 * @function deepClone
 * @param obj 需要深拷贝的数据
 * @return newObj 深拷贝出来的数据
 */
export function deepClone(obj: any) {
    if (obj === null) return null; //如果数据为null
    if (obj instanceof RegExp) return new RegExp(obj); //如果数据为正则表达式
    if (obj instanceof Date) return new Date(obj); //如果数据为日期对象
    if (typeof obj !== 'object') return obj; //非复杂类型直接返回，同时也是结束递归的条件

    //[].__proto__.constructor = Array()
    //{}.__proto__.constructor = object()
    const newObj = new obj.__proto__.constructor;
    for (const key in obj) {
        newObj[key] = deepClone(obj[key])
    }
    return newObj;
}