function range(start, end, step = 1) {
    let range = [];
    if (step < 1) {
        for (let i = start; i >= end; i += step) {
            range.push(i);
        }
    } else {
        for (let i = start; i <= end; i += step) {
            range.push(i);
        }
    }
    return range
}

function sum(range) {
    if (range.length == 0) {
        return 0;
    }
    let result = 0;
    for (let number of range) {
        result += number;
    }
    return result;
}

console.log(range(5, 2, -1))

console.log(sum(range(1, 10, 2)))
