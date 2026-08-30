let maşın = {
    brand: "BMW",
    model: "F30",
    year: 2015,
    color: "Qara",

    getCarInfo: function () {
        return `Maşın: ${this.brand},${this.model}, İl: ${this.year}, Rəng: ${this.color}`;
    }
};

console.log(maşın.getCarInfo());
//2

const student = {
    name: "Aysel",
    exam1: 85,
    exam2: 95,

    calcAverage: function () {
        return (this.exam1 + this.exam2) / 2;
    }
}

console.log(student.calcAverage()); 