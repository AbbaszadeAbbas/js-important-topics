# Obyekt 1 HİSSƏ

### Obyekt nədir ⁉
Obyekt, property və value (özəllik və dəyər)'dən ibarət data tipidir. Aşağıda Person obyektindəki name, surname, age, birthOfYear, shortInfo obyektin property, qarşılarındakı isə dəyərləridir:
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

🆘 Yuxarıdakı örnəkdə birthOfYear və shortInfo bir özəllikdir dedik. Amma ümumi olaraq obyekt içindəki funksiyalara metod deyilir. 

### This nədir ⁉

This yazıldığı yerdə hansı data tipinin içinə yazılıbsa, o data tipinin hansı data tipinin içində olduğunu göstərir. Bilirəm başınız qarışdı :D Ona görə də keçək örnəklərə. 
```
const myThis = {
    whatIsThis: function() { return this }
}
```
Yuxarıdakı örnəkdə myThis obyektinin içindəki whatIsThis metodunda this return (geriyə döndürmə) edilib. İndi mərhələ-mərhələ davam edək:
1. This yazıldığı yerdə hansı data tipinin içinə yazılıbsa => this whatIsThis metodunun içinə yazılıb
2. O data tipinin hansı data tipinin içində olduğunu göstərir => whatIsThis metodu, myThis obyektinin içinə yazılıb.
Demək, console.log(myThis.whatIsThis()) => bizə nə verəcək? 
[This is image](./img/1.jpg);
Bu qədər sadə! 