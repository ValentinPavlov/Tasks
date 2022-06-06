let input = [5, 2, 3, 4, 6, 200]

function minMax(params) {
    let max = 0,
        min = params[0];
    params.forEach(element => {
        (element > max) ? max = element: null;
        (element < min) ? min = element: null;
    });
    return `Минимальное значение ${min}, Максимальное значение ${max}`
}
console.log(minMax(input));