// 1
let numbers = [-4, 2, 7, 10, -8, 5, 12];
let musbetCüt = [];

for (let number of numbers) {
    if (number > 0 && number % 2 == 0) {
        musbetCut.push(number);
    }
}

console.log(musbetCüt);
// 2

let ədəd = 1;
let cəm = 0;

while (ədəd <= 100) {
    if (ədəd > 50) {
        break;
    }

    cəm = cəm + ədəd;
    ədəd++;
}

console.log(cəm);
// 3

let adlar = ["Əli", "Hüseyn", "Pərviz", "Tunar"];
let cumlə = "";

for (let ad of adlar) {
    cumlə = cumlə + ad + " ";
}

console.log(cumlə);
// 4

let heyvanlar = ["pişik", "it", "at", "dovşan" , "donuz"];

for (let heyvan of heyvanlar) {
    console.log(heyvan.toUpperCase());
}

// 5

let adlar2 = ["İlkin", "Məhəmməd", "Tunar", "Əli", "Ziya"];

for (let ad of adlar2) {
    if (ad == "Əli") {
        break;
    }

    console.log(ad);
}
// 6

for (let i = 0; i <= 5; i++) {
    if (i == 3) {
        continue;
    }

    console.log(i);
}
// 7

for (let i = 1; i <= 10; i++) {
    if (i == 7) {
        break;
    }

    console.log(i);
}