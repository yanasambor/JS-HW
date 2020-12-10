/*Индекс массы тела

let weight = +prompt ("Введите вес в кг.");
let hight = +prompt ("Введите рост в метрах");

let imt = weight/(hight**2);
imt= Math.round(imt*10)/10;

console.log(imt);

if (imt<=16) {
    alert("Выраженный дефицит массы тела");
}
if (imt>=16 && imt<=18.5) {
    alert("Недостаточная (дефицит) масса тела");
}

if (imt>=18.5 && imt<=25) {
    alert("Норма");
} else {
    alert(`Ваш индекс массы тела ${imt}`);
}*/



let year = +prompt ("Введите год");

let isLeap = new Date(year, 1, 29).getMonth() === 1 ? alert("Год высокостный") : alert("Год обычный");
