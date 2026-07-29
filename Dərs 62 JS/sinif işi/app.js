//1
for (let i = 1; i <=50; i++) {
    if (i%5===0) {
        console.log(i);
        
    }
}

//2
let bateriya= 0;
while (bateriya<=100) {
    console.log("Bateriyanın faizi;" +bateriya + "%");
    bateriya+=10;
}

//3
let qiymetler = [100, 200, 50, 80];
for (let i = 0; i < 4; i++) {
    let yeniqiymetler = qiymetler[i]*0.9;
    console.log(yeniqiymetler);
}

//4

let qiymet = 350;
let pul = 0;
let gün = 0;

while (pul< qiymet) {
    pul+=20;
    gün++;
}
console.log("lazım olan gün sayı" +gün);

//5

let şagirdlər =  [45, 80, 32, 90, 65, 50];
for (let i = 0; i < 6; i++) {
    if (şagirdlər[i]>=50) {
        console.log("Keçdi" +şagirdlər[i])
    }else{
        console.log("kəsildi" +şagirdlər[i]);
        
    }
}