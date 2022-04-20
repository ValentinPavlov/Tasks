const x = +prompt('Введите целое число');
if (Number.isInteger(x)) {
    console.log(x);
    console.log(x + 1);
    console.log(x + 2);
} else {
    console.log(`Было сказано ЦЕЛОЕ ЧИСЛО ВВЕСТИ!`);
}