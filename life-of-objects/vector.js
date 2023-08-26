class Vector {
    constructor(x, y) {
        if (!Number.isInteger(x) || !Number.isInteger(y)) {
            throw new Error("Arguments must be integers");
        }
        this.x = x;
        this.y = y;
        this.length = Math.sqrt(this.x**2 + this.y**2);
    }
    plus(vector) {
        if (!vector instanceof Vector) {
            throw new Error("Arguments must be Vector instances");
        }
        let x = this.x + vector.x;
        let y = this.y + vector.y;
        return new Vector(x, y)
    }
    minus(vector) {
        if (!vector instanceof Vector) {
            throw new Error("Arguments must be Vector instances");
        }
        let x = this.x - vector.x;
        let y = this.y - vector.y;
        return new Vector(x, y)
    }
}

Vector.prototype[Symbol(plus)]{

}

let vec1 = new Vector(2,3)
let vec2 = new Vector(1,1)

console.log(vec1.prototype)

console.log(vec1.length)

console.log(vec1.plus(vec2))

console.log(vec1.minus(vec2))
