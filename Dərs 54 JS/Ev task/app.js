// 1

function topla(a, b) {
    return a + b;
}

console.log(topla(77, 39));

// 2

function kvadrat(a) {
    return a*a;
}

console.log(kvadrat(8));

// 3

function yasYoxla(yas) {
    if (yas >= 18) {
        return "Giriş icazəlidir";
    } else {
        return "Giriş qadağandır";
    }
}

let yas = Number(prompt("Yaşını daxil et:"));
console.log(yasYoxla(yas));

// 4

function cutTek(eded) {
    if (eded % 2 == 0) {
        return "Cütdür";
    } else {
        return "Təkdir";
    }
}

console.log(cutTek(9));

// 5

function ortalama(a, b, c) {
    return (a + b + c) / 3;
}

console.log(ortalama(7, 17, 3));

// 6

function ededYoxla(eded) {
    if (eded > 0) {
        return "Müsbət ədəddir";
    } else if (eded < 0) {
        return "Mənfi ədəddir";
    } else {
        return "Sıfırdır";
    }
}

let eded = Number(prompt("Bir ədəd daxil edin:"));
console.log(ededYoxla(eded));
