// 1. Ad soruşmaq

let ad = prompt("Adınızı daxil edin:");

console.log("Salam, " + ad + "!");

// 2. İki rəqəmin cəmi

let num1 = +prompt("1-ci ədəd")
let num2 = +prompt("2-ci ədəd")

console.log(num1+num2)

// 3. Yaş hesablaması

let dogumiliString = prompt("Doğum ilinizi daxil edin:");
let dogumili = Number(dogumiliString);
let yas = 2026 - dogumili;

alert("Sizin " + yas + " yaşınız var.");


// 4. Rəqəmi mətnə çevirmə

let say = 50;

let metn = String(say);

console.log("Mətnə çevrilmiş dəyər:", metn);
console.log("Dəyərin tipi:", typeof metn);

//5 Ədədi orta hesablama


let eded1 = Number(prompt("Birinci ədədi daxil edin:"));
let eded2 = Number(prompt("İkinci ədədi daxil edin:"));
let eded3 = Number(prompt("Üçüncü ədədi daxil edin:"));

let orta = (eded1 + eded2 + eded3) / 3;

alert("Ədədi orta: " + orta);

let il = +prompt("doğum ili yaz")
