// На входе строка. Необходимо проверить ее. Если это число, то ошибка
// ввода. Если это строка, то взять ее в большой регитср, убрать лишние пробелы,
// узнать длину строки
let input = prompt(`Введите строку`);
if (isNaN(input) === true) console.log(`${input.trim().toUpperCase()}\n${input.length}`);
else console.log(`Ошибка ввода`);