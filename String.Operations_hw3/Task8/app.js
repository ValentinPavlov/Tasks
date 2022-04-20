// Дана строка 'я учу javascript!'. С помощью метода split запишите каждое слово
// этой строки в отдельный элемент массива. Дана строка 'я учу javascript!'. С
// помощью метода split запишите каждый символ этой строки в отдельный
// элемент массива

const value = `Я учу javascript!`;
let ev_word = value.split(` `);
console.log(ev_word);
let ev_keyword = value.split(``);
console.log(ev_keyword);