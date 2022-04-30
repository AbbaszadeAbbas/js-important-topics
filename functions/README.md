# Funksiya mövzuları

### Function declaration nədir ⁉
🆘 Deklarativ funksiyaları adları ilə yazırıq. Yəni bu funksiyalar anonim olmur. Məsələn:
```
function ex1(num) {
    return num * num;
}
console.log(ex1(5)); // => 25
```

✅ Deklarativ funksiyalar hoisted olur. Yəni proqramın istənilən yerində, fərqi yoxdur funksiyadan əvvəl və ya sonra funksiyanı çağırmaq olur. Məsələn:
```
console.log(ex2(4)); // => 16
function ex2(num) {
    return num*num;
}
```

### Function expression nədir ⁉

🆘 İfadə funksiyalarını bir dəyişkənə tanımlayırıq. Yəni bu funksiyalar anonim olur. Məsələn:
```
const ex3 = function(num) {
        return num * num
    } 
console.log(ex3(2)); // => 4

```

⛔ İfadə funksiyaları hoisted olmur. Yəni istənilən yerdə çağırmaq olmur. Məsələn: 
```
console.log(ex4(9)); // => Cannot access 'ex4' before initialization
const ex4 = function(num) {
    return num * num
}
```

✅ İfadə funksiyaları "FIRST CLASS FUNCTION" özəlliyi daşıyır. First class funksiyalar massiv, obyekt, funksiyanın argumenti və funksiyada əlavə bir return edilən funksiya ola bilərlər. Məsələn massivdə: 
```
const arr = [function() { return '0' }, function() { return '1' }];
console.log(arr[0](), arr[1]()); // => 0 1
```

✅ Obyektdə: 
```
const person = {
    name: 'Rajab',
    age: function() { return 22 }
 }
 console.log(person.age()); // => 22
```

✅ Funksiyada argument kimi: 
```
function yearOfBirthday(name, ageCalc) {
    return `${name}, ${ageCalc(22)}`;
}

const age = yearOfBirthday('Hikmat', function(age) { return 2022 - age });
console.log(age); // => Hikmat, 2000
```

✅ Funksiyada return edilən funksiya kimi:
```
function personOnline(num) {
    return function countPerson() {
        return num;
    }
}

console.log(personOnline(250)()); // => 250
```

👁‍🗨 Declaration və Expression qarşılaşdırması

![image](img/1.png)

### Immediately invoked function expression - IIFE nədir ⁉

🆘 Dərhal çağırılan funksiya ifadəsi səhifə yüklənərkən görmək istədiyimiz işlər üçün istifadə oluna bilər. Məsələn:
```
(function() {
    console.log('This is a IIFE');
})(); // => This is a IIFE
```