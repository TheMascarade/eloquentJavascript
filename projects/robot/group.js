class Group {
  constructor(...elems){
    this.elements = elems
  }
  add (...elems){
    if (elems.length == 0){
      return
    }
    for (let elem of elems){
      if (!this.has(elem)){
        this.elements.push(elem);
      }
    }
  }
  toAdd(...elems){
    let newGroup = new Group(...this.elements);
    if (elems.length == 0) {
      return newGroup;
    }
    for (let elem of elems){
      if (!this.has(elem)){
        newGroup.add(elem);
      }
    }
    return newGroup
  }
  has(...elems){
    if (elems.length == 1){
      return this.elements.includes(elems[0])
    }
    let result = [];
    for (let elem of elems){
      result.push(this.elements.includes(elem));
    }
    return result
  }
  delete(...elems){
    for (let elem of elems){
      let index = this.elements.indexOf(elem);
      if (index != -1){
        this.elements.splice(index,1);
      }
    }
  }
  toDelete(...elems){
    let newGroup = new Group(...this.elements);
    for (let elem of elems){
      if (newGroup.has(elem)){
        newGroup.delete(elem);
      }
    }
    return newGroup
  }
  static empty(){
    return new Group()
  }
}

let group = Group.empty();

console.log(group);

let group2 = group.toAdd(4);
group2.delete(3)
console.log(group2);

let group3 = group.toDelete(3)

console.log(group3);
