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

// Example 5
// First class function in array
const arr = [function() { return '0' }, function() { return '1' }];
// console.log(arr[0](), arr[1]()); // => 0 1

// Example 6
// First class function in object
const person = {
        name: 'Rajab',
        age: function() { return 22 }
    }
    // console.log(person.age()); // => 22

// Example 7
// First class function in function arguments
function yearOfBirthday(name, ageCalc) {
    return `${name}, ${ageCalc(22)}`;
}

const age = yearOfBirthday('Hikmat', function(age) { return 2022 - age });
// console.log(age); // => Hikmat, 2000

// Example 8
// First class function in function return
function personOnline(num) {
    return function countPerson() {
        return num;
    }
}

// console.log(personOnline(250)()); // => 250

// Example 9 
// Immediately invoked function expression - IIFE
(function() {
    console.log('This is a IIFE');
})(); // => This is a IIFE