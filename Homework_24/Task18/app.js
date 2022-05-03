// Пользователь вводит значение. Начинается бесконечный цикл. Если это
// строка, то вывести ее и прекратить цикл. Если это число, то запрашивать новые
// данные, до тех пор, пока пользователь не введет строку
let value = prompt(`Введите значение`);
let checker = Infinity;
for (let index = 0; index < Infinity; index++) {
    if (isNaN(value) === false) {
        value = prompt(`Введите СТРОЧНОЕ ЗНАЧЕНИЕ`);
    } else {
        break;
    }
}
console.log(value);