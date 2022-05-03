// На вход подается строка. Необходимо вывести количество гласных
// исходной строки. Гласными являются «a», «e», «i», «o», «u». Добавить проверки на
// ввод
let input = prompt(`Введите строку`).trim().toLowerCase().split("");
let output = 0;
for (let i = 0; i <= input.length; i++) {
    if (input[i] === 'a' || input[i] === 'e' || input[i] === 'i' || input[i] === 'o' || input[i] === 'u') output += 1;
}
console.log(output);