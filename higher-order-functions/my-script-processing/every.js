function every(array, test){
    for (let element of array){
        if (!test(element)) {
            return false 
        }
    }
    return true
}

function everySome(array, test){

}

function isEven(value){
    return value % 2 == 0
}

let array = [2, 6, 4]

console.log(every(array, isEven))
