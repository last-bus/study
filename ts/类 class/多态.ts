// 多态的目的是写出更具通用性的代码

class Animal {
    run(){
      console.log('Animal')
    }
  }
  
  class Dog extends Animal {
    run(){
      console.log('Dog')
    }
  }
  
  class Fish extends Animal {
    run(){
      console.log('Fish')
    }
  }
  
  function makeAnimal(...params: Animal[]) {
    params.forEach(item=>{
      item.run()
    })
  }
  
  makeAnimal(new Dog(),new Fish())
  