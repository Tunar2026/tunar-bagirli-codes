// 1
let elementler = ["A", "B"];

elementler.unshift("X", "Y");
elementler.push("Z", "W");

console.log(elementler);

// 2
let ballar = [45, 80, 55, 90, 72, 30];

ballar.forEach((bal) => {
    console.log("Bal: " + bal);
});

// console.log("Bal: " + ballar[0]);
// console.log("Bal: " + ballar[1]);
// console.log("Bal: " + ballar[2]);
// console.log("Bal: " + ballar[3]);
// console.log("Bal: " + ballar[4]);
// console.log("Bal: " + ballar[5]);

//3
let mehsullar = ["Köynək", "Şalvar", "Papaq"];
let köhnəQiymət = [10, 20, 30];

let yeniQiymət = [];

köhnəQiymət.forEach(qiymet => {
    yeniQiymət.push(qiymet * 3);
});

console.log(yeniQiymət);

//4
let maşın = ["BMW", "Mercedes", "Lada"];
maşın.unshift("Ferrari");

console.log(maşın);

//5
let meyvə = ["Alma", "Armud", "Nar", "Kivi"];
let silinən = meyvə.shift();

console.log(silinən);

//6
let meyvələr = ["alma", "mandalin", "banan"];

meyvələr.push("nar");
meyvələr.pop();

console.log(meyvələr);

//7
let reqemler = [75, 21, 99];

reqemler.unshift(70);
reqemler.shift();

console.log(reqemler);

//8
let meyveler = ["mandalin", "qarpız", "çiyələk"];

meyveler.forEach((meyve) => {
    console.log(meyve.toUpperCase());
});

//9
let array = ["A", "B", "C"];

array.unshift("T");
array.push("Ç");
array.shift();
array.pop();
array.push("Z");

console.log(array);

//10
let rengler = ["Qırmızı", "Yaşıl", "Mavi", "Bənövşəyi"];

rengler.push("Sarı");

rengler.shift();

rengler.forEach((reng) => {
    console.log(reng);
});
