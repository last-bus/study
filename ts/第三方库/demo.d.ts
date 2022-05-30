// declare // 声明模块
declare module 'lodash'{
    export function join(arr:any[]): void
}

// 声明变量
declare let whyArr: any[]
declare let whyName: string

// 声明函数
declare function foo(): void

// 声明类
declare class Persons{
    name: string
}

// 声明文件
declare module '*.jpg'

// 声明命名空间
declare namespace $ {
    export function ajax(seting:any): any
}