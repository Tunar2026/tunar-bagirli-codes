//1
let numbers = [12, 5, 8, -3, 19, -8, 2];
let sıfırdankiçik = numbers.find(el => el<0);
console.log(sıfırdankiçik)

//2

let books = ["Xəmsə", "Kitabi-Dədə Qorqud", "Azərbaycan nağılları", "Ölüb gedənlər", "Cırtdan"];
let əlifbasırası = books.sort((a,b) => a.localeCompare (b,'az'));
console.log(əlifbasırası)

//3

let prices = [45, 120, 8, 99, 350, 15, 75];
let böyükdənkiçiyə = [...prices].sort((a,b)=> b-a);
console.log(böyükdənkiçiyə)