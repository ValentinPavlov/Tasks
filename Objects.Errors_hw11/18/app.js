let fibonacciLength = 9;
let fibonacci = (count) => {
try {
    if (!isNaN(count) && count>0 && Number.isInteger(count) ) {
        let fibonacci_out = [0,1];
        for (let i = 2; i<= count; i++)
        fibonacci_out.push(fibonacci_out[i-1]+fibonacci_out[i-2])
        return fibonacci_out
        }
        else throw new Error(`Введенное число не соответствует условию`)
} catch (error) {
    return error
}
} 
console.log(fibonacci(fibonacciLength));