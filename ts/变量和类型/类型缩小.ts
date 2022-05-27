// 类型缩小

type IDtype= number|string

function name(id:IDtype){
    if(typeof id === 'number'){

    }
}

// instanceof
function time1(value: string | Date) {
    if(value instanceof Date){
      console.log(value)
    }
}

class Student{
    studying(){
      console.log(111)
    }
}

class Teacher{
    studying(){
      console.log(222)
    }
}

function work(value: Student | Teacher) {
    if(value instanceof Student){
      value.studying()
    }else{
      value.studying()
    }
}
 const st = new Student()
 work(st)

// in

type Fish = {
    swim: ()=> void
}

type Dog = {
    run: ()=> void
}

function work(value:Fish|Dog){
    if('swim' in value){
      value.swim()
    }else{
        value.run()
    }
}

const dongwu:Fish={
    swim(){
        console.log(1111)
    }
}

work(dongwu)