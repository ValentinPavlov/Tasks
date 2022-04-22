// Проверить является ли слово палиндромом. 
// Если да, то вывести true, в противном случае false.
//  Аня -> false
//  Анна -> true
let input = prompt(`Введите строку`).toLowerCase().trim();
if ( input === input.split("").reverse().join("")) {
    console.log(true);
}
else {
    console.log(false);
}

