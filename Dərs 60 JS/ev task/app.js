// 1
let reqemler = [2, 4, 6, 8, 10];

let hasil = reqemler.reduce((a,b) => a*b);

console.log(hasil);

// 2
let ededler = [-10, -5, -2, -8];

let kiçik = ededler.every((el) => el < 0);

console.log(kiçik);

//3
let qutu = [1, 2, 3, 4, 5];

let yeniQutu = [...qutu];

yeniQutu.reverse();

console.log( yeniQutu);
console.log( qutu);

//4
let söz = "Kompüter";

let nəticə = söz.split("").join(" ");

console.log( nəticə);

// 5
let sifre = "98765";

let tərs = sifre.split("").reverse().join("");

let kopyalamaq = [...tərs];

let ənkiçik = Math.min(...kopyalamaq);

console.log("Ən kiçik rəqəm:", ənkiçik);