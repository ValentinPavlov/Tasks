// 7. На входе число. Необходимо создать функцию, возвращающую факториал этого числа
let input = 9;
function factorial(num) {
    let result = 1;
    for (let i = 1; i<=num; i++) {
        result *= i;
    }
    return result
}
console.log(factorial(input));