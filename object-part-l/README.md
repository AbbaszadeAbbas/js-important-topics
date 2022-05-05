# Obyekt 1 HİSSƏ

### Obyekt nədir ⁉
Obyekt, property və value (ad və dəyər)'dən ibarət data tipidir. Aşağıda Person obyektindəki name, surname, age, birthOfYear, shortInfo obyektin property, qarşılarındakı isə dəyərləridir:
```
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
```