// На вход программе подается значение. Необходимо первоначально
// проверить является ли это значение числом. Если же введенное значение число,
// то проверить будет ли остаток от деления на 3 равен 0, если да, то вывести “Это
// число и остаток от деления на 3 равен 0”, в противном случае “Это число, но
// остаток от деления на 3 не равен 0”. Если же это не число, то вывести “Это не
// число”
let num = +prompt(`Введите число`);
if (isNaN(num) === false) {
    if (num % 3 === 0) console.log(`Это число и остаток от деления на 3 равен 0`);
    else console.log(`Это число, но остаток от деления на 3 не равен 0`);
} else console.log(`Это не число`);