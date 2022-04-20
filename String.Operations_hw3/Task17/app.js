// На вход программе подается строка. Напишите программу, которая
// подсчитывает количество буквенных символов в нижнем регистре.
// Формат входных данных
// На вход программе подается строка.
// Формат выходных данных
// Программа должна вывести количество буквенных символов в нижнем
// регистре.
// Sample Input 1:
// abcABCD12345
// Sample Output 1:
// 3
let value = prompt(`abcABCD12345`).split("");
let res = 0;
for (let i = 0; i < value.length; i++) {
    if (isNaN(value[i]) == true && value[i] === value[i].toLocaleLowerCase()) {
        res += 1
    }
}
console.log(res);