const x = +prompt(`Введите число`);
let result = (Number.isInteger((Math.sqrt(x)))) ? Math.sqrt(x) : (Math.sqrt(x).toFixed(2));
console.log(result);