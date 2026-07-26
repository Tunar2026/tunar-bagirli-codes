// 1
for (let i = 10; i >= 1; i--) {
    console.log(i);
}

// 2
let arr = [];

for (let i = 1; i <= 15; i++) {
    arr.push(i);
}

console.log(arr);
// 3

let array = [2, 5, 7, 10, 4];

for (let i = 0; i < 5; i++) {
    console.log(array[i] * 3);
}
// 4

let i = 1;
let cəm = 0;

while (i <= 10) {
    cəm = cəm + i;
    i++;
}

console.log(cəm);
// 5

let a = 1;

while (a <= 10) {
    console.log(a);
    a++;
}
// 6

let son = Number(prompt("Bir ədəd daxil edin"));

let b = 1;

while (b <= son) {
    console.log(b);
    b++;
}
// 7

let ededler = [10, 20, 30, 40, 50];

for (let i = 0; i < 5; i++) {
    console.log(ededler[i] * 2);
}
// 8

console.log("8-ci tapşırıq");

let pul = 0;
let gun = 0;

while (pul < 1200) {
    pul = pul + 15;
    gun++;
}

console.log("Lazım olan gün:", gun);
// 9

let massiv = [14, 7, 22, 3, 10, 15];

for (let i = 0; i < 6; i++) {

    if (massiv[i] % 2 == 0) {
        console.log("Cüt ədəd:", massiv[i]);
    } else {
        console.log("Tək ədəd:", massiv[i]);
    }

}
// 10

let km = 0;
let gunSayi = 0;

while (km < 150) {

    gunSayi++;

    if (gunSayi % 4 != 0) {
        km = km + 10;
    }

}

console.log("Hədəfə çatmaq üçün gün sayı:", gunSayi);