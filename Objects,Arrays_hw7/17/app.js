// 17 На входе есть пустой массив (он есть с самого начала).
// Первоначально мы вводим n – количество эл-ов массива. Далее
// вводим с клавиатуры сами значения и добавляем их в конец
// данного массива. Необходимо вывести 2 массива: в одном только
// четные числа, в другом нечетные. Добавить проверки на ввод
// только целых чисел. Либо map, либо forEach

let arr = [];
let n = +prompt("Число элементов массива");
let chet = [];
let nechet = [];
for (let i = 1; i <= n; i++) {
    arr.push(+prompt(`Элемент массива ${i}`))
}
arr.forEach(element => {
    if(element%2>0) nechet.push(element)
    else chet.push(element)
});
console.log(chet, nechet);