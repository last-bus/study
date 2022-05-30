//interface 可以定义相同名称的类型，会自动合并
// 可以增加一些属性
interface IFoo {
    name: string
}

interface IFoo {
    age: number
}

const foot:IFoo={
    name: 'kaka',
    age: 20
}

//type 不能重名

type Ibar = {
    name: string
}
type Ibar = {
    age: string
}

export {}