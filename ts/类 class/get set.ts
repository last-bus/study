class Person {
  private _name = 'kaka'

  set name(newName) {
    this._name = newName
  }
  get name() {
    return this._name
  }
}

const p = new Person()
console.log(p.name);
p.name = '232'
console.log(p.name);

export { }