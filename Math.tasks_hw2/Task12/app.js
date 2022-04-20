const a = +prompt(`Введите вещественное число A`);
const b = +prompt(`Введите вещественное число B`);
const c = +prompt(`Введите вещественное число С`);
const d = Math.sqrt((b ** 2) - 4 * a * c);
if (d > 0) {
    console.log((-b - d) / (2 * a));
    console.log((-b + d) / (2 * a));
} else if (d < 0) {
    console.log(`Нет корней`);
} else {
    console.log(x = -b / (2 * a));
}