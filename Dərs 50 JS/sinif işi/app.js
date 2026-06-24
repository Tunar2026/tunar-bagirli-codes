// 1️

let eded1 = 19;
let eded2 = 29;

if (eded1 > 10 && eded2 > 10) {
    console.log("Hər iki ədəd böyükdür!");
}

// 2️ 

let hava = prompt("Hava necədir?");
let temperatur = Number(prompt("Temperatur neçə dərəcədir?"));

if (hava == "günəşlidir" && temperatur > 20) {
    console.log("Gəzintiyə çıxmaq olar");
} else {
    console.log("Gəzintiyə çıxmaq olmaz");
}

// 3️

let ədəd1 = 18;

if (ədəd1%2==0) {
    console.log("Bu müsbət cüt ədəddir!");
} else {
    console.log("Bu müsbət cüt ədəd deyil!");
}

// 4️

let yas = Number(prompt("Yaşınızı daxil edin:"));
let bilet = prompt("Biletin var?");

if ((yas > 18 || yas == 18) && bilet == "bəli") {
    console.log("Kino zalına keçid icazəlidir");
} else {
    console.log("Kino zalına keçid icazəsizdir");
}

// 5️

let parol = "Tunar077";
let tekrarParol = "Tunar077";

if (parol == tekrarParol && parol.length > 5) {
    console.log("Parol uğurla yaradıldı!");
}