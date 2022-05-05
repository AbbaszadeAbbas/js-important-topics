'use stirct';

// Example 1 - obyekt örnəyi
const Person = {
    name: 'Hikmat',
    surname: 'Rajabli',
    age: 22,
    birthOfYear: function() {
        return 22 - this.age;
    },
    shortInfo: function() {
        return `Hi, I'm ${this.name} ${this.surname}`;
    }
}