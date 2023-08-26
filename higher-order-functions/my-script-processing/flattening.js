let array = [[1,2,33], [3,5,6,7], ["a", "b"]];

function flatten(array){
    return array.reduce( (out, elem) => {
        for (let value of elem){
            out.push(value)
        }
        return out
    })
}

console.log(flatten(array))
