// 给默认值

interface IPerson<T = string, E = number>{
    name: T,
    age?: E
}

const p:IPerson<string,number> = {
    name: 'kaka',
}

const a:IPerson = {
    name: 'kaka',
}

export {}