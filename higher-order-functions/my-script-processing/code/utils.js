const SCRIPTS = require("./scripts");

require("./scripts");

function filter(array, test){
    let passed = [];
    for (let elem of array){
        if (test(elem)){
            passed.push(elem);
        }
    }
    return passed;
}

function characterCount(script){
    return script.ranges.reduce((count, [start, end]) => {
        return count + end - start;
    }, 0)
}

function largestScript(scripts){
    return scripts.reduce((a,b) => {
        return characterCount(a) > characterCount(b)?
            a:
            b;
    })
}

function isLiving(script){
    return script.living
}

function isDead(script){
    return !script.living
}

function characterScript(charCode, scripts){
    for (let script of scripts){
        if (script.ranges.some(([start,end]) => {
            return charCode >= start && charCode < end
        })) {
            return script.name;
        }
    }
    return null;
}

function countByGroup(text, groupName, searchGroup){
    let groups = [];
    for (let charCode of text){
        let name = groupName(charCode, searchGroup);
        let index = groups.findIndex(group => group.name == name)
        if (index != -1) {
            groups[index].count ++;
        } else {
            groups.push({name, count: 1});
        }
    } 
    return groups;
}

console.log(countByGroup(
    "woof,英国的狗说",
    char => {
        let script = characterScript(char.codePointAt(0), SCRIPTS)
        return script? script : "none"},
    SCRIPTS))
