// На вход программе подается строка. Преобразуйте первую букву каждого
// слова строки в верхний регистр.

// Формат входных данных
// На вход программе подаётся строка.

// Формат выходных данных
// Программа должна преобразоваться первую букву каждого слова строки в верхний регистр.

let value = prompt(`Введите фразу`);
phrase_arr = value.split(` `);
phrase_result = [];
for (let x = 0; x < phrase_arr.length; x++) {
    phrase_result.push(phrase_arr[x].charAt(0).toUpperCase() + phrase_arr[x].slice(1));
    if (x == phrase_result.length) break

}
console.log(phrase_result.join(" "));