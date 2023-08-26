function reverseArray(array) {
    if (array.length == 0) {
        throw new Error("Empty array");
    }
    if (!Array.isArray(array)) {
        throw new Error("Argument not an array");
    }
    let newArray = [];
    for (let value of array) {
        newArray.unshift(value);
    }
    return newArray;
}

function reverseArrayInPlace(array) {
    if (!Array.isArray(array)) {
        throw new Error("Argument not an array");
    }
    if (array.length == 0) {
        throw new Error("Empty array");
    }
    let backup;
    let half = Math.floor(array.length / 2);
    for (let i = 0; i < half; i++) {
            backup = array[i];
            array[i] = array[array.length - 1 - i];
            array[array.length - 1 - i] = backup;
    } 
    return array
}

console.log(reverseArrayInPlace([1, 2, 3]))
