'use strict';
// Let const var və hoisting
// Example 1 
function developing() {
    let course = 'javascript';
    console.log(course);
}
// developing();

// Example 2
function person() {
    let fullName = 'Hikmat Rajabli';
}
// console.log(fullName); // Nəticə: fullName is not defined

// Example 3
let pl = ['js', 'c++', 'c#', 'php'];

function codeSchool() {
    console.log(pl);
}
// codeSchool(); // Nəticə: ['js', 'c++', 'c#', 'php']

// Example 4
let book = 'The call of the wild';
// console.log(book); // Nəticə: The call of the wild
book = 'Robin Hood';
// console.log(book); // Nəticə: Robin Hood

// Example 5
// let personName = 'Samir';
// let personName; // Nəticə: Identifier 'personName' has already been declared

// Example 6
var x = 0;
if (x == 0) {
    var y = 12;
}
// console.log(y); // Nəticə: 12

// Example 7
var job = 'front-end developer';
var job = 'back-end developer';
// console.log(job); // Nəticə: back-end developer

// Example 8 
// VAR:
var a = 1;
// console.log(a); // Nəticə: 1

if (a == 1) {
    var a = 10;
    // console.log(a); // Nəticə: 10
}

// console.log(a); // Nəticə: 10

// Example 9   
// LET:
let b = 1;
// console.log(b); // Nəticə: 1

if (b == 1) {
    let b = 10;
    // console.log(b); // Nəticə: 10
}

// console.log(b); // Nəticə: 1

// Example 10
const myAge = 22;
// console.log(myAge);

// myAge = 23;
// console.log(myAge) // Assignment to constant variable;

// Example 11 
const myArr = [1, 2, 3, 4];
myArr.pop();
// console.log(myArr); // Nəticə: [1, 2, 3]