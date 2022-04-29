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
console.log(book); // Nəticə: The call of the wild
book = 'Robin Hood';
console.log(book); // Nəticə: Robin Hood