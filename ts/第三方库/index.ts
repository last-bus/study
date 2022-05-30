import axios from 'axios' // 可以直接使用

// cnpm i lodash // 不可以直接使用，报错找不到
// cnpm i @types/lodash --save-dev // 得去下载这个
// 若还是没有得自己写 .d.ts 声明文件, 自定义声明文件
import _ from 'lodash' 
// axios.get()
console.log(_.join(['12','34']))