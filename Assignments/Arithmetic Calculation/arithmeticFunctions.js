// arithmeticFunctions.js

module.exports = {
    add: (a, b) => a + b,
    sub: (a, b) => a - b,
    multiply: (a, b) => a * b,
    divide: (a, b) => (b === 0 ? "Cannot divide by zero" : a / b),
};
