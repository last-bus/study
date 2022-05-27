// 默认推导类型
const info ={
    name: 'kaka',
    eating: ()=>{
        console.log(this.name)
    }
}
info.eating() //  kaka


// 不明确类型
function eating() {
    console.log(this.name)
}

const info ={
    name: 'kaka',
    eating: eating
}
info.eating() //  报错

// 隐式绑定
type thisType = {name:string}
function eating(this:thisType) {
    console.log(this.name)
}

const info ={
    name: 'kaka',
    eating: eating
}
info.eating() // kaka