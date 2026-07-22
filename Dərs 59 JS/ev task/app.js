//1
let numbers = [14, 25, 8, -3, 19, -12, 5];

let firstNegative = numbers.find(function (num) {
    return num < 0;
});

console.log(firstNegative);

//2
let fruits = ["Üzüm", "Alma", "Çiyələk", "Banan", "Ərik", "Şaftalı"];

fruits.sort(function (a, b) {
    return a.localeCompare(b, "az");
});
console.log(fruits);

// 3

let pageCounts = [120, 450, 85, 320, 600, 210];

pageCounts.sort(function (a, b) {
    return b - a;
});

console.log(pageCounts);

// 4
let validTickets = ["VIP100", "STD205", "ECO55", "BAKU2026"];

function checkTicket() {

    let code = document.getElementById("ticket").value;

    let ticket = validTickets.find(function(item) {
        return item == code;
    });

    if (ticket) {
        console.log("Bilet keçərlidir! Tədbirə daxil ola bilərsiniz.");
    } else {
        console.log("Təəssüf, keçərsiz bilet kodu!");
    }

}

//5

let employees = [["Leyla", 1500],["Tural", 2200],["Kamran", 800],["Günel", 1900],["Orxan", 1100]];

employees.sort(function(a, b) {
    return a[1] - b[1];
});

console.log(employees);

function searchEmployee() {

    let name = document.getElementById("employee").value;

    let işçi = employees.find(function(item) {
        return item[0] == name;
    });

    if (işçi) {
        console.log("İşçi tapıldı! Maaşı: " + worker[1] + " AZN");
    } else {
        console.log("Təəssüf, belə bir işçi tapılmadı.");
    }

}

//6
let studentGrades = [["Rauf", [80, 90, 70]],["Ləman", [95, 100]],["Samir", [60, 65, 70, 75]]];

studentGrades.sort(function (a, b) {

    let sum1 = 0;

    for (let i = 0; i < a[1].length; i++) {
        sum1 += a[1][i];
    }

    let avg1 = sum1 / a[1].length;

    let sum2 = 0;

    for (let i = 0; i < b[1].length; i++) {
        sum2 += b[1][i];
    }

    let avg2 = sum2 / b[1].length;

    return avg2 - avg1;

});
console.log(studentGrades);