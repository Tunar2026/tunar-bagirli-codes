//1
let maşınlar = ["Mercedes", "BMW", "Audi"];

maşınlar.push("aston martin");

console.log(maşınlar);
//2
let reqemler = [10, 90, 45, 91];

reqemler.pop();

console.log(reqemler);
//3
let seherler = ["Mingəçevir", "Gəncə", "Masallı", "Laçın"];

seherler.forEach(seher => {
    console.log("Şəhər:", seher);
});
//4
let ededler = [67, 34, 1, 9];

let cem = 0;

ededler.forEach(eded => {
    cem = cem + eded;
});

console.log("Cəm:", cem);
