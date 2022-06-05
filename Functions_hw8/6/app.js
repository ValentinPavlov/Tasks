// 6. На входе массив. Необходимо создать функцию проверки на то что в массиве только числа. Если результат проверки – true, 
// то передать массив в новую функцию, возвращающую массив из только четных чисел

let input = [1, 2, 3, 4, 5];

function nanCheck(set) {
    let n = 0;
    set.forEach(element => {
        (!isNaN(element)) ? n++ : null;
    });
    if (n === set.length) return evener(set);
    else return false;
}

function evener(nums) {
   return nums.filter(num => num % 2 === 0)
}
console.log(nanCheck(input));