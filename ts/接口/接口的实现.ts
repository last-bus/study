// 类实现接口

interface ISwim {
    swimming: () => void
}

interface IEat {
    eating: () => void
}

class Animal {

}

// 类只能继承一个，但可以实现多个接口
class Fish extends Animal implements ISwim, IEat {
    swimming() {
        console.log(1111)
    }
    eating() {

    }
}

export { }