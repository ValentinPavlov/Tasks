// Преобразуйте первую букву каждого слова строки в верхний регистр.
let input = prompt(`Введите строку`).split(" ");
let result = " "
for (let i = 0; i<input.length; i++) {
result += input[i].charAt(0).toUpperCase()+input[i].slice(1)+" ";    
}
console.log(result);