class Group {
    constructor(...values) {
        this.content = [];
        if (values.length != 0) {
            for (let value of values) {
                if (!this.content.includes(value)) {
                    this.content.push(value);
                }
            }
        }
    }
    has(...values) {
        if (values.length == 0){
            return false
        }
        if (values.length == 1){
            return this.content.includes(values[0])
        }
        let out = [];
        for (let value of values){
            out.push(this.content.includes(value))
        }
        return out
    }
    add(...values) {
        if (values.length != 0) {
            for (let value of values) {
                if (!this.has(value)) {
                    this.content.push(value)
                }
            }
        }
    }
    delete(...values) {
        if (values.length != 0) {
            for (let value of values) {
                if (this.has(value)) {
                    let index = this.content.indexOf(value);
                    this.content.splice(index, 1)
                }
            }
        }
    }
    isEmpty(){
        return this.content.length == 0;
    }
    size(){
        return this.content.length;
    }
}

class GroupIterator{
    constructor(group){
        if (!group instanceof Group){
            return new Error("Argument must be instance of Group");
        }
        this.done = false;
        this.group = group;
        this.currentValue;
        this.index = 0;
    }
    next(){
        if (this.index == this.group.size() || this.group.isEmpty()){
            this.done = true;
            return {done: this.done};
        }
        let value = {
            value: this.group.content[this.index],
            done: this.done
        }
        this.index++
        return value;
    }
}

Group.prototype[Symbol.iterator] = function(){
    return new GroupIterator(this)
}

let group = new Group(1, 2, 3)

for (let elem of group){
    console.log(elem)
}

let map = new Map;
map.names= "matias"

console.log(Map.prototype.hasOwnProperty("has"))
