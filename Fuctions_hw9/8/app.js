let input = +prompt();
let arr_pusher = (num) => {
    let out_arr = [];
    for (let i = 1; i <= num; i++) {
        out_arr.push(+prompt(`Введите число ${i} массива`))

    }
    return maxMin(out_arr);
}
let maxMin = (get_arr) => {
    let maxVal = 0;
    let minVal = get_arr[0];
    get_arr.forEach(element => {
        (element > maxVal) ? maxVal = element: null;
        (element < minVal) ? minVal = element: null;
    });
    return `Максимальное значение ${maxVal}, Минимальное значение ${minVal}`;
}
console.log(arr_pusher(input));