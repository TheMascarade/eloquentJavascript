class Matrix {
    constructor(height, width) {
        this.width = width;
        this.height = height;
        this.content = [];

        for (let x = 0; x < height; x++) {
            this.content.push([])
            for (let y = 0; y < width; y++) {
                this.content[x][y] = `value ${x},${y}`;
            }
        }
    }
    get(x, y) {
        return this.content[x][y]
    }
    set(x, y, value) {
        this.content[x][y] = value;
    }
}

class MatrixIterator {
    constructor(matrix){
        this.x = 0;
        this.y = 0;
        this.matrix = matrix;
        this.done = false;
        this.currentValue;
    }
    next(){
        if (this.y == this.matrix.height){
            this.done = true;
            return {done: this.done}
        }
        this.currentValue = this.matrix.get(this.y ,this.x);
        this.x++;
        if (this.x == this.matrix.width){
            this.y++;
            this.x = 0;
        }
        return {value: this.currentValue, done: this.done}
    }
}

Matrix.prototype[Symbol.iterator] = function (){
    return new MatrixIterator(this)
}

let matrix = new Matrix(3, 3);


for (let elem of matrix){
    console.log(elem)
}

