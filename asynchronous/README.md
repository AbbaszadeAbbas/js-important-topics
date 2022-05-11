# Asinxron (asynchronous) [Source](./app.js)

### JS Single Thread və Synchronous dildir.

🆘 Thread - Bir iş sırasında görülən iş parçasıdır. Yəni iş zamanında çalışan bir iş parçası. Beləliklə Javascript bir single thread dildir. Çünki bir səfərdə bir kod parçasını işə salır. Aşağıda Javascriptin çalışma anının (Runtime) bəsitləşdirilmiş görüntüsü qeyd olunub.

![This is image](./img/js-heap-stack.png)

### Call stack nədir ⁉
👁‍🗨 Call stack - sadəcə olaraq proqramda olduğumuz yeri qeyd edən məlumat strukturudur. İndi gəlin işlərin yavaşladığı nöqtəyə gələk, əgər biz bir anda bir kod parçasını işlədə biliriksə, sonradan çağırılacaq funksiyalar icra olunmazdan əvvəl, öncədən çağırılan funksiyaların bitməsini gözləməliyik. Əgər kodumuz yalnız console.log və ya digər sadə əməliyyatlardan ibarətdirsə, bu problem olmaya bilər, lakin təsvirin emalı (image processing) və ya şəbəkə sorğuları (network queries) çox vaxt apara bilər. Yəni bu problem yaradar mı? Əlbəttə! Kodumuzu brauzerdə işlətdiyimiz üçün və Call stack boş olmadığı müddətcə brauzerdə edəcəyimiz heç bir şey işlənməyəcək, brauzer sözün əsl mənasında donacaq. Bunun həll yolu Asinxron proqramlaşdırmadır 👌

![This is gif](./img/callstack.gif)

### Asinxron və Sinxron nədir ⁉
👁‍🗨 Təsəvvür edək ki, bir restorana gedirik və sifariş veririk. Bizim kimi sifariş verən bir neçə nəfər də var. Amma restoran hərkəsə birdən xidmət göstərir. Yəni restoranın iş prinsipi bu deyil: 
⛔ "Bu müştəriyə tam xidmət göstərim yola salım, ona qədər bütün yeni müştərilər gözləsinlər, yola saldıqdan sonra isə gözləyənlərin birincisini seçim ona xidmət göstərim." 
✅ Restoran hərkəsə birdən xidmət göstərir. Bu asinxron çalışmadır. Yuxarıdaki iş prinsipi isə sinxron çalışmadır. Javascript kodları müəyyən ardıcıllıqla işə saldığı üçün sinxron prinsipə sahibdir. Yəni 4 sətir kod var, 2 ci sətirdə bir gecikmə yaşansa gecikmə həll olunana qədər gözlənilir. Amma asinxron iş prinsipi 2 ci sətiri gözləməz (ətraflı aşağıda qeyd olunub) digər sətirlərə keçər və sonda 2 ci sətiri çalışdırar.

### Sinxron
```
const func1 = () => {
    console.log('Birinci kod');
    console.log('İkinci kod');
    alert('Üçüncü kod');
    func2();
}

const func2 = () => {
    console.log('Dördüncü kod');
}
```

Yuxarıdakı proqramda func1() çağrıldıqda konsol sətrində ardıcıllıq belə olur:
- Birinci kod
- İkinci kod
- ALERT: Üçüncü kod (Ok basmadıqca digər sətirə keçilmir)
- Ok basdıqdan sonra: Dördüncü sətir