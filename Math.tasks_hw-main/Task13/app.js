const x = +prompt(`Введите кол-во сантиметров`);

if (Number.isInteger(x) && x < 100) {
    console.log(`0 метров`);
} else if (Number.isInteger(x) && x >= 100) {
    console.log(`${Math.trunc(x/100)} метра(ов)`);
} else {
    console.log(`Число должно быть целым!`);
}