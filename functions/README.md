# Funksiya mövzuları

### Function declaration nədir? 
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

### Function expression nədir? 

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