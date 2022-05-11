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