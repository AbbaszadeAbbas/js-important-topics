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
codeSchool();