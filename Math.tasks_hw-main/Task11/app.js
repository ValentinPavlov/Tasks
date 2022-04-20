const x = +prompt(`Введите целое число`);
if (Number.isInteger(x)) {
    console.log(`Следующее за числом ${x} число: ${x+1}`);
    console.log(`Для числа ${x} предыдущее число: ${x-1}`);
} else {
    console.log(`Нужно вводить только целое число!`);
}