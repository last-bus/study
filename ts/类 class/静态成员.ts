// 类的静态成员可以不用通过 new出实例再访问

class Person {
  name: 'kaka'
  static age: 20 //不用通过 new出实例再访问
}

const p = new Person()
console.log(p.name)
console.log(Person.static)


