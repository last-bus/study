// 字面量类型
// 字面量类型结合联合类型
const msg = 'hello word'

let sun: 123 = 123

type asd='left'|'right'|'top'
const a:asd = 'left'
const b:asd = 'right'
const c:asd = 'top'
const d:asd = 'boooo' //会报错


// 字面量推理
const da = {
    name: 'kaka'
} as const