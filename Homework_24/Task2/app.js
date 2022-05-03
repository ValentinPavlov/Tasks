// На вход подается строка. Необходимо проверить является ли эта строка
// словом палиндромом. Добавить проверки

let input = prompt(`введите слово`).toLowerCase().trim().split("");
if (isNaN(input) === 'true' && input.join() === input.reverse().join()) console.log(true);
else console.log(false);