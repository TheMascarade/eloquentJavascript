let prim = null;

let array = [1, 2, 3, 55];

function getNode(value, prox = null) {
    return {
        value: value,
        prox: prox
    }
}

function printList(prim) {
    if (prim == null) {
        console.log("null");
    }
    let p = prim;
    let out = ``;
    while (p != null) {
        out += `${p.value} -> `;
        p = p.prox;
    }
    out += "null";
    console.log(out);
}

function prependToList(value, list) {
    let p = getNode(value, list);
    prim = p;
}

function appendToList(value, list) {
    if (list == null){
        prependToList(value);
    } else {
        let p = list;
        let q = getNode(value);
        while (p.prox != null){
            p = p.prox;
        }
        p.prox=q
    }
}

function arrayToList(array){
    if (!Array.isArray(array)){
        throw new Error("Not an array");
    }
    if (array.length == 0){
        throw new Error("Empty array");
    }
    for (let elem of array){
        appendToList(elem, prim);
    }
}

function listToArray(list){
    if (list == null){
        return []
    }
    let p = list;
    let array = [];
    while (p != null){
        array.push(p.value);
        p = p.prox;
    }
    return array;
}

function nth(index, list){
    if (list == null){
        return undefined;
    }
    let p = list;
    let count = 0;
    while (p != null && count < index){
        count ++;
        p = p.prox;
    }
    if (p == null){
        return undefined;
    }
    return p.value;
}

arrayToList(array, prim);

console.log(listToArray(prim));

printList(prim);

console.log(nth(3, prim))
