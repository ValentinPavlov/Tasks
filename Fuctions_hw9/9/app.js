let input = +prompt(`Введите число`)

function arrfiller(n) {
    let out_array = [];
    if (!isNaN(n)) {
        for (let i = 1; i <= n; i++) {
            out_array.push(+prompt(`Введите число ${i} для массива`))
        }
        return minMax(out_array)
    } else return `Полученное значение не является числовым`
}

function minMax(set) {
    minValue = set[0]
    maxValue = set[(input)]
    get_arr.forEach(element => {
        (element > maxValue) ? maxValue = element: null;
        (element < minValue) ? minValue = element: null;
    });
    return `Максимальное значение ${maxVal}, Минимальное значение ${minVal}`;
}
console.log(arrfiller(input));