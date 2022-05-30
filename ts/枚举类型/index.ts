//枚举： 将有可能出现的值，一个个列出来，定义在一个类型中, 一般用大写

type Direction1 = 'left' | 'right' // 联合类型

enum Direction2{
    LEFT,
    RIGHT
}

function toDirection(dis:Direction2) {
    switch (dis) {
        case Direction2.LEFT:
            console.log('向左')
            break;
        case Direction2.RIGHT:
            console.log('向右')
            break;
        default:
            const foot:never = dis
            break;
    }
}

toDirection(Direction2.LEFT)
toDirection(Direction2.RIGHT)