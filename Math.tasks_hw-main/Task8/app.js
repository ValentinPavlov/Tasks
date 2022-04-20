const a = +prompt(`Введите целое число 1`);
const b = +prompt(`Введите целое число 2`);
const c = +prompt(`Введите целое число 3`);
if (Number.isInteger(a, b, c)) {
    console.log(`${a+b+c}`);
} else {
    console.log(`Одно или несколько чисел не являются целыми`);
}