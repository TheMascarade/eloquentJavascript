const string = "hola matias como estas hoy";

function countChar(string, char){
    let count = 0;
    for (let letter of string){
        if (letter == char){
            count++;
        }
    }
    return count
}

console.log(countChar(string, "m"))
