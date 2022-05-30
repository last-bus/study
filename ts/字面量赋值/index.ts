
interface Iperson{
    name: string,
    age: number
}

// const p:Iperson = {
//     name: '123',
//     age: 1213,
//     height: '2222' // 这里报错
// }

const info = {
    name: '123',
    age: 1213,
    height: '2222'
}


const info2 = {
    name: '123',
}

// info 引用赋值的时候，类型检测的时候,freshness 擦除多余的属性，只要符合就不报错
const p:Iperson = info
// 取不到多余的属性
p.height
// 属性不能少
const k:Iperson = info2



export {}