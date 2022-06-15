// // //Задача 1
// // Ввести строку. Проверить является ли это число или строка. 
// // Если число, то выяснить, четное или нет. Если это строка и она равна 
// // “hschool”, вывести true.
// // В противном случае false. Добавить проверки для строк

const str = `Hello, hschool!`;

let checkStr = (checkString) => {
    try {
        if (!isNaN(checkString)) {
            return 
             (checkString % 2 === 0) ? `Четное` : `Нечетное`
        } else  {
            (checkStr === `hschool`) ? true : false;
        }
    } catch (er) {
        return er
    }
}
console.log(checkStr(str));