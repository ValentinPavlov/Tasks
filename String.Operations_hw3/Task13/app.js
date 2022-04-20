// На вход программе подается строка, где каждое слово заканчивается “_”.
// Программа должна убрать “_” и первую букву каждого слова (помимо первого),
// преобразовать в верхний регистр.

// Формат входных данных
// На вход программе подаётся строка.

// Формат выходных данных
// Программа должна вывести текст в соответствии с условием задачи.

// Sample Input 1:
// var_test_text
// Sample Output 1:
// varTestText

let value = prompt(`Введите фразу`);
phrase_arr = value.split(`_`);
phrase_result = [];
for (let x = 0; x < phrase_arr.length; x++) {
    phrase_result.push(phrase_arr[x].charAt(0).toUpperCase() + phrase_arr[x].slice(1));
    if (x == phrase_result.length) break

}
console.log(phrase_result.join("").charAt(0).toLowerCase() + phrase_result.join("").slice(1));