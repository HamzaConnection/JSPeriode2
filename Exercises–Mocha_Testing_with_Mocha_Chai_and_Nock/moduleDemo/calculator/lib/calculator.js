let add = function (a, b) {
    return a + b;
}

let subtract = function (a, b) {
    return a - b;
}

let multiply = function (a, b) {
    return a * b;
}

let divide = function (a, b) {
    if (b == 0) {
        throw new Error("Attempting to divide by zero!");
    }
    return a / b
}

module.exports = { add, subtract, multiply, divide };