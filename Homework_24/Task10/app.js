// На вход подается строка, состоящая из 3 чисел, например 123
// (Гарантированно, что данное число трехзначное). Необходимо вывести сумму
// всех чисел введенного числа.
// Примечание 1: используйте счетчик. Можно изначально его создать
// равным 0
// Примечание 2: мы знаем, что число трехзначное по условию.
// Следовательно надо придумтаь как обращаться к каждому элементу числа.
// Например, к первому числу можно подобраться разделив на 100. 123 / 100 = 1.
// Остальное думаем сами :)

let nums = prompt().split("");
let summ = 0;

for (let i = 0; i < nums.length; i++) {
    if (nums.length === 3) summ = summ + Number(nums[i]);
    else {
        console.log(`Строка не является трехзначной`)
        break;
    }
    if (i === 2) console.log(summ);
}