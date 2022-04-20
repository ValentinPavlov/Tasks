const a = +prompt(`Введите целое число A`);
const b = +prompt(`Введите целое число B`);
if (Number.isInteger(a, b)) {
    console.log(`${a}+${b}= ${a+b}`);
    console.log(`${a}-${b}= ${a-b}`);
    console.log(`${a}*${b}= ${a*b}`);
} else {
    console.log(`Одно или два числа не являются целыми!`);
}