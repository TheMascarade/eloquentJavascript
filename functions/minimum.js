function minimum(arg1, arg2){
    if (arg1 == arg2){
        return arg1;
    }
    if (arg1 < arg2){
        return arg1;
    }
    return arg2;
}

console.log(minimum(1,2));
console.log(minimum(2,1));
console.log(minimum(2,2));
