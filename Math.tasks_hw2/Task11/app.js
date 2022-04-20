const a = +prompt(`Введите число A`);
const b = +prompt(`Введите число B`);
if (Number.isInteger(a) === false && Number.isInteger(b) === false) {
    console.log((a + b) / 2);
    console.log(Math.sqrt(a * b));
    console.log((2 * a * b) / (a + b));
    console.log(Math.sqrt((a ** 2 + b ** 2) / 2));
} else {
    console.log(`Число не является вещественным`);
}