const car ={
    brand: "Ford",
    year: 2022,
    damage: "Qapısı cızıqdır"
};

delete car.damage;
console.log(car);



const student = {
    name: "Əli",
    age: 12,
    subject: "Proqramlaşdırma"
};

const keys = Object.keys(student);
const values = Object.values(student);

console.log(keys);
console.log(values);

