let cavab1 = prompt("Azərbaycanın paytaxtı hansıdır?");
let cavab2 = prompt("9999 * 77 neçə edir?");
let cavab3 = prompt("1 saat neçə saniyədir?");

let duzgun = 0;

if (cavab1 == "Bakı") {
    duzgun++;
}

if (cavab2 == "769.923") {
    duzgun++;
}

if (cavab3 == "3600") {
    duzgun++;
}

if (duzgun == 3) {
    document.body.style.backgroundColor = "green";
} else {
    document.body.style.backgroundColor = "red";
}

document.body.innerHTML = duzgun + "/3";