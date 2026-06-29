// 1

let a = 24;
let b = 18;
let c = 5;
let d = 40;

a /= 2;
++a;

b *= 3;
--b;

c **= 2;
c %= 7;

d /= 4;
d += 6;

if ((a + b) > d && c < a || (a * c) > (b - d)) {
    console.log("Hüseyn döyülsün");
} else {
    console.log("Hüseyn yox , Əli döyülsün");
}
//2

let x = 9;
let y = 8;

if (x % 3 == 0 && (y % 5) < 4 && (x + y) % 2 == 1) {
    console.log("Hüseyn Əlini döysün");
}
else {
    console.log("Əli hüseyni döysün");
}