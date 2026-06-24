// 1.
let yas = Number(prompt("Yaşınızı daxil edin:"));

if (yas > 18) {
    console.log("Sən böyüksən");
} else {
    console.log("Sən balacasan");
}


// 2.
let reqem = Number(prompt("Bir rəqəm daxil edin:"));

if (reqem > 0) {
    console.log("Müsbət rəqəmdir");
} else if (reqem < 0) {
    console.log("Mənfi rəqəmdir");
} else {
    console.log("Sıfırdır");
}


// 3.
let parol = prompt("Parolu daxil edin:");

if (parol == "12345") {
    console.log("Daxil oldun");
} else {
    console.log("Parol səhvdir");
}


// 4.
let temp = Number(prompt("Temperaturu daxil edin:"));

if (temp > 25) {
    console.log("Hava istidir");
} else if (temp >= 15) {
    console.log("Hava normaldır");
} else {
    console.log("Hava soyuqdur");
}


// 5. 
let eded = Number(prompt("Bir ədəd daxil edin:"));

if (eded % 2 == 0) {
    console.log("Cüt ədəddir");
} else {
    console.log("Tək ədəddir");
}
