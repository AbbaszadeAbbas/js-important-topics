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
// console.log('1. X: ', x);

setTimeout(() => {
        x += 5;
    }, 1000)
    // console.log('2. X: ', x);

x += 5;
// console.log('3. X: ', x);

// Example 3
function firstFunc() {
    console.log('Birinci');
    secondFunc();
    console.log('Birinci təkrar');
}

function secondFunc() {
    console.log('İkinci');
    thirdFunc();
    console.log('İkinci təkrar');
}

function thirdFunc() {
    console.log('Üçüncü');
}

// firstFunc()
/*
Nəticə:
Birinci
İkinci
Üçüncü
İkinci təkrar
Birinci təkrar
*/

// Example 4
function task(message) {
    let n = 1000000000;
    while (n > 0) {
        n--;
    }
    console.log(message);
}

// console.log(1);

setTimeout(() => {
    // console.log(2);
}, 1000);

// console.log(3);
// console.log(4);

// task('Process completed!')