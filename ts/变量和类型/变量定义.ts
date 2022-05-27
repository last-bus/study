/* 
类型注解
type annotation
类型注解大小写有区别
string: typeScript 中的字符串类型
String: javaScript 中的字符串包装类的类型
 */


// 1. 类型注解
let name: string = '名称'

// 2. 类型推导,会将赋值的类型，作为前面标识符的类型
let name = '名称'

// 3. number 类型不区分 整数类型 int 和 浮点型 double 统一为 ：number

let num: number = 123

// 4. 布尔值 boolean
let flag: boolean = true

// 5. 字符串 string
let name: string = '名称'

// 6. 数组 array, 一个数组里面存放的数据类型最好是相同类型的
let arr1:Array<string> = [] // 不推荐
let arr2:string[] = [] // 一般使用这种

// 7. 对象 最好使用类型推导
let obj = {
    name: '名称',
    age: 1
}

// 8. null 不使用类型推导 ！！！ 类型推导会发生错误
let n1: null = null

// 9. nudefined
let n1: nudefined = nudefined

// 10. Symbol
let s1: symbol = '1'
/* 
let info = { // 会报错，key重名
    title: 'kaka',
    title: 'kaka',
}
const title1 = Symbol('title')
const title2 = Symbol('title')

let info = { // 会报错，key重名
    [title1]: 'kaka',
    [title2]: 'kaka',
}
*/
