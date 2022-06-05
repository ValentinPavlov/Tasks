// 18 На входе есть пустой массив (он есть с самого начала).
// Первоначально мы вводим n – количество эл-ов массива. Далее
// вводим с клавиатуры сами значения (должен находиться в массиве
// хотя бы один 0) и добавляем их в конец данного массива.
// Необходимо вывести сумму всех значений массива до первого 0
// Добавить проверки на ввод чисел.

let arr = [];
let n = +prompt("Число элементов массива");
let input = 0;
let out = 0;
for (let i = 1; i <= n; i++) {
    input = +prompt(`Элемент массива ${i}`);
    if (!isNaN(input)) arr.push(input)
    else console.log(`Ошибка ввода`);
}
for (let i = 0; i < n; i++) {
    if (arr[i] !== 0) out += arr[i]
    else break
}
console.log(out);