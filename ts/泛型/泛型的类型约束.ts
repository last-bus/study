// 类型约束
// 继承 extends

interface ILength {
    length: number
}

function getLength<T extends ILength>(params:T) {
    return params.length
}

getLength('123')





export {}