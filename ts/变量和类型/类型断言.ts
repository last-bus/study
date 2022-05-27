// as 类型断言

// 1.
let el = document.getElementById('id') as HTMLImageElement



// 2.
class Person {
    
}

class Student extends Person{
    studying(){

    }
}

function sayHello(params:Person) {
    (p as Student).studying()
}

const stu =  new Student()

sayHello(stu)

// 3.
const message = '123213'
const num: number = (message as any) as number


//  !  非空类型断言
function name(params?:string) {
    console.log(params.length) // 会报错
    console.log(params!.length)
}

name('aaaa')
