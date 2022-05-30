
// type FunType = (name:string, age:number)=>void
// function add(name:string, fun:FunType){
//   return fun(name,2)
// }

interface FunType {
  (name: string, age: number): number
}

function add(name: string, fun: FunType) {
  return fun(name, 2)
}
