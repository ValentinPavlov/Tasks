// Дана строка 'Я-учу-javascript!'. Замените все дефисы на '!' с помощью
// глобального поиска и замены.

const value = `Я-учу-javascript!`;
console.log(value.replace(/-/g, `!`));