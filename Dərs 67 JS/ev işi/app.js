function Phone(model, color, price) {
    this.model = model;
    this.color = color;
    this.price = price;
}

let phone1 = new Phone("iPhone 15", "Qara", 1999.99);
let phone2 = new Phone("Samsung S26", "Ağ", 1799.99);

phone1.price = 1400;

delete phone2.color;

console.log(phone1);
console.log(phone2);

// 2

function Animal(type, name, age) {
    this.type = type;
    this.name = name;
    this.age = age;
}

let animal1 = new Animal("Pişik", "Mestan", 2);
let animal2 = new Animal("İt", "Baron", 4);

animal1.age = animal1.age + 1;

delete animal2.type;
animal2.breed = "Labrador";

console.log(animal1);
console.log(animal2);

// 3

function Gamer(nickname, level) {
    this.nickname = nickname;
    this.level = level;

    this.levelUp = function () {
        this.level = this.level + 1;
        return this.level;
    };
}

let gamer1 = new Gamer("Tunar", 5);

console.log(gamer1.levelUp());

//4

function Product(title, price) {
    this.title = title;
    this.price = price;

    this.getDiscountedPrice = function () {
        return this.price - 5;
    };
}

let product1 = new Product("Telefon", 2000);
let product2 = new Product("saat", 500);

console.log(product1.getDiscountedPrice());
console.log(product2.getDiscountedPrice());

// 5

function Computer(brand, year, ram) {
    this.brand = brand;
    this.year = year;
    this.ram = ram;

    this.getAge = function () {
        return new Date().getFullYear() - this.year;
    };

    this.checkPerformance = function () {
        if (this.ram >= 8) {
            return "Güclü kompüterdir";
        } else {
            return "Zəif kompüterdir";
        }
    };
}

let computer1 = new Computer("HP", 2022, 16);
let computer2 = new Computer("Acer", 2019, 4);

console.log(computer1.getAge());
console.log(computer1.checkPerformance());

console.log(computer2.getAge());
console.log(computer2.checkPerformance());

// 6

function Student(name, point, birthYear) {
    this.name = name;
    this.point = point;
    this.birthYear = birthYear;

    this.getAge = function () {
        return new Date().getFullYear() - this.birthYear;
    };

    this.hasPassed = function () {
        if (this.point >= 50) {
            return "Keçdi";
        } else {
            return "Kəsildi";
        }
    };
}

let student1 = new Student("Aysel", 85, 2010);
let student2 = new Student("Murad", 45, 2009);

console.log(student1.getAge());
console.log(student1.hasPassed());

console.log(student2.getAge());
console.log(student2.hasPassed());