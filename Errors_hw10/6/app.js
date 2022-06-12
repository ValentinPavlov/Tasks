let arrayLength = 7;

let arrayCreate = (arrayLength) => {
    readyArray = [];
    for (let i = 0; i < arrayLength; i++) {
        readyArray.push(+prompt(`Введите число массива`));
    }
    return readyArray;
}
let isNaNvalidate = (arrayForValidate) => {
    validatedArray = arrayForValidate.filter(element => !isNaN(element));
    if (validatedArray.length === arrayForValidate.length) return true;
    else throw new Error(`Массив содержит строку`);
}

let logRangeFromArray = (arrayLength) => {
    array_in = arrayCreate(arrayLength);
    array_out = [];
    if (isNaNvalidate(array_in)) {
        array_in.forEach(number => {
            (number >= 10 && number <= 100) ? array_out.push(number): null;
        })
    }
    return array_out;
}









console.log(logRangeFromArray(arrayLength));