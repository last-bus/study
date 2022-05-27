// any 类型可以赋值给任意类型
// unknown 类型只能给 unknown和any 类型

/* 
 1. any 任意类型
不想给某些变量添加具体的数据类型时使用


*/
/* 
let name: string = 'name'
name=123 // 改变类型会报错

let name: any = 'name'
name=123 // nice 不会报错
*/


/* 
2. unknown 不确定类型
*/

function str() {
    return '123'
}

function num() {
    return 123
}

let flag = true

let res: unknown

if(flag){
    res = str()
}else{
    res = num()
}


// 3. void 类型 函数没有返回值 ，一般不写
function name(params:type): void {
    
}

//4. never 类型 永远不会发生值的类型
function foo(): never {
    throw new Error("123");
}

// never 的应用场景
function handleMessage(msg:string|number) {
    switch (typeof msg) {
        case 'string':
            console.log('字符串')
            break;
        case 'number':
            console.log('字符串')
            break;
        default:
            const check: never = msg
    }
}

// 调用时传入值错误时增加类型，但没加处理时，可以预防错误
handleMessage(true)

function handleMessage(msg:string|number|boolean) {
    switch (typeof msg) {
        case 'string':
            console.log('字符串')
            break;
        case 'number':
            console.log('字符串')
            break;
        default:
            // 会报错
            const check: never = msg
    }
}

// 5. tuple 元组 多种元素的组合
let info: [string,number] = ['1',2]

// 6. 函数的参数和返回值类型
// 函数返回值类型可以不加，会自动推导
function sum(num1: number, num2:number):number {
    return num1+num2
}

//7. 匿名函数的参数补充
let str:string[]=['1','2','3']
str.forEach(element => { // element 可以根据上下文推导，可以不写类型
    
});

//8. 对象类型
function name(params:{ x:number, y: string,}) {
    
}

// 9. 可选类型 ?号代表可选类型 类似于和undefined的联合类型
function name(x:number, y?:number) {
    
}

function name(x:number, y:number|undefined) {
    
}

//10. 联合类型 | 号代表联合类型
function name(params:string|number) {
    if(typeof params === 'string'){

    }else{

    }
}