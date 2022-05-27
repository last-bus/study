class Person {
    //属性必须初始化，在定义的时候初始化，或构造器里面初始化
    name:string = 'kaka'
    age:number
    constructor(age:number, name?:string) { //构造器
        this.age = age
        if(name){
            this.name = name
        }
    }
    
    eating(){
        console.log(this.name)
        console.log(this.age)
    }
}
const p = new Person(20,'a')
console.log(p)