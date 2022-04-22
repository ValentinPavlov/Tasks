// Преобразуйте первую букву строки в верхний регистр

let input = prompt(`Введите строку`);
console.log(input.charAt(0).toUpperCase()+input.slice(1));