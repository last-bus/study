// ?. 可选链
// 不能赋值
type Person = {
    name: string,
    friend?:{
        name: string,
        age?: number
    }
}

let info:Person = {
    name: '213'
}


console.log(info.name)
console.log(info?.friend)

// 可选链不能赋值
info?.friend = { // 报错
    name: '112121'
}