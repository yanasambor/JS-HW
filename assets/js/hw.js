//Индекс массы тела

let weight = +prompt ("Введите вес в кг.");
let hight = +prompt ("Введите рост в метрах");

let imt = weight/(hight**2);
imt= Math.round(imt*10)/10;

if (imt<=16) {
    alert("Выраженный дефицит массы тела");
}
if (imt>=16 && imt<=18.5) {
    alert("Недостаточная (дефицит) масса тела");
}
if (imt>=18.5 && imt<=25) {
    alert("Норма");
} 
if (imt>=25 && imt<=30){
    alert("Избыточная масса тела (предожирение)");
}
if (imt>=30 && imt<=35){
    alert("Ожирение");
}
if (imt>=35 && imt<=40){
    alert("Ожирение резкое");
}
if (imt>=40) {
    alert("Очень резкое ожирение");
}

//Высокосный год

let year = +prompt ("Введите год");

let isLeap = new Date(year, 1, 29).getMonth() === 1 ? alert("Год высокосный") : alert("Год обычный");
