function Fruit(name, color, price) {
    this.name = name;
    this.color = color;
    this.price = price;
}

let alma = new Fruit("Alma", "Yaşıl", 7);
let banan = new Fruit("Banan", "Sarı", 8);

alma.price = 3.5;

delete banan.color;

console.log(alma);
console.log(banan);

//2
function Player(name, score) {
    this.name = name;
    this.score = score;

    this.addScore = function () {
        return this.score + 10;
    };
}

let player = new Player("Tunar", 50);

console.log(player.addScore());

//3
function Car(brand, year) {
    this.brand = brand;
    this.year = year;

    this.getAge = function () {
        return new Date().getFullYear() - this.year;
    };

    this.isNew = function () {
        if (this.getAge() < 3) {
            return "Təzə maşındır";
        } else {
            return "Köhnə maşındır";
        }
    };
}

let car1 = new Car("BMW", 2025);
let car2 = new Car("Mercedes", 2018);

console.log(car1.getAge());
console.log(car1.isNew());

console.log(car2.getAge());
console.log(car2.isNew());