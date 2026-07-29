// 1
let su = 0;
let gün = 0;

while (su < 100) {
    gün++;

    if (gün % 3 == 0) {
        su = su + 0;
    } else {
        su = su + 20;
    }
}

console.log("tam doldu "  +gün);

//7
let batareya = 0;
let saat = 0;

while (batareya < 100) {
    saat++;

    if (saat % 2 == 0) {
        batareya = batareya + 0;
    } else {
        batareya = batareya + 25;
    }
}

console.log("telefon " +saat+ " saata doldu");

// 3

let banan = 0;
let hərgün = 0;

while (banan < 80) {
    hərgün++;

    if (hərgün % 5 == 0) {
        banan = banan - 5;
    } else {
        banan = banan + 10;
    }
}

console.log("Vaxt " + hərgün );

// 4
let hündürlüyü = 0;
let gün2 = 0;

while (hündürlüyü < 30) {
    gün2++;

    hündürlüyü = hündürlüyü + 5;

    if (hündürlüyü < 30) {
       hündürlüyü = hündürlüyü - 2;
    }
}

console.log("Çatdı " +gün2+"-cu gün");
 //5

 for (let i = 1; i <= 5; i++) {
    let ulduz = "";

    for (let t = 1; t <= i; t++) {
        ulduz = ulduz + "*";
    }

    console.log(ulduz);
}