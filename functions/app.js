'use strict'
// Example 1
// Function declaration - Deklarativ funksiya
function ex1(num) {
    return num * num;
}
// console.log(ex1(5)); // => 25

// Example 2
// Hoisting in Declaration
// console.log(ex2(4)); // => 16
function ex2(num) {
    return num * num;
}

// Example 3
// Function expression
const ex3 = function(num) {
        return num * num
    } // console.log(ex3(2)); // => 4

// Example 4
// Hoisting in Expression
// console.log(ex4(9)); // => Cannot access 'ex4' before initialization
const ex4 = function(num) {
    return num * num
}