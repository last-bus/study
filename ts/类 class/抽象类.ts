
// abstract 抽象
// 抽象类中的所有方法必须被子类全部实现

abstract class Shape{ //定义抽象类
  abstract getArea():number //定义抽象方法
}

class Rectangle extends Shape { // 矩形类
  private _width: number
  private _height: number
  constructor(width: number, height: number) {
    super()
    this._width = width
    this._height = height
  }
  getArea(){ // 计算面积 子类实现抽象方法
    return this._width * this._height
  }
}


class Circle extends Shape { // 圆形类
  private _r: number
  
  constructor(r: number) {
    super()
    this._r = r
  }
  getArea(){ // 计算面积 子类实现抽象方法
    return this._r * this._r * 3.14
  }
}

function makeArea(params:Shape) {
  return params.getArea()
}

const rec = new Rectangle(10,20)
const cir = new Circle(10)

console.log(makeArea(rec))
console.log(makeArea(cir))