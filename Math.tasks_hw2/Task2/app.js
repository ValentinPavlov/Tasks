const a = +prompt(`Введите число 1`);
const b = +prompt(`Введите число 2`);
let result = (Number.isInteger(a/b)) ? `Делится. Результат: ${a/b}` : `Делится с остатком. Остаток: ${a%b}` ;
console.log(result);