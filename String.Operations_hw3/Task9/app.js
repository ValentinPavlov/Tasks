// На вход программе подается переменная date, в которой лежит дата в
// формате 'xxxx-xx-xx'. Преобразуйте эту дату в формат 'xx.xx.xxxx'.

let x = prompt(` Введите дату в формате xxxx-xx-xx`);
let datesplit = x.split(`-`);
console.log(datesplit.reverse().join(`.`));