

// 不具备通用性
// function sum(num1:number,num2:number) {
//     return num1+num2
// }

// sum(1,2)
// sum('1','2') //报错

// 泛型是将 类型参数化
// 定义参数时不决定参数类型
// 让调用者以参数的形式告知，这里的参数是什么类型的

function sum<Type>(num:Type) {
    return num
}

// 调用方式 1: 传入类型
sum<number>(1)
sum<string>('1')

// 调用方式 2: 类型推导
sum(2)