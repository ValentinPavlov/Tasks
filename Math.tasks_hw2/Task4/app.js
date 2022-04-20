const x = +prompt(`Введите число`);
let result = (Number.isInteger((Math.sqrt(x)))) ? Math.sqrt(x) : Math.floor((Math.sqrt(x)));
console.log(result);