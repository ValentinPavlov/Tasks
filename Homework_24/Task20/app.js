// Напишите программу, которая считывает с клавиатуры два целых числа и
// строку. Если эта строка является обозначением одной из четырёх математических
// операций (+, -, *, /), то выведите результат применения этой операции к
// введённым ранее числам, в противном случае выведите «Неверная операция».
// Если пользователь захочет поделить на ноль, выведите текст «На ноль делить
// нельзя!».
let num1 = +prompt(`Введите число 1`);
let num2 = +prompt(`Введите число 2`);
let todo = prompt()
let example = `+-*/`;
if (todo.includes(`+`) === true) console.log(num1 + num2);
else if (todo.includes(`-`) === true) console.log(num1 - num2);
else if (todo.includes(`*`) === true) console.log(num1 * num2);
else if (todo.includes(`/`) === true) {
    if (num2 === 0) console.log(`На ноль делить нельзя!`);
    else console.log(num1 / num2);
} else console.log(`Неверная операция`);