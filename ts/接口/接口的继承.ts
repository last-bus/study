interface Iswim{
  swimming: ()=>void
}

interface IFly{
  flying: ()=>void
}


// extends 接口继承，支持多继承

interface IAction extends Iswim,IFly{

}


const p:IAction={
  swimming: ()=>{

  },
  flying: ()=>{

  }
}

console.log(p)

export {}