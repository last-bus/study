// 函数的名称相同，但参数不同的几个函数，就是函数的重载
// 函数声明
function add(a1:number,a2:number): number; // 没函数体
function add(a1:string,a2:string): string;
// 函数实现
function add(a1:any,a2:any): any{
    return a1+a2;
};

add(1,2) // number
add('1','2') // string
add('1',2) // 报错

//函数重载中，函数实现是不能被直接调用的
