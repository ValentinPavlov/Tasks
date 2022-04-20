// Задача 15
// На вход программе подается строка. Напишите программу, которая меняет
// регистр символов, другими словами замените все строчные символы
// заглавными и наоборот.
// Формат входных данных
// На вход программе подается строка.
// Формат выходных данных
// Программа должна вывести строку в соответствии с условием задачи.
// Sample Input 1:
// Swap Case
// Sample Output 1:

let stroka = prompt("Введите строку");
let stroka_arr = stroka.split("");
let res = " ";
for (let i = 0; i < stroka_arr.length; i++) {
    if (stroka_arr[i].toUpperCase() === stroka_arr[i]) {
        res += stroka_arr[i].toLowerCase()
    } else res += stroka_arr[i].toUpperCase();
}
console.log(res);