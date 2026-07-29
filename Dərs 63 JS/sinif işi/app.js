//1

let scores = [45, 60, 80, 30, 95];
for (const el of scores) {
    console.log(el+10);
    
}
//2

for (let i = 1; i <= 10; i++) {
    if (i % 2 == 0) {
        continue;
    }

    console.log(i);
}

//3
let fruits = ["Alma", "Banan", "Qarpız", "Gilas", "Yemiş"];
for (let i = 0; i < fruits.length; i++) {
    if (fruits[i] == "Qarpız" || fruits[i] == "Yemiş") {
        continue;
    }
    console.log(fruits[i]);
}
//4

let prices = [15, 25, 40, 0, 50, 80];
for (let t = 0; t < prices.length; t++) {
    if (prices[t] === 0) {
        break;
    }else{
        console.log(prices[t]);
    }

}