const arrayLength = 5;

const arrayValidate = (arrayForValidate) => {
    readyArray = [];
    arrayForValidate.forEach(element => {
        (!isNaN(element)) ? readyArray.push(element): null;
    });
    if (readyArray.length === 0) throw new Error(`Длинна массива 0`);
    else return readyArray;
}

const arrayGenerate = (arrayLength) => {
    generatedArray = [];
    for (let i = 0; i < arrayLength; i++) {
        generatedArray.push(+prompt(`Введите число массива`));
    }
    return generatedArray;
}
const createNumberArray = (arrayLength) => arrayValidate(arrayGenerate(arrayLength));
console.log(createNumberArray(arrayLength));