//interface 通过接口声明对象类型
// 接口名称一般前面加一个 I
// 可以定义可选类型 ？
// 可以定义只读属性 readonly

interface IInfoType{
    readonly name: string,
    age?: number  // 可选属性

}

const info: IInfoType={
    name: 'kaka',
    age: 222
}

const info1: IInfoType={
    name: 'kaka'
}

info1.name = '2323' // 报错 readonly 只读