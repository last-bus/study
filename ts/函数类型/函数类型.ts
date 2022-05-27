// 函数作为参数时的类型 ()=>void
function too() {
    
}

function use1(params: ()=>void) {
    
}

type FunType = ()=>void
function use2(params: FunType) {
    
}

use1(too)
use2(too)

// 定义常量

const aa = (name:string, age:number)=>{

}

const aa:(a:string,b:number)=>number = (name:string, age:number)=>{
    console.log(name)
    console.log(age)
    return age
}