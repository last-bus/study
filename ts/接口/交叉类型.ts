//  联合类型 |
type Intype = 'left' | "reght"
type Ontype = string | number

// 交叉类型 &
type Andtype = string & number



interface Iswim{
  swimming: string
}

interface IFly{
  flying: number
}

type MyType1 = Iswim | IFly
type MyType2 = Iswim & IFly

const p1:MyType1={
  flying: 12
}

const p2:MyType2={
  flying: 33,
  swimming: '21'
}

export {}