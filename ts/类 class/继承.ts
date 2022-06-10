// super 可以调用父类方法，或构造器

class Student {
    name = 'kaka'
    age = 20
    constructor(name: string, age: number) { // 构造器
        this.name = name
        this.age = age
    }
    eating(){
        console.log(this.name)
    }
}

class Person extends Student{
    xin = 1
    constructor() { // 构造器
        super('111',222)
    }
    eating(){ // 重写父类代码
      super.eating() // 调用父类方法
        console.log(this.age)
    }
}

const p = new Person()
p.eating()

export {}