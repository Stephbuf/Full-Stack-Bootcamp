const add = function(val1, val2){
    return val1 + val2;
}
const sub = function(val1, val2){
    return val1 - val2;
}

const mul = function(val1, val2){
    return val1*val2;
}
const div = function(val1, val2){
    return val1 / val2;
}

module.exports = {add, sub, mul, div}; //what makes it publicly accessible
