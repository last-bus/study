class Person{
  public name1 = 'kaka1' // public 公共属性，默认修饰符，所有地方可见
  private name2 = 'kaka2' // private 私有属性，仅在自身类中可见
  protected name3 = 'kaka3' // protected 受保护属性，仅在自身类或子类中可见
  
  //只读属性只能在构造器中赋值，不可以直接修改，但可以修改其中的属性
  // 和 const 一样
  readonly name4:string 
  constructor(name:string) {
    this.name4 = name
  }
  getName1(){
    console.log(this.name1)
  }
  getName2(){
    console.log(this.name2)
  }
}
class Son extends Person{
  getName3(){
    console.log(this.name3)
  }
}
const p = new Person('11')
const s = new Son('22')
console.log(p.name1)
console.log(s.name1)

p.getName1()
p.getName2()
s.getName3()

