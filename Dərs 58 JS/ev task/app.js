//1

let numbers = [7, 11, 15, 8, 19, 22, 3];

let firstEven = numbers.find(function(num){
    return num % 2 == 0;
});

console.log("Task 1:", firstEven);

//2
let cities = ["Şəki", "Bakı", "Gəncə", "Sumqayıt", "Lənkəran", "Özbəkistan"];

cities.sort(function(a,b){
    return a.localeCompare(b,"az");
});

console.log("Task 2:", cities);

//3

let ages = [12, 15, 17, 21, 14, 30, 10];

let adult = ages.find(function(age){
    return age >= 18;
});

console.log("Task 3:", adult);

// 4

let servicePrices = [250,15,80,1200,45,90,5];

servicePrices.sort(function(a,b){
    return a-b;
});

console.log("Task 4:", servicePrices);

// 5

let words = ["kitab","kompüter","ev","proqramlaşdırma","dəftər"];

words.sort(function(a,b){
    return a.length-b.length;
});

console.log("Task 5:", words);

// 6

let activePromos = ["SUMMER20","NEWYEAR","XEZRI10","BAKU2026"];

function checkPromo(){

    let code = document.getElementById("promo").value;

    let promo = activePromos.find(function(item){
        return item == code;
    });

    if(promo){
        document.getElementById("promoResult").innerHTML =
        "Promokod qəbul olundu!";
    }
    else{
        document.getElementById("promoResult").innerHTML =
        "Belə bir promokod yoxdur!";
    }

}

//7
let students = [["Aysel", 75], ["Kənan", 92], ["Nigar", 45], ["Emin", 88], ["Fərid", 60]];

let sortedStudents = [...students].sort((a, b) => b[1] - a[1]);
console.log("Balına görə azalan sırayla tələbələr:", sortedStudents);

document.getElementById("searchBtn").addEventListener("click", function () {
  let enteredName = document.getElementById("nameInput").value.trim();
  let result = document.getElementById("result2");

  let found = students.find(student => student[0].toLowerCase() === enteredName.toLowerCase());

  if (found) {
    result.textContent = "Tələbə tapıldı! Balı " + found[1];
  } else {
    result.textContent = "Təəssüf, belə bir tələbə tapılmadı.";
  }
});


//task8
let users = [["Ayan", [10, 20, 30]], ["Murad", [50, 40]], ["Nəzrin", [5, 10, 15, 20]]];
let sortedUsers = [...users].sort((a, b) => {
  let A = a[1].reduce((total, score) => total + score, 0);
  let B = b[1].reduce((total, score) => total + score, 0);
  return B - A;
});
console.log("Ümumi xala görə azalan sırayla istifadəçilər:", sortedUsers);

// Task 9

let activePins = ["1111", "5555", "9876", "1234"];

function promo() {

    let pin = document.getElementById("promocode").value;

    let result = activePins.find(function(item) {
        return item == pin;
    });

    if (result) {
        alert("Giriş uğurludur!");
    } else {
        alert("Yanlış pin-kod!");
    }

}

// Task 10

let products = [["Telefon", 1200],["Noutbuk", 2500],["Qulaqlıq", 150],["Klaviatura", 80],["Siçan", 45]];

products.sort(function(a, b) {
    return a[1] - b[1];
});

console.log(products);

function mark() {

    let name = document.getElementById("name").value;

    let product = products.find(function(item) {
        return item[0] == name;
    });

    if (product) {
        alert("Məhsul tapıldı! Qiyməti: " + product[1] + " AZN");
    } else {
        alert("Təəssüf, belə bir məhsul tapılmadı.");
    }

}