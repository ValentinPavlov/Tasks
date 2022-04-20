const xyz = +prompt(`Введите число`); //123
const x = (Math.floor(xyz / 100)); //1
const y = (Math.floor(xyz / 10)) % 10; //2
const z = xyz % 10; //3
console.log(`Сумма цифр = ${x+y+z}`);
console.log(`Произведение цифр = ${x*y*z}`);