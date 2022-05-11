'use strict';

// Example 1
const func1 = () => {
    console.log('Birinci kod');
    console.log('İkinci kod');
    alert('Üçüncü kod');
    func2();
}

const func2 = () => {
    console.log('Dördüncü kod');
}

// func1()

// Example 2
let x = 10;
console.log('1. X: ', x);

setTimeout(() => {
    x += 5;
}, 1000)
console.log('2. X: ', x);

x += 5;
console.log('3. X: ', x);