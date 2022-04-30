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